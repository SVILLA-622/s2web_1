
## 🟢 Variables — store something

```javascript
let name = "Steve";
let age = 20;
const country = "New Zealand";
```

**Use `let` / `const` when you need to store information.**

* `let` → value can change
* `const` → value shouldn't be reassigned

```javascript
age = 21;
```

---

# 🟢 Output — show something

### `console.log()`

```javascript
console.log("Hello");
console.log(name);
```

**Use when you want to see something in the browser's developer console.**

Think:

```text
Console.WriteLine() in C#
        ↓
console.log() in JavaScript
```

---

# 🟢 Conditions — make decisions

### `if / else`

```javascript
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Under 18");
}
```

**Use `if` when your program needs to make a decision.**

---

# 🟢 Loops — repeat something

### `for` loop

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

**Use a `for` loop when you want to repeat something a certain number of times.**

---

### `for...of` — go through an array

```javascript
const names = ["Bob", "Sam", "John"];

for (const name of names) {
    console.log(name);
}
```

This goes:

```text
Bob
↓
Sam
↓
John
```

**Use `for...of` when you want to do something to every item in an array.**

This is similar to C#:

```csharp
foreach (string name in names)
```

So your memory can be:

> **"Every item?" → `for...of`**

---

# 🟢 Functions — make reusable code

```javascript
function sayHello() {
    console.log("Hello!");
}
```

Then **call the function**:

```javascript
sayHello();
```

The important part is:

```text
function sayHello()
       ↓
creates the function

sayHello()
    ↓
calls/runs the function
```

### Function with a parameter

```javascript
function greetUser(name) {
    console.log("Hello " + name);
}
```

Call it:

```javascript
greetUser("Steve");
```

Output:

```text
Hello Steve
```

So:

> **Create function → `function name()`**
> **Run function → `name()`**

---

# 🟢 Return — send a value back

```javascript
function add(a, b) {
    return a + b;
}
```

Then:

```javascript
let result = add(5, 3);
console.log(result);
```

Result:

```text
8
```

Think:

```text
add(5, 3)
    ↓
function calculates
    ↓
return 8
    ↓
result = 8
```

---

# 🟢 Arrays — store multiple things

```javascript
const fruits = ["Apple", "Banana", "Orange"];
```

Get an item:

```javascript
console.log(fruits[0]);
```

Gives:

```text
Apple
```

Remember:

> **Arrays start at index 0.**

```text
Apple   → 0
Banana  → 1
Orange  → 2
```

---

# 🟢 Add something to an array

### `push()`

```javascript
fruits.push("Mango");
```

Now:

```text
Apple
Banana
Orange
Mango
```

Use:

> **`push()` → add to the end of an array**

---

# 🟢 Objects — store related information

```javascript
const user = {
    name: "Steve",
    age: 20
};
```

Get information:

```javascript
console.log(user.name);
console.log(user.age);
```

Think:

```text
user
├── name
└── age
```

---

# 🔵 NOW THE IMPORTANT WEB STUFF

This is where JavaScript starts interacting with your HTML.

---

# 🟢 Find an HTML element

### `document.querySelector()`

HTML:

```html
<h1 id="title">Hello</h1>
```

JavaScript:

```javascript
const title = document.querySelector("#title");
```

This means:

> **"Find the HTML element with this ID."**

Then you can use `title`.

---

### Find a class

HTML:

```html
<p class="text">Hello</p>
```

JavaScript:

```javascript
const paragraph = document.querySelector(".text");
```

Remember:

```text
# → ID
. → class
```

Same selector idea as CSS.

---

# 🟢 Change HTML text

```javascript
title.textContent = "Hello World!";
```

If HTML originally says:

```html
<h1 id="title">Hello</h1>
```

it becomes:

```html
<h1 id="title">Hello World!</h1>
```

So:

> **`textContent` → change the text**

---

# 🟢 Get input from a textbox

HTML:

```html
<input id="username">
```

JavaScript:

```javascript
const username = document.querySelector("#username");
```

Get what the user typed:

```javascript
console.log(username.value);
```

So:

> **`.value` → get the value from an input**

---

# 🟢 Buttons / Events

HTML:

```html
<button id="myButton">Click Me</button>
```

JavaScript:

```javascript
const button = document.querySelector("#myButton");

button.addEventListener("click", function() {
    console.log("Button clicked!");
});
```

This means:

```text
Find button
    ↓
addEventListener()
    ↓
Wait for "click"
    ↓
Run this function
```

### The important pattern:

```javascript
element.addEventListener("event", function() {
    // code to run
});
```

For example:

```javascript
button.addEventListener("click", function() {
    sayHello();
});
```

So:

> **"When the user does X, do Y" → `addEventListener()`**

---

# 🟢 Create a new HTML element

### `document.createElement()`

```javascript
const newParagraph = document.createElement("p");
```

You've just created:

```html
<p></p>
```

but it isn't on the webpage yet.

---

# 🟢 Put content inside it

```javascript
newParagraph.textContent = "Hello!";
```

Now you've effectively created:

```html
<p>Hello!</p>
```

---

# 🟢 Put it onto the webpage

### `appendChild()`

```javascript
document.body.appendChild(newParagraph);
```

This adds the new paragraph to the page.

Think:

```text
createElement()
      ↓
create the thing

textContent
      ↓
put text inside it

appendChild()
      ↓
put it onto the webpage
```

This is **very important** for creating cards/results from API data.

---

# 🟢 Remove an element

```javascript
element.remove();
```

Use when you want to remove something from the page.

---

# 🟢 Change CSS with JavaScript

