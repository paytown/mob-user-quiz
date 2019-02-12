function tally(scorecard) {
    if(scorecard.red >= scorecard.blue && scorecard.red >= scorecard.yellow) {
        return 'red';
    } 
    if(scorecard.blue >= scorecard.yellow && scorecard.blue > scorecard.red) {
        return 'blue';
    }
    if(scorecard.yellow > scorecard.red && scorecard.yellow > scorecard.blue) {
        return 'yellow';
    }
}

export default tally;