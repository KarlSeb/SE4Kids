const testRedYellowBlueInvisibleAtStart = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('red').visible === false && t.getSprite('yellow').visible === false && t.getSprite('blue').visible === false, 1000);
    t.assert.not(t.getSprite('red').visible, 'Red should be invisible at start');
    t.assert.not(t.getSprite('yellow').visible, 'Yellow should be invisible at start');
    t.assert.not(t.getSprite('blue').visible, 'Blue should be invisible at start');
    t.end();
}

const testScoreAtStart = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('score') === 0, 1000);
    t.assert.equal(t.getGlobalVariable('score'), 0, 'Score should be 0 at start');
    t.end();
}

const testLivesAtStart = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('lives') === 3, 1000);
    t.assert.equal(t.getGlobalVariable('lives'), 3, 'Lives should be 3 at start');
    t.end();
}

const testDelayAtStart = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('delay') === 8, 1000);
    t.assert.equal(t.getGlobalVariable('delay'), 8, 'Delay should be 8 at start');
    t.end();
}

const testDelayDecreases = async function (t) {
    t.greenFlag();
    await t.runForTime(10000);
    t.assert.equal(t.getGlobalVariable('delay'), 7.5, 'Delay should decrease by 0.5 every 10 seconds');
    await t.runForTime(10000);
    t.assert.equal(t.getGlobalVariable('delay'), 7, 'Delay should decrease by 0.5 every 10 seconds');
    t.end();
}

const testDelayDoesNotGoUnder2 = async function (t) {
    t.greenFlag();
    await t.runForTime(120000); // Run for 2 minutes to ensure delay has decreased multiple times
    t.assert.greaterOrEqual(t.getGlobalVariable('delay'), 2, 'Delay should not go under 2');
    t.end();
}

const testRed3rollerTurnsRight = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const initialDirection = t.getSprite('red3roller').direction;
    t.keyPress('right arrow');
    await t.runForTime(100);
    t.assert.equal(t.getSprite('red3roller').direction, initialDirection + 3, 'Red3roller should turn right in increments of 3 degrees');
    t.end();
}

const testRed3rollerTurnsLeft = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const initialDirection = t.getSprite('red3roller').direction;
    t.keyPress('left arrow');
    await t.runForTime(100);
    t.assert.equal(t.getSprite('red3roller').direction, initialDirection - 3, 'Red3roller should turn left in increments of 3 degrees');
    t.end();
}

const testRedCreatesClone = async function (t) {
    t.greenFlag();
    await t.runForTime(2000);
    const red = t.getSprite('red');
    t.assert.equal(red.getCloneCount(), 1, 'Red should create a clone 2 seconds after program start');
    t.end();
}

const testRedCreatesCloneEveryDelay = async function (t) {
    t.greenFlag();
    await t.runForTime(2000);
    const red = t.getSprite('red');
    const initialCloneCount = red.getCloneCount();
    await t.runForTime(t.getGlobalVariable('delay') * 1000);
    t.assert.equal(red.getCloneCount(), initialCloneCount + 1, 'Red should create a clone every delay seconds');
    t.end();
}

const testYellowCreatesClone = async function (t) {
    t.greenFlag();
    await t.runForTime(4000);
    const yellow = t.getSprite('yellow');
    t.assert.equal(yellow.getCloneCount(), 1, 'Yellow should create a clone 4 seconds after program start');
    t.end();
}

const testYellowCreatesCloneEveryDelay = async function (t) {
    t.greenFlag();
    await t.runForTime(4000);
    const yellow = t.getSprite('yellow');
    const initialCloneCount = yellow.getCloneCount();
    await t.runForTime(t.getGlobalVariable('delay') * 1000);
    t.assert.equal(yellow.getCloneCount(), initialCloneCount + 1, 'Yellow should create a clone every delay seconds');
    t.end();
}

const testBlueCreatesClone = async function (t) {
    t.greenFlag();
    await t.runForTime(6000);
    const blue = t.getSprite('blue');
    t.assert.equal(blue.getCloneCount(), 1, 'Blue should create a clone 6 seconds after program start');
    t.end();
}

const testBlueCreatesCloneEveryDelay = async function (t) {
    t.greenFlag();
    await t.runForTime(6000);
    const blue = t.getSprite('blue');
    const initialCloneCount = blue.getCloneCount();
    await t.runForTime(t.getGlobalVariable('delay') * 1000);
    t.assert.equal(blue.getCloneCount(), initialCloneCount + 1, 'Blue should create a clone every delay seconds');
    t.end();
}

