// End Page JS 
// Pulls username from text input 
const username = document.getElementById('username')
// identifies save score button
const saveScoreBtn = document.getElementById('save-score-btn')
const finalScore = document.getElementById('final-score')
// Sets variable to the value of the mostRecentScore stored locally 
const mostRecentScore = localStorage.getItem('mostRecentScore')
// sets variable to parsed JSON string or an empty array 
const highScores = JSON.parse(localStorage.getItem('highScores')) || []
// Sets maximum highscoes to include 
const MAX_HIGH_SCORES = 5

finalScore.innerText = mostRecentScore

// event listener for form when an input is detected 
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

/**
 * Sets a variable tp hold score and name object, then sorts them to display the highest score first.
 */
saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a, b) => {
        return b.score - a.score
    })

    // Removes and adds scores based on value
    highScores.splice(5)
    // convert highscores object to JSON string 
    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('index.html')
}