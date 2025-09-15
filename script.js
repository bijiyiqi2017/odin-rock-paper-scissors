const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultsDiv = document.getElementById('results');

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const computerChoiceIndex = Math.floor(Math.random() * choices.length);
  return choices[computerChoiceIndex];
}

/*  =======================
    UI button version
    ======================= */
function playGameRound(humanChoice) {
  const computerChoice = getComputerChoice();

  // Create a string to show the round result
  let roundResult = `You chose: ${humanChoice}\nComputer chose: ${computerChoice}\n`;

  if (humanChoice === computerChoice) {
    roundResult += "It's a tie!\n";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    roundResult += "You win this round!\n";
    humanScore++;
  } else {
    roundResult += "Computer wins this round.\n";
    computerScore++;
  }

  // Add running score
  roundResult += `Score => You: ${humanScore}, Computer: ${computerScore}`;

  // Show round result in the results div
  resultsDiv.textContent = roundResult;

  // Check if game is over
  if (humanScore === 5 || computerScore === 5) {
    if (humanScore > computerScore) {
      resultsDiv.textContent += `\n\n🏁 Game Over! 🎉 You win the game!`;
    } else {
      resultsDiv.textContent += `\n\n🏁 Game Over! 💻 The computer wins the game.`;
    }
    // Reset scores for a new game
    humanScore = 0;
    computerScore = 0;
  }
}

// Attach event listeners to buttons
rockButton.addEventListener('click', () => playGameRound('rock'));
paperButton.addEventListener('click', () => playGameRound('paper'));
scissorsButton.addEventListener('click', () => playGameRound('scissors'));
