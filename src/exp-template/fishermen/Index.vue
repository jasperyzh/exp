<template>
  <div class="site-container">
    <Header />

    <main>
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
</script>

<style lang="scss" scoped>
// bg
body {
  background-image: url("~/assets/fishermen/fishermen-bg.svg");
  background-repeat: repeat-y;
  background-position: center;
  background-size: cover;
}

//badge
.services__list {
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .badge {
    margin-bottom: 0.25rem;
  }
  li:nth-child(1) {
    background-color: $yellow;
  }
  li:nth-child(2) {
    background-color: $red;
  }
  li:nth-child(3) {
    background-color: $navy;
  }
  li:nth-child(4) {
    background-color: $darkblue;
  }
  li:nth-child(5) {
    background-color: $yellow;
  }
  .home & {
    display: none;
  }
}

// styles

hr.golden-separator {
  width: min(10vw, 30rem);
  margin: 0.25rem auto;
  border-top: 2px solid $gold;
}
// sections
.section__block {
  background-color: #fff;
  margin: min(5vh, 3rem) auto;
  padding: min(5vh, 3rem) 0;
}
.section__join {
  aspect-ratio: 22 / 9;
  background-image: url("https://fishermen.co/wp-content/themes/genesis-fishermen/images/background/bg2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 40%;

  position: relative;
  & > * {
    z-index: 0;
  }
  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: auto;
    background-color: rgb(0 0 0 /0.5);
  }
}

section.p__lead,
section.welcome,
section.hero-work,
section .hero-service__content,
section.our-belief {
  p {
    color: $blue;
    font-size: 1.125rem;
    font-family: "Montserrat", sans-serif;
  }
}

.hero {
  h1 {
    line-height: 1.2;
  }
  &__golden-title {
    color: $gold;
    background: -webkit-linear-gradient(gold, $gold);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bolder;
  }
  &__golden-separator {
    max-width: 5vw;
    margin: 0.25rem auto;
    border-top: 2px solid $gold;
  }
}

.services__title {
  display: block;
  height: max(4rem, 8vh);
  display: inline-flex;
  align-items: center;
}

.achivements {
  .year {
    font-size: 1.325rem;
    font-weight: 600;
    color: $gold;
    margin: 0.5rem auto;
  }
  .event {
    font-size: 1.025rem;
    font-weight: 600;
    color: $blue;
    margin-bottom: 4px;
  }
  .award {
    text-transform: uppercase;
    font-size: 1.4rem;
    color: $blue;
    margin-bottom: 4px;
  }
  ul {
    padding-left: 0;
    line-height: 1.2;
  }
  .badge {
    display: block;
    white-space: initial;
    color: $blue;
    font-weight: 400;
  }
}

.who {
  &__figure {
    display: grid;
    justify-items: end;
    align-items: end;
    max-width: 360px;
    margin-inline: auto;

    & > * {
      grid-column: 1/2;
      grid-row: 1/2;
    }
  }
  &__image {
    object-fit: cover;
    width: 100%;
    aspect-ratio: 16/9;
  }
  &__social {
    background-color: white;
  }
}

.contact-info {
  margin-bottom: 3rem;
  padding: 3rem 0;
  position: relative;
  &__bg-round:after {
    content: "";
    display: block;
    width: min(80vh, 26rem);
    height: min(80vh, 26rem);
    position: absolute;
    top: 50%;
    left: 50%;
    margin: auto;
    transform: translateX(-50%) translateY(-50%);
    background-color: rgb(255 255 255/ 0.9);
    border-radius: 50%;
    z-index: -1;
  }

  h2 {
    font-size: 1.35rem;
  }
  p {
    font-size: 90%;
    line-height: 1.2;
    margin-bottom: 0.25rem;
  }
  hr {
    margin: 0.5rem auto;
  }

  #menu-social-media {
    &.menu {
      display: flex;
      list-style: none;
      justify-content: center;
      margin-inline: 0px;
      padding: 1px;
    }
    .menu-item {
      margin: 0.25rem;
    }
  }
}

// home.php
.blog .site-main {
  margin-top: 5rem;
}

article.entry {
  padding: 1rem;
  background-color: white;
  margin-inline: auto;
  @include media-breakpoint-up(md) {
    padding: 3rem 1rem;
  }
}
</style>