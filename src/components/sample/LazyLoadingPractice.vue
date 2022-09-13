<template>

<pre>
    <a href="https://www.youtube.com/watch?v=AActXSWxsRo">Lazy loading is too easy now - kevin powell</a>
    <ol>
        <li>add <code>loading="lazy" into &lt;img&gt;</code></li>
        <li><code>loading="eager"</code> is the default behavior</li>
        <li>can be use on <code>iframe</code>!</li>
    </ol>
</pre>
  <figure v-for="(item, index) in placeholder_images" :key="`figure-${index}`">
    <img loading="lazy" :src="item" :alt="`placeholder image ${index}`" />
  </figure>
</template>


<script setup>
import { placeholder_images } from "@/components/AppPlaceholder";

console.log(placeholder_images);
</script>
