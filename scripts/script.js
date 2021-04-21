function computerPlay() {
    let randomInt = Math.floor(Math.random() * 3);
    let computerSelection;
    switch(randomInt) {
        case 0: computerSelection = "Rock"; 
        break;
        case 1: computerSelection = "Paper"; 
        break;
        case 2: computerSelection = "Scissors"; 
        break;
    }
    return computerSelection;
}
