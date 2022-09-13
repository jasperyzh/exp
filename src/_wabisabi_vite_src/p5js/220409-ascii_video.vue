<template>
  <div class="p5js">
    <h1>{{ $options.name }}</h1>
    <div :id="$options.name"></div>
    <div class="markdown note">
      {{ note }}
    </div>
  </div>
</template>

<script>
import "https://cdn.jsdelivr.net/npm/p5@1.4.1/lib/p5.js";
// import Logo from "@/assets/logo-8bit.png";

export default {
  name: "p5js: ASCII Video",
  data() {
    return {
      data: "220409",
      note: `
      1. each pixel in image is a value of RGB's 0-255
      2. take those value to average it to find it brightness
      3. write a algorithm to walkthrough for every single pixels 
      4. replace each pixel with text
      5. text go from darkest/dense to bright/light
      6. grab video as input, replace it with text
      `,
    };
  },
  mounted() {
    // [ASCII Video (Coding Challenge 166)](https://www.youtube.com/watch?v=55iwMYv8tGI)
    // more on pixelArray - https://www.youtube.com/watch?v=nMUMZ5YRxHI

    // more on ASCII - https://play.ertdfgcvb.xyz/#/src/demos/hotlink
    const s = (p) => {
      const density = "Ñ@#W$9876543210?!abc;:+=-,._         ";

      // let img;
      let video;
      let asciiDiv;

      // p.preload = () => {
      //   img = p.loadImage(Logo, 50, 50);
      // };

      p.setup = () => {
        // const canvas = p.createCanvas(640, 480);
        // canvas.parent(this.$options.name);

        p.noCanvas();

        video = p.createCapture(p.VIDEO);
        video.size(48, 48);
        asciiDiv = p.createDiv();
        asciiDiv.class("test");

        // p.background(0);
        // p.noLoop();
      };

      p.draw = () => {
        // p.image(img, 20, 40);

        // let w = p.width / img.width;
        // let h = p.height / img.height;

        // img.loadPixels();
        video.loadPixels();
        let asciiImage = "";

        for (let j = 0; j < video.height; j++) {
          // let row = "";
          for (let i = 0; i < video.width; i++) {
            const pixelIndex = (i + j * video.width) * 4;
            const r = video.pixels[pixelIndex + 0];
            const g = video.pixels[pixelIndex + 1];
            const b = video.pixels[pixelIndex + 2];
            const avg = (r + g + b) / 3;
            const len = density.length;
            const charIndex = p.floor(p.map(avg, 0, 255, 0, len));

            const c = density.charAt(charIndex);
            if (c == " ") asciiImage += "&nbsp;";
            else asciiImage += c;

            // p.square(i * w, j * h, w);
            // p.textSize(w);
            // p.textAlign(p.CENTER, p.CENTER);
            // p.text(density.charAt(charIndex), i * w + w * 0.5, j * h + h * 0.5);
          }
          // let div_row = p.createElement('pre', [row]);
          // let div_row = p.createDiv(row);
          // div_row.class("test");
          // console.log(row)
          asciiImage += "<br />";
        }
        asciiDiv.html(asciiImage);
        // img.resize(640, 480);

        // drawMosaic(1, p.color(240, 240, 240));
      };

      //   function drawColumnDots(dotRadius, offsetX) {
      //     // [TODO] Replace the line with a column of dots
      //     p.line(offsetX, 0, offsetX, p.height);

      //     // draw dots
      //     let dotDiameter = 3 * dotRadius;
      //     let dotHeightWithPadding = dotDiameter;
      //     let numDotsInColumn = Math.floor(p.height / dotHeightWithPadding);

      //     let topY = Math.floor(p.random(13));

      //     for (let i = 0; i < numDotsInColumn; i++) {
      //       let centerX = Math.floor(
      //         p.random(
      //           offsetX + dotRadius,
      //           offsetX + columnWidth(dotRadius) - dotRadius
      //         )
      //       );

      //       //   let centerY = i * dotHeightWithPadding + dotRadius;
      //       let centerY = topY + i * dotHeightWithPadding + dotRadius;

      //       let dotColor = img.get(centerX, centerY);
      //       p.noStroke();
      //       p.fill(dotColor);

      //       p.rect(centerX, centerY, dotDiameter, dotDiameter);
      //     }
      //   }
      //   function drawMosaic(dotRadius, backgroundColor) {
      //     // [TODO] Add code to put the dots on the mosaic!
      //     // console.log("dotRadius", dotRadius);

      //     p.background(backgroundColor);

      //     for (let i = 0; i < numberOfColumns(dotRadius); i++) {
      //       offsetX = i * columnWidth(dotRadius);
      //       drawColumnDots(dotRadius, offsetX);
      //     }
      //   }
    };

    let myp5 = new p5(s);
  },
};
</script>

<style lang="scss">
.test {
  background-color: #fff;
  font-family: "Courier", monospace;
  font-size: 1.2rem;
  line-height: 0.6;
  white-space: pre;
}
</style>