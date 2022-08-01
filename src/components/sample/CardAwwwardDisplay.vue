<template>
  <pre>220801 - https://conference.awwwards.com/</pre>
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
</template>

<script setup>
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
</style>