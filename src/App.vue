<template>
  <!-- https://vueschool.io/lessons/route-transitions -->
  <Layout :nav_items="nav_items">
    <main>
      <Suspense>
        <router-view v-slot="{ Component }">
          <component :is="Component" :key="$route.path"></component>
        </router-view>
        <!-- <router-view class="views sidebar" name="AppSidebar" v-slot="{ Component }">
          <transition name="slide" mode="out-in">
            <component :is="Component" :key="$route.path"></component>
          </transition>
        </router-view> -->
      </Suspense>
    </main>
  </Layout>
</template>

<script setup>
import Layout from "./components/Layout.vue";

const nav_items = [
  "JavaScript",
  "Template",
  "P5js",
];
</script>

<!-- <style lang="scss" scoped>
// vue_router_transition
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.12s, transform 0.12s;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-0.25rem);
}
</style> -->