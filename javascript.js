function computerPlay(){
    let choice = Math.random() * 3;
        if (choice <= 1){
            return "rock"
        }
        if (choice > 1 && choice <= 2){
            return "paper"
        }
        if (choice > 2){
            return "scissors"
        }
    }

function playRound(playerSelection, computerSelection) {
        if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
            return "You Lose! Paper beats Rock"
        }
        if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
            return "You Win! Rock beats Scissors"
        }
        if (playerSelection.toLowerCase() === "rock" && computerSelection === "rock") {
            return "It's a Tie"
        }
        if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
            return "You Win! Paper beats Rock"
        }
        if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
            return "You Lose! Scissors beats Paper"
        }
        if (playerSelection.toLowerCase() === "paper" && computerSelection === "paper") {
            return "It's a Tie"
        }
        if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
            return "You Lose! Rock beats Scissors"
        }
        if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
            return "You Win! Scissors beats Paper"
        }
        if (playerSelection.toLowerCase() === "scissors" && computerSelection === "scissors") {
            return "It's a Tie"
        }
}


const playerSelection = "RocK";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));