//declaring variables
const boardgame = [];
let whiteOut = 0;
let blackOut = 0;
let isWhiteTurn = true;
const dice = [];
//main part of game
initialingGame();
rollingDice();
move("white", 1, 5);
console.log(boardgame);
// declaring functions
function initialingGame() {
  for (i = 0; i < 26; i++) {
    boardgame[i] = { type: "empty", qty: 0 };
  }
  boardgame[1] = { type: "white", qty: 2 };
  boardgame[6] = { type: "black", qty: 5 };
  boardgame[8] = { type: "black", qty: 3 };
  boardgame[12] = { type: "white", qty: 5 };
  boardgame[13] = { type: "black", qty: 5 };
  boardgame[17] = { type: "white", qty: 3 };
  boardgame[19] = { type: "white", qty: 5 };
  boardgame[24] = { type: "black", qty: 2 };

  whoPlayesfirst();
}

function move(color, cellnumber, diceNumber) {
  if (
    color === boardgame[cellnumber + diceNumber].type ||
    boardgame[cellnumber + diceNumber].type === "empty"
  ) {
    if (color === "white") {
      boardgame[cellnumber].qty--;
      boardgame[cellnumber + diceNumber].qty++;
      boardgame[cellnumber + diceNumber].type = "white";
    } else if (color === "black") {
      boardgame[cellnumber].qty--;
      boardgame[cellnumber - diceNumber].qty++;
      boardgame[cellnumber + diceNumber].type = "black";
    } else console.log("error");
  } else console.log("cant move !");
}

function rollingDice() {
  dice[0] = Math.floor(Math.random() * 6) + 1;
  dice[1] = Math.floor(Math.random() * 6) + 1;
}

function whoPlayesfirst() {
  //dice[0] -> black
  rollingDice();
  console.log(dice);
  if (dice[0] === dice[1]) {
    console.log("draw !");
    whoPlayesfirst();
  } else if (dice[0] < dice[1]) console.log("black starts !");
  else console.log("white Starts !");
}
