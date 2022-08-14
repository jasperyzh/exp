<template>
  <div class="views experiment">
    <GridPractice>
      <IntersectionObserverPractice />
    </GridPractice>
    <!-- <GridPractice>
    <HorizontalMediaScroller />
    <RellaxPractice />


    <LazyLoadingPractice />
  </GridPractice> -->

    <!-- <GridLayoutPractice /> -->

    <!-- <GetStarted /> -->

    <!-- <YayasanHeader />
  <YayasanFooter /> -->
    <!-- 
    <BasicGalleryFilter :placeholder_images="placeholder_images" />
    <Cheatsheet />
    <CardAwwwardDisplayVue /> 
    <BasicSvgDivider />
  --></div>
</template>

<script setup>
// placeholder
import { placeholder_images, hello_world } from "@/components/Placeholder.js";
import Cheatsheet from "@/views/bs5/example/Cheatsheet.vue";

// basic components
import BasicGalleryFilter from "@/components/sample/BasicGalleryFilter.vue";
import BasicSvgDivider from "@/components/sample/BasicSvgDivider.vue";

// experimentation
import CardAwwwardDisplayVue from "@/components/sample/CardAwwwardDisplay.vue";
import GridPractice from "@/components/sample/GridPractice.vue";
import RellaxPractice from "@/components/sample/RellaxPractice.vue";
import IntersectionObserverPractice from "@/components/sample/IntersectionObserverPractice.vue";
import LazyLoadingPractice from "@/components/sample/LazyLoadingPractice.vue";
import HorizontalMediaScroller from "@/components/sample/HorizontalMediaScroller.vue";

import GridLayoutPractice from "@/components/sample/GridLayoutPractice.vue";
import GetStarted from "./views/pixi/get-started.vue";

// yayasan styling
// import YayasanHeader from "@/bs5/yayasan/Header2.vue";
// import YayasanFooter from "@/bs5/yayasan/Footer2.vue";
</script>

