<template>
  <div class="p5js text-center">
    <h1>{{ $options.name }}</h1>
    <div :id="$options.name"></div>

    <div class="container">
      <div class="row">
        <div class="col-auto mx-auto clock-calendar">
          <p class="display-4 week m-0 text-muted"></p>
          <p class="display-1 date m-0">
            {{ calendar.year + calendar.month + calendar.date
            }}<small class="text-muted">{{ calendar.week }}</small>
          </p>
          <p class="display-1 hr">
            {{ time.hr }}<small class="text-muted">hr</small>
          </p>
          <p class="display-1 min">
            {{ time.min }}<small class="text-muted">min</small>
          </p>
          <p class="display-1 sec">
            {{ time.sec }}<small class="text-muted">sec</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import "https://cdn.jsdelivr.net/npm/p5@1.4.1/lib/p5.js";
import p5 from "p5/lib/p5.js";

export default {
  name: "220425-clock_custom",
  data() {
    return {
      note: ``,

      time: {
        hr: "__",
        min: "__",
        sec: "__",
      },
      calendar: {
        year: "__",
        month: "__",
        date: "__",
        week: "___",
      },
      week: ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
    };
  },
  mounted() {
    const s = (p) => {
      p.setup = () => {
        const canvas = p.createCanvas(640, 480);
        canvas.parent(this.$options.name);
        p.angleMode(p.DEGREES);
      };

      p.draw = () => {
        p.background(0);
        p.translate(p.width / 2, p.height / 2);
        p.rotate(-90);

        let hr = p.hour();
        let mn = p.minute();
        let sc = p.second();

        p.strokeWeight(8);
        p.stroke(255, 100, 150);
        p.noFill();
        let secondAngle = p.map(sc, 0, 60, 0, 360);
        //arc(0, 0, 300, 300, 0, secondAngle);

        p.stroke(150, 100, 255);
        let minuteAngle = p.map(mn, 0, 60, 0, 360);
        //arc(0, 0, 280, 280, 0, minuteAngle);

        p.stroke(150, 255, 100);
        let hourAngle = p.map(hr % 12, 0, 12, 0, 360);
        //arc(0, 0, 260, 260, 0, hourAngle);
        p.push();
        p.rotate(secondAngle);
        p.stroke(255, 255, 255, 200);
        p.line(0, 0, 500, 0);
        p.pop();

        p.push();
        p.rotate(minuteAngle);
        p.stroke(255, 255, 255);
        p.line(0, 0, 180, 0);
        p.pop();

        p.push();
        p.strokeWeight(12);
        p.rotate(hourAngle);
        p.stroke(255, 255, 255);
        p.line(0, 0, 100, 0);
        p.pop();

        p.stroke(255);
        p.point(0, 0);
      };
    };

    let myp5 = new p5(s);

    var timerID = setInterval(this.updateTime, 1000);
  },
  methods: {
    updateTime() {
      let cd = new Date();

      this.time = {
        hr: this.zeroPadding(cd.getHours(), 2),
        min: this.zeroPadding(cd.getMinutes(), 2),
        sec: this.zeroPadding(cd.getSeconds(), 2),
      };

      this.calendar = {
        year: this.zeroPadding(cd.getFullYear(), 2),
        month: this.zeroPadding(cd.getMonth(), 2),
        date: this.zeroPadding(cd.getDate(), 2),
        week: this.week[cd.getDay()],
      };
    },
    zeroPadding(num, digit) {
      var zero = "";
      for (var i = 0; i < digit; i++) {
        zero += "0";
      }
      return (zero + num).slice(-digit);
    },
  },
};
</script>
<style lang="scss" scoped>
.clock-calendar {
  font-family: monospace;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  small {
    position: absolute;
    bottom: 1rem;
    font-size: 2rem;
  }
  p {
    position: relative;
    display: inline-block;
  }
}
</style>