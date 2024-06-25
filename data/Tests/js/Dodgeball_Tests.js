const testPicoStartCoordinates = async function (t) {
    t.greenFlag();
    await t.runUntil(() => {
        const pico = t.getSprite('Pico walking');
        return pico.x === -210 && pico.y === -120;
    }, 5000);
    const pico = t.getSprite('Pico walking');
    t.assert.strictEqual(pico.x, -210, 'Pico walking should start at x = -210');
    t.assert.strictEqual(pico.y, -120, 'Pico walking should start at y = -120');
    t.end();
}

const testPicoStartDirection = async function (t) {
    t.greenFlag();
    await t.runUntil(() => {
        const pico = t.getSprite('Pico walking');
        return pico.direction === 90;
    }, 5000);
    const pico = t.getSprite('Pico walking');
    t.assert.strictEqual(pico.direction, 90, 'Pico walking should start with direction 90');
    t.end();
}

const testGravityStartValue = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('gravity') === -4, 5000);
    const gravity = t.getGlobalVariable('gravity');
    t.assert.strictEqual(gravity, -4, 'Global variable gravity should start at -4');
    t.end();
}

const testPicoGravityEffect = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const pico = t.getSprite('Pico walking');
    const initialY = pico.y;
    const gravity = t.getGlobalVariable('gravity');
    await t.runForTime(1000);
    t.assert.not(pico.isTouchingColor([0, 63, 255]) || pico.isTouchingColor([255, 0, 191]), 'Pico walking should not be touching the specified colors');
    t.assert.strictEqual(pico.y, initialY + gravity, 'Pico walking y coordinate should change by gravity');
    t.end();
}

const testSpacePressJumpHeight = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Pico walking').isTouchingColor([0, 63, 255]), 5000);
    t.keyPress('space');
    await t.runForTime(1000);
    const jumpHeight = t.getGlobalVariable('jump height');
    t.assert.strictEqual(jumpHeight, 10, 'Jump height should be set to 10 when space is pressed and Pico walking touches the color [0, 63, 255]');
    t.end();
}

const testJumpHeightDecrease = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('jump height') === 10, 5000);
    await t.runForTime(1000);
    let jumpHeight = t.getGlobalVariable('jump height');
    while (jumpHeight > 0) {
        await t.runForTime(100);
        const newJumpHeight = t.getGlobalVariable('jump height');
        t.assert.strictEqual(newJumpHeight, jumpHeight - 0.5, 'Jump height should decrease by 0.5');
        jumpHeight = newJumpHeight;
    }
    t.assert.strictEqual(jumpHeight, 0, 'Jump height should reach 0');
    t.end();
}

const testPicoYCoordinateJumpHeight = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('jump height') === 10, 5000);
    const pico = t.getSprite('Pico walking');
    const initialY = pico.y;
    await t.runForTime(1000);
    const jumpHeight = t.getGlobalVariable('jump height');
    t.assert.strictEqual(pico.y, initialY + jumpHeight, 'Pico walking y coordinate should change by the current jump height');
    t.end();
}

const testPicoResetOnTouch = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const pico = t.getSprite('Pico walking');
    const ball = t.getSprite('Ball');
    const laser = t.getSprite('Laser');
    ball.x = pico.x;
    ball.y = pico.y;
    await t.runForTime(1000);
    t.assert.strictEqual(pico.x, -210, 'Pico walking should reset to starting x coordinate');
    t.assert.strictEqual(pico.y, -120, 'Pico walking should reset to starting y coordinate');
    t.assert.strictEqual(t.getGlobalVariable('jump height'), 0, 'Jump height should be set to 0');
    laser.x = pico.x;
    laser.y = pico.y;
    await t.runForTime(1000);
    t.assert.strictEqual(pico.x, -210, 'Pico walking should reset to starting x coordinate');
    t.assert.strictEqual(pico.y, -120, 'Pico walking should reset to starting y coordinate');
    t.assert.strictEqual(t.getGlobalVariable('jump height'), 0, 'Jump height should be set to 0');
    t.end();
}

const testPicoDirectionRightArrow = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.keyPress('right arrow');
    await t.runForTime(1000);
    const pico = t.getSprite('Pico walking');
    t.assert.strictEqual(pico.direction, 90, 'Pico walking should have direction 90 when right arrow key is pressed');
    t.end();
}

