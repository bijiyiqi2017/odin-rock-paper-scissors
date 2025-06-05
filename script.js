function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const computerChoiceIndex = Math.floor(Math.random() * choices.length);
    return choices[computerChoiceIndex];
  }
  
  function getHumanChoice() {
    const userInput = prompt("Choose your item: type r for rock, p for paper, or s for scissors");
  
    switch (userInput?.toLowerCase()) {
      case "r":
        console.log("Excellent choice! You chose rock.");
        return "rock";
      case "p":
        console.log("Excellent choice! You chose paper.");
        return "paper";
      case "s":
        console.log("Excellent choice! You chose scissors.");
        return "scissors";
      default:
        console.log("Invalid choice. Please enter r, p, or s.");
        return null;
    }
  }
  
  function playGame() {
    let humanScore = 0;
    let computerScore = 0;
  
    function playRound(humanChoice, computerChoice) {
      if (!humanChoice) {
        console.log("Invalid move detected. Round skipped!");
        return;
      }
  
      humanChoice = humanChoice.toLowerCase();
      computerChoice = computerChoice.toLowerCase();
  
      console.log("You chose:", humanChoice);
      console.log("Computer chose:", computerChoice);
  
      if (humanChoice === computerChoice) {
        console.log("It's a tie!");
      } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
      ) {
        console.log("You win this round!");
        humanScore++;
      } else {
        console.log("Computer wins this round.");
        computerScore++;
      }
  
      console.log(`Score => You: ${humanScore}, Computer: ${computerScore}`);
      console.log("-------------------------------");
    }
  
    console.log("🎮 Let's play 5 rounds of Rock Paper Scissors!");
    for (let i = 1; i <= 5; i++) {
      console.log(`🎲 Round ${i}`);
      const human = getHumanChoice();
      const computer = getComputerChoice();
      playRound(human, computer);
    }
  
    console.log("🏁 Game Over!");
    if (humanScore > computerScore) {
      console.log("🎉 You win the game!");
    } else if (humanScore < computerScore) {
      console.log("💻 The computer wins the game.");
    } else {
      console.log("🤝 It's a tie!");
    }
  }
  
  // Start the game
  playGame();
  