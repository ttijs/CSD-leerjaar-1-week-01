// statistics variables
let hunger = 100;
let happiness = 100;
let health = 100;
let energy = 100;
let statisticsTypes = ["hunger", "happiness", "health", "energy"];

let hungerFactor = 0.1;
let happinessFactor = 0.2;
let healthFactor = 0.4;
let energyFactor = 0.3;

let isAsleep = false;
let isDay = true;

let playedTime = 0;
let startTime = 0;

let feedingValue = 0;
let boneValue = 10;
let cookieValue = 5;

let petcurrentStatus = 0;
let petStatusses = ["happy", "grumpy", "sad", "angry", "dead"];

function setup() {
    createCanvas(600, 400);
    happiness = getItem("happiness");
}

function draw() {
    background(220);

    drawPet();
    drawStatistics();
}

function feeding() {}
function caring() {}
function playing() {}
function sleeping() {}

function drawPet() {
    fill("brown");
    rect(width / 2, height / 2, 75, 100);
    fill("black")
    arc(20,20, 50, 50, 30)
}
function drawStatistics() {
    // get the current second

    if (happiness > 0) {
        happiness = happiness - happinessFactor;
    }
    if (hunger > 0) {
        hunger = hunger - hungerFactor;
    }
    if (energy > 0) {
        energy = energy - energyFactor;
    }
    if (health > 0) {
        health = health - healthFactor;
    }
    
    storeItem("happiness", happiness);


    // fill(100, 200, 255);
    // if (happiness <= 0) {
    //     push();
    //     fill("black");
    //     text("No happiness", 30, 35);
    //     pop();
    // } else {
    //     rect(20, 20, happiness * 2, 20);
    // }

    // fill(200, 200, 255);
    // if (health <= 0) {
    //     push();
    //     fill("black");
    //     text("No health", 30, 65);
    //     pop();
    // } else {
    //     rect(20, 50, health * 2, 20);
    // }
    // //etc

    // met een loop
    for (let i = 0; i < statisticsTypes.length; i++) {
        fill(100, 200, 255);
        //rect(20, 20 + i * 20, 200, 20);

        // if (eval(statisticsTypes[i]) <= 0) {
        //     push();
        //     fill("black");
        //     text(`No ${statisticsTypes[i]}`, 30, 35 + i * 30);
        //     pop();
        // } else {
        rect(20, 20 + i * 30, eval(statisticsTypes[i]) * 2, 20);

        push();
        fill("black");
        text(
            `${statisticsTypes[i]}: ${ceil(eval(statisticsTypes[i]))}`,
            30,
            35 + i * 30
        );
        pop();

        // }
    }
}
