let nameInput, colorsDropDown;

function setup() {
  createCanvas(400, 300);

  // Creëer invoervelden
  nameInput = createInput();
  nameInput.position(20, 60);
  nameInput.size(200, 30);

  //Pas de stijl van het inputveld aan met .style()
  nameInput.style("font-size", "12px"); // Verander de lettergrootte van het inputveld
  nameInput.style("background-color", "lightgray"); // Verander de achtergrondkleur
  nameInput.style("color", "black"); // Verander de tekstkleur
  nameInput.style("border-radius", "5px"); // Afgeronde hoeken

  // Creëer dropdown-menu voor kleuren
  colorsDropDown = createSelect();
  colorsDropDown.option("red");
  colorsDropDown.option("green");
  colorsDropDown.option("blue");
  colorsDropDown.position(20, 20);
  colorsDropDown.size(200, 30);
  
  // Pas de stijl van het inputveld aan met .style()
  colorsDropDown.style("font-size", "12px"); // Verander de lettergrootte van het inputveld
  colorsDropDown.style("background-color", "lightgray"); // Verander de achtergrondkleur
  colorsDropDown.style("color", "black"); // Verander de tekstkleur
  colorsDropDown.style("border-radius", "5px"); // Afgeronde hoeken
}

function draw() {
  background(colorsDropDown.value());
  text(nameInput.value(), 20, 140);
}
