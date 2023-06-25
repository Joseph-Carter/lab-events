function makeBoard() {
    for (i = 0; i < 9; i++) {
      let boardBox = document.createElement("div");
      boardBox.classList.add("square");
      boardBox.classList.add("empty");
      let ticTacToe = document.querySelector(".tic-tac-toe");
      ticTacToe.append(boardBox);
      makeMove(boardBox);
    }
  }
  
  let currentMarker = "X";
  
  function makeMove(gameSpace) {
    gameSpace.addEventListener("click", (event) => {
      if (gameSpace.classList.contains("empty")) {
        gameSpace.textContent = currentMarker;
        currentMarker === "O" ? (currentMarker = "X") : (currentMarker = "O");
        gameSpace.classList.remove("empty");
      }
    });
  }
  
  let resetButton = document.querySelector("button");
  
  function reset() {
    let gameSquares = document.querySelectorAll(".square");
    gameSquares.forEach((square) => {
      square.remove();
    });
    makeBoard();
  }
  
  resetButton.addEventListener("click", (event) => {
    reset();
  });
  
  makeBoard();