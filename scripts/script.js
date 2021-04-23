function computerPlay() {
    let randomInt = Math.floor(Math.random() * 3);
    let computerSelection;
    switch(randomInt) {
        case 0: computerSelection = "rock"; 
        break;
        case 1: computerSelection = "paper"; 
        break;
        case 2: computerSelection = "scissors"; 
        break;
    }
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    
    // Make playerSelection uniform case to account for input oddities such as "ROCK", "Rock", "RoCk", etc.
    let playerSelectionInsensitive = playerSelection.toLowerCase();

    // Switch based on playerSelection with the three possibilities worked out through if else for computerSelection
    switch(playerSelectionInsensitive) {
        case "rock":
            if (computerSelection === "rock") {
                console.log("Rock vs Rock");
                roundResultDisplay.textContent = "Its a draw! - Rock vs Rock";
                resetScores();
                break;
            } else if (computerSelection === "paper") {
                console.log("Rock vs Paper");
                computerScore++;
                roundResultDisplay.textContent = "You lose! - Rock vs Paper";
                scoresDisplay.textContent = "Your score: " + playerScore + " - Computer score: " + computerScore;
                break;
            } else if (computerSelection === "scissors") {
                console.log("Rock vs Scissors");
                playerScore++;
                roundResultDisplay.textContent = "You win! - Rock vs Scissors";
                scoresDisplay.textContent = "Your score: " + playerScore + " - Computer score: " + computerScore;
                break;
            }
        case "paper":
            if (computerSelection === "rock") {
                console.log("Paper vs Rock");
                playerScore++;
                roundResultDisplay.textContent = "You win! - Paper vs Rock";
                scoresDisplay.textContent = "Your score: " + playerScore + " - Computer score: " + computerScore;
                break;
            } else if (computerSelection === "paper") {
                console.log("Paper vs Paper");
                roundResultDisplay.textContent = "Its a draw! - Paper vs Paper";
                resetScores();
                break;
            } else if (computerSelection === "scissors") {
                console.log("Paper vs Scissors");
                computerScore++;
                roundResultDisplay.textContent = "You lose! - Paper vs Scissors";
                scoresDisplay.textContent = "Your score: " + playerScore + " - Computer score: " + computerScore;
                break;
            }
        case "scissors":
            if (computerSelection === "rock") {
                console.log("Scissors vs Rock");
                computerScore++;
                roundResultDisplay.textContent = "You lose! - Scissors vs Rock";
                scoresDisplay.textContent = "Your score: " + playerScore + " - Computer score: " + computerScore;
                break;
            } else if (computerSelection === "paper") {
                console.log("Scissors vs Paper");
                playerScore++;
                roundResultDisplay.textContent = "You win! - Scissors vs Paper";
                scoresDisplay.textContent = "Your score: " + playerScore + " - Computer score: " + computerScore;
                break;
            } else if (computerSelection === "scissors") {
                console.log("Scissors vs Scissors");
                roundResultDisplay.textContent = "Its a draw! - Scissors vs Scissors";
                resetScores();
                break;
            }
    }
    firstToFive();
}

function firstToFive() {
    if (playerScore == 5 || computerScore == 5) {
        if (playerScore == 5) {
            scoresDisplay.textContent = "You reached 5 wins first and won this game!";
            playerScore = 0;
            computerScore = 0;
        } else if (computerScore == 5) {
            scoresDisplay.textContent = "The Computer reached 5 wins first and won this game!";
            playerScore = 0;
            computerScore = 0;
        }
    } else {
        return;
    }
}

function resetScores() {
    if (playerScore == 0 || computerScore == 0) {
        playerScore = 0;
        computerScore = 0;
        scoresDisplay.textContent = "Your score: " + playerScore + " - Computer score: " + computerScore;
    }
}

const roundResultDisplay = document.querySelector('#roundResultDisplay');
const scoresDisplay = document.querySelector('#scoresDisplay');
const playButtons = document.querySelectorAll('.playButtons');

let playerScore = 0, computerScore = 0;

playButtons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.textContent, computerPlay());
    });
});