import Game from "./game.js";

let game = undefined;
const clickTargets = document.getElementById("click-targets");
function updateUI() {
  if (game === undefined) {
    document.getElementById("board-holder").classList.add("is-invisble");
    const gameName = document.getElementById("game-name");
    gameName.innerHTML = game.getName();
  } else {
    const gameName = document.getElementById("game-name");
    gameName.innerHTML = game.getName();
    document.getElementById("board-holder").classList.remove("is-invisble");
  }
  if(game.currentPlayer === 1){
    clickTargets.classList.add('red');
    clickTargets.classList.remove('black');
  }
  else{
    clickTargets.classList.add('black')
    clickTargets.classList.remove('red');
  }
}

function updateButton() {
  const player1Name = document.getElementById("player-1-name").value;
  const player2Name = document.getElementById("player-2-name").value;

  const isGameReady = player1Name.length > 0 && player2Name.length > 0;
  document.getElementById("new-game").disabled = !isGameReady;
}

window.addEventListener("DOMContentLoaded", (event) => {
  const player1Name = document.getElementById("player-1-name");
  const player2Name = document.getElementById("player-2-name");

  player1Name.addEventListener("keyup", (event) => {
    updateButton();
  });

  player2Name.addEventListener("keyup", (event) => {
    updateButton();
  });

  const newGame = document.getElementById("new-game");

  newGame.addEventListener("click", (event) => {
    game = new Game(player1Name.value, player2Name.value);

    updateUI();
  });
  clickTargets.addEventListener("click", (event) => {
    game.playInColumn();
    updateUI();
  })

});
