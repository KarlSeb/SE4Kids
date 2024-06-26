const testFinishLineCostume = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Finish Line').getCostumeByName('normal') !== undefined, 5000);
    const finishLine = t.getSprite('Finish Line');
    t.assert.strictEqual(finishLine.currentCostume, finishLine.getCostumeByName('normal').index, 'Finish Line should have costume normal at the start');
    t.end();
}

const testGlobalVariableDistance = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('distance') === 0, 5000);
    t.assert.strictEqual(t.getGlobalVariable('distance'), 0, 'Global variable distance should be 0 at the start');
    t.end();
}

const testGlobalVariableTime = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('time') === 0, 5000);
    t.assert.strictEqual(t.getGlobalVariable('time'), 0, 'Global variable time should be 0 at the start');
    t.end();
}

const testFinishLineCoordinates = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Finish Line').x === 0 && t.getSprite('Finish Line').y === 30, 5000);
    const finishLine = t.getSprite('Finish Line');
    t.assert.strictEqual(finishLine.x, 0, 'Finish Line should have x coordinate 0 at the start');
    t.assert.strictEqual(finishLine.y, 30, 'Finish Line should have y coordinate 30 at the start');
    t.end();
}

const testFinishLineSize = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Finish Line').size === 1, 5000);
    const finishLine = t.getSprite('Finish Line');
    t.assert.strictEqual(finishLine.size, 1, 'Finish Line should have size 1 at the start');
    t.end();
}

const testFinishLineCountdown = async function (t) {
    t.greenFlag();
    const finishLine = t.getSprite('Finish Line');
    for (let i = 3; i >= 1; i--) {
        await t.runUntil(() => finishLine.sayText === i.toString(), 5000);
        t.assert.strictEqual(finishLine.sayText, i.toString(), `Finish Line should say ${i}`);
        await t.runForTime(1000);
    }
    t.end();
}

const testTimerIncrease = async function (t) {
    t.greenFlag();
    await t.runForTime(3000); // Wait for countdown to finish
    const initialTime = t.getGlobalVariable('time');
    await t.runForTime(1000);
    const finalTime = t.getGlobalVariable('time');
    t.assert.strictEqual(finalTime - initialTime, 1, 'Timer should increase by 0.1 every 0.1 seconds');
    t.end();
}

const testTree1Visibility = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Tree1').visible, 5000);
    const tree1 = t.getSprite('Tree1');
    t.assert.ok(tree1.visible, 'Tree1 should be visible at the start');
    t.end();
}

const testTree1Coordinates = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Tree1').x === -50 && t.getSprite('Tree1').y === 20, 5000);
    const tree1 = t.getSprite('Tree1');
    t.assert.strictEqual(tree1.x, -50, 'Tree1 should have x coordinate -50 at the start');
    t.assert.strictEqual(tree1.y, 20, 'Tree1 should have y coordinate 20 at the start');
    t.end();
}

const testTree1Size = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Tree1').size === 1, 5000);
    const tree1 = t.getSprite('Tree1');
    t.assert.strictEqual(tree1.size, 1, 'Tree1 should have size 1 at the start');
    t.end();
}

const testDistanceIncreaseWithKeyPress = async function (t) {
    t.greenFlag();
    let lastDistance = t.getGlobalVariable('distance');
    for (let i = 0; i < 50; i++) {
        t.keyPress('left arrow');
        await t.runForTime(100);
        t.keyRelease('left arrow');
        await t.runForTime(100);
        t.keyPress('right arrow');
        await t.runForTime(100);
        t.keyRelease('right arrow');
        await t.runForTime(100);
        const currentDistance = t.getGlobalVariable('distance');
        t.assert.greater(currentDistance, lastDistance, 'Distance should increase with alternating key presses');
        lastDistance = currentDistance;
    }
    t.end();
}

const testFinishLineSizeIncrease = async function (t) {
    t.greenFlag();
    let lastDistance = t.getGlobalVariable('distance');
    let lastSize = t.getSprite('Finish Line').size;
    for (let i = 0; i < 50; i++) {
        t.keyPress('left arrow');
        await t.runForTime(100);
        t.keyRelease('left arrow');
        await t.runForTime(100);
        t.keyPress('right arrow');
        await t.runForTime(100);
        t.keyRelease('right arrow');
        await t.runForTime(100);
        const currentDistance = t.getGlobalVariable('distance');
        const currentSize = t.getSprite('Finish Line').size;
        if (currentDistance > lastDistance) {
            t.assert.strictEqual(currentSize, lastSize + 1, 'Finish Line size should increase by 1 when distance increases');
            lastSize = currentSize;
        }
        lastDistance = currentDistance;
    }
    t.end();
}

const testTree1SizeIncrease = async function (t) {
    t.greenFlag();
    let lastDistance = t.getGlobalVariable('distance');
    let lastSize = t.getSprite('Tree1').size;
    for (let i = 0; i < 50; i++) {
        t.keyPress('left arrow');
        await t.runForTime(100);
        t.keyRelease('left arrow');
        await t.runForTime(100);
        t.keyPress('right arrow');
        await t.runForTime(100);
        t.keyRelease('right arrow');
        await t.runForTime(100);
        const currentDistance = t.getGlobalVariable('distance');
        const currentSize = t.getSprite('Tree1').size;
        if (currentDistance > lastDistance) {
            t.assert.strictEqual(currentSize, lastSize + 1, 'Tree1 size should increase by 1 when distance increases');
            lastSize = currentSize;
        }
        lastDistance = currentDistance;
    }
    t.end();
}

