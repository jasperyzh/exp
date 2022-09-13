<template>
  <section id="FanalyticsWorks" class="FanalyticsWorks">
    <h2 class="works__title">Pengacau Raya Series</h2>
    <div class="works">
      <div class="work-1">
        <h3>Brief</h3>
        <p>
          Connect with young Malaysians – the next generation of banking
          customers – through festive occasions where BSN’s values can be
          shared, felt and fuel conversations.
        </p>
      </div>
      <div class="work-2">
        <h3>Solution</h3>
        <p>
          A web series combining storytelling and brand messaging effortlessly.
        </p>
      </div>
      <div class="work-3">
        <h3>Idea</h3>
        <p>
          Pengacau Raya – a series of webisodes that really stirred things up on
          social media. It began with a simple story of unity on the occasion of
          Hari Raya, involving a Chinese Boy married to a Malay Girl, that stole
          the hearts of Malaysians. Every episode touched on a different phase
          in their lives and how BSN played a part in it.
        </p>
      </div>
      <div class="work-4">
        <h3>Results</h3>
        <div class="meta">
          <p>
            <span class="metric">11.3M</span>
            views
          </p>

          <p>
            <span class="metric">140,000</span>
            shares
          </p>

          <p>
            <span class="metric"><small>RM</small>1Mil</span>
            in earned media
          </p>

          <p>
            <span class="metric">30,000</span>
            leads generated
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Source+Serif+Pro:wght@400;600&display=swap");

.FanalyticsWorks {
  padding: 3rem 0;
  h2,
  h3 {
    font-family: "Source Serif Pro", serif;
    font-weight: 600;
    font-size: 3.2rem;
  }
  h3 {
    font-size: 2.4rem;
  }
}
.works {
  max-width: min(1400px, 90%);
  margin-inline: auto;
  display: grid;
  grid-template-columns: 5fr * 1.618 4fr * 1.618 3fr * 1.618 2fr * 1.618 1fr * 1.618;
  gap: 1rem 3rem;
  &__title {
    max-width: min(1024px, 80%);
    margin-inline: auto;
  }
  font-family: "Source Serif Pro", serif;
}
.works > * {
  border: 1px solid rgb(0 0 0 / 0.2);
}
[class^="work-"] {
  padding: 2.125rem 1rem;

  p {
    margin-left: 2rem;
    margin-bottom: 0;
  }
}
.work-1 {
  grid-column: span 2;
  grid-row: span 1;
}
.work-2 {
  grid-column: span 2;
  grid-row: 2/ 3;
}
.work-3 {
  grid-column: span 2;
  grid-row: 3/4;
}
.work-4 {
  grid-column: span 3;
  grid-row: 1/4;
  text-align: center;

  .meta {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    font-family: "Poppins", serif;
    p {
      background: lightgrey;
      padding: 2.125rem 1rem;
      color: black;
      margin: 0;
      font-size: 1.2rem;
      line-height: 1;
      .metric {
        display: block;
        font-weight: 900;
        font-size: 3.6rem;
      }
    }
  }
}
</style>