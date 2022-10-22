<template>
  <pre>
      <b>Explore:</b>
      [SVG runtime for p5.js.](https://github.com/zenozeng/p5.js-svg)
      [getting started setup - p5js-overview](https://github.com/processing/p5.js/wiki/p5.js-overview)
  </pre>
  <div id="canvas" style="position: relative"></div>
</template>

<script setup>
import { onMounted } from "vue";
import p5 from "p5";
// import "/public/p5.sound-0.9.0";
// import ml5 from "ml5/dist/ml5";

onMounted(() => {
  new p5(sketch, `canvas`);
})

const sketch_data = {
  "title": "Resizing Canvas Size",
  "slug": "",
  "date_created": "220922",
  "desc": "Machine Learning hello_world; input",
  "sources": [
    "[ml5: Friendly Open Source Machine Learning Library for the Web](https://itp.nyu.edu/adjacent/issue-3/ml5-friendly-open-source-machine-learning-library-for-the-web/)",
    "https://github.com/nature-of-code/NOC-S17-2-Intelligence-Learning/tree/master/week3-classification-regression",
    "https://thecodingtrain.com/tracks/ml5js-beginners-guide/ml5/1-classification/1-image-classification"
  ]
};

const sketch = function (p) {

}
</script>
