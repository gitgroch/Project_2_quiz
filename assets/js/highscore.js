// Highscores JS 
const highScoresList = document.getElementById('high-scores-list');
// sets highscore variable to parsed JSON string or an empty array
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
// Sets HTML to a list item with user name and score from the object
highScoresList.innerHTML = 
highScores.map(score => {
    return `<li class="high-score">${score.name} :  ${score.score}</li>`;
// return array as string
}).join('');