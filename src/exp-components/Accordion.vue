<template>
  <div class="accordion" :id="`accordion-${id}`">
    <div
      class="accordion-item"
      v-for="(item, index) in faq"
      :key="`accordion-${id}-${index}`"
    >
      <h2 :class="`accordion-header`" :id="`${id}-heading-${index}`">
        <button
          :class="`accordion-button ${index > 0 ? 'collapsed' : ''}`"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="`#${id}-collapse-${index}`"
          :aria-expanded="`${index <= 0 ? 'true' : 'false'}`"
          :aria-controls="`${id}-collapse-${index}`"
        >
          {{ item.question }}
        </button>
      </h2>
      <div
        :id="`${id}-collapse-${index}`"
        :class="`accordion-collapse collapse ${index <= 0 ? 'show' : ''}`"
        :aria-labelledby="`${id}-heading-${index}`"
      >
        <div class="accordion-body" v-html="item.answer"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id", "faq"],
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
$secondary: #00635b;
.accordion-body {
  font-size: 0.9rem;
      border-left: 5px solid $secondary;
}
</style>