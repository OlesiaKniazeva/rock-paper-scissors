const GAME_OPTIONS = ['rock', 'paper', 'scissors'];

const RESULTS = {
  TIE: 'tie',
  USER: 'user',
  COMPUTER: 'computer',
};

const resultBox = document.querySelector('.results-data');

const finishScore = 5;
const roundsBox = document.querySelector('.rounds-amount');
const scoreBox = document.querySelector('div.score-data');
const computerChoice = document.querySelector('div.computer-choice-image');

game();

function game() {
  let userScore = 0;
  let computerScore = 0;
  let roundsPlayed = 0;

  roundsBox.textContent = `Let's play ${gameRounds} rounds`;

  const options = document.querySelectorAll('button.option');
  console.log(options);
  options.forEach((option) => {
    option.addEventListener('click', () => {
      if (roundsPlayed < gameRounds) {
        let result = playRound(option);

        switch (result) {
          case RESULTS.USER:
            userScore++;
            break;
          case RESULTS.COMPUTER:
            computerScore++;
          default:
            break;
        }
        roundsPlayed++;
        scoreBox.textContent = `You ${userScore} : Computer ${computerScore}`;
      }
    });
  });

  if (roundsPlayed >= 5) {
    if (userScore > computerScore) {
      showTheMessage('You are the winner of our competition!');
    } else {
      showTheMessage('Computer is the winner of our competition!');
    }
  }
}

function playRound(option) {
  console.log(option);

  let playerSelection = option.className.split(' ')[0];
  let computerSelection = getComputerChoice();

  console.log(
    `Player option: ${playerSelection}, Computer option: ${computerSelection}`,
  );
  showComputerChoice(computerSelection);
  if (playerSelection === computerSelection) {
    showTheMessage("It's a tie, let's replay the round");
    return RESULTS.TIE;
  }

  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    showTheMessage(`You win! ${playerSelection} beats ${computerSelection}`);
    return RESULTS.USER;
  } else {
    showTheMessage(`You lose! ${computerSelection} beats ${playerSelection}`);
    return RESULTS.COMPUTER;
  }
}

function showComputerChoice(computerChoice) {
  const image = document.querySelector('.computer-choice-image img');

  switch (computerChoice) {
    case 'rock':
      image.src = 'images/rock2.jpg';
      image.alt = 'rock-option';
      break;
    case 'scissors':
      image.src = 'images/scissors2.jpg';
      image.alt = 'scissors-option';
    case 'paper':
      image.src = 'images/paper2.jpg';
      image.alt = 'paper-option';
    default:
      break;
  }
}

function showTheMessage(message) {
  console.log(message);
  resultBox.textContent = message;
}

function getComputerChoice() {
  let choice = Math.floor(Math.random() * GAME_OPTIONS.length);
  return GAME_OPTIONS[choice];
}
