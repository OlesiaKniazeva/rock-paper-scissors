const GAME_OPTIONS = ["rock", "paper", "scissors"];

const RESULTS = {
  TIE: "tie",
  USER: "user",
  COMPUTER: "computer",
};

const RESULT_BOX = document.querySelector(".results");

game();

function game() {
  const options = document.querySelectorAll("button.option");
  console.log(options);
  options.forEach(playRound);
}

function playRound(option) {
  let playerSelection;

  option.addEventListener("click", (event) => {
    playerSelection = event.currentTarget.className.split(" ")[0];
    console.log(event.currentTarget);
    let computerSelection = getComputerChoice();
    
    console.log(
      `Player option: ${playerSelection}, Computer option: ${computerSelection}`
    );
    if (playerSelection === computerSelection) {
      showTheMessage("It's a tie, let's replay the round");
      return RESULTS.TIE;
    }

    if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      showTheMessage(`You win! ${playerSelection} beats ${computerSelection}`);
      return RESULTS.USER;
    } else {
      showTheMessage(`You lose! ${computerSelection} beats ${playerSelection}`);
      return RESULTS.COMPUTER;
    }
  });
}

function showTheMessage(message) {
  console.log(message);
  RESULT_BOX.textContent = message;
}

function getComputerChoice() {
  let choice = Math.floor(Math.random() * GAME_OPTIONS.length);
  return GAME_OPTIONS[choice];
}

//function game() {
//  const gameRounds = 5;
//  let finishedRounds = 0;
//  let computerScore = 0;
//  let userScore = 0;
//  let roundResult;

//  startTheGame(gameRounds);
//  while (finishedRounds < gameRounds) {
//    let playerSelection = getUserInput();
//    let userMessageAfterSelection = `Player Selected: ${playerSelection}`;
//    showTheMessage(userMessageAfterSelection);

//    let computerSelection = getComputerChoice();
//    let computerMessageAfterSelection = `Computer Selected: ${computerSelection}`;
//    showTheMessage(computerMessageAfterSelection);

//    roundResult = playRound(playerSelection, computerSelection);

//    switch (roundResult) {
//      case RESULTS.TIE:
//        break;
//      case RESULTS.USER:
//        userScore++;
//        finishedRounds++;
//        break;
//      case RESULTS.COMPUTER:
//        computerScore++;
//        finishedRounds++;
//        break;
//      default:
//        break;
//    }

//    if (userScore === 3 || computerScore === 3) {
//      break;
//    }

//    showTheMessage(
//      `User Score is: ${userScore}, Computer score is: ${computerScore}
//       Played rounds: ${finishedRounds}`
//    );
//  }

//  if (userScore > computerScore) {
//    showTheMessage("You are the winner of our competition!");
//  } else {
//    showTheMessage("Computer is the winner of our competition!");
//  }
//}
