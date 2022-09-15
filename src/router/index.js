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
// import sourceData from "@/data.json";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    alias: "/home",
  },
  {
    path: "/exp-pixi",
    name: "Pixi",
    component: () => import("@/views/exp-pixi.vue"),
  },
  {
    path: "/exp-p5",
    name: "P5js",
    component: () => import("@/views/exp-p5.vue"),
  },
  {
    path: "/exp-bs",
    name: "Bootstrap",
    component: () => import("@/views/exp-bs/index.vue"),
  },

  // push several page via glob

  // {
  //   path: "/experiment",
  //   name: "Experiment",
  //   component: () => import("@/views/Experiments.vue"),
  // },

  {
    path: "/thomson",
    name: "Thomson",
    component: () => import("@/views/micro/Thomson.vue"),
  },

  // vue_router_authenticate
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/app/Login.vue"),
  },
  {
    path: "/protected",
    name: "Protected",
    components: {
      default: () => import("@/views/app/Protected.vue"),
      AppSidebar: () => import("@/components/AppSidebar.vue"),
    },
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/protected/user-secret",
    name: "UserSecret",
    components: {
      default: () => import("@/views/app/UserSecret.vue"),
      AppSidebar: () => import("@/components/AppSidebar.vue"),
    },
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/p5",
    name: "p5",
    component: () => import("@/views/p5/index.vue"),
  },
  // {
  //   path: "/p5/:id/:slug",
  //   name: "p5.show",
  //   component: () => import("@/views/p5/_sketch.vue"),
  //   props: (route) => ({
  //     ...route.params,
  //     id: parseInt(route.params.id),
  //   }),
  //   beforeEnter(to, from) {
  //     const exists = sourceData.p5.find(
  //       (sketch_data) => sketch_data.id === parseInt(to.params.id)
  //     );
  //     if (!exists) {
  //       return {
  //         name: "NotFound",

  //         // doesnt work using vue_router4, see compositionapi guide - https://vueschool.io/lessons/route-guards
  //         // allows keeping the URL while rendering a different page
  //         // params: { pathMatch: to.path.split("/").slide(1) },
  //         // query: to.query,
  //         // hash: to.hash,
  //       };
  //     }
  //   },
  //   children: [
  //     // nested route_view
  //     {
  //       path: ":sketch",
  //       name: "sketch.show",
  //       component: () => import("@/views/Home.vue"),
  //       props: (route) => ({
  //         ...route.params,
  //         id: parseInt(route.params.id),
  //       }),
  //     },
  //   ],
  // },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/app/404.vue"),
  },
  /*
  samples
  regularexp on the same directory
  {
    path: "/:orderId(\\d+)",
    name: "orders",
  },
  {
    path: "/:productName",
    name: "product",
  }, 
  {
    // do unlimited slashes: localhost/example/1/2/3/4
    path: "/example/:id+",
    // unlimited slashes that only can be number (+ sign)
    path: "/example/:id(\\d+)+",
    component: () => import("@/views/Examples.vue"),
  },
  */
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
