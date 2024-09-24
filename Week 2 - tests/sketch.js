function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  let naam = "thomas";
  text(naam, 20,20);


  // let eerstegetal = 6;
  // let tweedegetal = 2;
  // let derdegetal = eerstegetal - tweedegetal;
  // let gemiddelde = (eerstegetal + tweedegetal + derdegetal) / 3;
  // console.log(gemiddelde*2)

  let counter = 0
  counter++;
  //console.log(counter)

  let x = 10
  let y = 2
  let z = 5
  let result = x - y * z / y + z
  console.log("het resultaat van de berekening is " + result)


  // line(0, 120, 800, 120)

  // let numA = 10;
  // let numB = 4;
  // let numC = 22;

  // if (numA > numB) {
  //   if (numB > numC) {
  //     console.log("pasta");
  //   } else if (numA == numB) {
  //     console.log("pizza");
  //   }
  // }
  // else {
  //   console.log("pasta");
  // }

}
