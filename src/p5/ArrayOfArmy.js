export default function (p) {
  const col = 11;
  const row = 11;
  const radius = 20;
  var count_missing = [
    p.floor(p.random(col * row)),
    p.floor(p.random(col * row)),
    p.floor(p.random(col * row)),
    p.floor(p.random(col * row)),
    p.floor(p.random(col * row)),
    p.floor(p.random(col * row)),
    p.floor(p.random(col * row)),
    p.floor(p.random(col * row)),
    p.floor(p.random(col * row)),
  ];

  let Rounds = [];
  var count_missing_current = 0;
  p.setup = () => {
    p.createCanvas(600, 600);
    p.background(160);

    p.stroke(0, 0);
    p.translate(50, 50);
    count_missing = p.sort(count_missing, count_missing.length);
    console.log(count_missing);
    for (let i = 0; i < col; i++) {
      for (let j = 0; j < row; j++) {
        // console.log(i * j);

        p.push();
        if (Rounds.length == count_missing[count_missing_current]) {
          p.fill(0, 0);
          count_missing_current += 1;
          console.log(count_missing_current);
          console.log("rounds", Rounds.length);
        }
        Rounds.push(p.ellipse(50 * j, 50 * i, radius, radius));
        p.pop();
      }
    }

    console.log(Rounds.length);
  };

  p.draw = () => {
    // p.translate(p.width / 2, p.height / 2);
  };
}
