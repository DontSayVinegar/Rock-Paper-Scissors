let humanScore = 0;
let computerScore = 0;

const buttonContainer = document.querySelector(".buttonContainer");
const humanScoreParagraph = document.querySelector(".humanScoreParagraph");
const computerScoreParagraph = document.querySelector(".computerScoreParagraph");
const humanChoiceParagraph = document.querySelector(".humanStage p");
const computerChoiceParagraph = document.querySelector(".computerStage p");

buttonContainer.addEventListener("click", (e) => {
    let choice = e.target.textContent
    playRound(choice);
})

function getComputerChoice() {
    randomNumber = Math.random();

    if (randomNumber < 0.333333) {
        return "rock";
    } else if (randomNumber > 0.333333 && randomNumber < 0.666666) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    choice = prompt("What is your choice? Rock, paper, or scissors?: ").toLowerCase();
    return choice;
}

function evaluateChoices(computerChoice, humanChoice) {
    let winner;

    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            winner = "tie";
        } else if (computerChoice == "paper") {
            winner = "computer";
        } else {
            winner = "human";
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            winner = "human";
        } else if (computerChoice == "paper") {
            winner = "tie";
        } else {
            winner = "computer";
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            winner = "computer";
        } else if (computerChoice == "paper") {
            winner = "human";
        } else {
            winner = "tie";
        }
    } else {
        console.log("You fucked up, try again");
        evaluateChoices(computerChoice, getHumanChoice());
    }

    return winner;
}

function playRound(humanChoice) {
    humanChoice = humanChoice.toLowerCase();
    let computerChoice = getComputerChoice();

    winner = evaluateChoices(computerChoice, humanChoice);

    if (winner == "human") {
        console.log("congrats, you won");
        humanScore++;
    } else if (winner == "computer") {
        console.log("better luck next time");
        computerScore++;
    } else {
        console.log("it was a tie!");
    }

    humanScoreParagraph.textContent = `Human score: ${humanScore}`;
    humanChoiceParagraph.textContent = humanChoice;
    computerScoreParagraph.textContent = `Computer score: ${computerScore}`;
    computerChoiceParagraph.textContent = computerChoice;
}

function playGame() {
    for (let i = 0; i < 3; i++) {
        playRound();
    }

    if (computerScore > humanScore) {
        console.log("The computer wins the game");
    } else if (computerScore < humanScore) {
        console.log("You win the game!");
    } else {
        console.log("You tied the game with the computer");
    }
}


// Bubble through div onclick event listener > run playround function and input target.value as humanchoice