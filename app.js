const gameModule = (() => {
  let playerScore = 0;
  let computerScore = 0;

  const computerPlay = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "✊";
      case 1:
        return "✋";
      case 2:
        return "✌";
    }
  };

  const playRound = (playerSelection, computerSelection) => {
    const scoreplayer = document.querySelector("#playerScore");
    const scorepc = document.querySelector("#computerScore");
    const showResult = document.querySelector("#tellWinner");
    let player_result = document.querySelector(".player-choice");
    let pc_result = document.querySelector(".pc-choice");

    player_result.textContent = `${playerSelection}`;
    pc_result.textContent = `${computerSelection}`;

    if (playerSelection == computerSelection) {
      showResult.innerHTML = "It's a tie";
    } else if (
      (playerSelection === "✊" && computerSelection === "✌") ||
      (playerSelection === "✋" && computerSelection === "✊") ||
      (playerSelection === "✌" && computerSelection === "✋")
    ) {
      playerScore++;
      scoreplayer.innerHTML = `Player Score: ${playerScore}`;
      showResult.innerHTML = "You Won!";
    } else {
      computerScore++;
      scorepc.innerHTML = `PC Score: ${computerScore}`;
      showResult.innerHTML = "You lost!";
    }

    if (playerScore >= 5) {
      playerScore = 0;
      computerScore = 0;
      scoreplayer.innerHTML = `Player Score: ${playerScore}`;
      scorepc.innerHTML = `PC Score: ${computerScore}`;
      showResult.innerHTML = "You won this round! Congrats";
    } else if (computerScore >= 5) {
      playerScore = 0;
      computerScore = 0;
      scoreplayer.innerHTML = `Player Score: ${playerScore}`;
      scorepc.innerHTML = `PC Score: ${computerScore}`;
      showResult.innerHTML = "You lost this round! best luck next time.";
    }

    anime(player_result, pc_result);
  };

  const anime = (player_result, pc_result) => {
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
  };

  const listenForClicks = (() => {
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach((button) =>
      button.addEventListener("click", (e) => {
        if (button.textContent == "✊") {
          playRound("✊", computerPlay());
        } else if (button.textContent == "✋") {
          playRound("✋", computerPlay());
        } else if (button.textContent == "✌") {
          playRound("✌", computerPlay());
        }
      })
    );
  })();

  return {
    playRound,
    computerPlay,
    anime,
    listenForClicks,
  };
})();

gameModule.listenForClicks;
