// ========================================
// SESSION 2 - MAKING DECISIONS
// ========================================


// ========================================
// TASK 1 - HOARD-IT BANK
// ========================================

let balance = Number(prompt("Enter your balance:"));

if (balance > 0) {
    balance = balance * 1.03;
    console.log(`Your new balance is $${balance.toFixed(2)}`);
}
else {
    balance = balance - 20;
    console.log("Warning: overdraft fee charged.");
    console.log(`Your new balance is $${balance.toFixed(2)}`);
}


// ========================================
// TASK 2 - BETTER BANK
// ========================================

let balance2 = Number(prompt("Enter your balance:"));

if (balance2 > 0) {
    balance2 = balance2 * 1.03;
    console.log(`Your new balance is $${balance2.toFixed(2)}`);
}
else {
    console.log("Your balance is negative, but no fee is charged.");
    console.log(`Your balance is $${balance2.toFixed(2)}`);
}


// ========================================
// TASK 3 - ASCENDING ORDER
// ========================================

let number1 = Number(prompt("Enter the first number:"));
let number2 = Number(prompt("Enter the second number:"));
let number3 = Number(prompt("Enter the third number:"));

if (number1 <= number2 && number2 <= number3) {
    console.log("The numbers are in ascending order.");
}
else {
    console.log("The numbers are not in ascending order.");
}


// ========================================
// TASK 4 - ALL ODD
// ========================================

let odd1 = Number(prompt("Enter the first number:"));
let odd2 = Number(prompt("Enter the second number:"));
let odd3 = Number(prompt("Enter the third number:"));

if (odd1 % 2 !== 0 && odd2 % 2 !== 0 && odd3 % 2 !== 0) {
    console.log("All numbers are odd.");
}
else {
    console.log("Not all numbers are odd.");
}


// ========================================
// TASK 5 - SOCCER SCORES
// ========================================

let team1 = Math.floor(Math.random() * 10);
let team2 = Math.floor(Math.random() * 10);

console.log(`Team 1: ${team1}`);
console.log(`Your team: ${team2}`);

if (team2 > team1) {
    console.log("Your team won!");
}
else if (team2 < team1) {
    console.log("Your team lost.");
}
else {
    console.log("The game was a draw.");
}


// ========================================
// TASK 6 - GRADES
// ========================================

let assignment1 = Number(prompt("Enter Assignment 1 mark:"));
let assignment2 = Number(prompt("Enter Assignment 2 mark:"));
let test = Number(prompt("Enter test mark:"));

let average = (assignment1 + assignment2 + test) / 3;

if (average >= 95) {
    console.log("Merit");
}
else if (assignment1 >= 80 && assignment2 >= 80 && test >= 80) {
    console.log("Pass");
}
else {
    console.log("Fail");
}


// ========================================
// TASK 7 - NUMBER TYPE
// ========================================

let number = Number(prompt("Enter an integer:"));

if (number % 4 === 0) {
    console.log("Multiple of 4");
}
else if (number % 2 !== 0) {
    console.log("Odd");
}
else {
    console.log("Even but not a multiple of 4");
}


// ========================================
// TASK 8 - SWITCH - CITY NAMES
// ========================================

let city = prompt("Enter a city name:");

switch (city) {
    case "Wgtn":
    case "wgtn":
    case "WLG":
    case "Wellington":
        console.log("City is Wellington");
        break;

    default:
        console.log("Some other city");
        break;
}