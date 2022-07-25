<template>
  <!-- <Thomson /> -->
  <div class="container">
    <div class="row">
      <div class="col">
        <SwipeVideoGallery />
      </div>
    </div>
  </div>
  <Album />
  <Blog />
  <Carousel />
  <Checkout />
  <Pricing />
  <Product />
</template>

<script>
import SwipeVideoGallery from "../../components/SwipeVideoGallery.vue";
import Album from "./Album.vue";
import Blog from "./Blog.vue";
import Carousel from "./Carousel.vue";
import Checkout from "./Checkout.vue";
import Pricing from "./Pricing.vue";
import Product from "./Product.vue";
// import Thomson from "./Thomson.vue";
export default {
  components: {
    Album,
    Blog,
    Carousel,
    Checkout,
    Pricing,
    Product,

    SwipeVideoGallery,
  },
};
</script>