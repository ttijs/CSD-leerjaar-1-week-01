let cell1 = 0;
let cell2 = 0;

// let cellen = [
//   [0, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0]
// ]

// let player1 = "red";
// let player2 = "blue";

let playerPlaying = 1;

function setup() {
    createCanvas(1000, 1000);
}

function draw() {
    background(220);

    strokeWeight(10);
    line(400, 100, 400, 700);
    line(600, 100, 600, 700);
    line(200, 300, 800, 300);
    line(200, 500, 800, 500);

    // for (let i = 0; i < 3; i++) {
    //   for (let j = 0; j < 3; j++) {
    //     if (cellen[i][j] == 1) {
    //       fill("red");
    //     } else if (cellen[i][j] == 2) {
    //       fill("blue");
    //     } else {
    //       fill("white");
    //     }
    //     rect(200 + j * 200, 100 + i * 200, 200, 200);
    //   }
    // }

    if (cell1 != 0) {
        if (cell1 == 1) {
            fill("red");
        } else {
            fill("blue");
        }
        rect(200, 100, 200, 200);
    }

    if (cell5 != 0) {
        if (cell5 == 1) {
            fill("red");
        } else {
            fill("blue");
        }
        //rect(400, 300, 200, 200);
        circle(400, 300, 100);
        // line(400, 300, 600, 500);
        // line(400, 500, 600, 300);
    }
}

function mousePressed() {
    // console.log("geklikt op de x-coordinaat: " + mouseX);
    // console.log("geklikt op de y-coordinaat: " + mouseY);

    if (mouseX > 200 && mouseX < 400 && mouseY > 100 && mouseY < 300) {
        console.log("geklkikoltk olp cel 1");
        cell1 = playerPlaying;
    }
    if (
        mouseX > 400 &&
        mouseX < 600 &&
        mouseY > 300 &&
        mouseY < 500 &&
        cell5 == 0
    ) {
        //    console.log("geklkikoltk olp cel 1")
        cell5 = playerPlaying;
    }

    if (playerPlaying == 1) {
        playerPlaying = 2;
    } else {
        playerPlaying = 1;
    }

    //console.log("de speler die aan de beurt is : " + playerPlaying);
}
