<template>
    <Layout>
        <h1>EXP|p5js</h1>
        <div id="canvas"></div>
    </Layout>
</template>

<script setup>
import Layout from "@/components/LayoutDefault.vue";
import { onMounted } from "vue";
import p5 from "p5";

const sketch = (p) => {
    // const parent = "canvas";/
    // console.log("hello", parent);

    let angle = 0;
    let w = 48;
    let magic_angle;
    let maxDistance;

    p.setup = () => {
        const canvas = p.createCanvas(640, 480, p.WEBGL);
        // canvas.parent(parent);

        magic_angle = p.atan(1 / p.sqrt(2));
        maxDistance = p.dist(0, 0, 200, 200);

        // // wall = new Boundary(600, 100, 300, 400);
        // for (let i = 0; i < 13; i++) {
        //   let x1 = p.random(p.width);
        //   let x2 = p.random(p.width);
        //   let y1 = p.random(p.height);
        //   let y2 = p.random(p.height);
        //   walls[i] = new Boundary(x1, y1, x2, y2);
        // }
        // // ray = new Ray(100, 200);
        // particle = new Particle();
        // particle2 = new Particle();
    };

    p.draw = () => {
        p.background(233);
        p.ortho(-500, 500, 400, -500, 0, 1000);
        // p.translate(p.width / 2, p.height / 2);
        // p.translate(0, 50, -50);
        // p.rotateX(p.PI / 8);
        p.rotateX(p.QUARTER_PI);
        p.rotateY(magic_angle);
        // p.rectMode(p.CENTER);

        // p.rotateX(angle * 0.2);
        /*   let h = p.map(p.sin(angle), -1, 1, 0, 100);
            p.fill(200);
            p.rect(0, 0, 10, h);
     */

        // let offset = 0;
        /*  for (let z = 0; z < p.height; z += w) {
              for (let x = 0; x < p.width; x += w) {
                p.push();
                let d = p.dist(x, z, p.width / 2, p.height / 2);
                let offset = p.map(d, 0, maxDistance);
                let a = angle + offset;
                let h = p.map(p.sin(a), -1, 1, 0, 100);
                p.fill(200);
                p.translate(x - p.width / 2, 0, z - p.height / 2);
                // p.ambientMaterial(255);
                p.normalMaterial();
                p.box(w - 2, h, w - 2);
                // p.rect(x - p.width / 2 + w / 2, 0, w - 2, h);
                // offset += 0.1;
                p.pop();
              }
            } */
        for (let z = 0; z < p.height; z += w) {
            for (let x = 0; x < p.width; x += w) {
                p.push();
                let d = p.dist(x, z, p.width / 2, p.height / 2);
                let offset = p.map(d, 0, maxDistance, p.PI, -p.PI);
                let a = angle + offset;
                let h = p.floor(p.map(p.sin(a) * 2, -1, 1, 200, 300));
                p.translate(x - p.width / 2, 0, z - p.height / 2);
                p.normalMaterial();
                p.box(w, h, w);
                //rect(x - width / 2 + w / 2, 0, w - 2, h);
                p.pop();
            }
        }
        angle += 0.1;
    };
}
onMounted(() => {
    let myp5 = new p5(sketch, `canvas`);
})
</script>