function getComputerChoice() {
  roll = Math.random();
  if (roll < 0.33) {
    return "rock";
  } else if (roll < 0.66) {
    return "paper";
  }
  return "scissors";
}

function getHumanChoice() {
  const validChoices = new Set(["rock", "paper", "scissors"]);

  choice = prompt("Enter your choice (rock, paper or scissors)").trim();
  while (!validChoices.has(choice.toLowerCase())) {
    choice = prompt("Invalid choice, please enter rock, paper, or scissors");
  }
  return choice;
}
function humanWon(humanChoice, compChoice) {
  if (humanChoice == "rock" && compChoice == "scissors") {
    return true;
  } else if (humanChoice == "paper" && compChoice == "rock") {
    return true;
  } else if (humanChoice == "scissors" && compChoice == "paper") {
    return true;
  }

  return false;
}
function playRound(humanChoice, compChoice, scores) {
  const roundResult = document.querySelector("p");
  if (humanChoice == compChoice) {
    roundResult.textContent = "It's a draw!";
    return scores;
  }

  if (humanWon(humanChoice, compChoice)) {
    roundResult.textContent = `You win! ${humanChoice} beats ${compChoice}`;
    scores[0]++;
  } else {
    roundResult.textContent = `You lost! ${compChoice} beats ${humanChoice}`;
    scores[1]++;
  }

  return scores;
}

function updateScores(scores) {
  if (scores[0] == 5 || scores[1] == 5) {
    const results = document.querySelector("h1");
    let wonOrLost = scores[0] > scores[1] ? "won" : "lost";
    results.textContent = `You ${wonOrLost}!\nFinal scores: You: ${scores[0]}, Computer: ${scores[1]}`;
    document.querySelectorAll("button").forEach((btn) => {
      btn.disabled = true;
    });
    return;
  }

  document.querySelector("h1").textContent =
    `Your score: ${scores[0]} Computer score: ${scores[1]}`;
}
function playGame() {
  buildUI();

  const btns = document.querySelectorAll("button");

  let humanScore = 0;
  let compScore = 0;
  btns[0].onclick = () => {
    scores = playRound("rock", getComputerChoice(), [humanScore, compScore]);
    humanScore = scores[0];
    compScore = scores[1];
    updateScores(scores);
  };
  btns[1].onclick = () => {
    playRound("paper", getComputerChoice(), humanScore, compScore);
  };
  btns[2].onclick = () => {
    playRound("scissors", getComputerChoice(), humanScore, compScore);
  };
}
function buildUI() {
  const rockBtn = document.createElement("button");
  const paperBtn = document.createElement("button");
  const scissorsBtn = document.createElement("button");

  rockBtn.textContent = "Rock";
  paperBtn.textContent = "Paper";
  scissorsBtn.textContent = "Scissors";

  const body = document.querySelector("body");

  body.appendChild(rockBtn);
  body.appendChild(paperBtn);
  body.appendChild(scissorsBtn);
  const results = document.querySelector("div");
  const resultsLine = document.createElement("h1");
  const roundResult = document.createElement("p");
  roundResult.textContent = "";
  resultsLine.textContent = `Your score: 0 Computer score: 0`;
  results.appendChild(resultsLine);
  results.appendChild(roundResult);
}
playGame();
