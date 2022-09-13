<template>
  <section>
    <h1>{{ $options.name }}</h1>
    <div class="position-relative d-inline-block" :id="$options.name"></div>
  </section>
    <!-- <AsciiVideo /> -->
    <!-- <TwodRaycasting /> -->
    <!-- <CubeWave /> -->
    <!-- <FluidSimulation /> -->
    <!-- <CalendarButtonGenerator /> -->
    <!-- <CsvTable /> -->
    <!-- mdec-20211231 company data -->
    <!-- <SwiperjsYoutubeGallery /> -->
    <!-- <FullpageSmoothScrollParallax /> -->
    <!-- <CssStickyTextFullpageScrolling /> -->
    <!-- <ClockCustom /> -->
    <!-- <FractalTrees /> -->
    <!-- <VuelidatorBasic /> -->
    <!-- <PerlinNoiseTerrain /> -->
</template>

<script>
import p5 from "p5/lib/p5.js";

export default {
  name: "220504-perlin_noise_terrain",
  data() {
    return {
      note: `
      [Coding Challenge #11: 3D Terrain Generation with Perlin Noise in Processing](https://www.youtube.com/watch?v=IKB1hWWedMk)
      `,
    };
  },
  mounted() {
    const s = (p) => {
      const parent = this.$options.name;

      //   let angle = p.PI / 4;
      let slider1;
      /* let slider2;
      let slider3; */

      let cols, rows;
      let scl = 20;
      let w = 768;
      let h = 60;

      let flying = 0;

      var terrain = [];

      p.setup = () => {
        const canvas = p.createCanvas(640, 480, p.WEBGL);
        canvas.parent(parent);

        cols = w / scl;
        rows = h / scl;

        for (var x = 0; x < cols; x++) {
          terrain[x] = [];
          for (var y = 0; y < rows; y++) {
            terrain[x][y] = 0; //specify a default value for now
          }
        }

        slider1 = p.createSlider(20, scl * 60, 500, scl);
        slider1.parent(parent);
        slider1.position(10, 10);
        /* 
        slider2 = p.createSlider(0, 0.79, 0.77, 0.01);
        slider2.parent(parent);
        slider2.position(10, 40);

        slider3 = p.createSlider(-2, 1, 0.9, 0.01);
        slider3.parent(parent);
        slider3.position(10, 70); */
      };

      p.draw = () => {
        h = slider1.value();
        rows = h / scl;
        flying -= 0.1;
        var yoff = flying;
        for (var y = 0; y < rows; y++) {
          var xoff = 0;
          for (var x = 0; x < cols; x++) {
            terrain[x][y] = p.map(p.noise(xoff, yoff), 0, 1, -100, 100);
            xoff += 0.2;
          }
          yoff += 0.2;
        }

        p.background(0);
        // p.translate(0, 50);
        p.rotateX(p.PI / 2.9);
        p.fill(200, 200, 200, 80);
        p.translate(-w / 2, -h / 2);
        /* angle = slider1.value();
        p.translate(p.width / 1.618, p.height);
        p.stroke(255);
        branch(100); */
        p.stroke(200, 50);
        // p.noFill();

        p.frameRate(15);

        for (let y = 0; y < rows; y++) {
          p.beginShape(p.TRIANGLE_STRIP);
          for (let x = 0; x < cols; x++) {
            p.vertex(x * scl, y * scl, terrain[x][y]);
            p.vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
            // p.rect(x * scl, y * scl, scl, scl);
          }
          p.endShape();
        }
      };

      /* function branch(len) {
        p.line(0, 0, 0, 0 - len);
        p.translate(0, -len);
        if (len > 4) {
          p.push();
          p.rotate(angle);
          branch(len * slider2.value() * slider3.value());
          p.pop();

          p.push();
          p.rotate(-angle);
          branch(len * slider2.value());
          p.pop();
        }
      } */
    };
    let myp5 = new p5(s);
  },
};
</script>
