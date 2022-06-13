
// Wait for the DOM to finish loading before starting the survey 
document.addEventListener("DOMContentLoaded", function(){});

// Global Variables

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container');
const answerContainer = document.getElementById('answer');

// Event Listeners 

startButton.addEventListener('click', startQuiz);


/**
 * Hide Question before start 
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
