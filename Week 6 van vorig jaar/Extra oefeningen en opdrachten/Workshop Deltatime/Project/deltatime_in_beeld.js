let x = 0;
let x2 = 0;
let x3 = 0;
let x4 = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(1);
}

function draw() {
  background(220);
  rect(x, 20, 80, 80);
  text("x += deltaTime;", 10, 10);
  x += deltaTime;

  text("x += deltaTime / 1000;", 10, 110);
  x2 += deltaTime / 1000;
  rect(x2, 115, 80, 80);

  text("x += (deltaTime / 1000) * 100;", 10, 210);
  x3 += (deltaTime / 1000) * 100;
  rect(x3, 215, 80, 80);

  text("x += (deltaTime / 1000) * (width/6);", 10, 310);
  x4 += (deltaTime / 1000) * (width/6);
  rect(x4, 315, 80,80);

}