const testPicoDirectionLeftArrow = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.keyPress('left arrow');
    await t.runForTime(1000);
    const pico = t.getSprite('Pico walking');
    t.assert.strictEqual(pico.direction, -90, 'Pico walking should have direction -90 when left arrow key is pressed');
    t.end();
}

const testPicoMovesOnArrowPress = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const pico = t.getSprite('Pico walking');
    const initialX = pico.x;
    t.keyPress('right arrow');
    await t.runForTime(1000);
    t.assert.strictEqual(pico.x, initialX + 3, 'Pico walking should move 3 steps when an arrow key is pressed');
    t.end();
}

const testPicoCostumeCycleOnArrowPress = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const pico = t.getSprite('Pico walking');
    const initialCostume = pico.currentCostume;
    t.keyPress('right arrow');
    await t.runForTime(1000);
    t.assert.notStrictEqual(pico.currentCostume, initialCostume, 'Pico walking should cycle through costumes when an arrow key is pressed');
    t.end();
}

const testPicoYIncreaseOnUpArrow = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Pico walking').isTouchingColor([255, 0, 191]), 5000);
    const pico = t.getSprite('Pico walking');
    const initialY = pico.y;
    t.keyPress('up arrow');
    await t.runForTime(1000);
    t.assert.strictEqual(pico.y, initialY + 4, 'Pico walking y coordinate should increase by 4 when touching the color [255, 0, 191] and up arrow is pressed');
    t.end();
}

const testPicoTouchColor = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const pico = await t.getSprite('Pico');
    await t.runUntil(() => pico.isTouchingColor([0, 204, 68]), 10000);
    t.assert.equal(pico.sayText, ':)', 'Pico should say :) when touching the color [0, 204, 68]');
    await t.runForTime(2000);
    t.assert.equal(pico.sayText, '', 'Pico should stop saying :) after 2 seconds');
    t.end();
}

const testLaserStartCostume = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const laser = await t.getSprite('Laser');
    await t.runForTime(1000);
    t.assert.equal(laser.getCostumeByIndex(laser.currentCostume).name, 'on', 'Laser should start with costume on');
    t.end();
}

const testLaserSwitchCostume = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const laser = await t.getSprite('Laser');
    let lastCostume = laser.currentCostume;
    await t.runForTime(1000);
    for (let i = 0; i < 5; i++) {
        await t.runUntil(() => laser.currentCostume !== lastCostume, 4000);
        t.assert.ok(['on', 'off'].includes(laser.getCostumeByIndex(laser.currentCostume).name), 'Laser should switch between on and off costumes');
        lastCostume = laser.currentCostume;
        await t.runForTime(1000);
    }
    t.end();
}

const testTrapdoorStartCostume = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const trapdoor = await t.getSprite('Trapdoor');
    await t.runForTime(1000);
    t.assert.equal(trapdoor.getCostumeByIndex(trapdoor.currentCostume).name, 'on', 'Trapdoor should start with costume on');
    t.end();
}

const testTrapdoorSwitchCostume = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const trapdoor = await t.getSprite('Trapdoor');
    let lastCostume = trapdoor.currentCostume;
    await t.runForTime(1000);
    for (let i = 0; i < 5; i++) {
        await t.runUntil(() => trapdoor.currentCostume !== lastCostume, 5000);
        t.assert.ok(['on', 'off'].includes(trapdoor.getCostumeByIndex(trapdoor.currentCostume).name), 'Trapdoor should switch between on and off costumes');
        lastCostume = trapdoor.currentCostume;
        await t.runForTime(1000);
    }
    t.end();
}

const testBallStartInvisible = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const ball = await t.getSprite('Ball');
    await t.runForTime(1000);
    t.assert.not(ball.visible, 'Ball should be invisible at the start');
    t.end();
}

const testBallCloneIntervals = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const ball = await t.getSprite('Ball');
    let initialCloneCount = ball.getCloneCount();
    for (let i = 0; i < 3; i++) {
        await t.runUntil(() => ball.getCloneCount() > initialCloneCount, 5000);
        t.assert.greater(ball.getCloneCount(), initialCloneCount, 'Ball should create a new clone');
        initialCloneCount = ball.getCloneCount();
    }
    t.end();
}

