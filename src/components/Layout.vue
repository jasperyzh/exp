<template>
    <div :class="`site-container ${classes}`">

        <Header :nav_items="nav_items" />

        <slot></slot>

        <Footer />
    </div>
</template>

<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

import { computed } from "@vue/runtime-core";

const props = defineProps(["nav_items"]);

const classes = computed(() => {
    let output = "";
    for (const key in props.layout_options) {
        if (props.layout_options.hasOwnProperty(key)) {
            output += `${key} `;
        }
    }
    console.log(output)
    return output;
})
</script>


<style>
html,
body,
#app,
.site-container {
    height: 100%;
}

.site-container {
    display: grid;
    column-gap: 1rem;
    grid-template-rows: auto 1fr auto;
}

/* layout_full_width_content */
.site-container {
    grid-template-columns: 1fr 1fr 1fr;
}

.site-container>header {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
}

.site-container>main {
    grid-column: 1 / -1;
    grid-row: 2 / 3;
}

.site-container>footer {
    grid-column: 1 / -1;
    grid-row: -1 / -2;
}
</style>