You can access `.style`:

```javascript
title.style.color = "red";
```

This changes the element's CSS.

---

# 🟣 Fetch — get data from an API

This is the big one you'll eventually use.

```javascript
fetch("https://example.com/api")
```

But normally you'll do something like:

```javascript
fetch("https://example.com/api")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
```

Think:

```text
fetch()
   ↓
ask API for data
   ↓
response
   ↓
.json()
   ↓
turn JSON into JavaScript data
   ↓
data
   ↓
use it
```

---

# 🟣 `async / await`

Another way of doing the same sort of thing:

```javascript
async function getUsers() {
    const response = await fetch("https://example.com/api");
    const data = await response.json();

    console.log(data);
}
```

Then:

```javascript
getUsers();
```

So when you see:

```javascript
getUsers();
```

that's simply **calling the function again/running it**.

---

# 🟣 JSON

An API might send:

```json
{
    "name": "Steve",
    "age": 20
}
```

After:

```javascript
const data = await response.json();
```

you can use:

```javascript
console.log(data.name);
console.log(data.age);
```

---

# ⭐ The BIG "what do I use?" cheat sheet

| If the question says...     | Think...  | Code                 |
| --------------------------- | --------- | -------------------- |
| Store information           | Variable  | `let` / `const`      |
| Print something             | Console   | `console.log()`      |
| Make a decision             | Condition | `if / else`          |
| Repeat X times              | Loop      | `for`                |
| Go through every array item | Loop      | `for...of`           |
| Reuse some code             | Function  | `function`           |
| Run a function              | Call it   | `getUser()`          |
| Store multiple values       | Array     | `[]`                 |
| Add to array                | Push      | `.push()`            |
| Store related information   | Object    | `{}`                 |
| Find HTML element           | DOM       | `querySelector()`    |
| Change HTML text            | DOM       | `.textContent`       |
| Get textbox input           | DOM       | `.value`             |
| React to click/input/etc.   | Event     | `addEventListener()` |
| Create HTML element         | DOM       | `createElement()`    |
| Add new element to page     | DOM       | `appendChild()`      |
| Remove element              | DOM       | `.remove()`          |
| Change CSS with JS          | Style     | `.style`             |
| Get data from API           | Fetch     | `fetch()`            |
| Turn response into JSON     | JSON      | `response.json()`    |
| Wait for fetch              | Async     | `await`              |
| Run async function          | Call      | `getUsers()`         |

## 🧠 The one I'd especially memorise for your SBA

When you're given an **API + webpage** task, you'll probably be combining these:

```text
HTML
 ↓
querySelector()
 ↓
addEventListener()
 ↓
function()
 ↓
fetch()
 ↓
response.json()
 ↓
data
 ↓
for...of
 ↓
createElement()
 ↓
textContent
 ↓
appendChild()
 ↓
HTML page
```



Yep — from the **MDN “What is JavaScript?” page**, these are the **new things to add** to your existing notes. I’ll leave out everything we already covered.

### 🆕 New JavaScript concepts

| If the question/task says…           | Think of…                        | What it does                                |
| ------------------------------------ | -------------------------------- | ------------------------------------------- |
| Run JavaScript when the page loads   | `<script>`                       | Adds JavaScript to an HTML page             |
| Use a separate JS file               | `src="script.js"`                | Connects HTML to an external JS file        |
| Load modern JavaScript               | `type="module"`                  | Loads JS as a module                        |
| Make script wait until HTML is ready | `defer`                          | Delays script until HTML has been parsed    |
| Run code after the page is loaded    | `DOMContentLoaded`               | Runs code when the HTML document is ready   |
| Write a one-line comment             | `//`                             | Comment for one line                        |
| Write a multi-line comment           | `/* */`                          | Comment across multiple lines               |
| Create an HTML element               | `document.createElement()`       | Makes a new HTML element                    |
| Add the new element to the page      | `.appendChild()`                 | Places it inside another element            |
| Loop through multiple HTML elements  | `for...of`                       | Handles each element one at a time          |
| Run code after a button is clicked   | `addEventListener("click", ...)` | Responds to a click                         |
| Use an API                           | `fetch()`                        | Requests data from a server/API             |
| Turn API response into usable data   | `response.json()`                | Converts JSON response into JavaScript data |
| Run code on the server               | Node.js                          | Allows JavaScript outside the browser       |

### ⭐ Important new idea: JavaScript APIs

An **API** is basically **ready-made functionality that you can use instead of building everything yourself**.

Two main types mentioned:

```text
APIs
├── Browser APIs
│   ├── DOM
│   ├── Geolocation
│   ├── Canvas
│   └── Audio/Video
│
└── Third-party APIs
    ├── Maps
    ├── Social media
    └── Other online services
```

### ⭐ Client-side vs server-side

```text
Client-side
JavaScript
   ↓
User's browser/computer
```

```text
Server-side
JavaScript
   ↓
Server
```

So if you see **client-side JavaScript**, think:

> **JavaScript running in the user's browser.**

If you see **server-side JavaScript**, think:

> **JavaScript running on the server.**

### ⭐ Static vs dynamic

**Static:**

> Page shows the same content.

**Dynamic:**

> Page can change/update depending on what happens.

For example:

```text
Click button
     ↓
JavaScript runs
     ↓
Page changes
```

That's **dynamic behaviour**.

**1. String methods**

```javascript
name.toUpperCase()
name.toLowerCase()
name.length
name.includes("a")
```

**2. Function return values**

```javascript
function add(a, b) {
    return a + b;
}
```

