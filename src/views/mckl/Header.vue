<template>
  <header id="site-header" class="header site-header fixed-top" role="banner">
    <nav
      class="navbar navbar-expand-xl navbar-dark bg-primary navbar--max-width"
    >
      <div class="site-logo">
        <a href="https://mckl.edu.my"></a>
        <div class="site-logo__wrap">
          <a href="https://mckl.edu.my"></a
          ><a href="https://mckl.edu.my/" class="custom-logo-link" rel="home"
            ><img
              width="200"
              src="https://mckl.edu.my/wp-content/uploads/2021/04/logo-mckl.png"
              data-src="https://mckl.edu.my/wp-content/uploads/2021/04/logo-mckl.png"
              class="custom-logo lazyloaded"
              alt="Methodist College Kuala Lumpur"
              data-srcset="https://mckl.edu.my/wp-content/uploads/2021/04/logo-mckl.png 580w, https://mckl.edu.my/wp-content/uploads/2021/04/logo-mckl-242x300.png 242w"
              data-sizes="(max-width: 580px) 100vw, 580px"
              sizes="(max-width: 580px) 100vw, 580px"
              srcset="
                https://mckl.edu.my/wp-content/uploads/2021/04/logo-mckl.png         580w,
                https://mckl.edu.my/wp-content/uploads/2021/04/logo-mckl-242x300.png 242w
              "
          /></a>
        </div>
      </div>
      <nav
        id="site-navigation"
        class="primary-navigation navbar navbar-expand-xl flex-wrap"
        role="navigation"
        aria-label="Primary menu"
      >
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-primary"
          aria-controls="navbar-primary"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="bi bi-list"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbar-primary">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                href="https://mckl.edu.my/about-mckl/"
                class="nav-link dropdown-toggle"
                id="nav-qwerty"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >About MCKL</a
              >
              <ul class="dropdown-menu" aria-labelledby="nav-qwerty">
                <a
                  href="https://mckl.edu.my/about-mckl/welcome-message/"
                  class="dropdown-item"
                  >Welcome Message</a
                >
                <a
                  href="https://mckl.edu.my/about-mckl/our-story/"
                  class="dropdown-item"
                  >Our Story</a
                >
                <a
                  href="https://mckl.edu.my/about-mckl/vision-mission/"
                  class="dropdown-item"
                  >Vision &amp; Mission</a
                >
                <a
                  href="https://mckl.edu.my/about-mckl/our-team/"
                  class="dropdown-item"
                  >Our Team</a
                >
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                href="https://mckl.edu.my/programmes/"
                class="nav-link dropdown-toggle"
                id="nav-qwerty"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Programmes</a
              >
              <ul class="dropdown-menu" aria-labelledby="nav-qwerty">
                <a href="https://mckl.edu.my/programmes/" class="dropdown-item"
                  >Programmes Overview</a
                >
                <a
                  href="https://mckl.edu.my/programmes/whole-person-education/"
                  class="dropdown-item"
                  >Whole Person Education Department</a
                >
                <a
                  href="https://mckl.edu.my/programmes/mpusubjects/"
                  class="dropdown-item"
                  >MPU Subjects (Compulsory Subjects)</a
                >
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                href="https://mckl.edu.my/admission/"
                class="nav-link dropdown-toggle"
                id="nav-qwerty"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Admission</a
              >
              <ul class="dropdown-menu" aria-labelledby="nav-qwerty">
                <a
                  href="https://mckl.edu.my/admission/malaysian-student/"
                  class="dropdown-item"
                  >Malaysian Student</a
                >
                <a
                  href="https://mckl.edu.my/admission/international-student/"
                  class="dropdown-item"
                  >International Student</a
                >
                <a
                  href="https://mckl.edu.my/admission/scholarship-financial-aid/"
                  class="dropdown-item"
                  >Scholarship &amp; Financial Aid</a
                >
                <a
                  href="https://mckl.edu.my/admission/university-placement/"
                  class="dropdown-item"
                  >University Placement</a
                >
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                href="https://mckl.edu.my/campus-life/"
                class="nav-link dropdown-toggle"
                id="nav-qwerty"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Campus Life</a
              >
              <ul class="dropdown-menu" aria-labelledby="nav-qwerty">
                <a
                  href="https://mckl.edu.my/campus-life/student-support-services/"
                  class="dropdown-item"
                  >Student Support Services</a
                >
                <a
                  href="https://mckl.edu.my/campus-life/clubs-and-societies/"
                  class="dropdown-item"
                  >Clubs and Societies</a
                >
                <a
                  href="https://mckl.edu.my/campus-life/facilities/"
                  class="dropdown-item"
                  >Facilities</a
                >
                <a
                  href="https://mckl.edu.my/campus-life/accommodations/"
                  class="dropdown-item"
                  >Accommodations</a
                >
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                id="nav-qwerty"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >News &amp; Events</a
              >
              <ul class="dropdown-menu" aria-labelledby="nav-qwerty">
                <a
                  href="https://mckl.edu.my/category/news/"
                  class="dropdown-item"
                  >News</a
                >
                <a
                  href="https://mckl.edu.my/category/events/"
                  class="dropdown-item"
                  >Events</a
                >
                <a
                  href="https://mckl.edu.my/newsletters-the-flame/"
                  class="dropdown-item"
                  >Newsletters – The Flame</a
                >
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                href="https://mckl.edu.my/connect/"
                class="nav-link dropdown-toggle"
                id="nav-qwerty"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Connect</a
              >
              <ul class="dropdown-menu" aria-labelledby="nav-qwerty">
                <a
                  href="https://mckl.edu.my/connect/contact-us/"
                  class="dropdown-item"
                  >Contact Us</a
                >
                <a
                  href="https://mckl.edu.my/connect/mckl-partners/"
                  class="dropdown-item"
                  >MCKL Partners</a
                >
                <a
                  href="https://mckl.edu.my/connect/alumni/"
                  class="dropdown-item"
                  >Alumni</a
                >
                <a
                  href="https://mckl.edu.my/connect/careers/"
                  class="dropdown-item"
                  >Careers</a
                >
              </ul>
            </li>
          </ul>
          <div class="support-menu-container d-none d-lg-block">
            <ul
              id="support-menu-list"
              class="menu-wrapper collapse navbar-collapse"
            >
              <li
                id="menu-item-1277"
                class="
                  menu-item
                  menu-item-type-post_type
                  menu-item-object-page menu-item-1277
                "
              >
                <a href="https://mckl.edu.my/connect/contact-us/">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
