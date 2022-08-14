export default function (p) {
  let time = {};

  p.setup = () => {
    p.createCanvas(600, 600);
    p.angleMode(p.DEGREES);
  };

  p.draw = () => {
    p.background(0);
    p.translate(p.width / 2, p.height / 2);
    p.rotate(-90);

    let hr = p.hour();
    let mn = p.minute();
    let sc = p.second();

    time = {
      hr: zeroPadding(hr, 2),
      min: zeroPadding(mn, 2),
      sec: zeroPadding(sc, 2),
    };

    p.strokeWeight(8);
    p.stroke(255, 100, 150);
    p.noFill();
    let secondAngle = p.map(sc, 0, 60, 0, 360);
    //arc(0, 0, 300, 300, 0, secondAngle);

    p.stroke(150, 100, 255);
    let minuteAngle = p.map(mn, 0, 60, 0, 360);
    //arc(0, 0, 280, 280, 0, minuteAngle);

    p.stroke(150, 255, 100);
    let hourAngle = p.map(hr % 12, 0, 12, 0, 360);
    //arc(0, 0, 260, 260, 0, hourAngle);
    p.push();
    p.rotate(secondAngle);
    p.stroke(255, 255, 255, 200);
    p.line(0, 0, 280, 0);
    p.pop();

    p.push();
    p.rotate(minuteAngle);
    p.stroke(255, 255, 255);
    p.line(0, 0, 180, 0);
    p.pop();

    p.push();
    p.strokeWeight(12);
    p.rotate(hourAngle);
    p.stroke(255, 255, 255);
    p.line(0, 0, 100, 0);
    p.pop();

    p.stroke(255);
    p.point(0, 0);
  };
  function zeroPadding(num, digit) {
    var zero = "";
    for (var i = 0; i < digit; i++) {
      zero += "0";
    }
    return (zero + num).slice(-digit);
  }
}
