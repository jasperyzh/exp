<template>
  <div class="views upskills">
    <header class="px-3 py-1 shadow-sm fixed-top bg-white">
      <div class="container">
        <div
          class="
            d-flex
            flex-wrap
            align-items-center
            justify-content-center justify-content-lg-between
          "
        >
          <a
            href="/"
            class="
              d-flex
              align-items-center
              mb-2 mb-lg-0
              text-dark text-decoration-none
            "
          >
            <img width="180" src="@/assets/upskills/upskills-logo.png" alt="" />
          </a>

          <ul
            class="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0"
          >
            <li><a href="#" class="nav-link px-2">Why Upskill?</a></li>
            <li><a href="#" class="nav-link px-2">Featured Skills</a></li>
            <li><a href="#" class="nav-link px-2">Courses</a></li>
            <li><a href="#" class="nav-link px-2">SkillFuture Credits</a></li>
          </ul>
        </div>
      </div>
    </header>

    <div class="content__gap"></div>
    <!-- masthead -->
    <section class="masthead masthead__bg d-flex align-items-center">
      <!-- <img
      class="masthead__bg w-100"
      src="@/assets/upskills/upskills-bg.jpg"
      alt=""
      style="aspect-ratio: 22/9"
    /> -->
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-lg-5 text-light">
            <h2 class="display-3 text-uppercase text--shadow">
              While some skills become irrelevant, new ones are needed.
            </h2>
            <p class="my-4 text-muted lead text--shadow">
              Secure your career by acquiring the right skills. Lorem ipsum,
              dolor sit amet consectetur adipisicing elit.
            </p>

            <div class="d-flex mt-5">
              <button
                class="btn btn-primary bg-gradient btn-lg text-capitalize me-2"
              >
                Find out more
              </button>
              <!-- <button class="btn btn-outline-primary btn-lg text-capitalize me-2">
              Enquire Now
            </button> -->
            </div>
          </div>
          <!-- <div class="col-lg-5">
          <img
            src="@/assets/upskills/upskills-about2.jpg"
            alt=""
            class=""
            style="
              border-bottom-left-radius: 13rem;
              aspect-ratio: 3/4;
              object-fit: cover;
              width: 100%;
            "
          />
        </div> -->
        </div>
      </div>
    </section>

    <!-- video -->

    <section class="section__padding bg-light">
      <div class="container">
        <div class="video-1-holder">
          <div class="row d-flex align-items-center">
            <div class="col-md-7 position-relative">
              <img
                class="rounded shadow"
                src="https://via.placeholder.com/400x300?text=video_placeholder"
                alt="video-preview"
                style="
                  aspect-ratio: 16/9;
                  object-fit: cover;
                  width: 100%;
                  object-position: center;
                  height: 100%;
                "
              />
              <img
                class="rounded shadow"
                src="https://via.placeholder.com/400x300?text=video_placeholder"
                alt="video-preview"
                style="
                  aspect-ratio: 16/9;
                  object-fit: cover;
                  width: 100%;
                  object-position: center;
                  height: 100%;
                  position: absolute;
                  left: 0;
                  transform: translate(-1.5rem, -1.5rem);
                "
              />
            </div>
            <div class="col-md-5">
              <div class="video-txt">
                <h2 class="h2-xl">
                  Check Out Our
                  <span class="d-inline-block">Campaign Videos</span>
                </h2>
                <p class="p-md">
                  Cursus porta, feugiat primis in ultrice ligula risus auctor
                  tempus dolor feugiat, felis lacinia risus
                </p>
                <!-- <a class="btn btn-danger my-3">Find Out More</a> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- counters -->
    <section class="mb-4" style="margin-top: -3rem">
      <div class="container">
        <div class="bg-white px-4 py-5 shadow rounded">
          <div class="row row-cols-1 row-cols-md-3">
            <div class="col">
              <div
                class="
                  statistic-block
                  d-flex
                  justify-content-center
                  align-items-center
                "
              >
                <h5 class="statistic-number display-4 me-3">
                  2,<span class="count-element" data-to="213">213</span>
                </h5>
                <div class="statistic-block-txt ps-3 border-start">
                  <h5 class="h5-lg">Online Courses</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div
                class="
                  statistic-block
                  d-flex
                  justify-content-center
                  align-items-center
                "
              >
                <h5 class="statistic-number display-4 me-3">
                  <span class="count-element" data-to="355">355</span>
                </h5>
                <div class="statistic-block-txt ps-3 border-start">
                  <h5 class="h5-lg">Free Online Tutorials</h5>
                </div>
              </div>
            </div>
            <div class="col">
              <div
                class="
                  statistic-block
                  d-flex
                  justify-content-center
                  align-items-center
                "
              >
                <h5 class="statistic-number display-4 me-3">
                  <span class="count-element" data-to="1455">1455</span>
                </h5>
                <div class="statistic-block-txt ps-3 border-start">
                  <h5 class="h5-lg">eBooks Available</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- about -->
    <section class="section__margin">
      <div class="container-fluid">
        <div class="row align-items-center px-5">
          <div class="col-lg-7">
            <img
              class="pe-lg-4"
              src="@/assets/upskills/upskills-about.png"
              alt="about image"
            />
            <!-- <img
            class=""
            src="https://via.placeholder.com/512x512?text=placeholder"
            alt="about image"
          /> -->
          </div>
          <div class="col-lg-5">
            <div class="about-text">
              <div class="section-title">
                <span>About MySkillsFuture</span>
                <h2 class="my-2">
                  We are here to support your career's future
                </h2>
              </div>
              <div class="row">
                <div class="col-md-3 col-sm-4">
                  <div class="support__icon my-3">
                    <i class="h2 bi bi-bar-chart-line-fill"></i>
                    <p class="mb-3 text-muted">Award Winner</p>
                  </div>
                </div>
                <div class="col-md-3 col-sm-4">
                  <div class="support__icon my-3">
                    <i class="h2 bi bi-emoji-smile-fill"></i>
                    <p class="mb-3 text-muted">24/7 Support</p>
                  </div>
                </div>
                <div class="col-md-3 col-sm-4">
                  <div class="support__icon my-3">
                    <i class="h2 bi bi-people-fill"></i>
                    <p class="mb-3 text-muted">100% Trusted</p>
                  </div>
                </div>
              </div>
              <p class="lead">
                Risus commodo viverra maecenas accumsan lacus vel facilisis.
                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
              <!-- <a class="btn btn-primary btn-lg mt-3">Read More</a> -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- how_we_help -->
    <section class="my-5">
      <div class="container">
        <div class="section-title text-center">
          <span>Why Upskill</span>
          <h2 class="my-2 display-3">Staying Relevant In Changing Time</h2>
          <p class="col-md-8 mx-auto">
            Global change comes swift and sudden in span of months, whether its
            post-covid or digitalization of businesses. With effort adapting to
            new era will secure your career for the upcoming future.
          </p>
        </div>
        <div class="row row-cols-2 row-cols-md-3 my-5">
          <div class="col mb-4" v-for="item in 3" :key="`feature-${item}`">
            <div class="card text-center">
              <div class="card-body" style="padding: 5rem 1rem">
                <img
                  width="92"
                  src="https://via.placeholder.com/512x512?text=placeholder"
                  alt=""
                  class="rounded-circle mb-2"
                />
                <h3>Why Upskill matter - {{ item }}</h3>
                <p>
                  Sagittis congue augue egestas volutpat egestas magna suscipit
                  egestas magna ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-7">
            <figure class="text-center">
              <img
                width="420"
                src="https://previews.123rf.com/images/kuliperko/kuliperko1903/kuliperko190300043/120202550-infographic-design-template-creative-concept-with-3-steps-can-be-used-for-workflow-layout-diagram-ba.jpg"
                alt=""
              />
              <figcaption>
                <p class="text-muted text-center fst-italic">
                  <small>
                    (Fig. Infographics to further elaborate the importances of
                    upskill)
                  </small>
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-light">
      <div class="container-fluid">
        <div class="row">
          <div class="section-title text-center mt-5">
            <span>Our Features</span>
            <h2 class="my-2">How can we help?</h2>
            <p>
              With our support, get ready to seize the opportunity you want.
            </p>
          </div>
        </div>
        <div
          class="row row-cols-1 row-cols-md-3 px-md-5 align-items-center py-5"
        >
          <div class="col mb-4">
            <div class="d-flex align-items-center">
              <img
                width="92"
                src="https://via.placeholder.com/512x512?text=placeholder"
                alt=""
                class="rounded-circle me-4"
              />
              <div class="abox-4-txt">
                <h5 class="h5-md">SkillsFuture Credit</h5>
                <p class="mb-0">
                  Congue augue egestas magna volutpat dictum suscipit ipsum
                  egestas magna vitae purus
                </p>
                <a href="#" class="btn btn-outline-danger btn-sm mt-3"
                  >Find out more</a
                >
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="d-flex align-items-center">
              <img
                width="92"
                src="https://via.placeholder.com/512x512?text=placeholder"
                alt=""
                class="rounded-circle me-4"
              />
              <div class="abox-4-txt">
                <h5 class="h5-md">SkillsFuture Career Transition Programme</h5>
                <p class="mb-0">
                  Congue augue egestas magna volutpat dictum suscipit ipsum
                  egestas magna vitae purus
                </p>
                <a href="#" class="btn btn-outline-danger btn-sm mt-3"
                  >Find out more</a
                >
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="d-flex align-items-center">
              <img
                width="92"
                src="https://via.placeholder.com/512x512?text=placeholder"
                alt=""
                class="rounded-circle me-4"
              />
              <div class="abox-4-txt">
                <h5 class="h5-md">
                  <!-- <small class="text-muted">Apply for</small>  -->
                  SkillsFuture Work-Study Programmes
                </h5>
                <p class="mb-0">
                  Congue augue egestas magna volutpat dictum suscipit ipsum
                  egestas magna vitae purus
                </p>
                <a href="#" class="btn btn-outline-danger btn-sm mt-3"
                  >Find out more</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- trending_courses -->
    <section class="section__padding overflow-hidden position-relative">
      <!-- <div
      class="
        rellax__center
        position-absolute
        d-flex
        justify-content-around
        w-100
      "
      style="z-index: -1; opacity: 0.2"
      data-rellax-speed="7"
      data-rellax-percentage="0.8"
    >
      <img
        width="300"
        src="@/assets/upskills/upskills-arrow.svg"
        alt=""
        class="my-5"
      />
      <img width="400" src="@/assets/upskills/upskills-arrow.svg" alt="" />
    </div> -->
      <div
        class="
          rellax__center
          position-absolute
          d-flex
          justify-content-end
          w-100
        "
        style="z-index: -1; opacity: 0.4"
        data-rellax-speed="3"
        data-rellax-percentage="0.2"
      >
        <img
          width="920"
          src="@/assets/upskills/upskills-arrow.svg"
          alt=""
          style="margin-right: -7rem"
        />
      </div>

      <div class="container">
        <div class="row">
          <div class="col mb-4">
            <span>Upskill Courses</span>
            <h2>Popular Courses</h2>
            <p>
              Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
              primis libero tempus, blandit posuere and ligula varius magna a
              porta
            </p>
            <a class="btn btn-danger btn-sm mt-4">View All Courses</a>
          </div>
        </div>
        <div
          class="
            row row-cols-1 row-cols-md-3 row-cols-lg-5
            card__courses
            text-light
            my-4
          "
        >
          <div class="col mb-3" v-for="item in 5" :key="`card-${item}`">
            <div
              :class="`card card__course card__course-${item}`"
              style="aspect-ratio: 3/4"
            >
              <div
                class="
                  card-body
                  d-flex
                  justify-content-center
                  align-items-center
                  flex-column
                "
              >
                <img
                  width="92"
                  src="https://via.placeholder.com/512x512?text=placeholder"
                  alt=""
                  class="rounded-circle mb-2"
                />
                <h5 class="card-title mb-0">Course {{ item }}</h5>
                <p class="card-text">53 Courses</p>
                <!-- <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p> -->
              </div>
              <!-- <div class="card-footer">
              <p class="mb-0">July 2022</p>
            </div> -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <header class="mb-4">
          <div class="pull-left">
            <span>Upcoming Events</span>
            <h2 class="block-header-heading">Meet & Upskill Together</h2>
            <p>Recent and upcoming educational events listed here</p>
          </div>
          <a class="btn btn-danger btn-sm text-uppercase mt-4">View More</a>
        </header>

        <!-- upcoming events list -->
        <ul class="list-unstyled my-4">
          <li
            class="
              d-flex
              justify-content-between
              align-items-center
              border-bottom
              py-4
            "
            v-for="item in course_events"
            :key="`course_events-${item}`"
          >
            <time datetime="2011-01-12" class="event-time text-uppercase me-5">
              <strong class="date fs-3 me-3">{{ item.day }}</strong>
              <strong class="month fs-5">{{ item.month }}</strong>
              <strong class="day lead d-block fs-4" style="">{{
                item.week
              }}</strong>
            </time>
            <div class="event-description me-auto">
              <h3 class="h5">
                <a>{{ item.title }}</a>
              </h3>
              <address class="lead">
                <time datetime="2011-01-12">{{ item.time }}</time> |
                {{ item.location }}
              </address>
              <a class="btn btn-outline-danger btn-sm text-uppercase"
                >register</a
              >
            </div>
            <img
              class="event-img"
              width="220"
              src="https://via.placeholder.com/400x300?text=placeholder"
              alt="image description"
            />
          </li>
        </ul>
      </div>
    </section>

    <section class="section__margin py-4 bg-light">
      <div class="container">
        <div class="row justify-content-around flex-wrap">
          <div class="col-auto my-4" v-for="item in 5" :key="`card-${item}`">
            <img
              width="92"
              :src="placeholder_logos[item - 1]"
              alt="image description"
              style="opacity: 0.4"
            />
            <!-- src="@/assets/upskills/placeholder_logo-1.svg" -->
          </div>
        </div>
        <div class="row">
          <p class="text-muted text-center">
            <small>(Space to includes partners & sponsorships)</small>
          </p>
        </div>
      </div>
    </section>

    <section class="section__margin py-5">
      <div class="container">
        <header class="text-center mb-5">
          <h2>Testimonials</h2>
          <p>Check out what our fellow Upskillers have to say.</p>
        </header>
        <div class="row">
          <BsCarouselTestimonials />
        </div>
        <!-- <div class="row row-cols-1 row-cols-md-3">
        <div class="col" v-for="item in 3" :key="`news-${item}`">
          <div class="card">
            <img
              src="https://via.placeholder.com/1280x720?text=placeholder"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body px-4 py-5">
              <h5 class="card-title mb-4">Recent News {{ item }}</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus consequuntur dolorem minus doloribus laborum,
                consequatur dolore accusantium?
              </p>

              <time datetime="2011-01-12" class="time text-uppercase text-gray"
                >Mar 05, 2022</time
              >
            </div>
          </div>
        </div>
      </div> -->
      </div>
    </section>

    <section class="section__margin">
      <div class="container">
        <div
          class="
            bg-fixed
            newsletter-holder
            rounded
            text-dark
            bg-primary bg-gradient
          "
          style="padding: 60px 50px 45px"
        >
          <div class="row justify-content-between">
            <div class="col-md-6">
              <div class="text-light">
                <h3 class="h3-sm">
                  Subscribe to <span class="d-inline-block">E-newsletter</span>
                </h3>
                <p>
                  Get course recommendations, track subjects and courses with
                  reminders and more
                </p>
              </div>
            </div>
            <div class="col-md-5 d-flex align-items-center">
              <form id="newsletter" class="w-100">
                <div class="input-group">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Your email address"
                    required=""
                    aria-label="Recipient's Email"
                    aria-describedby="btn-submit__newsletter"
                  />
                  <button
                    type="submit"
                    class="btn btn-danger"
                    id="btn-submit__newsletter"
                  >
                    Subscribe Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer id="footer-1" class="footer division">
      <div class="container">
        <!-- <div class="row my-4">
        <div class="col-md-12 col-xl-3">
          <img
            src="https://via.placeholder.com/400x300?text=placeholder"
            width="120"
            alt="footer-logo"
          />
        </div>
        <div class="col-md-4 col-xl-3">
          <div class="footer-links mb-40">
            <ul class="foo-links clearfix">
              <li><a href="/reviews">Our Testimonials</a></li>
              <li><a href="/blog-listing">From the Blog</a></li>
            </ul>
          </div>
        </div>
        <div class="col-md-4 col-xl-3">
          <div class="footer-links mb-40">
            <ul class="clearfix">
              <li><a href="/categories-list">Courses Catalog</a></li>
              <li><a href="/categories-list">Popular Categories</a></li>
              <li><a href="/pricing">Premium Learning</a></li>
            </ul>
          </div>
        </div>
        <div class="col-md-4 col-xl-3">
          <h2 class="display-4 text-end">Contact Us <br />For A Chat</h2>
        </div>
      </div> -->
        <div class="bottom-footer bg-light p-3 my-5 rounded">
          <div class="row justify-content-between">
            <div class="col-lg-8">
              <ul class="bottom-footer-list d-flex">
                <li class="me-4">
                  <p>© MyUpskillsFuture 2022</p>
                </li>
                <!-- <li class="me-4">
                <p><a href="tel:123456789">+6012 345 6789</a></p>
              </li> -->
                <li class="me-4">
                  <p class="last-li">
                    <a href="mailto:yourdomain@mail.com"
                      >hello@skillsfuture.gov.sg</a
                    >
                  </p>
                </li>

                <li class="me-4">
                  <p>
                    <a
                      href="https://www.myskillsfuture.gov.sg/content/portal/en/header/faqs/for-further-assistance.html"
                      >Further Assistance</a
                    >
                  </p>
                </li>
              </ul>
            </div>
            <div class="col-lg-auto text-right">
              <ul class="d-flex">
                <li class="mx-4">
                  <a class="ico-facebook" href="/demo-8#"
                    ><i class="bi bi-facebook"></i
                  ></a>
                </li>
                <li class="mx-4">
                  <a class="ico-twitter" href="/demo-8#"
                    ><i class="bi bi-twitter"></i
                  ></a>
                </li>
                <li class="mx-4">
                  <a class="ico-google-plus" href="/demo-8#"
                    ><i class="bi bi-linkedin"></i
                  ></a>
                </li>
                <li class="mx-4">
                  <a class="ico-tumblr" href="/demo-8#"
                    ><i class="bi bi-youtube"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";
