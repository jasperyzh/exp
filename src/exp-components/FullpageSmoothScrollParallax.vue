<template>
  <article class="fullpage-smoothscroll-parallax">
    <nav class="navbar justify-content-center fixed-top bg-light">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" href="#basic-parallax">Basic Parallax</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#home">About this page</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">About CSS-Smooth-Scroll</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#service">Service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
    <section id="basic-parallax" class="overflow-hidden">
      <BasicParallax />
    </section>
    <section id="home">
      <h1>Welcome to a Landing page <br />with fullpage smooth-scrolling</h1>

      <p class="lead d-inline-block bg-light px-4 py-2">
        <a target="_blank" href="https://www.youtube.com/watch?v=y9nlfqT4s9s"
          >Landing Page With Smooth Scroll</a
        >
      </p>
    </section>
    <section id="about">
      <h1 class="bg-dark p-2">About CSS Smooth Scroll</h1>
      <p class="lead">
        <code class="bg-dark p-2">
          <!-- prettier-ignore -->
          scroll-snap-align: center;
          scroll-margin-top: 10rem;
        </code>
      </p>
      <p class="bg-dark p-2">
        Scroll-snap-align will snap to the declared section, along with
        <code>scroll-snap-type: y mandatory;</code> on html-tag
      </p>
      <p class="bg-dark p-2">
        Scroll-margin-top is the "anchor-link's offset" that I have been looking
        for the pass half decades... hurray... (notice the slight gap between
        the section &amp; sticky-navbar
      </p>
      <a
        target="_blank"
        class="btn btn-info text-decoration-underline"
        href="https://gomakethings.com/how-to-prevent-anchor-links-from-scrolling-behind-a-sticky-header-with-one-line-of-css/"
        >How to prevent anchor links from scrolling behind a sticky header with
        one line of CSS - by gomakethings.com</a
      >
    </section>
    <section id="service">
      <h1>- Next: Good to have -</h1>
      <ol>
        <li>Pagination Button to indicate where user at</li>
        <li><a href="http://www.firewatchgame.com/" target="_blank">Try replicate Beautiful Vertical Parallax landscape by FireWatch</a></li>
      </ol>
    </section>
    <section id="contact">
      <h1>Contact</h1>
      <p class="lead">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, quis!
      </p>
    </section>
  </article>
</template>

<script setup>
import BasicParallax from "@/components/decoration/BasicParallax.vue";
</script>

<style lang="scss">
html {
  // scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
}
.fullpage-smoothscroll-parallax {
  width: 100%;
  height: 100%;
  /* CSS Smooth Scroll */
  section {
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;

    /* Scroll Snap */
    scroll-snap-align: center;
    scroll-margin-top: 10rem;
  }

  section#home {
    background: url("https://source.unsplash.com/bZZp1PmHI0E/1600x900")
      no-repeat center center/cover;
  }

  section#about {
    background: url("https://source.unsplash.com/VRxo0yY-gyM/1600x900")
      no-repeat center center/cover;
  }

  section#service {
    background: url("https://source.unsplash.com/K2tdx2mFDHc/1600x900")
      no-repeat center center/cover;
  }

  section#contact {
    background: url("https://source.unsplash.com/2aAHlfDOhJM/1600x900")
      no-repeat center center/cover;
  }
}
</style>