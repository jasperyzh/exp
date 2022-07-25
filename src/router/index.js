import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
/* import Kwc from "@/views/kwc/Index.vue";
import Yayasan from "@/views/yayasan/Index.vue";
import YayasanAnnualReport from "@/views/yayasan/annual-report-2020.vue";
import Miekl from "@/views/miekl/Index.vue";
import Mckl from "@/views/mckl/Index.vue";
import Fishermen from "@/views/fishermen/Index.vue"; */
import BootstrapExample from "@/views/bootstrap-example/Index.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  /* {
    path: "/kwc",
    name: "Kwc",
    component: Kwc,
  },
  {
    path: "/yayasan",
    name: "Yayasan",
    component: Yayasan,
  },
  {
    path: "/yayasan/annual-report-2020",
    name: "YayasanAnnualReport",
    component: YayasanAnnualReport,
  },
  {
    path: "/miekl",
    name: "Miekl",
    component: Miekl,
  },
  {
    path: "/mckl",
    name: "Mckl",
    component: Mckl,
  },
  {
    path: "/fishermen",
    name: "Fishermen",
    component: Fishermen,
  }, */
  {
    path: "/bootstrap-example",
    name: "Bootstrap",
    component: BootstrapExample,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
