const testRedYellowBlueInvisible = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('red').visible === false && t.getSprite('yellow').visible === false && t.getSprite('blue').visible === false, 1000);
    t.assert.strictEqual(t.getSprite('red').visible, false, 'Red should be invisible at start');
    t.assert.strictEqual(t.getSprite('yellow').visible, false, 'Yellow should be invisible at start');
    t.assert.strictEqual(t.getSprite('blue').visible, false, 'Blue should be invisible at start');
    t.end();
}

const testScoreZero = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('score') === '0', 1000);
    t.assert.strictEqual(t.getGlobalVariable('score'), '0', 'Score should be 0 at start');
    t.end();
}

const testLivesThree = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('lives') === '3', 1000);
    t.assert.strictEqual(t.getGlobalVariable('lives'), '3', 'Lives should be 3 at start');
    t.end();
}

const testDelayEight = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('delay') === '8', 1000);
    t.assert.strictEqual(t.getGlobalVariable('delay'), '8', 'Delay should be 8 at start');
    t.end();
}

const testDelayDecrease = async function (t) {
    t.greenFlag();
    await t.runForTime(10000);
    t.assert.strictEqual(t.getGlobalVariable('delay'), '7.5', 'Delay should decrease by 0.5 every 10 seconds');
    await t.runForTime(10000);
    t.assert.strictEqual(t.getGlobalVariable('delay'), '7', 'Delay should decrease by 0.5 every 10 seconds');
    t.end();
}

const testDelayNotUnderTwo = async function (t) {
    t.greenFlag();
    await t.runForTime(120000); // Run for 2 minutes to ensure delay has decreased multiple times
    t.assert.greaterOrEqual(t.getGlobalVariable('delay'), '2', 'Delay should not go under 2');
    t.end();
}

const testRed3RollerRightTurn = async function (t) {
    t.greenFlag();
    const initialDirection = t.getSprite('red3roller').direction;
    t.keyPress('right arrow');
    await t.runForTime(100);
    t.assert.strictEqual(t.getSprite('red3roller').direction, initialDirection + 3, 'Red3roller should turn right in steps of 3 degrees');
    t.end();
}

const testRed3RollerLeftTurn = async function (t) {
    t.greenFlag();
    const initialDirection = t.getSprite('red3roller').direction;
    t.keyPress('left arrow');
    await t.runForTime(100);
    t.assert.strictEqual(t.getSprite('red3roller').direction, initialDirection - 3, 'Red3roller should turn left in steps of 3 degrees');
    t.end();
}

const testRedCloneAfter2Seconds = async function (t) {
    t.greenFlag();
    await t.runForTime(2000);
    t.assert.strictEqual(t.getSprite('red').getCloneCount(), 1, 'Red should create a clone 2 seconds after program start');
    t.end();
}

const testRedCloneEveryDelay = async function (t) {
    t.greenFlag();
    await t.runForTime(2000); // Wait for the first clone
    const initialCloneCount = t.getSprite('red').getCloneCount();
    const delay = parseFloat(t.getGlobalVariable('delay')) * 1000;
    await t.runForTime(delay);
    t.assert.strictEqual(t.getSprite('red').getCloneCount(), initialCloneCount + 1, 'Red should create a clone every delay seconds');
    t.end();
}

const testYellowCloneAfter4Seconds = async function (t) {
    t.greenFlag();
    await t.runForTime(4000);
    t.assert.strictEqual(t.getSprite('yellow').getCloneCount(), 1, 'Yellow should create a clone 4 seconds after program start');
    t.end();
}

const testYellowCloneEveryDelay = async function (t) {
    t.greenFlag();
    await t.runForTime(4000); // Wait for the first clone
    const initialCloneCount = t.getSprite('yellow').getCloneCount();
    const delay = parseFloat(t.getGlobalVariable('delay')) * 1000;
    await t.runForTime(delay);
    t.assert.strictEqual(t.getSprite('yellow').getCloneCount(), initialCloneCount + 1, 'Yellow should create a clone every delay seconds');
    t.end();
}

const testBlueCloneAfter6Seconds = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const blue = await t.getSprite('blue');
    await t.runForTime(6000);
    t.assert.equal(blue.getCloneCount(), 1, 'Blue should create a clone 6 seconds after program start');
    t.end();
}

