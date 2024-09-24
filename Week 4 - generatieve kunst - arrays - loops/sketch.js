function setup() {
  createCanvas(800, 600);


}

function draw() {
  background(220);

  text("Hello World", 20, 20);

  for (let i = 0; i < 14; i++) {
    if (i == 7) {
      fill("blue");
    } else {
      fill("white");
    }

    rect(i * 50, 0, 50, 50);
  }
}

  for (let i = 0; i < 100; i++) {
      console.log("Hello World");
  }
  console.log("Hoe gaat het?");
