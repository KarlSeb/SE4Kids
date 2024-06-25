const testCat1FlyingStartCoordinates = async function (t) {
    t.greenFlag();
    await t.runUntil(() => {
        const sprite = t.getSprite('Cat1 Flying');
        return sprite.x === 0 && sprite.y === 0;
    }, 1000);
    const sprite = t.getSprite('Cat1 Flying');
    t.assert.strictEqual(sprite.x, 0, 'Cat1 Flying should start at x = 0');
    t.assert.strictEqual(sprite.y, 0, 'Cat1 Flying should start at y = 0');
    t.end();
}

const testCat1FlyingStartDirection = async function (t) {
    t.greenFlag();
    await t.runUntil(() => {
        const sprite = t.getSprite('Cat1 Flying');
        return sprite.direction === 90;
    }, 1000);
    const sprite = t.getSprite('Cat1 Flying');
    t.assert.strictEqual(sprite.direction, 90, 'Cat1 Flying should start with direction 90');
    t.end();
}

const testCat1FlyingCloneCreation = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const sprite = t.getSprite('Cat1 Flying');
    t.assert.strictEqual(sprite.getCloneCount(), 6, 'Cat1 Flying should create 6 clones');
    t.end();
}

const testUpArrowMovesSpriteAndClones = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const sprite = t.getSprite('Cat1 Flying');
    const initialX = sprite.x;
    const initialY = sprite.y;
    t.keyPress('up');
    await t.runForTime(100);
    t.assert.strictEqual(sprite.x, initialX + 10, 'Cat1 Flying should move 10 steps to the right');
    t.assert.strictEqual(sprite.y, initialY, 'Cat1 Flying should not move vertically');
    const clones = sprite.getClones();
    clones.forEach((clone, index) => {
        t.assert.strictEqual(clone.x, initialX + 10, `Clone ${index} should move 10 steps to the right`);
        t.assert.strictEqual(clone.y, initialY, `Clone ${index} should not move vertically`);
    });
    t.end();
}

const testDownArrowMovesSpriteAndClones = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const sprite = t.getSprite('Cat1 Flying');
    const initialX = sprite.x;
    const initialY = sprite.y;
    t.keyPress('down');
    await t.runForTime(100);
    t.assert.strictEqual(sprite.x, initialX - 10, 'Cat1 Flying should move -10 steps to the left');
    t.assert.strictEqual(sprite.y, initialY, 'Cat1 Flying should not move vertically');
    const clones = sprite.getClones();
    clones.forEach((clone, index) => {
        t.assert.strictEqual(clone.x, initialX - 10, `Clone ${index} should move -10 steps to the left`);
        t.assert.strictEqual(clone.y, initialY, `Clone ${index} should not move vertically`);
    });
    t.end();
}

const testLeftArrowTurnsSpriteAndClones = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const sprite = t.getSprite('Cat1 Flying');
    const initialDirection = sprite.direction;
    t.keyPress('left');
    await t.runForTime(100);
    t.assert.strictEqual(sprite.direction, initialDirection - 15, 'Cat1 Flying should turn 15 degrees to the left');
    const clones = sprite.getClones();
    clones.forEach((clone, index) => {
        t.assert.strictEqual(clone.direction, initialDirection - 15, `Clone ${index} should turn 15 degrees to the left`);
    });
    t.end();
}

const testLeftArrowSwitchesCostume = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.keyPress('left');
    await t.runForTime(100);
    const sprite = t.getSprite('Cat1 Flying');
    t.assert.strictEqual(sprite.getCostumeByName('left').name, 'left', 'Cat1 Flying should switch costume to left');
    const clones = sprite.getClones();
    clones.forEach((clone, index) => {
        t.assert.strictEqual(clone.getCostumeByName('left').name, 'left', `Clone ${index} should switch costume to left`);
    });
    t.end();
}

const testRightArrowTurnsSpriteAndClones = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const sprite = t.getSprite('Cat1 Flying');
    const initialDirection = sprite.direction;
    t.keyPress('right');
    await t.runForTime(100);
    t.assert.strictEqual(sprite.direction, initialDirection + 15, 'Cat1 Flying should turn 15 degrees to the right');
    const clones = sprite.getClones();
    clones.forEach((clone, index) => {
        t.assert.strictEqual(clone.direction, initialDirection + 15, `Clone ${index} should turn 15 degrees to the right`);
    });
    t.end();
}

const testRightArrowSwitchesCostume = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.keyPress('right');
    await t.runForTime(100);
    const sprite = t.getSprite('Cat1 Flying');
    t.assert.strictEqual(sprite.getCostumeByName('right').name, 'right', 'Cat1 Flying should switch costume to right');
    const clones = sprite.getClones();
    clones.forEach((clone, index) => {
        t.assert.strictEqual(clone.getCostumeByName('right').name, 'right', `Clone ${index} should switch costume to right`);
    });
    t.end();
}

const testSpaceKeySequence = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const sprite = t.getSprite('Cat1 Flying');
    const initialDirection = sprite.direction;
    const initialX = sprite.x;
    const initialY = sprite.y;
    t.keyPress('space');
    await t.runForTime(1000);
    t.assert.strictEqual(sprite.direction, initialDirection + 360, 'Cat1 Flying should turn 360 degrees');
    t.assert.strictEqual(sprite.x, initialX + 360, 'Cat1 Flying should move 360 steps to the right');
    t.assert.strictEqual(sprite.y, initialY, 'Cat1 Flying should not move vertically');
    const clones = sprite.getClones();
    clones.forEach((clone, index) => {
        t.assert.strictEqual(clone.direction, initialDirection + 360, `Clone ${index} should turn 360 degrees`);
        t.assert.strictEqual(clone.x, initialX + 360, `Clone ${index} should move 360 steps to the right`);
        t.assert.strictEqual(clone.y, initialY, `Clone ${index} should not move vertically`);
    });
    t.end();
}

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
		 test: testCat1FlyingCloneCreation,
		 name: "testCat1FlyingCloneCreation",
		 description: "Cat1 Flying repeats turning right 60 degrees and creating a clone 6 times",
		 categories: []
	},
	{
		 test: testUpArrowMovesSpriteAndClones,
		 name: "testUpArrowMovesSpriteAndClones",
		 description: "Up arrow key moves sprite and clones 10 steps",
		 categories: []
	},
	{
		 test: testDownArrowMovesSpriteAndClones,
		 name: "testDownArrowMovesSpriteAndClones",
		 description: "Down arrow key moves sprite and clones -10 steps",
		 categories: []
	},
	{
		 test: testLeftArrowTurnsSpriteAndClones,
		 name: "testLeftArrowTurnsSpriteAndClones",
		 description: "Left arrow key turns sprite and clones 15 degrees to the left",
		 categories: []
	},
	{
		 test: testLeftArrowSwitchesCostume,
		 name: "testLeftArrowSwitchesCostume",
		 description: "Left arrow key switches sprite and clones costumes to 'left'",
		 categories: []
	},
	{
		 test: testRightArrowTurnsSpriteAndClones,
		 name: "testRightArrowTurnsSpriteAndClones",
		 description: "Right arrow key turns sprite and clones 15 degrees to the right",
		 categories: []
	},
	{
		 test: testRightArrowSwitchesCostume,
		 name: "testRightArrowSwitchesCostume",
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
