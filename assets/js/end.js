// End Page JS 
// Pulls username from text input 
const username = document.getElementById('username')
// identifies save score button
const saveScoreBtn = document.getElementById('save-score-btn')
const finalScore = document.getElementById('final-score')
// Pulls most recent score from 
const mostRecentScore = localStorage.getItem('mostRecentScore')

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_SCORES = 5 

finalScore.innerText = mostRecentScore
console.log(mostRecentScore)

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value 
})

saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('/')
}