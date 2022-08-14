<template>
  <div class="views p5_home">
    <h1>p5js sketches</h1>

    <h2>By ID</h2>
    <ul class="nav">
      <li class="nav-item" v-for="sketch in getSketchesPage" :key="sketch.id">
        <router-link
          class="nav-link"
          :to="{
            name: 'p5.show',
            params: { id: sketch.id, slug: sketch.slug },
          }"
        >
          {{ sketch.name }}
        </router-link>
      </li>
    </ul>
    <!-- <hr />
  <h2>By SLUG</h2>
  <ul class="nav">
    <li class="nav-item" v-for="sketch in getSketchesPage" :key="sketch.id">
      <router-link
        class="nav-link"
        :to="{ name: 'p5.showbyslug', params: { slug: sketch.slug } }"
      >
        {{ sketch.name }}
      </router-link>
    </li>
  </ul> -->
  </div>
</template>

<script setup>
import { computed } from "vue";
import { /* useRouter, */ useRoute } from "vue-router";
import sourceData from "@/data.json";

const getSketchesPage = computed(() => {
  return sourceData.p5;
});

/* const getData = () => {
  fetch("https://api.openbrewerydb.org/breweries/5494", {
    headers: { "Content-type": "application/json" },
  })
    .then((res) => res.json())
    .then((response) => {
      console.log({ response });
    })
    .catch((error) => {
      console.log("Looks like there was a problem: \n", error);
    });
}; */
</script>