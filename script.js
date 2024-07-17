let playerScore = 0;
let computerScore = 0;

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
