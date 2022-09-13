<template>
  <header class="fixed-top bg-white shadow">
    <div class="container">
      <nav class="d-flex flex-wrap justify-content-between py-1">
        <a href="">
          <img
            width="160"
            src="@/client/petronas-yayasan/logo.png"
            class="custom-logo"
            alt="Yayasan Petronas"
          />
        </a>

        <ul class="nav nav-pills align-items-center d-none d-lg-flex">
          <li class="nav-item">
            <a href="#" class="nav-link" aria-current="page">Home</a>
          </li>
          <li class="nav-item"><a href="#" class="nav-link">About Us</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Our Focus</a></li>
          <li class="nav-item">
            <a href="#" class="nav-link">The Good News</a>
          </li>
          <li class="nav-item"><a href="#" class="nav-link">Grants</a></li>
          <li class="nav-item">
            <a href="#" class="nav-link active mx-1">Donations</a>
          </li>
          <!--  <li class="nav-item">
            <a href="#" class="nav-link active mx-1">Volunteer</a>
          </li> -->
        </ul>

        <!-- <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <span class="bi bi-list"></span>
        </button> -->
      </nav>
    </div>

    <div
      class="offcanvas offcanvas-start"
      tabindex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <YayasanSidebar :class="showElement" />
    </div>
  </header>
</template>
<script>
import YayasanSidebar from "./YayasanSidebar.vue";
export default {
  components: { YayasanSidebar },
  data() {
    return {
      enable_sidebar: false,
    };
  },
  computed: {
    showElement() {
      if (this.enable_sidebar) {
        return "show";
      } else {
        return "";
      }
    },
  },
  methods: {
    toggleElement() {
      this.enable_sidebar = !this.enable_sidebar;
    },
  },
};
</script>
<style lang="scss" scoped>
// @import "https://www.yayasanpetronas.com.my/wp-content/themes/genesis-yayasan/dist/style.theme.css?ver=3.1.0";
.site-header .title-area {
  background-color: white;
  padding: 1rem;
  box-shadow: 0.5rem 0.5rem 1rem rgb(0 0 0 / 0.2);
}
.backdrop {
  position: absolute;
  inset: 0 0 0 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 0.5);

  transition: all 0.3s ease;
}
</style>