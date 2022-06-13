
// Wait for the DOM to finish loading before starting the survey 
document.addEventListener("DOMContentLoaded", function(){});

// Global Variables
// Variables from DOM
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container');
const answerContainer = document.getElementById('answer');

// undefined variable to hold question index 
let currentQuestionIndex

// list of questions in an array 
const questions = [
    {
        question: 'Who played Neo in the 1999 movie The Matrix?',
        answers: [
            { text: 'Keanue Reeves', correct: true },
            { text: 'Tom Cruise', correct: false },
            { text: 'Will Smith', correct: false },
            { text: 'Nicolas Cage', correct: false }
        ]
    },
]

// Event Listeners 

startButton.addEventListener('click', startQuiz);


/**
 * Hide Question before start, hide start button when pressed, show question.
 */
function startQuiz(){
    // hides start button and shows question 
    startButton.classList.add('hide');
    questionContainer.classList.remove('hide');
    // sets current question index to 0 (start)
    currentQuestionIndex = 0;
    console.log('question shown');
    
}

/**
 * Show question from question array 
 * 
 */
function showQuestion() {

}


/**
 * Sets up next question when next button is clicked 
 */
function setQuestion() {

}


/**
 * Carries out actions when answer is selected 
 */
function selectAnswer  () {

}
