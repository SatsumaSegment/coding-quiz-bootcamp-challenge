// --- Get all relevant HTML elements ---
var startScreen = document.getElementById('start-screen');  // Start Screen
var start = document.getElementById('start');               // Start button
var timer = document.getElementById('time');                // Timer display

var questions = document.getElementById('questions');       // Questions screen
var question = document.getElementById('question-title')    // Question display
var choices = document.getElementById('choices')            // Choices section

var endScreen = document.getElementById('end-screen');      // End screen
var finalScore = document.getElementById('final-score');    // Final score display
var initials = document.getElementById('initials');         // Initials form field
var submitScore = document.getElementById('submit');        // Submit score button

// Create game variables
var countdown = 5;  // The game timer
var score = 0;      // The players score
var wrongAns = -5;  // Seconds to deduct for wrong answer

var questionCounter = 0;
var QAList = [{
    question: "",
    answers: {
        a: "",
        b: "",
        c: "",
        d: ""
    }
    correct: 
},
];

// Timer countdown function
function timerCount() {
    var c = setInterval(function() {
        countdown--;    // Deduct 1 second from countdown
        timer.innerText = countdown;
        // If the countdown reaches 0, call gameEnd() function
        if (countdown <= 0) {
            clearInterval(c);
            endGame();
        }
    }, 1000)
}

// Game start function
function startGame() {
    // Hide the start screen
    startScreen.style.display = "none";
    // Show the quiz
    showQuiz();
    // Begin the timer countdown
    timerCount();
}

// Show quiz function
function showQuiz() {
    // Show the quiz screen
    questions.classList.remove('hide');
    question.innerText = questionArray[questionCounter];
    var b1 = document.createElement('button');
    var b2 = document.createElement('button');
    var b3 = document.createElement('button');
    var b4 = document.createElement('button');
    b1.innerText = options[questionCounter][0];
    b2.innerText = options[questionCounter][1];
    choices.appendChild(b1);
    choices.appendChild(b2);
}

// Game end function
function endGame() {
    // Hide quiz screen
    questions.classList.add('hide');
    // Show the end screen
    endScreen.classList.remove('hide');
}

// Submit score function
function subScore() {
    return;
}


start.addEventListener('click', startGame);