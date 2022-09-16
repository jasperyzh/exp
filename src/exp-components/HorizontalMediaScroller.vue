<template>
  <section>
    <h1>Horizontal Media Scroller</h1>
    <a href="https://www.youtube.com/watch?v=3yfswsnD2sw"
      >Create a horizontal media scroller with CSS</a
    >

    <section class="media_scroller snaps_inline">
      <figure
        v-for="(img, index) in placeholder_images"
        :key="`media_scroller_item-${index}`"
      >
        <img :src="img" alt="" />
        <p>{{ img }}</p>
      </figure>
    </section>

    <section class="media_scroller media_scroller--groups snaps_inline">
      <figure
        v-for="(img, index) in placeholder_images"
        :key="`media_scroller_item-${index}`"
      >
        <img :src="img" alt="" />
        <p>{{ img }}</p>
      </figure>
    </section>
  </section>
</template>

<script setup>
import { placeholder_images } from "@/components/AppPlaceholder";
</script>

<style lang="scss" scoped>
figure {
  padding: 1rem;
  background-color: #eaeaea;
  border-radius: 0.25rem;
  max-width: 280px;

  display: grid;
  gap: 0.5rem;
  grid-template-rows: min-content;
  box-shadow: 0.4rem 0.4rem 1rem rgba(0, 0, 0, 0.2);
  img {
    inline-size: 100%;
    aspect-ratio: 4/3;

    object-fit: cover;
    object-position: center;
  }
  p {
    font-size: 0.8rem;
    word-break: break-all;
  }
}
.media_scroller {
  margin: 3rem auto;
  display: grid;
  gap: 1rem;
  grid-auto-flow: column;
  grid-auto-columns: 21%;

  overflow-x: scroll;
  overscroll-behavior-inline: contain;
}

.snaps_inline {
  scroll-snap-type: inline mandatory;
  scroll-padding-inline: 2rem;
}
.snaps_inline > figure:nth-child(odd) {
  scroll-snap-align: start;
}
</style>