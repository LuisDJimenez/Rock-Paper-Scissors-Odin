let palyerScore = 0
let computerScore = 0

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
      case 0:
        return 'Rock'
      case 1:
        return 'Paper'
      case 2:
        return 'Scissors'
    }
  }

  let rockButton = document.querySelector('#rock');
  let paperButton = document.querySelector('#paper');
  let scissorsButton = document.querySelector('#scissors');
  let scoreplayer = document.querySelector('#playerScore')
  let scorepc = document.querySelector('#computerScore')
  let showResult = document.querySelector('#tellWinner')

  rockButton.addEventListener('click', function() {
    playRound('Rock', computerPlay());
  });
  
  paperButton.addEventListener('click', function() {
    playRound('Paper', computerPlay());
  });
  
  scissorsButton.addEventListener('click', function() {
    playRound('Scissors', computerPlay());
  });




function playRound (playerSelection, computerSelection){
  explain.textContent = `You pick ${playerSelection}  and the PC picks ${computerSelection}`
  
  

    if (playerSelection == computerSelection) {
      result.textContent = "Its a tie"
      showResult.innerHTML = ` `
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors" || 
    playerSelection === "Paper" && computerSelection === "Rock" || 
    playerSelection === "Scissors" && computerSelection === "Paper") {
        palyerScore++
        scoreplayer.innerHTML = `Player Score: ${palyerScore}`
        result.textContent = "You Won" 
        showResult.innerHTML = ` `

    }
    else{
        computerScore++
        result.textContent = "You lost" 
        scorepc.innerHTML = `PC Score: ${computerScore}`
        showResult.innerHTML = ` `
    }
    
    if (palyerScore >= 5) {
      palyerScore = 0
      computerScore= 0
      scoreplayer.innerHTML = `Player Score: ${palyerScore}`
      scorepc.innerHTML = `PC Score: ${computerScore}`
      showResult.innerHTML = `You won this round`
    }
    else if (computerScore >= 5) {
      palyerScore = 0
      computerScore= 0
      scoreplayer.innerHTML = `Player Score: ${palyerScore}`
      scorepc.innerHTML = `PC Score: ${computerScore}`
      showResult.innerHTML = `You lost this round`
    }
}


