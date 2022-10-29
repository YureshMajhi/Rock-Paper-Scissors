let options = ["rock", "paper", "scissor"];

let rock = document.querySelector("#rock-btn");
let paper = document.querySelector("#paper-btn");
let scissor = document.querySelector("#scissor-btn");
let playerSelection;
let computerSelection;
let round = 0;
let playerScore = 0;
let computerScore = 0;
let PlayOn = true;

let info = document.querySelector(".sub-info");
let scoreP = document.querySelector("#scoreP");
let scoreC = document.querySelector("#scoreC");
let gameplayP = document.querySelector(".gameplayP");
let gameplayC = document.querySelector(".gameplayC");
let roundNum = document.querySelector(".round-num");
let restart = document.querySelector("#new-game");
let result = document.querySelector("#result");

function Game() {
  if (PlayOn) {
    if (playerSelection == "rock") {
      gameplayP.textContent = "✊";
    } else if (playerSelection == "paper") {
      gameplayP.textContent = "✋";
    } else {
      gameplayP.textContent = "✌︎";
    }

    round++;
    roundNum.textContent = round;
    console.log(playRound(playerSelection, computerSelection));
    if (round == 5) {
      if (playerScore > computerScore) {
        result.textContent = "Congratulations! You won the game";
      } else if (computerScore > playerScore) {
        result.textContent = "Defeat! You lost the game";
      } else {
        result.textContent = "So close! its a Tie.";
      }
      PlayOn = false;
    }
  }
}

function getComputerChoice() {
  let computerChoice = options[Math.floor(Math.random() * options.length)];
  if (computerChoice == "rock") {
    gameplayC.textContent = "✊";
  } else if (computerChoice == "paper") {
    gameplayC.textContent = "✋";
  } else {
    gameplayC.textContent = "✌︎";
  }
  return computerChoice;
}

rock.addEventListener("click", function () {
  playerSelection = "rock";
  Game();
});

paper.addEventListener("click", function () {
  playerSelection = "paper";
  Game();
});

scissor.addEventListener("click", function () {
  playerSelection = "scissor";
  Game();
});

function playRound(playerSelection, computerSelection) {
  if (round <= 5) {
    computerSelection = getComputerChoice();
    if (playerSelection == computerSelection) {
      info.textContent = "Tie";
    } else if (
      (playerSelection == "rock" && computerSelection == "scissor") ||
      (playerSelection == "paper" && computerSelection == "rock") ||
      (playerSelection == "scissor" && computerSelection == "paper")
    ) {
      info.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
      playerScore++;
      scoreP.textContent = playerScore;
    } else {
      info.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
      computerScore++;
      scoreC.textContent = computerScore;
    }
  }
}

restart.addEventListener("click", function () {
  round = 0;
  playerScore = 0;
  computerScore = 0;
  roundNum.textContent = round;
  info.textContent = "A game of Rock Paper Scissor";
  gameplayC.textContent = "";
  gameplayP.textContent = "";
  scoreP.textContent = playerScore;
  scoreC.textContent = computerScore;
  result.textContent = "";
  PlayOn = true;
});
