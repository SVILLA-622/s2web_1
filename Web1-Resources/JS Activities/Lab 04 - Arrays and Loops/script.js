// ========================================
// SESSION 4 - ARRAYS & LOOPS
// ========================================


// ========================================
// TASK 1 - TEN RANDOM NUMBERS
// ========================================

let numbers = [];

for (let i = 0; i < 10; i++) {

    let randomNumber = Math.floor(Math.random() * 100) + 1;

    numbers.push(randomNumber);
}

for (const number of numbers) {
    console.log(number);
}


// ========================================
// TASK 2 - REVERSE ORDER
// ========================================

let numbers2 = [];

for (let i = 0; i < 20; i++) {
    numbers2.push(i + 1);
}

console.log("Reverse order:");

for (let i = numbers2.length - 1; i >= 0; i--) {
    console.log(numbers2[i]);
}


// ========================================
// TASK 3 - MARKS AND AVERAGE
// ========================================

let marks = [];
let total = 0;

for (let i = 0; i < 5; i++) {

    let mark = Number(prompt(`Enter mark ${i + 1}:`));

    marks.push(mark);

    total = total + mark;
}

let average = total / marks.length;

console.log("Marks:");

for (const mark of marks) {
    console.log(mark);
}

console.log(`Average: ${average.toFixed(2)}`);


// ========================================
// TASK 4 - GUESSING GAME
// ========================================

let secretNumbers = [];

// Create 7 random numbers
for (let i = 0; i < 7; i++) {

    let randomNumber = Math.floor(Math.random() * 10) + 1;

    secretNumbers.push(randomNumber);
}

// Show the numbers
console.log("Remember these numbers:");
console.log(secretNumbers);

// Wait for the user to see them
prompt("Press OK when you are ready to guess.");

// Clear the console
console.clear();

let correct = 0;

// Ask the user for 7 guesses
for (let i = 0; i < 7; i++) {

    let guess = Number(prompt(`Guess number ${i + 1}:`));

    if (guess === secretNumbers[i]) {
        correct++;
    }
}

console.log(`You got ${correct} out of 7 correct.`);


// ========================================
// TASK 5 - TIMES TABLE INTO AN ARRAY
// ========================================

let table = Number(prompt("Which multiplication table do you want?"));

let multiples = [];

for (let i = 1; i <= 20; i++) {

    let answer = table * i;

    multiples.push(answer);
}

console.log(`${table} times table:`);

for (let i = 0; i < multiples.length; i++) {

    console.log(`${table} * ${i + 1} = ${multiples[i]}`);
}


// ========================================
// TASK 6 - USING .PUSH()
// ========================================

let userNumbers = [];
let input = "";

do {

    input = prompt("Enter a number, or type stop to finish:");

    if (input !== "stop") {

        let number = Number(input);

        userNumbers.push(number);
    }

} while (input !== "stop");


console.log("Numbers entered:");

for (const number of userNumbers) {
    console.log(number);
}