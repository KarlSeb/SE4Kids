const testRedYellowBlueInvisible = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const red = t.getSprite('red');
    const yellow = t.getSprite('yellow');
    const blue = t.getSprite('blue');
    t.assert.not(red.visible, 'Red should be invisible at start');
    t.assert.not(yellow.visible, 'Yellow should be invisible at start');
    t.assert.not(blue.visible, 'Blue should be invisible at start');
    t.end();
}

const testScoreStart = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const score = t.getGlobalVariable('score');
    t.assert.equal(score.value, 0, 'Score should be 0 at start');
    t.end();
}

const testLivesStart = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const lives = t.getGlobalVariable('lives');
    t.assert.equal(lives.value, 3, 'Lives should be 3 at start');
    t.end();
}

const testDelayStart = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const delay = t.getGlobalVariable('delay');
    t.assert.equal(delay.value, 8, 'Delay should be 8 at start');
    t.end();
}

const testDelayDecrease = async function (t) {
    t.greenFlag();
    await t.runForTime(10000);
    const delay = t.getGlobalVariable('delay');
    t.assert.equal(delay.value, 7.5, 'Delay should decrease by 0.5 every 10 seconds');
    t.end();
}

const testDelayMinimum = async function (t) {
    t.greenFlag();
    await t.runForTime(120000); // Run for 2 minutes
    const delay = t.getGlobalVariable('delay');
    t.assert.greaterOrEqual(delay.value, 2, 'Delay should not go under 2');
    t.end();
}

const testRed3RollerRightTurn = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const red3roller = t.getSprite('red3roller');
    const initialDirection = red3roller.direction;
    t.keyPress('right arrow');
    await t.runForTime(100);
    t.keyRelease('right arrow');
    await t.runForTime(100);
    t.assert.equal(red3roller.direction, initialDirection + 3, 'Red3roller should turn right by 3 degrees');
    t.end();
}

const testRed3RollerLeftTurn = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const red3roller = t.getSprite('red3roller');
    const initialDirection = red3roller.direction;
    t.keyPress('left arrow');
    await t.runForTime(100);
    t.keyRelease('left arrow');
    await t.runForTime(100);
    t.assert.equal(red3roller.direction, initialDirection - 3, 'Red3roller should turn left by 3 degrees');
    t.end();
}

const testRedCloneCreation = async function (t) {
    t.greenFlag();
    await t.runForTime(2000);
    const red = t.getSprite('red');
    t.assert.equal(red.getCloneCount(), 1, 'Red should create a clone 2 seconds after start');
    t.end();
}

const testRedCloneCreationInterval = async function (t) {
    t.greenFlag();
    await t.runForTime(10000);
    const red = t.getSprite('red');
    const delay = t.getGlobalVariable('delay');
    const expectedClones = Math.floor(10 / delay.value);
    t.assert.equal(red.getCloneCount(), expectedClones, 'Red should create clones at intervals of delay seconds');
    t.end();
}

const testYellowCloneCreation = async function (t) {
    t.greenFlag();
    await t.runForTime(4000);
    const yellow = t.getSprite('yellow');
    t.assert.equal(yellow.getCloneCount(), 1, 'Yellow should create a clone 4 seconds after start');
    t.end();
}

const testYellowCloneCreationInterval = async function (t) {
    t.greenFlag();
    await t.runForTime(10000);
    const yellow = t.getSprite('yellow');
    const delay = t.getGlobalVariable('delay');
    const expectedClones = Math.floor(6 / delay.value);
    t.assert.equal(yellow.getCloneCount(), expectedClones, 'Yellow should create clones at intervals of delay seconds');
    t.end();
}

const testBlueCloneCreation = async function (t) {
    t.greenFlag();
    await t.runForTime(6000);
    const blue = t.getSprite('blue');
    t.assert.equal(blue.getCloneCount(), 1, 'Blue should create a clone 6 seconds after start');
    t.end();
}

const testBlueCloneCreationInterval = async function (t) {
    t.greenFlag();
    await t.runForTime(10000);
    const blue = t.getSprite('blue');
    const delay = t.getGlobalVariable('delay');
    const expectedClones = Math.floor(4 / delay.value);
    t.assert.equal(blue.getCloneCount(), expectedClones, 'Blue should create clones at intervals of delay seconds');
    t.end();
}

