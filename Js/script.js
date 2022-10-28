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

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice == 0) {
    gameplayC.textContent = "✊";
  } else if (computerChoice == 1) {
    gameplayC.textContent = "✋";
  } else {
    gameplayC.textContent = "✌︎";
  }
  return computerChoice == 0
    ? "rock"
    : computerChoice == 1
    ? "paper"
    : "scissor";
}

rock.addEventListener("click", function () {
  playerSelection = "rock";
  if (PlayOn) {
    Game();
    gameplayP.textContent = "✊";
  }
});

paper.addEventListener("click", function () {
  playerSelection = "paper";
  if (PlayOn) {
    Game();
    gameplayP.textContent = "✋";
  }
});

scissor.addEventListener("click", function () {
  playerSelection = "scissor";
  if (PlayOn) {
    Game();
    gameplayP.textContent = "✌︎";
  }
});

function playRound(playerSelection, computerSelection) {
  if (round <= 5) {
    computerSelection = getComputerChoice();
    if (playerSelection == computerSelection) {
      info.textContent = "Tie";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
      computerScore++;
      info.textContent = "You Lose! paper beats rock";
      scoreC.textContent = computerScore;
    } else if (playerSelection == "rock" && computerSelection == "scissor") {
      playerScore++;
      info.textContent = "You win! rock beats scissor";
      scoreP.textContent = playerScore;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
      playerScore++;
      info.textContent = "You win! paper beats rock";
      scoreP.textContent = playerScore;
    } else if (playerSelection == "paper" && computerSelection == "scissor") {
      computerScore++;
      info.textContent = "You lose! scissor beats paper";
      scoreC.textContent = computerScore;
    } else if (playerSelection == "scissor" && computerSelection == "rock") {
      computerScore++;
      info.textContent = "You lose! rock beats scissor";
      scoreC.textContent = computerScore;
    } else if (playerSelection == "scissor" && computerSelection == "paper") {
      playerScore++;
      info.textContent = "You win! scissor beats paper";
      scoreP.textContent = playerScore;
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
