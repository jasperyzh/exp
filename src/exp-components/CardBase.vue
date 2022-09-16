<template>
  <div class="card">
    <img :src="card.img_src" class="card-img-top" :alt="card.title" />
    <div class="card-body">
      <h5 class="card-title">{{ card.title }}</h5>
      <p class="card-text">
        {{ card.desc }}
      </p>
      <a :href="card.link" class="btn btn-primary">{{ card.btn_label ? card.btn_label : "Read More" }}</a>
    </div>
  </div>
</template>

<script>
// add slot
export default {
  props: {
    card: {
      type: Object,
      default() {
        return {
          title: "Hello world 1",
          desc: "lorem ipsum lorem ipsum lorem ipsum.",
          img_src: "https://via.placeholder.com/512x512",
          btn_label: "Read more",
          link: "",
        };
      },
    },
  },
};
</script>