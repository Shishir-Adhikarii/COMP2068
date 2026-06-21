const prompt = require('prompt');

prompt.start();

// Step 1: Ask user input
prompt.get(['userSelection'], function (err, result) {

    if (err) {
        console.log("Error occurred");
        return;
    }

    // Step 2: Convert input to uppercase
    let userSelection = result.userSelection.toUpperCase();

    // Step 3: Generate random number for computer
    let randomNumber = Math.random();

    let computerSelection;

    // Step 4: Map number to choice
    // 0.00 - 0.34 => PAPER
    // 0.35 - 0.67 => SCISSORS
    // 0.68 - 1.00 => ROCK

    if (randomNumber <= 0.34) {
        computerSelection = "PAPER";
    }
    else if (randomNumber <= 0.67) {
        computerSelection = "SCISSORS";
    }
    else {
        computerSelection = "ROCK";
    }

    // Step 5: Show both selections
    console.log("User Selection: " + userSelection);
    console.log("Computer Selection: " + computerSelection);

    // Step 6: Decide winner
    if (userSelection === computerSelection) {
        console.log("It's a tie");
    }
    else if (
        (userSelection === "ROCK" && computerSelection === "SCISSORS") ||
        (userSelection === "PAPER" && computerSelection === "ROCK") ||
        (userSelection === "SCISSORS" && computerSelection === "PAPER")
    ) {
        console.log("User Wins");
    }
    else {
        console.log("Computer Wins");
    }

});