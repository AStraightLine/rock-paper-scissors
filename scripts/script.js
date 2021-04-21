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
    let playerResult;
    // Switch based on playerSelection with the three possibilities worked out through if else for computerSelection
    switch(playerSelectionInsensitive) {
        case "rock":
            if (computerSelection === "rock") {
                console.log("Rock vs Rock");
                playerResult = "draw";
                return playerResult;
            } else if (computerSelection === "paper") {
                console.log("Rock vs Paper");
                playerResult = "lose";
                return playerResult;
            } else if (computerSelection === "scissors") {
                console.log("Rock vs Scissors");
                playerResult = "win";
                return playerResult;
            }
        case "paper":
            if (computerSelection === "rock") {
                console.log("Paper vs Rock");
                playerResult = "win";
                return playerResult;
            } else if (computerSelection === "paper") {
                console.log("Paper vs Paper");
                playerResult = "draw";
                return playerResult;
            } else if (computerSelection === "scissors") {
                console.log("Paper vs Scissors");
                playerResult = "lose";
                return playerResult;
            }
        case "scissors":
            if (computerSelection === "rock") {
                console.log("Scissors vs Rock");
                playerResult = "lose";
                return playerResult;
            } else if (computerSelection === "paper") {
                console.log("Scissors vs Paper");
                playerResult = "win";
                return playerResult;
            } else if (computerSelection === "scissors") {
                console.log("Scissors vs Scissors");
                playerResult = "draw";
                return playerResult;
            }
    }
}

function game() {
    let playerScore = 0, computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
            if (result === "win") {
                playerScore++;
                console.log("You won this round! The scores are: Player: " + playerScore + " Computer: " + computerScore);
            } else if (result === "lose") {
                computerScore++;
                console.log("You lost this round! The scores are: Player: " + playerScore + " Computer: " + computerScore);
            } else if (result === "draw") {
                console.log("Its a draw! The scores are: Player: " + playerScore + " Computer: " + computerScore);
            }
    }
}

game();
