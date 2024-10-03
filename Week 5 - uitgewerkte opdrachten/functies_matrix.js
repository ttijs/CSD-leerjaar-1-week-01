function setup() {
    createCanvas(400, 400);
    let numRows = 5;
    let numCols = 5;
    let grid = createNumberGrid(numRows, numCols);
    displayGrid(grid, numRows, numCols);
  }
  
  function createNumberGrid(rows, cols) {
    let grid = [];
    let num = 1;
  
    for (let i = 0; i < rows; i++) {
      grid[i] = [];
      for (let j = 0; j < cols; j++) {
        grid[i][j] = num;
        num++;
      }
    }
    return grid;
  }
  
  function displayGrid(grid, rows, cols) {
    let cellSize = width / cols;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        let x = j * cellSize;
        let y = i * cellSize;
        rect(x, y, cellSize, cellSize);
        textSize(20);
        fill(0);
        textAlign(CENTER, CENTER);
        text(grid[i][j], x + cellSize / 2, y + cellSize / 2);
      }
    }
  }
  