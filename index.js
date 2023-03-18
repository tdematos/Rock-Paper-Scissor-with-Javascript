let playerScore = 0;
let compScore = 0;

function getComputerChoice() {
    const randomChoice = ['rock', 'paper', 'scissor'];

    return randomChoice[Math.floor(Math.random() * randomChoice.length)];
    
}

function playRound(playerSelection, computerSelection) {
    console.log('1', playerSelection, '2', computerSelection)
    if (playerSelection === computerSelection) {
        return `May-Day! You a tied! ${playerSelection}`
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        compScore++
        return 'You lose this one :('
    } else if (playerSelection === 'rock' && computerSelection === 'scissor') {
        playerScore++
        return 'Congradulations You Win!'
    } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
        compScore++
        return 'You lose this one :('
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        return 'Congradulations You Win!'
    }else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        playerScore++
        return 'Congradulations You Win!'
    } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        compScore++
        return 'You lose this one :('
    }
}


function game() {
    for (let i = 1; i < 5; i++) {
        const playerSelection = prompt('Chooser your weapon', 'Rock, Paper, Scissor');
        const computerSelection = getComputerChoice();
        playRound(playerSelection.toLowerCase(), computerSelection);
    }

    if (playerScore > compScore) {
        return "You beat the computer!"
    } else if (playerScore < compScore) {
        return "You lost to a computer? Bruh!"
    } else { 
        return " You tied, tough luck!"
    }
}

console.log(game());
