let playerScore = 0;
let compScore = 0;

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const results = document.querySelector('.results');
const playerScoreSpan = document.querySelector('.player-score');
const computerScoreSpan = document.querySelector('.computer-score');

const computerPlay = () => {
    const arrOfChoices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() * arrOfChoices.length)
    return arrOfChoices[randomNum]
}

const playRound = (playerSelection, computerSelection) => {
    const p = document.createElement('p')

    if (playerSelection === computerSelection) {
        p.innerText = `You tied! You both picked ${playerSelection}`
        results.appendChild(p)
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        compScore++
        p.innerText = 'You lose this one :('
        results.appendChild(p)
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        p.innerText = 'Congradulations You Win!'
        results.appendChild(p)
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore++
        p.innerText = 'You lose this one :('
        results.appendChild(p)
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        p.innerText = 'Congradulations You Win!'
        results.appendChild(p)
    }else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        p.innerText = 'Congradulations You Win!'
        results.appendChild(p)
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        compScore++
        p.innerText = 'You lose this one :('
        results.appendChild(p)
    }
}

const checkForWinner = (playerScore, compScore) => {
    console.log('1', playerScore, '2', compScore);
    if (playerScore === 5) {
        const h2 = document.createElement('h2')
        h2.classList.add('player-won')
        h2.innerText = `You won ${playerScore} to ${compScore} great job you won!`
        results.append(h2);
    } 
    
    if (compScore === 5) {
        const h2 = document.createElement('h2')
        h2.classList.add('computer-won')
        h2.innerText = `You lost ${playerScore} to ${compScore} the computer beat you!`
        results.append(h2);
    }
}

const updateScores = (playerScore, compScore) => {
    playerScoreSpan.innerText = `Player Score: ${playerScore}`
    computerScoreSpan.innerText = `Computer Score: ${compScore}`
}

rockButton.addEventListener('click', () => {
    const playerSelection = 'rock'
    const computerSelection = computerPlay()
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, compScore)
    checkForWinner(playerScore, compScore)
})

paperButton.addEventListener('click', () => {
    const playerSelection = 'paper'
    const computerSelection = computerPlay()
    playRound(playerSelection, computerSelection)
    checkForWinner(playerScore, compScore)
})

scissorsButton.addEventListener('click', () => {
    const playerSelection = 'scissors'
    const computerSelection = computerPlay()
    playRound(playerSelection, computerSelection)
    checkForWinner(playerScore, compScore)
})


// function game() {
//     for (let i = 1; i < 2; i++) {
//         const playerSelection = prompt('Chooser your weapon', 'Rock, Paper, Scissor'); 
        
//         const computerSelection = getComputerChoice();
//         playRound(playerSelection, computerSelection);
//     }

//     if (playerScore > compScore) {
//         return "You beat the computer!"
//     } else if (playerScore < compScore) {
//         return "You lost to a computer? Bruh!"
//     } else { 
//         return " You tied, tough luck!"
//     }
// }

// console.log(game());