const testBlueCloneEveryDelaySeconds = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const blue = await t.getSprite('blue');
    const delay = await blue.getVariable('delay');
    await t.runForTime(6000 + delay * 1000);
    t.assert.equal(blue.getCloneCount(), 2, 'Blue should create a clone every delay seconds');
    t.end();
}

const testCloneStartPositions = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const blue = await t.getSprite('blue');
    const startPositions = await blue.getList('start positions', true).value;
    await t.runForTime(6000);
    const clone = blue.getClone(0);
    t.assert.ok([startPositions[0], startPositions[1]].includes(clone.x), 'Clone x should be one of the start positions');
    t.assert.ok([startPositions[0], startPositions[1]].includes(clone.y), 'Clone y should be one of the start positions');
    t.end();
}

const testCloneDirectionTowardsRed3roller = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const blue = await t.getSprite('blue');
    const red3roller = await t.getSprite('red3roller');
    await t.runForTime(6000);
    const clone = blue.getClone(0);
    const expectedDirection = Math.atan2(red3roller.y - clone.y, red3roller.x - clone.x) * 180 / Math.PI;
    t.assert.equal(clone.direction, expectedDirection, 'Clone direction should point towards red3roller');
    t.end();
}

const testCloneStartsVisible = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const blue = await t.getSprite('blue');
    await t.runForTime(6000);
    const clone = blue.getClone(0);
    t.assert.ok(clone.visible, 'Clone should start visible');
    t.end();
}

const testCloneMovesTowardsRed3roller = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const blue = await t.getSprite('blue');
    const red3roller = await t.getSprite('red3roller');
    await t.runForTime(6000);
    const clone = blue.getClone(0);
    await t.runUntil(() => clone.isTouchingSprite('red3roller'), 10000);
    t.assert.ok(clone.isTouchingSprite('red3roller'), 'Clone should move towards red3roller until it touches red3roller');
    t.end();
}

const testCloneDeletedAfterTouchingRed3roller = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const blue = await t.getSprite('blue');
    const red3roller = await t.getSprite('red3roller');
    await t.runForTime(6000);
    const clone = blue.getClone(0);
    await t.runUntil(() => clone.isTouchingSprite('red3roller'), 10000);
    await t.runForTime(1000);
    t.assert.equal(blue.getCloneCount(), 0, 'Clone should be deleted after touching red3roller');
    t.end();
}

const testRedTouchColor = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const red = await t.getSprite('red');
    const initialScore = await t.getGlobalVariable('score');
    const initialLives = await t.getGlobalVariable('lives');
    await t.runUntil(() => red.isTouchingColor([255, 0, 0]), 10000);
    const newScore = await t.getGlobalVariable('score');
    const newLives = await t.getGlobalVariable('lives');
    if (red.isTouchingColor([255, 0, 0])) {
        t.assert.equal(newScore, initialScore + 1, 'Score should be increased by 1 if red touches the color [255, 0, 0]');
    } else {
        t.assert.equal(newLives, initialLives - 1, 'Lives should be decreased by 1 if red does not touch the color [255, 0, 0]');
    }
    t.end();
}

const testYellowTouchColor = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const yellow = await t.getSprite('yellow');
    const initialScore = await t.getGlobalVariable('score');
    const initialLives = await t.getGlobalVariable('lives');
    await t.runUntil(() => yellow.isTouchingColor([255, 255, 0]), 10000);
    const newScore = await t.getGlobalVariable('score');
    const newLives = await t.getGlobalVariable('lives');
    if (yellow.isTouchingColor([255, 255, 0])) {
        t.assert.equal(newScore, initialScore + 1, 'Score should be increased by 1 if yellow touches the color [255, 255, 0]');
    } else {
        t.assert.equal(newLives, initialLives - 1, 'Lives should be decreased by 1 if yellow does not touch the color [255, 255, 0]');
    }
    t.end();
}

