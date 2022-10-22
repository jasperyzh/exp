/**
 * vue_router
 */
import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    alias: "/home",
  },
  {
    path: "/exp-js",
    name: "JavaScript",
    component: () => import("@/pages/exp-js.vue"),
  },
  {
    path: "/exp-template",
    name: "Template",
    component: () => import("@/pages/exp-template.vue"),
  },
  {
    path: "/exp-p5",
    name: "P5js",
    component: () => import("@/pages/exp-p5.vue"),
  },

  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/pages/app/404.vue"),
  },
  /*
   {
    // push several page via glob
  // {
  //   path: "/experiment",
  //   name: "Experiment",
  //   component: () => import("@/pages/Experiments.vue"),
  // },

  // {
  //   path: "/thomson",
  //   name: "Thomson",
  //   component: () => import("@/pages/micro/Thomson.vue"),
  // },

  // vue_router_authenticate
  // {
  //   path: "/login",
  //   name: "Login",
  //   component: () => import("@/pages/app/Login.vue"),
  // },
  // {
  //   path: "/protected",
  //   name: "Protected",
  //   components: {
  //     default: () => import("@/pages/app/Protected.vue"),
  //     AppSidebar: () => import("@/components/AppSidebar.vue"),
  //   },
  //   meta: {
  //     requiresAuth: true,
  //   },
  // },
  // {
  //   path: "/protected/user-secret",
  //   name: "UserSecret",
  //   components: {
  //     default: () => import("@/pages/app/UserSecret.vue"),
  //     AppSidebar: () => import("@/components/AppSidebar.vue"),
  //   },
  //   meta: {
  //     requiresAuth: true,
  //   },
  // },
  // {
  //   path: "/p5/:id/:slug",
  //   name: "p5.show",
  //   component: () => import("@/pages/p5/_sketch.vue"),
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
  //       component: () => import("@/pages/Home.vue"),
  //       props: (route) => ({
  //         ...route.params,
  //         id: parseInt(route.params.id),
  //       }),
  //     },
  //   ],
  // },
  
  // samples
  // regularexp on the same directory
  // {
  //   path: "/:orderId(\\d+)",
  //   name: "orders",
  // },
  // {
  //   path: "/:productName",
  //   name: "product",
  // }, 
  // {
  //   // do unlimited slashes: localhost/example/1/2/3/4
  //   path: "/example/:id+",
  //   // unlimited slashes that only can be number (+ sign)
  //   path: "/example/:id(\\d+)+",
  //   component: () => import("@/pages/Examples.vue"),
  // },
   }*/
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

/**
 * vue
 */
import { createApp } from "vue";
import App from "@/App.vue";
import Link from "@/components/Link.vue";
import Back from "@/components/Back.vue";
createApp(App)
  // global_component
  .component("Link", Link)
  .component("Back", Back)
  // vue_router
  .use(router)
  // vue_init
  .mount("#app");
