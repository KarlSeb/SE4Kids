const testFinishLineCostume = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Finish Line').currentCostume === 0, 5000);
    const finishLine = t.getSprite('Finish Line');
    t.assert.strictEqual(finishLine.getCostumeByIndex(finishLine.currentCostume).name, 'normal', 'Finish Line should have costume normal at start');
    t.end();
}

const testGlobalVariableDistance = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('distance') === 0, 5000);
    t.assert.strictEqual(t.getGlobalVariable('distance'), 0, 'Global variable distance should be 0 at start');
    t.end();
}

const testGlobalVariableTime = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('time') === 0, 5000);
    t.assert.strictEqual(t.getGlobalVariable('time'), 0, 'Global variable time should be 0 at start');
    t.end();
}

const testFinishLineCoordinates = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Finish Line').x === 0 && t.getSprite('Finish Line').y === 30, 5000);
    const finishLine = t.getSprite('Finish Line');
    t.assert.strictEqual(finishLine.x, 0, 'Finish Line should have x coordinate 0 at start');
    t.assert.strictEqual(finishLine.y, 30, 'Finish Line should have y coordinate 30 at start');
    t.end();
}

const testFinishLineSize = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Finish Line').size === 1, 5000);
    t.assert.strictEqual(t.getSprite('Finish Line').size, 1, 'Finish Line should have size 1 at start');
    t.end();
}

const testFinishLineCountdown = async function (t) {
    t.greenFlag();
    const finishLine = t.getSprite('Finish Line');
    await t.runUntil(() => finishLine.sayText === '3', 5000);
    t.assert.strictEqual(finishLine.sayText, '3', 'Finish Line should say 3 at start');
    await t.runForTime(1000);
    t.assert.strictEqual(finishLine.sayText, '2', 'Finish Line should say 2 after 1 second');
    await t.runForTime(1000);
    t.assert.strictEqual(finishLine.sayText, '1', 'Finish Line should say 1 after 2 seconds');
    await t.runForTime(1000);
    t.assert.strictEqual(finishLine.sayText, '', 'Finish Line should stop saying after countdown');
    t.end();
}

const testTimerIncreases = async function (t) {
    t.greenFlag();
    await t.runForTime(3000); // Wait for countdown to finish
    const initialTime = t.getGlobalVariable('time');
    await t.runForTime(100);
    t.assert.strictEqual(t.getGlobalVariable('time'), initialTime + 0.1, 'Timer should increase by 0.1 every 0.1 seconds');
    t.end();
}

const testTree1Visible = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Tree1').visible, 5000);
    t.assert.ok(t.getSprite('Tree1').visible, 'Tree1 should be visible at start');
    t.end();
}

const testTree1Coordinates = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Tree1').x === -50 && t.getSprite('Tree1').y === 20, 5000);
    const tree1 = t.getSprite('Tree1');
    t.assert.strictEqual(tree1.x, -50, 'Tree1 should have x coordinate -50 at start');
    t.assert.strictEqual(tree1.y, 20, 'Tree1 should have y coordinate 20 at start');
    t.end();
}

const testTree1Size = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Tree1').size === 1, 5000);
    t.assert.strictEqual(t.getSprite('Tree1').size, 1, 'Tree1 should have size 1 at start');
    t.end();
}

const testArrowKeysIncreaseDistance = async function (t) {
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
    t.assert.strictEqual(t.getGlobalVariable('distance'), 100, 'Distance should be 100 after alternating key presses');
    t.end();
}

const testFinishLineSizeIncrease = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('distance') === 0, 5000);
    const initialSize = t.getSprite('Finish Line').size;
    for (let i = 0; i < 10; i++) {
        t.keyPress('left arrow');
        await t.runForTime(100);
        t.keyRelease('left arrow');
        await t.runForTime(100);
        t.keyPress('right arrow');
        await t.runForTime(100);
        t.keyRelease('right arrow');
        await t.runForTime(100);
    }
    t.assert.strictEqual(t.getSprite('Finish Line').size, initialSize + 10, 'Finish Line size should increase by 1 every time distance increases');
    t.end();
}

const testTree1SizeIncrease = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('distance') === 0, 5000);
    const initialSize = t.getSprite('Tree1').size;
    for (let i = 0; i < 10; i++) {
        t.keyPress('left arrow');
        await t.runForTime(100);
        t.keyRelease('left arrow');
        await t.runForTime(100);
        t.keyPress('right arrow');
        await t.runForTime(100);
        t.keyRelease('right arrow');
        await t.runForTime(100);
    }
    t.assert.strictEqual(t.getSprite('Tree1').size, initialSize + 10, 'Tree1 size should increase by 1 every time distance increases');
    t.end();
}

const testFinishLineYCoordinateDecrease = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('distance') === 0, 5000);
    const initialY = t.getSprite('Finish Line').y;
    for (let i = 0; i < 10; i++) {
        t.keyPress('left arrow');
        await t.runForTime(100);
        t.keyRelease('left arrow');
        await t.runForTime(100);
        t.keyPress('right arrow');
        await t.runForTime(100);
        t.keyRelease('right arrow');
        await t.runForTime(100);
    }
    t.assert.strictEqual(t.getSprite('Finish Line').y, initialY - 15, 'Finish Line y coordinate should decrease by 1.5 every time distance increases');
    t.end();
}

