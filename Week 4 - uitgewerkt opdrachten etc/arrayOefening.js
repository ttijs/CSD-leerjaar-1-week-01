let getallen = [];

function setup(){
    createCanvas(400,400);

    let aantal = 10;
    let min = 0;
    let max = 100;

    for(let i = 0; i < aantal; i++){
        getallen.push(round(random(min,max)));
    }
}

function draw(){
    background(220);

    for(let i = 0; i < getallen.length; i++){
        if (getallen[i] < 50){
            fill("red");
        }
        else{
            fill("black");
        }
        text(getallen[i], 10, 30+ i * 30);
    }
}