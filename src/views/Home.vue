<template>
  <div class="home">
    <h1>Welcome to homepage</h1>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";


// insert p5js
import p5 from "p5";
import Sketch from "@/p5/cube-wave.js";
onMounted(() => {
  const sketch_id = "sketch_canvas";
  document
    .querySelector("h1")
    .insertAdjacentHTML("afterend", `<div id="${sketch_id}"></div>`);
  const myp5 = new p5(Sketch, sketch_id);
});
</script>