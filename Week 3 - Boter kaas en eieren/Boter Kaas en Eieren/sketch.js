let cellWidth = 100;
let cellHeight = 100;

let startXpos = 50;
let startYpos = 50;

let cell_1_Color = "white";
let cell_2_Color = "white";
let cell_3_Color = "white";
let cell_4_Color = "white";
let cell_5_Color = "white";
let cell_6_Color = "white";
let cell_7_Color = "white";
let cell_8_Color = "white";
let cell_9_Color = "white";

let player1;
let player2;

let timer = 0;
let changeTime = 100;

let welkespeler;
let kiesSpeler;
let winnendeSpeler = "?";

let clickLocked = false;
let gameEnded = false;
let winningColor;

let cell_1_Locked = false;
let cell_2_Locked = false;
let cell_3_Locked = false;
let cell_4_Locked = false;
let cell_5_Locked = false;
let cell_6_Locked = false;
let cell_7_Locked = false;
let cell_8_Locked = false;
let cell_9_Locked = false;

function setup(){
  createCanvas(600,600);

  //bepalen welke speler als eerste aan zet is
  kiesSpeler = int(random(0,2))
  
  if (kiesSpeler == 0){
    player1 = true;
    player2 = false;
  }else if (kiesSpeler == 1){
    player2 = true;
    player1 = false;
  }
}

function draw(){
  background(0);

  //welke speler is aan zet
  if (player1 == true){
    welkespeler = "Speler 1 is aan zet";
  }else if (player2 == true){
    welkespeler = "Speler 2 is aan zet";
  }
  fill(255);
  text(welkespeler,startXpos,25);

  fill(255);
  text(winnendeSpeler,startXpos,450);

  // tekenen van het grid 9 vierkanten
  
  //cel 1 linksboven
  fill(cell_1_Color);
  rect(startXpos,startYpos,cellWidth, cellHeight);
  
  //cel 2 de nieuwe x-positie is x + 1 * de breedte
  fill(cell_2_Color);
  rect(startXpos+(1*cellWidth),startYpos,cellWidth, cellHeight);
  
  //cel 3 de nieuwe x-positie is x + 2 * de breedte
  fill(cell_3_Color);
  rect(startXpos+(2*cellWidth),startYpos,cellWidth, cellHeight);

  //cel 4 
  fill(cell_4_Color);
  rect(startXpos,startYpos+(1*cellHeight),cellWidth, cellHeight);

  //cel 5
  fill(cell_5_Color);
  rect(startXpos+(1*cellWidth),startYpos+(1*cellHeight),cellWidth, cellHeight);

  //cel 6
  fill(cell_6_Color);
  rect(startXpos+(2*cellWidth),startYpos+(1*cellHeight),cellWidth, cellHeight);

  //cel 7
  fill(cell_7_Color);
  rect(startXpos,startYpos+(2*cellHeight),cellWidth, cellHeight);

  //cel 8
  fill(cell_8_Color);
  rect(startXpos+(1*cellWidth),startYpos+(2*cellHeight),cellWidth, cellHeight);
   
  //cel 9
  fill(cell_9_Color);
  rect(startXpos+(2*cellWidth),startYpos+(2*cellHeight),cellWidth, cellHeight);   

  //controleren horizontaal
  if (cell_1_Color == cell_2_Color && cell_2_Color == cell_3_Color && cell_1_Color != "white") {
    console.log("horizontaal 1-2-3");
    winningColor = cell_1_Color;
    gameEnded = true;
  }
  else if (cell_4_Color == cell_5_Color && cell_5_Color == cell_6_Color && cell_4_Color != "white") {
    console.log("horizontaal 4-5-6");
    winningColor = cell_4_Color
    gameEnded = true;
  }
  else if (cell_7_Color == cell_8_Color && cell_8_Color == cell_9_Color && cell_7_Color != "white") {
    console.log("horizontaal 7-8-9");
    winningColor = cell_7_Color
    gameEnded = true;
  }

  //controleren vertikaal
  else if (cell_1_Color == cell_4_Color && cell_4_Color == cell_7_Color && cell_1_Color != "white") {
    console.log("vertikaal 1-4-7");
    winningColor = cell_1_Color;
    gameEnded = true;
  }

  else if (cell_2_Color == cell_5_Color && cell_5_Color == cell_8_Color && cell_2_Color != "white") {
    console.log("vertikaal 2-5-8");
    winningColor = cell_2_Color
    gameEnded = true;
  }

  else if (cell_3_Color == cell_6_Color && cell_6_Color == cell_9_Color && cell_3_Color != "white") {
    console.log("vertikaal 3-6-9");
    winningColor = cell_3_Color;
    gameEnded = true;
  }

  //controleren diagonaal
  else if (cell_1_Color == cell_5_Color && cell_5_Color == cell_9_Color && cell_1_Color != "white") {
    console.log("diagonaal 1-5-9");
    winningColor = cell_1_Color;
    gameEnded = true;
  }

  else if (cell_3_Color == cell_5_Color && cell_5_Color == cell_7_Color && cell_3_Color != "white") {
    console.log("diagonaal 3-5-7");
    winningColor = cell_3_Color;
    gameEnded = true;
  }

  //reset als alle vakjes een kleur hebben
  else if(cell_1_Color!="white" && cell_2_Color!="white" && cell_3_Color!="white" && cell_4_Color!="white" && cell_5_Color!="white" && cell_6_Color!="white" && cell_7_Color!="white" && cell_7_Color!="white" && cell_8_Color!="white" && cell_9_Color!="white"){
    console.log("Gelijkspel");
    winningColor = "none";
    gameEnded = true;
  }

  if(gameEnded == true){
    clickLocked = true;
    timer++;

    if (winningColor == "blue") {
      winnendeSpeler = "Speler 1 heeft gewonnen";
    }else if(winningColor == "red"){
      winnendeSpeler = "Speler 2 heeft gewonnen";
    }else{
      winnendeSpeler = "Het is gelijkspel";
    }
  
    if (timer > changeTime) {
      cell_1_Color = "white";
      cell_2_Color = "white";
      cell_3_Color = "white";
      cell_4_Color = "white";
      cell_5_Color = "white";
      cell_6_Color = "white";
      cell_7_Color = "white";
      cell_8_Color = "white";
      cell_9_Color = "white";
      timer = 0;
      winnendeSpeler = "?";
      clickLocked = false;
      cell_1_Locked = false;
      cell_2_Locked = false;
      cell_3_Locked = false;
      cell_4_Locked = false;
      cell_5_Locked = false;
      cell_6_Locked = false;
      cell_7_Locked = false;
      cell_8_Locked = false;
      cell_9_Locked = false;
      gameEnded = false;
    }
  }
}

