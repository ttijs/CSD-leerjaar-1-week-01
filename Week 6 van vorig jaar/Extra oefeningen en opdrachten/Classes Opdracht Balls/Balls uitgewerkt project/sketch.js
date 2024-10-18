let balls = [];
let score = 0;

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 100; i++) {
    let randomColor = color(random(0, 255), random(0, 255), random(0, 255));
    balls.push(new Ball(random(0, 400), random(0, 400), random(5, 30), random(20, 100), randomColor));
  }

  for (let i = 0; i < balls.length; i++) {
    balls[i].setRandomDirection();
  }
}

function draw() {
  background(30, 40, 80);

  fill("white");
  textSize(100);
  textAlign(CENTER, CENTER);
  text(score, width / 2, height / 2);

  for (let i = 0; i < balls.length; i++) {
    balls[i].update();
    balls[i].display();
  }
}

function mousePressed() {
  let hit = false;

  for (let i = 0; i < balls.length; i++) {
    if (balls[i].onClick(mouseX, mouseY)) {
      score++;
      hit = true;
      break;
    }
  }

  if (!hit) {
    score--;
  }
}



/*










let ball;

function setup() {
  createCanvas(400, 400);
  ball = new Ball(200,200,30);
}

function draw() {
  background(30,40,80);

  ball.update();
  ball.display();

  console.log(ball.speed);
}



*/