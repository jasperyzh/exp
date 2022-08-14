<template>
  <header class="grid-stack masthead__size">
    <div class="text-center mx-1 mx-sm-5 p-3 shadow-sm bg-light">
      <h1 class="display-1">3 CSS Grid tricks</h1>
      <p class="lead">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ad.
      </p>
    </div>
    <img
      src="https://images.unsplash.com/photo-1551096052-fa4be61340c5?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTI4MDgzMzE&ixlib=rb-1.2.1&q=85"
      alt=""
    />
  </header>

  <main class="bg-light py-lg-5">
    <!-- min, max, clamp -->
    <pre>
      <a href="https://www.youtube.com/watch?v=U9VF-4euyRo">min(), max(), and clamp() are CSS magic!</a>
    <code>
      width: min(500px, 70%);
      = width: 70%; max-width: 500px;

      width: clamp(300px, 50%, 20rem);

      font-size: clamp(1rem, 1.25vw, 1.25rem);
      // always use the max and min value, ordering doesnt matter
    </code>
    </pre>

    <!-- fireship-cssgrid -->
    <pre>
        <a href="https://www.youtube.com/watch?v=705XCEruZFs">The Joy of CSS Grid - Build 3 Beautifully Simple Responsive Layouts</a>
        <a href="https://www.youtube.com/watch?v=DM244V9KvNs">3 useful CSS values: max-content, min-content, fit-content</a>
      </pre>

    <div class="overflow-hidden">
      <h2 class="css_value width_max_content">CSS Value max-content</h2>
      <h2 class="css_value width_min_content">CSS Value min-content</h2>
      <h2 class="css_value width_fit_content">CSS Value fit-content</h2>
    </div>
    <pre>
      <code>width: max-content;</code>
      the content wouldnt break
      <code>width: min-content;</code>
    </pre>
    <section class="fireship_grid_1">
      <article
        class="gallery_item"
        v-for="item in 12"
        :key="`fireship_grid_1-${item}`"
      >
        <img width="220" :src="placeholder_images[item]" alt="" />
      </article>
    </section>
    <section class="fireship_grid_2">
      <article
        :class="`gallery_item gallery_item__animate 
        ${item == 1 ? 'item_tall' : ''} 
        ${item == 3 ? 'item_large' : ''} 
        ${item == 9 ? 'item_wide' : ''}`"
        v-for="item in 12"
        :key="`fireship_grid_2-${item}`"
      >
        <img width="220" :src="placeholder_images[item]" alt="" />
      </article>
    </section>

    <div class="container p-4 p-sm-5 bg-white mb-5">
      <pre><a href="https://www.youtube.com/watch?v=JSURzPQnkl0">3 More Life-Changing CSS Tips</a></pre>

      <h3>"best" width for paragraph</h3>
      <code> width: clamp(45ch, 20%, 75ch); </code>
      <blockquote class="blockquote__widthsize">
        <p class="lead">
          If you really understand Zen… you can use any book. You could use the
          Bible. You could use Alice in Wonderland. You could use the
          dictionary, because… the sound of the rain needs no translation.
        </p>
        <p><strong>&mdash; Alan Watts</strong></p>
      </blockquote>

      <h3>HSL instead of RGB</h3>
      <code>style="border-top: 2rem solid hsl(100, 86%, 80%, 80%)"</code>
      <hr style="border-top: 2rem solid hsl(100, 86%, 80%, 80%)" />
      <hr style="border-top: 2rem solid hsl(140, 96%, 50%, 80%)" />
      <hr style="border-top: 2rem solid hsl(180, 100%, 10%, 80%)" />

      <h3>Scroll Padding for anchor link</h3>
      <code> article { scroll-padding: 1rem 0 0 0; }</code>

      <div class="fullbleed py-5 my-5">
        <a href="https://www.youtube.com/watch?v=81pnuZFarRw" target="_blank">
          <h3>Full-width background inside a container</h3>
        </a>
        <code>
          .fullbleed { --bg-color: hsl(280 50% 20%); box-shadow: 0 0 0 100vmax
          var(--bg-color); clip-path: inset(0 -100vmax); color: #ededed;
          background-color: var(--bg-color); }</code
        >
      </div>
    </div>

    <slot></slot>

    <div class="container px-2 py-4 p-sm-5 bg-white">
      <pre><a target="_blank" href="https://www.youtube.com/watch?v=z2kuC7w9emE">Easier layouts with these 3 Grid tips</a></pre>
      <h2 class="mt-4 mb-2">Prevent overflow with <code>minmax()</code></h2>
      <div class="grid-even-columns">
        <div class="p-3 shadow-sm bg-light">
          <img
            class="icon"
            src="https://assets.codepen.io/308367/comment.svg"
          />
          <h3>Store and sync</h3>
          <p>
            Keep all your files securely stored, up to date, and accessible from
            any device
          </p>
        </div>
        <div class="p-3 shadow-sm bg-light">
          <img class="icon" src="https://assets.codepen.io/308367/share.svg" />
          <h3>Share</h3>
          <p>
            Quickly send any file—big or small—to anyone, even if they don’t
            have a Dropbox account.
          </p>
        </div>
        <div class="p-3 shadow-sm bg-light">
          <img class="icon" src="https://assets.codepen.io/308367/shield.svg" />
          <h3>Stay secure</h3>
          <p>
            Keep your files private with multiple layers of protection from the
            service trusted by millions.
          </p>
        </div>
        <div class="p-3 shadow-sm bg-light">
          <img
            class="icon"
            src="https://assets.codepen.io/308367/comment.svg"
          />
          <h3>Collaborate</h3>
          <p>
            Manage tasks, track file updates, and stay in sync with your teams
            and clients.
          </p>
        </div>
      </div>

      <h2 class="mt-4 mb-2">Using <code>grid-auto-flow</code></h2>
      <div class="grid-auto-flow">
        <div class="p-3 shadow-sm bg-light">
          <img
            class="icon"
            src="https://assets.codepen.io/308367/comment.svg"
          />
          <h3>Store and sync</h3>
          <p>
            Keep all your files securely stored, up to date, and accessible from
            any device
          </p>
        </div>
        <div class="p-3 shadow-sm bg-light">
          <img class="icon" src="https://assets.codepen.io/308367/share.svg" />
          <h3>Share</h3>
          <p>
            Quickly send any file—big or small—to anyone, even if they don’t
            have a Dropbox account.
          </p>
        </div>
        <div class="p-3 shadow-sm bg-light">
          <img class="icon" src="https://assets.codepen.io/308367/shield.svg" />
          <h3>Stay secure</h3>
          <p>
            Keep your files private with multiple layers of protection from the
            service trusted by millions.
          </p>
        </div>
        <div class="p-3 shadow-sm bg-light">
          <img class="icon" src="https://assets.codepen.io/308367/share.svg" />
          <h3>Share</h3>
          <p>
            Quickly send any file—big or small—to anyone, even if they don’t
            have a Dropbox account.
          </p>
        </div>
        <div class="p-3 shadow-sm bg-light">
          <img class="icon" src="https://assets.codepen.io/308367/shield.svg" />
          <h3>Stay secure</h3>
          <p>
            Keep your files private with multiple layers of protection from the
            service trusted by millions.
          </p>
        </div>
        <div class="p-3 shadow-sm bg-light">
          <img
            class="icon"
            src="https://assets.codepen.io/308367/comment.svg"
          />
          <h3>Collaborate</h3>
          <p>
            Manage tasks, track file updates, and stay in sync with your teams
            and clients.
          </p>
        </div>
      </div>
    </div>
  </main>

  <aside>
    <div class="position-sticky bg-light shadow" style="top: 2rem">
      <div class="p-4 mb-3 bg-light rounded">
        <h4 class="fst-italic">About</h4>
        <p class="mb-0">
          Customize this section to tell your visitors a little bit about your
          publication, writers, content, or something else entirely. Totally up
          to you.
        </p>
      </div>

      <div class="p-4">
        <h4 class="fst-italic">Archives</h4>
        <ol class="list-unstyled mb-0">
          <li><a href="#">March 2021</a></li>
          <li><a href="#">February 2021</a></li>
          <li><a href="#">January 2021</a></li>
          <li><a href="#">December 2020</a></li>
          <li><a href="#">November 2020</a></li>
          <li><a href="#">October 2020</a></li>
          <li><a href="#">September 2020</a></li>
          <li><a href="#">August 2020</a></li>
          <li><a href="#">July 2020</a></li>
          <li><a href="#">June 2020</a></li>
          <li><a href="#">May 2020</a></li>
          <li><a href="#">April 2020</a></li>
        </ol>
      </div>

      <div class="p-4">
        <h4 class="fst-italic">Elsewhere</h4>
        <ol class="list-unstyled">
          <li><a href="#">GitHub</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Facebook</a></li>
        </ol>
      </div>
    </div>
  </aside>

  <Footer4Column />
</template>

<script setup>
import { placeholder_images } from "../Placeholder.js";
import Footer4Column from "../Footer/4Column.vue";
import { onMounted } from "vue";

// const images = placeholder_images;

onMounted(() => {
  document.querySelectorAll(".gallery_item").forEach((item) => {
    appearOnScroll.observe(item);
  });
});

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
);
</script>

<style scoped>
body {
  background-color: gold;
}

img {
  max-width: 100%;
  height: auto;
}

/* cssgrid - basic content_sidebar styling */
/* todo - improve sidebar-gridarea flexibility */
.site-container {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr minmax(300px, 1024px) auto 1fr;
}
.site-container > header {
  grid-column: 1/-1;
}
.site-container > main {
  grid-column: 2/3;
  width: clamp(1024px, 1fr, 1200px);
}
.site-container > aside {
  grid-column: -2/-3;
  inline-size: 300px;
}
.site-container > footer {
  grid-column: 1/ -1;
}

@media (max-width: 1024px) {
  .site-container {
    grid-template-columns: 1fr minmax(300px, 1024px) 1fr;
  }
  .site-container > aside {
    display: none;
  }
}
</style>

<style lang="scss" scoped>
h2.css_value {
  // font-size: 5rem;
  font-size: clamp(2rem, 5vw + 1rem, 5rem);
  background-color: goldenrod;
  padding: 0.25rem 3rem;
  color: #fff;
  font-weight: 900;
}
.width_max_content {
  width: max-content;
}
.width_min_content {
  width: min-content;
}
.width_fit_content {
  width: fit-content;
}
.gallery_item {
  // aspect-ratio: 1/1;
  overflow: hidden;

  img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
  }
}
.fireship_grid_1 {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.fireship_grid_2 {
  margin: 3rem auto;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 300px;

  @media (min-width: 768px) {
    .item_tall {
      grid-row: span 2 / auto;
    }
    .item_wide {
      grid-column: span 2 / auto;
    }
    .item_large {
      grid-column: span 2 / auto;
      grid-row: span 2 / auto;
    }
  }

  --stagger-delay: 100ms;

  .gallery_item__animate.appear img {
    animation: galleryEntrance 800ms ease-in-out;
    animation-fill-mode: backwards;
    // animation-delay: 200ms;
    // animation-fill-mode: forwards;
  }
  @for $i from 1 through 12 {
    .gallery_item__animate:nth-child(#{$i}) img {
      animation-delay: calc($i * var(--stagger-delay));
    }
  }
}
@keyframes galleryEntrance {
  from {
    opacity: 0;
    transform: scale(0.3);
    filter: sepia(100);
  }
  to {
    opacity: 1;
    transform: scale(1);
    filter: sepia(0);
  }
}

.masthead__size {
  max-height: 100vh;
}
[class*="grid-"] {
  display: grid;
  gap: 1rem;
}
.grid-stack {
  display: grid;
  place-items: center;
  overflow: hidden;
}
.grid-stack > * {
  // elements overlay on top of each other
  grid-column: 1 /2;
  grid-row: 1/2;
}
.grid-stack > img {
  z-index: -1;
  object-fit: cover;
  aspect-ratio: 1/1;
  @media (min-width: 768px) {
    aspect-ratio: 16/9;
  }
  @media (min-width: 1024px) {
    // aspect-ratio: 22/9;
    width: 100%;
    max-height: 500px;
  }
}
.grid-even-columns {
  // grid-template-columns: repeat(4, 1fr);
  // grid-template-columns: repeat(auto-fit, minmax(500px, 1fr)); //will cause overflow
  grid-template-columns: repeat(auto-fit, minmax(min(500px, 100%), 1fr));
}

@media (min-width: 1024px) {
  .grid-auto-flow {
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
  }
}

.fullbleed {
  --bg-color: hsl(280 50% 20%);
  box-shadow: 0 0 0 100vmax var(--bg-color);
  clip-path: inset(0 -100vmax);
  color: #ededed;
  background-color: var(--bg-color);
}

.blockquote__widthsize {
  width: clamp(45ch, 20%, 75ch);
}
</style>