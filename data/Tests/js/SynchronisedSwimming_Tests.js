const testCat1FlyingStartCoordinates = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Cat1 Flying').x === 0 && t.getSprite('Cat1 Flying').y === 0, 5000);
    const sprite = t.getSprite('Cat1 Flying');
    t.assert.strictEqual(sprite.x, 0, 'Cat1 Flying should start at x = 0');
    t.assert.strictEqual(sprite.y, 0, 'Cat1 Flying should start at y = 0');
    t.end();
};

const testCat1FlyingStartDirection = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Cat1 Flying').direction === 90, 5000);
    const sprite = t.getSprite('Cat1 Flying');
    t.assert.strictEqual(sprite.direction, 90, 'Cat1 Flying should start with direction 90');
    t.end();
};

const testCat1FlyingTurnAndClone = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    const sprite = t.getSprite('Cat1 Flying');
    t.assert.strictEqual(sprite.getCloneCount(), 6, 'Cat1 Flying should create 6 clones');
    t.assert.strictEqual(sprite.direction, 90 + 60 * 6, 'Cat1 Flying should turn right 60 degrees 6 times');
    t.end();
};

const testUpArrowKeyPress = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.keyPress('up');
    await t.runForTime(100);
    const sprite = t.getSprite('Cat1 Flying');
    const clones = sprite.getClones();
    t.assert.strictEqual(sprite.x, 10, 'Cat1 Flying should move 10 steps');
    clones.forEach((clone, index) => {
        t.assert.strictEqual(clone.x, 10, `Clone ${index + 1} should move 10 steps`);
    });
    t.end();
};

const testDownArrowKeyPress = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.keyPress('down');
    await t.runForTime(100);
    const sprite = t.getSprite('Cat1 Flying');
    const clones = sprite.getClones();
    t.assert.strictEqual(sprite.x, -10, 'Cat1 Flying should move -10 steps');
    clones.forEach((clone, index) => {
        t.assert.strictEqual(clone.x, -10, `Clone ${index + 1} should move -10 steps`);
    });
    t.end();
};

const testLeftArrowKeyPressTurn = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.keyPress('left');
    await t.runForTime(100);
    const sprite = t.getSprite('Cat1 Flying');
    const clones = sprite.getClones();
    t.assert.strictEqual(sprite.direction, 75, 'Cat1 Flying should turn 15 degrees to the left');
    clones.forEach((clone, index) => {
        t.assert.strictEqual(clone.direction, 75, `Clone ${index + 1} should turn 15 degrees to the left`);
    });
    t.end();
};

const testLeftArrowKeyPressCostume = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.keyPress('left');
    await t.runForTime(100);
    const sprite = t.getSprite('Cat1 Flying');
    const clones = sprite.getClones();
    t.assert.strictEqual(sprite.getCostumeByName('left').name, 'left', 'Cat1 Flying should switch costume to left');
    clones.forEach((clone, index) => {
        t.assert.strictEqual(clone.getCostumeByName('left').name, 'left', `Clone ${index + 1} should switch costume to left`);
    });
    t.end();
};

const testRightArrowKeyPressTurn = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.keyPress('right');
    await t.runForTime(100);
    const sprite = t.getSprite('Cat1 Flying');
    const clones = sprite.getClones();
    t.assert.strictEqual(sprite.direction, 105, 'Cat1 Flying should turn 15 degrees to the right');
    clones.forEach((clone, index) => {
        t.assert.strictEqual(clone.direction, 105, `Clone ${index + 1} should turn 15 degrees to the right`);
    });
    t.end();
};

const testRightArrowKeyPressCostume = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.keyPress('right');
    await t.runForTime(100);
    const sprite = t.getSprite('Cat1 Flying');
    const clones = sprite.getClones();
    t.assert.strictEqual(sprite.getCostumeByName('right').name, 'right', 'Cat1 Flying should switch costume to right');
    clones.forEach((clone, index) => {
        t.assert.strictEqual(clone.getCostumeByName('right').name, 'right', `Clone ${index + 1} should switch costume to right`);
    });
    t.end();
};

const testSpaceKeyPressSequence = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.keyPress('space');
    await t.runForTime(1000);
    const sprite = t.getSprite('Cat1 Flying');
    const clones = sprite.getClones();
    t.assert.strictEqual(sprite.direction, 90 + 10 * 36, 'Cat1 Flying should turn 10 degrees to the right 36 times');
    t.assert.strictEqual(sprite.x, 10 * 36, 'Cat1 Flying should move 10 steps 36 times');
    clones.forEach((clone, index) => {
        t.assert.strictEqual(clone.direction, 90 + 10 * 36, `Clone ${index + 1} should turn 10 degrees to the right 36 times`);
        t.assert.strictEqual(clone.x, 10 * 36, `Clone ${index + 1} should move 10 steps 36 times`);
    });
    t.end();
};

module.exports = [
	{
		 test: testCat1FlyingStartCoordinates,
		 name: "testCat1FlyingStartCoordinates",
		 description: "Cat1 Flying starts at coordinates (0, 0)",
		 categories: []
	},
	{
		 test: testCat1FlyingStartDirection,
		 name: "testCat1FlyingStartDirection",
		 description: "Cat1 Flying starts with direction 90",
		 categories: []
	},
	{
		 test: testCat1FlyingTurnAndClone,
		 name: "testCat1FlyingTurnAndClone",
		 description: "Cat1 Flying repeats turning right 60 degrees and creating a clone 6 times",
		 categories: []
	},
	{
		 test: testUpArrowKeyPress,
		 name: "testUpArrowKeyPress",
		 description: "When the up arrow key is pressed the sprite and the clones move 10 steps",
		 categories: []
	},
	{
		 test: testDownArrowKeyPress,
		 name: "testDownArrowKeyPress",
		 description: "When the down arrow key is pressed the sprite and the clones move -10 steps",
		 categories: []
	},
	{
		 test: testLeftArrowKeyPressTurn,
		 name: "testLeftArrowKeyPressTurn",
		 description: "When the left arrow key is pressed the sprite and the clones turn 15 degrees to the left",
		 categories: []
	},
	{
		 test: testLeftArrowKeyPressCostume,
		 name: "testLeftArrowKeyPressCostume",
		 description: "When the left arrow key is pressed the sprite and the clones switch costumes to 'left'",
		 categories: []
	},
	{
		 test: testRightArrowKeyPressTurn,
		 name: "testRightArrowKeyPressTurn",
		 description: "When the right arrow key is pressed the sprite and the clones turn 15 degrees to the right",
		 categories: []
	},
	{
		 test: testRightArrowKeyPressCostume,
		 name: "testRightArrowKeyPressCostume",
		 description: "When the right arrow key is pressed the sprite and the clones switch costumes to 'right'",
		 categories: []
	},
	{
		 test: testSpaceKeyPressSequence,
		 name: "testSpaceKeyPressSequence",
		 description: "When space is pressed the sprite and the clones repeat the following sequence 36 times: turn 10 degrees to the right, move 10 steps",
		 categories: []
	},
]
