function setup() {
    createCanvas(800, 400);
}

function draw() {
    background(220);

    fill("black");
    text("1. ", 20, 15);
    fill("white");
    for (let i = 0; i < 10; i++) {
        if (i == 6){
            fill("blue");
        }
        else{
            fill("white");
        }
        rect(20 + (i * 50), 20, 50, 50);
    }

    fill("black");
    text("2. ", 20, 105);
    fill("white");

    for (let i = 0; i < 5; i++) {
        fill(i * 255/4,i*255/4, i*255/4);
        rect(20, 110 + (i * 50), 50, 50);
    }

    fill("black");
    text("3. ", 80, 105);
    fill("white");

    let w = 25;
    let h = 50;
    let x = 80;
    let y = 110;
    let g = 0;
    for (let i = 0; i < 4; i++) {
        fill(0,g,0);
        rect(x, y, w, h);
        x += w;
        w += 25;
        g += 255/3;
    }

    fill("black");
    text("4. ", 80, 205);
    fill("white");
    w = 25;
    h = 50;
    x = 80;
    y = 210;
    let b = 255;
    for (let i = 0; i < 4; i++) {
        fill(0,0,b);
        rect(x, y, w, h);
        x += w;
        h += 25;
        w += 25;
        b -= 255/3;
    }

    fill("black");
    text("5. ", 540, 20);
    fill("white");
    for (let i = 0; i < 5; i++) {
        strokeWeight(i * 3);
        circle(560 + i * 50, 45, 30);
    }
    strokeWeight(1);

    fill("black");
    text("6. ", 350, 105);
    fill("white");
    let isRed = false;
    let radius = 250;
    let aantalRingen = 10;
    for (let i = 0; i < aantalRingen; i++) {
        isRed = !isRed;
        if (isRed){
            fill("red");
        }
        else{
            fill("white");
        }
        circle(350 + radius / 2, 220, radius - (i * radius / aantalRingen));
    }

    fill("black");
    text("7.", 625, 105);
    fill("white");
    w = 10;
    let aantalBalkjes = 21;
    let isBlack = false;
    for (let i = 0; i < aantalBalkjes; i++) {
        if (i <= aantalBalkjes/2) {
            w += 10;
        }
        else {
            w -= 10;
        }
        isBlack = !isBlack;
        if (isBlack){
             fill("gray");
        }
        else{
            fill("white");
        }

        rect(625, 115 + i * 10, w, 10);
    }
}