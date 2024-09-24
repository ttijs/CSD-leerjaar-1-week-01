function setup() {
  createCanvas(400, 400);
  console.log("hello world");
}

function draw() {
  background(200);

    
  fill('red')
  stroke("blue")
  strokeWeight(5)
  rect(200, 10, 100, 70);
  rect(random(40, 45), random(60, 65), 50, 80);
  rect(frameCount * 100, 50, 50, 50);
  rect(frameCount % (width-50), 100, 50, 50);


  fill("orange");
  stroke("black");
  //noStroke();

  textSize(20)
  text('Hallo', 200, 200)
  
}