**3. Event bubbling / delegation**

Understand the basic idea that an event on a child can reach its parent.

**4. More object basics**

Especially accessing properties:

```javascript
user.name
user.age
```

**5. DOM scripting in more depth**

Especially changing, creating, removing and finding HTML elements.

**6. Network requests**

Going further with:

```javascript
fetch()
```

**7. JSON**

Reading and creating JSON data.

**8. Filtering data**

For example:

```javascript
const adults = users.filter(user => user.age >= 18);
```

**9. Rendering**

Taking the data you received and putting it onto the webpage.

**10. Debugging/error handling**

Finding out why your JavaScript isn't working.



# JavaScript Cheat Sheet — Simple Explanations

## 1. General Comments

### Single-line comment

```javascript
// this is a comment
```

**What it does:**
This is a note for humans. JavaScript ignores it.

### Multi-line comment

```javascript
/*
This is a comment
that can go over
multiple lines
*/
```

**What it does:**
Same thing, but the comment can cover multiple lines.

```text
//        → comment until the end of this line

/*
   ↓
multiple lines of comment
   ↓
*/
```

---

# 2. Variables

## Variable creation

```javascript
let school = "SheCodes";
let fullPackage = "SheCodes Pro";
let projects = 4;
let awesome = true;
```

**What it does:**
`let` creates a variable and stores a value inside it.

```text
school
  ↓
"SheCodes"

projects
  ↓
4

awesome
  ↓
true
```

---

## Variable operation

```javascript
let x = 2;
let y = 3;
let z = x + y; // 5

let city = "Lisbon";
let country = "Portugal";
let place = city + " " + country; // Lisbon Portugal
```

**What it does:**
Uses values stored in variables to calculate or create a new value.

```text
x = 2 ──┐
        ├──→ x + y → z = 5
y = 3 ──┘
```

```text
city = "Lisbon"
country = "Portugal"

      ↓

city + " " + country

      ↓

"Lisbon Portugal"
```

---

## Variable data types

```javascript
let age = 23;          // Number
let name = "Julie";    // String
let canCode = true;    // Boolean
```

**What it does:**
Shows different types of values a variable can store.

```text
23
↓
NUMBER

"Julie"
↓
STRING = text

true
↓
BOOLEAN = true or false
```

---

# 3. Structure / Data Types

## Array

```javascript
let students = ["Kate", "Julie", "Mariana"];
```

**What it does:**
An array stores multiple values in one variable.

```text
students
   ↓
┌────────┬─────────┬──────────┐
│  Kate  │  Julie  │ Mariana  │
│   [0]  │   [1]   │   [2]    │
└────────┴─────────┴──────────┘
```

**Remember:** Arrays start counting at `0`.

---

## Object

```javascript
let kate = {
    firstName: "Kate",
    lastName: "Johnson",
    age: 23,
    canCode: true
};
```

**What it does:**
An object stores information about one thing using named properties.

```text
kate
 ↓
┌──────────────────┐
│ firstName: Kate  │
│ lastName: Johnson│
│ age: 23          │
│ canCode: true    │
└──────────────────┘
```

**Easy memory:**

```text
Array  → list of things
Object → information about a thing
```

---

# 4. Alerts & Prompts

## Alert

```javascript
alert("Olá");

let name = "Angela";
alert(name);
```

**What it does:**
`alert()` shows a pop-up message.

```text
JavaScript
    ↓
 alert()
    ↓
┌───────────────┐
│     Olá!      │
│     [ OK ]    │
└───────────────┘
```

---

## Prompt

```javascript
let firstName = prompt("What is your first name?");
let lastName = prompt("What is your last name?");

let fullName = firstName + " " + lastName;

alert(fullName);
```

**What it does:**
`prompt()` asks the user for information and gets their answer.

```text
prompt()
   ↓
ASK USER
   ↓
USER TYPES ANSWER
   ↓
ANSWER STORED
   ↓
USE THE ANSWER
```

**Easy memory:**

```text
prompt → ASK
alert  → SHOW
```

---

# 5. If / Else

## If statement

```javascript
let country = prompt("What country are you from?");

if (country === "Portugal") {
    alert("You are cool");
}

if (country !== "Portugal") {
    alert("Too bad for you");
}
```

**What it does:**
Checks whether a condition is true.

```text
       country === Portugal?
             /       \
           YES        NO
            ↓          ↓
       "You are cool"
```

---

## If / else statement

```javascript
let age = prompt("How old are you?");

if (age < 18) {
    alert("You cannot apply");
} else {
    alert("You can apply");
}
```

**What it does:**
If the condition is true, run the first block. Otherwise, run `else`.

```text
        age < 18?
        /      \
      YES       NO
       ↓         ↓
   can't apply  can apply
```

---

## Nested if / else statement

```javascript
if (age < 18) {
    alert("You can't apply");
} else {
    if (age > 120) {
        alert("You can't apply");
    } else {
        alert("You can apply");
    }
}
```

**What it does:**
An `if` statement is placed inside another `if` statement.

```text
       age < 18?
       /       \
     YES        NO
      ↓          ↓
   DON'T      age > 120?
                /    \
              YES     NO
               ↓       ↓
            DON'T     APPLY
```

---

## Logical OR `||`

```javascript
if (age < 18 || gender === "male") {
    alert("You can't join SheCodes");
}
```

**What it does:**
`||` means **OR**. At least one condition needs to be true.

```text
condition 1 OR condition 2
          ↓
   either can be true
```

**Easy memory:**

> `||` = OR

---

## Logical AND `&&`

