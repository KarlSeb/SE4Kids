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
    await t.runUntil(() => t.getGlobalVariable('score') === 0, 1000);
    t.assert.strictEqual(t.getGlobalVariable('score'), 0, 'Score should be 0 at start');
    t.end();
}

const testLivesThree = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('lives') === 3, 1000);
    t.assert.strictEqual(t.getGlobalVariable('lives'), 3, 'Lives should be 3 at start');
    t.end();
}

const testDelayEight = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('delay') === 8, 1000);
    t.assert.strictEqual(t.getGlobalVariable('delay'), 8, 'Delay should be 8 at start');
    t.end();
}

const testDelayDecrease = async function (t) {
    t.greenFlag();
    await t.runForTime(10000);
    t.assert.strictEqual(t.getGlobalVariable('delay'), 7.5, 'Delay should be 7.5 after 10 seconds');
    await t.runForTime(10000);
    t.assert.strictEqual(t.getGlobalVariable('delay'), 7, 'Delay should be 7 after 20 seconds');
    t.end();
}

const testDelayNotUnderTwo = async function (t) {
    t.greenFlag();
    await t.runForTime(120000); // Run for 2 minutes to ensure delay has time to decrease
    t.assert.greaterOrEqual(t.getGlobalVariable('delay'), 2, 'Delay should not go under 2');
    t.end();
}

const testRed3RollerRightTurn = async function (t) {
    t.greenFlag();
    const red3roller = t.getSprite('red3roller');
    const initialDirection = red3roller.direction;
    t.keyPress('right arrow');
    await t.runForTime(100);
    t.assert.strictEqual(red3roller.direction, initialDirection + 3, 'Red3Roller should turn right by 3 degrees');
    t.end();
}

const testRed3RollerLeftTurn = async function (t) {
    t.greenFlag();
    const red3roller = t.getSprite('red3roller');
    const initialDirection = red3roller.direction;
    t.keyPress('left arrow');
    await t.runForTime(100);
    t.assert.strictEqual(red3roller.direction, initialDirection - 3, 'Red3Roller should turn left by 3 degrees');
    t.end();
}

const testRedCreatesClone = async function (t) {
    t.greenFlag();
    const red = t.getSprite('red');
    await t.runForTime(2000);
    t.assert.strictEqual(red.getCloneCount(), 1, 'Red should create a clone 2 seconds after start');
    t.end();
}

const testRedCreatesCloneAfterDelay = async function (t) {
    t.greenFlag();
    const red = t.getSprite('red');
    await t.runForTime(2000);
    const initialCloneCount = red.getCloneCount();
    const delay = t.getGlobalVariable('delay') * 1000;
    await t.runForTime(delay);
    t.assert.strictEqual(red.getCloneCount(), initialCloneCount + 1, 'Red should create another clone after delay seconds');
    t.end();
}

const testYellowCreatesClone = async function (t) {
    t.greenFlag();
    const yellow = t.getSprite('yellow');
    await t.runForTime(4000);
    t.assert.strictEqual(yellow.getCloneCount(), 1, 'Yellow should create a clone 4 seconds after start');
    t.end();
}

const testYellowCreatesCloneAfterDelay = async function (t) {
    t.greenFlag();
    const yellow = t.getSprite('yellow');
    await t.runForTime(4000);
    const initialCloneCount = yellow.getCloneCount();
    const delay = t.getGlobalVariable('delay') * 1000;
    await t.runForTime(delay);
    t.assert.strictEqual(yellow.getCloneCount(), initialCloneCount + 1, 'Yellow should create another clone after delay seconds');
    t.end();
}

const test1 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(6000);
    const blue = t.getSprite('blue');
    t.assert.greater(blue.getCloneCount(), 0, 'Blue should create a clone 6 seconds after program start');
    t.end();
}

