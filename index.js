const beats = {
    Rock: "Scissors",
    Scissors: "Paper",
    Paper: "Rock"
};

function getHumanChoice() {
    let userPrompt = prompt ("Rock, Paper, or Scissors");
    console.log(userPrompt);
    return userPrompt;
};

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];
    console.log(computerChoice);
    return computerChoice;
};

function playRound() {
    const human = getHumanChoice();
    const computer = getComputerChoice();

    if (human === computer) {
        console.log("Draw!");
    } else if (beats[human] === computer) {
        console.log("You win!");
    } else {
        console.log("Computer wins!");
    }
}

playRound();


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