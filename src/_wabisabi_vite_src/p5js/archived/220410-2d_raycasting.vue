<template>
  <div class="p5js">
    <h1>{{ $options.name }}</h1>
    <div :id="$options.name"></div>
    <div class="markdown note">
      {{ note }}
    </div>
  </div>
</template>

<script>
import "https://cdn.jsdelivr.net/npm/p5@1.4.1/lib/p5.js";

export default {
  name: "p5js: 2D Raycasting",
  data() {
    return {
      data: "220410",
      note: `
1. create a "light source", Ray
2. create boundary/walls
3. find the line-to-line intersection
4. draw line from light source to wall
      `,
    };
  },
  mounted() {
    // [Coding Challenge #145: 2D Raycasting (Coding Challenge 166)](https://www.youtube.com/watch?v=TOEi6T2mtHo)
    // more on Matrix Math - https://www.youtube.com/watch?v=uSzGdfdOoG8

    const s = (p) => {
      // let wall;
      let walls = [];
      // let ray;
      let particle;
      let particle2;
      let xoff = 0;
      let yoff = 9999;
      p.setup = () => {
        const canvas = p.createCanvas(640, 480);
        canvas.parent(this.$options.name);

        // wall = new Boundary(600, 100, 300, 400);
        for (let i = 0; i < 13; i++) {
          let x1 = p.random(p.width);
          let x2 = p.random(p.width);
          let y1 = p.random(p.height);
          let y2 = p.random(p.height);
          walls[i] = new Boundary(x1, y1, x2, y2);
        }
        // ray = new Ray(100, 200);
        particle = new Particle();
        particle2 = new Particle();
      };

      p.draw = () => {
        p.background(100);
        for (let wall of walls) {
          wall.show();
        }

        // particle.update(p.mouseX, p.mouseY);
        particle.show();
        particle.look(walls);
        particle.update(p.noise(xoff) * p.width, p.noise(yoff) * p.height);
        xoff += 0.01;
        yoff += 0.01;

        particle2.show();
        particle2.look(walls);
        particle2.update(
          p.noise(3 * xoff) * p.width,
          p.noise(3 * yoff) * p.height
        );

        // ray.show();
        // ray.lookAt(p.mouseX, p.mouseY);

        // let pt = ray.cast(wall);
        // if (pt) {
        // p.fill(255);
        // p.stroke(255);
        //   p.ellipse(pt.x, pt.y, 8, 8);
        //   p.line(100, 200, pt.x, pt.y);
        // }
      };
      class Particle {
        constructor() {
          this.pos = p.createVector(p.width / 2, p.height / 2);
          this.rays = [];
          for (let a = 0; a < 360; a += 13) {
            this.rays.push(new Ray(this.pos, p.radians(a)));
          }
        }

        update(x, y) {
          this.pos.set(x, y);
        }
        look(walls) {
          for (let ray of this.rays) {
            let closest = null;
            let record = Infinity;
            for (let wall of walls) {
              const pt = ray.cast(wall);
              if (pt) {
                const d = p5.Vector.dist(this.pos, pt);
                if (d < record) {
                  record = d;
                  closest = pt;
                }
              }
            }
            if (closest) {
              p.stroke(255, 100);
              p.line(this.pos.x, this.pos.y, closest.x, closest.y);
            }
          }
        }
        show() {
          p.fill(255);
          p.ellipse(this.pos.x, this.pos.y, 4);
          for (let ray of this.rays) {
            this.rays;
          }
        }
      }
      class Boundary {
        constructor(x1, y1, x2, y2) {
          this.a = p.createVector(x1, y1);
          this.b = p.createVector(x2, y2);
        }
        show() {
          p.stroke(255, 100);
          p.line(this.a.x, this.a.y, this.b.x, this.b.y);
        }
      }

      class Ray {
        constructor(pos, angle) {
          this.pos = pos;
          this.dir = p5.Vector.fromAngle(angle);
          // this.dir = p.createVector(1, 0);
        }
        lookAt(x, y) {
          this.dir.x = x - this.pos.x;
          this.dir.y = y - this.pos.y;
          this.dir.normalize();
        }
        show() {
          p.stroke(255);
          p.push();
          p.translate(this.pos.x, this.pos.y);
          p.line(0, 0, this.dir.x * 10, this.dir.y * 10);
          p.pop();
        }
        cast(wall) {
          const x1 = wall.a.x;
          const y1 = wall.a.y;
          const y2 = wall.b.y;
          const x2 = wall.b.x;

          const x3 = this.pos.x;
          const y3 = this.pos.y;
          const y4 = this.pos.y + this.dir.y;
          const x4 = this.pos.x + this.dir.x;

          const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
          if (den == 0) {
            return;
          }

          const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
          const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;

          if (t > 0 && t < 1 && u > 0) {
            const pt = p.createVector();
            pt.x = x1 + t * (x2 - x1);
            pt.y = y1 + t * (y2 - y1);
            return pt;
          }
          //  else {
          //   return "nope";
          // }
        }
      }
    };

    let myp5 = new p5(s);
  },
};
</script>
