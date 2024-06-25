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
    await t.runUntil(() => {
        const gravity = t.getGlobalVariable('gravity');
        return gravity === -4;
    }, 5000);
    t.end();
}

const testPicoGravityEffect = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const pico = t.getSprite('Pico walking');
    const initialY = pico.y;
    await t.runForTime(1000);
    t.assert.not(pico.isTouchingColor([0, 63, 255]) || pico.isTouchingColor([255, 0, 191]), 'Pico is touching forbidden colors');
    t.assert.equal(pico.y, initialY + t.getGlobalVariable('gravity'), 'Pico y coordinate did not change by gravity');
    t.end();
}

const testJumpHeightSet = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const pico = t.getSprite('Pico walking');
    await t.runUntil(() => pico.isTouchingColor([0, 63, 255]), 5000);
    t.keyPress('space');
    await t.runForTime(1000);
    t.assert.equal(t.getGlobalVariable('jump height'), 10, 'Jump height not set to 10');
    t.end();
}

const testJumpHeightDecrease = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const pico = t.getSprite('Pico walking');
    await t.runUntil(() => pico.isTouchingColor([0, 63, 255]), 5000);
    t.keyPress('space');
    await t.runForTime(1000);
    let jumpHeight = t.getGlobalVariable('jump height');
    while (jumpHeight > 0) {
        await t.runForTime(1000);
        t.assert.equal(t.getGlobalVariable('jump height'), jumpHeight - 0.5, 'Jump height did not decrease by 0.5');
        jumpHeight -= 0.5;
    }
    t.assert.equal(t.getGlobalVariable('jump height'), 0, 'Jump height did not reach 0');
    t.end();
}

const testPicoYChangeByJumpHeight = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const pico = t.getSprite('Pico walking');
    await t.runUntil(() => pico.isTouchingColor([0, 63, 255]), 5000);
    t.keyPress('space');
    await t.runForTime(1000);
    let jumpHeight = t.getGlobalVariable('jump height');
    const initialY = pico.y;
    await t.runForTime(1000);
    t.assert.equal(pico.y, initialY + jumpHeight, 'Pico y coordinate did not change by jump height');
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
    t.assert.equal(pico.x, -210, 'Pico x coordinate not reset');
    t.assert.equal(pico.y, -120, 'Pico y coordinate not reset');
    t.assert.equal(t.getGlobalVariable('jump height'), 0, 'Jump height not reset to 0');
    laser.x = pico.x;
    laser.y = pico.y;
    await t.runForTime(1000);
    t.assert.equal(pico.x, -210, 'Pico x coordinate not reset');
    t.assert.equal(pico.y, -120, 'Pico y coordinate not reset');
    t.assert.equal(t.getGlobalVariable('jump height'), 0, 'Jump height not reset to 0');
    t.end();
}

const testPicoDirectionRight = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.keyPress('right arrow');
    await t.runForTime(1000);
    const pico = t.getSprite('Pico walking');
    t.assert.equal(pico.direction, 90, 'Pico direction not 90 when right arrow pressed');
    t.end();
}

const testPicoDirectionLeft = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.keyPress('left arrow');
    await t.runForTime(1000);
    const pico = t.getSprite('Pico walking');
    t.assert.equal(pico.direction, -90, 'Pico direction not -90 when left arrow pressed');
    t.end();
}

const testPicoMoveOnArrowPress = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const pico = t.getSprite('Pico walking');
    const initialX = pico.x;
    t.keyPress('right arrow');
    await t.runForTime(1000);
    t.assert.equal(pico.x, initialX + 3, 'Pico did not move 3 steps when right arrow pressed');
    t.end();
}

const testPicoCostumeCycleOnArrowPress = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const pico = t.getSprite('Pico walking');
    const initialCostume = pico.currentCostume;
    t.keyPress('right arrow');
    await t.runForTime(1000);
    t.assert.notEqual(pico.currentCostume, initialCostume, 'Pico did not cycle costumes when right arrow pressed');
    t.end();
}

const testPicoYIncreaseOnUpArrow = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const pico = t.getSprite('Pico walking');
    await t.runUntil(() => pico.isTouchingColor([255, 0, 191]), 5000);
    const initialY = pico.y;
    t.keyPress('up arrow');
    await t.runForTime(1000);
    t.assert.equal(pico.y, initialY + 4, 'Pico y coordinate did not increase by 4 when up arrow pressed');
    t.end();
}

const testPicoSayOnTouchColor = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const pico = t.getSprite('Pico walking');
    await t.runUntil(() => pico.isTouchingColor([0, 204, 68]), 5000);
    t.assert.equal(pico.sayText, ':)', 'Pico did not say :) when touching specific color');
    await t.runForTime(2000);
    t.assert.equal(pico.sayText, '', 'Pico did not stop saying :) after 2 seconds');
    t.end();
}

const testLaserStartCostume = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const laser = t.getSprite('Laser');
    t.assert.equal(laser.getCostumeByIndex(laser.currentCostume).name, 'on', 'Laser did not start with costume on');
    t.end();
}

