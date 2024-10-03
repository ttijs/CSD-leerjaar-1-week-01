//matrix van getallen
function setup() {
  createCanvas(400, 400);
  let num = 1;

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      let x = j * 80;
      let y = i * 80;
      rect(x, y, 80, 80);
      textSize(32);
      fill(0);
      textAlign(CENTER, CENTER);
      text(num, x + 40, y + 40);
      num++;
    }
  }
}

//schaakbord
function setup() {
  createCanvas(400, 400);
  let w = width / 8;
  let isWhite = true;

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (isWhite) {
        fill(255);
      } else {
        fill(0);
      }
      rect(j * w, i * w, w, w);
      isWhite = !isWhite;
    }
    isWhite = !isWhite; // Wissel rijen af
  }
}

//dambord
function setup() {
  createCanvas(400, 400);
  let w = width / 10;
  let isBlack = true;

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (isBlack) {
        fill(0);
      } else {
        fill(255);
      }
      rect(j * w, i * w, w, w);
      isBlack = !isBlack;
    }
    if (i % 2 === 0) {
      isBlack = !isBlack; // Wissel de eerste kolom af
    }
  }
}