const testBlueTouchColor = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const blue = await t.getSprite('blue');
    const initialScore = await t.getGlobalVariable('score');
    const initialLives = await t.getGlobalVariable('lives');
    await t.runUntil(() => blue.isTouchingColor([0, 63, 255]), 10000);
    const newScore = await t.getGlobalVariable('score');
    const newLives = await t.getGlobalVariable('lives');
    if (blue.isTouchingColor([0, 63, 255])) {
        t.assert.equal(newScore, initialScore + 1, 'Score should be increased by 1 if blue touches the color [0, 63, 255]');
    } else {
        t.assert.equal(newLives, initialLives - 1, 'Lives should be decreased by 1 if blue does not touch the color [0, 63, 255]');
    }
    t.end();
}

const testGameEndsWhenLivesZero = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const initialLives = await t.getGlobalVariable('lives');
    await t.runUntil(() => t.getGlobalVariable('lives') === 0, 10000);
    t.assert.equal(await t.getGlobalVariable('lives'), 0, 'Game should end when lives reaches 0');
    t.end();
}

const testHighscoreSetToScore = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const initialScore = await t.getGlobalVariable('score');
    const initialHighscore = await t.getGlobalVariable('highscore');
    await t.runUntil(() => t.getGlobalVariable('score') > initialHighscore, 10000);
    const newScore = await t.getGlobalVariable('score');
    const newHighscore = await t.getGlobalVariable('highscore');
    if (newScore > initialHighscore) {
        t.assert.equal(newHighscore, newScore, 'Highscore should be set to score if score is higher than highscore');
    }
    t.end();
}

module.exports = [
	{
		 test: testRedYellowBlueInvisible,
		 name: "testRedYellowBlueInvisible",
		 description: "At start red, yellow and blue are invisible",
		 categories: []
	},
	{
		 test: testScoreZero,
		 name: "testScoreZero",
		 description: "At start the global variable score is set to '0'",
		 categories: []
	},
	{
		 test: testLivesThree,
		 name: "testLivesThree",
		 description: "At start the global variable lives is set to '3'",
		 categories: []
	},
	{
		 test: testDelayEight,
		 name: "testDelayEight",
		 description: "At start the global variable delay is set to '8'",
		 categories: []
	},
	{
		 test: testDelayDecrease,
		 name: "testDelayDecrease",
		 description: "Every 10 seconds delay is decreased by 0.5",
		 categories: []
	},
	{
		 test: testDelayNotUnderTwo,
		 name: "testDelayNotUnderTwo",
		 description: "delay does not go under 2",
		 categories: []
	},
	{
		 test: testRed3RollerRightTurn,
		 name: "testRed3RollerRightTurn",
		 description: "If right arrow is pressed red3roller turns right in steps of 3 degrees",
		 categories: []
	},
	{
		 test: testRed3RollerLeftTurn,
		 name: "testRed3RollerLeftTurn",
		 description: "If left arrow is pressed red3roller turns left in steps of 3 degrees",
		 categories: []
	},
	{
		 test: testRedCloneAfter2Seconds,
		 name: "testRedCloneAfter2Seconds",
		 description: "2 seconds after program start red creates a clone",
		 categories: []
	},
	{
		 test: testRedCloneEveryDelay,
		 name: "testRedCloneEveryDelay",
		 description: "Afterwards every delay seconds another clone of red is created",
		 categories: []
	},
	{
		 test: testYellowCloneAfter4Seconds,
		 name: "testYellowCloneAfter4Seconds",
		 description: "4 seconds after program start yellow creates a clone",
		 categories: []
	},
	{
		 test: testYellowCloneEveryDelay,
		 name: "testYellowCloneEveryDelay",
		 description: "Afterwards every delay seconds another clone of yellow is created",
		 categories: []
	},
	{
		 test: testBlueCloneAfter6Seconds,
		 name: "testBlueCloneAfter6Seconds",
		 description: "Blue creates a clone 6 seconds after program start",
		 categories: []
	},
	{
		 test: testBlueCloneEveryDelaySeconds,
		 name: "testBlueCloneEveryDelaySeconds",
		 description: "Blue creates a clone every delay seconds",
		 categories: []
	},
	{
		 test: testCloneStartPositions,
		 name: "testCloneStartPositions",
		 description: "Each clone picks randomly the first or second item on the 'start positions' list for both the x and y coordinate",
		 categories: []
	},
	{
		 test: testCloneDirectionTowardsRed3roller,
		 name: "testCloneDirectionTowardsRed3roller",
		 description: "Each clone directions points towards the red3roller",
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
