const gameOptions = ['rock', 'paper', 'scissors'];

game();

function game() {
  const gameRounds = 5;

  //startTheGame(gameRounds);
  //let playerSelection = getUserInput();
  
  //let userMessageAfterSelection = `Player Selected ${playerSelection}`;
  //showTheMessage(userMessageAfterSelection);
  
  let computerSelection = getComputerChoice();
  let computerMessageAfterSelection = `Computer Selected ${computerSelection}`;
  showTheMessage(computerMessageAfterSelection);

  //for (let i = 0; i < gameRounds; ++i) {
  //  const playerSelection = "rock";
  //  const computerSelection = getComputerChoice();
  //  playRound(playerSelection, computerSelection);
  //}
}


function getComputerChoice() {
  
  let choice = Math.floor(Math.random() * gameOptions.length);
  return gameOptions[choice];
}

function playRound(playerSelection, computerSelection) {}

function getUserInput() {
  const messageForUser =
    "User it's your turn. Tell me your choice. Rock, paper or scissors?";

  showTheMessage(messageForUser);
  let userInput = readUserInput();
  return userInput;
}

function readUserInput() {
  const readline = require("readline");

  const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  let answer;
  
  r1.question("Choice? ", function (answer) {
    answer = answer;
    r1.close();
  });
  return answer;
}

function showTheMessage(message) {
  console.log(message);
  console.log("\n");
}

function startTheGame(gameRounds) {
  const introductionWords = `We are starting our Rock-Paper-Scissors game tour.There will be ${gameRounds} game rounds! 
  Tour against computer is OOOOpend!!!!`;

  showTheMessage(introductionWords);
}
