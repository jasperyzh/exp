<template>
  <pre>
  <a href="https://www.youtube.com/watch?v=huVJW23JHKQ">Fade and scroll items into view while scrolling - using IntersectionObserver</a>
</pre>
  <section
    :id="`sec-${sec}`"
    :key="`sec-${sec}`"
    class="py-5"
    v-for="sec in section_obs"
    ref="sectionRefs"
  >
    <h2 class="fade-in" ref="section__headings">
      Intersection Observer API {{ sec }}
    </h2>
    <p class="slide-left" ref="paragraphs">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quaerat id
      magnam est dignissimos facilis. Voluptates molestias vel at inventore
      provident veniam quaerat sint incidunt voluptatem unde. Quod, dolorum
      optio.
    </p>
    <p class="slide-right" ref="paragraphs">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quaerat id
      magnam est dignissimos facilis. Voluptates molestias vel at inventore
      provident veniam quaerat sint incidunt voluptatem unde. Quod, dolorum
      optio.
    </p>
  </section>
</template>

<script setup>
import { onMounted, ref } from "@vue/runtime-core";

const section_obs = ref([1, 2, 3, 4, 5]);

const sectionRefs = ref([]);
const section__headings = ref([]);
const paragraphs = ref([]);

// observer
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      // console.log(entry.target);
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.toggle("highlight");
      observer.unobserve(entry.target);
    });
  },
  {
    // options
    root: null, // viewport
    threshold: 0.25, // more than 25% of the element within view
    rootMargin: "-150px", // "-150px 0px -200px 0px" (must use px)
  }
);

const appearOnScroll = new IntersectionObserver(
  (entries, appearOnScroll) => {
    entries.forEach((entry) => {
      // console.log(entry.target);
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  {
    // options
    root: null, // viewport
    threshold: 1, // more than 25% of the element within view
    rootMargin: "0px 0px 100px 0px", // "-150px 0px -200px 0px" (must use px)
  }
);

onMounted(() => {
  console.log(section_obs);
  console.log(sectionRefs);

  sectionRefs.value.forEach((sec) => {
    sec.style.width = "50%";
    sec.style.marginInline = "auto";
    sec.style.marginBottom = "0.5rem";
    sec.style.padding = "1rem";

    // observer
    observer.observe(sec);
  });

  section__headings.value.forEach((heading) => {
    // appearOnScroll
    appearOnScroll.observe(heading);
  });
  paragraphs.value.forEach((paragraph) => {
    // appearOnScroll
    appearOnScroll.observe(paragraph);
  });
});
</script>

<style lang="scss" scoped>
.highlight {
  border: 1rem solid lime;
}
.fade-in {
  opacity: 0;
  transition: opacity 0.25s ease-in;
}
.fade-in.appear {
  opacity: 1;
}
.slide-right,
.slide-left {
  transform: translateX(-3rem);
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.5s ease;
}
.slide-right {
  transform: translateX(3rem);
}
.slide-right.appear,
.slide-left.appear {
  transform: translateX(0);
  opacity: 1;
}
</style>