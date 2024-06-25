const testPicoStartCoordinates = async function (t) {
    t.greenFlag();
    await t.runUntil(() => {
        const pico = t.getSprite('Pico walking');
        return pico.x === -210 && pico.y === -120;
    }, 5000);
    t.end();
}

const testPicoStartDirection = async function (t) {
    t.greenFlag();
    await t.runUntil(() => {
        const pico = t.getSprite('Pico walking');
        return pico.direction === 90;
    }, 5000);
    t.end();
}

const testGravityStart = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('gravity') === -4, 5000);
    t.end();
}

const testPicoGravityEffect = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const pico = t.getSprite('Pico walking');
    const initialY = pico.y;
    await t.runForTime(1000);
    t.assert.not(pico.isTouchingColor([0, 63, 255]) || pico.isTouchingColor([255, 0, 191]), 'Pico is not touching specified colors');
    t.assert.equal(pico.y, initialY + t.getGlobalVariable('gravity'), 'Pico y coordinate changes by gravity');
    t.end();
}

const testJumpHeightSet = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Pico walking').isTouchingColor([0, 63, 255]), 5000);
    t.keyPress('space');
    await t.runForTime(100);
    t.assert.equal(t.getGlobalVariable('jump height'), 10, 'Jump height is set to 10');
    t.end();
}

const testJumpHeightDecrease = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('jump height') === 10, 5000);
    await t.runForTime(100);
    for (let i = 0; i < 20; i++) {
        await t.runForTime(100);
        t.assert.equal(t.getGlobalVariable('jump height'), 10 - (i + 1) * 0.5, 'Jump height decreases by 0.5');
    }
    t.assert.equal(t.getGlobalVariable('jump height'), 0, 'Jump height reaches 0');
    t.end();
}

const testPicoYChangeByJumpHeight = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('jump height') === 10, 5000);
    const pico = t.getSprite('Pico walking');
    const initialY = pico.y;
    await t.runForTime(100);
    t.assert.equal(pico.y, initialY + 10, 'Pico y coordinate changes by jump height');
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
    await t.runForTime(100);
    t.assert.equal(pico.x, -210, 'Pico x reset');
    t.assert.equal(pico.y, -120, 'Pico y reset');
    t.assert.equal(t.getGlobalVariable('jump height'), 0, 'Jump height reset');
    laser.x = pico.x;
    laser.y = pico.y;
    await t.runForTime(100);
    t.assert.equal(pico.x, -210, 'Pico x reset');
    t.assert.equal(pico.y, -120, 'Pico y reset');
    t.assert.equal(t.getGlobalVariable('jump height'), 0, 'Jump height reset');
    t.end();
}

const testPicoDirectionRight = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.keyPress('right arrow');
    await t.runForTime(100);
    t.assert.equal(t.getSprite('Pico walking').direction, 90, 'Pico direction is 90');
    t.end();
}

const testPicoDirectionLeft = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.keyPress('left arrow');
    await t.runForTime(100);
    t.assert.equal(t.getSprite('Pico walking').direction, -90, 'Pico direction is -90');
    t.end();
}

const testPicoMoveSteps = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const pico = t.getSprite('Pico walking');
    const initialX = pico.x;
    t.keyPress('right arrow');
    await t.runForTime(100);
    t.assert.equal(pico.x, initialX + 3, 'Pico moves 3 steps');
    t.end();
}

const testPicoCostumeCycle = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const pico = t.getSprite('Pico walking');
    const initialCostume = pico.currentCostume;
    t.keyPress('right arrow');
    await t.runForTime(100);
    t.assert.notEqual(pico.currentCostume, initialCostume, 'Pico cycles through costumes');
    t.end();
}

const testPicoYIncreaseOnUpArrow = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Pico walking').isTouchingColor([255, 0, 191]), 5000);
    const pico = t.getSprite('Pico walking');
    const initialY = pico.y;
    t.keyPress('up arrow');
    await t.runForTime(100);
    t.assert.equal(pico.y, initialY + 4, 'Pico y coordinate increases by 4');
    t.end();
}

const testPicoSayOnTouch = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Pico walking').isTouchingColor([0, 204, 68]), 5000);
    const pico = t.getSprite('Pico walking');
    t.assert.equal(pico.sayText, ':)', 'Pico says :)');
    await t.runForTime(2000);
    t.assert.equal(pico.sayText, '', 'Pico stops saying :) after 2 seconds');
    t.end();
}

