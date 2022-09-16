<template>
  <a v-if="isExternalLink" :href="to" target="_blank"
    ><slot></slot>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      fill="currentColor"
      class="bi bi-box-arrow-up-right mx-1 mb-2"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
      />
      <path
        fill-rule="evenodd"
        d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
      />
    </svg>
  </a>
  <router-link v-else v-bind="$props">
    <slot></slot>
  </router-link>
</template>

<script setup>
import { computed } from "@vue/runtime-core";
import { RouterLink } from "vue-router";

const props = defineProps({
  ...RouterLink.props,
});

const isExternalLink = computed(
  () => typeof props.to === "string" && props.to.startsWith("http")
);
</script>