const testCloneStartPositions = async function (t) {
    t.greenFlag();
    await t.runForTime(2000);
    const redClone = t.getSprite('red').getClone(0);
    const startX = [t.getGlobalVariable('start positions')[0], t.getGlobalVariable('start positions')[1]];
    const startY = [t.getGlobalVariable('start positions')[0], t.getGlobalVariable('start positions')[1]];
    t.assert.ok(startX.includes(redClone.x), 'Clone x position should be one of the start positions');
    t.assert.ok(startY.includes(redClone.y), 'Clone y position should be one of the start positions');
    t.end();
}

const testCloneDirectionTowardsRed3roller = async function (t) {
    t.greenFlag();
    await t.runForTime(2000);
    const redClone = t.getSprite('red').getClone(0);
    const red3roller = t.getSprite('red3roller');
    const expectedDirection = Math.atan2(red3roller.y - redClone.y, red3roller.x - redClone.x) * (180 / Math.PI);
    t.assert.equal(redClone.direction, expectedDirection, 'Clone direction should point towards the red3roller');
    t.end();
}

const testCloneStartsVisible = async function (t) {
    t.greenFlag();
    await t.runForTime(2000);
    const redClone = t.getSprite('red').getClone(0);
    t.assert.ok(redClone.visible, 'Clone should start visible');
    t.end();
}

const testCloneMovesTowardsRed3roller = async function (t) {
    t.greenFlag();
    await t.runForTime(2000);
    const redClone = t.getSprite('red').getClone(0);
    const red3roller = t.getSprite('red3roller');
    await t.runUntil(() => redClone.isTouchingSprite('red3roller'), 10000);
    t.assert.ok(redClone.isTouchingSprite('red3roller'), 'Clone should move towards red3roller until it touches red3roller');
    t.end();
}

const testCloneDeletedAfterTouchingRed3roller = async function (t) {
    t.greenFlag();
    await t.runForTime(2000);
    const redClone = t.getSprite('red').getClone(0);
    await t.runUntil(() => redClone.isTouchingSprite('red3roller'), 10000);
    await t.runForTime(1000);
    t.assert.equal(t.getSprite('red').getCloneCount(), 0, 'Clone should be deleted after touching red3roller');
    t.end();
}

const testRedTouchColor = async function (t) {
    t.greenFlag();
    await t.runForTime(2000);
    const red = t.getSprite('red');
    const initialScore = t.getGlobalVariable('score');
    const initialLives = t.getGlobalVariable('lives');
    if (red.isTouchingColor([255, 0, 0])) {
        t.assert.equal(t.getGlobalVariable('score'), initialScore + 1, 'Score should be increased by 1 if red touches the color [255, 0, 0]');
    } else {
        t.assert.equal(t.getGlobalVariable('lives'), initialLives - 1, 'Lives should be decreased by 1 if red does not touch the color [255, 0, 0]');
    }
    t.end();
}

const testYellowTouchColor = async function (t) {
    t.greenFlag();
    await t.runForTime(4000);
    const yellow = t.getSprite('yellow');
    const initialScore = t.getGlobalVariable('score');
    const initialLives = t.getGlobalVariable('lives');
    if (yellow.isTouchingColor([255, 255, 0])) {
        t.assert.equal(t.getGlobalVariable('score'), initialScore + 1, 'Score should be increased by 1 if yellow touches the color [255, 255, 0]');
    } else {
        t.assert.equal(t.getGlobalVariable('lives'), initialLives - 1, 'Lives should be decreased by 1 if yellow does not touch the color [255, 255, 0]');
    }
    t.end();
}

const testBlueTouchColor = async function (t) {
    t.greenFlag();
    await t.runForTime(6000);
    const blue = t.getSprite('blue');
    const initialScore = t.getGlobalVariable('score');
    const initialLives = t.getGlobalVariable('lives');
    if (blue.isTouchingColor([0, 63, 255])) {
        t.assert.equal(t.getGlobalVariable('score'), initialScore + 1, 'Score should be increased by 1 if blue touches the color [0, 63, 255]');
    } else {
        t.assert.equal(t.getGlobalVariable('lives'), initialLives - 1, 'Lives should be decreased by 1 if blue does not touch the color [0, 63, 255]');
    }
    t.end();
}

const testGameEndsWhenLivesZero = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('lives') === 0, 100000);
    t.assert.ok(t.getGlobalVariable('gameOver'), 'Game should end when lives reaches 0');
    t.end();
}

const testHighscoreSetToScore = async function (t) {
    t.greenFlag();
    await t.runForTime(2000);
    const initialHighscore = t.getGlobalVariable('highscore');
    t.getGlobalVariable('score', initialHighscore + 1);
    await t.runForTime(1000);
    t.assert.equal(t.getGlobalVariable('highscore'), initialHighscore + 1, 'Highscore should be set to score if score is higher than highscore');
    t.end();
}

