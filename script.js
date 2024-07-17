let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);

    return choices[randomIndex];
}

function playASingleRound() {
    // let roundResult = "";
    // playerSelection = playerSelection.toLowerCase();
    // let formattedPlayerSelection = formatSelection(playerSelection);
    // let formattedComputerSelection = formatSelection(computerSelection);

    // if (playerSelection === computerSelection) {
    //     roundResult += "It's a Tie!";
    // } else if (playerSelection === "rock" && computerSelection === "scissors" ||
    //     playerSelection === "scissors" && computerSelection === "paper" ||
    //     playerSelection === "paper" && computerSelection === "rock") {
    //     roundResult += `You Win! ${formattedPlayerSelection} beats ${formattedComputerSelection}`;
    // } else {
    //     roundResult += `You Lose! ${formattedComputerSelection} beats ${formattedPlayerSelection}`;
    // }

    console.log("I was clicked");
}

function selectButtonsAndAddListeners() {
    let buttons = document.querySelectorAll("button");
    buttons.forEach(button => button.addEventListener("click", playASingleRound));
}

selectButtonsAndAddListeners();

/* what do i need to do?

need to select the buttons above and store them in a nodelist
use foreach method to add event listener to each of these buttons
in the event listener the event handler will be the playASingleRound function
of course it will not take the playerselection nor the computerselection as argument
will pass an e object to it and extract the player selection from it
and will get the computer selection using getcomputerchoice function
after each round i will end up with a message for the round will change it and update the score
but before changing anything will check if there is a winner by running another function at the top of event handler function
what will this function do it will print final message green if won red if lost and remove the even listener and will
create another button after this function is executed that will add the event listeners again reset the scores and deletes logs
*/
