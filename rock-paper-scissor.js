function getComputerChoice() {
    const moves = ["rock", "paper", "scissor"];
    const choice = Math.floor(Math.random() * 3);
    return moves[choice];
}

function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();

    if (player === computerSelection) {
        return ("It's a draw!")
    }
    // player wins
    else if ((player === "rock" && computerSelection === "scissor") || (player === "scissor" && computerSelection === "paper") || ((player === "paper" && computerSelection === "rock"))) {
        return ("Player wins!")
    }
    else return ("Computer wins!")
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, scissor or paper");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();