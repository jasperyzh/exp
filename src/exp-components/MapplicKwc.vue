<template>
  <h2>mapplic-kwc</h2>

  <section class="border">
    <div id="mapplic"></div>
  </section>
</template>

<script>
import "@/vendor/mapplic/js/jquery.min.js";
import "@/vendor/mapplic/js/jquery.mousewheel.js";
import "@/vendor/mapplic/js/script.js";
// import "@/vendor/mapplic/js/csvparser.js";
import "@/vendor/mapplic/mapplic/mapplic.js";

import MallJson from "@/vendor/mapplic/mall.json";

export default {
  mounted() {
    // parse csv to json

    (($) => {
      $(document).ready(function () {
        // var css =
        //   ".mapplic-filtered svg [id^=landmark] > * {opacity: 1 !important; }";

        var map = $("#mapplic").mapplic({
          source: MallJson,
          // customcss: css,
          sidebar: true,
          sidebartoggle: true,
          alphabetic: true,
          height: 550,
          developer: true,
          searchdescription: true,
          searcheverywhere: true,
          animations: true,
          minimap: false,
          marker: "hidden",
          fillcolor: false,
          fullscreen: false,
          developer: false,
          thumbholder: true,
          maxscale: 3,
        });
      });
    })(jQuery);
  },
};
</script>

<style>
/* @import "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600"; */

/* @import "@/vendor/mapplic/fontawesome/css/all.min.css"; */
@import "@/vendor/mapplic/mapplic/mapplic.css";
</style>