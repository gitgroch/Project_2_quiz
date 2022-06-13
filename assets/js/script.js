
// Wait for the DOM to finish loading before starting the survey 
document.addEventListener("DOMContentLoaded", function(){});

// Global Variables
// Variables from DOM
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question')
const answerContainer = document.getElementById('answer');

// undefined variable to hold question index 
let currentQuestionIndex;
let randomQuestion;

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
 * Hide Question before start, hide start button when pressed, then show question.
 * calls setQuestion function to show 1st question 
 */
function startQuiz(){
    // hides start button and shows question 
    startButton.classList.add('hide');
    questionContainer.classList.remove('hide');
    // randomises questions by sorting the elements of the question array and assigning them a random value 
    randomQuestion = questions.sort(() => Math.random() - .5);
    // sets current question index to 0 (start)
    currentQuestionIndex = 0;
    setQuestion();
    console.log('question shown');

    
}

/**
 * Sets up next question when next button is clicked 
 */
 function setQuestion() {
    showQuestion(randomQuestion[currentQuestionIndex])
}

/**
 * Shows a question object from question array 
 * 
 */
function showQuestion(question) {
    questionElement.innerText = question.question;
}





/**
 * Carries out actions when answer is selected 
 */
function selectAnswer  () {

}
