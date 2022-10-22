<template>
  <div id="scene">
    <div class="my-slider border">
      <div v-for="(item, index) in 6" :key="`card-${index}`">
        <div class="card card__interactive bg-dark text-white">
          <figure>
            <img :src="img_placeholder[index]" class="card-img" alt="..." />
          </figure>
          <div class="card-img-overlay">
            <h5 class="card-title">Card title {{ index }}</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">Last updated 3 mins ago</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="border" style="width: 1200px; min-height: 80px">
    <figure
      style="width: 400px; aspect-ratio: 3/4"
      class="figure position-relative overflow-hidden"
    >
      <img
        width="120"
        :src="img_placeholder[4]"
        class="card-img position-absolute"
        alt="..."
        style="transform-origin: center"
      />
    </figure>
  </div>
</template>


<script setup>
import { onMounted } from "vue";
import { tns } from "tiny-slider/src/tiny-slider";

onMounted(() => {
  var slider = tns({
    container: ".my-slider",
    slideBy: "page",
    mouseDrag: true,
    swipeAngle: false,
    center: true,
    loop: false,
    gutter: 15,
    responsive: {
      320: {
        items: 2,
        edgePadding: 30,
      },
      768: {
        items: 3,
      },
    },
  });

  const card_images = document.querySelectorAll(".card-img");
  update_parallax_animation(card_images);

  function update_parallax_animation(elements) {
    elements.forEach((item) => {
      const item_stat = item.getBoundingClientRect();

      const item_x_centered = item_stat.x + item_stat.width / 2;

      const viewport_width = document.body.clientWidth;

      const percent = (item_x_centered / viewport_width) * 100;

      const offset_test = 20 * (percent / 100) - 10;

      item.style.transform = `translateX(${offset_test}%) scale(1.3)`;
    });
  }

  var animation_interval;
  slider.events.on("transitionStart", () => {
    animation_interval = setInterval(() => {
      update_parallax_animation(card_images);
    }, 5);
  });
  slider.events.on("transitionEnd", () => {
    clearInterval(animation_interval);
  });
  slider.events.on("dragMove", () => {
    animation_interval = setInterval(() => {
      update_parallax_animation(card_images);
    }, 5);
  });
  slider.events.on("dragEnd", () => {
    clearInterval(animation_interval);
  });
});

const img_placeholder = [
  "https://images.pexels.com/photos/12823101/pexels-photo-12823101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/12292899/pexels-photo-12292899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/12507122/pexels-photo-12507122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/12531215/pexels-photo-12531215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/10990030/pexels-photo-10990030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/5611139/pexels-photo-5611139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/12701332/pexels-photo-12701332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/12422390/pexels-photo-12422390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/12640456/pexels-photo-12640456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];
</script>

<style lang="scss">
@import "tiny-slider/dist/tiny-slider.css";

.card__interactive {
  aspect-ratio: 4/6;
  overflow: hidden;

  .card-img {
    transition: all 0.02s ease-in;
    transform-origin: center;
    transform: translateX(0) scale(1.3);
  }

  .card-img-overlay {
    pointer-events: none;
    user-select: none;
  }

  figure {
    width: 100%;
    height: 100%;
    margin-bottom: 0;
  }
  img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
  }
}
</style>