<template>
  <div class="site-container">
    <Header />

    <main>
      <page-banner></page-banner>
      <!-- <annual-report-2020></annual-report-2020> -->

      <!-- <div class="container">
        <div class="row row-cols-md-2 row-cols-lg-3 mx-auto">
          <CardVue></CardVue>
        </div>
      </div> -->

      <article class="my-4">
        <section class="container">
          <div class="row">
            <div class="col">
              <h2>Components</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Numquam repellendus similique saepe nulla aliquam qui odit totam
                ducimus, eligendi reprehenderit labore rerum magnam illo nam
                nobis, fugiat, modi non excepturi sit repudiandae explicabo!
                Amet modi quis quia cum corrupti, iure, cupiditate ducimus
                beatae ipsam deleniti voluptas rerum praesentium neque, officia
                voluptatibus pariatur eum ab molestias omnis! Laboriosam ab unde
                quibusdam perferendis perspiciatis, iusto qui veritatis possimus
                ipsum accusamus impedit suscipit incidunt, saepe aspernatur
                nemo. Quidem, eius eveniet ab distinctio molestiae inventore
                ullam, dignissimos in aliquam accusamus sunt culpa! Dicta enim
                expedita eum, quasi adipisci suscipit earum impedit, maiores
                repellat aliquam officiis asperiores iure nihil, molestiae
                quidem doloribus! Aut repellat, vitae consequuntur illum tempore
                aperiam voluptatibus perspiciatis! Neque voluptatem ipsum facere
                veniam fugiat quis exercitationem doloremque illum, at
                consequuntur tempore. Iusto, minima accusantium inventore
                incidunt cumque ullam sapiente consequuntur reprehenderit error
                quidem quisquam laboriosam sint officiis beatae rem nam magnam
                ea? Facere reprehenderit exercitationem consequatur accusamus
                necessitatibus beatae illum soluta saepe nemo nobis voluptates
                eligendi, ratione, suscipit blanditiis qui adipisci aut rem
                ipsum rerum aliquid temporibus. Error non fuga architecto
                tempore?
              </p>
            </div>
          </div>
        </section>
        <hr class="my-3" />

        <Album />
        <Blog />
        <Carousel />
        <Checkout />
        <Pricing />
        <Product />
      </article>
    </main>

    <Footer />
  </div>

  <!-- @todo - convert component into wp_widget  -->
  <announcement-toast delay_in_sec="3600">
    <a href="https://www.yayasanpetronas.com.my/grants" target="_blank">
      <figure class="bg-light rounded p-1 shadow">
        <img
          width="160"
          src="https://via.placeholder.com/512x1024?text=placeholder"
          alt="Yayasan PETRONAS grants applications 2022"
        />
      </figure>
    </a>
  </announcement-toast>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import PageBanner from "@/components/general/PageBanner.vue";
import AnnouncementToast from "@/components/general/AnnouncementToast.vue";
import AnnualReport2020 from "./annual-report-2020.vue";

import Album from "../bootstrap-example/Album.vue";
import Blog from "../bootstrap-example/Blog.vue";
import Carousel from "../bootstrap-example/Carousel.vue";
import Checkout from "../bootstrap-example/Checkout.vue";
import Pricing from "../bootstrap-example/Pricing.vue";
import Product from "../bootstrap-example/Product.vue";

export default {
  components: {
    AnnouncementToast,
    PageBanner,
    AnnualReport2020,
    Header,
    Footer,

    Album,
    Blog,
    Carousel,
    Checkout,
    Pricing,
    Product,
  },
};
</script>

<style>
/* sticky_footer: https://getbootstrap.com/docs/4.6/examples/sticky-footer-navbar/ */
html,
body,
body > div {
  height: 100%;
}
.site-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.site-container main {
  flex-shrink: 0;
}
.site-container footer {
  margin-top: auto;
}

/* main */
.site-container main {
  margin-top: 84px;
}
</style>
