let currentQuestion = 0;
let score = 0;
let hoveredOptionIndex = -1;
let quizEnded;
let playerName = "";
let isStartScreen = true;

let quizQuestions = [
  "Wat is de hoofdstad van Frankrijk?",
  "Welke kleur krijg je door blauw en geel te mengen?",
  "Hoeveel planeten zijn er in ons zonnestelsel?",
  "Welk element heeft het atoomnummer 1?",
  "Nu een vraag met lange antwoorden"
];

let quizOptions = [
  ["Parijs", "Londen", "Rome", "Madrid"],
  ["Paars", "Groen", "Oranje", "Bruin"],
  ["7", "8", "9", "10"],
  ["Waterstof", "Zuurstof", "Stikstof", "Koolstof"],
  ["WaterstofKoolstofKoolstofKoolstofKoolstof", "ZuurstofKoolstofKoolstof", "StikstofKoolstofKoolstofKoolstofKoolstof", "KoolstofKoolstofKoolstof"]
];

let quizAnswers = [0, 2, 1, 0, 3];

let input;

function setup() {
  createCanvas(800, 600);
  textSize(20);
  textAlign(CENTER);
  quizEnded = false;

  // Maak een tekstvak
  input = createInput();
  input.position(336, 330);
  input.size(120, 20);
  input.hide();
}

function draw() {
  if (isStartScreen) {
    showStartScreen();
  } else if (!quizEnded) {
    showQuestion();
  }
}

function showStartScreen() {
  clear();
  rectMode(CORNER);
  fill("white");
  strokeWeight(4);
  rect(10, 10, width - 15, height - 15, 10);
  fill("black");
  text("Welkom bij de Quiz!", width / 2, height / 2 - 40);
  text("Voer je naam in en klik op 'Start' om te beginnen:", width / 2, height / 2);
  input.show();
  
  textSize(20);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  strokeWeight(2);
  fill("green");
  rect(400, 400, 120, 30, 5);
  fill(255);
  text(playerName, 400, 400);
  fill("black");
  text("Start", 400, 400);

  // Controleer of er op 'Start' wordt geklikt
  if (
    mouseX > 340 &&
    mouseX < 460 &&
    mouseY > 382 &&
    mouseY < 418
  ) {
    fill(150);
    rect(400, 400, 120, 30,5);
    fill(255);
    text("Start", 400, 400);
    if (mouseIsPressed) {
      playerName = input.value();
      isStartScreen = false;
      input.hide();
    }
  }
}

function showQuestion() {
  clear();
  // achtergrond opmaken
  rectMode(CORNER);
  fill("white");
  strokeWeight(4);
  rect(10, 10, width - 15, height - 15, 10);
  fill("black");

  let question = quizQuestions[currentQuestion];
  let options = quizOptions[currentQuestion];
  text(question, width / 2, height / 2 - 80);

  for (let i = 0; i < options.length; i++) {
    let option = options[i];
    let x = width / 2;
    let y = height / 2 + 35 * i;

    if (i === hoveredOptionIndex) {
      fill(150); // Kleur veranderen voor gehoverde optie
    } else {
      fill(200); // Standaard kleur voor niet-gehhoverde opties
    }

    // fill(200);
    strokeWeight(2);
    rectMode(CENTER);
    rect(x, y, 200, 30, 5);

    fill(0);
    textAlign(CENTER, CENTER);
    text(option, x, y);
  }
}

function checkAnswer(selectedOption) {
  if (selectedOption === quizAnswers[currentQuestion]) {
    score++;
    console.log("Correct antwoord!");
  } else {
    console.log("Fout antwoord!");
  }

  currentQuestion++;
  if (currentQuestion < quizQuestions.length) {
    showQuestion();
  } else {
    console.log("showScore");
    showScore();
  }
}

function showScore() {
  clear();
  text(
    "Quiz voltooid, " +
      playerName +
      "! Je score is: " +
      score +
      " van de " +
      quizQuestions.length +
      " vragen.",
    width / 2,
    height / 2
  );
  setTimeout(resetQuiz, 3000);
}

function resetQuiz() {
  currentQuestion = 0;
  hoveredOptionIndex = -1;
  score = 0;
  quizEnded = false;
  isStartScreen = true;
  playerName = "";
  input.value("");
}

function mouseClicked() {
  if (isStartScreen) {
    // Controleer of er op 'Start' wordt geklikt
    if (
      mouseX > width / 2 + 10 &&
      mouseX < width / 2 + 110 &&
      mouseY > height / 2 + 25 &&
      mouseY < height / 2 + 55
    ) {
      playerName = input.value();
      isStartScreen = false;
      input.hide();
    }
  } else {
    for (let i = 0; i < quizOptions[currentQuestion].length; i++) {
      let x = width / 2;
      let y = height / 2 + 35 * i;

      if (
        mouseX > x - 100 &&
        mouseX < x + 100 &&
        mouseY > y - 10 &&
        mouseY < y + 10
      ) {
        checkAnswer(i);
        break;
      }
    }

    if (currentQuestion >= quizQuestions.length) {
      quizEnded = true;
    }
  }
}

function mouseMoved() {
  if (!quizEnded) {
    for (let i = 0; i < quizOptions[currentQuestion].length; i++) {
      let x = width / 2;
      let y = height / 2 + 35 * i;

      if (
        mouseX > x - 100 &&
        mouseX < x + 100 &&
        mouseY > y - 10 &&
        mouseY < y + 10
      ) {
        hoveredOptionIndex = i; // Stel de gehoverde index in
        break; // Stop de loop zodra een optie wordt gehoverd
      }
    }
  }
}
