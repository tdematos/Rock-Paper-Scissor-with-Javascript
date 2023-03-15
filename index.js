
function getComputerChoice() {
    const randomChoice = ['rock', 'paper', 'scissor'];

    return randomChoice[Math.floor(Math.random() * randomChoice.length)];
    
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'May-Day! You a tied!'
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose this one :('
    } else if (playerSelection === 'rock' && computerSelection === 'Scissor') {
        return 'Congradulations You Win!'
    }else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'May-Day! You a tied!'
    } else if (playerSelection === 'paper' && computerSelection === 'Scissor') {
        return 'You lose this one :('
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'Congradulations You Win!'
    }else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        return 'Congradulations You Win!'
    } else if (playerSelection === 'scissor' && computerSelection === 'Scissor') {
        return 'May-Day! You a tied!'
    } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        return 'You lose this one :('
}

let playerSelection = 'playerChoice';
playRound(playerSelection)
//create a function for the player portion of the game
// name 3 variables that will be used for the game
//prompt the player to type an answer

//if the player types rock
//alert you win
//if the player types paper
//alert you win
//if the player types scissor
//alert you win
//else type tied
