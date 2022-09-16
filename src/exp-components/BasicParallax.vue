<template>
  <div class="d-flex w-100 align-items-center text-center">
    <div class="position-absolute w-100 mx-auto" style="z-index: 5">
      <h2>
        Basic with Parallax.js library
        <br /> Check component: 
        &lt;BasicParallax.vue&gt;
      </h2>
    </div>
    <ul id="scene" class="scene w-100">
      <li class="layer layer1" data-depth="0.40"></li>
      <li class="layer layer2" data-depth="0.60"></li>
      <li class="layer layer3" data-depth="0.80"></li>
      <li class="layer layer4" data-depth="1.00"></li>
    </ul>
  </div>
</template>
<script>
import "https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js";

export default {
  mounted() {
    var scene = document.getElementById("scene");
    var parallax = new Parallax(scene);
  },
};
</script>
<style lang="scss" scoped>
.scene {
  transform: scale(1.25, 1.25) !important;
}

.layer {
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  &.layer1 {
    background-image: url("http://ericjacksonwood.ca/SHARE/_codepen/parallax-halftone/01-blue.png");
  }

  &.layer2 {
    background-image: url("http://ericjacksonwood.ca/SHARE/_codepen/parallax-halftone/02-green.png");
    mix-blend-mode: screen;
  }

  &.layer3 {
    background-image: url("http://ericjacksonwood.ca/SHARE/_codepen/parallax-halftone/03-red.png");
    mix-blend-mode: screen;
  }

  &.layer4 {
    background-image: url("http://ericjacksonwood.ca/SHARE/_codepen/parallax-halftone/04-black.png");
    opacity: 0.25;
  }
}
</style>