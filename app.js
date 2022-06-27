let gameState = {
  players: ["x", "o"],
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  activePlayer: 0,
};

function checkWin() {
  return getRow() || getColumn() || getDiagonalLeft() || getDiagonalRight();
}

function getRow() {
  for (let i = 0; i < 3; i++) {
    if (
      gameState.board[i][0] == "X" &&
      gameState.board[i][1] == "X" &&
      gameState.board[i][2] == "X"
    ) {
      return true;
    }
    if (
      gameState.board[i][0] == "O" &&
      gameState.board[i][1] == "O" &&
      gameState.board[i][2] == "O"
    ) {
      return true;
    }
  }
  return false;
}
function getColumn() {
  for (let i = 0; i < 3; i++) {
    if (
      gameState.board[0][i] == "X" &&
      gameState.board[1][i] == "X" &&
      gameState.board[2][i] == "X"
    ) {
      return true;
    }
    if (
      gameState.board[0][i] == "O" &&
      gameState.board[1][i] == "O" &&
      gameState.board[2][i] == "O"
    ) {
      return true;
    }
  }
  return false;
}
function getDiagonalLeft() {
  if (
    gameState.board[0][0] == "X" &&
    gameState.board[1][1] == "X" &&
    gameState.board[2][2] == "X"
  ) {
    return true;
  }
  if (
    gameState.board[0][0] == "O" &&
    gameState.board[1][1] == "O" &&
    gameState.board[2][2] == "O"
  ) {
    return true;
  }
  return false;
}
function getDiagonalRight() {
  if (
    gameState.board[0][2] == "X" &&
    gameState.board[1][1] == "X" &&
    gameState.board[2][0] == "X"
  ) {
    return true;
  }
  if (
    gameState.board[0][2] == "O" &&
    gameState.board[1][1] == "O" &&
    gameState.board[2][0] == "O"
  ) {
    return true;
  }
  return false;
}
function includesThree() {}
function isFull() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (gameState.board[i][j] == null) {
        return false;
      }
    }
  }
  return true;
}

function onBoardClick(event) {
  let row = event.target.id.charAt(0);
  let col = event.target.id.charAt(1);
  if (gameState.board[row][col] == null) {
    if (gameState.activePlayer == 0) {
      event.target.innerHTML = "X";
      gameState.board[row][col] = "X";
      console.log(gameState.board);
      gameState.activePlayer = 1;
    } else {
      event.target.innerHTML = "O";
      gameState.board[row][col] = "O";
      console.log(gameState.board);
      gameState.activePlayer = 0;
    }
    
    let win = checkWin();
    if (win) {
      board.removeEventListener("click", onBoardClick);
      if (gameState.activePlayer == 1) {
        document.getElementById("log").innerHTML = "X wins";
      } else {
        document.getElementById("log").innerHTML = "O wins";
      }
    
    } else {
      if (isFull()) {
        document.getElementById("log").innerHTML = "Draw";
      }

    }
  }
}
function startGame(event) {
  event.preventDefault();
  console.log(document.getElementById("player1").value);
  document.getElementById("name1").innerHTML =
    document.getElementById("player1").value;
  document.getElementById("name2").innerHTML =
    document.getElementById("player2").value;
  board.addEventListener("click", onBoardClick);
  // console.log("startGame", player1.value);
}
document.getElementById("start").addEventListener("click", startGame);
