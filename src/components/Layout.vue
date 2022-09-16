<template>
    <div :class="`site-container ${classes}`">

        <Header v-if="!layout_options.hide_header" :nav_items="nav_items" />

        <slot></slot>

        <Footer v-if="!layout_options.hide_footer" />

    </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { computed, reactive } from "@vue/runtime-core";

const props = defineProps(["nav_items", "layout_options"]);

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


<style lang="scss">
// header
.site-container:has(> header)>main {
    margin-top: 56px;
}

#offcanvasNavbar2 {
    top: 56px;
}

// layout
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

    // layout_full_width_content
    grid-template-columns: 1fr 1fr 1fr;

    &>header {
        grid-column: 1 / -1;
        grid-row: 1 / 2;
    }

    &>main {
        grid-column: 1 / -1;
        grid-row: 2 / 3;
    }

    &>footer {
        grid-column: 1 / -1;
        grid-row: -1 / -2;
    }
}
</style>