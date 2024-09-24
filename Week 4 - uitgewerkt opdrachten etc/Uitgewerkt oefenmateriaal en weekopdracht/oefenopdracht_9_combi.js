let aantalBalken = 20;
let randomHeights = [];
let maxHeight = 160;
let width = 300;
let balkWidth = 0;

let randomKleuren = [];
let aantalSpiraal = 3;

let mousePointsX = [];
let mousePointsY = [];

function setup() {
    createCanvas(630, 400);

    for(let i = 0; i < aantalBalken; i++){
        randomHeights.push(random(10,maxHeight-10));
    }

    for(let i = 0; i < aantalBalken; i++){
        let c = color(random(0,255),random(0,255), random(0,255));
        randomKleuren.push(c);
    }
}

function draw() {
    background(220);
    strokeWeight(0);
    stroke("black");
    fill("black");
    text("1.", 10,15);
    fill(100);
    strokeWeight(1);
    rect(25,15,width,maxHeight);

    for(let i = 0; i < aantalBalken; i++){
        fill(randomKleuren[i]);
        strokeWeight(0);
        rect(25 + ((width/aantalBalken) * i), 15+maxHeight - randomHeights[i], width/aantalBalken, randomHeights[i]);
    }

    fill("black");
    text("2. ", 10, 200);

    rect(25,205,width-(width/aantalBalken),maxHeight);
    strokeWeight(2);
    stroke("white");
    for(let i = 0; i < aantalBalken; i++){
        fill("white");
        line(25 + ((width/aantalBalken) * i), 205+maxHeight - randomHeights[i], 25 + ((width/aantalBalken) * (i+1)), 205+maxHeight - randomHeights[i+1])
    }

    fill("black");
    strokeWeight(0);
    text("3.", 350, 15);

    strokeWeight(2);
    stroke("black");
    let xPos = 370;
    let yPos = 15;
    let lengte = 200;
    let offset = 10;

    for (let i = 0; i < aantalSpiraal; i++)
    {
        line(xPos, yPos, xPos+lengte, yPos);
        xPos = xPos + lengte;
        lengte = lengte - offset;

        line(xPos, yPos, xPos, yPos + lengte);
        yPos = yPos + lengte;
        lengte = lengte - offset;

        line(xPos, yPos, xPos - lengte, yPos);
        xPos = xPos - lengte;
        lengte = lengte - offset;

        line(xPos, yPos, xPos, yPos - lengte);
        yPos = yPos - lengte;
        lengte = lengte - offset;
    }

    strokeWeight(0);
    text("4.", 350, 240);

    fill(255);
    rect(370, 230, 240, 140);
    for(let i = 0; i < mousePointsX.length; i++){
        if (i < mousePointsX.length-1){
            stroke("black");
            strokeWeight(1);
            line(mousePointsX[i], mousePointsY[i], mousePointsX[i+1], mousePointsY[i+1]);
        }
        fill("red");
        strokeWeight(0);
        circle(mousePointsX[i], mousePointsY[i], 10);
    }
}

function mousePressed(){
    mousePointsX.push(mouseX);
    mousePointsY.push(mouseY);
}

function keyPressed(){
    if (keyCode == 13){
        if (aantalSpiraal < 5){
            aantalSpiraal++;
        }
    }
    if (keyCode ==8){
        if (aantalSpiraal > 0){
        aantalSpiraal--;
        }
    }
}