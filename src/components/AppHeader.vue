<template>
  <header class="site-header fixed-top">
    <nav
      class="navbar navbar-expand-md navbar-dark bg-dark"
      aria-label="Offcanvas navbar large"
    >
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar2"
          aria-controls="offcanvasNavbar2"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <router-link class="navbar-brand" to="/"
          >WebDev Experiments</router-link
        >
        <div
          class="offcanvas offcanvas-start text-bg-dark"
          tabindex="-1"
          id="offcanvasNavbar2"
          aria-labelledby="offcanvasNavbar2Label"
          style="top: 56px"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbar2Label">Explore</h5>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item" v-for="page in pages" :key="page.id">
                <router-link class="nav-link" :to="{ name: page.name }">{{
                  page.name
                }}</router-link>
              </li>
              <li class="nav-item">
                <!-- <router-link class="nav-link" :to="{ name: 'Protected' }"
                  >AuthPage</router-link
                > -->
                <AppLink class="nav-link" :to="{ name: 'Protected' }"
                  >AuthPage</AppLink
                >
              </li>
              <li class="nav-item">
                <!-- <router-link class="nav-link" :to="{ name: 'Protected' }"
                  >AuthPage</router-link
                > -->
                <AppLink class="nav-link" to="https://dev.to/">dev.to</AppLink>
              </li>

              <!-- <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </li> -->
            </ul>
            <!-- <form class="d-flex mt-3 mt-lg-0" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> -->
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import SourceData from "@/data.json";

const pages = SourceData.pages;
</script>

<style>
main.site-main {
  margin-top: 56px;
}
</style>
<style lang="scss" scoped>
.navbar-brand {
  margin-left: 1rem;
  margin-right: auto;
}
</style>