<template>
    <div class="exp-js container my-4">

        <h1>JavaScript Experiments</h1>
        <hr />
        <!-- starts -->

        <h2>Intersection Observer</h2>
        <!-- <IntersectionObserverPractice /> -->


        <h2>Components</h2>
        <!-- <SwipeVideoGallery /> -->

        <hr />

        <!-- <h2>EyeballsFollowMouse</h2>
        <EyeballsFollowMouse /> -->

        <!-- <GProgrammingForNoobz /> -->

        <!-- <GameAsteroid /> -->

        <h2>DateWithJavascript | Day.js</h2>
        <DateWithJavascript />


        <h2>vuelidate example</h2>
        <VuelidateExample />
    </div>
</template>

<script setup>
// import EyeballsFollowMouse from "@/exp-js/220924-EyeballsFollowMouse.vue";
// import IntersectionObserverPractice from "../exp-js/2210/IntersectionObserver.vue";
// import SwipeVideoGallery from "@/exp-components/SwipeVideoGallery.vue";
// import GProgrammingForNoobz from "@/exp-js/GProgrammingForNoobz.vue";

import DateWithJavascript from "@/exp-js/2210/DateWithJavaScript.vue";
import VuelidateExample from "@/exp-components/VuelidateExample.vue";


/* import { NavigationFailureType } from "vue-router";
// vue_router on detected navigation_failure/error
async function routerErrors() {
    const navigationFailure = await router.push("/");
    if (
        isNavigationFailure(navigationFailure, NavigationFailureType.duplicated)
    ) {
        console.log(navigationFailure.to);
        console.log(navigationFailure.from);
    } else {
        // all_good
    }
} */
</script>
