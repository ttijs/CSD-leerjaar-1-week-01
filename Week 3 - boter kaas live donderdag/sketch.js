let cell1 = 0;
let cell2 = 0;
let cell3 = 0;
let cell4 = 0;

let boxes = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

let offsetx = 200;
let offsety = 100;


let playerNowPlaying = 1;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(220);


    // if (cell1 == 1) {
    //     fill("red");
    // } else if (cell1 == 2) {
    //     fill("blue");
    // } else {
    //     fill("white");
    // }
    // rect(200, 100, 100, 100);

    // fill("white");

    // if (cell2 == 1) {
    //     fill("red");
    // } else if (cell2 == 2) {
    //     fill("blue");
    // } else {
    //     fill("white");
    // }
    // rect(300, 100, 100, 100);

    // if (cell3 == 1) {
    //     fill("red");
    // } else if (cell3 == 2) {
    //     fill("blue");
    // } else {
    //     fill("white");
    // }
    // rect(400, 100, 100, 100);

    // if (cell4 == 1) {
    //     fill("red");
    // } else if (cell4 == 2) {
    //     fill("blue");
    // } else {
    //     fill("white");
    // }
    // rect(200, 200, 100, 100);

    // fill("white");

    // rect(300, 200, 100, 100);
    // rect(400, 200, 100, 100);

    // rect(200, 300, 100, 100);
    // rect(300, 300, 100, 100);
    // rect(400, 300, 100, 100);

    for (let i = 0; i < boxes.length; i++) {
        for (let j = 0; j < boxes[i].length; j++) {
            if (boxes[i][j] == 1) {
                fill("red");
            } else if (boxes[i][j] == 2) {
                fill("blue");
            } else {
                fill("white");
            }
            rect(j * 100 + offsetx, i * 100 + offsety, 100, 100);
        }
    }

}

function mouseClicked() {
    // console.log("clicked op het  x-coordinaat: " + mouseX);
    // console.log("clicked op het  y-coordinaat: " + mouseY);

    // if (
    //     mouseX > 200 &&
    //     mouseX < 300 &&
    //     mouseY > 100 &&
    //     mouseY < 200 &&
    //     cell1 == 0
    // ) {
    //     console.log("geklkikoltk op cel 1");
    //     cell1 = playerNowPlaying;
    // }
    // if (
    //     mouseX > 300 &&
    //     mouseX < 400 &&
    //     mouseY > 100 &&
    //     mouseY < 200 &&
    //     cell2 == 0
    // ) {
    //     console.log("geklkikoltk op cel 2");
    //     cell2 = playerNowPlaying;
    // }
    // if (
    //     mouseX > 400 &&
    //     mouseX < 500 &&
    //     mouseY > 100 &&
    //     mouseY < 200 &&
    //     cell3 == 0
    // ) {
    //     console.log("geklkikoltk op cel 3");
    //     cell3 = playerNowPlaying;
    // }
    // if (
    //     mouseX > 200 &&
    //     mouseX < 300 &&
    //     mouseY > 200 &&
    //     mouseY < 300 &&
    //     cell4 == 0
    // ) {
    //     console.log("gek.kkolk op 4");
    //     cell4 = playerNowPlaying;
    // }

    // enz enz enz
    // sneller

    for (let i = 0; i < boxes.length; i++) {
        for (let j = 0; j < boxes[i].length; j++) {
            //boxes[i][j] = playerNowPlaying;
            if (mouseX > j * 100 + offsetx && mouseX < j * 100 + offsetx + 100 && mouseY > i * 100 + offsety && mouseY < i * 100 + offsety + 100 && boxes[i][j] == 0) {
                boxes[i][j] = playerNowPlaying;

                if (playerNowPlaying == 1) {
                    playerNowPlaying = 2;
                } else {
                    playerNowPlaying = 1;
                }

            }
        }
    }

    console.log(boxes);



}

if (1 == 1) console.log("het is 1");
