// Using functions to modularize code
// Dan Shiffman
// https://vimeo.com/channels/learningp5js/139587733

var ball = {
    x: 300,
    y: 200,
    xSpeed: 3,
    ySpeed: 3,
};

var countBounce = 0;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);

    appearance();
    move();
    bounce();

    //draws our circle
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(ball.x, ball.y, 24, 24);

    //makes our circle move
    ball.x = ball.x + ball.xSpeed;
    ball.y = ball.y + ball.ySpeed;

    //makes our circle bounce
    if (ball.x > 600 || ball.x < 0) {
        ball.xSpeed = ball.xSpeed * -1;
        countBounce++;
        print("countBounce is " + countBounce);
    }
    if (ball.y > 400 || ball.y < 0) {
        ball.ySpeed = ball.ySpeed * -1;
        countBounce++;
        print("countBounce is " + countBounce);
    }

    function appearance() {
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(ball.x, ball.y, 24, 24);
    }

    function move() {
        ball.x = ball.x + ball.xSpeed;
        ball.y = ball.y + ball.ySpeed;
    }

    function bounce() {
        if (ball.x > 600 || ball.x < 0) {
            ball.xSpeed = ball.xSpeed;
        }

        if (ball.y > 400 || ball.y < 0) {
            ball.ySpeed = ball.ySpeed * -1;
        }
    }
}
