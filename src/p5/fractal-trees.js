export default function (p) {
  let angle = p.PI / 4;
  let slider;
  let slider_resize;
  let slider_tilt;

  p.setup = () => {
    p.createCanvas(640, 480);

    slider = p.createSlider(0, p.TWO_PI, p.PI / 7, 0.01);
    // slider.parent(parent);
    slider.position(10, 10);

    slider_resize = p.createSlider(0, 0.74, 0.71, 0.01);
    // slider_resize.parent(parent);
    slider_resize.position(10, 40);

    slider_tilt = p.createSlider(-2, 1, 0.9, 0.01);
    // slider_tilt.parent(parent);
    slider_tilt.position(10, 70);
  };

  p.draw = () => {
    p.background(0);
    angle = slider.value();
    p.translate(p.width / 1.618, p.height);
    p.stroke(255);
    branch(100);
  };

  function branch(len) {
    p.line(0, 0, 0, 0 - len);
    p.translate(0, -len);
    if (len > 4) {
      p.push();
      p.rotate(angle);
      branch(len * slider_resize.value() * slider_tilt.value());
      p.pop();

      p.push();
      p.rotate(-angle);
      branch(len * slider_resize.value());
      p.pop();
    }
  }
}
