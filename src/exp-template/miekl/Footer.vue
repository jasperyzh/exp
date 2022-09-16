<template>
  <footer
    class="
      site-footer site-footer__bg-round-navy
      container-fluid
      pt-5
      pb-3
      mt-5
      text-center
    "
  >
    <div class="wrap">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-8 col-md-6 col-lg-5">
          <section class="footer-about"></section>

          <section class="footer-copyright">
            <p>
              ©&nbsp;2022 KLCC Malaysia’s Iconic Experience ·
              <a href="/privacy-policy">Privacy Policy</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
// @import "./bootstrap-components";

.site-footer__bg-round-navy {
  position: relative;
  overflow: hidden;
  color: #fff;
  :after {
    content: " ";
    display: block;
    width: 100vw;
    height: 100vw;
    border-radius: 50%;
    background-color: $color-navy;

    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -5;
    @include media-breakpoint-down(md) {
      width: 1024px;
      height: 1024px;
    }
  }
}
</style>