```javascript
if (continent === "Europe" && language === "Portuguese") {
    alert("You are from Portugal");
} else {
    alert("You are not from Portugal");
}
```

**What it does:**
`&&` means **AND**. Both conditions need to be true.

```text
Europe?
   +
Portuguese?
   ↓
BOTH TRUE
   ↓
Portugal
```

**Easy memory:**

> `&&` = AND

---

# 6. Comparison & Logical Operators

```javascript
2 > 3       // false
2 < 3       // true
2 <= 2      // true
3 >= 2      // true
2 === 5     // false
2 !== 3     // true
1 + 2 === 4 // false
```

**What it does:**
These operators compare values.

| Operator | Meaning               |   |    |
| -------- | --------------------- | - | -- |
| `>`      | greater than          |   |    |
| `<`      | less than             |   |    |
| `>=`     | greater than or equal |   |    |
| `<=`     | less than or equal    |   |    |
| `===`    | exactly equal         |   |    |
| `!==`    | not equal             |   |    |
| `&&`     | AND                   |   |    |
| `        |                       | ` | OR |

```text
2 < 3
 ↓
"Is 2 smaller than 3?"
 ↓
true
```

---

# 7. Strings

## Create a string

```javascript
let name = "SheCodes";
```

**What it does:**
Creates a string, which is text.

```text
"SheCodes"
    ↓
   TEXT
    ↓
  STRING
```

---

## String concatenation

```javascript
let firstName = "Julie";
let lastName = "Johnson";

let fullName = firstName + " " + lastName;
```

**What it does:**
Joins strings together.

```text
"Julie"
   +
" "
   +
"Johnson"
   ↓
"Julie Johnson"
```

---

## `trim()`

```javascript
let city = " Montreal  ";

city = city.trim();
```

**What it does:**
Removes extra spaces from the beginning and end.

```text
"   Montreal   "
       ↓
     trim()
       ↓
"Montreal"
```

---

## `replace()`

```javascript
let city = "Montreal";

city = city.replace("e", "é");
```

**What it does:**
Replaces one piece of text with another.

```text
"Montreal"
    ↓
replace e → é
    ↓
"Montréal"
```

---

## `toLowerCase()`

```javascript
let city = "Montreal";

city = city.toLowerCase();
```

**What it does:**
Changes the text to lowercase.

```text
"MONTREAL"
    ↓
toLowerCase()
    ↓
"montreal"
```

---

## `toUpperCase()`

```javascript
let city = "Montreal";

city = city.toUpperCase();
```

**What it does:**
Changes the text to uppercase.

```text
"Montreal"
    ↓
toUpperCase()
    ↓
"MONTREAL"
```

---

## Template literals

```javascript
let city = "Denver";

let sentence = `Kate is from ${city}`;
```

**What it does:**
Lets you easily put a variable inside text.

```text
city = "Denver"

`Kate is from ${city}`
          ↓
`Kate is from Denver`
```

**Remember:**

```text
"..." → normal string

`...` → template literal
         ↑
      backticks
```

---

# 8. Arrays

## Create an array

```javascript
let myList = [];

let fruits = ["apples", "oranges", "bananas"];

myList = [
    "banana",
    3,
    go,
    ["John", "Doe"],
    {
        firstName: "John",
        lastName: "Smith"
    }
];
```

**What it does:**
Creates a list that can contain multiple values.

```text
fruits
  ↓
[ apples | oranges | bananas ]
    [0]      [1]         [2]
```

---

## Access an array

```javascript
fruits[0];
fruits[1];
fruits[2];
fruits[3];
```

**What it does:**
Uses the index number to get an item from an array.

```text
fruits
  ↓
[ apples | oranges | bananas ]
    ↑
   [0]
```

**Remember:**

> First item = `[0]`

---

## Update an array

```javascript
fruits[1] = "Mango";
fruits[1] = 3;
```

**What it does:**
Changes the value at a particular index.

```text
BEFORE

[ apples | oranges | bananas ]
           [1]

             ↓

AFTER

[ apples | Mango | bananas ]
```

---

# 9. Loops

## `while` loop

```javascript
let times = 0;

while (times < 10) {
    console.log(times);
    times = times + 1;
}
```

**What it does:**
Repeats code while the condition is true.

```text
times = 0
   ↓
times < 10?
   ↓ YES
run code
   ↓
times + 1
   ↓
check again
   ↓
...
   ↓
times = 10
   ↓
STOP
```

---

## `forEach` loop

```javascript
let fruits = ["apples", "oranges", "bananas"];

fruits.forEach(function(fruit) {
    alert("I have " + fruit + " in my shopping bag");
});
```

**What it does:**
Runs the code once for **every item** in the array.

```text
[apples, oranges, bananas]
          ↓
       forEach
          ↓
apples → do something
oranges → do something
bananas → do something
```

**Easy memory:**

> `forEach` = do this for every item

---

## `do...while` loop

```javascript
let times = 0;

do {
    console.log(times);
    times = times + 1;
} while (times < 10);
```

**What it does:**
Runs the code first, then checks the condition.

```text
DO IT
 ↓
CHECK CONDITION
 ↓
YES → DO IT AGAIN
NO  → STOP
```

**Difference:**

```text
while
 ↓
CHECK FIRST
 ↓
DO

do...while
 ↓
DO FIRST
 ↓
CHECK
```

---

## `for` loop

```javascript
for (let i = 0; i < 10; i++) {
    console.log("i is " + i);
}
```

**What it does:**
Repeats code using a starting value, condition, and update.

