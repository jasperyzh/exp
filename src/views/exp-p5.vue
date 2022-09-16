<template>
  <div class="exp-p5 container my-4">
    <h1>EXP|p5js</h1>
    <div id="canvas" style="position: relative"></div>
    <pre>
            <b>Explore:</b>
            [SVG runtime for p5.js.](https://github.com/zenozeng/p5.js-svg)
            [getting started setup - p5js-overview](https://github.com/processing/p5.js/wiki/p5.js-overview)
            
        </pre>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import p5 from "p5";
import "/public/p5.sound-0.9.0";
onMounted(() => {
  new p5(sketch, `canvas`);
})

const sketch_data = {
  "title": "",
  "slug": "",
  "date_created": "220601",
  "desc": "",
  "sources": [
    ""
  ]
};

// import KatanaZeroOst from "../assets/p5-delusivebunker.mp3";
// import TheBeatles from "../assets/p5-daytripper.mp3";
// import Cysmix from "../assets/p5-cysmix-regen-remix.mp3";
// import Beat from "./Beat.js";

const sketch = function (p) {
  p.setup = () => {
    p.createCanvas(512, 512);
    p.background(0);
  }
  p.draw = () => {

    p.background(0);

    if (p.keyIsPressed || p.mouseIsPressed) {
      p.background(44);
    }

  }


}
</script>
