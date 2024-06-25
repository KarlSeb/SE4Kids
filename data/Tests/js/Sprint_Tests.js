const testFinishLineCostume = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Finish Line').currentCostume === t.getSprite('Finish Line').getCostumeByName('normal').index, 5000);
    t.assert.equal(t.getSprite('Finish Line').currentCostume, t.getSprite('Finish Line').getCostumeByName('normal').index, 'Finish Line should have costume normal at the start');
    t.end();
}

const testGlobalVariableDistance = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('distance') === 0, 5000);
    t.assert.equal(t.getGlobalVariable('distance'), 0, 'Global variable distance should be 0 at the start');
    t.end();
}

const testGlobalVariableTime = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('time') === 0, 5000);
    t.assert.equal(t.getGlobalVariable('time'), 0, 'Global variable time should be 0 at the start');
    t.end();
}

const testFinishLineCoordinates = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Finish Line').x === 0 && t.getSprite('Finish Line').y === 30, 5000);
    t.assert.equal(t.getSprite('Finish Line').x, 0, 'Finish Line should have x coordinate 0 at the start');
    t.assert.equal(t.getSprite('Finish Line').y, 30, 'Finish Line should have y coordinate 30 at the start');
    t.end();
}

const testFinishLineSize = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Finish Line').size === 1, 5000);
    t.assert.equal(t.getSprite('Finish Line').size, 1, 'Finish Line should have size 1 at the start');
    t.end();
}

const testFinishLineCountdown = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Finish Line').sayText === '3', 5000);
    t.assert.equal(t.getSprite('Finish Line').sayText, '3', 'Finish Line should say 3 at the start');
    await t.runForTime(1000);
    t.assert.equal(t.getSprite('Finish Line').sayText, '2', 'Finish Line should say 2 after 1 second');
    await t.runForTime(1000);
    t.assert.equal(t.getSprite('Finish Line').sayText, '1', 'Finish Line should say 1 after 2 seconds');
    await t.runForTime(1000);
    t.end();
}

const testTimerIncrease = async function (t) {
    t.greenFlag();
    await t.runForTime(3000); // Wait for countdown to finish
    const initialTime = t.getGlobalVariable('time');
    await t.runForTime(100);
    t.assert.equal(t.getGlobalVariable('time'), initialTime + 0.1, 'Timer should increase by 0.1 every 0.1 seconds');
    t.end();
}

const testTree1Visibility = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Tree1').visible === true, 5000);
    t.assert.equal(t.getSprite('Tree1').visible, true, 'Tree1 should be visible at the start');
    t.end();
}

const testTree1Coordinates = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Tree1').x === -50 && t.getSprite('Tree1').y === 20, 5000);
    t.assert.equal(t.getSprite('Tree1').x, -50, 'Tree1 should have x coordinate -50 at the start');
    t.assert.equal(t.getSprite('Tree1').y, 20, 'Tree1 should have y coordinate 20 at the start');
    t.end();
}

const testTree1Size = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Tree1').size === 1, 5000);
    t.assert.equal(t.getSprite('Tree1').size, 1, 'Tree1 should have size 1 at the start');
    t.end();
}

const testDistanceIncreaseWithKeys = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('distance') === 0, 5000);
    for (let i = 0; i < 50; i++) {
        t.keyPress('left arrow');
        await t.runForTime(100);
        t.keyRelease('left arrow');
        await t.runForTime(100);
        t.keyPress('right arrow');
        await t.runForTime(100);
        t.keyRelease('right arrow');
        await t.runForTime(100);
    }
    t.assert.equal(t.getGlobalVariable('distance'), 100, 'Distance should be 100 after alternating key presses');
    t.end();
}

const testFinishLineSizeIncrease = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('distance') === 0, 5000);
    const initialSize = t.getSprite('Finish Line').size;
    t.keyPress('left arrow');
    await t.runForTime(100);
    t.keyRelease('left arrow');
    await t.runForTime(100);
    t.keyPress('right arrow');
    await t.runForTime(100);
    t.keyRelease('right arrow');
    await t.runForTime(100);
    t.assert.equal(t.getSprite('Finish Line').size, initialSize + 1, 'Finish Line size should increase by 1 every time distance increases');
    t.end();
}

const testTree1SizeIncrease = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('distance') === 0, 5000);
    const initialSize = t.getSprite('Tree1').size;
    t.keyPress('left arrow');
    await t.runForTime(100);
    t.keyRelease('left arrow');
    await t.runForTime(100);
    t.keyPress('right arrow');
    await t.runForTime(100);
    t.keyRelease('right arrow');
    await t.runForTime(100);
    t.assert.equal(t.getSprite('Tree1').size, initialSize + 1, 'Tree1 size should increase by 1 every time distance increases');
    t.end();
}

const testFinishLineYCoordinateDecrease = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('distance') === 0, 5000);
    const initialY = t.getSprite('Finish Line').y;
    t.keyPress('left arrow');
    await t.runForTime(100);
    t.keyRelease('left arrow');
    await t.runForTime(100);
    t.keyPress('right arrow');
    await t.runForTime(100);
    t.keyRelease('right arrow');
    await t.runForTime(100);
    t.assert.equal(t.getSprite('Finish Line').y, initialY - 1.5, 'Finish Line y coordinate should decrease by 1.5 every time distance increases');
    t.end();
}

