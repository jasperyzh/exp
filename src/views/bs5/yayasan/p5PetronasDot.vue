<template>
  <canvas id="canvas"></canvas>
</template>
<script>
import "https://cdnjs.cloudflare.com/ajax/libs/gl-matrix/2.8.1/gl-matrix-min.js";

export default {
  mounted() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const cellSize = 30;
    const maxSize = 30;
    let mousePos = vec2.fromValues(innerWidth * 0.925, innerHeight * 0.95);
    let numThingsX;
    let numThingsY;
    let things;

    function drawThing(thing) {
      const { pos, radius } = thing;
      ctx.fillStyle = "#00a19c";
      ctx.beginPath();
      ctx.arc(pos[0], pos[1], radius, 0, Math.PI * 2);
      ctx.fill();
    }

    function loop() {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      things.forEach((thing) => {
        const dist = vec2.dist(mousePos, thing.pos) * 0.14;
        thing.radius = clamp(dist * dist * 0.0003 - 1, 0, maxSize);
        drawThing(thing);
      });
      // For now I'm turning off the RAF loop because
      // there are no ongoing animations.
      // window.requestAnimationFrame(loop);
    }

    function makeThing(x, y) {
      return {
        pos: vec2.fromValues(x, y),
        radius: 2,
      };
    }

    function makeThings() {
      things = [];
      for (let i = 0; i < numThingsY; i += 1) {
        for (let j = 0; j < numThingsX; j += 1) {
          const thing = makeThing(
            j * cellSize + cellSize * 0.5,
            i * cellSize + cellSize * 0.5
          );
          things.push(thing);
        }
      }
    }

    function sizeCanvas() {
      const dpr = window.devicePixelRatio || 1;
      const canvasRect = canvas.getBoundingClientRect();
      canvas.width = canvasRect.width * dpr;
      canvas.height = canvasRect.height * dpr;
      ctx.scale(dpr, dpr);
    }

    function handleResize() {
      sizeCanvas();
      numThingsX = Math.ceil(innerWidth / cellSize);
      numThingsY = Math.ceil(innerHeight / cellSize);
      makeThings();
    }
    window.addEventListener("resize", throttled(handleResize));

    function handleMouseMove(event) {
      vec2.set(mousePos, event.clientX, event.clientY);
      loop();
    }
    window.addEventListener("mousemove", throttled(handleMouseMove));

    // Kick it off
    handleResize();
    loop();

    // USEFUL FUNCTIONS ----------
    function throttled(fn) {
      let didRequest = false;
      return (param) => {
        if (!didRequest) {
          window.requestAnimationFrame(() => {
            fn(param);
            didRequest = false;
          });
          didRequest = true;
        }
      };
    }
    function clamp(value, min = 0, max = 1) {
      return value <= min ? min : value >= max ? max : value;
    }
  },
};
</script>

<style lang="scss" scoped>
#canvas {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
}
h1 {
  color: var(--bg);
  position: relative;
  font-size: 20vw;
  line-height: 100vh;
  margin: 0;
  pointer-events: none;
}
body {
  min-height: 100vh;
  background: var(--fg);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
:root {
  --fg: #ffffff;
  --bg: #ff0000;
}
</style>