```text
for (
    let i = 0;   ← START
    i < 10;      ← CONDITION
    i++          ← ADD 1
)
```

Another example:

```javascript
for (let i = 0; i < myList.length; i++) {
    alert("I have " + myList[i] + " in my shopping bag");
}
```

**What it does:**
Goes through the items in `myList`.

```text
i = 0
 ↓
myList[0]
 ↓
i = 1
 ↓
myList[1]
 ↓
i = 2
 ↓
...
```

---

## Remove first item — `shift()`

```javascript
fruits.shift();
```

**What it does:**
Removes the first item from an array.

```text
BEFORE

[ apples | oranges | bananas ]
    ↑
  REMOVE

AFTER

[ oranges | bananas ]
```

---

# 10. Dates

## Get current date/time

```javascript
let now = new Date();
```

**What it does:**
Gets the current date and time.

```text
new Date()
    ↓
CURRENT
DATE + TIME
```

---

## Create a date

```javascript
let date = Date.parse("01 Jan 2025 00:00:00 GMT");
```

**What it does:**
Converts the written date into a value JavaScript can work with.

```text
"01 Jan 2025"
      ↓
 Date.parse()
      ↓
JavaScript date value
```

---

## Get date data

```javascript
let now = new Date();

now.getMinutes();
now.getHours();
now.getDate();
now.getDay();
now.getMonth();
now.getFullYear();
```

**What it does:**
Gets individual pieces of information from a date.

```text
        DATE
         ↓
 ┌───────┼────────┐
 ↓       ↓        ↓
hours  minutes   year
 ↓       ↓        ↓
 10       30     2026
```

```text
getHours()     → hour
getMinutes()   → minute
getDate()      → day of month
getDay()       → day of week
getMonth()     → month
getFullYear()  → year
```

---

# 11. Numbers

## `Math.round()`

```javascript
Math.round(4.7);
```

Result:

```text
5
```

**What it does:**
Rounds to the nearest whole number.

```text
4.7 → 5
4.2 → 4
```

---

## `Math.floor()`

```javascript
Math.floor(4.7);
```

Result:

```text
4
```

**What it does:**
Rounds down.

```text
4.7
 ↓
 4
```

**Memory:** `floor` = down.

---

## `Math.ceil()`

```javascript
Math.ceil(4.7);
```

Result:

```text
5
```

**What it does:**
Rounds up.

```text
4.7
 ↓
 5
```

**Memory:** `ceil` = up.

---

## `Math.min()`

```javascript
Math.min(2, 5, 1);
```

Result:

```text
1
```

**What it does:**
Finds the smallest number.

```text
2   5   1
 \  |  /
   ↓
 MIN
   ↓
   1
```

---

## `Math.max()`

```javascript
Math.max(2, 5, 1);
```

Result:

```text
5
```

**What it does:**
Finds the biggest number.

```text
2   5   1
 \  ↓  /
   MAX
    ↓
    5
```

---

## `Math.random()`

```javascript
Math.random();
```

Example:

```text
0.47231881595639025
```

**What it does:**
Produces a random decimal between `0` and `1`.

```text
0
│
├──── random number ────┤
│                       │
0                       1
```

---

# 12. Objects

## Creating an object

### Object constructor

```javascript
let fruit = new Object();
```

**What it does:**
Creates an empty object.

### Object literal

```javascript
let user = {};
```

**What it does:**
Also creates an empty object.

### Object with information

```javascript
let student = {
    firstName: "Julie",
    lastName: "Johnson"
};
```

**What it does:**
Creates an object with properties and values.

```text
student
   ↓
┌───────────────────┐
│ firstName: Julie  │
│ lastName: Johnson │
└───────────────────┘
```

---

## Reading object properties

```javascript
let user = {
    firstName: "Lady",
    lastName: "Gaga",
    gender: "female"
};

alert(user.firstName);
alert(user.lastName);
```

**What it does:**
Gets information from an object using its property name.

```text
user
 ↓
firstName
 ↓
"Lady"
```

You can also use:

```javascript
alert(user["firstName"]);
alert(user["lastName"]);
```

Both are ways of accessing a property.

---

## Adding object properties

```javascript
let user = {
    firstName: "Lady",
    lastName: "Gaga",
    gender: "female"
};

user.profession = "Singer";
```

**What it does:**
Adds a new property to an object.

```text
user
 ↓
firstName
lastName
gender
   +
profession
   ↓
"Singer"
```

---

# 13. Object Arrays

```javascript
let users = [
    {
        firstName: "Bradley",
        lastName: "Cooper"
    },
    {
        firstName: "Lady",
        lastName: "Gaga"
    }
];

users.forEach(function(user, index) {
    for (let prop in user) {
        alert(prop + " is " + user[prop]);
    }
});
```

**What it does:**
Creates an array where each item is an object.

```text
users
 ↓
┌──────────────┐
│ Object 1     │
│ Bradley      │
│ Cooper       │
└──────────────┘
       +
┌──────────────┐
│ Object 2     │
│ Lady         │
│ Gaga         │
└──────────────┘
```

Then:

```text
users
 ↓
forEach
 ↓
each user
 ↓
for...in
 ↓
each property
```

---

# 14. Enumerating Object Properties

```javascript
let user = {
    firstName: "Lady",
    lastName: "Gaga",
    gender: "female"
};

for (let prop in user) {
    alert(prop);
    alert(user[prop]);
}
```

**What it does:**
`for...in` goes through the properties of an object.

```text
user
 ↓
for...in
 ↓
firstName → Lady
lastName  → Gaga
gender    → female
```

