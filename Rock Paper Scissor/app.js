// Define choices and scores
const choices = ['rock', 'paper', 'scissor'];
let playerScore = 0;
let computerScore = 0;
let playerWins = 0;
let computerWins = 0;

// Get elements from the DOM
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorButton = document.querySelector('.scissor');
const winBoard = document.querySelector('.winboard');
const playerScoreDisplay = document.querySelector('.you p');
const computerScoreDisplay = document.querySelector('.theComputer p');

// Add event listeners to buttons
rockButton.addEventListener('click', () => playGame('rock'));
paperButton.addEventListener('click', () => playGame('paper'));
scissorButton.addEventListener('click', () => playGame('scissor'));

// Function to play the game
function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    updateScores(result);
    displayResult(result, playerChoice, computerChoice);
    updateWinCounters();
}

// Function to get computer's choice
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function to determine the winner
function determineWinner(player, computer) {
    if (player === computer) {
        return 'draw';
    } else if (
        (player === 'rock' && computer === 'scissor') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissor' && computer === 'paper')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

// Function to update scores
function updateScores(result) {
    if (result === 'player') {
        playerScore++;
        playerWins++;
    } else if (result === 'computer') {
        computerScore++;
        computerWins++;
    }
    playerScoreDisplay.textContent = `YOU: ${playerScore}`;
    computerScoreDisplay.textContent = `The Computer: ${computerScore}`;
}

// Function to display the result
function displayResult(result, playerChoice, computerChoice) {
    if (result === 'draw') {
        winBoard.textContent = `It's a draw! Both chose ${playerChoice}`;
    } else if (result === 'player') {
        winBoard.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
    } else {
        winBoard.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
    }
}

// Function to update win counters
function updateWinCounters() {
    const playerWinCounter = document.querySelector('.you p');
    const computerWinCounter = document.querySelector('.theComputer p');
    playerWinCounter.textContent = `YOU: ${playerWins}`;
    computerWinCounter.textContent = `The Computer: ${computerWins}`;
}
