<template>
  <section>
    <h1>{{ $options.name }}</h1>
    <div class="position-relative d-inline-block" :id="$options.name"></div>
  </section>
</template>

<script>
import p5 from "p5/lib/p5.js";

export default {
  name: "220426-fractal_trees",
  data() {
    return {
      note: `
        [Coding Challenge #14: Fractal Trees - Recursive](https://www.youtube.com/watch?v=0jjeOYMjmDU)
      `,
    };
  },
  mounted() {
    const s = (p) => {
      const parent = this.$options.name;

      let angle = p.PI / 4;
      let slider;
      let slider_resize;
      let slider_tilt;

      p.setup = () => {
        const canvas = p.createCanvas(640, 480);
        canvas.parent(parent);

        slider = p.createSlider(0, p.TWO_PI, p.PI / 7, 0.01);
        slider.parent(parent);
        slider.position(10, 10);

        slider_resize = p.createSlider(0, 0.79, 0.77, 0.01);
        slider_resize.parent(parent);
        slider_resize.position(10, 40);

        slider_tilt = p.createSlider(-2, 1, 0.9, 0.01);
        slider_tilt.parent(parent);
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
    };
    let myp5 = new p5(s);
  },
};
</script>
<style lang="scss" scoped>
</style>