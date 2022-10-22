<template>
  <div class="views protected">
    <h1>Welcome to Protected page</h1>
    <a href="https://vueschool.io/lessons/route-meta-fields"
      >VueRouter: route-meta-fields</a
    >
    <hr />
    <div class="col">
      <router-link :to="{ name: 'UserSecret' }">To User Secret</router-link>
      <button class="btn btn-primary" @click="logout">Logout</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
// const route = useRoute();

const username = window.user;

function logout() {
  // remove authentication
  window.user = null;


  // router.push({ name: "Home", hash: "#logout", query: { logout: null } }); // will added to history
  router.replace({ name: "Home", hash: "#logout", query: { logout: null } }); // will come in handy to remove previous-page
}
</script>