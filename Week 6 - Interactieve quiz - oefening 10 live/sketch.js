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
    ["Daniel Anderson", 33, "Dallas", "daniel@example.com"],
];

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(220);
    let totaleLeeftijd = 0;
    for (i = 0; i < people.length; i++) {
      for (j = 0; j < people[i].length; j++) {
      }
      //text(people[i][1], 50 + 100 * j, 50 + 50 * i);
      totaleLeeftijd = totaleLeeftijd + people[i][1]; 
    }
    text(" gemiddelde leeftijd = " + totaleLeeftijd / i, 20, 20);




    let oudste = people[0];
    //console.log(oudste[1])
    for ( let i = 0; i < people.length; i++) {
      text( people[i][1] , 50 + 50 * i, 50 + 50 * 1)
      if (people[i][1] >= oudste[1]) {
        oudste = people[i];
      }
    }
    //text( oudste[0] , 80, 120)

    let Gesorteerde = people.sort()
    //console.log(Gesorteerde[1][0]);
    for (let i = 0; i < Gesorteerde.length; i++) {
      text(Gesorteerde[i][0], 400, 30 + i * 50);
    }


  }


