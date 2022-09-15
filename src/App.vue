<template>
  <!-- https://vueschool.io/lessons/route-transitions -->

  <header class="site-header fixed-top">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Offcanvas navbar large">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2"
          aria-controls="offcanvasNavbar2">
          <span class="navbar-toggler-icon"></span>
        </button>
        <router-link class="navbar-brand" to="/">Experiments</router-link>
        <div class="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasNavbar2"
          aria-labelledby="offcanvasNavbar2Label">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbar2Label">Explore</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
              aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item" v-for="page in pages" :key="page">
                <router-link class="nav-link" :to="{ name: page }">{{
                page
                }}</router-link>
              </li>
              <!-- <li class="nav-item">
                <AppLink class="nav-link" :to="{ name: 'Protected' }">AuthPage</AppLink>
              </li>
              <li class="nav-item">
                <AppLink class="nav-link" to="https://dev.to/">dev.to</AppLink>
              </li> -->
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <main class="site-main">
    <router-view class="views sidebar" name="AppSidebar" v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>

    <Suspense>
      <router-view class="views main" v-slot="{ Component }">
        <transition name="slide" mode="out-in">
          <component :is="Component" :key="$route.path"></component>
        </transition>
      </router-view>
    </Suspense>
  </main>

  <footer class="site-footer bg-light">
    <div class="container">
      <div class="col-auto mx-auto">
        <p class="text-white my-3"><small>© 2022 jasperyong.com</small></p>
      </div>
    </div>
  </footer>

</template>

<script setup>
const pages = [
  "Pixi",
  "P5js",
  "Bootstrap"
]

</script>

<style lang="scss">
// header

main.site-main {
  margin-top: 56px;
}

#offcanvasNavbar2 {
  top: 56px;
}
</style>
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

.navbar-brand {
  margin-left: 1rem;
  margin-right: auto;
}

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

  &>header {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
  }

  &>main {
    grid-column: 1 / -1;
    grid-row: 2 / 3;
  }

  &>footer {
    grid-column: 1 / -1;
    grid-row: -1 / -2;
  }
}
</style>