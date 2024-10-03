let sportEvenementen = [
  {
    Evenement: "Voetbal",
    Sport: "New York",
    Datum: "2023-05-15",
    Milieuvriendelijk: "Nee",
  },
  {
    Evenement: "Tennis",
    Sport: "Los Angeles",
    Datum: "2023-06-20",
    Milieuvriendelijk: "Ja",
  },
  {
    Evenement: "Basketbal",
    Sport: "Chicago",
    Datum: "2023-07-10",
    Milieuvriendelijk: "Nee",
  },
  {
    Evenement: "Basketbal Kampioenschap",
    Sport: "Chicago",
    Datum: "2023-07-15",
    Milieuvriendelijk: "Ja",
  },
  {
    Evenement: "Zwemmen",
    Sport: "San Francisco",
    Datum: "2023-08-05",
    Milieuvriendelijk: "Ja",
  },
  {
    Evenement: "Hockey",
    Sport: "Houston",
    Datum: "2023-09-03",
    Milieuvriendelijk: "Nee",
  },
  {
    Evenement: "Volleybal",
    Sport: "Miami",
    Datum: "2023-09-15",
    Milieuvriendelijk: "Ja",
  },
  {
    Evenement: "Atletiek",
    Sport: "Denver",
    Datum: "2023-10-01",
    Milieuvriendelijk: "Ja",
  },
  {
    Evenement: "Schaatsen",
    Sport: "Seattle",
    Datum: "2023-11-12",
    Milieuvriendelijk: "Nee",
  },
  {
    Evenement: "Rugby",
    Sport: "Boston",
    Datum: "2023-12-02",
    Milieuvriendelijk: "Ja",
  },
  {
    Evenement: "Golf",
    Sport: "Dallas",
    Datum: "2024-01-07",
    Milieuvriendelijk: "Ja",
  },
  {
    Evenement: "Basketbal Toernooi",
    Sport: "Chicago",
    Datum: "2024-02-15",
    Milieuvriendelijk: "Ja",
  },
];

function setup() {
  createCanvas(400, 400);

  let y = 20;

  // 1. Filteren op Milieuvriendelijke Evenementen
  text("Milieuvriendelijke Evenementen:", 20, y);
  y += 20;

  sportEvenementen.forEach(function (evenement) {
    if (evenement.Milieuvriendelijk === "Ja") {
      text(evenement.Evenement, 20, y);
      y += 20;
    }
  });

  y += 20;

  // 2. Zoeken op Sporttype
  text("Basketbal Evenementen:", 20, y);
  y += 20;

  sportEvenementen.forEach(function (evenement) {
    if (evenement.Sport === "Basketbal") {
      text(evenement.Evenement, 20, y);
      y += 20;
    }
  });

  y += 20;

  // 3. Evenementen per Locatie tellen
  text("Evenementen per Locatie:", 20, y);
  y += 20;

  let locatieTelling = {};

  sportEvenementen.forEach(function (evenement) {
    let locatie = evenement.Sport;
    if (locatieTelling[locatie]) {
      locatieTelling[locatie]++;
    } else {
      locatieTelling[locatie] = 1;
    }
  });

  for (let locatie in locatieTelling) {
    text(`${locatie}: ${locatieTelling[locatie]}`, 20, y);
    y += 20;
  }
}
