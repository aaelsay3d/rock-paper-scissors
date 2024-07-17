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
    } else if (computerScore === 5) {
        finalMessage.textContent = "YOU LOST THE GAME :(";
        finalMessage.style.color = "red";
        finalMessage.style.fontWeight = "bold";
        resultsArea.appendChild(finalMessage);
    }
}


function selectButtonsAndAddListeners() {
    let buttons = document.querySelectorAll("button");
    buttons.forEach(button => button.addEventListener("click", playASingleRound));
}

selectButtonsAndAddListeners();

/* what do i need to do?

need to select the buttons above and store them in a nodelist (done)
use foreach method to add event listener to each of these buttons (done)
in the event listener the event handler will be the playASingleRound function (done)
of course it will not take the playerselection nor the computerselection as argument (done)
will pass an e object to it and extract the player selection from it (done)
and will get the computer selection using getcomputerchoice function (done)
after each round i will end up with a message for the round will change it and update the score (done)
but before changing anything will check if there is a winner by running another function at the top of event handler function
what will this function do it will print final message green if won red if lost and remove the even listener and will
create another button after this function is executed that will add the event listeners again reset the scores and deletes logs
*/
