//Sequencia
//Array com as cores
//Número aleatório (gerado automaticamente)

let gameSequence = [];
let playerSequence = [];
let playing = false;
let showingSequence = false;
let highestScore = 0;
let score = 0;

let colors = ["green", "yellow", "red", "blue"];

function chooseRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function clickButton() {
  if (playing) {
    endGame();
  } else {
    startGame();
  }
}

function startGame() {
  hideScore();
  playing = true;
  const startButton = document.getElementById("start");
  startButton.innerText = "Parar";
  round();

}

function round() {
  addColorToSequence();
  showColors();
}

//adiciona mais uma cor a sequência do jogo
function addColorToSequence() {
  const i = chooseRandomNumber(0, 3);
  const color = colors[i];
  gameSequence.push(color);
}

//mostrar toda a sequencia para o usuário
function showColors() {
  showingSequence = true;
  let i = 0;
  const interval = setInterval(function () {
    showPad(gameSequence[i]);
    i++;
    if (i >= gameSequence.length) {
      showingSequence = false;
      clearInterval(interval);
    }
  }, 1250);
}

//função para mostrar (trocar o fundo) do pad na tela
function showPad(color) {
  const colorClass = "color-" + color;
  const pad = document.getElementsByClassName(colorClass)[0];
  pad.classList.add("active");
  setTimeout(function () {
    pad.classList.remove("active");
  }, 600);
}

//quando o jogador clica em um pad, para adicionar uma cor a sequencia do jogador
function addColor(color) {
  if (!showingSequence) {
    playerSequence.push(color);
    showPad(color);
    checkSequence();
  }
}

//verifica se a sequencia que o jogador inseriu está correta, caso sim, o jogo continua, caso não, o jogo termina
function checkSequence() {
  for (let i = 0; i < playerSequence.length; i++) {
    if (playerSequence[i] !== gameSequence[i]) {
      endGame();
      return;
    }
  }
  if (playerSequence.length === gameSequence.length) {
    showResults(); 
    //next Round
    score = playerSequence.length;
    playerSequence = [];
    setTimeout(function () {
      hideScore();
      round(); 
      
    }, 1000);
  }
}

//finaliza o jogo
function endGame() {
  playing = false;
  if (score > highestScore) {
    highestScore = score;
  }
  showScore();
  playerSequence = [];
  gameSequence = [];
  score = 0;
  const startButton = document.getElementById("start");
  startButton.innerText = "Jogar Novamente";
}
function showResults() {
  const result = document.createElement("h3");
  result.innerText = 'Correto !';
  const mostrarPlacar = document.getElementById("score");
  mostrarPlacar.appendChild(result);
}

//mostra o score do jogo no final
function showScore() {
  const pontuacao = document.createElement("p");
  pontuacao.innerText = "Sua pontuação nesse jogo: " + score;
  const recorde = document.createElement("p");
  recorde.innerText = "Seu recorde é: " + highestScore;
  const tenteNovamente = document.createElement("p");
  tenteNovamente.innerText = "Sequência foi errada, tente novamente!";
  const mostrarPlacar = document.getElementById("score");
  mostrarPlacar.appendChild(pontuacao);
  mostrarPlacar.appendChild(recorde);
  mostrarPlacar.appendChild(tenteNovamente);
}

function hideScore() {
  document.getElementById("score").innerHTML = "";
}

document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("start").addEventListener("click", function () {
    clickButton();
  });
  document
    .getElementsByClassName("color-green")[0]
    .addEventListener("click", function () {
      addColor("green");
    });
  document
    .getElementsByClassName("color-red")[0]
    .addEventListener("click", function () {
      addColor("red");
    });
  document
    .getElementsByClassName("color-yellow")[0]
    .addEventListener("click", function () {
      addColor("yellow");
    });
  document
    .getElementsByClassName("color-blue")[0]
    .addEventListener("click", function () {
      addColor("blue");
    });
});
