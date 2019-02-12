const test = QUnit.test;

import scoreFlower from '../../src/questions/score-flower.js';

let scorecard = null;
QUnit.testStart(function() {
    scorecard = { red: 0, blue: 0, yellow: 0 };
});

test('score flowers: rose', function(assert) {
    //act
    scoreFlower('rose', scorecard);
    //assert
    assert.deepEqual(scorecard, { red: 1, blue: 0, yellow: 0 });
});

test('score flowers: lilac', function(assert) {
    scoreFlower('lilac', scorecard);

    assert.deepEqual(scorecard, { red: 1, blue: 1, yellow: 0 });
});

test('score flowers: sunflower', function(assert) {
    scoreFlower('sunflower', scorecard);

    assert.deepEqual(scorecard, { red: 0, blue: 0, yellow: 1 });
});
