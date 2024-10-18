let rect1X = 50;
let rect1Y = 50;
let rect1W = 100;
let rect1H = 100;
let rect1Color;
let rect1Selected = false;

let rect2X = 200;
let rect2Y = 50;
let rect2W = 100;
let rect2H = 100;
let rect2Color;
let rect2Selected = false;

let rect3X = 50;
let rect3Y = 200;
let rect3W = 100;
let rect3H = 100;
let rect3Color;
let rect3Selected = false;

let rect4X = 200;
let rect4Y = 200;
let rect4W = 100;
let rect4H = 100;
let rect4Color;
let rect4Selected = false;

function setup() {
  createCanvas(400, 400);
  rect1Color = color(255, 0, 0);
  rect2Color = color(0, 255, 0);
  rect3Color = color(0, 0, 255);
  rect4Color = color(255, 255, 0);
}

function draw() {
  background(220);

  // Rechthoek 1
  fill(rect1Selected ? color(255) : rect1Color);
  rect(rect1X, rect1Y, rect1W, rect1H);

  // Rechthoek 2
  fill(rect2Selected ? color(255) : rect2Color);
  rect(rect2X, rect2Y, rect2W, rect2H);

  // Rechthoek 3
  fill(rect3Selected ? color(255) : rect3Color);
  rect(rect3X, rect3Y, rect3W, rect3H);

  // Rechthoek 4
  fill(rect4Selected ? color(255) : rect4Color);
  rect(rect4X, rect4Y, rect4W, rect4H);
}

function isMouseOver(x, y, w, h) {
  return mouseX >= x && mouseX <= x + w && mouseY >= y && mouseY <= y + h;
}

function mousePressed() {
  // Controleer welke rechthoek is geselecteerd en verander de selectie-status
  rect1Selected = isMouseOver(rect1X, rect1Y, rect1W, rect1H);
  rect2Selected = isMouseOver(rect2X, rect2Y, rect2W, rect2H);
  rect3Selected = isMouseOver(rect3X, rect3Y, rect3W, rect3H);
  rect4Selected = isMouseOver(rect4X, rect4Y, rect4W, rect4H);
}
