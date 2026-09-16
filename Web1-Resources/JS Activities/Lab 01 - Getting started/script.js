// ========================================
// SESSION 1 - GETTING STARTED
// ========================================


// ========================================
// TASK 1 - HELLO WEB 1
// ========================================

console.log("Welcome to Web 1 JavaScript");
console.log("");
console.log("Your Name");


// ========================================
// TASK 2 - WHO ARE YOU?
// ========================================

let name = prompt("Who are you?");
let years = Number(prompt("How long have you lived in Dunedin?"));

console.log(`Hello ${name}, you have lived in Dunedin for ${years} years.`);


// ========================================
// TASK 3 - ADD TWO NUMBERS
// ========================================

let number1 = Number(prompt("Enter the first number:"));
let number2 = Number(prompt("Enter the second number:"));

let answer = number1 + number2;

console.log(`${number1} + ${number2} = ${answer}`);


// ========================================
// TASK 4 - TV TIME CALCULATOR
// ========================================

let hoursPerNight = Number(prompt("How many hours of TV do you watch per night?"));

let hoursPerWeek = hoursPerNight * 7;
let hoursPerMonth = hoursPerWeek * 4;
let hoursPerYear = hoursPerWeek * 52;

console.log(`Hours per week: ${hoursPerWeek}`);
console.log(`Hours per month: ${hoursPerMonth}`);
console.log(`Hours per year: ${hoursPerYear}`);


// ========================================
// TASK 5 - AGE CALCULATOR
// ========================================

let age = Number(prompt("How old are you?"));

let days = age * 365;
let hours = days * 24;

console.log(`You have lived for approximately ${days} days.`);
console.log(`You have lived for approximately ${hours} hours.`);


// ========================================
// TASK 6 - CAR TRIP DISTANCE
// ========================================

let averageSpeed = Number(prompt("What is the average speed in km/hr?"));
let elapsedTime = Number(prompt("What is the total elapsed time in hours?"));
let nonTravelTime = Number(prompt("What is the total non-travel time in hours?"));

let distance = averageSpeed * (elapsedTime - nonTravelTime);

console.log(`Distance = ${distance} km`);


// ========================================
// TASK 7 - MILK AVERAGE
// ========================================

let price1 = Number(prompt("Enter the first milk price:"));
let price2 = Number(prompt("Enter the second milk price:"));
let price3 = Number(prompt("Enter the third milk price:"));

let average = (price1 + price2 + price3) / 3;

console.log(`$${average.toFixed(2)}`);