<template>
  <div class="site-container">
    <header class="header pt-4 bg-white">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-auto d-flex align-items-center">
            <img
              class="d-inline-block px-3 border-right"
              alt="Vue logo"
              src="@/assets/yayasan/annual-report/logo.png"
              width="180"
            />
            <h1 class="d-inline-block m-0 px-3 text-dark">
              Annual Report <span class="text-primary">2020</span>
            </h1>
          </div>
        </div>
      </div>
    </header>

    <nav
      class="
        bg-white
        sticky-top
        d-flex
        justify-content-center
        align-items-start
        shadow-sm
      "
    >
      <ul class="nav justify-content-center my-2">
        <li class="nav-item">
          <a class="nav-link px-2 px-sm-4" href="#overview">Overview</a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-2 px-sm-4" href="#year-review"
            >Year in Review</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link px-2 px-sm-4" href="#annual-report"
            >Annual Report</a
          >
        </li>
      </ul>
    </nav>

    <main>
      <section
        id="masthead"
        class="masthead__bg masthead__aspect-ratio bg-light"
      >
        <div class="container h-100">
          <div class="row h-100">
            <div
              class="col-lg-8 col-xl-6 h-100 p-lg-5 d-flex align-items-center"
            >
              <div
                class="
                  masthead__content masthead__content-bg
                  text-primary
                  px-5
                  py-4
                "
              >
                <h2 class="h1">Changing Futures,<br />Raising Hopes</h2>
                <p class="mb-2 text-white lh-lg">
                  When hopes are raised, spirits are lifted. A small smile turns
                  into a glowing heart ― determined, motivated and driven. A
                  spark… it is all that’s needed to ignite new futures.
                </p>
                <a
                  class="btn btn-primary btn-lg"
                  style="margin-bottom: -3rem"
                  href="/pdf/yayasan_petronas-annual_report_2020.pdf"
                  role="button"
                  target="_blank"
                  download
                  >Download Annual Report 2020</a
                >
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="overview" class="bg__main mb-5">
        <div class="container">
          <div class="row py-5">
            <div class="col-sm-8">
              <h2 class="text-uppercase heading__underline">
                Yayasan PETRONAS at a glance
              </h2>
              <p>
                As the corporate social responsibility arm of PETRONAS, Yayasan
                PETRONAS supports its commitment to the United Nations’
                Sustainable Development Goals of Decent Work and Economic
                Growth, Good Health and Well-being, Quality education and
                Climate Change.
              </p>
              <p>
                We do this by expanding opportunities for those facing the
                greatest barriers and give them hope for a sustainable future
                through our focus in Education, Community Well-being and
                Development and the Environment.
              </p>
            </div>
          </div>
          <div class="row">
            <div
              class="col-12"
              v-for="(card, index) in cards"
              :key="`card-${index}`"
            >
              <div :class="`card card__intro ${card.class}`">
                <div class="row no-gutters row-cols-1 row-cols-sm-2">
                  <div
                    class="
                      col-md-7
                      order-2 order-md-1
                      d-flex
                      align-items-center
                    "
                  >
                    <div class="card-body">
                      <h5 class="card-title">{{ card.title }}</h5>
                      <p class="card-text">
                        {{ card.desc }}
                      </p>
                      <a
                        :href="card.link"
                        class="btn btn-primary"
                        target="_blank"
                        >Read More</a
                      >
                    </div>
                  </div>
                  <div class="col-md-5 order-1 order-md-2">
                    <figure class="card-figure m-0">
                      <img
                        width="280"
                        :src="card.img_src"
                        :alt="card.title"
                        class="card-img"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="year-review" class="py-5">
        <div class="container">
          <div class="row">
            <div class="col">
              <h2 class="text-uppercase heading__underline">
                The Year in Review
              </h2>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-auto">
              <figure class="year-review__figure text-center mb-4">
                <img
                  class="img-fluid"
                  width="350"
                  src="@/assets/yayasan/annual-report/year-review.svg"
                  alt="Yayasan PETRONAS Year Review Chart"
                />
              </figure>
            </div>
            <div class="col-lg-6 d-flex align-items-center">
              <div class="year-review__content">
                <p class="lead">
                  The year 2020 was one of
                  <strong class="text-primary font-weight-bold"
                    >recalibration</strong
                  >.
                </p>
                <p>
                  At Yayasan PETRONAS, we knew we had the stewardship and
                  resources to respond strategically in the places others could
                  not, and we forged ahead to meet the needs of healthcare
                  workers, the healthcare system and high-risk groups. At the
                  same time, we continued to soldier on with our other projects
                  to benefit society, transform lives, and plough back into the
                  environment.
                </p>
                <p>
                  What followed was a display of how the
                  <b class="text-primary"
                    >human spirit can adapt and innovate to meet unspoken
                    challenges in a time of shared adversity.</b
                  >
                </p>
                <p>
                  Almost half (48%) of the RM47.25 million funds were diverted
                  to COVID-19 relief efforts, while 43 per cent went to grants,
                  donations and running programmes under the Education,
                  Community Well-being and Development and Environment pillars.
                  Other funds went to support services such as administration
                  and communications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="annual-report" class="bg__main py-5 text-center">
        <div class="container">
          <div class="jumbotron bg-transparent">
            <div class="col-md-10 mx-auto">
              <h1 class="mb-4 text-black">
                Read the Full
                <span class="d-inline-block"
                  >Yayasan PETRONAS Annual Report 2020</span
                >
              </h1>
              <p>
                <a
                  class="btn btn-primary btn-lg"
                  href="/pdf/yayasan_petronas-annual_report_2020.pdf"
                  role="button"
                  target="_blank"
                  download
                  >Download Annual Report 2020</a
                >
              </p>
              <p>
                <a
                  class="btn btn-outline-primary"
                  href="https://www.yayasanpetronas.com.my/wp-content/uploads/2020/09/Yayasan-Petronas_Annual-Report-2019.pdf"
                  role="button"
                  target="_blank"
                  download
                  >Annual Report 2019</a
                >
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="py-4 bg-dark text-light">
      <div class="container">
        <div
          class="
            row row-cols-1 row-cols-lg-2
            justify-content-center justify-content-lg-start
            text-center text-lg-left
          "
        >
          <div class="col order-2 order-lg-1">
            <ul
              class="nav justify-content-center justify-content-lg-start mb-2"
            >
              <li class="nav-item">
                <a
                  class="nav-link"
                  target="_blank"
                  href="https://www.facebook.com/yayasanpetronasmy/"
                >
                  <i class="bi bi-facebook"></i>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  target="_blank"
                  href="https://www.instagram.com/yayasanpetronas/"
                >
                  <i class="bi bi-instagram"></i>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  target="_blank"
                  href="https://www.linkedin.com/company/yayasan-petronas"
                >
                  <i class="bi bi-linkedin"></i>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  target="_blank"
                  href="https://www.youtube.com/channel/UCE5gD-AVpdWXXmv268vZeYw"
                >
                  <i class="bi bi-youtube"></i>
                </a>
              </li>
            </ul>
            <div class="footer__contact">
              <p>
                Level 71, Tower 1, PETRONAS Twin Towers<br />
                Kuala Lumpur City Centre, 50088 Kuala Lumpur
              </p>
              <p>www.yayasanpetronas.com.my</p>
              <p>yayasanpetronas@petronas.com</p>
            </div>
          </div>

          <div
            class="
              col-auto
              order-1 order-lg-2
              d-flex
              justify-content-md-end
              align-items-end
            "
          >
            <a href="https://www.yayasanpetronas.com.my/" target="_blank">
              <figure>
                <img
                  class="px-3"
                  alt="Yayasan Petronas Logo"
                  src="@/assets/yayasan/annual-report/logo-yayasan-petronas.png"
                  width="180"
                />
              </figure>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import img_education from "~/assets/yayasan/annual-report/featured-education.jpg";
