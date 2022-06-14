// Code inspired by tutorials from Web Dev Simplified and Brian Design
// See README.md for links to tutorials used and further credit

// Wait for the DOM to finish loading before starting the survey 
document.addEventListener("DOMContentLoaded", function () {});

// Global Variables
// Variables from DOM
const nextButton = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerContainer = document.getElementById('answer');
const questionImage = document.getElementById('image-box');
const currentScore = document.getElementById('score');
const progressText = document.getElementById('progress-text');
const progressBarFull = document.getElementById('progress-bar-full');

// set score and question counter to 0 at beginning of quiz
let correctAnswers = 0;
let questionCounter = 0;

// set maximum amount of questions in Quiz rotation 
const MAX_QUESTIONS = 10;

// undefined variables to hold question index and the value for random question
let currentQuestionIndex;
let randomQuestion;

// list of questions,answers and images in an array 
const questions = [{
        question: 'What 1999 film did Will Smith pass up to star in Wild Wild West?',
        img: '<img src="assets/media/qimg_www.webp" alt="Will Smith and Kevin Kline in Wild Wild West">',
        answers: [{
                text: 'The Matrix',
                correct: true
            },
            {
                text: 'Dark City',
                correct: false
            },
            {
                text: 'Star Wars: Episode 1',
                correct: false
            },
            {
                text: 'The Truman Show',
                correct: false
            }
        ]
    },
    {
        question: 'What is the name of Ripley\'s cat in "Alien"?',
        img: '<img src="assets/media/qimg_alien_cat.webp" alt="Ripley and her cat from the movie Alien">',
        answers: [{
                text: 'Brian',
                correct: false
            },
            {
                text: 'Spot',
                correct: false
            },
            {
                text: 'Mitty',
                correct: false
            },
            {
                text: 'Jonesy',
                correct: true
            }
        ]
    },
    {
        question: 'Who played Mad Max in the original Mad Max trilogy?',
        img: '<img src="assets/media/qimg_mad_max.webp" alt="A group of road warrioes from the movie Mad Max">',
        answers: [{
                text: 'Keanue Reeves',
                correct: false
            },
            {
                text: 'Mel Gibson',
                correct: true
            },
            {
                text: 'Tom Cruise',
                correct: false
            },
            {
                text: 'Nicolas Cage',
                correct: false
            }
        ]
    },
    {
        question: 'In what year does the movie \'Blade Runner\' take place?',
        img: '<img src="assets/media/qimg_bladerunner.webp" alt="Movie art featureing key charachters from the film BladeRunner ">',
        answers: [{
                text: '2019',
                correct: true
            },
            {
                text: '2049',
                correct: false
            },
            {
                text: '2077',
                correct: false
            },
            {
                text: '2022',
                correct: false
            }
        ]
    },
    {
        question: 'What is Captain Picard\'s favourite tea?',
        img: '<img src="assets/media/qimg_picard_tea.webp" alt="Captain Picard with a cup of tea">',
        answers: [{
                text: 'Matcha ',
                correct: false
            },
            {
                text: 'Oolong ',
                correct: false
            },
            {
                text: 'Earl Grey',
                correct: true
            },
            {
                text: 'Yorkshire Tea',
                correct: false
            }
        ]
    },
    {
        question: 'What Actor wore the suit of Darth Vader in Star Wars: A New Hope?',
        img: '<img src="assets/media/qimg_darthvader.webp" alt="Darth Vader choking one of his soldiers">',
        answers: [{
                text: 'Hayden Christensen',
                correct: false
            },
            {
                text: 'James Earl Jones',
                correct: false
            },
            {
                text: 'David Prowse',
                correct: true
            },
            {
                text: 'Sebastian Shaw',
                correct: false
            }
        ]
    },
    {
        question: 'What year did Marty McFly travel to in Back to the Future?',
        img: '<img src="assets/media/qimg_back_to_the_future.webp" alt="Marty and Doc experimenting in Back to the future ">',
        answers: [{
                text: '1985 ',
                correct: false
            },
            {
                text: '1885',
                correct: false
            },
            {
                text: '1995',
                correct: false
            },
            {
                text: '1955',
                correct: true
            }
        ]
    },
    {
        question: 'Who was not a Captain of the Starship Enterprise?',
        img: '<img src="assets/media/qimg_enterprise_bridge.webp" alt="A view of the bridge of the starship Enterprise">',
        answers: [{
                text: 'Kathryn Janeway',
                correct: true
            },
            {
                text: 'Jean-Luc Picard',
                correct: false
            },
            {
                text: 'James T. Kirk',
                correct: false
            },
            {
                text: 'Jonathan Archer',
                correct: false
            }
        ]
    },
    {
        question: 'What movie was inspired by Philip K. Dicks "Do Androids Dream of Electric Sheep?',
        img: '<img src="assets/media/qimg_philip_k_dick.webp" alt="An artists impression of author Philip K. Dick">',
        answers: [{
                text: 'The Terminator',
                correct: false
            },
            {
                text: 'A.I.',
                correct: false
            },
            {
                text: 'Blade Runner',
                correct: true
            },
            {
                text: 'I, Robot',
                correct: false
            }
        ]
    },
    {
        question: 'In Terminator 2: Judgement Day, what date does Skynet become self-aware signalling the doom of the human race?',
        img: '<img src="assets/media/qimg_terminator.webp" alt="The Terminator adjusts his sunglasses">',
        answers: [{
                text: 'February 2, 1983',
                correct: false
            },
            {
                text: 'August 29, 1997',
                correct: true
            },
            {
                text: 'January 1, 2001',
                correct: false
            },
            {
                text: 'May 5, 2029',
                correct: false
            }
        ]
    },
]

