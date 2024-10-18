let people = [
  ["John Doe", 35, "New York", "john@example.com"],
  ["Jane Smith", 28, "Los Angeles", "jane@example.com"],
  ["Michael Johnson", 42, "Chicago", "michael@example.com"],
  ["Emily Davis", 22, "San Francisco", "emily@example.com"],
  ["David Wilson", 40, "Houston", "david@example.com"],
  ["Sarah Brown", 30, "Miami", "sarah@example.com"],
  ["Jessica Lee", 25, "Denver", "jessica@example.com"],
  ["Brian Miller", 37, "Seattle", "brian@example.com"],
  ["Olivia Clark", 29, "Boston", "olivia@example.com"],
  ["Daniel Anderson", 33, "Dallas", "daniel@example.com"]
];

function setup() {
  createCanvas(600, 600);
  background(220);
  textSize(16);
  




// let twoDArray = [
//   [1, 4, 3],
//   [3, 1, 6],
//   [0, 2, 7]
// ];

// twoDArray[1][2]
// //   teller;    voorwaarde;          updater
// for (let i = 0; i < twoDArray.length; i++) {
//   for (let j = 0; j < twoDArray[i].length, j++) {
//     console.log(twoDArray[i][j])
//   }
// }


  //Gemiddelde leeftijd
  let totalAge = 0;
  for (let i = 0; i < people.length; i++) {
    totalAge += people[i][1];
  }

  let avgAge = totalAge / people.length;
  text("Gemiddelde Leeftijd:" + avgAge, 10, 20);

  //Oudste persoon
  let oldest = people[0];
  for (let i = 1; i < people.length; i++) {
    if (people[i][1] > oldest[1]) {
      oldest = people[i];
    }
  }

  text("Oudste persoon:" + oldest[0] + ", Leeftijd:" + oldest[1], 10, 50);

  //Jongste persoon
  let youngest = people[0];
  for (let i = 1; i < people.length; i++) {
    if (people[i][1] < youngest[1]) {
      youngest = people[i];
    }
  }

  text("Jongste Persoon:" + youngest[0] + ", Leeftijd: " + youngest[1], 10, 80);

  //Namen sorteren en tonen
  text("Gesorteerde Namen:", 10, 110);

  let sortedNames = people.sort();
  for (let i = 0; i < sortedNames.length; i++) {
    text(i +": " + sortedNames[i][0], 10, 140 + i * 20);
  }

  //of zo
  // let namen = [];
  // for (let i = 0; i < people.length; i++) {
  //     namen.push(people[i][0]);
  // }

  // let sortedNames = sort(namen);
  // for (let i = 0; i < namen.length; i++) {
  //     text(i + ": " + namen[i], 10, 140 + i * 20);
  // }



}