const testCloneRandomSize = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const ball = await t.getSprite('Ball');
    await t.runUntil(() => ball.getCloneCount() > 0, 5000);
    const clone = ball.getClone(0);
    t.assert.greaterOrEqual(clone.size, 30, 'Clone size should be at least 30');
    t.assert.lessOrEqual(clone.size, 50, 'Clone size should be at most 50');
    t.end();
}

const testCloneRandomCostume = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const ball = await t.getSprite('Ball');
    await t.runUntil(() => ball.getCloneCount() > 0, 5000);
    const clone = ball.getClone(0);
    t.assert.greaterOrEqual(clone.currentCostume, 1, 'Clone costume index should be at least 1');
    t.assert.lessOrEqual(clone.currentCostume, 3, 'Clone costume index should be at most 3');
    t.end();
}

const testCloneStartCoordinates = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const ball = await t.getSprite('Ball');
    await t.runUntil(() => ball.getCloneCount() > 0, 5000);
    const clone = ball.getClone(0);
    t.assert.equal(clone.x, 160, 'Clone x coordinate should be 160');
    t.assert.equal(clone.y, 160, 'Clone y coordinate should be 160');
    t.end();
}

const testCloneVisible = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const ball = await t.getSprite('Ball');
    await t.runUntil(() => ball.getCloneCount() > 0, 5000);
    const clone = ball.getClone(0);
    t.assert.ok(clone.visible, 'Clone should be visible');
    t.end();
}

const testCloneMovementSequence = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const ball = await t.getSprite('Ball');
    await t.runUntil(() => ball.getCloneCount() > 0, 5000);
    const clone = ball.getClone(0);
    let initialY = clone.y;
    await t.runForTime(100);
    t.assert.equal(clone.y, initialY - 88, 'Clone should change y coordinate by -4 22 times');
    let initialX = clone.x;
    let initialDirection = clone.direction;
    await t.runForTime(100);
    t.assert.equal(clone.x, initialX - 360, 'Clone should change x coordinate by -2 180 times');
    t.assert.equal(clone.direction, initialDirection - 1080, 'Clone should rotate 6 degrees left 180 times');
    initialY = clone.y;
    await t.runForTime(100);
    t.assert.equal(clone.y, initialY - 120, 'Clone should change y coordinate by -4 30 times');
    initialX = clone.x;
    initialDirection = clone.direction;
    await t.runForTime(100);
    t.assert.equal(clone.x, initialX + 380, 'Clone should change x coordinate by 2 190 times');
    t.assert.equal(clone.direction, initialDirection + 1140, 'Clone should rotate 6 degrees right 190 times');
    initialY = clone.y;
    await t.runForTime(100);
    t.assert.equal(clone.y, initialY - 120, 'Clone should change y coordinate by -4 30 times');
    initialX = clone.x;
    initialDirection = clone.direction;
    await t.runForTime(100);
    t.assert.equal(clone.x, initialX - 340, 'Clone should change x coordinate by -2 170 times');
    t.assert.equal(clone.direction, initialDirection - 1020, 'Clone should rotate 6 degrees left 170 times');
    t.end();
}

const testCloneDeletion = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const ball = await t.getSprite('Ball');
    await t.runUntil(() => ball.getCloneCount() > 0, 5000);
    const clone = ball.getClone(0);
    await t.runForTime(1000);
    t.assert.equal(ball.getCloneCount(), 0, 'Clone should be deleted after the movement sequence');
    t.end();
}

