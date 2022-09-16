<template>
  <!-- <div class="site-container__grid layout_content"> -->
  <!-- <div class="site-container__grid layout_full_width_content"> -->
  <!-- <div class="site-container__grid layout_sidebar_content"> -->
  <div class="site-container__grid layout_content_sidebar">
    <header
      class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"
    >
      <a
        href="/"
        class="
          d-flex
          align-items-center
          mb-3 mb-md-0
          me-md-auto
          text-dark text-decoration-none
        "
      >
        <svg class="bi me-2" width="40" height="32">
          <use xlink:href="#bootstrap"></use>
        </svg>
        <span class="fs-4">Simple header</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item">
          <a href="#" class="nav-link active" aria-current="page">Home</a>
        </li>
        <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
        <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link">About</a></li>
      </ul>
    </header>

    <main>
      <div class="container gx-0">
        <div class="row ">
          <h1>Get started with Bootstrap</h1>
          <p>
            Quickly and easily get started with Bootstrap's compiled,
            production-ready files with this barebones example featuring some
            basic HTML and helpful links. Download all our examples to get
            started.
          </p>

          <div class="mb-5">
            <a href="/docs/5.2/examples/" class="btn btn-primary btn-lg px-4"
              >Download examples</a
            >
          </div>
        </div>

        <hr class="col-3 col-md-2 mb-5" />

        <div class="row g-5">
          <div class="col-12">
            <h2>Starter projects</h2>
            <p>
              Ready to beyond the starter template? Check out these open source
              projects that you can quickly duplicate to a new GitHub
              repository.
            </p>
            <ul class="icon-list ps-0">
              <li class="d-flex align-items-start mb-1">
                <a
                  href="https://github.com/twbs/bootstrap-npm-starter"
                  rel="noopener"
                  target="_blank"
                  >Bootstrap npm starter</a
                >
              </li>
              <li class="text-muted d-flex align-items-start mb-1">
                Bootstrap Parcel starter (coming soon!)
              </li>
            </ul>
          </div>

          <div class="col-12">
            <h2>Guides</h2>
            <p>
              Read more detailed instructions and documentation on using or
              contributing to Bootstrap.
            </p>
            <ul class="icon-list ps-0">
              <li class="d-flex align-items-start mb-1">
                <a href="/docs/5.2/getting-started/introduction/"
                  >Bootstrap quick start guide</a
                >
              </li>
              <li class="d-flex align-items-start mb-1">
                <a href="/docs/5.2/getting-started/webpack/"
                  >Bootstrap Webpack guide</a
                >
              </li>
              <li class="d-flex align-items-start mb-1">
                <a href="/docs/5.2/getting-started/parcel/"
                  >Bootstrap Parcel guide</a
                >
              </li>
              <li class="d-flex align-items-start mb-1">
                <a href="/docs/5.2/getting-started/vite/"
                  >Bootstrap Vite guide</a
                >
              </li>
              <li class="d-flex align-items-start mb-1">
                <a href="/docs/5.2/getting-started/contribute/"
                  >Contributing to Bootstrap</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
    <aside>
      <div
        class="d-flex flex-column flex-shrink-0 p-3 bg-light"
        style="width: 280px"
      >
        <a
          href="/"
          class="
            d-flex
            align-items-center
            mb-3 mb-md-0
            me-md-auto
            link-dark
            text-decoration-none
          "
        >
          <svg class="bi pe-none me-2" width="40" height="32">
            <use xlink:href="#bootstrap"></use>
          </svg>
          <span class="fs-4">Sidebar</span>
        </a>
        <hr />
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <a href="#" class="nav-link active" aria-current="page">
              <svg class="bi pe-none me-2" width="16" height="16">
                <use xlink:href="#home"></use>
              </svg>
              Home
            </a>
          </li>
          <li>
            <a href="#" class="nav-link link-dark">
              <svg class="bi pe-none me-2" width="16" height="16">
                <use xlink:href="#speedometer2"></use>
              </svg>
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" class="nav-link link-dark">
              <svg class="bi pe-none me-2" width="16" height="16">
                <use xlink:href="#table"></use>
              </svg>
              Orders
            </a>
          </li>
          <li>
            <a href="#" class="nav-link link-dark">
              <svg class="bi pe-none me-2" width="16" height="16">
                <use xlink:href="#grid"></use>
              </svg>
              Products
            </a>
          </li>
          <li>
            <a href="#" class="nav-link link-dark">
              <svg class="bi pe-none me-2" width="16" height="16">
                <use xlink:href="#people-circle"></use>
              </svg>
              Customers
            </a>
          </li>
        </ul>
        <hr />
      </div>
    </aside>
    <Footer4Column />
  </div>
</template>

<script setup>
// import { onMounted } from "vue";

// const images = placeholder_images;

/* onMounted(() => {
  document.querySelectorAll(".gallery_item").forEach((item) => {
    appearOnScroll.observe(item);
  });
}); */
/* 
const appearOnScroll = new IntersectionObserver(
  (entries, appearOnScroll) => {
    entries.forEach((entry) => {
      // console.log(entry.target);
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  {
    // options
    root: null, // viewport
    threshold: 0, // more than 25% of the element within view
    rootMargin: "200px 0px 200px 0px", // "-150px 0px -200px 0px" (must use px)
  }
); */
</script>

<style lang="scss" scoped>
.site-container__grid {
  --main_maxwidth: 820px;

  display: grid;
  column-gap: 1rem;
  // layout_content(default)
  grid-template-columns: 1fr minmax(30rem, 1024px) 1fr;
  & > main {
    grid-column: 2/-2;
  }
  & > header {
    grid-column: 1 / -1;
  }
  & > footer {
    grid-column: 1 / -1;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr minmax(auto, var(--main_maxwidth)) 1fr !important;
    & > aside {
      display: none;
    }
  }
  &.layout_full_width_content {
    grid-template-columns: 1fr 1fr 1fr;
    & > main {
      grid-column: 1/-1;
    }
  }
  &.layout_content_sidebar {
    grid-template-columns:
      1fr minmax(30rem, var(--main_maxwidth)) minmax(auto, 300px)
      1fr;
    & > main {
      grid-column: 2/-3;

      @media (min-width: 1024px) {
        margin-right: 1rem;
      }
    }
    & > aside {
      grid-column: -3/-2;
    }
  }
  &.layout_sidebar_content {
    grid-template-columns:
      1fr minmax(auto, 300px) minmax(30rem, var(--main_maxwidth))
      1fr;
    & > main {
      grid-column: 3/-2;

      @media (min-width: 1024px) {
        margin-left: 1rem;
      }
    }
    & > aside {
      grid-column: 2/3;
      grid-row: 2/3;
    }
  }
}
</style>