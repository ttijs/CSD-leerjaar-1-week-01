let r;
let g;
let b;

function setup() {
    createCanvas(400, 400);

    // met standaard getItem, moet je getallen die opgeslagen zijn als string terugzetten als getal met parseInt
    // r = createSlider(0, 255, parseInt(localStorage.getItem("r")));
    // g = createSlider(0, 255, parseInt(localStorage.getItem("g")));
    // b = createSlider(0, 255, parseInt(localStorage.getItem("b")));

    // met ingebouwde P5 functie storeItem
    r = createSlider(0, 255, getItem("r"));
    g = createSlider(0, 255, getItem("g"));
    b = createSlider(0, 255, getItem("b"));
}

function draw() {
  background(r.value(), g.value(), b.value());

  // localStorage.setItem("r", r.value());
  // localStorage.setItem("b", b.value());
  // localStorage.setItem("g", g.value());

  // met ingebouwde P5 functie storeItem
  storeItem("r", r.value());
  storeItem("b", b.value());
  storeItem("g", g.value());

  //localStorage.clear()

}
