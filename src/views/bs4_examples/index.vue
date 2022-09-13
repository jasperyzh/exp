<template>
  <!-- bootstrap5 -->
  <Cheatsheet />

  <!-- bootstrap4 -->
  <Album />
  <Blog />
  <Carousel />
  <Checkout />
  <Pricing />
  <Product />
</template>

<script setup>
// bs5
import Cheatsheet from "./bs5_examples/Cheatsheet.vue";

// bs4
import Album from "@/views/bootstrap/bs4_examples/Album.vue";
import Blog from "@/views/bootstrap/bs4_examples/Blog.vue";
import Carousel from "@/views/bootstrap/bs4_examples/Carousel.vue";
import Checkout from "@/views/bootstrap/bs4_examples/Checkout.vue";
import Pricing from "@/views/bootstrap/bs4_examples/Pricing.vue";
import Product from "@/views/bootstrap/bs4_examples/Product.vue";
</script>