<template>
  <div class="col mb-4" v-for="(card, index) in cards" :key="`card-${index}`">
    <div class="card">
      <img :src="card.img_src" class="card-img-top" :alt="card.title" />
      <div class="card-body">
        <h5 class="card-title">{{ card.title }}</h5>
        <p class="card-text">
          {{ card.desc }}
        </p>
        <a :href="card.link" class="btn btn-primary">{{ card.btn_label }}</a>
      </div>
    </div>
  </div>
</template>

<script>
// add slot
export default {
  data() {
    return {
      cards: [
        {
          title: "Hello world 1",
          desc: "lorem ipsum lorem ipsum lorem ipsum.",
          img_src: "https://via.placeholder.com/512x512",
          btn_label: "Read more",
          link: "",
        },
        {
          title: "Hello world 2",
          desc: "lorem ipsum lorem ipsum lorem ipsum.",
          img_src: "https://via.placeholder.com/512x512",
          btn_label: "Read more",
          link: "",
        },
        {
          title: "Hello world 3",
          desc: "lorem ipsum lorem ipsum lorem ipsum.",
          img_src: "https://via.placeholder.com/512x512",
          btn_label: "Read more",
          link: "",
        },
      ],
    };
  },
};
</script>