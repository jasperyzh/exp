<template>
  <section>
    <header>
      <div class="meta">
        <p class="h1">05</p>
        <p class="year">2017</p>
      </div>

      <div class="meta_title">
        <h1 class="h4">#1 Private University in Malaysia and SEA</h1>
        <a href="https://university.taylors.edu.my/">university.taylors.edu.my</a>
      </div>

      <div class="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tenetur,
        ut incidunt mollitia culpa unde dolorem ad ab at. Aliquam ullam, nobis
        quo saepe reprehenderit expedita animi molestiae? Atque, dolorum?
      </div>

      <div class="logo">
        <img src="https://www.easyuni.my/media/scholarships/logo/taylor_university_LMiIdD3.png" width="180" alt="" />
      </div>

      <div class="detail">
        Information
        <ul>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li><b>Lorem dolor.</b> Lorem ipsum consectetur.</li>
        </ul>
      </div>
    </header>
    <main class="">
      <div class="title parallax-effect">
        <div data-depth="0.05">
          <h2>Taylor's University Style</h2>
          <p>Lorem ipsum dolor sit.</p>
        </div>
      </div>
      <figure class="parallax-effect">
        <img
          data-depth="0.1"
          src="https://images.pexels.com/photos/8826427/pexels-photo-8826427.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
      </figure>
      <div class="credit">
        <b>Credit</b>
        <p>
          <small
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Laboriosam hic iusto culpa placeat.</small
          >
        </p>
      </div>
    </main>
  </section>
    <pre>Layout now - pg228-229</pre>
    <pre>220124 - add mobile responsive would be nice</pre>
</template>
<script>
import "https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js";

export default {
  mounted() {
    document.querySelectorAll(".parallax-effect").forEach((item) => {
      new Parallax(item);
    });
  },
};
</script>
<style lang="scss" scoped>
.parallax-effect {
  & > * {
    position: relative;
  }
}
section {
  border: 1px solid rgb(0 0 0 / 0.04);
  padding: 1rem;
}
section {
  max-width: 1200px;
  margin: 3rem auto;

  font-size: 0.825rem;
}
header {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  gap: 0.5rem;

  grid-template-areas:
    "meta meta logo"
    "meta_title desc detail";
  .meta {
    grid-area: meta;
  }
  .meta_title {
    grid-area: meta_title;
  }
  .desc {
    grid-area: desc;

    max-width: 280px;
  }
  .logo {
    grid-area: logo;

    align-self: center;
  }
  .detail {
    grid-area: detail;
  }
}
main {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(9, auto);
  .title {
    grid-column: 1/6;
    grid-row: 1/3;
  }
  figure {
    grid-column: 2/6;
    grid-row-start: 2;
    grid-row-end: -1;

    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .credit {
    grid-column: 1/2;
    grid-row-end: -1;
  }
}

.title {
  h2 {
    font-size: 8rem;
    font-family: serif;
    line-height: 1;
  }
  font-size: 2rem;
  font-family: serif;
  z-index: 2;
}

figure {
  img {
    aspect-ratio: 22/ 10;
    box-shadow: 1.5rem 2.5rem 1rem rgb(0 0 0 /0.12);
  }
}
</style>