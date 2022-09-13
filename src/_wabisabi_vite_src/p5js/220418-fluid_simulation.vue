<template>
  <section class="p5js">
    <div class="container">
      <div class="row text-center">
        <div class="col-auto mx-auto">
          <h1>{{ NAME }}</h1>
          <div :id="NAME"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 mx-auto my-3">
          <Note :note="NOTE" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import "https://cdn.jsdelivr.net/npm/p5@1.4.1/lib/p5.js";

const NAME = "220418-fluid_simulation";

const NOTE = `
- [Coding Challenge #132: Fluid Simulation](https://www.youtube.com/watch?v=alhpH6ECFvQ)
- [Real-Time Fluid Dynamics for Games by Jos Stam](https://www.dgp.toronto.edu/public_user/stam/reality/Research/pdf/GDC03.pdf)
- [MSAFluid (2008)](https://www.memo.tv/works/msafluid/)
- [Lily Pad - Test platform for real-time two-dimensional fluid/structure interaction simulations written in Processing.](https://github.com/weymouth/lily-pad)
- [Fluid Simulation for Dummies - by Mike Ash](https://mikeash.com/pyblog/fluid-simulation-for-dummies.html)
- [Why Laminar Flow is AWESOME - Smarter Every Day 208](https://www.youtube.com/watch?v=y7Hyc3MRKno)
- [Why 5/3 is a fundamental constant for turbulence - 3Blue1Brown](https://www.youtube.com/watch?v=_UoTTq651dE)

1. Vector Field
2. Dye: amount, density
`;

const N = 64;
let iter = 8;
let SCALE = 8;
let t = 0;
let fluid;