import Rellax from "rellax";
import BsCarouselTestimonials from "../components/sample/BsCarouselTestimonials.vue";

const placeholder_logos = [
  new URL("../assets/placeholder/placeholder_logo-1.svg", import.meta.url).href,
  new URL("../assets/placeholder/placeholder_logo-2.svg", import.meta.url).href,
  new URL("../assets/placeholder/placeholder_logo-3.svg", import.meta.url).href,
  new URL("../assets/placeholder/placeholder_logo-4.svg", import.meta.url).href,
  new URL("../assets/placeholder/placeholder_logo-5.svg", import.meta.url).href,
];
// console.log(placeholder_logos);

// intersection
const appearOnScroll = new IntersectionObserver(
  (entries, appearOnScroll) => {
    entries.forEach((entry) => {
      // console.log(entry.target);
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("slide");
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  {
    // options
    root: null, // viewport
    threshold: 0.25, // more than 25% of the element within view
    rootMargin: "0px 0px -100px 0px", // "-150px 0px -200px 0px" (must use px)
  }
);

onMounted(() => {
  document.querySelectorAll("h2").forEach((heading) => {
    // appearOnScroll
    heading.classList.add("slide-up");
    appearOnScroll.observe(heading);
  });

  // rellax

  var rellax__center = new Rellax(".rellax__center", {
    center: true,
  });
});

const course_events = [
  {
    title: "Sustainable Finance (Classroom, Synchronous e-learning)",
    location: "Singapore Management University",
    time: "8:00 am - 5:00 pm",
    day: "02",
    month: "September",
    week: "Friday",
  },
  {
    title:
      "(SCTP) Advanced Certificate in Logistics and Supply Chain Management",
    location: "Singapore Management University",
    time: "8:00 am - 5:00 pm",
    day: "15",
    month: "September",
    week: "Thursday",
  },
  {
    title:
      "Demonstrate Sous Vide Method (Classroom and Asychronous e-Learning)",
    location: "AT-SUNRICE GLOBALCHEF ACADEMY PTE. LTD.",
    time: "8:00 am - 5:00 pm",
    day: "30",
    month: "September",
    week: "Friday",
  },
];
</script>


<style lang="scss">

.text--shadow {
  text-shadow: 0.25rem 0.25rem 0.2rem rgba(0, 0, 0, 0.5);
}
.content__gap {
  margin-top: 123px;

  @media (min-width: 768px) {
    margin-top: 75px;
  }
}

.masthead__bg {
  background-image: url("@/assets/upskills/upskills-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  aspect-ratio: 22/ 9;
}
.fade-in {
  opacity: 0;
  transition: opacity 0.25s ease-in;
}
.fade-in.appear {
  opacity: 1;
}

.slide {
  transition: opacity 0.3s ease, transform 0.5s ease;

  &-up {
    transform: translate(0, 3rem);
    opacity: 0;
  }
  &-down {
    transform: translate(0, -3rem);
    opacity: 0;
  }
  &-left {
    transform: translate(-3rem, 0);
    opacity: 0;
  }
  &-right {
    transform: translate(3rem, 0);
    opacity: 0;
  }

  &.appear {
    transform: translate(0);
    opacity: 1;
  }
}
.h2.bi {
  color: rgb(63, 43, 112);
}

.carousel-indicators {
  transform: translateY(200%);

  [data-bs-target] {
    background-color: rgb(63, 43, 112);
  }
}
.carousel-control-next,
.carousel-control-prev {
  background-color: rgb(63, 43, 112);
  top: 50%;
  bottom: auto;
  width: auto;
  padding: 1rem;
  transform: translateY(-50%);
}
.carousel-control-prev-icon,
.carousel-control-next-icon {
  width: 1.5rem;
  height: 1.5rem;
}
.blockquote-footer::before {
  content: "";
}
</style>