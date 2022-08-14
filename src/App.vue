<template>
  <AppHeader />
  <main class="site-main">
    <router-view v-slot="{ Component }">
      <!-- https://vueschool.io/lessons/route-transitions -->
      <transition name="slide" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
  </main>

  <AppFooter />
</template>

<script setup>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>

<style lang="scss" scoped>
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
</style>

<style lang="scss">
// layout
html,
body,
.site-container {
  height: 100%;
}

.site-container {
  --main_maxwidth: 820px;

  display: grid;
  column-gap: 1rem;
  grid-template-rows: auto 1fr auto;

  // layout_full_width_content
  grid-template-columns: 1fr 1fr 1fr;

  & > header {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
  }
  & > main {
    grid-column: 1 / -1;
    grid-row: 2 / 3;
  }
  & > footer {
    grid-column: 1 / -1;
    grid-row: -1 / -2;
  }
}
</style>