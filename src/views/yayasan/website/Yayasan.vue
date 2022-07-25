<template>
  <div class="site-container">
    <!-- <YayasanSidebar class="fixed-top border" /> -->
    <YayasanHeader />

    <div class="page-banner row g-0">
      <figure class="page-banner m-0" style="padding-top: 60px">
        <img
          src="@/client/petronas-yayasan/pagebanner-education1.jpg"
          alt=""
        />
      </figure>
    </div>

    <YayasanBold class="bg-white py-4 my-0" />

    <!-- <YayasanBoldCta class="bg-white py-4 my-0" /> -->

    <!-- <section class="bg-white py-4">
      <hr />
      <pre>yayasan-card</pre>
      <div class="container">
        <div class="row">
          <div class="card" style="max-width: 40rem">
            <h2>Bridging the Online Learning Divide (BOLD) Programme</h2>
            <p>
              Sentuhan Ilmu Bridging the Online Learning Divide, or BOLD is a
              comprehensive intervention programme under Yayasan PETRONAS with
              our implementation partner, MYReaders to address learning loss
              among high-needs students, caused by COVID-19.
            </p>
            <a href="" class="btn btn-secondary">Read More</a>
          </div>
        </div>
      </div>
      <hr />
    </section>
     -->
    <!-- <YayasanFaq class="bg-white py-4" /> -->
    <!-- <YayasanBoldCta class="bg-white py-4 my-0" /> -->

    <YayasanFooter />
  </div>
</template>

<script>
import YayasanBold from "./YayasanBold.vue";
import YayasanHeader from "./YayasanHeader.vue";
import YayasanFooter from "./YayasanFooter.vue";
import YayasanFaq from "./YayasanFaq.vue";
// import YayasanBoldCta from "./YayasanBoldCta.vue";
export default {
  components: {
    YayasanBold,
    YayasanHeader,
    YayasanFooter,
    YayasanFaq,
    // YayasanBoldCta,
  },
};
</script>

<style lang="scss" scoped>
.page-banner {
  position: sticky;
  top: 0;
  z-index: -1;
  img {
    width: 100%;
    object-fit: cover;
    aspect-ratio: 6/1;
  }
}
</style>