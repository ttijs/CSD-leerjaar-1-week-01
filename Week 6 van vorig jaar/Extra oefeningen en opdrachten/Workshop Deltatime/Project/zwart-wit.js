let interval = 2;
let timer = 0;
let colors = ["black", "white"];
let colorIndex = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  timer += deltaTime / 1000;
  if (timer >= interval){
    colorIndex++;
    if (colorIndex == colors.length){
      colorIndex = 0;
    }
    timer = 0;
  }

  fill(colors[colorIndex]);
  rect(250,50,100,100);

  fill("black");
  text("timer: " + round(timer,2), 10,15);
  text("interval: " + interval, 10,30);
  text("conditie: " + round(timer,2) + " >= " + interval,10,45);
}