const testCloneStartPositions = async function (t) {
    t.greenFlag();
    await t.runForTime(2000);
    const red = t.getSprite('red');
    const clone = red.getClone(0);
    const startPositions = red.getList('start positions', true);
    const xPositions = [startPositions[0], startPositions[1]];
    const yPositions = [startPositions[2], startPositions[3]];
    t.assert.ok(xPositions.includes(clone.x), 'Clone x position should be one of the start positions');
    t.assert.ok(yPositions.includes(clone.y), 'Clone y position should be one of the start positions');
    t.end();
}

const testCloneDirection = async function (t) {
    t.greenFlag();
    await t.runForTime(2000);
    const red = t.getSprite('red');
    const clone = red.getClone(0);
    const red3roller = t.getSprite('red3roller');
    const expectedDirection = Math.atan2(red3roller.y - clone.y, red3roller.x - clone.x) * (180 / Math.PI);
    t.assert.equal(clone.direction, expectedDirection, 'Clone direction should point towards red3roller');
    t.end();
}

const testCloneVisibility = async function (t) {
    t.greenFlag();
    await t.runForTime(2000);
    const red = t.getSprite('red');
    const clone = red.getClone(0);
    t.assert.ok(clone.visible, 'Clone should be visible');
    t.end();
}

const testCloneMovement = async function (t) {
    t.greenFlag();
    await t.runForTime(2000);
    const red = t.getSprite('red');
    const clone = red.getClone(0);
    const red3roller = t.getSprite('red3roller');
    await t.runUntil(() => clone.isTouchingSprite('red3roller'), 10000);
    t.assert.ok(clone.isTouchingSprite('red3roller'), 'Clone should move towards red3roller until it touches it');
    t.end();
}

const testCloneDeletion = async function (t) {
    t.greenFlag();
    await t.runForTime(2000);
    const red = t.getSprite('red');
    const clone = red.getClone(0);
    const red3roller = t.getSprite('red3roller');
    await t.runUntil(() => clone.isTouchingSprite('red3roller'), 10000);
    await t.runForTime(1000);
    t.assert.equal(red.getCloneCount(), 0, 'Clone should be deleted after touching red3roller');
    t.end();
}

const testRedTouchColor = async function (t) {
    t.greenFlag();
    await t.runForTime(2000);
    const red = t.getSprite('red');
    const initialScore = t.getGlobalVariable('score').value;
    const initialLives = t.getGlobalVariable('lives').value;
    if (red.isTouchingColor([255, 0, 0])) {
        t.assert.equal(t.getGlobalVariable('score').value, initialScore + 1, 'Score should increase by 1 if red touches [255, 0, 0]');
    } else {
        t.assert.equal(t.getGlobalVariable('lives').value, initialLives - 1, 'Lives should decrease by 1 if red does not touch [255, 0, 0]');
    }
    t.end();
}

const testYellowTouchColor = async function (t) {
    t.greenFlag();
    await t.runForTime(4000);
    const yellow = t.getSprite('yellow');
    const initialScore = t.getGlobalVariable('score').value;
    const initialLives = t.getGlobalVariable('lives').value;
    if (yellow.isTouchingColor([255, 255, 0])) {
        t.assert.equal(t.getGlobalVariable('score').value, initialScore + 1, 'Score should increase by 1 if yellow touches [255, 255, 0]');
    } else {
        t.assert.equal(t.getGlobalVariable('lives').value, initialLives - 1, 'Lives should decrease by 1 if yellow does not touch [255, 255, 0]');
    }
    t.end();
}

const testBlueTouchColor = async function (t) {
    t.greenFlag();
    await t.runForTime(6000);
    const blue = t.getSprite('blue');
    const initialScore = t.getGlobalVariable('score').value;
    const initialLives = t.getGlobalVariable('lives').value;
    if (blue.isTouchingColor([0, 63, 255])) {
        t.assert.equal(t.getGlobalVariable('score').value, initialScore + 1, 'Score should increase by 1 if blue touches [0, 63, 255]');
    } else {
        t.assert.equal(t.getGlobalVariable('lives').value, initialLives - 1, 'Lives should decrease by 1 if blue does not touch [0, 63, 255]');
    }
    t.end();
}

