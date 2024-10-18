let rectX = 100;
let rectY = 100;
let rectWidth = 100;
let rectHeight = 40;
let isDragging = false;
let offsetX, offsetY;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(220);

  if (isDragging) {
    fill(0, 0, 255); // Blauwe kleur als de rechthoek wordt versleept
  } else {
    fill(255, 0, 0);
  }

  rect(rectX, rectY, rectWidth, rectHeight);
}

function mousePressed() {
  // Controleer of de muis zich binnen de rechthoek bevindt
  if (
    mouseX >= rectX - rectWidth / 2 &&
    mouseX <= rectX + rectWidth / 2 &&
    mouseY >= rectY - rectHeight / 2 &&
    mouseY <= rectY + rectHeight / 2
  ) {
    isDragging = true;
    offsetX = mouseX - rectX;
    offsetY = mouseY - rectY;
  }
}

function mouseReleased() {
  isDragging = false;
}

function mouseDragged() {
  if (isDragging) {
    rectX = mouseX - offsetX;
    rectY = mouseY - offsetY;
  }
}
