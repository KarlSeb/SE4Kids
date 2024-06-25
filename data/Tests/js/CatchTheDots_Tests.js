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
    t.assert.strictEqual(t.getGlobalVariable('delay'), 7.5, 'Delay should decrease by 0.5 every 10 seconds');
    await t.runForTime(10000);
    t.assert.strictEqual(t.getGlobalVariable('delay'), 7, 'Delay should decrease by 0.5 every 10 seconds');
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
    t.assert.strictEqual(red3roller.direction, initialDirection + 3, 'Red3roller should turn right in increments of 3 degrees');
    t.end();
}

const testRed3RollerLeftTurn = async function (t) {
    t.greenFlag();
    const red3roller = t.getSprite('red3roller');
    const initialDirection = red3roller.direction;
    t.keyPress('left arrow');
    await t.runForTime(100);
    t.assert.strictEqual(red3roller.direction, initialDirection - 3, 'Red3roller should turn left in increments of 3 degrees');
    t.end();
}

const testRedCreatesClone = async function (t) {
    t.greenFlag();
    await t.runForTime(2000);
    const red = t.getSprite('red');
    t.assert.strictEqual(red.getCloneCount(), 1, 'Red should create a clone 2 seconds after program start');
    t.end();
}

const testRedCreatesCloneEveryDelay = async function (t) {
    t.greenFlag();
    await t.runForTime(2000);
    const red = t.getSprite('red');
    const initialCloneCount = red.getCloneCount();
    const delay = t.getGlobalVariable('delay') * 1000;
    await t.runForTime(delay);
    t.assert.strictEqual(red.getCloneCount(), initialCloneCount + 1, 'Red should create a clone every delay seconds');
    t.end();
}

const testYellowCreatesClone = async function (t) {
    t.greenFlag();
    await t.runForTime(4000);
    const yellow = t.getSprite('yellow');
    t.assert.strictEqual(yellow.getCloneCount(), 1, 'Yellow should create a clone 4 seconds after program start');
    t.end();
}

const testYellowCreatesCloneEveryDelay = async function (t) {
    t.greenFlag();
    await t.runForTime(4000);
    const yellow = t.getSprite('yellow');
    const initialCloneCount = yellow.getCloneCount();
    const delay = t.getGlobalVariable('delay') * 1000;
    await t.runForTime(delay);
    t.assert.strictEqual(yellow.getCloneCount(), initialCloneCount + 1, 'Yellow should create a clone every delay seconds');
    t.end();
}

const test13 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(6000);
    const blue = t.getSprite('blue');
    t.assert.greater(blue.getCloneCount(), 0, 'Blue should create a clone 6 seconds after program start');
    t.end();
}

const test14 = async function (t) {
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

const test15 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(6000);
    const blue = t.getSprite('blue');
    const clones = blue.getClones();
    const startPositions = blue.getList('start positions', true);
    const validPositions = [startPositions[0], startPositions[1]];
    clones.forEach(clone => {
        t.assert.ok(validPositions.includes(clone.x), 'Clone x position should be one of the start positions');
        t.assert.ok(validPositions.includes(clone.y), 'Clone y position should be one of the start positions');
    });
    t.end();
}

const test16 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(6000);
    const blue = t.getSprite('blue');
    const red3roller = t.getSprite('red3roller');
    const clones = blue.getClones();
    clones.forEach(clone => {
        const expectedDirection = Math.atan2(red3roller.y - clone.y, red3roller.x - clone.x) * 180 / Math.PI;
        t.assert.equal(clone.direction, expectedDirection, 'Clone direction should point towards red3roller');
    });
    t.end();
}

const test17 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(6000);
    const blue = t.getSprite('blue');
    const clones = blue.getClones();
    clones.forEach(clone => {
        t.assert.ok(clone.visible, 'Each clone should start visible');
    });
    t.end();
}

const test18 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(6000);
    const blue = t.getSprite('blue');
    const red3roller = t.getSprite('red3roller');
    const clones = blue.getClones();
    await t.runUntil(() => clones.every(clone => clone.isTouchingSprite('red3roller')), 10000);
    clones.forEach(clone => {
        t.assert.ok(clone.isTouchingSprite('red3roller'), 'Each clone should move towards red3roller until it touches red3roller');
    });
    t.end();
}

const test19 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(6000);
    const blue = t.getSprite('blue');
    const red3roller = t.getSprite('red3roller');
    await t.runUntil(() => blue.getCloneCount() === 0, 10000);
    t.assert.equal(blue.getCloneCount(), 0, 'Clone should be deleted after touching red3roller');
    t.end();
}

