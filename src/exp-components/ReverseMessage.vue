<template>
  <div id="bind-attribute">
    <span v-bind:title="message">
      Hover your mouse over me for a few seconds to see my dynamically bound
      title!
    </span>
  </div>
  <div id="event-handling">
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage">Reverse Message</button>
  </div>
  <div id="two-way-binding">
    <p>{{ message }}</p>
    <input v-model="message" />
  </div>
</template>
<script>
export default {
  /* props: {
    message: String,
  }, */
  data() {
    return {
      message: "You loaded this page on " + new Date().toLocaleString(),
    };
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split("").reverse().join("");
    },
  },
};
</script>