const testTree1YCoordinateDecrease = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('distance') === 0, 5000);
    const initialY = t.getSprite('Tree1').y;
    t.keyPress('left arrow');
    await t.runForTime(100);
    t.keyRelease('left arrow');
    await t.runForTime(100);
    t.keyPress('right arrow');
    await t.runForTime(100);
    t.keyRelease('right arrow');
    await t.runForTime(100);
    t.assert.equal(t.getSprite('Tree1').y, initialY - 1.5, 'Tree1 y coordinate should decrease by 1.5 every time distance increases');
    t.end();
}

const testTree1XCoordinateDecrease = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('distance') === 0, 5000);
    const initialX = t.getSprite('Tree1').x;
    t.keyPress('left arrow');
    await t.runForTime(100);
    t.keyRelease('left arrow');
    await t.runForTime(100);
    t.keyPress('right arrow');
    await t.runForTime(100);
    t.keyRelease('right arrow');
    await t.runForTime(100);
    t.assert.equal(t.getSprite('Tree1').x, initialX - 2, 'Tree1 x coordinate should decrease by 2 every time distance increases');
    t.end();
}

const testFinishLineCostumeChange = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('distance') === 100, 10000);
    await t.runForTime(1000); // Wait for costume change
    t.assert.equal(t.getSprite('Finish Line').currentCostume, t.getSprite('Finish Line').getCostumeByName('broken').index, 'Finish Line should change costume to broken after distance reaches 100');
    t.end();
}

const testGameEnd = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('distance') === 100, 10000);
    await t.runForTime(1000); // Wait for game end
    t.assert.ok(t.getGlobalVariable('gameOver'), 'Game should end after distance reaches 100');
    t.end();
}

module.exports = [
	{
		 test: testFinishLineCostume,
		 name: "testFinishLineCostume",
		 description: "At the start Finish Line has costume 'normal'",
		 categories: []
	},
	{
		 test: testGlobalVariableDistance,
		 name: "testGlobalVariableDistance",
		 description: "At the start the global variable distance is 0",
		 categories: []
	},
	{
		 test: testGlobalVariableTime,
		 name: "testGlobalVariableTime",
		 description: "At the start the global variable time is 0",
		 categories: []
	},
	{
		 test: testFinishLineCoordinates,
		 name: "testFinishLineCoordinates",
		 description: "At the start Finish Line has coordinates (0, 30)",
		 categories: []
	},
	{
		 test: testFinishLineSize,
		 name: "testFinishLineSize",
		 description: "At the start Finish Line has size 1",
		 categories: []
	},
	{
		 test: testFinishLineCountdown,
		 name: "testFinishLineCountdown",
		 description: "At the start Finish Line says a countdown from 3 to 1, with every number showing for 1 second",
		 categories: []
	},
	{
		 test: testTimerIncrease,
		 name: "testTimerIncrease",
		 description: "After the countdown is finished the timer increases by 0.1 every 0.1 seconds",
		 categories: []
	},
	{
		 test: testTree1Visibility,
		 name: "testTree1Visibility",
		 description: "At the start Tree1 is visible",
		 categories: []
	},
	{
		 test: testTree1Coordinates,
		 name: "testTree1Coordinates",
		 description: "At the start Tree1 has coordinates (-50, 20)",
		 categories: []
	},
	{
		 test: testTree1Size,
		 name: "testTree1Size",
		 description: "At the start Tree1 has size 1",
		 categories: []
	},
	{
		 test: testDistanceIncreaseWithKeys,
		 name: "testDistanceIncreaseWithKeys",
		 description: "Until distance is 100 the left arrow key and the right arrow key have to be pressed and released in an alternating manner to increase distance for every button press",
		 categories: []
	},
	{
		 test: testFinishLineSizeIncrease,
		 name: "testFinishLineSizeIncrease",
		 description: "Every time distance increases the size of Finish Line increases by 1",
		 categories: []
	},
	{
		 test: testTree1SizeIncrease,
		 name: "testTree1SizeIncrease",
		 description: "Every time distance increases the size of Tree1 increases by 1",
		 categories: []
	},
	{
		 test: testFinishLineYCoordinateDecrease,
		 name: "testFinishLineYCoordinateDecrease",
		 description: "Every time distance increases the y coordinate of Finish Line decreases by 1.5",
		 categories: []
	},
	{
		 test: testTree1YCoordinateDecrease,
		 name: "testTree1YCoordinateDecrease",
		 description: "Every time distance increases the y coordinate of Tree1 decreases by 1.5",
		 categories: []
	},
	{
		 test: testTree1XCoordinateDecrease,
		 name: "testTree1XCoordinateDecrease",
		 description: "Every time distance increases the x coordinate of Tree1 decreases by 2",
		 categories: []
	},
	{
		 test: testFinishLineCostumeChange,
		 name: "testFinishLineCostumeChange",
		 description: "After distance reaches 100 Finish Line changes costume to 'broken'",
		 categories: []
	},
	{
		 test: testGameEnd,
		 name: "testGameEnd",
		 description: "After distance reaches 100 the game ends",
		 categories: []
	},
]
