<template>
    
    <pre>
        Eyeballs Follow Mouse
        220924 [completed]
        + using trigonometry to have the eyes follow the mouse moments
        + select multiples "eyes" and follow mouse movements
    </pre>
    <a href="https://www.youtube.com/watch?v=TGe3pS5LqEw">How to make Eyeballs that Follow You Around | Fireship</a>
    <div class="eye_canvas">
        <div class="eye__body"></div>
        <div class="eye"></div>
        <div class="eye eye__2"></div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    const anchors = document.querySelectorAll(".eye");
    let all_eyes = [];

    const angle = function (cx, cy, ex, ey) {
        const dy = ey - cy;
        const dx = ex - cx;
        const rad = Math.atan2(dy, dx) //range (-PI , PI)
        const deg = rad * 180 / Math.PI; //rads to deg, range (-180, 180)
        return deg;
    }

    anchors.forEach((anchor, index) => {
        const item = anchor.getBoundingClientRect()
        all_eyes[index] = {
            _element: anchor,
            _x: item.left + item.width / 2,
            _y: item.top + item.height / 2
        }
    })

    document.addEventListener("mousemove", (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        all_eyes.forEach(item => {
            const angleDeg = angle(mouseX, mouseY, item._x, item._y);
            item._element.style.transform = `rotate(${angleDeg}deg)`;
        })
    })
})
</script>

<style scoped>
.eye_canvas {
    position: relative;
    max-width: 320px;
}

.eye__body {
    min-width: 320px;
    min-height: 250px;
    background: #ccc;
    border-radius: 3rem;
    border-end-start-radius: 0;
    position: relative;
}

.eye__body:after {
    content: "";
    min-width: 50px;
    min-height: 50px;
    background: #ccc;
    position: absolute;
    bottom: 0;
    left: 0;
    translate: -100%;
    border-radius: 3rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 0;
}

.eye {
    position: absolute;
    top: 50px;
    right: 80%;
    width: 50px;
    height: 50px;
    background: #fff;
    border-radius: 50px;
}

.eye:after {
    content: "";
    width: 5px;
    height: 5px;
    background: black;
    border-radius: 50px;
    position: absolute;
    bottom: 50%;
    left: 20%;
    margin: auto;

    translate: -50%;
}

.eye__2 {
    right: 10px;
    top: 80px;
}
</style>