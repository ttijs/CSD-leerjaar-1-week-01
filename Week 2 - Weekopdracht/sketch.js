let wolkdeel1 = 100;
let wolkdeel2 = wolkdeel1 + 20;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(220);
    
    wolkdeel1 = wolkdeel1+1;
    wolkdeel2 = wolkdeel2 + 1;

    rect(wolkdeel1+20, 100, 100, 100);
    rect(wolkdeel2, 120, 100, 100);

    

}

  function mouseClicked() {
      console.log("clicked");
  } 