const test2 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const delay = 2000; // Assuming delay is 2 seconds
    await t.runForTime(6000 + delay);
    const blue = t.getSprite('blue');
    const initialCloneCount = blue.getCloneCount();
    await t.runForTime(delay);
    t.assert.greater(blue.getCloneCount(), initialCloneCount, 'Another clone of blue should be created after delay seconds');
    t.end();
}

const test3 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(6000);
    const blue = t.getSprite('blue');
    const clone = blue.getClone(0);
    const startPositions = t.getSpriteVariable('blue', 'start positions');
    const validX = [startPositions[0][0], startPositions[1][0]];
    const validY = [startPositions[0][1], startPositions[1][1]];
    t.assert.ok(validX.includes(clone.x), 'Clone x position should be one of the start positions');
    t.assert.ok(validY.includes(clone.y), 'Clone y position should be one of the start positions');
    t.end();
}

const test4 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(6000);
    const blue = t.getSprite('blue');
    const clone = blue.getClone(0);
    const red3roller = t.getSprite('red3roller');
    const expectedDirection = Math.atan2(red3roller.y - clone.y, red3roller.x - clone.x) * 180 / Math.PI;
    t.assert.equal(clone.direction, expectedDirection, 'Clone direction should point towards red3roller');
    t.end();
}

const test5 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(6000);
    const blue = t.getSprite('blue');
    const clone = blue.getClone(0);
    t.assert.ok(clone.visible, 'Clone should start visible');
    t.end();
}

const test6 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(6000);
    const blue = t.getSprite('blue');
    const clone = blue.getClone(0);
    const red3roller = t.getSprite('red3roller');
    await t.runUntil(() => clone.isTouchingSprite('red3roller'), 10000);
    t.assert.ok(clone.isTouchingSprite('red3roller'), 'Clone should move towards and touch red3roller');
    t.end();
}

const test7 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(6000);
    const blue = t.getSprite('blue');
    const clone = blue.getClone(0);
    const red3roller = t.getSprite('red3roller');
    await t.runUntil(() => clone.isTouchingSprite('red3roller'), 10000);
    await t.runForTime(1000); // Wait for clone to be deleted
    t.assert.equal(blue.getCloneCount(), 0, 'Clone should be deleted after touching red3roller');
    t.end();
}

const test8 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const red = t.getSprite('red');
    const initialScore = t.getGlobalVariable('score');
    const initialLives = t.getGlobalVariable('lives');
    red.x = 0; red.y = 0; // Position red to touch the color
    await t.runForTime(1000);
    if (red.isTouchingColor([255, 0, 0])) {
        t.assert.equal(t.getGlobalVariable('score'), initialScore + 1, 'Score should be increased by 1');
    } else {
        t.assert.equal(t.getGlobalVariable('lives'), initialLives - 1, 'Lives should be decreased by 1');
    }
    t.end();
}

const test9 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const yellow = t.getSprite('yellow');
    const initialScore = t.getGlobalVariable('score');
    const initialLives = t.getGlobalVariable('lives');
    yellow.x = 0; yellow.y = 0; // Position yellow to touch the color
    await t.runForTime(1000);
    if (yellow.isTouchingColor([255, 255, 0])) {
        t.assert.equal(t.getGlobalVariable('score'), initialScore + 1, 'Score should be increased by 1');
    } else {
        t.assert.equal(t.getGlobalVariable('lives'), initialLives - 1, 'Lives should be decreased by 1');
    }
    t.end();
}

const test10 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const blue = t.getSprite('blue');
    const initialScore = t.getGlobalVariable('score');
    const initialLives = t.getGlobalVariable('lives');
    blue.x = 0; blue.y = 0; // Position blue to touch the color
    await t.runForTime(1000);
    if (blue.isTouchingColor([0, 63, 255])) {
        t.assert.equal(t.getGlobalVariable('score'), initialScore + 1, 'Score should be increased by 1');
    } else {
        t.assert.equal(t.getGlobalVariable('lives'), initialLives - 1, 'Lives should be decreased by 1');
    }
    t.end();
}

