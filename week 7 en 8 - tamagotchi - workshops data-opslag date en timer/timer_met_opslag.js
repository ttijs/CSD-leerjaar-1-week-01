let endTime;
let timerDuration = 20;

function setup() {
    createCanvas(400, 400);

    let timerData = localStorage.getItem("endTime");
    if (timerData) {
        console.log("Previous endTime found.");
        endTime = new Date(timerData);
    }
    else {
        console.log("No endTime found.");
    }
}

function mousePressed() {
    endTime = new Date();
    endTime.setSeconds(endTime.getSeconds() + timerDuration);
}

function draw() {
    background(220);

    if (endTime) {
        //Haal de huidige tijd op
        let currentTime = new Date();

        //Als de huidige tijd hoger of gelijk is aan de eindtijd
        if (currentTime >= endTime) {
            console.log("Timer ended!");
            //Hier stop je logica als de timer klaar is.
            background("green");
            localStorage.removeItem("endTime");
        }
        //Anders
        else {
            //Maak een variabele met het verschil door eindtijd - huidige tijd te doen
            //Dit is een waarde met het verschil in millisecondes
            let remainingTime = endTime - currentTime;
            //Om minuten te rekenen: aantalMillisecondes / (60000) 
            //(want 60000 millisecondes in een minuut)
            let minutes = Math.floor(remainingTime / (60 * 1000));
            //Met modulo het restdeel pakken en die ook omrekenen naar secondes.
            let seconds = Math.floor(remainingTime % (60 * 1000)) / 1000;

            //Schrijven van de tekst met nf() en round()
            textSize(24);
            textAlign(LEFT, CENTER);
            text("Time remaining: " + nf(minutes, 2) + ":" + nf(round(seconds), 2), 20, height * 0.5);
            localStorage.setItem("endTime", endTime.toString());
        }
    }
    else {
        textSize(24);
        textAlign(LEFT, CENTER);
        text("Click to start new timer", 20, height * 0.5);
    }
}