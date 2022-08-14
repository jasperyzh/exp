import { createRouter, createWebHistory } from "vue-router";
// import Home from "@/views/Home.vue";
/* import Kwc from "@/views/kwc/Index.vue";
import Yayasan from "@/views/yayasan/Index.vue";
import YayasanAnnualReport from "@/views/yayasan/annual-report-2020.vue";
import Miekl from "@/views/miekl/Index.vue";
import Mckl from "@/views/mckl/Index.vue";
import Fishermen from "@/views/fishermen/Index.vue"; */
// import BootstrapExample from "@/views/bootstrap-example/Index.vue";

// import Experiment from "@/Experiment.vue";
// import Thomson from "@/views/Thomson.vue";
import Home from "@/views/Home.vue";
import sourceData from "@/data.json";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    alias: "/home",
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/protected",
    name: "Protected",
    component: () => import("@/views/Protected.vue"),
    meta: {
      requiresAuth: true,
    },
    /*  children: [
      // nested route_view
      {
        path: "user-secret",
        name: "User Secret",
        component: () => import("@/views/UserSecret.vue"),
      },
    ], */
  },
  {
    path: "/protected/user-secret",
    name: "UserSecret",
    component: () => import("@/views/UserSecret.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/experiment",
    name: "Experiment",
    component: () => import("@/Experiment.vue"),
  },
  {
    path: "/thomson",
    name: "Thomson",
    component: () => import("@/views/Thomson.vue"),
  },
  {
    path: "/p5",
    name: "p5",
    component: () => import("@/views/p5/index.vue"),
  },
  {
    path: "/p5/:id/:slug",
    name: "p5.show",
    component: () => import("@/views/p5/_sketch.vue"),
    props: (route) => ({
      ...route.params,
      id: parseInt(route.params.id),
    }),
    beforeEnter(to, from) {
      const exists = sourceData.p5.find(
        (sketch_data) => sketch_data.id === parseInt(to.params.id)
      );
      if (!exists) {
        return {
          name: "NotFound",

          // doesnt work using vue_router4, see compositionapi guide - https://vueschool.io/lessons/route-guards
          // allows keeping the URL while rendering a different page
          /* params: { pathMatch: to.path.split("/").slide(1) },
          query: to.query,
          hash: to.hash, */
        };
      }
    },
    children: [
      // nested route_view
      {
        path: ":sketch",
        name: "sketch.show",
        component: () => import("@/views/Home.vue"),
        props: (route) => ({
          ...route.params,
          id: parseInt(route.params.id),
        }),
      },
    ],

    // children add through here
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/404.vue"),
  },
  /*  {
    path: "/",
    name: "Home",
    component: Home,
  }, */
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
  /*  {
    path: "/bootstrap-example",
    name: "Bootstrap",
    component: BootstrapExample,
  }, */
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    return (
      savedPosition ||
      new Promise((resolve) => {
        setTimeout(() => resolve({ top: 0, behavior: "smooth" }), 100);
      })
    );
    // return { top: null, left: null, behavior: null };
  },
});

// global_navigation_guard
router.beforeEach((to, from) => {
  if (to.meta.requiresAuth && !window.user) {
    // need to login

    // http://localhost:3000/login?redirect=/protected/user-secret
    return { name: "Login", query: { redirect: to.fullPath } };
  }
});
export default router;
