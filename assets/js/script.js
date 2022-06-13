
// Wait for the DOM to finish loading before starting the survey 
document.addEventListener("DOMContentLoaded", function(){});

// Global Variables

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container');
const answerContainer = document.getElementById('answer');

const questions = [
    {
        question: 'Who played Neo in the 1999 movie The Matrix'
        answers: [
            {text: 'Keanue Reeves'},
            {text: 'Tom Cruise'},
            {text: 'Will Smith'},
            {text: 'Nicolas Cage'}
        ]
    }
]

// Event Listeners 

startButton.addEventListener('click', startQuiz);


/**
 * Hide Question before start, hide start button when pressed, show question.
 */
function startQuiz(){
    startButton.classList.add('hide')
    questionContainer.classList.remove('hide');
    console.log('question shown')
    
}

function showQuestion() {

}

function setQuestion() {

}

function selectAnswer  () {

}
