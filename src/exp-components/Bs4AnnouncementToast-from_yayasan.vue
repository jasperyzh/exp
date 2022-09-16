<template>
  <div
    class="position-fixed bottom-0 right-0 p-3"
    style="z-index: 5; right: 0; bottom: 0"
  >
    <div
      id="liveToast"
      class="toast hide"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      :data-delay="get_delay_in_sec"
    >
      <div class="toast-header justify-content-end">
        <button
          type="button"
          class="close bg-light p-1 rounded-circle"
          data-dismiss="toast"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
      </div>
      <div class="toast-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    delay_in_sec: {
      type: Number,
      default: 12,
    },
  },
  mounted() {
    const $ = window.jQuery;

    $("#liveToast").toast("show");
  },
  computed: {
    get_delay_in_sec() {
      return this.delay_in_sec * 1000;
    },
  },
};
</script>

<style lang="scss" scoped>
.toast,
.toast-header {
  background-color: transparent;
  border: 0;
  box-shadow: none;
}
.toast-img {
  filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.5));
}
.close,
.close .bi {
  font-size: 1rem;
}
</style>