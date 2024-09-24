let randomArray = [];
let maxNumber;
function setup() {
  createCanvas(400, 400);
  for(let i = 0; i < 10; i++){
    let a = round(random(0,49));
    randomArray.push(a);
  }
  maxNumber = max(randomArray);
}
function draw() {
  background(220);
  for(let i = 0; i < randomArray.length; i++){
    if(randomArray[i] == maxNumber){
      fill("red");
    } else {
      fill("black");
    }
    textSize(20);
    text(randomArray[i],10,30 + i * 20);
  }
}