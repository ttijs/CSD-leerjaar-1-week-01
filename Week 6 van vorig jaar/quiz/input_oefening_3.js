let firstNameInput,
  lastNameInput,
  dobInput,
  emailInput,
  phoneInput,
  colorPicker;
let genderRadio;

function setup() {
  createCanvas(600, 550);

  // Voornaam invoerveld
  firstNameInput = createInput();
  firstNameInput.position(20, 40);
  createP("Voornaam:").position(20, 5);

  // Achternaam invoerveld
  lastNameInput = createInput();
  lastNameInput.position(20, 85);
  createP("Achternaam:").position(20, 50);

  // Geboortedatum invoerveld
  dobInput = createInput();
  dobInput.position(20, 130);
  createP("Geboortedatum:").position(20, 95);

  // E-mail invoerveld
  emailInput = createInput();
  emailInput.position(20, 185);
  createP("E-mail:").position(20, 150);

  // Telefoonnummer invoerveld
  phoneInput = createInput();
  phoneInput.position(20, 240);
  createP("Telefoonnummer:").position(20, 205);

  // Geslachtsradioknoppen
  createP("Geslacht:").position(20, 260);
  genderRadio = createRadio();
  genderRadio.option("Man");
  genderRadio.option("Vrouw");
  genderRadio.option("Anders");
  genderRadio.position(20, 295);

  // Kleurkiezer (colorpicker input)
  colorPicker = createInput("#ffffff", "color");
  colorPicker.position(20, 350);
  createP("Lievelingskleur:").position(20, 315);
}

function draw() {
  background(colorPicker.value());

  // Doe iets met de ingevoerde gegevens, bijvoorbeeld weergeven op het canvas
  textSize(16);
  fill(0);
  let firstName = firstNameInput.value();
  let lastName = lastNameInput.value();
  let dob = dobInput.value();
  let email = emailInput.value();
  let phone = phoneInput.value();
  let gender = genderRadio.value();
  let favoriteColor = colorPicker.value();

  text("Voornaam: " + firstName, 260, 60);
  text("Achternaam: " + lastName, 260, 100);
  text("Geboortedatum: " + dob, 260, 150);
  text("E-mail: " + email, 260, 200);
  text("Telefoonnummer: " + phone, 260, 260);
  text("Geslacht: " + gender, 260, 310);
  text("Lievelingskleur: " + favoriteColor, 260, 350);
}
