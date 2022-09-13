<template>
  <div class="container">
    <div class="row">
      <h1>Swiperjs video gallery + switch youtube videos + YoutubePlayerAPI</h1>
      <ul>
        <li>swiperjs test video gallery</li>
        <li>
          swiper/vue demo runthrough
          <a href="https://swiperjs.com/demos" target="_blank">swiperjs demo</a>
        </li>
        <li>click "cards" to switch youtube video</li>
        <li>
          <a href="https://developers.google.com/youtube/iframe_api_reference"
            >Youtube Iframe API Reference</a
          >
        </li>
      </ul>
    </div>
    <div class="row">
      <div class="col-md-6 mx-auto">
        <iframe
          id="iframe-youtube"
          class="w-100"
          style="aspect-ratio: 16/9"
          :src="video_list"
          frameborder="0"
        ></iframe>
        <button @click="changeVideo">change</button>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <Swiper
          :slidesPerView="1"
          :spaceBetween="10"
          :pagination="{
            clickable: true,
          }"
          :navigation="true"
          :breakpoints="{
            '768': {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }"
          :modules="modules"
          class="mySwiper swiper__pagination-padding"
        >
          <SwiperSlide v-for="(item, index) in cards" :key="`card-${index}`">
            <Card @click="changeVideo(item.youtube_id)" :card="item" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
import Card from "../common/Card.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper";

import { ref } from "vue";

const modules = [Pagination, Navigation];

let cards = [
  {
    title: "hello1",
    img_url: `https://via.placeholder.com/640x360`,
    youtube_id: "vtLK-PHlWuU",
  },
  {
    title: "hello2",
    img_url: `https://via.placeholder.com/640x360`,
    youtube_id: "YpkYvPx9iEI",
  },
  {
    title: "hello3",
    img_url: `https://via.placeholder.com/640x360`,
    youtube_id: "IV3dnLzthDA",
  },
  {
    title: "hello4",
    img_url: `https://via.placeholder.com/640x360`,
    youtube_id: "vtLK-PHlWuU",
  },
];

let video_list = ref(
  "https://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&autoplay=1"
);

function changeVideo(youtube_id) {
  video_list.value = `https://www.youtube.com/embed/${youtube_id}?enablejsapi=1&autoplay=1`;
}

// codepen vue-youtubeapi example - playVideo not working - https://codepen.io/balexandre/pen/dyYPBrW?editors=1010
// youtube_iframe_embed_api - to detect state changes
var tag = document.createElement("script");
tag.id = "youtube-iframe-api";
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

window.onYouTubeIframeAPIReady = () => {
  console.log("onYouTubeIframeAPIReady");
  onYouTubeIframeAPIReady();
};
function onYouTubeIframeAPIReady() {
  var player;
  player = new YT.Player("iframe-youtube", {
    videoId: "8RW9kqpr0qM",
    playerVars: { autoplay: 1, controls: 0 },
    // events: {
    //   onReady: onPlayerReady,
    //   onStateChange: onPlayerStateChange,
    // },
    events: {
      onReady: onPlayerReady,
      // onStateChange: onPlayerStateChange,
      // onError: onPlayerError,
    },
  });
}
function onPlayerReady(event) {
  event.target.playVideo();
}
/* 
function onPlayerReady(event) {
  document.getElementById("existing-iframe-example").style.borderColor =
    "#FF6D00";
}
function onPlayerStateChange(event) {
  changeBorderColor(event.data);
}
function changeBorderColor(playerStatus) {
  var color;
  if (playerStatus == -1) {
    color = "#37474F"; // unstarted = gray
  } else if (playerStatus == 0) {
    color = "#FFFF00"; // ended = yellow
  } else if (playerStatus == 1) {
    color = "#33691E"; // playing = green
  } else if (playerStatus == 2) {
    color = "#DD2C00"; // paused = red
  } else if (playerStatus == 3) {
    color = "#AA00FF"; // buffering = purple
  } else if (playerStatus == 5) {
    color = "#FF6DOO"; // video cued = orange
  }
  if (color) {
    document.getElementById("existing-iframe-example").style.borderColor =
      color;
  }
} */
</script>

<style lang="scss">
@import "../../node_modules/swiper/swiper.scss";
@import "../../node_modules/swiper/swiper-vars.scss";
@import "../../node_modules/swiper/modules/pagination/pagination.scss";
@import "../../node_modules/swiper/modules/navigation/navigation.scss";

img {
  max-width: 100%;
  height: auto;
}
:root {
  --swiper-pagination-color: #000;
  --swiper-pagination-bullet-size: 14px;
  --swiper-pagination-bullet-horizontal-gap: 10px;
  --swiper-pagination-bullet-inactive-color: transparent;
  --swiper-pagination-bullet-inactive-opacity: 1;
}
.swiper-pagination-bullet {
  border: 2px solid #000;
}
.swiper-button-prev,
.swiper-button-next {
  display: none;
}
@media (min-width: 768px) {
  .swiper-button-prev,
  .swiper-button-next {
    display: block;
    &:after {
      position: fixed;
    }
  }
  .swiper-button-prev {
    left: -50px;
  }
  .swiper-button-next {
    right: -50px;
  }
}
.swiper__pagination-padding {
  padding-bottom: 3rem;
}
</style>