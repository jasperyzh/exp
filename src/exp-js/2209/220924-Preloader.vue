<!-- preloader_start  -->
<template>
  <pre>
    Webpage Preloader
    220924 [completed]
    - https://yeahexp.com/how-to-make-preloader-for-js-loading-time/
    preloader best to be place on index.html, insert above everything else
  </pre>
  <div id="preloader" class="visible"></div>
</template>
<style>
#preloader {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1031;
  width: 100%;
  height: 100%;
  overflow: visible;
  background: #fdfdfd url("//cdnjs.cloudflare.com/ajax/libs/file-uploader/3.7.0/processing.gif") no-repeat center center;
}

.visible {
  visibility: visible;
  opacity: 1;
  transition: opacity 320ms linear;
}

.hidden {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s 320ms, opacity 320ms linear;
}
</style>
<script>
// DOMContentLoaded vs load?
window.addEventListener("DOMContentLoaded", (event) => {
  let preloaderEl = document.getElementById("preloader");
  preloaderEl.classList.add("hidden");
  preloaderEl.classList.remove("visible");
});
</script>
<!-- preloader_end -->