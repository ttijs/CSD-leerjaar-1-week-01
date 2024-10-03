let data = [
  ["John Doe", 135, "New York", "john@example.com"],
  ["Jane Smith", 28, "Los Angeles", "jane@example.com"],
  ["Michael Johnson", 42, "Chicago", "michael@example.com"],
  ["Emily Davis", 22, "San Francisco", "emily@example.com"],
  ["David Wilson", 40, "Houston", "david@example.com"],
  ["Sarah Brown", 30, "Miami", "sarah@example.com"],
  ["Jessica Lee", 25, "Denver", "jessica@example.com"],
  ["Brian Miller", 37, "Seattle", "brian@example.com"],
  ["Olivia Clark", 29, "Boston", "olivia@example.com"],
  ["Daniel Anderson", 33, "Dallas", "daniel@example.com"],
];

function setup() {
  createCanvas(400, 200);
  textSize(16);

  // Opdracht 1: Leeftijdsgemiddelde berekenen
  let totalAge = 0;
  for (let i = 0; i < data.length; i++) {
    totalAge += data[i][1];
  }
  let averageAge = totalAge / data.length;
  text("Gemiddelde leeftijd: " + averageAge.toFixed(2), 20, 20);

  // Opdracht 2: Oudste persoon vinden
  let oldestPerson = data[0]; // oldestPerson is nu een 1 dimensionale array met alle data van 1 persoon
  //console.log(oldestPerson);
  for (let i = 1; i < data.length; i++) {
    if (data[i][1] > oldestPerson[1]) {
      oldestPerson = data[i];
    }
  }
  text(
    "Oudste persoon: " + oldestPerson[0] + " (" + oldestPerson[1] + " jaar)",
    20,
    50
  );

  //Opdracht 3: Jongste persoon vinden
  let youngestPerson = data[0];
  for (let i = 1; i < data.length; i++) {
    if (data[i][1] < youngestPerson[1]) {
      youngestPerson = data[i];
    }
  }

  text(
    "Jongste persoon: " +
      youngestPerson[0] +
      " (" +
      youngestPerson[1] +
      " jaar)",
    20,
    80
  );

  // Opdracht 4: Namen sorteren
  let names = [];
  for (let i = 0; i < data.length; i++) {
    names.push(data[i][0]);
  }
  names.sort();
  text("Gesorteerde namen:", 20, 110);
  for (let i = 0; i < names.length; i++) {
    text(names[i], 20, 140 + i * 20);
  }
}
