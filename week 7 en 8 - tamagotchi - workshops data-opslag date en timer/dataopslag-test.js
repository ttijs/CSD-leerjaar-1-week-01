let savegame = {
    name: "Frank",
    age: 37,
    hitpoints: 100,
    coins: 5
};
function setup() {
    createCanvas(400, 400);

    console.log(savegame);
    console.log(typeof savegame);

    // zonder stringify en parse wordt savegame een object
    //localStorage.setItem("savegame", savegame);
    //savegame = localStorage.getItem("savegame");

    localStorage.setItem("savegame", JSON.stringify(savegame));
    savegame = JSON.parse(localStorage.getItem("savegame"));

    console.log("en nu");
    console.log(savegame);
    console.log(typeof savegame);

    //localStorage.removeItem("savegame"); 
    //localStorage.clear(); // hele localstorage verwijderen
}

function draw() {
    background(220);
}