// ========================================
// SESSION 3 - LOOPS
// ========================================


// ========================================
// TASK 1 - RUGBY GAME
// ========================================

// Each game has exactly 10 plays.

let team1Score = 0;
let team2Score = 0;

for (let play = 1; play <= 10; play++) {

    let team1Play = Math.floor(Math.random() * 6);
    let team2Play = Math.floor(Math.random() * 6);

    team1Score = team1Score + team1Play;
    team2Score = team2Score + team2Play;

    console.log(
        `Play ${play}: Team 1 scored ${team1Play}, Team 2 scored ${team2Play}`
    );

    console.log(
        `Score: Team 1 = ${team1Score}, Team 2 = ${team2Score}`
    );
}

console.log("Final result:");

if (team1Score > team2Score) {
    console.log("Team 1 won!");
}
else if (team2Score > team1Score) {
    console.log("Team 2 won!");
}
else {
    console.log("The game was a draw!");
}


// ========================================
// TASK 2 - CHARACTER RANGE
// ========================================

let startCharacter = prompt("Enter the start character:");
let stopCharacter = prompt("Enter the stop character:");

let start = startCharacter.charCodeAt(0);
let stop = stopCharacter.charCodeAt(0);

let result = "";

for (let i = start; i <= stop; i++) {
    result = result + String.fromCharCode(i) + " ";
}

console.log(result);


// ========================================
// TASK 3 - MULTIPLICATION TABLE
// ========================================

let table = Number(prompt("Which multiplication table do you want?"));

for (let i = 1; i <= 12; i++) {

    let answer = table * i;

    console.log(`${table} * ${i} = ${answer}`);
}


// ========================================
// TASK 4 - COIN FLIPS
// ========================================

let heads = 0;
let tails = 0;

for (let i = 1; i <= 1000; i++) {

    let flip = Math.floor(Math.random() * 2);

    if (flip === 0) {
        heads++;
    }
    else {
        tails++;
    }
}

console.log(`Heads: ${heads}`);
console.log(`Tails: ${tails}`);


// ========================================
// TASK 5 - DICE ROLLS
// ========================================

let ones = 0;
let twos = 0;
let threes = 0;
let fours = 0;
let fives = 0;
let sixes = 0;

for (let i = 1; i <= 6000; i++) {

    let roll = Math.floor(Math.random() * 6) + 1;

    if (roll === 1) {
        ones++;
    }
    else if (roll === 2) {
        twos++;
    }
    else if (roll === 3) {
        threes++;
    }
    else if (roll === 4) {
        fours++;
    }
    else if (roll === 5) {
        fives++;
    }
    else {
        sixes++;
    }
}

console.log("Dice roll results:");
console.log("------------------");
console.log(`1: ${ones}`);
console.log(`2: ${twos}`);
console.log(`3: ${threes}`);
console.log(`4: ${fours}`);
console.log(`5: ${fives}`);
console.log(`6: ${sixes}`);


// ========================================
// TASK 6 - SUM AND COUNT
// ========================================

let number;
let total = 0;
let count = 0;

do {

    number = Number(prompt("Enter a number (0 to stop):"));

    if (number !== 0) {
        total = total + number;
        count++;
    }

} while (number !== 0);

console.log(`Numbers entered: ${count}`);
console.log(`Total: ${total}`);