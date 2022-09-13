<template>
  <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>

    <div class="carousel-inner text-center">
      <div class="carousel-item active" data-bs-interval="10000">
        <figure class="testimonial">
          <blockquote class="blockquote text-opacity-25">
            <p>“A well-known quote, contained in a blockquote element.”</p>
          </blockquote>
          <img
            src="https://via.placeholder.com/512x512?text=placeholder"
            class="rounded-circle mb-2"
            alt=""
            width="64"
          />
          <figcaption class="blockquote-footer mt-0">
            Adam Smith <cite title="Source Title">- Economist</cite>
          </figcaption>
        </figure>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <figure class="testimonial">
          <blockquote class="blockquote text-opacity-25">
            <p>“A well-known quote, contained in a blockquote element.”</p>
          </blockquote>
          <img
            src="https://via.placeholder.com/512x512?text=placeholder"
            class="rounded-circle mb-2"
            alt=""
            width="64"
          />
          <figcaption class="blockquote-footer mt-0">
            Adam Smith <cite title="Source Title">- Economist</cite>
          </figcaption>
        </figure>
      </div>
      <div class="carousel-item">
        <figure class="testimonial">
          <blockquote class="blockquote text-opacity-25">
            <p>“A well-known quote, contained in a blockquote element.”</p>
          </blockquote>
          <img
            src="https://via.placeholder.com/512x512?text=placeholder"
            class="rounded-circle mb-2"
            alt=""
            width="64"
          />
          <figcaption class="blockquote-footer mt-0">
            Adam Smith <cite title="Source Title">- Economist</cite>
          </figcaption>
        </figure>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>