**Remember:**

```text
for...of → go through items
for...in → go through object properties
```

---

# 15. Functions

## JavaScript function

```javascript
function sayFact() {
    let name = prompt("What's your name?");

    if (name === "Sofia") {
        alert("Your name comes from the Greek -> Sophia");
    }
}

sayFact();
```

**What it does:**
Creates a reusable block of code.

```text
function sayFact()
       ↓
   ┌─────────┐
   │  CODE   │
   │  HERE   │
   └─────────┘
       ↓
   sayFact()
       ↓
      RUN
```

Important:

```javascript
function sayFact()
```

creates the function.

```javascript
sayFact();
```

calls/runs the function.

---

# 16. Function Parameters

```javascript
function fullName(firstName, lastName) {
    alert(firstName + " " + lastName);
}

let firstName = prompt("What's your first name?");
let lastName = prompt("What's your last name?");

fullName(firstName, lastName);

fullName("Kate", "Robinson");
```

**What it does:**
Parameters allow you to give information to a function.

```text
fullName("Kate", "Robinson")
          ↓          ↓
      firstName   lastName
          \          /
           \        /
            FUNCTION
                ↓
        "Kate Robinson"
```

**Easy memory:**

```text
parameter = placeholder

argument = actual value given to it
```

---

# 17. Function Returns

```javascript
function add(x, y) {
    return x + y;
}

let result = add(3, 4);
```

**What it does:**
`return` gives a value back from the function.

```text
3 + 4
 ↓
add()
 ↓
return 7
 ↓
result = 7
```

Another example:

```javascript
function getFullName(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    return fullName;
}

let userFullName = getFullName("Kate", "Robinson");

alert(userFullName);
```

**What it does:**
The function creates the name and gives it back.

```text
"Kate" + "Robinson"
       ↓
  getFullName()
       ↓
    return
       ↓
"Kate Robinson"
       ↓
userFullName
```

---

# 18. Closures

```javascript
function hello() {

    function go(name) {
        alert(name);
    }

    let name = "SheCodes";

    go(name);
}

hello();
```

**What it does:**
A function can contain another function, and the inner function can use information from the outer function.

```text
hello()
  ↓
┌─────────────────┐
│ name = SheCodes │
│                 │
│  go(name)       │
│      ↓          │
│    alert        │
└─────────────────┘
```

**Easy memory:**

> Closure = inner function can remember/use things from the outer function.

---

# 19. Debugging

## `console.log()`

```javascript
console.log(name);

console.log("Let's code!");
```

**What it does:**
Prints information to the browser's developer console.

```text
JavaScript
    ↓
console.log()
    ↓
Developer Console
    ↓
SEE THE VALUE
```

**Use it when:**

> "I want to see what this variable contains."

---

# 20. Selectors

## `querySelector()`

```javascript
let li = document.querySelector("li");

let day = document.querySelector(".day");

let paragraph = document.querySelector("ul#list p");
```

**What it does:**
Finds the **first matching HTML element**.

```text
HTML PAGE
   ↓
querySelector()
   ↓
FIND ELEMENT
   ↓
put it in a variable
```

Examples:

```javascript
document.querySelector("li");
```

Finds a `<li>`.

```javascript
document.querySelector(".day");
```

Finds an element with class `day`.

```javascript
document.querySelector("#list");
```

Finds an element with ID `list`.

---

## `querySelectorAll()`

```javascript
let lis = document.querySelectorAll("li");

let paragraphs = document.querySelectorAll("li#special p");
```

**What it does:**
Finds **all matching HTML elements**.

```text
HTML
 ↓
querySelectorAll("li")
 ↓
┌────┬────┬────┐
│ li │ li │ li │
└────┴────┴────┘
```

**Easy memory:**

```text
querySelector()
       ↓
     ONE

querySelectorAll()
       ↓
     MANY
```

---

# 21. Events

## Creating an event listener

```javascript
function sayHi() {
    alert("hi");
}

let element = document.querySelector("#city");

element.addEventListener("click", sayHi);
```

**What it does:**
Waits for an event and then runs a function.

```text
USER CLICKS
    ↓
"click" EVENT
    ↓
addEventListener
    ↓
sayHi()
    ↓
"hi"
```

**Easy memory:**

> Event = something happens.

---

# 22. `setTimeout()`

```javascript
function sayHello() {
    alert("Hello");
}

setTimeout(sayHello, 3000);
```

**What it does:**
Waits 3000 milliseconds (3 seconds), then runs the function **once**.

```text
setTimeout
    ↓
WAIT 3 seconds
    ↓
sayHello()
    ↓
RUN ONCE
```

---

# 23. `setInterval()`

```javascript
function sayHello() {
    alert("Hello");
}

setInterval(sayHello, 3000);
```

**What it does:**
Runs the function every 3 seconds.

```text
WAIT 3 sec
   ↓
sayHello()
   ↓
WAIT 3 sec
   ↓
sayHello()
   ↓
WAIT 3 sec
   ↓
...
```

**Easy memory:**

```text
setTimeout  → wait → do ONCE

setInterval → wait → do → wait → do → repeat
```

---

# 24. AJAX / Fetch

## AJAX with Fetch

```javascript
let root = "https://jsonplaceholder.typicode.com";
let path = "users/1";

fetch(root + "/" + path)
    .then(response => (
        response.json()
    ))
    .then(json => (
        console.log(json)
    ));
```

**What it does:**
`fetch()` requests data from an API/server.

