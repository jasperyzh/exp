<template>
  <div class="scroll-tracker"></div>
  <div class="container">
    <div class="row">
      <div class="col">
        <a href="https://www.youtube.com/watch?v=ZRCzvK4DnlA">
          <h1>JavaScript Scroll Animation Tutorial: Web Animations API by 
Kevin Powell
</h1>
        </a>
      </div>
    </div>
  </div>
  <Album />
  <figure class="figure__placeholder">
    <img
      class="d-block my-3 mx-auto"
      width="300"
      src="@/assets/placeholder.png"
      alt="placeholder"
    />
  </figure>
  <Blog />
  <figure class="figure__placeholder">
    <img
      class="d-block my-3 mx-auto"
      width="300"
      src="@/assets/placeholder.png"
      alt="placeholder"
    />
  </figure>
  <Carousel />
  <figure class="figure__placeholder">
    <img
      class="d-block my-3 mx-auto"
      width="300"
      src="@/assets/placeholder.png"
      alt="placeholder"
    />
  </figure>
  <Checkout />
  <figure class="figure__placeholder">
    <img
      class="d-block my-3 mx-auto"
      width="300"
      src="@/assets/placeholder.png"
      alt="placeholder"
    />
  </figure>
  <Pricing />
  <figure class="figure__placeholder">
    <img
      class="d-block my-3 mx-auto"
      width="300"
      src="@/assets/placeholder.png"
      alt="placeholder"
    />
  </figure>
  <Product />
</template>



<script>
import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";

import Album from "@/views/bootstrap-example/Album.vue";
import Blog from "@/views/bootstrap-example/Blog.vue";
import Carousel from "@/views/bootstrap-example/Carousel.vue";
import Checkout from "@/views/bootstrap-example/Checkout.vue";
import Pricing from "@/views/bootstrap-example/Pricing.vue";
import Product from "@/views/bootstrap-example/Product.vue";

export default {
  components: {
    Album,
    Blog,
    Carousel,
    Checkout,
    Pricing,
    Product,
  },

  mounted() {
    const scrollTracker = document.querySelector(".scroll-tracker");

    const scrollTrackingTimeline = new ScrollTimeline({
      source: document.scrollingElement,
      orientation: "block",
      scrollOffsets: [CSS.percent(0), CSS.percent(100)],
    });

    scrollTracker.animate(
      {
        transform: ["scaleX(0)", "scaleX(1)"],
      },
      {
        duration: 1,
        timeline: scrollTrackingTimeline,
      }
    );

    const animatedImages = document.querySelectorAll(
      ".figure__placeholder img"
    );
    animatedImages.forEach((image) => {
      const imageOffsetTop = image.offsetTop;
      const imageHeight = image.offsetHeight;
      //   const animatedImagesTimeline = new ScrollTimeline({
      //     scrollOffsets: [
      //       { target: image, edge: "start", threshold: "0" },
      //       { target: image, edge: "end", threshold: "0" },
      //     ],
      //   });

      image.animate(
        {
          transform: [
            "perspective(1000px) rotateX(45deg)",
            "perspective(1000px) rotate(0)",
          ],
          opacity: ["0", "1"],
        },
        {
          duration: 1,
          easing: "linear",
          timeline: new ScrollTimeline({
            // scrollOffsets: [
            //   { target: image, edge: "end", threshold: "0" },
            //   { target: image, edge: "start", threshold: "1" },
            // ],
            scrollOffsets: [
              CSS.px(imageOffsetTop + imageHeight - window.innerHeight - 500),
              CSS.px(imageOffsetTop - 200),
            ],
          }),
        }
      );
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/default";
.scroll-tracker {
  position: fixed;
  inset: 0 0 auto;
  height: 8px;
  background-color: $primary;

  transform-origin: left;
  z-index: 100;
}
</style>