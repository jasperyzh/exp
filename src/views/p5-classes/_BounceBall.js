class BounceBall {
  constructor(p5, radius = 50, speed = 3) {
    this.p5 = p5;
    this.rad = radius; // Width of the shape
    let xpos, ypos; // Starting position of shape

    this.xspeed = speed; // Speed of the shape
    this.yspeed = speed / 1.13; // Speed of the shape

    this.xdirection = 1; // Left or Right
    this.ydirection = 1; // Top to Bottom
    p5.noFill();
    p5.stroke('#fff');
    p5.strokeWeight(7)
    p5.ellipseMode(p5.RADIUS);
    // Set the starting position of the shape
    this.xpos = p5.width / 2;
    this.ypos = p5.height / 2;
  }
  draw() {
    let p5 = this.p5;

    // Update the position of the shape
    this.xpos = this.xpos + this.xspeed * this.xdirection;
    this.ypos = this.ypos + this.yspeed * this.ydirection;

    // Test to see if the shape exceeds the boundaries of the screen
    // If it does, reverse its direction by multiplying by -1
    if (this.xpos > p5.width - this.rad || this.xpos < this.rad) {
      this.xdirection *= -1;
    }
    if (this.ypos > p5.height - this.rad || this.ypos < this.rad) {
      this.ydirection *= -1;
    }

    // Draw the shape
    p5.ellipse(this.xpos, this.ypos, this.rad, this.rad);
  }

  getX() {
    return this.xpos;
  }
  getY() {
    return this.ypos;
  }
}

export default BounceBall;