const testLaserStartCostume = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Laser').getCostumeByName('on'), 5000);
    t.end();
}

const testLaserCostumeSwitch = async function (t) {
    t.greenFlag();
    const laser = t.getSprite('Laser');
    let initialCostume = laser.currentCostume;
    await t.runForTime(4000);
    t.assert.notEqual(laser.currentCostume, initialCostume, 'Laser switches costume');
    t.end();
}

const testTrapdoorStartCostume = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Trapdoor').getCostumeByName('on'), 5000);
    t.end();
}

const testTrapdoorCostumeSwitch = async function (t) {
    t.greenFlag();
    const trapdoor = t.getSprite('Trapdoor');
    let initialCostume = trapdoor.currentCostume;
    await t.runForTime(5000);
    t.assert.notEqual(trapdoor.currentCostume, initialCostume, 'Trapdoor switches costume');
    t.end();
}

const testBallStartInvisible = async function (t) {
    t.greenFlag();
    await t.runUntil(() => !t.getSprite('Ball').visible, 5000);
    t.end();
}

const testBallCloneCreation = async function (t) {
    t.greenFlag();
    const ball = t.getSprite('Ball');
    const initialCloneCount = ball.getCloneCount();
    await t.runForTime(5000);
    t.assert.greater(ball.getCloneCount(), initialCloneCount, 'Ball creates new clone');
    t.end();
}

const testCloneRandomSize = async function (t) {
    t.greenFlag();
    await t.runForTime(5000);
    const ball = t.getSprite('Ball');
    const clones = ball.getClones();
    clones.forEach(clone => {
        t.assert.greaterOrEqual(clone.size, 30, 'Clone size is at least 30');
        t.assert.lessOrEqual(clone.size, 50, 'Clone size is at most 50');
    });
    t.end();
}

const testCloneRandomCostume = async function (t) {
    t.greenFlag();
    await t.runForTime(5000);
    const ball = t.getSprite('Ball');
    const clones = ball.getClones();
    clones.forEach(clone => {
        t.assert.greaterOrEqual(clone.currentCostume, 1, 'Clone costume index is at least 1');
        t.assert.lessOrEqual(clone.currentCostume, 3, 'Clone costume index is at most 3');
    });
    t.end();
}

const testCloneStartCoordinates = async function (t) {
    t.greenFlag();
    await t.runForTime(5000);
    const ball = t.getSprite('Ball');
    const clones = ball.getClones();
    clones.forEach(clone => {
        t.assert.equal(clone.x, 160, 'Clone x coordinate is 160');
        t.assert.equal(clone.y, 160, 'Clone y coordinate is 160');
    });
    t.end();
}

const testCloneVisibility = async function (t) {
    t.greenFlag();
    await t.runForTime(5000);
    const ball = t.getSprite('Ball');
    const clones = ball.getClones();
    clones.forEach(clone => {
        t.assert.ok(clone.visible, 'Clone is visible');
    });
    t.end();
}

const testCloneMovementSequence = async function (t) {
    t.greenFlag();
    await t.runForTime(5000);
    const ball = t.getSprite('Ball');
    const clone = ball.getClones()[0];
    const initialX = clone.x;
    const initialY = clone.y;
    await t.runForTime(100);
    t.assert.equal(clone.y, initialY - 4 * 22, 'Clone y coordinate changes by -4 22 times');
    await t.runForTime(100);
    t.assert.equal(clone.x, initialX - 2 * 180, 'Clone x coordinate changes by -2 180 times');
    t.assert.equal(clone.direction, -6 * 180, 'Clone direction changes by rotating 6 degrees left 180 times');
    await t.runForTime(100);
    t.assert.equal(clone.y, initialY - 4 * 30, 'Clone y coordinate changes by -4 30 times');
    await t.runForTime(100);
    t.assert.equal(clone.x, initialX + 2 * 190, 'Clone x coordinate changes by 2 190 times');
    t.assert.equal(clone.direction, 6 * 190, 'Clone direction changes by rotating 6 degrees right 190 times');
    await t.runForTime(100);
    t.assert.equal(clone.y, initialY - 4 * 30, 'Clone y coordinate changes by -4 30 times');
    await t.runForTime(100);
    t.assert.equal(clone.x, initialX - 2 * 170, 'Clone x coordinate changes by -2 170 times');
    t.assert.equal(clone.direction, -6 * 170, 'Clone direction changes by rotating 6 degrees left 170 times');
    t.end();
}

