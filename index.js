const beats = {
    Rock: "Scissors",
    Scissors: "Paper",
    Paper: "Rock"
};

let humanScore = 0;
let computerScore = 0;
let humanRoundScore = 0;
let computerRoundScore = 0;

document.getElementById('rockBtn').onclick = () => playRound('Rock');
document.getElementById('paperBtn').onclick = () => playRound('Paper');
document.getElementById('scissorsBtn').onclick = () => playRound('Scissors');

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];
    showOutput(computerChoice);
    return computerChoice;
};

function showOutput(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML += message + "<br>";
}

function playRound(human) {
    const computer = getComputerChoice();

    if (human === computer) {
        showOutput("Draw!");
    } else if (beats[human] === computer) {
        showOutput("You win!");
    } else {
        showOutput("Computer wins!");
    }
    scoreVariables(human, computer);
}

function scoreVariables(human, computer) {
    if (human === computer) {
        humanScore = humanScore +0;
    } else if (beats[human] === computer) {
        humanScore = humanScore +1;
    } else {
        computerScore = computerScore +1;
    }
        showOutput("Human Score: " + humanScore + " | Computer Score: " + computerScore);
}

function scoreRoundVariables(humanScore, computerScore) {
    if (humanScore === 5) {
        humanRoundScore = humanRoundScore +1;
        showOutput("Human wins the game!\nRundenscore: Human " + humanRoundScore + " - Computer " + computerRoundScore);
    } else if (computerScore === 5) {
        computerRoundScore = computerRoundScore +1;
        showOutput("Computer wins the game!\nRundenscore: Human " + humanRoundScore + " - Computer " + computerRoundScore);
    }
}

/*
function scoreEndGame(humanRoundScore, computerRoundScore) {
    if (humanRoundScore === 3) {
        console.log("Human wins the game!");
    } else if (computerRoundScore === 3) {
        console.log("Computer wins the game!");
    }
}

for (let i = 0; i < 5; i++) {
    while (humanScore < 3 && computerScore < 3) {
        playRound();
    }
    scoreRoundVariables (humanScore, computerScore);
    humanScore = 0;
    computerScore = 0;
    scoreEndGame (humanRoundScore, computerRoundScore);
    if (humanRoundScore === 3 || computerRoundScore === 3); {
        break;
    }
}
*/

/*
// Pseudocode RockPaperScissors

// const Rangorder

const beats 
    Rock: Scissors 
    Scissors: Paper
    Paper: Rock

// Spiel
function getHumanChoice
    if input random const 
    return random const

function getComputerChoice
    if function getHumanChoice
    let randomString = Math.random() *3 +1;  

// Ergebnis Spiel
const "Rock" > const "Scissors" > const "Paper" > const "Rock"; 
if return getHumanChoice === getComputerChoice
    then console.log("Draw")
if return getHumanChoice > getComputerChoice
    then console.log("Human wins")
if return getComputerChoice > getHumanChoice
    then console.log ("Computer wins")

// Score variables 
var humanScore = 0 
var computerScore = 0
if getHumanChoice > getComputerChoice
    then humanScore +1;
if getComputerChoice > getHumanChoice
    then computerScore +1; 

// End Round 
var humanRoundScore = 0
var computerRoundScore = 0
if var humanScore = 3;
    then var humanRoundScore +1;
    then console.log("Human wins round")
if var computerScore = 3;
    then var computerRoundScore +1;
    then console.log("Computer wins round")

// End Game
if humanRoundScore = 3
    then console.log("Human wins game")
if computerRoundScore = 3 
    then console.log("Computer wins game")
*/