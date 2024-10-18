function setup() {
    createCanvas(400, 400);

    let timerLength = 20;
    let startDate = new Date();
    let endDate = new Date();

    endDate.setMinutes(endDate.getMinutes() + timerLength);
    
    console.log("Startdate:", startDate.toLocaleString());
    console.log("endDate:", endDate.toLocaleString());
}

function draw() {
    background(220);
}