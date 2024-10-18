let myButton;
let mySecondButton;

function setup(){
    createCanvas(400,400);
    myButton = new Button("Start", 40, 40, 100, 30);
    myButton.onClick = function(){myButtonPressedWithParams("Button one")};

    mySecondButton = new Button("Second button", 40, 80, 100, 30);
    mySecondButton.onClick = function(){myButtonPressedWithParams("Button two")}
}

function myButtonPressedWithParams(a){
  console.log(a);
}

function draw(){
    background(200);
    myButton.display();
    mySecondButton.display();
}