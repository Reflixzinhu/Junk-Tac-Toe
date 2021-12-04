document.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});
let textAndButton = document.getElementById("textAndButton");
let container = document.getElementById("container");

function handleClick(event) {
  let square = event.target;
  let position = square.id;
  let finalText = document.getElementById("finalText");

  console.log(position);

  if (handleMove(position)) {
    setTimeout(() => {
      textAndButton.classList.remove("hide");
      container.classList.add("hide");
      if (isWin() === true) {
        finalText.innerHTML = `Jogador ${playerTurn + 1} venceu.`;
        updateScore(playerTurn);
      } else {
        finalText.innerHTML = `O jogo empatou.`;
      }
    }, 200);
  }
  updateSquare(position);
}

let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");

function updateScore(player) {
  player === 0 ? score[0]++ : score[1]++;

  player1.innerHTML = `😡: ${score[0]}`;
  player2.innerHTML = `😳: ${score[1]}`;
}

function updateSquare(position) {
  let square = document.getElementById(position.toString());
  let symbol = board[position];
  square.innerHTML = `<div class='${symbol}'></div>`;
}

function resetSquares() {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    let position = square.id;
    let symbol = board[position];
    if (symbol != "") {
      square.innerHTML = ``;
    }
  });
}

let test = document.getElementById("restartButton");

function restartButton() {
  resetSquares();
  restartGame();
  textAndButton.classList.add("hide");
  container.classList.remove("hide");
}

function restartScore() {
  player1.innerHTML = `😡: 0`;
  player2.innerHTML = `😳: 0`;
  resetScore();
}
