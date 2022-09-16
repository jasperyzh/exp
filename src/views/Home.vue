<template>

  <div class="home container my-4">

    <h1>exp</h1>
    <hr>

    <hr>
    <h2 class="h6">Try out:</h2>
    <ul>
      <li>
        <a target="_blank" href="https://github.com/spite/ccapture.js/">spite-ccapture.js- A library to capture canvas-based animations
          at a fixed framerate</a>
      </li>
    </ul>

  </div>
</template>

<style>

</style>

<script setup>
import { onMounted, computed } from "vue";
import { useRouter, useRoute, NavigationFailureType } from "vue-router";

/* // fetch_placeholder_photos 
const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=9`);
const photos = await res.json() 
*/


/* onMounted(async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/photos?_limit=9"
  );
   = await ;
  console.log(response.json())
}) */
/* 
const get_photos = computed(() => {
  return photos.value;
}) */
// insert p5js
/* import p5 from "p5";
import Sketch from "@/p5/cube-wave.js";
onMounted(() => {
  const sketch_id = "sketch_canvas";
  document
    .querySelector("h1")
    .insertAdjacentHTML("afterend", `<div id="${sketch_id}"></div>`);
  const myp5 = new p5(Sketch, sketch_id);
}); */

// vue_router on detected navigation_failure/error
async function routerErrors() {
  const navigationFailure = await router.push("/");
  if (
    isNavigationFailure(navigationFailure, NavigationFailureType.duplicated)
  ) {
    console.log(navigationFailure.to);
    console.log(navigationFailure.from);
  } else {
    // all is well
  }
}

// import GridLayout from "@/components/GridLayout.vue";
// import IntersectionObserverPractice from "@/components/IntersectionObserverPractice.vue";
// import CardAwwwardDisplayVue from "@/components/sample/CardAwwwardDisplay.vue";
// import BasicGalleryFilter from "@/components/sample/BasicGalleryFilter.vue";
// import BasicSvgDivider from "@/components/sample/BasicSvgDivider.vue";
// import RellaxPractice from "@/components/sample/RellaxPractice.vue";
// import HorizontalMediaScroller from "@/components/sample/HorizontalMediaScroller.vue";
// import LazyLoadingPractice from "@/components/sample/LazyLoadingPractice.vue";

// import PixiGetStarted from "@/views/pixi/get-started.vue";

// import Bs5Cheatsheet from "@/components/Bs5Cheatsheet.vue";
// import { placeholder_images, hello_world } from "@/components/AppPlaceholder.js";

// const modules = import.meta.glob('@/views/*.vue')
// console.log(modules)

</script>