const testFinishLineYCoordinateDecrease = async function (t) {
    t.greenFlag();
    let lastDistance = t.getGlobalVariable('distance');
    let lastY = t.getSprite('Finish Line').y;
    for (let i = 0; i < 50; i++) {
        t.keyPress('left arrow');
        await t.runForTime(100);
        t.keyRelease('left arrow');
        await t.runForTime(100);
        t.keyPress('right arrow');
        await t.runForTime(100);
        t.keyRelease('right arrow');
        await t.runForTime(100);
        const currentDistance = t.getGlobalVariable('distance');
        const currentY = t.getSprite('Finish Line').y;
        if (currentDistance > lastDistance) {
            t.assert.strictEqual(currentY, lastY - 1.5, 'Finish Line y coordinate should decrease by 1.5 when distance increases');
            lastY = currentY;
        }
        lastDistance = currentDistance;
    }
    t.end();
}

const testTree1YCoordinateDecrease = async function (t) {
    t.greenFlag();
    let lastDistance = t.getGlobalVariable('distance');
    let lastY = t.getSprite('Tree1').y;
    for (let i = 0; i < 50; i++) {
        t.keyPress('left arrow');
        await t.runForTime(100);
        t.keyRelease('left arrow');
        await t.runForTime(100);
        t.keyPress('right arrow');
        await t.runForTime(100);
        t.keyRelease('right arrow');
        await t.runForTime(100);
        const currentDistance = t.getGlobalVariable('distance');
        const currentY = t.getSprite('Tree1').y;
        if (currentDistance > lastDistance) {
            t.assert.strictEqual(currentY, lastY - 1.5, 'Tree1 y coordinate should decrease by 1.5 when distance increases');
            lastY = currentY;
        }
        lastDistance = currentDistance;
    }
    t.end();
}

const testTree1XCoordinateDecrease = async function (t) {
    t.greenFlag();
    let lastDistance = t.getGlobalVariable('distance');
    let lastX = t.getSprite('Tree1').x;
    for (let i = 0; i < 50; i++) {
        t.keyPress('left arrow');
        await t.runForTime(100);
        t.keyRelease('left arrow');
        await t.runForTime(100);
        t.keyPress('right arrow');
        await t.runForTime(100);
        t.keyRelease('right arrow');
        await t.runForTime(100);
        const currentDistance = t.getGlobalVariable('distance');
        const currentX = t.getSprite('Tree1').x;
        if (currentDistance > lastDistance) {
            t.assert.strictEqual(currentX, lastX - 2, 'Tree1 x coordinate should decrease by 2 when distance increases');
            lastX = currentX;
        }
        lastDistance = currentDistance;
    }
    t.end();
}

const testFinishLineCostumeChange = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('distance') >= 100, 10000);
    const finishLine = t.getSprite('Finish Line');
    await t.runUntil(() => finishLine.getCostumeByName('broken') !== undefined, 5000);
    t.assert.strictEqual(finishLine.currentCostume, finishLine.getCostumeByName('broken').index, 'Finish Line should change costume to broken after distance reaches 100');
    t.end();
}

const testGameEnd = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('distance') >= 100, 10000);
    await t.runForTime(1000);
    t.assert.fail('Game should end after distance reaches 100');
    t.end();
}

module.exports = [
	{
		 test: testFinishLineCostume,
		 name: "testFinishLineCostume",
		 description: "Finish Line has costume 'normal' at the start",
		 categories: []
	},
	{
		 test: testGlobalVariableDistance,
		 name: "testGlobalVariableDistance",
		 description: "Global variable distance is 0 at the start",
		 categories: []
	},
	{
		 test: testGlobalVariableTime,
		 name: "testGlobalVariableTime",
		 description: "Global variable time is 0 at the start",
		 categories: []
	},
	{
		 test: testFinishLineCoordinates,
		 name: "testFinishLineCoordinates",
		 description: "Finish Line has coordinates (0, 30) at the start",
		 categories: []
	},
	{
		 test: testFinishLineSize,
		 name: "testFinishLineSize",
		 description: "Finish Line has size 1 at the start",
		 categories: []
	},
	{
		 test: testFinishLineCountdown,
		 name: "testFinishLineCountdown",
		 description: "Finish Line says a countdown from 3 to 1, with every number showing for 1 second",
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
		 description: "Tree1 is visible at the start",
		 categories: []
	},
	{
		 test: testTree1Coordinates,
		 name: "testTree1Coordinates",
		 description: "Tree1 has coordinates (-50, 20) at the start",
		 categories: []
	},
	{
		 test: testTree1Size,
		 name: "testTree1Size",
		 description: "Tree1 has size 1 at the start",
		 categories: []
	},
	{
		 test: testDistanceIncreaseWithKeyPress,
		 name: "testDistanceIncreaseWithKeyPress",
		 description: "Until distance is 100 the left arrow key and the right arrow key have to be pressed in an alternating manner to increase distance for every button press",
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
