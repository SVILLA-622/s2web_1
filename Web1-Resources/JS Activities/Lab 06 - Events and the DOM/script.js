// ==========================================
// SESSION 6 - EVENTS & THE DOM
// ==========================================


// ==========================================
// TASK 1 - CELSIUS TO FAHRENHEIT
// ==========================================

let celsiusBox = document.getElementById("celsiusBox");
let convertButton = document.getElementById("convertButton");
let celsiusOutput = document.getElementById("celsiusOutput");

convertButton.addEventListener("click", function () {

    let celsius = Number(celsiusBox.value);

    let fahrenheit = celsius * 9 / 5 + 32;

    celsiusOutput.textContent =
        celsius + "°C = " + fahrenheit + "°F";

});


// ==========================================
// TASK 2 - GRADE CHECKER
// ==========================================

let assignment1Box = document.getElementById("assignment1Box");
let assignment2Box = document.getElementById("assignment2Box");
let testBox = document.getElementById("testBox");

let gradeButton = document.getElementById("gradeButton");
let gradeOutput = document.getElementById("gradeOutput");

gradeButton.addEventListener("click", function () {

    let assignment1 = Number(assignment1Box.value);
    let assignment2 = Number(assignment2Box.value);
    let test = Number(testBox.value);

    let average = (assignment1 + assignment2 + test) / 3;

    if (average >= 95) {
        gradeOutput.textContent = "Merit";
    }
    else if (
        assignment1 >= 80 &&
        assignment2 >= 80 &&
        test >= 80
    ) {
        gradeOutput.textContent = "Pass";
    }
    else {
        gradeOutput.textContent = "Fail";
    }

});


// ==========================================
// TASK 3 - MULTIPLICATION TABLE
// ==========================================

let tableNumberBox = document.getElementById("tableNumberBox");
let tableButton = document.getElementById("tableButton");
let tableOutput = document.getElementById("tableOutput");

tableButton.addEventListener("click", function () {

    let number = Number(tableNumberBox.value);

    let table = "";

    for (let i = 1; i <= 12; i++) {

        table = table +
            number + " x " + i + " = " + (number * i) + "\n";

    }

    tableOutput.textContent = table;

});


// ==========================================
// TASK 4 - NUMBER LIST WITH PUSH()
// ==========================================

let listNumberBox = document.getElementById("listNumberBox");
let addButton = document.getElementById("addButton");
let clearButton = document.getElementById("clearButton");
let listOutput = document.getElementById("listOutput");

// The array is outside the button functions
// so it keeps its values between clicks.
let numbers = [];


addButton.addEventListener("click", function () {

    let number = Number(listNumberBox.value);

    numbers.push(number);

    listOutput.textContent = numbers.join(", ");

});


clearButton.addEventListener("click", function () {

    numbers = [];

    listOutput.textContent = "";

});


// ==========================================
// TASK 5 - GUESSING GAME
// ==========================================

let guessBox = document.getElementById("guessBox");
let guessButton = document.getElementById("guessButton");
let guessOutput = document.getElementById("guessOutput");

// Pick one random number between 1 and 100
let secretNumber = Math.floor(Math.random() * 100) + 1;

let guessCount = 0;


guessButton.addEventListener("click", function () {

    let guess = Number(guessBox.value);

    guessCount++;

    if (guess > secretNumber) {

        guessOutput.textContent = "Too high";

    }
    else if (guess < secretNumber) {

        guessOutput.textContent = "Too low";

    }
    else {

        guessOutput.textContent =
            "Correct! You took " + guessCount + " guesses.";

    }

});