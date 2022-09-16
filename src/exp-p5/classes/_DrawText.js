class DrawText {
  constructor(p5, font, fontsize) {

    // Set text characteristics
    // p5.textFont(font);
    p5.textSize(fontsize);
    p5.textAlign(p5.CENTER, p5.CENTER);
  }
  draw(p5) {
    p5.background(160);

    // Set the gap between letters and the left and top margin
    let gap = 52;
    let margin = 10;
    p5.translate(margin * 4, margin * 4);

    // Set the counter to start at the character you want
    // in this case 35, which is the # symbol
    let counter = 35;

    // Loop as long as there is space on the canvas
    for (let y = 0; y < p5.height - gap; y += gap) {
      for (let x = 0; x < p5.width - gap; x += gap) {
        // Use the counter to retrieve individual letters by their Unicode number
        let letter = p5.char(counter);

        // Add different color to the vowels and other characters
        if (letter === "A" || letter === "E" || letter === "I" || letter === "O" || letter === "U") {
          p5.fill("#ed225d");
        } else {
          p5.fill(255);
        }

        // Draw the letter to the screen
        p5.text(letter, x, y);

        // Increment the counter
        counter++;
      }
    }
  }
}
export default DrawText
/* 
let drawText,
font,
fontsize = 32;

p5.preload = function () {
font = p5.loadFont("../fonts/SourceSansPro-Regular.ttf");
};
p5.setup = function () {
p5.createCanvas(1024, 768);

// drawText
drawText = new DrawText(p5, font, fontsize);
};

p5.draw = function () {
// drawText
drawText.draw(p5);
}; */