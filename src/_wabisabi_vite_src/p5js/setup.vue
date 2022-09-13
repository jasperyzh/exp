<template>
  <main>
    <code class="marked">
      [getting started setup -
      p5js-overview](https://github.com/processing/p5.js/wiki/p5.js-overview)
      <br />
      [Convert images to mosaics in
      p5.js](https://dev.to/andyhaskell/convert-images-to-mosaics-in-p5js-2dlc)
    </code>
  </main>
</template>
<script>
import "https://cdn.jsdelivr.net/npm/p5@1.4.1/lib/p5.js";
import ForGuts from "../assets/for_guts.jpg";

export default {
  mounted() {
    // [Convert images to mosaics in p5.js](https://dev.to/andyhaskell/convert-images-to-mosaics-in-p5js-2dlc)
    const s = (p) => {
      let x = 100;
      let y = 100;

      let img;
      const columnWidth = (dotRadius) => dotRadius * 3;
      const numberOfColumns = (dotRadius) =>
        Math.ceil(p.width / columnWidth(dotRadius));

      let offsetX;

      p.preload = () => {
        // img = p.loadImage("../assets/logo.png");
        img = p.loadImage(ForGuts, 50, 50);
      };

      p.setup = () => {
        p.createCanvas(640, 480);
        p.noLoop();
      };

      p.draw = () => {
        p.image(img, 20, 40);

        img.resize(640, 480);

        drawMosaic(1, p.color(240, 240, 240));
      };

      function drawColumnDots(dotRadius, offsetX) {
        // [TODO] Replace the line with a column of dots
        p.line(offsetX, 0, offsetX, p.height);

        // draw dots
        let dotDiameter = 3 * dotRadius;
        let dotHeightWithPadding = dotDiameter;
        let numDotsInColumn = Math.floor(p.height / dotHeightWithPadding);

        let topY = Math.floor(p.random(13));

        for (let i = 0; i < numDotsInColumn; i++) {
          let centerX = Math.floor(
            p.random(
              offsetX + dotRadius,
              offsetX + columnWidth(dotRadius) - dotRadius
            )
          );

          //   let centerY = i * dotHeightWithPadding + dotRadius;
          let centerY = topY + i * dotHeightWithPadding + dotRadius;

          let dotColor = img.get(centerX, centerY);
          p.noStroke();
          p.fill(dotColor);

          p.rect(centerX, centerY, dotDiameter, dotDiameter);
        }
      }
      function drawMosaic(dotRadius, backgroundColor) {
        // [TODO] Add code to put the dots on the mosaic!
        // console.log("dotRadius", dotRadius);

        p.background(backgroundColor);

        for (let i = 0; i < numberOfColumns(dotRadius); i++) {
          offsetX = i * columnWidth(dotRadius);
          drawColumnDots(dotRadius, offsetX);
        }
      }
    };

    let myp5 = new p5(s);
  },
};
</script>