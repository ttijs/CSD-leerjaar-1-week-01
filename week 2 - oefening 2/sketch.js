// assign the variables
let isTrue = true;
let message = "Boolean waarde is: "; 
combinedMessage = message + isTrue;

function setup() {
  createCanvas(400, 400);
}

function draw() {
    background(220);

    // draw the boolean value
    text(isTrue, 20, 20);

    // draw the message
    text(message, 20, 40);

    // draw the combined message
    text(combinedMessage, 20, 60);
}

// onClick toggle the boolean value
// and update the combined message
function mouseClicked () {
  console.log("clicked");
  isTrue = !isTrue;
  print(isTrue);
  combinedMessage = message + isTrue;
}