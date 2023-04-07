let palyerScore = 0;
let computerScore = 0;

function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "✊";
    case 1:
      return "✋";
    case 2:
      return "✌";
  }
}

let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");
let scoreplayer = document.querySelector("#playerScore");
let scorepc = document.querySelector("#computerScore");
let showResult = document.querySelector("#tellWinner");
let player_result = document.querySelector(".player-choice");
let pc_result = document.querySelector(".pc-choice");

rockButton.addEventListener("click", function () {
  playRound("✊", computerPlay());
  anime();
});

paperButton.addEventListener("click", function () {
  playRound("✋", computerPlay());
  anime();
});

scissorsButton.addEventListener("click", function () {
  playRound("✌", computerPlay());
  anime();
});

function playRound(playerSelection, computerSelection) {
  player_result.textContent = `${playerSelection}`;
  pc_result.textContent = `${computerSelection}`;

  if (playerSelection == computerSelection) {
    result.textContent = "Its a tie";
    showResult.innerHTML = ` `;
  } else if (
    (playerSelection === "✊" && computerSelection === "✌") ||
    (playerSelection === "✋" && computerSelection === "✊") ||
    (playerSelection === "✌" && computerSelection === "✋")
  ) {
    palyerScore++;
    scoreplayer.innerHTML = `Player Score: ${palyerScore}`;
    result.textContent = "You Won!";
    showResult.innerHTML = ` `;
  } else {
    computerScore++;
    result.textContent = "You lost!";
    scorepc.innerHTML = `PC Score: ${computerScore}`;
    showResult.innerHTML = ` `;
  }

  if (palyerScore >= 5) {
    palyerScore = 0;
    computerScore = 0;
    scoreplayer.innerHTML = `Player Score: ${palyerScore}`;
    scorepc.innerHTML = `PC Score: ${computerScore}`;
    showResult.innerHTML = `You won this round! Congrats`;
  } else if (computerScore >= 5) {
    palyerScore = 0;
    computerScore = 0;
    scoreplayer.innerHTML = `Player Score: ${palyerScore}`;
    scorepc.innerHTML = `PC Score: ${computerScore}`;
    showResult.innerHTML = `You lost this round! best luck next time.`;
  }
}

function anime() {
  if (
    player_result.classList.contains("animateInLeft") &&
    pc_result.classList.contains("animateInRigth")
  ) {
    player_result.classList.remove("animateInLeft");
    player_result.classList.add("animateOutLeft");
    pc_result.classList.remove("animateInRigth");
    pc_result.classList.add("animateOutRigth");
  } else {
    player_result.classList.remove("animateOutLeft");
    player_result.classList.add("animateInLeft");
    pc_result.classList.remove("animateOutRigth");
    pc_result.classList.add("animateInRigth");
  }
}
