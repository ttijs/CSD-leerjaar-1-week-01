let rectX = 100;
let rectY = 100;
let rectWidth = 100;
let rectHeight = 40;
let isMouseClicked = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  if (isMouseClicked) {
    fill(255, 0, 0); // Verander de kleur als de muis erover gaat
  } else {
    fill(0, 255, 0);
  }

  // Teken de rechthoek
  rect(rectX, rectY, rectWidth, rectHeight);
}

function mousePressed() {
  if (
    mouseX >= rectX &&
    mouseX <= rectX + rectWidth &&
    mouseY >= rectY &&
    mouseY <= rectY + rectHeight
  ) {
    isMouseClicked = true;
  } else {
    isMouseClicked = false;
  }
}
