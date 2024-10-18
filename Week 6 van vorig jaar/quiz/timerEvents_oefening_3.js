let tekst = "Dit is de eerste tekst";

function setup() {
  createCanvas(600, 300);
  textSize(16);
  textAlign(CENTER, CENTER);

  // Start de timer om de tekst te veranderen na 2 seconden
  setTimeout(veranderTekst, 2000);
}

function draw() {
  background(220);
  fill(0);
  text(tekst, width / 2, height / 2);
}

function veranderTekst() {
  tekst = "Dit is de nieuwe tekst na timeout!";
}
