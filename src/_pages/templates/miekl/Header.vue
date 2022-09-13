<template>
  <header class="site-header navbar navbar-expand-lg fixed-top">
    <div class="wrap">
      <div class="title-area">
        <a
          href="https://klcciconic.com.my/"
          class="custom-logo-link"
          rel="home"
          aria-current="page"
          ><img
            width="298"
            height="93"
            src="https://klcciconic.com.my/wp-content/uploads/2020/10/klcc_iconic_experience_logo-dark-e1604393840490.png"
            class="custom-logo"
            alt="KLCC Malaysia's Iconic Experience"
        /></a>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <nav class="nav-primary" aria-label="Main" id="genesis-nav-primary">
          <ul
            id="menu-menu-primary"
            class="
              menu
              genesis-nav-menu
              menu-primary
              js-superfish
              sf-js-enabled sf-arrows
            "
            style="touch-action: pan-y"
          >
            <li
              id="menu-item-1238"
              class="
                menu-item
                menu-item-type-post_type
                menu-item-object-page menu-item-home
                current-menu-item
                page_item page-item-1111
                current_page_item
                menu-item-1238
              "
            >
              <a href="https://klcciconic.com.my/" aria-current="page"
                ><span>Home</span></a
              >
            </li>
            <li
              id="menu-item-1092"
              class="
                menu-item menu-item-type-custom menu-item-object-custom
                current-menu-item current_page_item
                menu-item-home menu-item-1092
              "
            >
              <a
                href="https://klcciconic.com.my/#activities"
                aria-current="page"
                ><span>Experience</span></a
              >
            </li>
            <li
              id="menu-item-126"
              class="
                menu-item
                menu-item-type-taxonomy
                menu-item-object-category
                menu-item-126
              "
            >
              <a href="https://klcciconic.com.my/category/promotions/"
                ><span>What’s On</span></a
              >
            </li>
            <li
              id="menu-item-125"
              class="
                menu-item
                menu-item-type-post_type
                menu-item-object-page menu-item-125
              "
            >
              <a href="https://klcciconic.com.my/getting-here/"
                ><span>Getting Here</span></a
              >
            </li>
            <li
              id="menu-item-293"
              class="
                menu-item
                menu-item-type-post_type
                menu-item-object-page menu-item-293
              "
            >
              <a href="https://klcciconic.com.my/about-us/"
                ><span>About Us</span></a
              >
            </li>
            <li
              id="menu-item-508"
              class="
                menu-item
                menu-item-type-post_type
                menu-item-object-page menu-item-508
              "
            >
              <a href="https://klcciconic.com.my/gallery/"
                ><span>Gallery</span></a
              >
            </li>
            <li
              id="menu-item-127"
              class="
                menu-item--highligh
                menu-item
                menu-item-type-post_type
                menu-item-object-page menu-item-127
              "
            >
              <a href="https://klcciconic.com.my/contact-us/"
                ><span>Important Contacts</span></a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
// @import "./bootstrap-components";
.site-header {
  padding: 1rem 0;
  background-color: $color-navy;
  transition: all 0.3s ease;

  .title-area {
    margin-left: 1rem;
  }
  .navbar-toggler {
    margin-right: 1rem;
  }
  .navbar-collapse {
    margin-top: 1rem;
    @include media-breakpoint-up(lg) {
      margin-top: 0;
      margin-right: 1rem;
    }
  }

  &.slim {
    padding: 0;
    .navbar-collapse {
      margin-top: 0;
    }
  }
}

.wrap {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  .site-header & {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
}

// transparency for site-header over masthead
.site-header-transparent .site-header {
  background-color: transparent;
  &.slim {
    background-color: $color-navy;
  }
}

.title-area {
  .custom-logo {
    transform-origin: left center;
    transition: transform 0.3s ease;
    max-width: 164px;

    @include media-breakpoint-up(sm) {
      max-width: 220px;
    }

    .slim & {
      transform: scale(0.7);
    }
  }
}
</style>