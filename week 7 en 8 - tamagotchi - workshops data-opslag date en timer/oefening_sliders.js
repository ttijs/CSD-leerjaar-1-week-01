let r;
let g;
let b;



function setup() {
  createCanvas(400,400);

  r = createSlider(0, 255, 0);
  g = createSlider(0, 255, 0);
  b = createSlider(0, 255, 0);
}

function draw() {
  background(r.value(), g.value(), b.value());

}