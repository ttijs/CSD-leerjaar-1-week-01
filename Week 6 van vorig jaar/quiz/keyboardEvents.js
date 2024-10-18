let groteRechthoekX, groteRechthoekY;
let groteRechthoekBreedte, groteRechthoekHoogte;
let kleineRechthoekX, kleineRechthoekY;
let kleineRechthoekBreedte, kleineRechthoekHoogte;
let kleineRechthoekKleur;
let botsing = false;

function setup() {
  createCanvas(400, 400);
  groteRechthoekX = 50;
  groteRechthoekY = 50;
  groteRechthoekBreedte = 50;
  groteRechthoekHoogte = 50;
  
  kleineRechthoekX = 200;
  kleineRechthoekY = 200;
  kleineRechthoekBreedte = 30;
  kleineRechthoekHoogte = 30;
  kleineRechthoekKleur = color(255);
}

function draw() {
  background(220);
  
  if (keyIsDown(LEFT_ARROW)) {
    groteRechthoekX -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    groteRechthoekX += 5;
  }
  if (keyIsDown(UP_ARROW)) {
    groteRechthoekY -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    groteRechthoekY += 5;
  }
  
  fill(kleineRechthoekKleur);
  rect(kleineRechthoekX, kleineRechthoekY, kleineRechthoekBreedte, kleineRechthoekHoogte);
  
  if (
    groteRechthoekX + groteRechthoekBreedte > kleineRechthoekX &&
    groteRechthoekX < kleineRechthoekX + kleineRechthoekBreedte &&
    groteRechthoekY + groteRechthoekHoogte > kleineRechthoekY &&
    groteRechthoekY < kleineRechthoekY + kleineRechthoekHoogte
  ) {
    botsing = true;
  } else {
    botsing = false;
  }
  
  if (botsing) {
    kleineRechthoekKleur = color(255, 0, 0); // Rood
  } else {
    kleineRechthoekKleur = color(255); // Wit
  }
  
  fill(255);
  rect(groteRechthoekX, groteRechthoekY, groteRechthoekBreedte, groteRechthoekHoogte);
}
