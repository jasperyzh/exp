/* let music;
let beat;

function preload() {
  music = loadSound("../music/thebeatles-daytripper.mp3");
}

function setup() {
  createCanvas(800, 600);

  // beats
  music.play();
  beat = new Beat(music, 0.13);
}

function draw() {
  // beat
  beat.draw();
  if (beat.detectBeat(beat.getLevel())) {
  }
}
 */
import p5 from "p5";
import "/public/p5.sound";

export default class Beat {
  constructor(soundFile, threshold = 0.11) {
    // :: Beat Detect Variables
    // how many draw loop frames before the this.beatCutoff starts to decay
    // so that another beat can be triggered.
    // frameRate() is usually around 60 frames per second,
    // so 20 fps = 3 beats per second, meaning if the song is over 180 BPM,
    // we wont respond to every beat.
    this.beatHoldFrames = 30;

    // what amplitude level can trigger a beat?
    this.beatThreshold = threshold;

    // When we have a beat, this.beatCutoff will be reset to 1.1*this.beatThreshold, and then decay
    // Level must be greater than this.beatThreshold and this.beatCutoff before the next beat can trigger.
    this.beatCutoff = 0;
    this.beatDecayRate = 0.98; // how fast does beat cutoff decay?
    this.framesSinceLastBeat = 0; // once this equals this.beatHoldFrames, this.beatCutoff starts to decay.

    this.amplitude = new p5.Amplitude();
    this.amplitude.setInput(soundFile);
    this.amplitude.smooth(0.9);
  }

  detectBeat(level) {
    if (level > this.beatCutoff && level > this.beatThreshold) {
      this.beatCutoff = level * 1.2;
      this.framesSinceLastBeat = 0;
      return true;
    } else {
      if (this.framesSinceLastBeat <= this.beatHoldFrames) {
        this.framesSinceLastBeat++;
      } else {
        this.beatCutoff *= this.beatDecayRate;
        this.beatCutoff = Math.max(this.beatCutoff, this.beatThreshold);
      }
      return false;
    }
  }

  draw() {
    this.level = this.amplitude.getLevel();
  }

  getLevel() {
    return this.level;
  }
}
