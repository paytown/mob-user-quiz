import tally from './questions/tally.js';

const json = window.localStorage.getItem('scorecard');
const scorecard = JSON.parse(json);

const result = tally(scorecard);

const finalResult = document.getElementById('final-result');

finalResult.textContent = result;
