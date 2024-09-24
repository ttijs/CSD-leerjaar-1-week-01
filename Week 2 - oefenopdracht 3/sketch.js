let score = 10;

function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(220);

  if (score >= 90) {
    fill("green")
    text("Uitstekend!", 20,20);
  } else if (score >= 70 && score <= 89) {
    fill("yellow")
    text("Goed gedaan!", 20, 20);
  } else if (score > 50 && score <= 69) {
    fill("orange")
    text("prima", 20, 20);
  } else {
    fill("red");
    text("onvoldoende!", 20, 20);

  }


























  // if (score >= 90 && score <= 100){
  //   fill("green");
  //   text("Uitstekend!", 20, 20);
  // }
  // else if (score >= 70 && score <= 89){
  //   fill("yellow");
  //   text("Goed gedaan!", 20, 20);
  // }
  // else if (score >= 50 && score <= 69){
  //   fill("orange");
  //   text("Voldoende", 20, 20);
  // }
  // else{
  //   fill("red");
  //   text("Onvoldoende", 20, 20);
  // }
}