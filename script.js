const GAME_OPTIONS = ['rock', 'paper', 'scissors'];

const RESULTS = {
  TIE: 'tie',
  USER: 'user',
  COMPUTER: 'computer',
};

const resultBox = document.querySelector('.results-data');

const FINISH_SCORE = 5;

const roundsBox = document.querySelector('.rounds-amount');
const scoreBox = document.querySelector('div.score-data');
const computerChoiceDiv = document.querySelector('div.computer-choice-image');
const buttonDiv = document.querySelector('.play-new-game');
const options = document.querySelectorAll('button.option');

game();

function game() {
  let userScore = 0;
  let computerScore = 0;

  roundsBox.textContent = `Let's play till ${FINISH_SCORE} points`;

  options.forEach((option) => {
    option.addEventListener('click', () => {
      if (userScore < FINISH_SCORE && computerScore < FINISH_SCORE) {
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
        scoreBox.textContent = `You ${userScore} : Computer ${computerScore}`;
      }

      if (userScore >= FINISH_SCORE || computerScore >= FINISH_SCORE) {
        if (userScore >= FINISH_SCORE) {
          showTheMessage('You are the winner of our competition!');
        } else if (computerScore >= FINISH_SCORE) {
          showTheMessage('Computer is the winner of our competition!');
        }
        let button = createResetButton();

        button.addEventListener('click', () => {
          resetTheGame();
          userScore = 0;
          computerScore = 0;
        });
      }
    });
  });
}

function createResetButton() {
  const existingButton = buttonDiv.querySelector('button');
  if (existingButton) {
    return existingButton;
  }

  const button = document.createElement('button');
  button.textContent = 'Play New Game';

  buttonDiv.appendChild(button);
  return button;
}

function resetTheGame() {
  scoreBox.textContent = `You 0 : Computer 0`;
  showTheMessage('');

  const button = buttonDiv.querySelector('button');
  buttonDiv.removeChild(button);

  const computerImage = computerChoiceDiv.querySelector('img');
  computerChoiceDiv.removeChild(computerImage);
}

function resetAllSelections() {
  options.forEach((option) => {
    option.classList.remove('selected');
  });
}

function showPlayerSelection(option) {
  resetAllSelections();
  option.classList.add('selected');
}

function playRound(option) {
  console.log(option);

  let playerSelection = option.className.split(' ')[0];
  showPlayerSelection(option);

  let computerSelection = getComputerChoice();

  console.log(
    `Player option: ${playerSelection}, Computer option: ${computerSelection}`,
  );

  showComputerChoice(computerSelection);

  if (playerSelection === computerSelection) {
    showTheMessage("It's a tie, let's play one more time!");
    return RESULTS.TIE;
  }

  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    showTheMessage(
      `You win the round! ${playerSelection} beats ${computerSelection}`,
    );
    return RESULTS.USER;
  } else {
    showTheMessage(
      `You lose the round! ${computerSelection} beats ${playerSelection}`,
    );
    return RESULTS.COMPUTER;
  }
}

function showComputerChoice(computerChoice) {
  let computerImage = computerChoiceDiv.querySelector('img');

  if (!computerImage) {
    computerImage = document.createElement('img');
    computerChoiceDiv.append(computerImage);
  }

  switch (computerChoice) {
    case 'rock':
      computerImage.src = './images/rock2.jpg';
      computerImage.alt = 'rock-option';
      break;
    case 'scissors':
      computerImage.src = './images/scissors2.jpg';
      computerImage.alt = 'scissors-option';
      break;
    case 'paper':
      computerImage.src = './images/paper2.jpg';
      computerImage.alt = 'paper-option';
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