const s = (p) => {
  p.setup = () => {
    const canvas = p.createCanvas(512, 512);
    canvas.parent(NAME);

    p.frameRate(15);

    fluid = new Fluid(0.2, 0.00001, 0.0000001); // dt, diffusion, viscosity

    // magic_angle = p.atan(1 / p.sqrt(2));
    // maxDistance = p.dist(0, 0, 200, 200);
  };

  p.draw = () => {
    p.background(100);
    p.stroke(10, 10, 10);
    p.strokeWeight(1);

    let cx = p.int((0.5 * p.width) / SCALE);
    let cy = p.int((0.5 * p.height) / SCALE);
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        fluid.addDensity(cx + i, cy + j, p.random(50, 150));
      }
    }

    for (let i = 0; i < 2; i++) {
      let angle = p.noise(t) * p.TWO_PI * 2;
      let v = p5.Vector.fromAngle(angle);
      v.mult(0.2);
      t += 0.01;
      fluid.addVelocity(cx, cy, v.x, v.y);
    }
    fluid.step();
    fluid.renderD();
  };

  // function to use 1D array and fake the extra two dimensions --> 3D
  function IX(x, y) {
    return x + y * N;
  }

  class Fluid {
    constructor(dt, diffusion, viscosity) {
      this.size = N;
      this.dt = dt;
      this.diff = diffusion;
      this.visc = viscosity;

      this.s = new Array(N * N).fill(0);
      this.density = new Array(N * N).fill(0);

      this.Vx = new Array(N * N).fill(0);
      this.Vy = new Array(N * N).fill(0);

      this.Vx0 = new Array(N * N).fill(0);
      this.Vy0 = new Array(N * N).fill(0);
    }
    // step method
    step() {
      let N = this.size;
      let visc = this.visc;
      let diff = this.diff;
      let dt = this.dt;
      let Vx = this.Vx;
      let Vy = this.Vy;
      let Vx0 = this.Vx0;
      let Vy0 = this.Vy0;
      let s = this.s;
      let density = this.density;

      diffuse(1, Vx0, Vx, visc, dt);
      diffuse(2, Vy0, Vy, visc, dt);

      project(Vx0, Vy0, Vx, Vy);

      advect(1, Vx, Vx0, Vx0, Vy0, dt);
      advect(2, Vy, Vy0, Vx0, Vy0, dt);

      project(Vx, Vy, Vx0, Vy0);
      diffuse(0, s, density, diff, dt);
      advect(0, density, s, Vx, Vy, dt);
    }

    // method to add density
    addDensity(x, y, amount) {
      let index = IX(x, y);
      this.density[index] += amount;
    }

    // method to add velocity
    addVelocity(x, y, amountX, amountY) {
      let index = IX(x, y);
      this.Vx[index] += amountX;
      this.Vy[index] += amountY;
    }

    // function to render density
    renderD() {
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
          let x = i * SCALE;
          let y = j * SCALE;
          let d = this.density[IX(i, j)];
          p.fill(d);
          p.noStroke();
          p.rect(x, y, SCALE, SCALE);
        }
      }
    }

    // function to render velocity
    renderV() {
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
          let x = i * SCALE;
          let y = j * SCALE;
          let vx = this.Vx[IX(i, j, k)];
          let vy = this.Vy[IX(i, j, k)];
          this.canvas.stroke(0);

          if (!(p.abs(vx) < 0.1 && p.abs(vy) <= 0.1)) {
            p.line(x, y, x + vx * SCALE, y + vy * SCALE);
          }
        }
      }
    }
  }
  /*
    Function of diffuse
    - b : int
    - x : float[]
    - x0 : float[]
    - diff : float
    - dt : flaot
*/
  function diffuse(b, x, x0, diff, dt) {
    let a = dt * diff * (N - 2) * (N - 2);
    lin_solve(b, x, x0, a, 1 + 6 * a);
  }

  /*
    Function of solving linear differential equation
    - b : int
    - x : float[]
    - x0 : float[]
    - a : float
    - c : float
*/
  function lin_solve(b, x, x0, a, c) {
    let cRecip = 1.0 / c;
    for (let t = 0; t < iter; t++) {
      for (let j = 1; j < N - 1; j++) {
        for (let i = 1; i < N - 1; i++) {
          x[IX(i, j)] =
            (x0[IX(i, j)] +
              a *
                (x[IX(i + 1, j)] +
                  x[IX(i - 1, j)] +
                  x[IX(i, j + 1)] +
                  x[IX(i, j - 1)])) *
            cRecip;
        }
      }
      set_bnd(b, x);
    }
  }

  /*
    Function of project : This operation runs through all the cells and fixes them up so everything is in equilibrium.
    - velocX : float[]
    - velocY : float[]
    = p : float[]
    - div : float[]
*/
  function project(velocX, velocY, p, div) {
    for (let j = 1; j < N - 1; j++) {
      for (let i = 1; i < N - 1; i++) {
        div[IX(i, j)] =
          (-0.5 *
            (velocX[IX(i + 1, j)] -
              velocX[IX(i - 1, j)] +
              velocY[IX(i, j + 1)] -
              velocY[IX(i, j - 1)])) /
          N;
        p[IX(i, j)] = 0;
      }
    }

    set_bnd(0, div);
    set_bnd(0, p);
    lin_solve(0, p, div, 1, 6);

    for (let j = 1; j < N - 1; j++) {
      for (let i = 1; i < N - 1; i++) {
        velocX[IX(i, j)] -= 0.5 * (p[IX(i + 1, j)] - p[IX(i - 1, j)]) * N;
        velocY[IX(i, j)] -= 0.5 * (p[IX(i, j + 1)] - p[IX(i, j - 1)]) * N;
      }
    }

    set_bnd(1, velocX);
    set_bnd(2, velocY);
  }

  /*
    Function of advect: responsible for actually moving things around
    - b : int
    - d : float[]
    - d0 : float[]
    - velocX : float[]
    - velocY : float[]
    - velocZ : float[]
    - dt : float[]
*/
  function advect(b, d, d0, velocX, velocY, dt) {
    let i0, i1, j0, j1;

    let dtx = dt * (N - 2);
    let dty = dt * (N - 2);

    let s0, s1, t0, t1;
    let tmp1, tmp2, tmp3, x, y;

    let Nfloat = N - 2;
    let ifloat, jfloat;
    let i, j, k;

    for (j = 1, jfloat = 1; j < N - 1; j++, jfloat++) {
      for (i = 1, ifloat = 1; i < N - 1; i++, ifloat++) {
        tmp1 = dtx * velocX[IX(i, j)];
        tmp2 = dty * velocY[IX(i, j)];
        x = ifloat - tmp1;
        y = jfloat - tmp2;

        if (x < 0.5) x = 0.5;
        if (x > Nfloat + 0.5) x = Nfloat + 0.5;
        i0 = Math.floor(x);
        i1 = i0 + 1.0;
        if (y < 0.5) y = 0.5;
        if (y > Nfloat + 0.5) y = Nfloat + 0.5;
        j0 = Math.floor(y);
        j1 = j0 + 1.0;

        s1 = x - i0;
        s0 = 1.0 - s1;
        t1 = y - j0;
        t0 = 1.0 - t1;

        let i0i = parseInt(i0);
        let i1i = parseInt(i1);
        let j0i = parseInt(j0);
        let j1i = parseInt(j1);

        d[IX(i, j)] =
          s0 * (t0 * d0[IX(i0i, j0i)] + t1 * d0[IX(i0i, j1i)]) +
          s1 * (t0 * d0[IX(i1i, j0i)] + t1 * d0[IX(i1i, j1i)]);
      }
    }

    set_bnd(b, d);
  }

  /*
    Function of dealing with situation with boundary cells.
    - b : int
    - x : float[]
*/
  function set_bnd(b, x) {
    for (let i = 1; i < N - 1; i++) {
      x[IX(i, 0)] = b == 2 ? -x[IX(i, 1)] : x[IX(i, 1)];
      x[IX(i, N - 1)] = b == 2 ? -x[IX(i, N - 2)] : x[IX(i, N - 2)];
    }
    for (let j = 1; j < N - 1; j++) {
      x[IX(0, j)] = b == 1 ? -x[IX(1, j)] : x[IX(1, j)];
      x[IX(N - 1, j)] = b == 1 ? -x[IX(N - 2, j)] : x[IX(N - 2, j)];
    }

    x[IX(0, 0)] = 0.5 * (x[IX(1, 0)] + x[IX(0, 1)]);
    x[IX(0, N - 1)] = 0.5 * (x[IX(1, N - 1)] + x[IX(0, N - 2)]);
    x[IX(N - 1, 0)] = 0.5 * (x[IX(N - 2, 0)] + x[IX(N - 1, 1)]);
    x[IX(N - 1, N - 1)] = 0.5 * (x[IX(N - 2, N - 1)] + x[IX(N - 1, N - 2)]);
  }
};
new p5(s);
</script>
