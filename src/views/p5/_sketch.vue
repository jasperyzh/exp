<template>
  <div class="views sketch">
    <GoBack />

    <h1>p5js sketch: {{ $route.params }}</h1>
    <!--   <p>{{ getSketch.description }}</p>
  <hr />
  <pre>getSketch: {{ getSketch }}</pre> -->

    <!-- <pre>{{$route}}</pre> -->
    <!-- <div :id="`p5sketch`"></div> -->
    <!-- <div :id="`p5sketch-${getSketch.slug}`"></div> -->

    <div id="canvas"></div>

    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import sourceData from "@/data.json";

import GoBack from "@/components/vuerouter/GoBack.vue";
import p5 from "p5";

const id = defineProps({
  id: {
    type: Number,
    required: true,
  },
});

// import Sketch from "@/p5/cube-wave.js";

const route = useRoute();

const sketches = {
  "cube-wave": () => import("@/p5/220416-cube-wave.js"),
  "array-of-army": () => import("@/p5/220729-array-of-army"),
};

onMounted(async () => {
  console.log(route.params.slug);

  const res = await sketches[route.params.slug]();
  console.log(res);
  // const res = await import("@/p5/cube-wave.js");
  const myp5 = new p5(res.default, "canvas");
});

// const p5_id = computed(() => {
//   return parseInt(route.params.id);
// });

const getSketch = computed(() => {
  return sourceData.p5.find((page) => page.id === id);
});

onMounted(() => {
  // let myp5 = new p5(Sketch, `p5sketch`);
  // console.log(getS)
  // let myp5 = new p5(Sketch, `p5sketch-${getSketch.slug}`);
});

// let myp5 = new p5(Sketch, `p5sketch-${getSketch.slug}`);
// console.log(myp5);
</script>