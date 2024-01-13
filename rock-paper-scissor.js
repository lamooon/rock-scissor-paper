function getComputerChoice() {
    const moves = ["rock", "paper", "scissor"];
    const choice = Math.floor(Math.random() * 3);
    return moves[choice];
}

function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();

    console.log()
    if (player === computerSelection) {
        return ("It's a tie!")
    }
    // player wins
    else if ((player === "rock" && computerSelection === "scissor") || (player === "scissor" && computerSelection === "paper") || ((player === "paper" && computerSelection === "rock"))) {
        playerScore++;
        return ("Player wins! " + player + " beats " + computerSelection);
    }
    else {
        computerScore++;
        return ("Computer wins! " + computerSelection + " beats " + player);
    }
}


// const rock = document.querySelector('.rock');
// const scissor = document.querySelector('.scissor');
// const paper = document.querySelector('.paper');
// rock.addEventListener('click', () => {
//     let playerSelection = rock.textContent;
//     console.log(playerSelection);
// });
//
// scissor.addEventListener('click', () => {
//    let playerSelection = scissor.textContent;
//    console.log(playerSelection);
// });
//
// paper.addEventListener('click', () => {
//     let playerSelection = paper.textContent;
//     console.log(playerSelection);
// });

function disableButtons() {
    playerSelection.forEach(button => {
        button.disabled = true;
    })
}

const playerSelection = document.querySelectorAll('button');
const results = document.querySelector('.result');
const playerScoreTracker = document.querySelector('.player-score');
const computerScoreTracker = document.querySelector('.computer-score');
const decider = document.querySelector('.total');

let playerScore = 0;
let computerScore = 0;
playerSelection.forEach(button => {


    button.addEventListener('click', () => {

        let computerChoice = getComputerChoice();
        let result = playRound(button.textContent, computerChoice);

        results.textContent = "";
        playerScoreTracker.textContent = "";
        computerScoreTracker.textContent = "";

        if (computerScore === 5) {
            decider.append("Computer Wins!");
            disableButtons();
        }
        else if (playerScore === 5) {

            decider.append("Player wins the game!");
            disableButtons();
        }
        else {
            playerScoreTracker.append("Player score: " + playerScore);
            computerScoreTracker.append("Computer score: " + computerScore);
        }

        results.append(result);
        results.appendChild(playerScoreTracker);
        results.appendChild(computerScoreTracker);
        results.appendChild(decider);
    });
});



