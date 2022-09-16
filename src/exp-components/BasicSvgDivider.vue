<template>
  <pre>bs4 - escape-svg for background</pre>
  <div class="divider" style="height: 80px"></div>
</template>

<style lang="scss" scoped>
@import "legacy-bootstrap/scss/functions";
@import "legacy-bootstrap/scss/variables";

// divider
.divider {
  height: 80px;
  background-image: escape-svg(
    url('data:image/svg+xml;utf8,<svg id="visual" viewBox="0 0 1024 100" width="1024" height="100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="1024" height="100" fill="#fafafa"></rect><path d="M0 42L24.3 43C48.7 44 97.3 46 146.2 48.7C195 51.3 244 54.7 292.8 54.7C341.7 54.7 390.3 51.3 439 49.5C487.7 47.7 536.3 47.3 585 48C633.7 48.7 682.3 50.3 731.2 52C780 53.7 829 55.3 877.8 53.3C926.7 51.3 975.3 45.7 999.7 42.8L1024 40L1024 101L999.7 101C975.3 101 926.7 101 877.8 101C829 101 780 101 731.2 101C682.3 101 633.7 101 585 101C536.3 101 487.7 101 439 101C390.3 101 341.7 101 292.8 101C244 101 195 101 146.2 101C97.3 101 48.7 101 24.3 101L0 101Z" fill="#0066FF" stroke-linecap="round" stroke-linejoin="miter"></path></svg>')
  );
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>