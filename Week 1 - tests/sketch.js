function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill("green");
  
  rect(20,30,30,40);

  push();
  fill("yellow");
  rotate(20);
  rect(120, 30, 30, 40);
  //rotate(-20);
  pop();

  //fill("green");
  rotate(5);
  rect(30,250,30,40);
  rotate( -5 );
  fill("red")
  rect(170, 150, 200, 140);

  let kleuren = [
      ["green", "yellow", "red"],
      ["green", "green", "red"],
      ["black", "green", "yellow"],
      ["black", "yellow", "purple"],
  ];
  for (let i = 0; i < kleuren.length; i++) {
      for (let j = 0; j < kleuren[i].length; j++) {
          fill(kleuren[i][j]);
          rect( j * 20, i * 20, 20, 20);
      }
  }
}
