<template>
  <div class="site-container">
    <Header />

    <main>
      <MastheadVue></MastheadVue>

      <div class="container">
        <div class="row row-cols-md-2 row-cols-lg-3 mx-auto">
          <CardVue></CardVue>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import CardVue from "@/components/general/Card.vue";
import MastheadVue from "./Masthead.vue";
</script>