```text
YOUR JAVASCRIPT
      ↓
    fetch()
      ↓
API / SERVER
      ↓
   RESPONSE
      ↓
response.json()
      ↓
JAVASCRIPT DATA
      ↓
console.log()
```

---

## `.then()`

```javascript
fetch(url)
    .then(response => response.json())
    .then(json => console.log(json));
```

**What it does:**
`.then()` means:

> "When the previous thing is finished, do this."

```text
fetch()
  ↓
WHEN FINISHED
  ↓
.then()
  ↓
do next thing
```

---

# 25. AJAX with Axios

First load Axios:

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

Then:

```javascript
function showUser(response) {
    alert(`The user name is ${response.data.name}`);
}

let url = "https://jsonplaceholder.typicode.com/users/1";

axios.get(url).then(showUser);
```

**What it does:**
Axios is a tool/library used to get data from an API/server.

```text
axios.get(url)
      ↓
   GET DATA
      ↓
  response
      ↓
 showUser()
      ↓
 display name
```

**Easy memory:**

```text
fetch()      → get data
axios.get()  → get data
```

---

# 26. Element Manipulation

## HTML classes

```javascript
let li = document.querySelector("li#special");

li.classList.remove("liked");

li.classList.add("something");
```

**What it does:**
Adds or removes CSS classes using JavaScript.

```text
HTML element
     ↓
  classList
   ↙     ↘
 add     remove
  ↓        ↓
class    class
```

---

## HTML content — `innerHTML`

```javascript
let li = document.querySelector("li");

li.innerHTML = "Hello World";
```

**What it does:**
Changes the HTML inside an element.

```text
<li>
   OLD CONTENT
</li>

       ↓

innerHTML = "Hello World"

       ↓

<li>
   Hello World
</li>
```

---

# 27. Forms

HTML:

```html
<form>
    <input type="text" id="email">
</form>
```

JavaScript:

```javascript
function signUp(event) {
    event.preventDefault();

    let input = document.querySelector("#email");

    console.log(input.value);
}

let form = document.querySelector("form");

form.addEventListener("submit", signUp);
```

**What it does:**
When the user submits the form, JavaScript gets what they typed.

```text
USER SUBMITS FORM
        ↓
     "submit"
        ↓
    signUp()
        ↓
preventDefault()
        ↓
find input
        ↓
input.value
        ↓
WHAT USER TYPED
```

### `preventDefault()`

```javascript
event.preventDefault();
```

**What it does:**
Stops the browser's normal default form action.

---

# 28. HTML Attribute Manipulation

## `setAttribute()`

```javascript
let button = document.querySelector("input#button");

button.setAttribute("disabled", "disabled");
```

**What it does:**
Adds or changes an HTML attribute.

```text
button
  ↓
setAttribute()
  ↓
disabled
  ↓
button becomes disabled
```

---

## `removeAttribute()`

```javascript
let email = document.querySelector("input#email");

email.removeAttribute("required");
```

**What it does:**
Removes an HTML attribute.

```text
required
   ↓
removeAttribute()
   ↓
GONE
```

---

# 29. CSS Styles with JavaScript

```javascript
let boxElement = document.querySelector("#box");

boxElement.style.background = "red";
boxElement.style.padding = "10px 20px";
boxElement.style.marginRight = "10px";
```

**What it does:**
JavaScript can directly change CSS styles on an HTML element.

```text
HTML element
     ↓
   .style
     ↓
 change CSS
     ↓
┌─────────────┐
│    BOX      │
│             │
│  changed!   │
└─────────────┘
```

For example:

```javascript
boxElement.style.background = "red";
```

means:

```text
change
  ↓
background
  ↓
to red
```

---

# 30. APIs

## Geolocation API

```javascript
function handlePosition(position) {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
}

navigator.geolocation.getCurrentPosition(handlePosition);
```

**What it does:**
Asks the browser for location information.

```text
Browser
   ↓
Geolocation API
   ↓
getCurrentPosition()
   ↓
location information
   ↓
latitude + longitude
```

---

# 🧠 Quick Memory Map

```text
VARIABLES
   ↓
let / const
   ↓
store information


DECISIONS
   ↓
if / else
   ↓
choose what happens


REPEAT
   ↓
for / while / forEach
   ↓
do something multiple times


FUNCTION
   ↓
function name() { }
   ↓
make reusable code


RETURN
   ↓
return
   ↓
give an answer back


ARRAY
   ↓
[ item, item, item ]
   ↓
list of things


OBJECT
   ↓
{ name: "Julie" }
   ↓
information about one thing


HTML → JS
   ↓
querySelector()
   ↓
find HTML


MULTIPLE HTML
   ↓
querySelectorAll()
   ↓
find MANY


USER ACTION
   ↓
addEventListener()
   ↓
react to it


CHANGE HTML
   ↓
textContent / innerHTML


CREATE HTML
   ↓
createElement()


PUT HTML ON PAGE
   ↓
appendChild()


GET USER INPUT
   ↓
input.value


API
   ↓
fetch()
   ↓
get data


API RESPONSE
   ↓
response.json()
   ↓
turn response into JS data


DATA
   ↓
forEach / for...of
   ↓
go through data


DEBUG
   ↓
console.log()
   ↓
see what's happening
```

# ⭐ Main API/Webpage Pattern

```text
HTML
 ↓
querySelector()
 ↓
USER ACTION
 ↓
addEventListener()
 ↓
fetch()
 ↓
response.json()
 ↓
DATA
 ↓
loop through data
 ↓
create/change HTML
 ↓
appendChild()
 ↓
WEBPAGE CHANGES
```


Yes — **that would actually make the cheat sheet much more useful for your SBA**.

