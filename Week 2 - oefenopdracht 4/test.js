function setup() {
    createCanvas(1600, 1200);
}
let x = 0;
let speed = 2;

function draw() {
    background(0, 200, 280);
    noStroke();
    ellipse(x, height / 2, 50, 50);

    x += speed;

    // dit is de wolk
    fill(10, 200, 10);
    rect(-10, 1100, 2000, 200);
    fill(10, 180, 10);
    rect(-10, 800, 2000, 100);
    push();
    stroke("white");
    strokeWeight(10);
    fill("black");
    rect(-10, 900, 2000, 200);
    pop();
    fill("white");
    rect(80, 990, 20, 10);
    fill("white");
    rect(180, 990, 20, 10);
    fill("white");
    rect(280, 990, 20, 10);
    fill("white");
    rect(380, 990, 20, 10);
    fill("white");
    rect(480, 990, 20, 10);

    // dit is de zon
    fill("white");
    rect(580, 990, 20, 10);
    fill("white");
    rect(680, 990, 20, 10);
    fill("white");
    rect(780, 990, 20, 10);
    fill("white");
    rect(880, 990, 20, 10);
    fill("white");
    rect(980, 990, 20, 10);
    fill("white");
    rect(1080, 990, 20, 10);
    fill("white");
    rect(1180, 990, 20, 10);
    fill("white");
    rect(1280, 990, 20, 10);
    fill("white");
    rect(1380, 990, 20, 10);
    fill("white");
    rect(1480, 990, 20, 10);
    fill("white");
    rect(1580, 990, 20, 10);

    push();

    rect(first, 30, 80, 40);

    pop();

    push();
    fill("gray");
    circle(first, 70, 20);
    circle(first + 80, 70, 20);
    pop();

    // zorg dat de zon weer links begint
    if (x > width) {
        x = 0;
    }
}
