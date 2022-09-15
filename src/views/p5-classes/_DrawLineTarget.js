class DrawLineTarget {
  constructor(p5) {
    this.p5 = p5;

    this.tick = 0;

    this.drawLineGrid();
  }
  getAngleToMouse(x, y, targetX, targetY) {
    let p5 = this.p5;
    let dx = targetX - x;
    let dy = targetY - y;
    let angle1 = p5.atan2(dy, dx);
    return angle1;
  }
  drawLineGrid(x = 0, y = 0, length = 40, strokeWeight = 3, strokeColor = "red", targetX = 0, targetY = 0) {
    let p5 = this.p5;
    let posX = x;
    let posY = y;
    p5.push();
    p5.colorMode(p5.HSB, 100);
    // get distance
    let d = p5.int(p5.dist(posX, posY, targetX, targetY));
    p5.stroke(d / 9, 100, 100);

    p5.strokeWeight(d / 30);
    // p5.stroke(strokeColor);
    p5.translate(posX, posY);
    p5.rotate(this.getAngleToMouse(posX, posY, targetX, targetY));
    let lineLength = length / 2;
    p5.line(-lineLength, 0, lineLength, 0);
    p5.pop();
  }
}
export default DrawLineTarget;
