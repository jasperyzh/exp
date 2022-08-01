<template>
  <div class="accordion" :id="parent_id">
    <accordion-card
      v-for="(item, index) in content"
      :key="`accordion-card-${index}`"
      :parent_id="parent_id"
      :id="`accordion-card-${index}`"
      :title="item.title"
      :content="item.content"
      :first_item="index == 0"
    ></accordion-card>
  </div>
</template>

<script>
import AccordionCard from "./AccordionCard.vue";
export default {
  components: { AccordionCard },
  data() {
    return {
      parent_id: "accordion_parent",
    };
  },
  props: {
    content: {
      type: Array,
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/style-yayasan.scss";
</style>