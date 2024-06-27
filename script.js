function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);

    return choices[randomIndex];
}

function formatSelection(selection) {
    let formattedSelection = selection.slice(0, 1).toUpperCase() + selection.slice(1).toLowerCase();
    return formattedSelection;
}

function playASingleRound(playerSelection, computerSelection) {
    let roundResult = "";
    playerSelection = playerSelection.toLowerCase();
    let formattedPlayerSelection = formatSelection(playerSelection);
    let formattedComputerSelection = formatSelection(computerSelection);

    if (playerSelection === computerSelection) {
        roundResult += "It's a Tie!";
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "rock") {
        roundResult += `You Win! ${formattedPlayerSelection} beats ${formattedComputerSelection}`;
    } else {
        roundResult += `You Lose! ${formattedComputerSelection} beats ${formattedPlayerSelection}`;
    }

    return roundResult;
}

function checkChoice(choice) {
    let choices = ["rock", "paper", "scissors"];
    choice = choice.toLowerCase();
    return choices.includes(choice);
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Please enter 'rock', 'paper', or 'scissors'");

        if (!checkChoice(playerSelection)){
            while(!checkChoice(playerSelection)){
                playerSelection = prompt("Wrong input, please enter 'rock', 'paper', or 'scissors'");
            }
        }

        let computerSelection = getComputerChoice();
        let roundResult = playASingleRound(playerSelection, computerSelection);

        console.log(roundResult);

        if (roundResult.includes("Win")) {
            playerScore++;
        } else if (roundResult.includes("Lose")) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log(`Congratulations! You won the game. You won ${playerScore} rounds out of 5.`);
    } else if (computerScore > playerScore) {
        console.log(`Game over! The computer won this time with ${computerScore} victories out of 5 rounds. Try again?`);
    } else {
        console.log(`It's a tie! You and the computer both won ${playerScore} rounds each. Why not play again to break the tie?`);
    }
}

playGame();
