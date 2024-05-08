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
//comment 
function playRound(playerSelection,computerSelection) {
        if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
            computerScore += 1;
            return "You Lose! Paper beats Rock." 
        }
        if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
            playerScore += 1;
            return "You Win! Rock beats Scissors."
        }
        if (playerSelection.toLowerCase() === "rock" && computerSelection === "rock") {
            return "It's a Tie."
        }
        if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
            playerScore += 1; 
            return "You Win! Paper beats Rock."
        }
        if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
            computerScore += 1;
            return "You Lose! Scissors beats Paper."
        }
        if (playerSelection.toLowerCase() === "paper" && computerSelection === "paper") {
            return "It's a Tie."
        }
        if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
            computerScore += 1;
            return "You Lose! Rock beats Scissors."
        }
        if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
            playerScore += 1;
            return "You Win! Scissors beats Paper."
        }
        if (playerSelection.toLowerCase() === "scissors" && computerSelection === "scissors") {
            return "It's a Tie."
        } return alert("Please Enter a Valid Response")
        
}

let playerScore = 0;
let computerScore = 0;

function game(){
    let playerSelection = prompt(' Enter Rock, Paper, or Scissors');
    let computerSelection = computerPlay();
  
    let msg = playRound(playerSelection, computerSelection);
    console.log(msg);
    if (playerScore < 5 && computerScore < 5) {
      console.log('Current score: Player: ', playerScore, ' Computer: ', computerScore)
      setTimeout(game, 0);
    } else {
      console.log(winCondition());
    }
  }


function winCondition() {
    if (playerScore === 5) {
        return `CONGRATULATIONS, YOU WIN ${playerScore} to ${computerScore}`
    }
    if (computerScore === 5) {
        return `OH NO, YOU LOSE ${playerScore} to ${computerScore}`
    }
}   


game()