const testLaserCostumeSwitch = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const laser = t.getSprite('Laser');
    const initialCostume = laser.currentCostume;
    await t.runForTime(4000);
    t.assert.notEqual(laser.currentCostume, initialCostume, 'Laser did not switch costumes in 2 to 4 seconds');
    t.end();
}

const testTrapdoorStartCostume = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const trapdoor = t.getSprite('Trapdoor');
    t.assert.equal(trapdoor.getCostumeByIndex(trapdoor.currentCostume).name, 'on', 'Trapdoor did not start with costume on');
    t.end();
}

const testTrapdoorCostumeSwitch = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const trapdoor = t.getSprite('Trapdoor');
    const initialCostume = trapdoor.currentCostume;
    await t.runForTime(5000);
    t.assert.notEqual(trapdoor.currentCostume, initialCostume, 'Trapdoor did not switch costumes in 3 to 5 seconds');
    t.end();
}

const testBallStartInvisible = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const ball = t.getSprite('Ball');
    t.assert.equal(ball.visible, false, 'Ball is not invisible at start');
    t.end();
}

const testBallCloneCreation = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const ball = t.getSprite('Ball');
    const initialCloneCount = ball.getCloneCount();
    await t.runForTime(5000);
    t.assert.greater(ball.getCloneCount(), initialCloneCount, 'Ball did not create a new clone in 3 to 5 seconds');
    t.end();
}

const testCloneSize = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const ball = t.getSprite('Ball');
    await t.runForTime(5000);
    const clones = ball.getClones();
    clones.forEach(clone => {
        t.assert.greaterOrEqual(clone.size, 30, 'Clone size is less than 30');
        t.assert.lessOrEqual(clone.size, 50, 'Clone size is greater than 50');
    });
    t.end();
}

const testCloneCostumeIndex = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const ball = t.getSprite('Ball');
    await t.runForTime(5000);
    const clones = ball.getClones();
    clones.forEach(clone => {
        t.assert.greaterOrEqual(clone.currentCostume, 1, 'Clone costume index is less than 1');
        t.assert.lessOrEqual(clone.currentCostume, 3, 'Clone costume index is greater than 3');
    });
    t.end();
}

const testCloneStartCoordinates = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const ball = t.getSprite('Ball');
    await t.runForTime(5000);
    const clones = ball.getClones();
    clones.forEach(clone => {
        t.assert.equal(clone.x, 160, 'Clone x coordinate is not 160');
        t.assert.equal(clone.y, 160, 'Clone y coordinate is not 160');
    });
    t.end();
}

const testCloneVisibility = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const ball = t.getSprite('Ball');
    await t.runForTime(5000);
    const clones = ball.getClones();
    clones.forEach(clone => {
        t.assert.equal(clone.visible, true, 'Clone is not visible');
    });
    t.end();
}

const testCloneMovementSequence = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const ball = t.getSprite('Ball');
    await t.runForTime(5000);
    const clone = ball.getClones()[0];
    const initialX = clone.x;
    const initialY = clone.y;
    await t.runForTime(1000);
    t.assert.equal(clone.y, initialY - 4 * 22, 'Clone did not move correctly in first sequence');
    await t.runForTime(1000);
    t.assert.equal(clone.x, initialX - 2 * 180, 'Clone did not move correctly in second sequence');
    await t.runForTime(1000);
    t.assert.equal(clone.y, initialY - 4 * 30, 'Clone did not move correctly in third sequence');
    await t.runForTime(1000);
    t.assert.equal(clone.x, initialX + 2 * 190, 'Clone did not move correctly in fourth sequence');
    await t.runForTime(1000);
    t.assert.equal(clone.y, initialY - 4 * 30, 'Clone did not move correctly in fifth sequence');
    await t.runForTime(1000);
    t.assert.equal(clone.x, initialX - 2 * 170, 'Clone did not move correctly in sixth sequence');
    t.end();
}

const testCloneDeletion = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const ball = t.getSprite('Ball');
    await t.runForTime(5000);
    const clone = ball.getClones()[0];
    await t.runForTime(1000);
    t.assert.equal(clone, undefined, 'Clone was not deleted after movement sequence');
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
		 description: "Jump height set to 10 when space is pressed and Pico walking is touching specific color",
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
		 test: testPicoMoveOnArrowPress,
		 name: "testPicoMoveOnArrowPress",
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
		 test: testPicoSayOnTouchColor,
		 name: "testPicoSayOnTouchColor",
		 description: "Pico walking says ':)' for 2 seconds when touching specific color",
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
		 test: testCloneSize,
		 name: "testCloneSize",
		 description: "Each clone starts with a random size between 30 and 50",
		 categories: []
	},
	{
		 test: testCloneCostumeIndex,
		 name: "testCloneCostumeIndex",
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
		 description: "Each clone follows a specific movement sequence",
		 categories: []
	},
	{
		 test: testCloneDeletion,
		 name: "testCloneDeletion",
		 description: "Clone is deleted after movement sequence",
		 categories: []
	},
]
