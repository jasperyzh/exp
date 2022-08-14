<template>
  <router-link class="btn btn-secondary btn-sm" to="/p5"
    ><i class="bi bi-backspace"></i> return</router-link
  >
  <h1>p5js sketch: {{ $route.params.slug }}</h1>
  <!-- <p>{{ getSketch.description }}</p>
  <hr />
   -->

  <!-- <pre>{{$route}}</pre> -->
  <!-- <div :id="`p5sketch`"></div> -->
  <pre>sketch_slug: {{ getRouteSlug }}</pre>
  <pre>getSketch: {{ getSketch }}</pre>
  <div :id="`p5sketch-${getSketch.slug}`"></div>
</template>

<script setup>
import { ref, computed, onMounted, defineAsyncComponent } from "vue";
import { useRouter, useRoute } from "vue-router";
import sourceData from "@/data.json";

import p5 from "p5";
import Sketch from "@/p5/cube-wave.js";

/* const testimport = computed(() =>
  isShow.value
    ? defineAsyncComponent (() => import("./DynamicComponent.vue"))
    : ""
); */
// const AsyncComp = defineAsyncComponent(() =>
//   import("@/components/Footer/4Column.vue")
// );
// console.log(AsyncComp);
// const Sketch = await import(`@/p5/cube-wave.js`)

// const path = '@/p5/cube-wave.js';
// import Sketch from path;

// const router = useRouter();
const route = useRoute();

// const username = ref("");

const getRouteSlug = computed(() => {
  return route.params.slug;
});

const getSketch = computed(() => {
  return sourceData.p5.find((page) => page.slug === getRouteSlug.value);
});

// const modules = await import(`@/p5/cube-wave.js`)
const modules = import.meta.glob(`@/p5/${getSketch.slug}.js`);
console.log(modules, getRouteSlug.value);

// const theSketch = () => import("@/p5/cube-wave.js");
// var test = require(`@/p5/cube-wave.js`);

onMounted(() => {
  const sketch_element = document.getElementById(
    `p5sketch-${getRouteSlug.value}`
  );
  if (sketch_element) {
    let myp5 = new p5(Sketch, sketch_element);
    // let myp5 = new p5(Sketch, sketch_element);
  }
});

// let myp5 = new p5(Sketch, `p5sketch-${getSketch.slug}`);
// console.log(myp5);
</script>