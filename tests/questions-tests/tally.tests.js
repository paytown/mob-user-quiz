const test = QUnit.test;
import tally from '../../src/questions/tally.js';

test('if red is highest: return red', function(assert) {
    // arrange
    const scorecard = { red: 1, blue: 0, yellow: 0 };
    // act
    const result = tally(scorecard);
    // assert
    assert.equal(result, 'red');
});

test('if blue is highest: return blue', function(assert) {
    // arrange
    const scorecard = { red: 0, blue: 1, yellow: 0 };
    // act
    const result = tally(scorecard);
    // assert
    assert.equal(result, 'blue');
});

test('if yellow is highest: return yellow', function(assert) {
    // arrange
    const scorecard = { red: 0, blue: 3, yellow: 3 };
    // act
    const result = tally(scorecard);
    // assert
    assert.equal(result, 'yellow');
});