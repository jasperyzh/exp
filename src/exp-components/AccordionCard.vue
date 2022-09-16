<template>
  <div class="card">
    <div class="card-header" :id="`heading${id}`">
      <h2 class="mb-0">
        <button
          class="btn btn-link btn-block text-left"
          type="button"
          data-toggle="collapse"
          :data-target="`#collapse${id}`"
          :aria-expanded="first_item"
          :aria-controls="`collapse${id}`"
        >
          {{ title }}
        </button>
      </h2>
    </div>

    <div
      :id="`collapse${id}`"
      :class="`collapse ${first_item ? 'show': ''}`"
      :aria-labelledby="`heading${id}`"
      :data-parent="`#${parent_id}`"
    >
      <div class="card-body">
        {{ content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["parent_id", "id", "title", "content", "first_item"],
};
</script>