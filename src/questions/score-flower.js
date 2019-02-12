function scoreFlower(flower, scorecard) {
    if(flower === 'rose') {
        scorecard.red += 1;
    }
    if(flower === 'lilac') {
        scorecard.red += 1;
        scorecard.blue += 1;
    }
    if(flower === 'sunflower') {
        scorecard.yellow += 1;
    }
}

export default scoreFlower;