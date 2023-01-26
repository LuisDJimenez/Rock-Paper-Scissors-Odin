console.log("Hello how are you let's play Rock Paper Scissors.")
let palyerScore = 0
let computerScore = 0

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
      case 0:
        return 'ROCK'
      case 1:
        return 'PAPER'
      case 2:
        return 'SCISSORS'
    }
  }

function playRound (){
   
    let playerSelection = prompt("Choose!").toUpperCase()
    let computerSelection = getComputerChoice()
    console.log("You pick " + playerSelection + " and the pc picks " + computerSelection)

    if (playerSelection == computerSelection) {
        console.log("its a tie") 
    }
    else if (playerSelection === "ROCK" && computerSelection === "SCISSORS" || 
    playerSelection === "PAPER" && computerSelection === "ROCK" || 
    playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        palyerScore++
        console.log("You Won") 
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "ROCK" || 
    playerSelection === "ROCK" && computerSelection === "PAPER" || 
    playerSelection === "PAPER" && computerSelection === "SCISSORS"){
        computerScore++
        console.log("You lost") 
    }
    else {
         console.log("You need to pick Rock, Paper or Scissors")
    }
}

function game() {
    for (let i = 0; i < 5; i++){
        playRound()
    }
   if (computerScore > palyerScore) {
    console.log("You lost this game")
   } else if (palyerScore > computerScore) {
    console.log("You won this game")
   } else if (palyerScore == computerScore) {
    console.log("Its a Tie!")
   } else {
    console.log("Something went wrong")
   }
}


game()