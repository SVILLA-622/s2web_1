
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


