Instead of only:

> **What does this code do?**

we'll have:

> **When do I use this code?**

So each topic becomes:

**1. Type → 2. Code → 3. When to use it → 4. What it does → 5. Simple diagram**

For example:

### `querySelector()`

```javascript
let button = document.querySelector("#button");
```

**When to use it:**
Use this when the question says you need to **find/get/select an HTML element** so JavaScript can do something with it.

**What it does:**
Finds the **first matching HTML element** and stores it in `button`.

```text
HTML
 ↓
querySelector("#button")
 ↓
find the button
 ↓
store it in → button
```

### `addEventListener()`

```javascript
button.addEventListener("click", sayHi);
```

**When to use it:**
Use this when the question says something should happen **when the user clicks, submits, types, hovers, etc.**

**What it does:**
Waits for an event, then runs a function.

```text
USER CLICKS
     ↓
 "click"
     ↓
sayHi()
     ↓
RUN
```

### `fetch()`

```javascript
fetch(url)
```

**When to use it:**
Use this when the question says you need to **get data from an API/server**.

**What it does:**
Requests data from another location.

```text
JavaScript
    ↓
 fetch()
    ↓
 API
    ↓
data comes back
```

-

* `let` → **when you need to store information**
* `if` → **when you need to make a decision**
* `for` → **when you need to repeat something**
* `forEach` → **when you need to do something to every array item**
* `function` → **when you need reusable code**
* `return` → **when a function needs to give a value back**
* `prompt()` → **when you need to ask the user for input**
* `alert()` → **when you need to show the user a message**
* `.value` → **when you need to get what the user typed**
* `.textContent` → **when you need to change text**
* `.innerHTML` → **when you need to change HTML inside an element**
* `createElement()` → **when you need to create a new HTML element**
* `appendChild()` → **when you need to put that new element onto the page**
* `classList.add()` → **when you need JavaScript to add a CSS class**
* `classList.remove()` → **when you need JavaScript to remove a CSS class**
* `setAttribute()` → **when you need to add/change an HTML attribute**
* `removeAttribute()` → **when you need to remove an HTML attribute**
* `response.json()` → **when you receive API data and need to turn the response into usable JavaScript data**
* `.then()` → **when you need to say “after this finishes, do this”**
* `console.log()` → **when you need to see/check what something contains**
* `Math.random()` → **when you need a random number**
* `Math.floor()` → **when you need to round down**
* `Math.ceil()` → **when you need to round up**
* `Math.round()` → **when you need normal rounding**


| What you're doing            | C#                                  | JavaScript                          | When to use                           |
| ---------------------------- | ----------------------------------- | ----------------------------------- | ------------------------------------- |
| **Print output**             | `Console.WriteLine("Hi");`          | `console.log("Hi");`                | Show/check information in the console |
| **Get user input**           | `string name = Console.ReadLine();` | `let name = prompt("Name?");`       | Get input from the user               |
| **Create a variable**        | `int age = 20;`                     | `let age = 20;`                     | Value can change                      |
| **Create a constant**        | `const int MAX = 5;`                | `const MAX = 5;`                    | Value should not change               |
| **String variable**          | `string name = "Sam";`              | `let name = "Sam";`                 | Store text                            |
| **Decimal number**           | `double price = 9.99;`              | `let price = 9.99;`                 | Store numbers with decimals           |
| **Boolean**                  | `bool isReady = true;`              | `let isReady = true;`               | Store `true` / `false`                |
| **Add numbers**              | `int z = x + y;`                    | `let z = x + y;`                    | Perform calculations                  |
| **If statement**             | `if (x > 5) { }`                    | `if (x > 5) { }`                    | Make a decision                       |
| **Else**                     | `else { }`                          | `else { }`                          | What happens when `if` is false       |
| **AND**                      | `x > 5 && y < 10`                   | `x > 5 && y < 10`                   | Both conditions must be true          |
| **OR**                       | `x > 5 \|\| y < 10`                 | `x > 5 \|\| y < 10`                 | At least one condition is true        |
| **NOT**                      | `!isReady`                          | `!isReady`                          | Reverse `true` / `false`              |
| **For loop**                 | `for (int i = 0; i < 5; i++)`       | `for (let i = 0; i < 5; i++)`       | Repeat a set number of times          |
| **Foreach**                  | `foreach (int x in numbers)`        | `for (const x of numbers)`          | Go through every item                 |
| **Switch**                   | `switch (x) { }`                    | `switch (x) { }`                    | Choose between different cases        |
| **Array**                    | `int[] numbers = {1, 2, 3};`        | `let numbers = [1, 2, 3];`          | Store multiple values                 |
| **Array length**             | `numbers.Length`                    | `numbers.length`                    | Find how many items                   |
| **Add to array/list**        | `numbers.Add(4);`                   | `numbers.push(4);`                  | Add an item                           |
| **Access an item**           | `numbers[0]`                        | `numbers[0]`                        | Get an item by position               |
| **Random number**            | `rand.Next(1, 7)`                   | `Math.floor(Math.random() * 6) + 1` | Generate a random number              |
| **Create a method/function** | `static int Cube(int n)`            | `function cube(n)`                  | Create reusable code                  |
| **Return a value**           | `return n * n * n;`                 | `return n * n * n;`                 | Send a value back                     |
| **Convert text to number**   | `Convert.ToInt32(text)`             | `Number(text)`                      | Turn text into a number               |
| **String interpolation**     | `$"Hello {name}"`                   | `` `Hello ${name}` ``               | Put variables inside text             |




