module.exports = [
	{
		 test: testPicoStartCoordinates,
		 name: "testPicoStartCoordinates",
		 description: "Pico walking starts at coordinates (-210, -120)",
		 categories: []
	},
	{
		 test: testPicoStartDirection,
		 name: "testPicoStartDirection",
		 description: "Pico walking starts with direction 90",
		 categories: []
	},
	{
		 test: testGravityStartValue,
		 name: "testGravityStartValue",
		 description: "Global variable gravity starts at -4",
		 categories: []
	},
	{
		 test: testPicoGravityEffect,
		 name: "testPicoGravityEffect",
		 description: "Pico walking y coordinate changes by gravity when not touching specific colors",
		 categories: []
	},
	{
		 test: testSpacePressJumpHeight,
		 name: "testSpacePressJumpHeight",
		 description: "Space press sets jump height to 10 when Pico walking touches specific color",
		 categories: []
	},
	{
		 test: testJumpHeightDecrease,
		 name: "testJumpHeightDecrease",
		 description: "Jump height decreases by 0.5 until it reaches 0",
		 categories: []
	},
	{
		 test: testPicoYCoordinateJumpHeight,
		 name: "testPicoYCoordinateJumpHeight",
		 description: "Pico walking y coordinate changes by current jump height",
		 categories: []
	},
	{
		 test: testPicoResetOnTouch,
		 name: "testPicoResetOnTouch",
		 description: "Pico walking resets to starting conditions and jump height is set to 0 when touched by Ball or Laser",
		 categories: []
	},
	{
		 test: testPicoDirectionRightArrow,
		 name: "testPicoDirectionRightArrow",
		 description: "Pico walking direction is 90 when right arrow key is pressed",
		 categories: []
	},
	{
		 test: testPicoDirectionLeftArrow,
		 name: "testPicoDirectionLeftArrow",
		 description: "Pico walking direction is -90 when left arrow key is pressed",
		 categories: []
	},
	{
		 test: testPicoMovesOnArrowPress,
		 name: "testPicoMovesOnArrowPress",
		 description: "Pico walking moves 3 steps when an arrow key is pressed",
		 categories: []
	},
	{
		 test: testPicoCostumeCycleOnArrowPress,
		 name: "testPicoCostumeCycleOnArrowPress",
		 description: "Pico walking cycles through costumes when an arrow key is pressed",
		 categories: []
	},
	{
		 test: testPicoYIncreaseOnUpArrow,
		 name: "testPicoYIncreaseOnUpArrow",
		 description: "Pico walking y coordinate increases by 4 when touching specific color and up arrow is pressed",
		 categories: []
	},
	{
		 test: testPicoTouchColor,
		 name: "testPicoTouchColor",
		 description: "Pico walking touches the color [0, 204, 68] it says ':)' for 2 seconds",
		 categories: []
	},
	{
		 test: testLaserStartCostume,
		 name: "testLaserStartCostume",
		 description: "At the start Laser has costume 'on'",
		 categories: []
	},
	{
		 test: testLaserSwitchCostume,
		 name: "testLaserSwitchCostume",
		 description: "Laser switches between the 'on' and 'off' costumes in random intervals from 2 to 4 seconds",
		 categories: []
	},
	{
		 test: testTrapdoorStartCostume,
		 name: "testTrapdoorStartCostume",
		 description: "At the start Trapdoor has costume 'on'",
		 categories: []
	},
	{
		 test: testTrapdoorSwitchCostume,
		 name: "testTrapdoorSwitchCostume",
		 description: "Trapdoor switches between the 'on' and 'off' costumes in random intervals from 3 to 5 seconds",
		 categories: []
	},
	{
		 test: testBallStartInvisible,
		 name: "testBallStartInvisible",
		 description: "At the start Ball is invisible",
		 categories: []
	},
	{
		 test: testBallCloneIntervals,
		 name: "testBallCloneIntervals",
		 description: "Ball creates a new clone in random intervals of 3 to 5 seconds",
		 categories: []
	},
	{
		 test: testCloneRandomSize,
		 name: "testCloneRandomSize",
		 description: "Each clone starts with a random size between 30 and 50",
		 categories: []
	},
	{
		 test: testCloneRandomCostume,
		 name: "testCloneRandomCostume",
		 description: "Each clone starts with a random costume index between 1 and 3",
		 categories: []
	},
	{
		 test: testCloneStartCoordinates,
		 name: "testCloneStartCoordinates",
		 description: "Each clone starts at coordinates (160, 160)",
		 categories: []
	},
	{
		 test: testCloneVisible,
		 name: "testCloneVisible",
		 description: "Each clone is visible",
		 categories: []
	},
	{
		 test: testCloneMovementSequence,
		 name: "testCloneMovementSequence",
		 description: "Each clone has the following movement sequence",
		 categories: []
	},
	{
		 test: testCloneDeletion,
		 name: "testCloneDeletion",
		 description: "After the movement sequence is completed the clone is deleted",
		 categories: []
	},
]
