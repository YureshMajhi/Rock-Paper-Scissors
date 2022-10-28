let rock = document.querySelector("#rock-btn");
let paper = document.querySelector("#paper-btn");
let scissor = document.querySelector("#scissor-btn");
let playerSelection;
let computerSelection;

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  return computerChoice == 0
    ? "rock"
    : computerChoice == 1
    ? "paper"
    : "scissor";
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Tie";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return "You Lose! paper beats rock";
  } else if (playerSelection == "rock" && computerSelection == "scissor") {
    return "You win! rock beats scissor";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You win! paper beats rock";
  } else if (playerSelection == "paper" && computerSelection == "scissor") {
    return "You lose! scissor beats paper";
  } else if (playerSelection == "scissor" && computerSelection == "rock") {
    return "You lose! rock beats scissor";
  } else if (playerSelection == "scissor" && computerSelection == "paper") {
    return "You win! scissor beats paper";
  }
}

rock.addEventListener("click", function () {
  playerSelection = "rock";
  computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
});

paper.addEventListener("click", function () {
  playerSelection = "paper";
  computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
});

scissor.addEventListener("click", function () {
  playerSelection = "scissor";
  computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
});

console.log("check");