function mousePressed(){
  //afvangen van mouseX-positie en y positie om te bepalen boven welke cell de muis is
  
  if(!clickLocked){
  //rij 1
    if((mouseX > startXpos && mouseX < startXpos+cellWidth) && (mouseY > startYpos && mouseY < startYpos + cellHeight) && cell_1_Locked == false){
      if (player1 == true && cell_1_Color != "blue" || player1 == true && cell_1_Color != "red"){
        cell_1_Color = "blue";
        player1 = false;
        player2 = true;
        
      }else if (player2 == true && cell_1_Color != "blue" || player2 == true && cell_1_Color != "red"){
        cell_1_Color = "red";
        player1 = true;
        player2 = false;
      }
      cell_1_Locked = true;
    }

    if((mouseX > startXpos+(1*cellWidth) && mouseX < startXpos+(2*cellWidth)) && (mouseY > startYpos && mouseY < startYpos + cellHeight) && cell_2_Locked == false){
      if (player1 == true && cell_2_Color != "blue" || player1 == true && cell_2_Color != "red"){
        cell_2_Color = "blue";
        player1 = false;
        player2 = true;
      }else if (player2 == true && cell_2_Color != "blue" || player2 == true && cell_2_Color != "red"){
        cell_2_Color = "red";
        player1 = true;
        player2 = false;
      }
      cell_2_Locked = true;
    }

    if((mouseX > startXpos+(2*cellWidth) && mouseX < startXpos+(3*cellWidth)) && (mouseY > startYpos && mouseY < startYpos + cellHeight) && cell_3_Locked == false){
      if (player1 == true && cell_3_Color != "blue" || player1 == true && cell_3_Color != "red"){
        cell_3_Color = "blue";
        player1 = false;
        player2 = true;
      }else if (player2 == true && cell_3_Color != "blue" || player2 == true && cell_3_Color != "red"){
        cell_3_Color = "red";
        player1 = true;
        player2 = false;
      }
      cell_3_Locked = true;
    }

    //rij 2
    if((mouseX > startXpos && mouseX < startXpos+cellWidth) && (mouseY > startYpos+cellHeight && mouseY < startYpos + 2 *cellHeight) && cell_4_Locked == false){
      if (player1 == true && cell_4_Color != "blue" || player1 == true && cell_4_Color != "red"){
        cell_4_Color = "blue";
        player1 = false;
        player2 = true;
      }else if (player2 == true && cell_4_Color != "blue" || player2 == true && cell_4_Color != "red"){
        cell_4_Color = "red";
        player1 = true;
        player2 = false;
      }
      cell_4_Locked = true;
    }

    if((mouseX > startXpos+(1*cellWidth) && mouseX < startXpos+(2*cellWidth)) && (mouseY > startYpos+cellHeight && mouseY < startYpos + 2*cellHeight) && cell_5_Locked == false){
      if (player1 == true && cell_5_Color != "blue" || player1 == true && cell_5_Color != "red"){
        cell_5_Color = "blue";
        player1 = false;
        player2 = true;
      }else if (player2 == true && cell_5_Color != "blue" || player2 == true && cell_5_Color != "red"){
        cell_5_Color = "red";
        player1 = true;
        player2 = false;
      }
      cell_5_Locked = true;
    }

    if((mouseX > startXpos+(2*cellWidth) && mouseX < startXpos+(3*cellWidth)) && (mouseY > startYpos+cellHeight && mouseY < startYpos + 2*cellHeight) && cell_6_Locked == false){
      if (player1 == true && cell_6_Color != "blue" || player1 == true && cell_6_Color != "red"){
        cell_6_Color = "blue";
        player1 = false;
        player2 = true;
      }else if (player2 == true && cell_6_Color != "blue" || player2 == true && cell_6_Color != "red"){
        cell_6_Color = "red";
        player1 = true;
        player2 = false;
      }
      cell_6_Locked = true;
    }

    //rij 3
    if((mouseX > startXpos && mouseX < startXpos+cellWidth) && (mouseY > startYpos+2* cellHeight && mouseY < startYpos + 3 *cellHeight) && cell_7_Locked == false){
      if (player1 == true && cell_7_Color != "blue" || player1 == true && cell_7_Color != "red"){
        cell_7_Color = "blue";
        player1 = false;
        player2 = true;
      }else if (player2 == true && cell_7_Color != "blue" || player2 == true && cell_7_Color != "red"){
        cell_7_Color = "red";
        player1 = true;
        player2 = false;
      }
      cell_7_Locked = true;
    }
    
    if((mouseX > startXpos+(1*cellWidth) && mouseX < startXpos+(2*cellWidth)) && (mouseY > startYpos+2*cellHeight && mouseY < startYpos + 3*cellHeight) && cell_8_Locked == false){
      if (player1 == true && cell_8_Color != "blue" || player1 == true && cell_8_Color != "red"){
        cell_8_Color = "blue";
        player1 = false;
        player2 = true;
      }else if (player2 == true && cell_8_Color != "blue" || player2 == true && cell_8_Color != "red"){
        cell_8_Color = "red";
        player1 = true;
        player2 = false;
      }
      cell_8_Locked = true;
    }
    
    if((mouseX > startXpos+(2*cellWidth) && mouseX < startXpos+(3*cellWidth)) && (mouseY > startYpos+2*cellHeight && mouseY < startYpos + 3*cellHeight) && cell_9_Locked == false){
      if (player1 == true && cell_9_Color != "blue" || player1 == true && cell_9_Color != "red"){
        cell_9_Color = "blue";
        player1 = false;
        player2 = true;
      }else if (player2 == true && cell_9_Color != "blue" || player2 == true && cell_9_Color != "red"){
        cell_9_Color = "red";
        player1 = true;
        player2 = false;
      }
      cell_9_Locked = true;
    }
  }
}