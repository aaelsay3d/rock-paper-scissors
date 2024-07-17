let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);

    return choices[randomIndex];
}

function playASingleRound(event) {
    let roundResult = "";
    let playerSelection = event.target.textContent;
    let computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        roundResult += "It's a Tie!";
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "rock") {
        roundResult += `You Win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
    } else {
        roundResult += `You Lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
    }

    let roundResultArea = document.querySelector(".round-result-area");
    roundResultArea.textContent = roundResult;

    let playerScoreArea = document.querySelector(".player-score-area");
    let computerScoreArea = document.querySelector(".computer-score-area");
    playerScoreArea.textContent = `Player Score : ${playerScore}`;
    computerScoreArea.textContent = `Computer Score : ${computerScore}`;

    evaluateGameStatus(playerScore, computerScore);
}

function evaluateGameStatus(playerScore, computerScore) {
    let finalMessage = document.createElement("p");
    let resultsArea = document.querySelector(".results-area");
    if (playerScore === 5) {
        finalMessage.textContent = "YOU WON THE GAME :)";
        finalMessage.style.color = "green";
        finalMessage.style.fontWeight = "bold";
        resultsArea.appendChild(finalMessage);
        selectButtonsAndRemoveListeners()
    } else if (computerScore === 5) {
        finalMessage.textContent = "YOU LOST THE GAME :(";
        finalMessage.style.color = "red";
        finalMessage.style.fontWeight = "bold";
        resultsArea.appendChild(finalMessage);
        selectButtonsAndRemoveListeners()
    }
}


function selectButtonsAndAddListeners() {
    let buttons = document.querySelectorAll("button");
    buttons.forEach(button => button.addEventListener("click", playASingleRound));
}


function selectButtonsAndRemoveListeners() {
    let buttons = document.querySelectorAll("button");
    buttons.forEach(button => button.removeEventListener("click", playASingleRound));
}

selectButtonsAndAddListeners();
