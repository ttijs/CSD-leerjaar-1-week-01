function setup() {
    createCanvas(400, 400);
    let numCols = 8;
    let numRows = 8;
    drawChessboard(numRows, numCols);
  }
  
  function drawChessboard(rows, cols) {
    //console.log(width)
    let w = width / cols;
    let isWhite = true;
  
    let counterText = 0
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (isWhite) {
          fill(255);
        } else {
          fill(0);
        }
        rect(j * w, i * w, w, w);
        isWhite = !isWhite;

        counterText++;
        textSize(20)
        fill("red")
        text(counterText, j * w + 2, i * w +20);
      }
      isWhite = !isWhite; // Wissel rijen af
    }
  }
  