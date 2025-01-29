console.log("hello, world");

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

function playRound(humanChoice, compChoice) {
  if (humanChoice == "rock" && compChoice == "scissors") {
    return true;
  } else if (humanChoice == "paper" && compChoice == "rock") {
    return true;
  } else if (humanChoice == "scissors" && compChoice == "paper") {
    return true;
  }
  return false;
}
function playGame() {
  let humanScore = 0;
  let compScore = 0;
  for (let i = 0; i < 5; i++) {
    choice = getHumanChoice();
    compChoice = getComputerChoice();

    if (choice == compChoice) {
      console.log("It's a draw!");
      continue;
    }

    if (playRound(choice, compChoice)) {
      console.log(`You win! ${choice} beats ${compChoice}`);
      humanScore++;
    } else {
      console.log(`You lost! ${compChoice} beats ${choice}`);
      compScore++;
    }
  }
  if (humanScore == compScore) {
    console.log(`Its a tie! both players have ${humanScore}`);
    return;
  }
  console.log(
    `You ${humanScore > compScore ? "won" : "lost"}!\nFinal scores: You: ${humanScore}, Computer: ${compScore}`,
  );
}
playGame();
