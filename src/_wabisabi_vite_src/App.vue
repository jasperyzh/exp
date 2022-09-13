<template>
  <header></header>

  <main class="text-center">
    <h1 class="h6">wabisabi</h1>
    <hr class="w-50 mx-auto">
    <!-- <P5canvas /> -->
    <MapplicKwc />
  </main>

  <footer>&copy; wabisabi</footer>
</template>

<script>
// import P5canvas from "./P5canvas.vue";

import MapplicKwc from "./components/MapplicKwc.vue";

export default {
  components: {
    // P5canvas,
    MapplicKwc,
  },
};
</script>