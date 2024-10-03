// bij workshopje button maken
let geklikt = false;

function setup() {
    createCanvas(800, 600);

    // bij workshopje button maken
    let button = createButton("klik me!");
    button.position(200, 100);
    button.mousePressed(plaatje);
}

// bij workshopje button maken
function plaatje() {
    //    console.log("is geklikt")
    geklikt = !geklikt;
}

function draw() {
    background(220);

    // for (let i = 0; i < 5; i++) {
    //   for (let j = 0; j < 5; j++) {
    //     // fill(i * 50);
    //     fill(j * 50);
    //     ellipse(i * 50 + 25, j * 50 + 25, 40, 40);
    //   }
    // }

    // simpele 1-dimensionale array
    let kleuren = ["red", "blue", "yellow", "green", "black"];
    // hardcoded een item weergeven
    // console.log(kleuren[2])

    // automatisch alle items weergeven
    // console.log(kleuren.length)
    for (let i = 0; i < kleuren.length; i++) {
        // console.log(kleuren[i]);
    }

    // simpele 2-dimensionale array
    let dieren = [
        ["Goudvis", "zalm", "clownvis", "Haai", "Tonijn"],
        ["Adelaar", "Papegaai", "Mees", "Kolibrie", "Uil"],
        ["Leeuw", "Olifant", "Walvis", "Vleermuis", "Giraffe"],
        ["Bijl", "VLinder", "Mier", "Libelle", "Kever"],
    ];

    textSize(30);
    let offset = 50;
    let yDiff = 50;

    // hardcode items weergeven
    // text(dieren[0][0], 50, offset);
    // text(dieren[0][3], 50, (offset += yDiff));

    // automatisch alle items weergeven
    for (let y = 0; y < dieren.length; y++) {
        for (let x = 0; x < dieren[y].length; x++) {
            //text(dieren[y][x], 150 * x, 50 * y + 100);
            //rect(50 * x, 50 * y, 50, 50);
        }
    }

    // y = 50
    // let gamePersonages = ["Mario", "Peach", "Luigi", "Toad", "Donkey Kong"];
    // for (let i = 0; i < gamePersonages.length; i++) {
    //   text(gamePersonages[i], 50, y = y+ 50);
    // }

    let arrMatrixColors = [
        [0, 1, 2, 0],
        [1, 2, 3, 1],
        [3, 2, 0, 0],
        [3, 2, 0, 0],
    ];

    let arrMatrixColors2 = [
        [2, 1, 1, 2],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [2, 1, 1, 2],
    ];

    if (geklikt == false) {
        for (let i = 0; i < arrMatrixColors.length; i++) {
            for (let j = 0; j < arrMatrixColors[i].length; j++) {
                fill("black");
                textSize(20);
                //text(arrMatrixColors[i][j], j * 25 + 400, i * 25 + 200);
                // nog mooier is met array met kleuren. Zie bestand test.js
                if (arrMatrixColors[i][j] == 0) {
                    fill("red");
                } else if (arrMatrixColors[i][j] == 1) {
                    fill("blue");
                } else if (arrMatrixColors[i][j] == 2) {
                    fill("yellow");
                } else {
                    fill("green");
                }
                // let op j en i
                rect(j * 25 + 400, i * 25 + 25, 25, 25);
            }
        }
    } else {
        for (let i = 0; i < arrMatrixColors2.length; i++) {
            for (let j = 0; j < arrMatrixColors2[i].length; j++) {
                fill("black");
                textSize(20);
                //text(arrMatrixColors2[i][j], j * 25 + 400, i * 25 + 200);
                // nog mooier is met array met kleuren. Zie bestand test.js
                if (arrMatrixColors2[i][j] == 0) {
                    fill("red");
                } else if (arrMatrixColors2[i][j] == 1) {
                    fill("blue");
                } else if (arrMatrixColors2[i][j] == 2) {
                    fill("yellow");
                } else {
                    fill("green");
                }
                // let op j en i
                rect(j * 25 + 400, i * 25 + 25, 25, 25);
            }
        }
    }
}

let gamePersonages = ["Mario", "Peach", "Luigi", "Toad", "Donkey Kong"];
//console.log(gamePersonages);
gamePersonages[3] = "Yoshi";
//console.log(gamePersonages);   // gamePersonages = ["Mario", "Peach", "Luigi", "Yoshi", "Donkey Kong"];

let arrPersonen = [];
arrPersonen[0] = [];
arrPersonen[0][0] = "Jeffrey";

arrPersonen[0].push("Jaedyn");
arrPersonen[0].push("Dalysha");
arrPersonen[1] = [];
arrPersonen[1].push("Zacky");
arrPersonen[1].push("Lisa");
//console.log(arrPersonen);
