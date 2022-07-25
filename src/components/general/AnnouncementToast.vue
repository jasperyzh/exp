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
          <i class="bi bi-x"></i>
        </button>
      </div>
      <div class="toast-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  props: {
    delay_in_sec: {
      type: Number,
      default: 8,
    },
  },
  mounted() {
    console.log("announcement-toast");
    $("#liveToast").toast("show");
  },
  computed: {
    get_delay_in_sec(){
      return this.delay_in_sec * 1000
    }
  }
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