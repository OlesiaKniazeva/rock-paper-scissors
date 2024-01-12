const gameOptions = ["rock", "paper", "scissors"];
const prompt = require("prompt-sync")({ sigint: true });


game();

function game() {
  const gameRounds = 5;
  let finishedRounds = 0;
  let computerScore = 0;
  let userScore = 0;
  let roundResult;

  startTheGame(gameRounds);
  while (finishedRounds < gameRounds) {
    let playerSelection = getUserInput();
    let userMessageAfterSelection = `Player Selected: ${playerSelection}`;
    showTheMessage(userMessageAfterSelection);

    let computerSelection = getComputerChoice();
    let computerMessageAfterSelection = `Computer Selected: ${computerSelection}`;
    showTheMessage(computerMessageAfterSelection);

    roundResult = playRound(playerSelection, computerSelection);
    
    switch (roundResult) {
      case "tie":
        break;
      case "user":
          userScore++;
          finishedRounds++;
        break;
      case "computer":
        computerScore++;
        finishedRounds++;
        break;
      default:
        break;
    } 
  }
  
  
}

function getComputerChoice() {
  let choice = Math.floor(Math.random() * gameOptions.length);
  return gameOptions[choice];
}

function playRound(playerSelection, computerSelection) {
  
let tieMessage = "It's a tie, let's replay the round";

  if (playerSelection === computerSelection) {
    showTheMessage(tieMessage);
    return 'tie';
  }
  
  if (playerSelection === 'rock' && computerSelection === 'scissors' ||
  playerSelection === 'paper' && computerSelection === 'rock' ||
  playerSelection === 'scissors' && computerSelection === 'paper') {
    showTheMessage(`You win ${playerSelection} beats ${computerSelection}`);
    return 'user';
  } else {
    showTheMessage(`You lose ${computerSelection} beats ${playerSelection}`);
    return 'computer';
  }
    
}

function getUserInput() {
  let answer;

  answer = prompt(
    "User it's your turn. Tell me your choice. Rock, paper or scissors? > "
  );

  for (;;) {
    if (gameOptions.includes(answer.toLowerCase())) {
      return answer;
    }

    answer = prompt(
      "Let's choose the right option. Rock, paper or scissors? > "
    );
  }
}

function showTheMessage(message) {
  console.log(message);
  //console.log("\n");
}

function startTheGame(gameRounds) {
  const introductionWords = `We are starting our Rock-Paper-Scissors game tour.There will be ${gameRounds} game rounds! 
  Tour against computer is OOOOpend!!!!`;

  showTheMessage(introductionWords);
}
