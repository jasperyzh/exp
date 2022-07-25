<template>
  <section class="video-gallery mx-auto">
    <iframe
      id="iframe-youtube"
      class="w-100"
      style="aspect-ratio: 16/9"
      :src="video_list"
      frameborder="0"
    ></iframe>

    <div class="my-slider my-3">
      <div v-for="(item, index) in cards" :key="`slide-${index}`">
        <!-- card -->
        <div class="card">
          <img :src="item.img_src" class="card-img-top" :alt="item.title" />
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">
              {{ item.desc }}
            </p>
            <a :href="item.link" class="btn btn-primary">{{
              item.btn_label ? item.btn_label : "Read More"
            }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { tns } from "tiny-slider/src/tiny-slider";

import { onMounted, ref } from "vue";

onMounted(() => {
  var slider = tns({
    container: ".my-slider",
    slideBy: "page",
    mouseDrag: true,
    swipeAngle: false,
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
});

let cards = [
  {
    title: "Personal financing within arm’s reach.",
    img_src: `https://i.ytimg.com/vi/25-uWvTy8Xw/hqdefault.jpg`,
    btn_label: "watch video",
    youtube_id: "25-uWvTy8Xw",
  },
  {
    title: "How to apply via the MAE app for Maybank payroll customers",
    img_src: `https://i.ytimg.com/vi/u-Hnqe3uqEA/hqdefault.jpg`,
    youtube_id: "u-Hnqe3uqEA",
  },
  {
    title: "How to apply via the M2U web for Maybank payroll customers",
    img_src: `https://i.ytimg.com/vi/kMEn8eSp4CE/hqdefault.jpg`,
    youtube_id: "kMEn8eSp4CE",
  },
  {
    title: "How to apply via the MAE app for non-Maybank payroll customers.",
    img_src: `https://i.ytimg.com/vi/qbEHSSPmkLk/hqdefault.jpg`,
    youtube_id: "qbEHSSPmkLk",
  },
  {
    title: "How to apply via the M2U web for non-Maybank payroll customers.",
    img_src: `https://i.ytimg.com/vi/So9HrNSjPfE/hqdefault.jpg`,
    youtube_id: "So9HrNSjPfE",
  },
];

let video_list = ref(
  `https://www.youtube.com/embed/${cards[0].youtube_id}?enablejsapi=1&autoplay=1`
);

function changeVideo(youtube_id) {
  video_list.value = `https://www.youtube.com/embed/${youtube_id}?enablejsapi=1&autoplay=1`;
}
</script>

<style lang="scss">
@import "tiny-slider/dist/tiny-slider.css";

.video-gallery .card {
  cursor: pointer;
}
</style>
