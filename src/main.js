/**
 * https://animate.style/#utilities
 */
import "animate.css";

/**
 * bootstrap4
 */
/* import "jquery";
import "bootstrap/dist/js/bootstrap.bundle";
import "./scss/_default-bs4.scss"; */
/**
 * bootstrap5
 */
import * as bootstrap from "bootstrap";
import "./scss/_default-bs5.scss";

// // bs4
// import Bs4 from "./views/bs4/index.vue";
// const apps = { Bs4 };

// // bs5
// import Bs5 from "./views/bs5/index.vue";
// const apps = { Bs5 };

// experiment
// import Experiment from "./views/Experiment.vue";
// const apps = { Experiment };

// vue_router
import App from "@/App.vue";
import router from "@/router";
import AppLink from "@/components/AppLink.vue";
const apps = { App };

/* import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
  ],
}); */

// vue_init
import { createApp } from "vue";
document.addEventListener("DOMContentLoaded", () => {
  for (const key in apps) {
    // disable for production
    document.body.insertAdjacentHTML(
      "afterbegin",
      `<div id="${key}" class="site-container"></div>`
    );

    if (document.querySelector(`#${key}`)) {
      if (key == "App") {
        // vue_router
        createApp(apps[key])
          .component("AppLink", AppLink)
          .use(router)
          .mount(`#${key}`);
      } else {
        createApp(apps[key]).mount(`#${key}`);
      }
    }
  }
});
