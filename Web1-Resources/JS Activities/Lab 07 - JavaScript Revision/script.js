// ==========================================
// SESSION 7 - REVISION & MINI-PROJECT
// ==========================================


// ==========================================
// TASK 1 - MATHEMATICAL COMPARISON
// ==========================================

let runAgain = true;
let runCount = 0;

while (runAgain === true) {

    let number1 = Number(prompt("Enter the first number:"));
    let number2 = Number(prompt("Enter the second number:"));

    runCount++;

    if (number1 > number2) {
        console.log(number1 + " > " + number2);
    }
    else if (number1 < number2) {
        console.log(number1 + " < " + number2);
    }
    else {
        console.log(number1 + " = " + number2);
    }

    let choice = prompt("Would you like to run the program again? yes/no");

    if (choice !== "yes") {
        runAgain = false;
    }
}

console.log("Thank you for using the program.");
console.log("You ran the program " + runCount + " times.");


// ==========================================
// TASK 2 - LEAP YEARS
// ==========================================

for (let year = 1990; year <= 2050; year++) {

    if (
        (year % 4 === 0 && year % 100 !== 0) ||
        year % 400 === 0
    ) {
        console.log(year);
    }
}


// ==========================================
// TASK 3 - GUESSING GAME
// ==========================================

let playAgain = true;

while (playAgain === true) {

    let secretNumber = Math.floor(Math.random() * 101);

    let guessCount = 0;
    let correct = false;

    while (correct === false) {

        let guess = Number(prompt("Guess a number between 0 and 100:"));

        guessCount++;

        if (guess > secretNumber) {
            console.log("Too high");
        }
        else if (guess < secretNumber) {
            console.log("Too low");
        }
        else {
            console.log("Correct!");
            console.log("It took you " + guessCount + " guesses.");

            correct = true;
        }
    }

    let choice = prompt("Would you like to play again? yes/no");

    if (choice !== "yes") {
        playAgain = false;
    }
}


// ==========================================
// TASK 4 - HEADS OR TAILS
// ==========================================

let playHeadsTails = true;

while (playHeadsTails === true) {

    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 3; round++) {

        let guess = prompt(
            "Round " + round + ": Heads or Tails?"
        );

        let coin = Math.floor(Math.random() * 2);

        let result;

        if (coin === 0) {
            result = "heads";
        }
        else {
            result = "tails";
        }

        console.log("The coin was " + result);

        if (guess.toLowerCase() === result) {

            playerScore++;

            console.log("Correct!");

        }
        else {

            computerScore++;

            console.log("Wrong!");

        }
    }

    console.log("Your score: " + playerScore);
    console.log("Computer score: " + computerScore);

    if (playerScore > computerScore) {
        console.log("You won!");
    }
    else if (computerScore > playerScore) {
        console.log("Computer won!");
    }
    else {
        console.log("It was a draw!");
    }

    let choice = prompt("Would you like to play again? yes/no");

    if (choice !== "yes") {
        playHeadsTails = false;
    }
}


// ==========================================
// TASK 5 - YAHTZEE - FOURS
// ==========================================

// Player 1

let player1Fours = 0;

for (let i = 1; i <= 5; i++) {

    let dice = Math.floor(Math.random() * 6) + 1;

    console.log("Player 1 rolled: " + dice);

    if (dice === 4) {
        player1Fours++;
    }
}

let player1Score = player1Fours * 4;


// Player 2

let player2Fours = 0;

for (let i = 1; i <= 5; i++) {

    let dice = Math.floor(Math.random() * 6) + 1;

    console.log("Player 2 rolled: " + dice);

    if (dice === 4) {
        player2Fours++;
    }
}

let player2Score = player2Fours * 4;


console.log("Player 1 score: " + player1Score);
console.log("Player 2 score: " + player2Score);


if (player1Score > player2Score) {
    console.log("Player 1 wins!");
}
else if (player2Score > player1Score) {
    console.log("Player 2 wins!");
}
else {
    console.log("It is a draw!");
}


// ==========================================
// TASK 6 - NUMBER POWERS
// ==========================================

let base = Number(prompt("Enter the base:"));
let exponent = Number(prompt("Enter the exponent:"));

let answer = 1;
let calculation = "";

for (let i = 1; i <= exponent; i++) {

    answer = answer * base;

    calculation = calculation + base;

    if (i < exponent) {
        calculation = calculation + " * ";
    }
}

console.log(
    base + "^" + exponent +
    " = " + calculation +
    " = " + answer
);