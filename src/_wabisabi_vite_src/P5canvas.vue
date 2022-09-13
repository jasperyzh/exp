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

// import TwodRaycasting from "./p5js/archived/220410-2d_raycasting.vue";
// import CubeWave from "./p5js/archived/220413-cube_wave.vue";
// import ClockCustom from "./p5js/archived/220425-clock_custom.vue";
// import FractalTrees from "./p5js/archived/220426-fractal_trees.vue";

// import AsciiVideo from "@/p5js/220409-ascii_video.vue";
// import FluidSimulation from "@/p5js/220418-fluid_simulation.vue";
// import CalendarButtonGenerator from "./components/CalendarButtonGenerator.vue";
// import CsvTable from "./components/CsvTable.vue";
// import SwiperjsYoutubeGallery from "./components/SwiperjsYoutubeGallery.vue";
// import FullpageSmoothScrollParallax from "./components/FullpageSmoothScrollParallax.vue";
// import CssStickyTextFullpageScrolling from "./components/CssStickyTextFullpageScrolling.vue";
// import VuelidatorBasic from "./components/VuelidatorBasic.vue";

// import PerlinNoiseTerrain from "./p5js/220504-PerlinNoiseTerrain.vue";
import sketch, * as sketch_api from "./p5js/220507-random_walker";

export default {
  name: sketch_api.name,
  mounted() {
    let myp5 = new p5(sketch, this.$options.name);
    // console.log(sketch_api);
  },
};
</script>