const testGameEnd = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const lives = t.getGlobalVariable('lives');
    lives.value = 0;
    await t.runForTime(1000);
    t.assert.ok(t.getStage().isStage, 'Game should end when lives reach 0');
    t.end();
}

const testHighscoreUpdate = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const score = t.getGlobalVariable('score');
    const highscore = t.getGlobalVariable('highscore');
    score.value = highscore.value + 1;
    await t.runForTime(1000);
    t.assert.equal(highscore.value, score.value, 'Highscore should be updated if score is higher');
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
		 test: testScoreStart,
		 name: "testScoreStart",
		 description: "At start the global variable score is set to 0",
		 categories: []
	},
	{
		 test: testLivesStart,
		 name: "testLivesStart",
		 description: "At start the global variable lives is set to 3",
		 categories: []
	},
	{
		 test: testDelayStart,
		 name: "testDelayStart",
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
		 test: testDelayMinimum,
		 name: "testDelayMinimum",
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
		 test: testRedCloneCreation,
		 name: "testRedCloneCreation",
		 description: "2 seconds after program start red creates a clone",
		 categories: []
	},
	{
		 test: testRedCloneCreationInterval,
		 name: "testRedCloneCreationInterval",
		 description: "Afterwards every delay seconds another clone of red is created",
		 categories: []
	},
	{
		 test: testYellowCloneCreation,
		 name: "testYellowCloneCreation",
		 description: "4 seconds after program start yellow creates a clone",
		 categories: []
	},
	{
		 test: testYellowCloneCreationInterval,
		 name: "testYellowCloneCreationInterval",
		 description: "Afterwards every delay seconds another clone of yellow is created",
		 categories: []
	},
	{
		 test: testBlueCloneCreation,
		 name: "testBlueCloneCreation",
		 description: "6 seconds after program start blue creates a clone",
		 categories: []
	},
	{
		 test: testBlueCloneCreationInterval,
		 name: "testBlueCloneCreationInterval",
		 description: "Afterwards every delay seconds another clone of blue is created",
		 categories: []
	},
	{
		 test: testCloneStartPositions,
		 name: "testCloneStartPositions",
		 description: "Each clone picks randomly the first or second item on the 'start positions' list for both the x and y coordinate",
		 categories: []
	},
	{
		 test: testCloneDirection,
		 name: "testCloneDirection",
		 description: "Each clone directions points towards the red3roller",
		 categories: []
	},
	{
		 test: testCloneVisibility,
		 name: "testCloneVisibility",
		 description: "Each existing clone starts visible",
		 categories: []
	},
	{
		 test: testCloneMovement,
		 name: "testCloneMovement",
		 description: "Each clone moves towards red3roller until it touches red3roller",
		 categories: []
	},
	{
		 test: testCloneDeletion,
		 name: "testCloneDeletion",
		 description: "After a clone touches red3roller it is deleted",
		 categories: []
	},
	{
		 test: testRedTouchColor,
		 name: "testRedTouchColor",
		 description: "Then if red touches the color [255, 0, 0] score is increased by 1, else lives is decreased by 1",
		 categories: []
	},
	{
		 test: testYellowTouchColor,
		 name: "testYellowTouchColor",
		 description: "Then if yellow touches the color [255, 255, 0] score is increased by 1, else lives is decreased by 1",
		 categories: []
	},
	{
		 test: testBlueTouchColor,
		 name: "testBlueTouchColor",
		 description: "Then if blue touches the color [0, 63, 255] score is increased by 1, else lives is decreased by 1",
		 categories: []
	},
	{
		 test: testGameEnd,
		 name: "testGameEnd",
		 description: "When lives reaches 0 the game ends",
		 categories: []
	},
	{
		 test: testHighscoreUpdate,
		 name: "testHighscoreUpdate",
		 description: "If score is higher than the global variable highscore, highscore is set to score",
		 categories: []
	},
]
