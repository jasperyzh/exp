/**
 * https://getbootstrap.com/docs/4.6/
 */
// import "jquery";
// import "bootstrap/dist/js/bootstrap.bundle";

/**
 * https://getbootstrap.com/docs/5.2/
 */
import * as bootstrap from "bootstrap";

/**
 * scss
 */
import "@/scss/style.scss";

// vue_router
import router from "@/router";
import AppLink from "@/components/AppLink.vue";
// vue
import { createApp } from "vue";
import App from "@/App.vue";
const apps = { App };

document.addEventListener("DOMContentLoaded", () => {
  for (const key in apps) {
    document.body.insertAdjacentHTML(
      "afterbegin",
      `<div id="${key}" class="site-container"></div>`
    );

    if (document.querySelector(`#${key}`)) {
      if (key == "App") {
        createApp(apps[key])
          // global_component
          .component("AppLink", AppLink)
          // vue_router
          .use(router)
          // vue_init
          .mount(`#${key}`);
      }
      //
      // else {
      //   createApp(apps[key]).mount(`#${key}`);
      // }
    }
  }
});