// @import "./bootstrap-components";

.site-header {
  .navbar {
    padding-top: 0;
    padding-bottom: 0;
  }
  #navbar-primary {
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;

    @include media-breakpoint-down(md) {
      position: fixed;
      top: 40px;
      background-color: $primary;
      left: 0px;
      right: 0px;
      padding: 40px 15px 15px;
      z-index: -1;
    }
  }
}

.site-logo {
  position: relative;
  flex: 1 1 146px;
  align-self: start;
  &__wrap {
    position: absolute;
    top: 0;
    background-color: $white;
    padding: 1rem;
    .site-header & {
      transition: all 0.3s ease;
      transform-origin: top center;
      transform: scale(1);

      @include media-breakpoint-down(md) {
        transform: scale(0.5);
      }
    }
    .site-header.slim & {
      transform: scale(0.52);
    }
  }
}
//temp
.site-main {
  margin-top: 38px;

  @include media-breakpoint-up(xl) {
    margin-top: 70px;
  }
}

.site-header {
  background-color: $color-darkblue;
  color: $white;

  .admin-bar &.fixed-top {
    margin-top: 46px !important;

    @media only screen and (min-width: 783px) {
      margin-top: 32px !important;
    }
  }

  &.has-logo.has-title-and-tagline {
    .site-branding {
      display: none;
    }
    .logo-wrap {
      min-width: 140px;

      .site-logo {
        background-color: #fff;
        box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
        width: 48px;

        @include media-breakpoint-up(md) {
          width: 140px;
          position: absolute;
          top: 0;
          padding: 1rem;
          z-index: 100;
        }
      }
    }
  }
  .navbar--max-width {
    max-width: 1600px;
    margin: 0 auto;
  }
  .navbar {
    flex-wrap: nowrap;
    justify-content: flex-end;

    .menu-wrapper {
      list-style-type: none;
      margin: 0;
      padding: 0.5rem 0;
    }
    .menu-item {
      padding-left: 1rem;
      padding-right: 1rem;
    }
    a {
      color: #fff;
      font-size: 0.925rem;
      font-weight: bold;
      letter-spacing: 1px;
      text-transform: uppercase;
      &:hover,
      &:active {
        color: $secondary;
        text-decoration: none;
      }

      &.dropdown-item {
        color: $color-darkorange;
        @include media-breakpoint-down(sm) {
          white-space: initial;
          font-size: 0.85rem;
        }
      }
    }
    .primary-navigation {
      width: 100%;

      .primary-menu-container {
        margin: auto;
        margin-left: 0;
      }
      .support-menu-container {
        margin: auto;
        margin-right: 0;
      }
    }
  }
}
</style>