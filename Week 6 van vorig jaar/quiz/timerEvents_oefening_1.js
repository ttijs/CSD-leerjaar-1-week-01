let vormX, vormY;
let vormBreedte, vormHoogte;
let huidigeKleur, nieuweKleur;


function setup() {
  createCanvas(400, 400);
  vormX = width / 2;
  vormY = height / 2;
  vormBreedte = 100;
  vormHoogte = 100;
  huidigeKleur = color(255, 0, 0); // Begin met een rode kleur
  nieuweKleur = huidigeKleur;

  // Start het interval om de kleur van de vorm elke 2 seconden te veranderen
 setInterval(veranderKleur, 2000);
}

function draw() {
  background(220);
  fill(huidigeKleur);
  rect(vormX, vormY, vormBreedte, vormHoogte);
}

function veranderKleur() {

  nieuweKleur = color(random(255), random(255), random(255));
  huidigeKleur = nieuweKleur;

}