module.exports = [
	{
		 test: testRedYellowBlueInvisibleAtStart,
		 name: "testRedYellowBlueInvisibleAtStart",
		 description: "Red, Yellow, and Blue are invisible at start",
		 categories: []
	},
	{
		 test: testScoreAtStart,
		 name: "testScoreAtStart",
		 description: "Global variable score is set to 0 at start",
		 categories: []
	},
	{
		 test: testLivesAtStart,
		 name: "testLivesAtStart",
		 description: "Global variable lives is set to 3 at start",
		 categories: []
	},
	{
		 test: testDelayAtStart,
		 name: "testDelayAtStart",
		 description: "Global variable delay is set to 8 at start",
		 categories: []
	},
	{
		 test: testDelayDecreases,
		 name: "testDelayDecreases",
		 description: "Delay decreases by 0.5 every 10 seconds",
		 categories: []
	},
	{
		 test: testDelayDoesNotGoUnder2,
		 name: "testDelayDoesNotGoUnder2",
		 description: "Delay does not go under 2",
		 categories: []
	},
	{
		 test: testRed3rollerTurnsRight,
		 name: "testRed3rollerTurnsRight",
		 description: "Red3roller turns right in increments of 3 degrees when right arrow is pressed",
		 categories: []
	},
	{
		 test: testRed3rollerTurnsLeft,
		 name: "testRed3rollerTurnsLeft",
		 description: "Red3roller turns left in increments of 3 degrees when left arrow is pressed",
		 categories: []
	},
	{
		 test: testRedCreatesClone,
		 name: "testRedCreatesClone",
		 description: "Red creates a clone 2 seconds after program start",
		 categories: []
	},
	{
		 test: testRedCreatesCloneEveryDelay,
		 name: "testRedCreatesCloneEveryDelay",
		 description: "Red creates a clone every delay seconds",
		 categories: []
	},
	{
		 test: testYellowCreatesClone,
		 name: "testYellowCreatesClone",
		 description: "Yellow creates a clone 4 seconds after program start",
		 categories: []
	},
	{
		 test: testYellowCreatesCloneEveryDelay,
		 name: "testYellowCreatesCloneEveryDelay",
		 description: "Yellow creates a clone every delay seconds",
		 categories: []
	},
	{
		 test: testBlueCreatesClone,
		 name: "testBlueCreatesClone",
		 description: "Blue creates a clone 6 seconds after program start",
		 categories: []
	},
	{
		 test: testBlueCreatesCloneEveryDelay,
		 name: "testBlueCreatesCloneEveryDelay",
		 description: "Blue creates a clone every delay seconds",
		 categories: []
	},
	{
		 test: testCloneStartPositions,
		 name: "testCloneStartPositions",
		 description: "Each clone picks randomly the first or second item on the start positions list for both the x and y coordinate",
		 categories: []
	},
	{
		 test: testCloneDirectionTowardsRed3roller,
		 name: "testCloneDirectionTowardsRed3roller",
		 description: "Each clone direction points towards the red3roller",
		 categories: []
	},
	{
		 test: testCloneStartsVisible,
		 name: "testCloneStartsVisible",
		 description: "Each existing clone starts visible",
		 categories: []
	},
	{
		 test: testCloneMovesTowardsRed3roller,
		 name: "testCloneMovesTowardsRed3roller",
		 description: "Each clone moves towards red3roller until it touches red3roller",
		 categories: []
	},
	{
		 test: testCloneDeletedAfterTouchingRed3roller,
		 name: "testCloneDeletedAfterTouchingRed3roller",
		 description: "Clone is deleted after touching red3roller",
		 categories: []
	},
	{
		 test: testRedTouchColor,
		 name: "testRedTouchColor",
		 description: "Score is increased by 1 if red touches the color [255, 0, 0], else lives is decreased by 1",
		 categories: []
	},
	{
		 test: testYellowTouchColor,
		 name: "testYellowTouchColor",
		 description: "Score is increased by 1 if yellow touches the color [255, 255, 0], else lives is decreased by 1",
		 categories: []
	},
	{
		 test: testBlueTouchColor,
		 name: "testBlueTouchColor",
		 description: "Score is increased by 1 if blue touches the color [0, 63, 255], else lives is decreased by 1",
		 categories: []
	},
	{
		 test: testGameEndsWhenLivesZero,
		 name: "testGameEndsWhenLivesZero",
		 description: "Game ends when lives reaches 0",
		 categories: []
	},
	{
		 test: testHighscoreSetToScore,
		 name: "testHighscoreSetToScore",
		 description: "Highscore is set to score if score is higher than highscore",
		 categories: []
	},
]