const testTree1YCoordinateDecrease = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('distance') === 0, 5000);
    const initialY = t.getSprite('Tree1').y;
    for (let i = 0; i < 10; i++) {
        t.keyPress('left arrow');
        await t.runForTime(100);
        t.keyRelease('left arrow');
        await t.runForTime(100);
        t.keyPress('right arrow');
        await t.runForTime(100);
        t.keyRelease('right arrow');
        await t.runForTime(100);
    }
    t.assert.strictEqual(t.getSprite('Tree1').y, initialY - 15, 'Tree1 y coordinate should decrease by 1.5 every time distance increases');
    t.end();
}

const testTree1XCoordinateDecrease = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('distance') === 0, 5000);
    const initialX = t.getSprite('Tree1').x;
    for (let i = 0; i < 10; i++) {
        t.keyPress('left arrow');
        await t.runForTime(100);
        t.keyRelease('left arrow');
        await t.runForTime(100);
        t.keyPress('right arrow');
        await t.runForTime(100);
        t.keyRelease('right arrow');
        await t.runForTime(100);
    }
    t.assert.strictEqual(t.getSprite('Tree1').x, initialX - 20, 'Tree1 x coordinate should decrease by 2 every time distance increases');
    t.end();
}

const testFinishLineCostumeChange = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('distance') === 100, 10000);
    const finishLine = t.getSprite('Finish Line');
    t.assert.strictEqual(finishLine.getCostumeByIndex(finishLine.currentCostume).name, 'broken', 'Finish Line should change costume to broken after distance reaches 100');
    t.end();
}

const testGameEnds = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('distance') === 100, 10000);
    await t.runForTime(1000);
    t.assert.fail('Game should end after distance reaches 100');
    t.end();
}

module.exports = [
	{
		 test: testFinishLineCostume,
		 name: "testFinishLineCostume",
		 description: "Finish Line has costume 'normal' at start",
		 categories: []
	},
	{
		 test: testGlobalVariableDistance,
		 name: "testGlobalVariableDistance",
		 description: "Global variable distance is 0 at start",
		 categories: []
	},
	{
		 test: testGlobalVariableTime,
		 name: "testGlobalVariableTime",
		 description: "Global variable time is 0 at start",
		 categories: []
	},
	{
		 test: testFinishLineCoordinates,
		 name: "testFinishLineCoordinates",
		 description: "Finish Line has coordinates (0, 30) at start",
		 categories: []
	},
	{
		 test: testFinishLineSize,
		 name: "testFinishLineSize",
		 description: "Finish Line has size 1 at start",
		 categories: []
	},
	{
		 test: testFinishLineCountdown,
		 name: "testFinishLineCountdown",
		 description: "Finish Line says countdown from 3 to 1 at start",
		 categories: []
	},
	{
		 test: testTimerIncreases,
		 name: "testTimerIncreases",
		 description: "Timer increases by 0.1 every 0.1 seconds after countdown",
		 categories: []
	},
	{
		 test: testTree1Visible,
		 name: "testTree1Visible",
		 description: "Tree1 is visible at start",
		 categories: []
	},
	{
		 test: testTree1Coordinates,
		 name: "testTree1Coordinates",
		 description: "Tree1 has coordinates (-50, 20) at start",
		 categories: []
	},
	{
		 test: testTree1Size,
		 name: "testTree1Size",
		 description: "Tree1 has size 1 at start",
		 categories: []
	},
	{
		 test: testArrowKeysIncreaseDistance,
		 name: "testArrowKeysIncreaseDistance",
		 description: "Left and right arrow keys increase distance until 100",
		 categories: []
	},
	{
		 test: testFinishLineSizeIncrease,
		 name: "testFinishLineSizeIncrease",
		 description: "Finish Line size increases by 1 every time distance increases",
		 categories: []
	},
	{
		 test: testTree1SizeIncrease,
		 name: "testTree1SizeIncrease",
		 description: "Tree1 size increases by 1 every time distance increases",
		 categories: []
	},
	{
		 test: testFinishLineYCoordinateDecrease,
		 name: "testFinishLineYCoordinateDecrease",
		 description: "Finish Line y coordinate decreases by 1.5 every time distance increases",
		 categories: []
	},
	{
		 test: testTree1YCoordinateDecrease,
		 name: "testTree1YCoordinateDecrease",
		 description: "Tree1 y coordinate decreases by 1.5 every time distance increases",
		 categories: []
	},
	{
		 test: testTree1XCoordinateDecrease,
		 name: "testTree1XCoordinateDecrease",
		 description: "Tree1 x coordinate decreases by 2 every time distance increases",
		 categories: []
	},
	{
		 test: testFinishLineCostumeChange,
		 name: "testFinishLineCostumeChange",
		 description: "Finish Line changes costume to 'broken' after distance reaches 100",
		 categories: []
	},
	{
		 test: testGameEnds,
		 name: "testGameEnds",
		 description: "Game ends after distance reaches 100",
		 categories: []
	},
]
