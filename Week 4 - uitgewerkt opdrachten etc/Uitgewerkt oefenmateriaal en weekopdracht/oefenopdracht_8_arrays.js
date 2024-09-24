let randomR = [];
let randomG = [];
let randomB = [];
let aantal = 5;

let randomGetallen = [];

function setup() {
    createCanvas(380, 350);

    for (let i = 0; i < aantal; i++) {
        randomR.push(random(0, 255));
        randomG.push(random(0, 255));
        randomB.push(random(0, 255));
    }

    for(let i = 0; i < 12; i++){
        randomGetallen.push(round(random(0,100)));
    }
}

function draw() {
    background(220);
    textSize(12);
    textStyle(BOLD);

    fill("black");
    text("1. ", 20, 15);
    let colors = ["red", "green", "blue", "purple", "yellow"];
    for (let i = 0; i < colors.length; i++) {
        fill(colors[i]);
        text(colors[i], 40, 15 + i * 15);
    }

    fill("black");
    text("2. ", 20, 100);
    colors.push("red");
    colors.shift();
    for (let i = 0; i < colors.length; i++) {
        fill(colors[i]);
        text(colors[i], 40, 100 + i * 15);
    }

    fill("black");
    text("3. ", 20, 190);
    colors.splice(1, 2);
    for (let i = 0; i < colors.length; i++) {
        fill(colors[i]);
        text(colors[i], 40, 190 + i * 15);
    }

    fill("black");
    text("4. ", 20, 250);
    let getallen = [400, 240, 10, 490, 30, 60, 244, 500, 301, 300];
    let index = 0;
    for (let i = 0; i < getallen.length; i++) {
        if (getallen[i] < 300) {
            text(getallen[i], 40, 250 + index * 15);
            index++;
        }
    }

    fill("black");
    text("5. ", 120, 15);
    getallen = [3, 55, 93, 20, 102, 6];
    let andereGetallen = [14, 22, 80, 5];
    let som = 0;
    for (let i = 0; i < getallen.length; i++) {
        som += getallen[i];
    }

    for (let i = 0; i < andereGetallen.length; i++) {
        som += andereGetallen[i];
    }

    textSize(40);
    text(som, 140, 60);
    textSize(12);

    text("6. ", 120, 100);
    let woord = "Overheidsfinancieringstekort";
    som = 0;
    for (let i = 0; i < woord.length; i++) {
        if (woord[i] == "e") {
            som++;
        }
    }
    textSize(40);
    text(som + "x", 140, 140);
    textSize(12);

    text("7. ", 120, 190);
    colors = ["red", "green", "blue", "purple", "yellow"];
    colors.sort();
    for (let i = 0; i < colors.length; i++) {
        fill(colors[i]);
        text(colors[i], 140, 190 + i * 15);
    }

    fill("black");
    text("8. ", 120, 280);
    for (let i = 0; i < aantal; i++) {
        fill(randomR[i], randomG[i], randomB[i]);
        rect(140+ i * 30, 275, 30, 30);
    }

    fill("black");
    text("9. ", 240, 15);
    som = 0;
    for (let i = 0; i < randomGetallen.length; i++) {
        text(randomGetallen[i], 260, 15 + i * 15);
        som += randomGetallen[i];
    }

    text("totaal: "+ som, 260, 15 + 15*randomGetallen.length);
    text("gem: "+ round(som/randomGetallen.length), 260, 15 + 15*randomGetallen.length+15);


}