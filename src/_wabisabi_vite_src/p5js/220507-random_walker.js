// info
const name = "220507-random_walker";
const note = `
[Coding Challenge #52: Random Walker](https://www.youtube.com/watch?v=l__fEY1xanY)
`;

export { name, note };

// variable
/* let speed = 0.1;

function get_speed() {
  return speed;
}
function set_speed(val) {
  speed = val;
}

export { speed, get_speed, set_speed }; */

// sketch
export default function sketch(p, parent) {
  let slider1;
  let x = 0;
  let y = 0;
  let speed = 1;

  p.setup = () => {
    const canvas = p.createCanvas(640, 480);
    canvas.parent(parent);

    slider1 = p.createSlider(0, 300, 1, 1);
    slider1.parent(parent);
    slider1.position(10, 10);
    x = p.width / 2;
    y = p.height / 2;
    p.background(0);
  };

  p.draw = () => {
    p.background(10);
    // slider
    p.push();
    p.strokeWeight(0);
    p.fill(255);
    p.text(slider1.value(), 150, 23);
    p.pop();

    speed = slider1.value();

    // walker
    p.stroke(255);
    p.strokeWeight(15);
    p.point(x, y);

    var r = p.floor(p.random(4));

    switch (r) {
      case 0:
        if (x + speed < p.width + speed) x = x + speed;
        break;
      case 1:
        if (x - speed > speed) x = x - speed;
        break;
      case 2:
        if (y + speed < p.height + speed) y = y + speed;
        break;
      case 3:
        if (y - speed > speed) y = y - speed;
        break;
    }
  };
  class Walker {
    // try: create duplicate walkers
    /* constructor(x, y) {
      this.x = x;
      this.y = y;
      // p.point(this.x, this.y);
    }
    setup() {}
    draw() {
      p.point(this.x, this.y);
    } */
  }
}
