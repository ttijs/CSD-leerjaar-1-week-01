let x = 100;
let greeting = "Hello world";
let a = 20;
let b = 10;


let optellen = a + b;
let aftrekken = a - b;
let vermenigvuldigen = a * b; 
let delen = a / b;

let rng = 0;

let y = 80;





function setup() {
  createCanvas(400, 400);
  rng = random(0, 1000);









}
function draw() {
  background(220);

  //y = 80;
  text(x, 20, 20);
  text(greeting, 20, 60);
  text("optellen:" + optellen, 20, y);
  y += 20;
  text("aftrekken:" + aftrekken, 20, y);
  text("vermenigvuldigen:" + vermenigvuldigen, 20, y += 20);
  text("delen:" + delen, 20, y += 20);
  text("rng: " + rng, 20, y += 20);
  

}

function mouseClicked() { 
  //console.log("clicked");
  rng = random(0, 1000);
}