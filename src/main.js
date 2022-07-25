import "jquery";
import "bootstrap";

import "./assets/scss/_default.scss";
// import "./assets/scss/style-yayasan.scss";

import { createApp } from "vue";
// import Bootstrap from "./views/bootstrap-example/index.vue";
// import Fishermen from "./views/fishermen/index.vue";
// import Kwc from "./views/kwc/index.vue";
// import Mckl from "./views/mckl/index.vue";
// import Miekl from "./views/miekl/index.vue";
// import Yayasan from "./views/yayasan/index.vue";
// import Exp from "./views/Exp.vue";

import ScrollAnimation from "./components/sample/ScrollAnimation.vue";

const apps = {
  // "#app": Bootstrap,
  // "#app": Fishermen,
  // "#app": Kwc,
  // "#app": Mckl,
  // "#app": Miekl,
  // "app-yayasan": Yayasan,
  // "app-exp": Exp,
  ScrollAnimation,
};

// vue_init
document.addEventListener("DOMContentLoaded", () => {
  for (const key in apps) {
    // disable for production
    document.body.insertAdjacentHTML("afterbegin", `<div id="${key}"></div>`);

    if (document.querySelector(`#${key}`))
      createApp(apps[key]).mount(`#${key}`);
  }
});
