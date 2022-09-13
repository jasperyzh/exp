<template>
  <div>
    <button class="btn btn-info btn-sm d-block mx-auto" v-if="!reveal" @click="reveal = true">
      note
    </button>
    <div v-if="reveal" v-html="markdownToHtml"></div>
  </div>
</template>

<script setup>
import { computed, ref } from "@vue/reactivity";
import { marked } from "marked";

let reveal = ref(false);

const props = defineProps(["note"]);

const markdownToHtml = computed(() => marked(props.note));
</script>