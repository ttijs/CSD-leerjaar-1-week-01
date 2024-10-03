function setup() {
  createCanvas(600, 500);
}

let xpos = 0; 
let xpos2 = 0;
function draw() {
  background(0, 30, 220);
  drawCircle(40, 200, 300); 
  drawCircle(40, 300, 200); 
  drawCircle(40, 50, 100); 
  drawCircle(40, 100, 50); 
  drawCircle(40, 10, 20); 

}

function drawCircle(xpos, ypos, straal) {
  circle(xpos, ypos, straal);
}