import img_community from "~/assets/yayasan/annual-report/featured-community.jpg";
import img_environment from "~/assets/yayasan/annual-report/featured-environment.jpg";
export default {
  data() {
    return {
      //   offset: 61,
      cards: [
        {
          title: "Education",
          desc: "PETRONAS has invested in education outreach programmes for underprivileged and deserving Malaysians. We offer scholarships, build structures and institutions, run science fairs and choral speaking competitions. We engage students, teachers and the community.",
          link: "/pdf/yayasan_petronas-annual_report_2020.pdf#page=17",
          img_src: img_education,
          class: "card--blue",
        },
        {
          title: "Community Well-being and Development",
          desc: "Our programmes are specifically designed to uplift underserved groups especially the B40 community and give them a chance at a better quality of life. We work to upskill them and provide basic necessities such as access to clean water, where it is needed.",
          link: "/pdf/yayasan_petronas-annual_report_2020.pdf#page=25",
          img_src: img_community,
          class: "card--orange",
        },
        {
          title: "Environment",
          desc: "PETRONAS have been constantly improving to mitigate and remediate our impact on the environment, undertaking meaningful actions to protect Malaysia’s rich biodiversity and environmental heritage.",
          link: "/pdf/yayasan_petronas-annual_report_2020.pdf#page=41",
          img_src: img_environment,
          class: "card--lime",
        },
      ],
    };
  },
  /*  mounted() {
    const header_offsetheight = document.querySelector(".header").offsetHeight;
    this.offset = header_offsetheight;
  }, */
};
</script>

<style lang="scss" scoped>
// @import "./_override.scss";
@import "bootstrap/scss/bootstrap-grid.scss";
// @import "@/_default.scss";
.bg__main {
  background-image: url("@/assets/yayasan/annual-report/bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.masthead__aspect-ratio {
  padding: 3rem 0;
  @include media-breakpoint-up(sm) {
    aspect-ratio: 4/4;
  }
  @include media-breakpoint-up(md) {
    aspect-ratio: 8/3;
  }
}
.masthead__bg {
  background-image: url("@/assets/yayasan/annual-report/masthead-mobile.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  @include media-breakpoint-up(md) {
    background-image: url("@/assets/yayasan/annual-report/masthead-desktop.jpg");
  }
}
.masthead__content-bg {
  background-color: rgba(0, 0, 0, 0.2);
}
.card__intro {
  border: 0;
  border-radius: 0;
  background-color: #eee;
  margin-bottom: 3rem;

  .card-figure {
    height: 100%;
  }
  .card-img {
    border-radius: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    aspect-ratio: 16/9;
  }
}
.card {
  &--blue {
    background-color: #0a379d;
    color: $light;
    .card-title {
      color: $light;
    }
  }
  &--orange {
    background-color: #ffb538;
    color: $dark;
    .card-title {
      color: $dark;
    }
  }
  &--lime {
    background-color: #c3d642;
    color: $dark;
    .card-title {
      color: $dark;
    }
  }
}

.heading__underline {
  display: inline-block;
  &:after {
    content: " ";
    display: block;
    background-color: #00a19c;
    width: 80%;
    height: 3px;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
}
.footer__contact {
  p {
    color: #ccc;
    font-size: 0.9rem;
    margin-bottom: 0.25rem;
  }
}
</style>