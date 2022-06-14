// Highscores JS 

const highScoresList = document.getElementById('high-scores-list')

highScoresList.innerHTML = 
highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join('')