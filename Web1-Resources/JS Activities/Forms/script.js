// ==========================================
// CORRECT ANSWERS
// ==========================================

// Store the correct answer for Question 1.
let correctAnswer1 = "javascript";


// Store the correct answers for Question 2.
// There are two correct answers.
let correctAnswers2 = ["javascript", "python"];


// Store the correct answer for Question 3.
let correctAnswer3 = "HyperText Markup Language";


// ==========================================
// GET HTML ELEMENTS
// ==========================================

// Find the quiz form in the HTML.
let quizForm = document.getElementById("quiz-form");


// Find the results div in the HTML.
let results = document.getElementById("results");


// ==========================================
// CHECK THE QUIZ
// ==========================================

// Run this code when the form is submitted.
quizForm.addEventListener("submit", function (event) {

    // Stop the form from refreshing the page.
    event.preventDefault();


    // Start the score at zero.
    let score = 0;


    // ==========================================
    // QUESTION 1 - RADIO BUTTONS
    // ==========================================

    // Find the radio button that the user selected.
    let answer1 = document.querySelector('input[name="q1"]:checked');


    // Check that the user selected an answer.
    if (answer1) {

        // Check whether the selected answer is correct.
        if (answer1.value === correctAnswer1) {

            // Add one point to the score.
            score++;
        }
    }


    // ==========================================
    // QUESTION 2 - CHECKBOXES
    // ==========================================

    // Find all checked checkboxes for Question 2.
    let answers2 = document.querySelectorAll('input[name="q2"]:checked');


    // Create an empty array for the user's answers.
    let selectedAnswers2 = [];


    // Loop through each selected checkbox.
    for (let answer of answers2) {

        // Add the selected answer to the array.
        selectedAnswers2.push(answer.value);
    }


    // Sort the user's answers.
    selectedAnswers2.sort();


    // Sort the correct answers.
    correctAnswers2.sort();


    // First check that the number of answers is the same.
    if (selectedAnswers2.length === correctAnswers2.length) {

        // Assume the answers are correct.
        let answersCorrect = true;


        // Compare each answer.
        for (let i = 0; i < selectedAnswers2.length; i++) {

            // If an answer does not match,
            // the question is incorrect.
            if (selectedAnswers2[i] !== correctAnswers2[i]) {

                answersCorrect = false;
            }
        }


        // If every answer matched,
        // give the user one point.
        if (answersCorrect === true) {

            score++;
        }
    }


    // ==========================================
    // QUESTION 3 - TEXT INPUT
    // ==========================================

    // Get the text entered by the user.
    let answer3 = document.getElementById("q3").value;


    // Remove spaces from the beginning/end
    // and change the answer to lowercase.
    answer3 = answer3.trim().toLowerCase();


    // Change the correct answer to lowercase
    // so we can compare them.
    let correctAnswer3Lower = correctAnswer3.toLowerCase();


    // Check whether the user's answer is correct.
    if (answer3 === correctAnswer3Lower) {

        // Add one point.
        score++;
    }


    // ==========================================
    // CALCULATE PERCENTAGE
    // ==========================================

    // There are 3 questions.
    let percentage = (score / 3) * 100;


    // ==========================================
    // DISPLAY RESULTS
    // ==========================================

    // Display the user's score.
    results.innerHTML =
        "<h2>Quiz Results</h2>" +
        "<p>You scored " + score + " out of 3.</p>" +
        "<p>Your percentage is " + percentage + "%.</p>";


    // ==========================================
    // GIVE FEEDBACK
    // ==========================================

    // If all three questions are correct...
    if (score === 3) {

        results.innerHTML +=
            "<p>Excellent! All answers are correct.</p>";
    }


    // If two questions are correct...
    else if (score >= 2) {

        results.innerHTML +=
            "<p>Good job! You got most answers correct.</p>";
    }


    // If zero or one question is correct...
    else {

        results.innerHTML +=
            "<p>Keep practising and try again.</p>";
    }

});