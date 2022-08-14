<template>
  <div class="views user_secret">
    <h1>User Secret page via query</h1>
  </div>
</template>

<script setup>
import { onBeforeRouteLeave } from "vue-router";

onBeforeRouteLeave((to, from) => {
  const answer = window.confirm("Are you sure you want to leave?");
  if (!answer) {
    return false;
  }
});
</script>