const test20 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const red = t.getSprite('red');
    const initialScore = t.getGlobalVariable('score');
    const initialLives = t.getGlobalVariable('lives');
    await t.runUntil(() => red.isTouchingColor([255, 0, 0]), 10000);
    const newScore = t.getGlobalVariable('score');
    const newLives = t.getGlobalVariable('lives');
    if (red.isTouchingColor([255, 0, 0])) {
        t.assert.equal(newScore, initialScore + 1, 'Score should be increased by 1 if red touches [255, 0, 0]');
    } else {
        t.assert.equal(newLives, initialLives - 1, 'Lives should be decreased by 1 if red does not touch [255, 0, 0]');
    }
    t.end();
}

const test21 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const yellow = t.getSprite('yellow');
    const initialScore = t.getGlobalVariable('score');
    const initialLives = t.getGlobalVariable('lives');
    await t.runUntil(() => yellow.isTouchingColor([255, 255, 0]), 10000);
    const newScore = t.getGlobalVariable('score');
    const newLives = t.getGlobalVariable('lives');
    if (yellow.isTouchingColor([255, 255, 0])) {
        t.assert.equal(newScore, initialScore + 1, 'Score should be increased by 1 if yellow touches [255, 255, 0]');
    } else {
        t.assert.equal(newLives, initialLives - 1, 'Lives should be decreased by 1 if yellow does not touch [255, 255, 0]');
    }
    t.end();
}

const test22 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const blue = t.getSprite('blue');
    const initialScore = t.getGlobalVariable('score');
    const initialLives = t.getGlobalVariable('lives');
    await t.runUntil(() => blue.isTouchingColor([0, 63, 255]), 10000);
    const newScore = t.getGlobalVariable('score');
    const newLives = t.getGlobalVariable('lives');
    if (blue.isTouchingColor([0, 63, 255])) {
        t.assert.equal(newScore, initialScore + 1, 'Score should be increased by 1 if blue touches [0, 63, 255]');
    } else {
        t.assert.equal(newLives, initialLives - 1, 'Lives should be decreased by 1 if blue does not touch [0, 63, 255]');
    }
    t.end();
}

const test23 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('lives') === 0, 10000);
    t.assert.ok(t.getGlobalVariable('gameOver'), 'Game should end when lives reaches 0');
    t.end();
}

const test24 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const initialHighscore = t.getGlobalVariable('highscore');
    const newScore = initialHighscore + 10; // Assuming new score is higher than initial highscore
    t.setGlobalVariable('score', newScore);
    await t.runForTime(1000);
    t.assert.equal(t.getGlobalVariable('highscore'), newScore, 'Highscore should be set to score if score is higher than highscore');
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
		 test: testRedCreatesCloneEveryDelay,
		 name: "testRedCreatesCloneEveryDelay",
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
		 test: testYellowCreatesCloneEveryDelay,
		 name: "testYellowCreatesCloneEveryDelay",
		 description: "Afterwards every delay seconds another clone of yellow is created",
		 categories: []
	},
	{
		 test: test13,
		 name: "test13",
		 description: "6 seconds after program start blue creates a clone",
		 categories: []
	},
	{
		 test: test14,
		 name: "test14",
		 description: "Afterwards every delay seconds another clone of blue is created",
		 categories: []
	},
	{
		 test: test15,
		 name: "test15",
		 description: "Each clone picks randomly the first or second item on the 'start positions' list for both the x and y coordinate",
		 categories: []
	},
	{
		 test: test16,
		 name: "test16",
		 description: "Each clone directions points towards the red3roller",
		 categories: []
	},
	{
		 test: test17,
		 name: "test17",
		 description: "Each existing clone starts visible",
		 categories: []
	},
	{
		 test: test18,
		 name: "test18",
		 description: "Each clone moves towards red3roller until it touches red3roller",
		 categories: []
	},
	{
		 test: test19,
		 name: "test19",
		 description: "After a clone touches red3roller it is deleted",
		 categories: []
	},
	{
		 test: test20,
		 name: "test20",
		 description: "Then if red touches the color [255, 0, 0] score is increased by 1, else lives is decreased by 1",
		 categories: []
	},
	{
		 test: test21,
		 name: "test21",
		 description: "Then if yellow touches the color [255, 255, 0] score is increased by 1, else lives is decreased by 1",
		 categories: []
	},
	{
		 test: test22,
		 name: "test22",
		 description: "Then if blue touches the color [0, 63, 255] score is increased by 1, else lives is decreased by 1",
		 categories: []
	},
	{
		 test: test23,
		 name: "test23",
		 description: "When lives reaches 0 the game ends",
		 categories: []
	},
	{
		 test: test24,
		 name: "test24",
		 description: "If score is higher than the global variable highscore, highscore is set to score",
		 categories: []
	},
]