// Event Listeners 
// When next button is clicked increment currentQuestionIndex and call function to set next question 
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setQuestion();
});

/**
 * Hide Place holder Question before start,  then show question.
 * Set current score display to 0 at start 
 * Set questionCounter to 0 at start
 * Sort questions by index then randomise to pick question to show 
 * Set currentQuestionIndex to 0 and call setQuestion() to setup first question
 */
function startQuiz() {
    questionContainer.classList.remove('hide');
    currentScore.innerText = 0;
    questionCounter = 0;
    // randomises questions by sorting the elements of the question array and assigning them a random value 
    randomQuestion = questions.sort(() => Math.random() - .5);
    // sets current question index to 0 (start)
    currentQuestionIndex = 0;
    // Call set question function pull in a question 
    setQuestion();
}

/**
 * Sets up next question when next button is clicked.
 * Resets state, shows random question, increments question counter,
 * then displays current question position counter and increases progress bar.
 */
function setQuestion() {
    //  Resets everything to original state when a new question is set
    resetState();
    //  calls showQuestion function to display a random question (randomQuestion) from the question array (currentQuestionIndex)
    showQuestion(randomQuestion[currentQuestionIndex]);
    // Increment question counter 
    questionCounter++;
    // display current question out of all possible questions 
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    // increase progress bar by applying style based on Question Counter divided by max questions to create a percentage
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;
}

/**
 * Inserts question text from questions array into DOM.
 * creates abuttons for each answer, adds dataset correct to correct answers.
 * sets event listener for click and asigns it value of selectAnswer 
 * 
 */
function showQuestion(question) {
    // Sets inner text of the question Div in the DOM to text from the question array
    questionElement.innerText = question.question;
    questionImage.innerHTML = question.img;
    //  A loop for all possible answers in array
    question.answers.forEach(answer => {
        // assigns variable to an answer button to be created 
        const button = document.createElement('button');
        // sets inner text of button to answer component from array
        button.innerText = answer.text;
        // Adds class to button 
        button.classList.add('choice-btn');
        // in the answer is correct add data attribute correct 
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        // event listener for which answer is clicked 
        button.addEventListener('click', selectAnswer);
        // adds button to DOM
        answerContainer.appendChild(button);
    });
}

/**
 * Carries out actions when answer is selected.
 * Increments correct answers if correct, 
 */
function selectAnswer(e) {
    // Sets variable to which button is selected
    const selectedButton = e.target;
    // sets variable based on if the data attribute is correct
    const correct = selectedButton.dataset.correct;
    // if the dataset is correct, increment correctAnswwer score, add text to show answer 
    if (correct) {
        correctAnswers++;
        currentScore.innerText = correctAnswers;
    }
    // creates an array from children of answerContainer, then lopops through them and sets status based on if the answer was correct
    Array.from(answerContainer.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    // Checks if length of array is greater than question index +1, shows next button if true, else goes to end page
    if (randomQuestion.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        // Sets a local storage item mostRecenScores and assigns it the value of correct answers
        localStorage.setItem('mostRecentScore', correctAnswers);
        return window.location.assign('end.html');
    }
}

/**
 * Adds class based on whether data attribute is correct
 */
function setStatusClass(element, correct) {
    clearStatusClass(element);

    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }

}

/** 
 * Removes class as part of reset
 */
function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

/**
 * hides the next button, loops through children of answer button elements and removes it
 */
function resetState() {
    nextButton.classList.add('hide');
    while (answerContainer.firstChild) {
        answerContainer.removeChild(answerContainer.firstChild);
    }
}