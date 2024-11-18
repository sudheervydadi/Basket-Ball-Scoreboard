let homeScore = document.getElementById('home-score');
let hScore = 0;
function addHomeScore(score) {
  hScore += score;
  homeScore.textContent = hScore;
}

let guestScore = document.getElementById('guest-score');
let gScore = 0;
function addGuestScore(score) {
  gScore += score;
  guestScore.textContent = gScore;
}
