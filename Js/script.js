let rock = document.querySelector("#rock-btn");
let paper = document.querySelector("#paper-btn");
let scissor = document.querySelector("#scissor-btn");
let playerSelection;
let computerSelection;
let round = 0;
let playerScore = 0;
let computerScore = 0;

function Game() {
  round++;
  console.log(playRound(playerSelection, computerSelection));
  if (round == 5) {
    if (playerScore > computerScore) {
      console.log("Victory! You won the game.");
    } else {
      console.log("Defeat! You lost the game.");
    }
  }
}

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  return computerChoice == 0
    ? "rock"
    : computerChoice == 1
    ? "paper"
    : "scissor";
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
      return "Tie";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
      computerScore++;
      return "You Lose! paper beats rock";
    } else if (playerSelection == "rock" && computerSelection == "scissor") {
      playerScore++;
      return "You win! rock beats scissor";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
      playerScore++;
      return "You win! paper beats rock";
    } else if (playerSelection == "paper" && computerSelection == "scissor") {
      computerScore++;
      return "You lose! scissor beats paper";
    } else if (playerSelection == "scissor" && computerSelection == "rock") {
      computerScore++;
      return "You lose! rock beats scissor";
    } else if (playerSelection == "scissor" && computerSelection == "paper") {
      playerScore++;
      return "You win! scissor beats paper";
    }
  } else {
    return "Start a New Game.";
  }
}
