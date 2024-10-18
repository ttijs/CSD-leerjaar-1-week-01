let x = 0;
let y = 0;
let duration = 6;

function setup() {
    createCanvas(400, 400);
    frameRate(60);
}

function draw() {
    background("black");
    x += (deltaTime / 1000) * (width/duration);
    y += (deltaTime / 1000) * (height/duration);
    circle(x, y, 30); 
}

