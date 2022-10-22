<template>
  <div class="container-fluid my-4 css-wave">
    <div class="row">
      <pre>section*8>(h1>{Nice Curve})+p>lorem</pre>
      <p>
        <a href="https://www.youtube.com/watch?v=lPJVi797Uy0" target="_blank"
          >Build a Curvaceous Homepage // Wavy Background Tutorial with SVG &
          CSS</a
        >
      </p>
      <section class="bg-blue">
        <h1>Nice Curve</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt tempore
          sapiente corrupti, ratione possimus eius nobis sequi, illum incidunt
          exercitationem architecto dolore delectus, quia harum. Fuga commodi
          veritatis earum minus!
        </p>
        <div class="curve"></div>
      </section>
      <section class="">
        <h1>Nice Curve</h1>
        <p>
          Autem iure ab ipsa! Sed consequatur odio accusantium amet distinctio
          veniam expedita molestias eos numquam quasi! Natus, in cum!
          Voluptatibus saepe nostrum incidunt ipsum rem expedita blanditiis,
          eveniet omnis possimus?
        </p>
      </section>
      <section class="bubble">
        <h1>Nice Curve</h1>
        <p>
          Quam nostrum minus maxime assumenda? Libero et dolores harum tempore,
          nostrum quaerat vitae. Suscipit iure sequi ratione officiis dolor illo
          provident corporis odit tempore laborum! Modi a nostrum quidem fuga.
        </p>
      </section>
      <section class="bg-orange">
        <h1>Nice Curve</h1>
        <p>
          Dignissimos possimus voluptatem eveniet doloremque nemo libero quod
          perspiciatis facere quia repellat placeat soluta vero perferendis,
          saepe est ad ex sunt voluptas corrupti sapiente! Minima sequi at rem
          velit laudantium.
        </p>
      </section>
      <section class="bg-red">
        <h1>Nice Curve</h1>
        <p>
          Rem possimus voluptate sapiente dolor harum dolorem veritatis sed
          velit, alias dicta, eaque aspernatur architecto saepe similique,
          suscipit mollitia sequi aliquid sunt non. Ullam earum deleniti
          quisquam sint tempore facere?
        </p>
        <p class="lead">
          <a href="https://www.shapedivider.app/" target="_blank"
            >https://www.shapedivider.app/</a
          >
        </p>

        <div class="wave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      <div class="spacer layer-1"></div>

      <section class="bg-green">
        <h1>Nice Curve</h1>
        <p>
          Delectus velit voluptate, vel quod ab explicabo alias illo quia eaque
          voluptates, rem sed eligendi facilis impedit laboriosam adipisci id
          corporis ea at tempora, expedita totam. Nulla odit modi iusto.
        </p>
      </section>

      <div class="spacer layer-1 flip"></div>

      <section class="bg-white text-grey">
        <h1>Nice Curve</h1>
        <p>
          Quisquam quam voluptates adipisci perspiciatis optio amet fugit velit
          error repellendus in temporibus eius, eveniet, asperiores sapiente
          nobis pariatur cupiditate quas qui et. Cum iure placeat, voluptate
          quia fuga consequatur.
        </p>

        <p class="lead">
          <a href="https://app.haikei.app/" target="_blank" class="color-invert"
            >https://app.haikei.app/</a
          >
        </p>
      </section>

      <div class="spacer layer-1"></div>

      <section class="bg-green">
        <h1>Nice Curve</h1>
        <p>
          Distinctio adipisci sed tempora tempore ut optio cumque voluptates
          velit magni necessitatibus iure nisi consequatur alias qui tenetur
          quidem eaque odit est quis harum beatae, ea fuga. Ipsa, perspiciatis
          sint.
        </p>
      </section>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Hina+Mincho&display=swap");
.css-wave {
  font-family: "Hina Mincho", serif;
  background: #202020;
  color: #fafafa;
  overflow-x: hidden;
}
section {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  padding: 5rem 20vw;
  text-align: center;

  p {
    font-size: 1.4rem;
  }
  a {
    color: #fff;
    &.color-invert {
      color: #038373;
    }
  }
}
.bg {
  &-dark {
    background: #202020;
  }
  &-blue {
    background-color: rgb(48, 204, 152);
  }
  &-orange {
    background-color: rgb(235, 136, 43);
  }
  &-green {
    background-color: #038373;
  }
  &-red {
    background-color: rgb(218, 24, 24);
  }
  &-white {
    background-color: #fff;
  }
}
.text-grey {
  color: #999;
}
.curve {
  position: absolute;
  height: 225px;
  width: 100%;
  bottom: 0;

  &:before {
    content: "";
    display: block;
    position: absolute;
    border-radius: 100% 50%;
    width: 55%;
    height: 100%;
    background-color: #202020;
    transform: translate(85%, 60%);
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 100% 50%;
    width: 55%;
    height: 100%;
    background-color: rgb(48, 204, 152);
    transform: translate(-4%, 40%);
    z-index: 1;
  }
}
.bubble {
  z-index: 1;
  &:after {
    content: "";
    border-top-left-radius: 50% 100%;
    border-top-right-radius: 50% 100%;
    position: absolute;
    bottom: 0;
    height: 92%;
    width: 100%;
    background-color: rgb(235, 136, 43);
    z-index: -1;
  }
}
.wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);

  svg {
    position: relative;
    display: block;
    width: calc(130% + 1.3px);
    height: 108px;
  }

  .shape-fill {
    fill: #ffffff;
  }
}
.spacer {
  aspect-ratio: 960 / 300;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.layer-1 {
  background-image: url("~@/assets/stacked-peaks-haikei.svg");
}
.flip {
  transform: rotate(180deg) scaleY(101%);
}
</style>