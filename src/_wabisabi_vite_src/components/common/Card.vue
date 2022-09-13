<template>
  <a :href="card.href" target="_blank">
    <div class="card">
      <img :src="card.img_url" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title">{{ card.title }}</h5>
        <p class="card-text" v-if="card.text">
          {{ card.text }}
        </p>
      </div>
    </div>
  </a>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  card: {
    type: Object,
    required: true,
  },
});
</script>