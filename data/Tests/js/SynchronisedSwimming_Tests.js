const testStartCoordinates = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Cat1 Flying').x === 0 && t.getSprite('Cat1 Flying').y === 0, 1000);
    t.assert.equal(t.getSprite('Cat1 Flying').x, 0, 'Cat1 Flying should start at x = 0');
    t.assert.equal(t.getSprite('Cat1 Flying').y, 0, 'Cat1 Flying should start at y = 0');
    t.end();
}

const testStartDirection = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Cat1 Flying').direction === 90, 1000);
    t.assert.equal(t.getSprite('Cat1 Flying').direction, 90, 'Cat1 Flying should start with direction 90');
    t.end();
}

const testRepeatTurnAndClone = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const cat1Flying = t.getSprite('Cat1 Flying');
    t.assert.equal(cat1Flying.getCloneCount(), 6, 'Cat1 Flying should create 6 clones');
    t.assert.equal(cat1Flying.direction, 90 + 60 * 6, 'Cat1 Flying should turn right 60 degrees 6 times');
    t.end();
}

const testUpArrowKey = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const cat1Flying = t.getSprite('Cat1 Flying');
    const initialX = cat1Flying.x;
    const initialY = cat1Flying.y;
    t.keyPress('up arrow');
    await t.runForTime(100);
    t.assert.equal(cat1Flying.x, initialX + 10, 'Cat1 Flying should move 10 steps to the right');
    t.assert.equal(cat1Flying.y, initialY, 'Cat1 Flying should not move vertically');
    t.end();
}

const testDownArrowKey = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const cat1Flying = t.getSprite('Cat1 Flying');
    const initialX = cat1Flying.x;
    const initialY = cat1Flying.y;
    t.keyPress('down arrow');
    await t.runForTime(100);
    t.assert.equal(cat1Flying.x, initialX - 10, 'Cat1 Flying should move -10 steps to the left');
    t.assert.equal(cat1Flying.y, initialY, 'Cat1 Flying should not move vertically');
    t.end();
}

const testLeftArrowKeyTurn = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const cat1Flying = t.getSprite('Cat1 Flying');
    const initialDirection = cat1Flying.direction;
    t.keyPress('left arrow');
    await t.runForTime(100);
    t.assert.equal(cat1Flying.direction, initialDirection - 15, 'Cat1 Flying should turn 15 degrees to the left');
    t.end();
}

const testLeftArrowKeyCostume = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.keyPress('left arrow');
    await t.runForTime(100);
    const cat1Flying = t.getSprite('Cat1 Flying');
    t.assert.equal(cat1Flying.getCostumeByIndex(cat1Flying.currentCostume).name, 'left', 'Cat1 Flying should switch costume to left');
    t.end();
}

const testRightArrowKeyTurn = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const cat1Flying = t.getSprite('Cat1 Flying');
    const initialDirection = cat1Flying.direction;
    t.keyPress('right arrow');
    await t.runForTime(100);
    t.assert.equal(cat1Flying.direction, initialDirection + 15, 'Cat1 Flying should turn 15 degrees to the right');
    t.end();
}

const testRightArrowKeyCostume = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.keyPress('right arrow');
    await t.runForTime(100);
    const cat1Flying = t.getSprite('Cat1 Flying');
    t.assert.equal(cat1Flying.getCostumeByIndex(cat1Flying.currentCostume).name, 'right', 'Cat1 Flying should switch costume to right');
    t.end();
}

const testSpaceKeySequence = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const cat1Flying = t.getSprite('Cat1 Flying');
    const initialX = cat1Flying.x;
    const initialY = cat1Flying.y;
    const initialDirection = cat1Flying.direction;
    t.keyPress('space');
    await t.runForTime(3600);
    t.assert.equal(cat1Flying.direction, initialDirection + 10 * 36, 'Cat1 Flying should turn 360 degrees');
    t.assert.equal(cat1Flying.x, initialX + 10 * 36, 'Cat1 Flying should move 360 steps');
    t.assert.equal(cat1Flying.y, initialY, 'Cat1 Flying should not move vertically');
    t.end();
}

module.exports = [
	{
		 test: testStartCoordinates,
		 name: "testStartCoordinates",
		 description: "Cat1 Flying starts at coordinates (0, 0)",
		 categories: []
	},
	{
		 test: testStartDirection,
		 name: "testStartDirection",
		 description: "Cat1 Flying starts with direction 90",
		 categories: []
	},
	{
		 test: testRepeatTurnAndClone,
		 name: "testRepeatTurnAndClone",
		 description: "Cat1 Flying repeats turning right 60 degrees and creating a clone 6 times at start",
		 categories: []
	},
	{
		 test: testUpArrowKey,
		 name: "testUpArrowKey",
		 description: "Up arrow key moves sprite and clones 10 steps",
		 categories: []
	},
	{
		 test: testDownArrowKey,
		 name: "testDownArrowKey",
		 description: "Down arrow key moves sprite and clones -10 steps",
		 categories: []
	},
	{
		 test: testLeftArrowKeyTurn,
		 name: "testLeftArrowKeyTurn",
		 description: "Left arrow key turns sprite and clones 15 degrees to the left",
		 categories: []
	},
	{
		 test: testLeftArrowKeyCostume,
		 name: "testLeftArrowKeyCostume",
		 description: "Left arrow key switches sprite and clones costumes to 'left'",
		 categories: []
	},
	{
		 test: testRightArrowKeyTurn,
		 name: "testRightArrowKeyTurn",
		 description: "Right arrow key turns sprite and clones 15 degrees to the right",
		 categories: []
	},
	{
		 test: testRightArrowKeyCostume,
		 name: "testRightArrowKeyCostume",
		 description: "Right arrow key switches sprite and clones costumes to 'right'",
		 categories: []
	},
	{
		 test: testSpaceKeySequence,
		 name: "testSpaceKeySequence",
		 description: "Space key makes sprite and clones repeat sequence 36 times",
		 categories: []
	},
]
