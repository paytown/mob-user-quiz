import scoreFlower from '../questions/score-flower.js';
const quizForm = document.getElementById('quiz-form');

// Display user name and avatar
const json = window.localStorage.getItem('userProfile');
const userProfile = JSON.parse(json);
const userProfileDisplay = document.getElementById('user-profile-display');
const userProfileImage = document.getElementById('user-profile-image');
userProfileDisplay.textContent = userProfile.name;
userProfileImage.src = './assets/' + userProfile.avatar + '.png';


quizForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formDaddy = new FormData(quizForm);
    const answers = {
        flower: formDaddy.get('flower')
    };
    const scorecard = {
        red: 0,
        blue: 0,
        yellow: 0
    };
    scoreFlower(answers.flower, scorecard);

    const json = JSON.stringify(scorecard);
    window.localStorage.setItem('scorecard', json);

    window.location = './results.html';
});
