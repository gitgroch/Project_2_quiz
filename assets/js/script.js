
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
const questionImage = document.getElementById('image-box')



// undefined variables to hold question index and the value for random question
let currentQuestionIndex;
let randomQuestion;

// list of questions and answers in an array 
const questions = [
    {
        question: 'What 1999 film did Will Smith pass up to start in Wild Wild West instead?',
        img: '<img src="assets/media/qimg_thematrix.webp" alt="Movie art featurin Neo, Trinity and Morpheus from The Matrix">',
        answers: [
            { text: 'The Matrix', correct: true },
            { text: 'Dark City', correct: false },
            { text: 'Star Wars: Episode 1', correct: false },
            { text: 'The Truman Show', correct: false }
        ]
    },
    {
        question: 'What is the name of Ripley\'s cat in "Alien"?',
        img: '<img src="assets/media/qimg_alien_cat.webp" alt="Ripley and her cat from the movie Alien">',
        answers: [
            { text: 'Brian', correct: false },
            { text: 'Spot', correct: false },
            { text: 'Mitty', correct: false },
            { text: 'Jonesy', correct: true }
        ]
    },
    {
        question: 'Who played Mad Max in the original Mad Max trilogy?',
        img: '<img src="assets/media/qimg_mad_max.webp" alt="A group of road warrioes from the movie Mad Max">',
        answers: [
            { text: 'Keanue Reeves', correct: false },
            { text: 'Mel Gibson', correct: true },
            { text: 'Tom Cruise', correct: false },
            { text: 'Nicolas Cage', correct: false }
        ]
    },
    {
        question: 'In what year does the movie \'Blade Runner\' take place?',
        img: '<img src="assets/media/qimg_bladerunner.webp" alt="Movie art featureing key charachters from the film BladeRunner ">',
        answers: [
            { text: '2019', correct: true },
            { text: '2049', correct: false },
            { text: '2077', correct: false },
            { text: '2022', correct: false }
        ]
    },
    {
        question: 'What is Captain Picard\'s favourite tea?',
        img: '<img src="assets/media/qimg_picard_tea.webp" alt="Captain Picard with a cup of tea">',
        answers: [
            { text: 'Matcha ', correct: false },
            { text: 'Oolong ', correct: false },
            { text: 'Earl Grey', correct: true },
            { text: 'Yorkshire Tea', correct: false }
        ]
    },
]

// Event Listeners 

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setQuestion()
})

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
    questionImage.innerHTML =question.img;
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
    const selectedButton = e.target 
    const correct = selectedButton.dataset.correct
    // setStatusClass(document.body, correct)
    Array.from(answerContainer.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (randomQuestion.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart Quiz'
        startButton.classList.remove('hide')
        startButton.classList.add('restart-btn')
    }
    }
    


function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }

}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function resetState (){
    nextButton.classList.add('hide')
    while (answerContainer.firstChild) {
        answerContainer.removeChild
        (answerContainer.firstChild)
    }
}