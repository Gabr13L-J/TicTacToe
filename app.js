let gameState = {
  players: ["x", "o"],
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  activePlayer: 0,
};
// maybe a dozen or so helper functions for tiny pieces of the interface
function updateState() {
  //we need to update gameState.board
}
function updateHTML() {
  //update what the user sees based on new gameState
}
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
//use sudoku principles here
// get all rows and check
//use checkXorO to check
// get all columns and check them
//use checkXorO to check
// get all diagonal and check those
//use checkXorO to check

function checkXorO() {
  //if x won. return x.
  //if o won. return o.
  //if no one won then return false
}
// listeners
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
    // update state, maybe with another dozen or so helper functions...
    // updateState();
    // updateHTML();
    //checkwin should return the winner. or false.
    let win = checkWin();
    if (win) {
      if (gameState.activePlayer == 1) {
        document.getElementById("log").innerHTML = "X wins";
      } else {
        document.getElementById("log").innerHTML = "O wins";
      }
      //do winner things here
    } else {
      if (isFull()) {
        document.getElementById("log").innerHTML = "Draw";
      }
      //change activePlayer
    }
  }
}
function startGame(event) {
  event.preventDefault();
  console.log (document.getElementById("player1").value);
  document.getElementById("name1").innerHTML =
    document.getElementById("player1").value;
    document.getElementById("name2").innerHTML =
    document.getElementById("player2").value;
  // console.log("startGame", player1.value);
}
board.addEventListener("click", onBoardClick);
document.getElementById("start").addEventListener("click", startGame);