const test11 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    t.getGlobalVariable('lives').value = 1; // Set lives to 1
    await t.runForTime(1000);
    t.getGlobalVariable('lives').value = 0; // Set lives to 0
    await t.runForTime(1000);
    t.assert.ok(t.getGlobalVariable('gameOver'), 'Game should end when lives reaches 0');
    t.end();
}

const test12 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const initialHighscore = t.getGlobalVariable('highscore');
    t.getGlobalVariable('score').value = initialHighscore + 1; // Set score higher than highscore
    await t.runForTime(1000);
    t.assert.equal(t.getGlobalVariable('highscore'), initialHighscore + 1, 'Highscore should be set to score if score is higher');
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
		 description: "At start the global variable score is set to 0",
		 categories: []
	},
	{
		 test: testLivesThree,
		 name: "testLivesThree",
		 description: "At start the global variable lives is set to 3",
		 categories: []
	},
	{
		 test: testDelayEight,
		 name: "testDelayEight",
		 description: "At start the global variable delay is set to 8",
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
		 description: "If right arrow is pressed red3roller turns right in increments 3 degrees",
		 categories: []
	},
	{
		 test: testRed3RollerLeftTurn,
		 name: "testRed3RollerLeftTurn",
		 description: "If left arrow is pressed red3roller turns left in increments of 3 degrees",
		 categories: []
	},
	{
		 test: testRedCreatesClone,
		 name: "testRedCreatesClone",
		 description: "2 seconds after program start red creates a clone",
		 categories: []
	},
	{
		 test: testRedCreatesCloneAfterDelay,
		 name: "testRedCreatesCloneAfterDelay",
		 description: "Afterwards every delay seconds another clone of red is created",
		 categories: []
	},
	{
		 test: testYellowCreatesClone,
		 name: "testYellowCreatesClone",
		 description: "4 seconds after program start yellow creates a clone",
		 categories: []
	},
	{
		 test: testYellowCreatesCloneAfterDelay,
		 name: "testYellowCreatesCloneAfterDelay",
		 description: "Afterwards every delay seconds another clone of yellow is created",
		 categories: []
	},
	{
		 test: test1,
		 name: "test1",
		 description: "6 seconds after program start blue creates a clone",
		 categories: []
	},
	{
		 test: test2,
		 name: "test2",
		 description: "Afterwards every delay seconds another clone of blue is created",
		 categories: []
	},
	{
		 test: test3,
		 name: "test3",
		 description: "Each clone picks randomly the first or second item on the 'start positions' list for both the x and y coordinate",
		 categories: []
	},
	{
		 test: test4,
		 name: "test4",
		 description: "Each clone directions points towards the red3roller",
		 categories: []
	},
	{
		 test: test5,
		 name: "test5",
		 description: "Each existing clone starts visible",
		 categories: []
	},
	{
		 test: test6,
		 name: "test6",
		 description: "Each clone moves towards red3roller until it touches red3roller",
		 categories: []
	},
	{
		 test: test7,
		 name: "test7",
		 description: "After a clone touches red3roller it is deleted",
		 categories: []
	},
	{
		 test: test8,
		 name: "test8",
		 description: "Then if red touches the color [255, 0, 0] score is increased by 1, else lives is decreased by 1",
		 categories: []
	},
	{
		 test: test9,
		 name: "test9",
		 description: "Then if yellow touches the color [255, 255, 0] score is increased by 1, else lives is decreased by 1",
		 categories: []
	},
	{
		 test: test10,
		 name: "test10",
		 description: "Then if blue touches the color [0, 63, 255] score is increased by 1, else lives is decreased by 1",
		 categories: []
	},
	{
		 test: test11,
		 name: "test11",
		 description: "When lives reaches 0 the game ends",
		 categories: []
	},
	{
		 test: test12,
		 name: "test12",
		 description: "If score is higher than the global variable highscore, highscore is set to score",
		 categories: []
	},
]
