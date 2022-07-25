<template>
  <footer class="site-footer">
    <div class="wrap">
      <section data-v-ffcd0396="" id="footer-before" class="bg-gradient--pink">
        <div data-v-ffcd0396="" class="container">
          <div data-v-ffcd0396="" class="row">
            <div data-v-ffcd0396="" class="col-md-6">
              <a
                data-v-ffcd0396=""
                href="https://www.kenangacity.com.my/getting-here/"
                ><img
                  data-v-ffcd0396=""
                  src="/wp-content/themes/genesis-kwc/dist/img/visittoday.png"
                  alt="..."
                  class="shopping m-4"
              /></a>
            </div>
            <div data-v-ffcd0396="" class="col-md-6">
              <img
                data-v-ffcd0396=""
                src="/wp-content/themes/genesis-kwc/dist/img/footer-before-lady.png"
                alt="..."
                class="lady"
              />
            </div>
          </div>
        </div>
      </section>
      <div class="footer-widgets" id="genesis-footer-widgets">
        <h2 class="genesis-sidebar-title screen-reader-text">Footer</h2>
        <div class="wrap">
          <div class="widget-area footer-widgets-1 footer-widget-area">
            <section id="media_image-2" class="widget widget_media_image">
              <div class="widget-wrap">
                <img
                  width="180"
                  height="50"
                  src="https://www.kenangacity.com.my/wp-content/uploads/2021/03/logo-love-fashion.png"
                  class="image wp-image-30679 attachment-full size-full"
                  alt=""
                  loading="lazy"
                  style="max-width: 100%; height: auto"
                />
              </div>
            </section>
          </div>
          <div class="widget-area footer-widgets-2 footer-widget-area">
            <section id="nav_menu-2" class="widget widget_nav_menu">
              <div class="widget-wrap">
                <h3 class="widgettitle widget-title">
                  Follow us on social media
                </h3>
                <nav
                  class="menu-social-media-container"
                  aria-label="Follow us on social media"
                >
                  <ul id="menu-social-media" class="menu">
                    <li
                      id="menu-item-29481"
                      class="
                        icon-facebook
                        menu-item
                        menu-item-type-custom
                        menu-item-object-custom
                        menu-item-29481
                      "
                    >
                      <a
                        target="_blank"
                        rel="noopener"
                        href="https://www.facebook.com/KWCfashionwholesale/"
                        >Facebook</a
                      >
                    </li>
                    <li
                      id="menu-item-29482"
                      class="
                        icon-twitter
                        menu-item
                        menu-item-type-custom
                        menu-item-object-custom
                        menu-item-29482
                      "
                    >
                      <a
                        target="_blank"
                        rel="noopener"
                        href="https://twitter.com/kwc_kl"
                        >Twitter</a
                      >
                    </li>
                    <li
                      id="menu-item-29483"
                      class="
                        icon-youtube
                        menu-item
                        menu-item-type-custom
                        menu-item-object-custom
                        menu-item-29483
                      "
                    >
                      <a
                        target="_blank"
                        rel="noopener"
                        href="https://www.youtube.com/user/KenangaWholesaleCity"
                        >YouTube</a
                      >
                    </li>
                    <li
                      id="menu-item-29484"
                      class="
                        icon-instagram
                        menu-item
                        menu-item-type-custom
                        menu-item-object-custom
                        menu-item-29484
                      "
                    >
                      <a
                        target="_blank"
                        rel="noopener"
                        href="https://www.instagram.com/kwcfashionwholesale/"
                        >Instagram</a
                      >
                    </li>
                  </ul>
                </nav>
              </div>
            </section>
          </div>
        </div>
      </div>
      <!-- footer -->
      <footer
        class="
          site-footer
          py-3
          border-top border-light
          bg-black
          text-white
          a--dark
          text-center
        "
      >
        <div class="container">
          <div
            class="
              row
              flex-wrap flex-column flex-lg-row
              justify-content-center
              align-items-center
            "
          >
            <div class="col-auto px-1">
              <ul
                id="menu-footer"
                class="
                  menu
                  genesis-nav-menu
                  menu-secondary
                  p-0
                  d-inline-block
                  w-auto
                "
              >
                <li
                  id="menu-item-29566"
                  class="
                    menu-item
                    menu-item-type-post_type
                    menu-item-object-page menu-item-29566
                  "
                >
                  <a
                    href="https://www.kenangacity.com.my/en/personal-data-protection-act/"
                    >Personal Data Protection Act<span class="middot"
                      >·</span
                    ></a
                  >
                </li>
                <li
                  id="menu-item-29565"
                  class="
                    menu-item
                    menu-item-type-post_type
                    menu-item-object-page menu-item-29565
                  "
                >
                  <a href="https://www.kenangacity.com.my/en/terms-of-use/"
                    >Terms of Use<span class="middot">·</span></a
                  >
                </li>
              </ul>
            </div>

            <div class="col-auto px-1">
              <p>©&nbsp;2022 KWC Fashion Wholesale</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
// @import "./bootstrap-components";

.site-footer {
  background-color: #333;
  color: #eee;
}

.footer-separator {
  background-color: pink;

  &-popup-image {
    position: relative;
    height: 100%;
    img {
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 100;
      transition: transform 0.3s ease;
      transform-origin: bottom right;
      max-width: 240px;
      // transform: scale(0.5);
      // @include media-breakpoint-up(sm) {
      //   transform: scale(0.7);
      // }
      // @include media-breakpoint-up(md) {
      //   transform: scale(1);
      // }
    }
  }

  /*  &.footer-separator-top {
      margin-top: 6rem;
      @include media-breakpoint-up(sm) {
        margin-top: 7rem;
      }
      @include media-breakpoint-up(md) {
        margin-top: 8rem;
      }
    } */
}

.footer-widgets {
  padding: 3rem 0;
  background-color: #313131;
  color: white;
  text-align: center;
  .wrap {
    display: flex;
    justify-content: space-between;
  }
}
// footer-widget mobile fix
.footer-widgets .wrap {
  flex-wrap: wrap;
}
.widget-title {
  font-size: inherit;
}
.footer-widget-area {
  @include media-breakpoint-down(md) {
    padding-left: 15px;
    padding-right: 15px;
  }
}

.site-footer {
  .middot {
    margin-left: 4px;
    @include media-breakpoint-down(lg) {
      display: none;
    }
  }
}

</style>