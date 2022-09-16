/**
 * bootstrap
 */
import * as bootstrap from "bootstrap";

/**
 * scss
 */
import "./style.scss";

/**
 * vue
 */
import { createApp } from "vue";
import App from "@/App.vue";
import Link from "@/components/Link.vue";
import Back from "@/components/Back.vue";
// vue_router
import router from "./router";

createApp(App)
  // global_component
  .component("Link", Link)
  .component("Back", Back)
  // vue_router
  .use(router)
  // vue_init
  .mount("#app");
