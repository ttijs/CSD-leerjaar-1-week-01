let hunger = 100;
let energy = 100;
let happiness = 100;
let health = 100;

let isSleeping = false;
let petMood = "happy";

let playButton;
let feedButton;
let cleanButton;
let sleepButton;

function setup() {
  createCanvas(400, 400);
  textSize(16);
  setInterval(decreaseStats, 1000); // Statistieken nemen af om de 1 seconde

  playButton = createButton("play");
  playButton.mousePressed(play);

  feedButton = createButton("feed");
  feedButton.mousePressed(feed);

  cleanButton = createButton("clean");
  cleanButton.mousePressed(clean);

  sleepButton = createButton("sleep");
  sleepButton.mousePressed(sleep);
  
}


// function decreaseStats() {
//   happiness = happiness - 1;
//   energy = energy - 1;
//   hunger = hunger - 1;
//   health = health - 1;
// }

function draw() {
  background(200);

  // Huisdier gezicht tekenen
  drawPet();

  // Statistieken tonen
  showStats();

  // Feedback geven
  checkMood();
}

function drawPet() {
  // Basis huisdier gezicht
  fill(255);
  ellipse(width / 2, height / 2, 200, 200);
  
  // Ogen
  fill(0);
  ellipse(width / 2 - 40, height / 2 - 40, 20, 20);
  ellipse(width / 2 + 40, height / 2 - 40, 20, 20);
  
  // Gezichtsexpressie afhankelijk van stemming
  stroke(0);
  if (petMood === "happy") {
    arc(width / 2, height / 2 + 20, 80, 80, 0, PI); // glimlach
  } else if (petMood === "sad") {
    arc(width / 2, height / 2 + 50, 80, 80, PI, TWO_PI); // verdrietige mond
  } else if (petMood === "sick") {
    line(width / 2 - 30, height / 2 + 40, width / 2 + 30, height / 2 + 40); // rechte mond
  }
}

function showStats() {
  fill(0);
  text(`Honger: ${hunger}`, 10, 20);
  text(`Energie: ${energy}`, 10, 40);
  text(`Geluk: ${happiness}`, 10, 60);
  text(`Gezondheid: ${health}`, 10, 80);
}

function decreaseStats() {
  if (!isSleeping) {
    hunger = max(hunger - 1, 0);
    energy = max(energy - 1, 0);
    happiness = max(happiness - 1, 0);
    health = max(health - 1, 0);
  } else {
    energy = min(energy + 2, 100); // Energie wordt aangevuld als het huisdier slaapt
  }
  
  // Automatisch de stemming aanpassen op basis van de statistieken
  if (hunger < 30 || energy < 30 || happiness < 30 || health < 30) {
    petMood = "sad";
  } 
  if (health < 20) {
    petMood = "sick";
  } 
  if (hunger > 50 && energy > 50 && happiness > 50 && health > 50) {
    petMood = "happy";
  }
}

function checkMood() {
  fill(0);
  if (petMood === "happy") {
    text("Je huisdier is blij!", 10, 100);
  } else if (petMood === "sad") {
    text("Je huisdier is verdrietig!", 10, 100);
  } else if (petMood === "sick") {
    text("Je huisdier is ziek!", 10, 100);
  }
}

function feed(){
  hunger = min(hunger + 20, 100);
  energy = min(energy + 10, 100);
}

function sleep(){
  isSleeping = !isSleeping; // Slaapmodus aan/uit
}

function play(){
  happiness = min(happiness + 20, 100);
    energy = max(energy - 15, 0);
}

function clean(){
  health = min(health + 25, 100);
}