const testCloneDeletion = async function (t) {
    t.greenFlag();
    await t.runForTime(5000);
    const ball = t.getSprite('Ball');
    const clone = ball.getClones()[0];
    await t.runForTime(100);
    t.assert.equal(clone.getCloneCount(), 0, 'Clone is deleted after movement sequence');
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
		 test: testGravityStart,
		 name: "testGravityStart",
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
		 test: testJumpHeightSet,
		 name: "testJumpHeightSet",
		 description: "Jump height set to 10 when space is pressed and Pico walking is touching color [0, 63, 255]",
		 categories: []
	},
	{
		 test: testJumpHeightDecrease,
		 name: "testJumpHeightDecrease",
		 description: "Jump height decreases by 0.5 until it reaches 0",
		 categories: []
	},
	{
		 test: testPicoYChangeByJumpHeight,
		 name: "testPicoYChangeByJumpHeight",
		 description: "Pico walking y coordinate changes by current jump height",
		 categories: []
	},
	{
		 test: testPicoResetOnTouch,
		 name: "testPicoResetOnTouch",
		 description: "Pico walking reset to starting conditions and jump height set to 0 when touched by Ball or Laser",
		 categories: []
	},
	{
		 test: testPicoDirectionRight,
		 name: "testPicoDirectionRight",
		 description: "Pico walking direction is 90 when right arrow key is pressed",
		 categories: []
	},
	{
		 test: testPicoDirectionLeft,
		 name: "testPicoDirectionLeft",
		 description: "Pico walking direction is -90 when left arrow key is pressed",
		 categories: []
	},
	{
		 test: testPicoMoveSteps,
		 name: "testPicoMoveSteps",
		 description: "Pico walking moves 3 steps when an arrow key is pressed",
		 categories: []
	},
	{
		 test: testPicoCostumeCycle,
		 name: "testPicoCostumeCycle",
		 description: "Pico walking cycles through costumes when an arrow key is pressed",
		 categories: []
	},
	{
		 test: testPicoYIncreaseOnUpArrow,
		 name: "testPicoYIncreaseOnUpArrow",
		 description: "Pico walking y coordinate increases by 4 when touching color [255, 0, 191] and up arrow is pressed",
		 categories: []
	},
	{
		 test: testPicoSayOnTouch,
		 name: "testPicoSayOnTouch",
		 description: "Pico walking says ':)' for 2 seconds when touching color [0, 204, 68]",
		 categories: []
	},
	{
		 test: testLaserStartCostume,
		 name: "testLaserStartCostume",
		 description: "Laser starts with costume 'on'",
		 categories: []
	},
	{
		 test: testLaserCostumeSwitch,
		 name: "testLaserCostumeSwitch",
		 description: "Laser switches between 'on' and 'off' costumes in random intervals from 2 to 4 seconds",
		 categories: []
	},
	{
		 test: testTrapdoorStartCostume,
		 name: "testTrapdoorStartCostume",
		 description: "Trapdoor starts with costume 'on'",
		 categories: []
	},
	{
		 test: testTrapdoorCostumeSwitch,
		 name: "testTrapdoorCostumeSwitch",
		 description: "Trapdoor switches between 'on' and 'off' costumes in random intervals from 3 to 5 seconds",
		 categories: []
	},
	{
		 test: testBallStartInvisible,
		 name: "testBallStartInvisible",
		 description: "Ball starts invisible",
		 categories: []
	},
	{
		 test: testBallCloneCreation,
		 name: "testBallCloneCreation",
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
		 test: testCloneVisibility,
		 name: "testCloneVisibility",
		 description: "Each clone is visible",
		 categories: []
	},
	{
		 test: testCloneMovementSequence,
		 name: "testCloneMovementSequence",
		 description: "Each clone follows the specified movement sequence",
		 categories: []
	},
	{
		 test: testCloneDeletion,
		 name: "testCloneDeletion",
		 description: "Clone is deleted after completing movement sequence",
		 categories: []
	},
]
