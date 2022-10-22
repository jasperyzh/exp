<template>
  <div class="container">
    <div class="row h-100 justify-content-center align-items-center">
      <pre>
        Asteroid with JavaScript
        220924 [rediscovered]
        codes are copied from samples, no recollection of making this.
      </pre>
      <canvas id="asteroid" style="background-color: #333"></canvas>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";

let canvas;
let ctx;
let canvasWidth = 1280;
let canvasHeight = 720;
let ship;
let keys = [];
let bullets = [];
let asteroids = [];
let score = 0;
let lives = 3;

onMounted(() => {

  class Ship {
    constructor() {
      this.visible = true;
      this.x = canvasWidth / 2;
      this.y = canvasHeight / 2;
      this.movingForward = false;
      this.speed = 0.1;
      this.velX = 0;
      this.velY = 0;
      this.rotateSpeed = 0.001;
      this.radius = 15;
      this.angle = 0;
      this.strokeColor = 'white';
      this.noseX = canvasWidth / 2 + 15;
      this.noseY = canvasHeight / 2;
    }
    Rotate(dir) {
      this.angle += this.rotateSpeed * dir;
    }
    Update() {
      // convert degree to radians
      let radians = this.angle / Math.PI * 180;

      // oldX + cos(radians) * distance
      // oldY + sin(radians) * distance
      if (this.movingForward) {
        this.velX += Math.cos(radians) * this.speed;
        this.velY += Math.sin(radians) * this.speed;
      }

      if (this.x < this.radius) {
        this.x = canvas.width;
      }
      if (this.x > canvas.width) {
        this.x = this.radius;
      }
      if (this.y < this.radius) {
        this.y = canvas.height;
      }
      if (this.y > canvas.height) {
        this.y = this.radius;
      }
      this.velX *= 0.99;
      this.velY *= 0.99;

      this.x -= this.velX;
      this.y -= this.velY;
    }
    Draw() {
      ctx.strokeStyle = this.strokeColor;
      ctx.beginPath();
      let vertAngle = ((Math.PI * 2) / 3);
      let radians = this.angle / Math.PI * 180;

      this.noseX = this.x - this.radius * Math.cos(radians);
      this.noseY = this.y - this.radius * Math.sin(radians);

      for (let i = 0; i < 3; i++) {
        ctx.lineTo(this.x - this.radius * Math.cos(vertAngle * i + radians), this.y - this.radius * Math.sin(vertAngle * i + radians));
      }
      ctx.closePath();
      ctx.stroke();
    }
  }

  class Asteroid {
    constructor(x, y, radius, level, collisionRadius) {
      this.visible = true;
      this.x = x || Math.floor(Math.random() * canvasWidth);
      this.y = y || Math.floor(Math.random() * canvasHeight);
      this.speed = 2;
      this.radius = radius || 50;
      this.angle = Math.floor(Math.random() * 359);
      this.strokeColor = 'white';
      this.collisionRadius = collisionRadius || 46;
      this.level = level || 1;
    }
    Update() {
      var radians = this.angle / Math.PI * 180;
      this.x += Math.cos(radians) * this.speed;
      this.y += Math.sin(radians) * this.speed;
      if (this.x < this.radius) {
        this.x = canvas.width;
      }
      if (this.x > canvas.width) {
        this.x = this.radius;
      }
      if (this.y < this.radius) {
        this.y = canvas.height;
      }
      if (this.y > canvas.height) {
        this.y = this.radius;
      }
    }
    Draw() {
      ctx.beginPath();
      let vertAngle = ((Math.PI * 2) / 7);
      var radians = this.angle / Math.PI * 180;
      for (let i = 0; i < 8; i++) {
        ctx.lineTo(this.x - this.radius * Math.cos(vertAngle * i + radians), this.y - this.radius * Math.sin(vertAngle * i + radians));
      }
      ctx.closePath();
      ctx.stroke();
    }
  }

  class Bullet {
    constructor(angle) {
      this.visible = true;
      this.x = ship.noseX;
      this.y = ship.noseY;
      this.angle = angle;
      this.height = 4;
      this.width = 4;
      this.speed = 5;
      this.velX = 0;
      this.velY = 0;
    }
    Update() {
      var radians = this.angle / Math.PI * 180;
      this.x -= Math.cos(radians) * this.speed;
      this.y -= Math.sin(radians) * this.speed;
    }
    Draw() {
      ctx.fillStyle = 'white';
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }

  function CircleCollision(p1x, p1y, r1, p2x, p2y, r2) {
    let radiusSum;
    let xDiff;
    let yDiff;
    radiusSum = r1 + r2;
    xDiff = p1x - p2x;
    yDiff = p1y - p2y;
    if (radiusSum > Math.sqrt((xDiff * xDiff) + (yDiff * yDiff))) {
      return true;
    } else {
      return false;
    }
  }

  function DrawLifeShip() {
    let startX = 300;
    let startY = 10;
    let points = [
      [9, 9],
      [-9, 9]
    ];
    ctx.strokeStyle = "white";
    for (let i = 0; i < lives; i++) {
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      for (let j = 0; j < points.length; j++) {
        ctx.lineTo(startX + points[j][0], startY + points[j][1]);
      }
      ctx.closePath();
      ctx.stroke();
      startX -= 30;
    }
  }

  function Render() {
    ship.movingForward = (keys[87]);
    // D key
    if (keys[68]) {
      ship.Rotate(1);
    }
    // A key
    if (keys[65]) {
      ship.Rotate(-1);
    }
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    ctx.fillText('SCORE: ' + score.toString(), 20, 35);
    if (lives <= 0) {
      ship.visible = false;
      ctx.fillStyle = 'white';
      ctx.font = '30px Arial';
      ctx.fillText('GAME OVER', canvasWidth / 2 - 50, canvasHeight / 2);
      ctx.fillText('Refresh Page to Reset', canvasWidth / 2 - 120, canvasHeight / 2 + 50);
    }
    DrawLifeShip();

    if (asteroids.length !== 0) {
      for (let k = 0; k < asteroids.length; k++) {
        if (CircleCollision(ship.x, ship.y, 11, asteroids[k].x, asteroids[k].y, asteroids[k].collisionRadius)) {
          ship.x = canvasWidth / 2;
          ship.y = canvasHeight / 2;
          ship.velX = 0;
          ship.velY = 0;
          lives -= 1;
        }
      }
    }
    if (asteroids.length !== 0 && bullets.length !== 0) {
      loop1: for (let l = 0; l < asteroids.length; l++) {
        for (let m = 0; m < bullets.length; m++) {
          if (CircleCollision(bullets[m].x, bullets[m].y, 3, asteroids[l].x, asteroids[l].y, asteroids[l].collisionRadius)) {
            if (asteroids[l].level === 1) {
              asteroids.push(new Asteroid(asteroids[l].x - 5, asteroids[l].y - 5, 25, 2, 22));
              asteroids.push(new Asteroid(asteroids[l].x + 5, asteroids[l].y + 5, 25, 2, 22));
            } else if (asteroids[l].level === 2) {
              asteroids.push(new Asteroid(asteroids[l].x - 5, asteroids[l].y - 5, 15, 3, 12));
              asteroids.push(new Asteroid(asteroids[l].x + 5, asteroids[l].y + 5, 15, 3, 12));
            }
            asteroids.splice(l, 1);
            bullets.splice(m, 1);
            score += 20;
            break loop1;
          };
        }
      }
    }

    if (ship.visible) {
      ship.Update();
      ship.Draw();
    }

    if (bullets.length !== 0) {
      for (let i = 0; i < bullets.length; i++) {
        bullets[i].Update();
        bullets[i].Draw();
      }
    }
    if (asteroids.length !== 0) {
      for (let j = 0; j < asteroids.length; j++) {
        asteroids[j].Update();
        asteroids[j].Draw(j);
      }
    }
    requestAnimationFrame(Render);
  }

  console.log("setupcanvas")
  canvas = document.getElementById('asteroid');
  ctx = canvas.getContext('2d');
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  // fullstyle not working?
  // ctx.fillStyle = "#333333";
  // ctx.fillRect(0, 0, canvas.width, canvas.height);

  ship = new Ship();

  for (let i = 0; i < 8; i++) {
    asteroids.push(new Asteroid());

  }

  document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
  });
  document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
    if (e.keyCode === 32) {
      bullets.push(new Bullet(ship.angle));
    }
  });
  Render();

})


</script>
