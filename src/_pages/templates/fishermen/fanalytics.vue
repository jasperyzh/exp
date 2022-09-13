<template>
  <div id="site-container">
    <header class="bg-light">
      <div class="container">
        <div class="row">
          <div
            class="
              d-flex
              flex-wrap
              justify-content-center
              py-3
              mb-4
              border-bottom
            "
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
              <li class="nav-item">
                <a href="#" class="nav-link">Features</a>
              </li>
              <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
              <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
              <li class="nav-item"><a href="#" class="nav-link">About</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <!-- masthead -->
    <main>
      <section id="hero">
        <div class="container my-5">
          <div
            class="
              row
              p-4
              pb-0
              pe-lg-0
              pt-lg-5
              align-items-center
              rounded-3
              border
              shadow-lg
            "
          >
            <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 class="display-4 fw-bold lh-1">
                Border hero with cropped image and shadows
              </h1>
              <p class="lead">
                Quickly design and customize responsive mobile-first sites with
                Bootstrap, the world's most popular front-end open source
                toolkit, featuring Sass variables and mixins, responsive grid
                system, extensive prebuilt components, and powerful JavaScript
                plugins.
              </p>
              <div
                class="
                  d-grid
                  gap-2
                  d-md-flex
                  justify-content-md-start
                  mb-4 mb-lg-3
                "
              >
                <button
                  type="button"
                  class="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
                >
                  Primary
                </button>
                <button
                  type="button"
                  class="btn btn-outline-secondary btn-lg px-4"
                >
                  Default
                </button>
              </div>
            </div>
            <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
              <img
                class="rounded-lg-3"
                src="https://getbootstrap.com/docs/5.1/examples/heroes/bootstrap-docs.png"
                alt=""
                width="720"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="article">
        <div class="container">
          <div class="row g-5">
            <div class="col-md-8">
              <h3 class="pb-4 mb-4 fst-italic border-bottom">
                From the Firehose
              </h3>

              <article class="blog-post">
                <h2 class="blog-post-title">Sample blog post</h2>
                <p class="blog-post-meta">
                  January 1, 2021 by <a href="#">Mark</a>
                </p>

                <p>
                  This blog post shows a few different types of content that's
                  supported and styled with Bootstrap. Basic typography, lists,
                  tables, images, code, and more are all supported as expected.
                </p>
                <hr />
                <p>
                  This is some additional paragraph placeholder content. It has
                  been written to fill the available space and show how a longer
                  snippet of text affects the surrounding content. We'll repeat
                  it often to keep the demonstration flowing, so be on the
                  lookout for this exact same string of text.
                </p>
                <h2>Blockquotes</h2>
                <p>This is an example blockquote in action:</p>
                <blockquote class="blockquote">
                  <p>Quoted text goes here.</p>
                </blockquote>
                <p>
                  This is some additional paragraph placeholder content. It has
                  been written to fill the available space and show how a longer
                  snippet of text affects the surrounding content. We'll repeat
                  it often to keep the demonstration flowing, so be on the
                  lookout for this exact same string of text.
                </p>
                <h3>Example lists</h3>
                <p>
                  This is some additional paragraph placeholder content. It's a
                  slightly shorter version of the other highly repetitive body
                  text used throughout. This is an example unordered list:
                </p>
                <ul>
                  <li>First list item</li>
                  <li>Second list item with a longer description</li>
                  <li>Third list item to close it out</li>
                </ul>
                <p>And this is an ordered list:</p>
                <ol>
                  <li>First list item</li>
                  <li>Second list item with a longer description</li>
                  <li>Third list item to close it out</li>
                </ol>
                <p>And this is a definition list:</p>
                <dl>
                  <dt>HyperText Markup Language (HTML)</dt>
                  <dd>
                    The language used to describe and define the content of a
                    Web page
                  </dd>
                  <dt>Cascading Style Sheets (CSS)</dt>
                  <dd>Used to describe the appearance of Web content</dd>
                  <dt>JavaScript (JS)</dt>
                  <dd>
                    The programming language used to build advanced Web sites
                    and applications
                  </dd>
                </dl>
                <h2>Inline HTML elements</h2>
                <p>
                  HTML defines a long list of available inline tags, a complete
                  list of which can be found on the
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element"
                    >Mozilla Developer Network</a
                  >.
                </p>
                <ul>
                  <li>
                    <strong>To bold text</strong>, use
                    <code class="language-plaintext highlighter-rouge"
                      >&lt;strong&gt;</code
                    >.
                  </li>
                  <li>
                    <em>To italicize text</em>, use
                    <code class="language-plaintext highlighter-rouge"
                      >&lt;em&gt;</code
                    >.
                  </li>
                  <li>
                    Abbreviations, like
                    <abbr title="HyperText Markup Langage">HTML</abbr> should
                    use
                    <code class="language-plaintext highlighter-rouge"
                      >&lt;abbr&gt;</code
                    >, with an optional
                    <code class="language-plaintext highlighter-rouge"
                      >title</code
                    >
                    attribute for the full phrase.
                  </li>
                  <li>
                    Citations, like <cite>— Mark Otto</cite>, should use
                    <code class="language-plaintext highlighter-rouge"
                      >&lt;cite&gt;</code
                    >.
                  </li>
                  <li>
                    <del>Deleted</del> text should use
                    <code class="language-plaintext highlighter-rouge"
                      >&lt;del&gt;</code
                    >
                    and <ins>inserted</ins> text should use
                    <code class="language-plaintext highlighter-rouge"
                      >&lt;ins&gt;</code
                    >.
                  </li>
                  <li>
                    Superscript <sup>text</sup> uses
                    <code class="language-plaintext highlighter-rouge"
                      >&lt;sup&gt;</code
                    >
                    and subscript <sub>text</sub> uses
                    <code class="language-plaintext highlighter-rouge"
                      >&lt;sub&gt;</code
                    >.
                  </li>
                </ul>
                <p>
                  Most of these elements are styled by browsers with few
                  modifications on our part.
                </p>
                <h2>Heading</h2>
                <p>
                  This is some additional paragraph placeholder content. It has
                  been written to fill the available space and show how a longer
                  snippet of text affects the surrounding content. We'll repeat
                  it often to keep the demonstration flowing, so be on the
                  lookout for this exact same string of text.
                </p>
                <h3>Sub-heading</h3>
                <p>
                  This is some additional paragraph placeholder content. It has
                  been written to fill the available space and show how a longer
                  snippet of text affects the surrounding content. We'll repeat
                  it often to keep the demonstration flowing, so be on the
                  lookout for this exact same string of text.
                </p>
                <pre><code>Example code block</code></pre>
                <p>
                  This is some additional paragraph placeholder content. It's a
                  slightly shorter version of the other highly repetitive body
                  text used throughout.
                </p>
              </article>

              <article class="blog-post">
                <h2 class="blog-post-title">Another blog post</h2>
                <p class="blog-post-meta">
                  December 23, 2020 by <a href="#">Jacob</a>
                </p>

                <p>
                  This is some additional paragraph placeholder content. It has
                  been written to fill the available space and show how a longer
                  snippet of text affects the surrounding content. We'll repeat
                  it often to keep the demonstration flowing, so be on the
                  lookout for this exact same string of text.
                </p>
                <blockquote>
                  <p>
                    Longer quote goes here, maybe with some
                    <strong>emphasized text</strong> in the middle of it.
                  </p>
                </blockquote>
                <p>
                  This is some additional paragraph placeholder content. It has
                  been written to fill the available space and show how a longer
                  snippet of text affects the surrounding content. We'll repeat
                  it often to keep the demonstration flowing, so be on the
                  lookout for this exact same string of text.
                </p>
                <h3>Example table</h3>
                <p>And don't forget about tables in these posts:</p>
                <table class="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Upvotes</th>
                      <th>Downvotes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Alice</td>
                      <td>10</td>
                      <td>11</td>
                    </tr>
                    <tr>
                      <td>Bob</td>
                      <td>4</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>Charlie</td>
                      <td>7</td>
                      <td>9</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td>Totals</td>
                      <td>21</td>
                      <td>23</td>
                    </tr>
                  </tfoot>
                </table>

                <p>
                  This is some additional paragraph placeholder content. It's a
                  slightly shorter version of the other highly repetitive body
                  text used throughout.
                </p>
              </article>

              <article class="blog-post">
                <h2 class="blog-post-title">New feature</h2>
                <p class="blog-post-meta">
                  December 14, 2020 by <a href="#">Chris</a>
                </p>

                <p>
                  This is some additional paragraph placeholder content. It has
                  been written to fill the available space and show how a longer
                  snippet of text affects the surrounding content. We'll repeat
                  it often to keep the demonstration flowing, so be on the
                  lookout for this exact same string of text.
                </p>
                <ul>
                  <li>First list item</li>
                  <li>Second list item with a longer description</li>
                  <li>Third list item to close it out</li>
                </ul>
                <p>
                  This is some additional paragraph placeholder content. It's a
                  slightly shorter version of the other highly repetitive body
                  text used throughout.
                </p>
              </article>

              <nav class="blog-pagination" aria-label="Pagination">
                <a class="btn btn-outline-primary" href="#">Older</a>
                <a class="btn btn-outline-secondary disabled">Newer</a>
              </nav>
            </div>

            <div class="col-md-4">
              <div class="position-sticky" style="top: 2rem">
                <div class="p-4 mb-3 bg-light rounded">
                  <h4 class="fst-italic">About</h4>
                  <p class="mb-0">
                    Customize this section to tell your visitors a little bit
                    about your publication, writers, content, or something else
                    entirely. Totally up to you.
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
            </div>
          </div>
        </div>
      </section>

      <section id="">
        <div class="container px-4 py-5" id="custom-cards">
          <h2 class="pb-2 border-bottom">Custom cards</h2>

          <div
            class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5"
          >
            <div class="col">
              <div
                class="
                  card card-cover
                  h-100
                  overflow-hidden
                  text-white
                  bg-dark
                  rounded-5
                  shadow-lg
                "
                style="
                  background-image: url('https://getbootstrap.com/docs/5.1/examples/features/unsplash-photo-1.jpg');
                "
              >
                <div
                  class="
                    d-flex
                    flex-column
                    h-100
                    p-5
                    pb-3
                    text-white text-shadow-1
                  "
                >
                  <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    Short title, long jacket
                  </h2>
                  <ul class="d-flex list-unstyled mt-auto">
                    <li class="me-auto">
                      <img
                        src="https://github.com/twbs.png"
                        alt="Bootstrap"
                        width="32"
                        height="32"
                        class="rounded-circle border border-white"
                      />
                    </li>
                    <li class="d-flex align-items-center me-3">
                      <svg class="bi me-2" width="1em" height="1em">
                        <use xlink:href="#geo-fill"></use>
                      </svg>
                      <small>Earth</small>
                    </li>
                    <li class="d-flex align-items-center">
                      <svg class="bi me-2" width="1em" height="1em">
                        <use xlink:href="#calendar3"></use>
                      </svg>
                      <small>3d</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col">
              <div
                class="
                  card card-cover
                  h-100
                  overflow-hidden
                  text-white
                  bg-dark
                  rounded-5
                  shadow-lg
                "
                style="
                  background-image: url('https://getbootstrap.com/docs/5.1/examples/features/unsplash-photo-2.jpg');
                "
              >
                <div
                  class="
                    d-flex
                    flex-column
                    h-100
                    p-5
                    pb-3
                    text-white text-shadow-1
                  "
                >
                  <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    Much longer title that wraps to multiple lines
                  </h2>
                  <ul class="d-flex list-unstyled mt-auto">
                    <li class="me-auto">
                      <img
                        src="https://github.com/twbs.png"
                        alt="Bootstrap"
                        width="32"
                        height="32"
                        class="rounded-circle border border-white"
                      />
                    </li>
                    <li class="d-flex align-items-center me-3">
                      <svg class="bi me-2" width="1em" height="1em">
                        <use xlink:href="#geo-fill"></use>
                      </svg>
                      <small>Pakistan</small>
                    </li>
                    <li class="d-flex align-items-center">
                      <svg class="bi me-2" width="1em" height="1em">
                        <use xlink:href="#calendar3"></use>
                      </svg>
                      <small>4d</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col">
              <div
                class="
                  card card-cover
                  h-100
                  overflow-hidden
                  text-white
                  bg-dark
                  rounded-5
                  shadow-lg
                "
                style="
                  background-image: url('https://getbootstrap.com/docs/5.1/examples/features/unsplash-photo-3.jpg');
                "
              >
                <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                  <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    Another longer title belongs here
                  </h2>
                  <ul class="d-flex list-unstyled mt-auto">
                    <li class="me-auto">
                      <img
                        src="https://github.com/twbs.png"
                        alt="Bootstrap"
                        width="32"
                        height="32"
                        class="rounded-circle border border-white"
                      />
                    </li>
                    <li class="d-flex align-items-center me-3">
                      <svg class="bi me-2" width="1em" height="1em">
                        <use xlink:href="#geo-fill"></use>
                      </svg>
                      <small>California</small>
                    </li>
                    <li class="d-flex align-items-center">
                      <svg class="bi me-2" width="1em" height="1em">
                        <use xlink:href="#calendar3"></use>
                      </svg>
                      <small>5d</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="">
        <div class="container px-4 py-5" id="hanging-icons">
          <h2 class="pb-2 border-bottom">Hanging icons</h2>

          <div class="row gx-4 py-5 row-cols-1 row-cols-lg-3">
            <div class="col d-flex align-items-start bg-light py-3 rounded-3">
              <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
                <svg class="bi" width="1em" height="1em">
                  <use xlink:href="#toggles2"></use>
                </svg>
              </div>
              <div>
                <h2>Featured title</h2>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                  We'll add onto it with another sentence and probably just keep
                  going until we run out of words.
                </p>
                <a href="#" class="btn btn-primary"> Primary button </a>
              </div>
            </div>
            <div class="col d-flex align-items-start bg-light py-3 rounded-3">
              <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
                <svg class="bi" width="1em" height="1em">
                  <use xlink:href="#cpu-fill"></use>
                </svg>
              </div>
              <div>
                <h2>Featured title</h2>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                  We'll add onto it with another sentence and probably just keep
                  going until we run out of words.
                </p>
                <a href="#" class="btn btn-primary"> Primary button </a>
              </div>
            </div>
            <div class="col d-flex align-items-start bg-light py-3 rounded-3">
              <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
                <svg class="bi" width="1em" height="1em">
                  <use xlink:href="#tools"></use>
                </svg>
              </div>
              <div>
                <h2>Featured title</h2>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                  We'll add onto it with another sentence and probably just keep
                  going until we run out of words.
                </p>
                <a href="#" class="btn btn-primary"> Primary button </a>
              </div>
            </div>
          </div>
          <div class="row">
            <!-- <div class="rellax">
                            I’m that default chill speed of "-2"
                        </div> -->
            <!-- <div class="rellax" data-rellax-speed="7">
                            I’m super fast!!
                        </div>
                        <div class="rellax" data-rellax-speed="-4">
                            I’m extra slow and smooth
                        </div> -->
            <!--  <div class="rellax" data-rellax-speed="0.2">
                            I’m super fast!!
                        </div>
                        <div class="rellax" data-rellax-speed="-0.1">
                            ZOMGWTFBBQ
                        </div>
                        <div class="rellax" data-rellax-speed="1">
                            I’m extra slow and smooth
                        </div> -->

            <div
              class="rellax"
              data-rellax-percentage="0.5"
              data-rellax-zindex="5"
            >
              I’m that default chill speed of "-2" and "centered"
            </div>

            <div
              class="rellax"
              data-rellax-speed="7"
              data-rellax-percentage="0.5"
              data-rellax-zindex="5"
            >
              I’m super fast!! And super centered!!
            </div>

            <div
              class="rellax"
              data-rellax-speed="-4"
              data-rellax-percentage="0.5"
              data-rellax-zindex="5"
            >
              I’m extra slow and smooth, and hella centered.
            </div>
          </div>
        </div>
      </section>

      <section id="cta" class="px-4">
        <div class="row align-items-md-stretch">
          <div class="col-md-6">
            <div class="h-100 p-5 text-white bg-dark rounded-3">
              <h2>Change the background</h2>
              <p>
                Swap the background-color utility and add a `.text-*` color
                utility to mix up the jumbotron look. Then, mix and match with
                additional component themes and more.
              </p>
              <button class="btn btn-outline-light" type="button">
                Example button
              </button>
            </div>
          </div>
          <div class="col-md-6">
            <div class="h-100 p-5 bg-light border rounded-3">
              <h2>Add borders</h2>
              <p>
                Or, keep it light and add a border for some added definition to
                the boundaries of your content. Be sure to look under the hood
                at the source HTML here as we've adjusted the alignment and
                sizing of both column's content for equal-height.
              </p>
              <button class="btn btn-outline-secondary" type="button">
                Example button
              </button>
            </div>
          </div>
        </div>
        <div class="p-5 my-4 bg-light rounded-3">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Custom jumbotron</h1>
            <p class="col-md-8 fs-4">
              Using a series of utilities, you can create this jumbotron, just
              like the one in previous versions of Bootstrap. Check out the
              examples below for how you can remix and restyle it to your
              liking.
            </p>
            <button class="btn btn-primary btn-lg" type="button">
              Example button
            </button>
          </div>
        </div>
      </section>
    </main>
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div
            class="
              d-flex
              flex-wrap
              justify-content-between
              align-items-center
              py-3
              my-4
              border-top
            "
          >
            <div class="col-md-4 d-flex align-items-center">
              <a
                href="/"
                class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
              >
                <svg class="bi" width="30" height="24">
                  <use xlink:href="#bootstrap"></use>
                </svg>
              </a>
              <span class="text-muted">© 2021 Company, Inc</span>
            </div>

            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li class="ms-3">
                <a class="text-muted" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-twitter"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                    />
                  </svg>
                </a>
              </li>
              <li class="ms-3">
                <a class="text-muted" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                    />
                  </svg>
                </a>
              </li>
              <li class="ms-3">
                <a class="text-muted" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
  <!-- site-container -->
</template>