<template>
  <section class="container-fluid px-0 my-5 maxwidth--1600">
    <div class="row no-gutters">
      <div
        :class="`${item.classes}`"
        v-for="item in contents"
        :key="`content-${item}`"
      >
        <article
          class="m-sm-1 c-speakers_item || c-speaker-thumb"
          v-if="item.title"
        >
          <figure class="c-speaker-thumb_visual">
            <img :src="item.img_src" alt="" />
          </figure>

          <main class="c-speaker-thumb_content">
            <h2 class="c-heading -h5 || c-speaker-thumb_title">
              {{ item.title }}
            </h2>
            <div class="c-speaker-thumb_infos">
              <span class="c-speaker-thumb_position">{{ item.desc }}</span>
              <span class="c-speaker-thumb_employer">Sivik©Atelier</span>
              <span class="c-speaker-thumb_country">GHA</span>
            </div>
          </main>
          <a class="c-speaker-thumb_link" href="#">Read more</a>
        </article>
      </div>
    </div>
  </section>

  <div class="divider__wave"></div>

  <gallery-filter-basic></gallery-filter-basic>
</template>

<script setup>
import GalleryFilterBasic from "../components/sample/GalleryFilterBasic.vue";

import { onMounted } from "vue";

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

const contents = [
  {
    classes: "col-12 col-sm-6 col-lg-6 offset-lg-1",
    title: "Web Designer",
    desc: "Designer &amp; Webflow Developer",
    img_src: img_placeholder[0],
  },
  {
    classes: "col-12 col-sm-6 col-lg-3",
    title: "Web Designer",
    desc: "Designer &amp; Webflow Developer",
    img_src: img_placeholder[1],
  },
  {
    classes: "col-12 col-sm-6 col-lg-4 offset-lg-4",
    title: "Web Designer",
    desc: "Designer &amp; Webflow Developer",
    img_src: img_placeholder[2],
  },
  {
    classes: "col-12 col-sm-6 col-lg-3",
    title: "Web Designer",
    desc: "Designer &amp; Webflow Developer",
    img_src: img_placeholder[3],
  },
  {
    classes: "col-12 col-sm-6 col-lg-5 offset-lg-2",
    title: "Web Designer",
    desc: "Designer &amp; Webflow Developer",
    img_src: img_placeholder[5],
  },
  {
    classes: "col-12 col-sm-6 col-lg-2 c-speaker__explore",
    title: "Web Designer",
    desc: "Designer &amp; Webflow Developer",
    img_src: img_placeholder[6],
  },
];
</script>

<style lang="scss" scoped>
@import "bootstrap/scss/bootstrap";
.maxwidth--1600 {
  max-width: 1600px;
  margin-inline: auto;
}
.c-speaker__explore > article {
  aspect-ratio: 1/1;
  min-height: auto;
}
.c-speaker-thumb {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: rgba(54, 39, 36, 0.2);
  border-top-right-radius: 3rem;
  overflow: hidden;
  min-height: 40vh;
  margin-bottom: 0.25rem;
}
.c-speaker-thumb_visual {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #faf6ec;
  z-index: 0;
  transform: translate3d(0, 0, 0);
}

.c-speaker-thumb_visual img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.6;
  z-index: 10;
  transition: opacity 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);

  filter: grayscale(1);
}

.c-speaker-thumb:hover .c-speaker-thumb_visual img,
.c-speaker-thumb:focus-within .c-speaker-thumb_visual img {
  opacity: 0.8;
  filter: grayscale(0.5);
}
.c-speaker-thumb_content {
  position: relative;
  z-index: 30;
  padding: 1.25rem 0.9375rem;
  color: #362724;
  transition: color 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.c-speaker-thumb:hover .c-speaker-thumb_content,
.c-speaker-thumb:focus-within .c-speaker-thumb_content {
  color: #faf6ec;
}

.c-speaker-thumb_infos {
  border-top: 1px solid rgba(54, 39, 36, 0.5);
  border-bottom: 1px solid rgba(54, 39, 36, 0.5);
  padding: 0.4em 0;
  display: flex;
  transition: border-color 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.c-speaker-thumb:hover .c-speaker-thumb_infos,
.c-speaker-thumb:focus-within .c-speaker-thumb_infos {
  border-color: rgba(250, 246, 236, 0.5);
}
.c-speaker-thumb_link {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 40;
  font-size: 0;
}

// divider
.divider__wave {
  height: 80px;
  background-image: escape-svg(
    url('data:image/svg+xml;utf8,<svg id="visual" viewBox="0 0 1024 100" width="1024" height="100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="1024" height="100" fill="#fafafa"></rect><path d="M0 42L24.3 43C48.7 44 97.3 46 146.2 48.7C195 51.3 244 54.7 292.8 54.7C341.7 54.7 390.3 51.3 439 49.5C487.7 47.7 536.3 47.3 585 48C633.7 48.7 682.3 50.3 731.2 52C780 53.7 829 55.3 877.8 53.3C926.7 51.3 975.3 45.7 999.7 42.8L1024 40L1024 101L999.7 101C975.3 101 926.7 101 877.8 101C829 101 780 101 731.2 101C682.3 101 633.7 101 585 101C536.3 101 487.7 101 439 101C390.3 101 341.7 101 292.8 101C244 101 195 101 146.2 101C97.3 101 48.7 101 24.3 101L0 101Z" fill="#0066FF" stroke-linecap="round" stroke-linejoin="miter"></path></svg>')
  );
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>