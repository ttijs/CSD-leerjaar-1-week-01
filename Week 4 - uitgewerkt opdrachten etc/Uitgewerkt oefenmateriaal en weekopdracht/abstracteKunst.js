let shapes = [];
let rotation = 0;

function setup() {
  var canvas = createCanvas(800, 800);
  canvas.position(20, 20);
}

function draw() {
  background(255);

  for (let i = 0; i < shapes.length; i++) {
    strokeWeight(shapes[i].lineWidth);
    stroke(shapes[i].r * 0.5, shapes[i].g * 0.5, shapes[i].b * 0.5);
    fill(shapes[i].r, shapes[i].g, shapes[i].b);
    push();
    rotate(shapes[i].r);
    if (shapes[i].type === 0) {
      rect(shapes[i].x, shapes[i].y, shapes[i].w, shapes[i].h);
    } else if (shapes[i].type === 1) {
      circle(shapes[i].x, shapes[i].h, shapes[i].w);
    }
    pop();
  }
  fill(0, 0, 0, 0);
  stroke(0, 0, 0);
  strokeWeight(10);
  rect(5, 5, width - 10, height - 10);
}

function keyPressed() {
  if (keyCode === BACKSPACE) {
    shapes = [];
    let amount = random(1, 50);

    for (let i = 0; i < amount; i++) {
      let shape = {
        type: round(random(0, 1)),
        r: random(0, 255),
        g: random(0, 255),
        b: random(0, 255),
        x: random(0, width),
        y: random(0, height),
        w: random(10, width),
        h: random(10, height),
        r: random(0, 360),
        lineWidth: 10,
      };
      shapes.push(shape);
    }
  }
}
