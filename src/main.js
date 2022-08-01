/**
 * bootstrap4
 */
import "jquery";
import "bootstrap/dist/js/bootstrap.bundle";
import "./scss/_default-bs4.scss";

/**
 * bootstrap5
 */
// import * as bootstrap from "bootstrap";
// import "./assets/scss/_default-bs5.scss";

// // bs4
// import Bs4 from "./views/bs4/index.vue";
// const apps = { Bs4 };

// // bs5
// import Bs5 from "./views/bs5/index.vue";
// const apps = { Bs5 };

// experiment
import Experiment from "./views/Experiment.vue";
const apps = { Experiment };

// vue_init
import { createApp } from "vue";
document.addEventListener("DOMContentLoaded", () => {
  for (const key in apps) {
    // disable for production
    document.body.insertAdjacentHTML("afterbegin", `<div id="${key}"></div>`);

    if (document.querySelector(`#${key}`))
      createApp(apps[key]).mount(`#${key}`);
  }
});
