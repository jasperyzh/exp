<template>
  <header>
    <!-- fixed-top  -->
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Carousel</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              >Home <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
        <form class="form-inline mt-2 mt-md-0">
          <input
            class="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  </header>

  <main role="main">
    <div
      id="myCarousel"
      class="carousel slide pointer-event"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <svg
            class="bd-placeholder-img"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label=" :  "
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title></title>
            <rect width="100%" height="100%" fill="#777"></rect>
            <text x="50%" y="50%" fill="#777" dy=".3em"></text>
          </svg>

          <div class="container">
            <div class="carousel-caption text-left">
              <h1>Example headline.</h1>
              <p>
                Some representative placeholder content for the first slide of
                the carousel.
              </p>
              <p>
                <a class="btn btn-lg btn-primary" href="#">Sign up today</a>
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <svg
            class="bd-placeholder-img"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label=" :  "
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title></title>
            <rect width="100%" height="100%" fill="#777"></rect>
            <text x="50%" y="50%" fill="#777" dy=".3em"></text>
          </svg>

          <div class="container">
            <div class="carousel-caption">
              <h1>Another example headline.</h1>
              <p>
                Some representative placeholder content for the second slide of
                the carousel.
              </p>
              <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <svg
            class="bd-placeholder-img"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label=" :  "
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title></title>
            <rect width="100%" height="100%" fill="#777"></rect>
            <text x="50%" y="50%" fill="#777" dy=".3em"></text>
          </svg>

          <div class="container">
            <div class="carousel-caption text-right">
              <h1>One more for good measure.</h1>
              <p>
                Some representative placeholder content for the third slide of
                this carousel.
              </p>
              <p>
                <a class="btn btn-lg btn-primary" href="#">Browse gallery</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-target="#myCarousel"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-target="#myCarousel"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </button>
    </div>

    <!-- Marketing messaging and featurettes
  ================================================== -->
    <!-- Wrap the rest of the page in another container to center all the content. -->

    <div class="container marketing">
      <!-- Three columns of text below the carousel -->
      <div class="row">
        <div class="col-lg-4">
          <svg
            class="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 140x140"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777"></rect>
            <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
          </svg>

          <h2>Heading</h2>
          <p>
            Some representative placeholder content for the three columns of
            text below the carousel. This is the first column.
          </p>
          <p><a class="btn btn-secondary" href="#">View details »</a></p>
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <svg
            class="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 140x140"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777"></rect>
            <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
          </svg>

          <h2>Heading</h2>
          <p>
            Another exciting bit of representative placeholder content. This
            time, we've moved on to the second column.
          </p>
          <p><a class="btn btn-secondary" href="#">View details »</a></p>
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <svg
            class="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 140x140"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777"></rect>
            <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
          </svg>

          <h2>Heading</h2>
          <p>
            And lastly this, the third column of representative placeholder
            content.
          </p>
          <p><a class="btn btn-secondary" href="#">View details »</a></p>
        </div>
        <!-- /.col-lg-4 -->
      </div>
      <!-- /.row -->

      <!-- START THE FEATURETTES -->

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">
            First featurette heading.
            <span class="text-muted">It’ll blow your mind.</span>
          </h2>
          <p class="lead">
            Some great placeholder content for the first featurette here.
            Imagine some exciting prose here.
          </p>
        </div>
        <div class="col-md-5">
          <svg
            class="
              bd-placeholder-img bd-placeholder-img-lg
              featurette-image
              img-fluid
              mx-auto
            "
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee"></rect>
            <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
          </svg>
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading">
            Oh yeah, it’s that good.
            <span class="text-muted">See for yourself.</span>
          </h2>
          <p class="lead">
            Another featurette? Of course. More placeholder content here to give
            you an idea of how this layout would work with some actual
            real-world content in place.
          </p>
        </div>
        <div class="col-md-5 order-md-1">
          <svg
            class="
              bd-placeholder-img bd-placeholder-img-lg
              featurette-image
              img-fluid
              mx-auto
            "
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee"></rect>
            <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
          </svg>
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">
            And lastly, this one. <span class="text-muted">Checkmate.</span>
          </h2>
          <p class="lead">
            And yes, this is the last block of representative placeholder
            content. Again, not really intended to be actually read, simply here
            to give you a better view of what this would look like with some
            actual content. Your content.
          </p>
        </div>
        <div class="col-md-5">
          <svg
            class="
              bd-placeholder-img bd-placeholder-img-lg
              featurette-image
              img-fluid
              mx-auto
            "
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee"></rect>
            <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
          </svg>
        </div>
      </div>

      <hr class="featurette-divider" />

      <!-- /END THE FEATURETTES -->
    </div>
    <!-- /.container -->

    <!-- FOOTER -->
    <footer class="container">
      <p class="float-right"><a href="#">Back to top</a></p>
      <p>
        © 2017-2021 Company, Inc. · <a href="#">Privacy</a> ·
        <a href="#">Terms</a>
      </p>
    </footer>
  </main>
</template>
<!-- 
<style lang="scss" scoped>
/* GLOBAL STYLES
-------------------------------------------------- */
/* Padding below the footer and lighter body text */

body {
  padding-top: 3rem;
  padding-bottom: 3rem;
  color: #5a5a5a;
}

/* CUSTOMIZE THE CAROUSEL
-------------------------------------------------- */

/* Carousel base class */
.carousel {
  margin-bottom: 4rem;
}
/* Since positioning the image, we need to help out the caption */
.carousel-caption {
  bottom: 3rem;
  z-index: 10;
}

/* Declare heights because of positioning of img element */
.carousel-item {
  height: 32rem;
}
.carousel-item > img {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  height: 32rem;
}

/* MARKETING CONTENT
-------------------------------------------------- */

/* Center align the text within the three columns below the carousel */
.marketing .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}
.marketing h2 {
  font-weight: 400;
}
.marketing .col-lg-4 p {
  margin-right: 0.75rem;
  margin-left: 0.75rem;
}

/* Featurettes
------------------------- */

.featurette-divider {
  margin: 5rem 0; /* Space out the Bootstrap <hr> more */
}

/* Thin out the marketing headings */
.featurette-heading {
  font-weight: 300;
  line-height: 1;
  letter-spacing: -0.05rem;
}

/* RESPONSIVE CSS
-------------------------------------------------- */

@media (min-width: 40em) {
  /* Bump up size of carousel content */
  .carousel-caption p {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.4;
  }

  .featurette-heading {
    font-size: 50px;
  }
}

@media (min-width: 62em) {
  .featurette-heading {
    margin-top: 7rem;
  }
}
</style> -->