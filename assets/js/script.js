
// Wait for the DOM to finish loading before starting the survey 
document.addEventListener("DOMContentLoaded", function(){});

// Global Variables
// Variables from DOM
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question')
const answerContainer = document.getElementById('answer');
const choiceText = document.getElementById('choice-text')
const welcomeNote = document.getElementById('welcome')


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
    welcomeNote.classList.add('hide');
    questionContainer.classList.remove('hide');
    // randomises questions by sorting the elements of the question array and assigning them a random value 
    randomQuestion = questions.sort(() => Math.random() - .5);
    // sets current question index to 0 (start)
    currentQuestionIndex = 0;
    // Call set question function pull in a question 
    setQuestion();
    console.log('question shown');

    
}

/**
 * Sets up next question when next button is clicked 
 */
 function setQuestion() {
    //  Resets everything to original state  when a new question is set
    resetState()
    //  calls showQuestion function to display a random question (andomQuestion) from the question array (currentQuestionIndex)
    showQuestion(randomQuestion[currentQuestionIndex])

}

/**
 * Inserts question text from questions array into DOM 
 */
function showQuestion(question) {
    // Sets inner text of the question Div in the DOM to text from the question array 
    questionElement.innerText = question.question;
    //  A loop for all possible answers 
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('choice-btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerContainer.appendChild(button)
    });
}


/**
 * Carries out actions when answer is selected 
 */
function selectAnswer  (e) {

}

function resetState (){
    nextButton.classList.add('hide')
    while (answerContainer.firstChild) {
        answerContainer.removeChild
        (answerContainer.firstChild)
    }
}