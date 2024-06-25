const testGlobalVariablePower = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('power') === 0, 5000);
    t.assert.equal(t.getGlobalVariable('power'), 0, 'Global variable power should be 0 at the start of a round');
    t.end();
}

const testSnowballCoordinates = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => {
        const snowball = t.getSprite('Snowball');
        return snowball.x === -200 && snowball.y === -130;
    }, 5000);
    const snowball = t.getSprite('Snowball');
    t.assert.equal(snowball.x, -200, 'Snowball should have x coordinate -200 at the start of a round');
    t.assert.equal(snowball.y, -130, 'Snowball should have y coordinate -130 at the start of a round');
    t.end();
}

const testSnowballDirection = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Snowball').direction === 90, 5000);
    t.assert.equal(t.getSprite('Snowball').direction, 90, 'Snowball should have direction 90 at the start of a round');
    t.end();
}

const testSnowballCostume = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Snowball').getCostumeByName('snowball-aim') !== undefined, 5000);
    t.assert.equal(t.getSprite('Snowball').getCostumeByName('snowball-aim').name, 'snowball-aim', 'Snowball should have costume "snowball-aim" at the start of a round');
    t.end();
}

const testSnowballVisibility = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Snowball').visible, 5000);
    t.assert.ok(t.getSprite('Snowball').visible, 'Snowball should be visible at the start of a round');
    t.end();
}

const testSnowballPointsTowardsMouse = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => !t.isMouseDown(), 5000);
    t.addConstraint(() => {
        const snowball = t.getSprite('Snowball');
        const mousePos = t.getMousePos();
        const angle = Math.atan2(mousePos.y - snowball.y, mousePos.x - snowball.x) * 180 / Math.PI;
        t.assert.equal(snowball.direction, angle, 'Snowball should point towards the mouse pointer until mouse is down');
    });
    t.end();
}

const testSnowballDirectionWhileMouseDown = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    t.mouseDown(true);
    await t.runUntil(() => t.getGlobalVariable('power') >= 20, 5000);
    t.addConstraint(() => {
        const snowball = t.getSprite('Snowball');
        const mousePos = t.getMousePos();
        const angle = Math.atan2(mousePos.y - snowball.y, mousePos.x - snowball.x) * 180 / Math.PI;
        t.assert.equal(snowball.direction, angle, 'Snowball should point towards the mouse pointer while mouse is down and power is less than 20');
    });
    t.end();
}

const testPowerIncreaseWhileMouseDown = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    t.mouseDown(true);
    let previousPower = t.getGlobalVariable('power');
    await t.runUntil(() => t.getGlobalVariable('power') >= 20, 5000);
    t.addConstraint(() => {
        const currentPower = t.getGlobalVariable('power');
        t.assert.equal(currentPower, previousPower + 1, 'Power should increase in steps of 1 while mouse is down and power is less than 20');
        previousPower = currentPower;
    });
    t.end();
}

const testSnowballCostumeAfterMouseRelease = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    t.mouseDown(true);
    await t.runUntil(() => t.getGlobalVariable('power') >= 20, 5000);
    t.mouseDown(false);
    await t.runUntil(() => t.getSprite('Snowball').getCostumeByName('snowball') !== undefined, 5000);
    t.assert.equal(t.getSprite('Snowball').getCostumeByName('snowball').name, 'snowball', 'Snowball should switch to costume "snowball" after mouse is released');
    t.end();
}

const testSnowballYCoordinateChange = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const snowball = t.getSprite('Snowball');
    let previousY = snowball.y;
    t.addConstraint(() => {
        if (!snowball.isTouchingSprite('Rocks') && !snowball.isTouchingEdge()) {
            t.assert.equal(snowball.y, previousY - 5, 'Snowball y coordinate should change in steps of -5 until it touches the edge of the stage or Rocks');
            previousY = snowball.y;
        }
    });
    t.end();
}

const testSnowballMovesPowerSteps = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const snowball = t.getSprite('Snowball');
    const initialX = snowball.x;
    const initialY = snowball.y;
    const power = t.getGlobalVariable('power');
    await t.runUntil(() => snowball.isTouchingSprite('Rocks') || snowball.isTouchingEdge(), 5000);
    const distanceMoved = Math.sqrt(Math.pow(snowball.x - initialX, 2) + Math.pow(snowball.y - initialY, 2));
    t.assert.equal(distanceMoved, power, 'Snowball should move power steps until it touches the edge of the stage or Rocks');
    t.end();
}

const testPowerDecreaseAfterMoving = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const initialPower = t.getGlobalVariable('power');
    await t.runUntil(() => t.getGlobalVariable('power') < initialPower, 5000);
    t.addConstraint(() => {
        const currentPower = t.getGlobalVariable('power');
        t.assert.equal(currentPower, initialPower - 0.25, 'Power should decrease in steps of 0.25 after moving power steps');
    });
    t.end();
}

const testSnowballInvisibilityAfterTouchingEdgeOrRocks = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const snowball = t.getSprite('Snowball');
    await t.runUntil(() => snowball.isTouchingSprite('Rocks') || snowball.isTouchingEdge(), 5000);
    await t.runUntil(() => !snowball.visible, 5000);
    t.assert.not(snowball.visible, 'Snowball should get invisible after touching the edge of the stage or Rocks');
    t.end();
}

const testNewRoundAfterTouchingEdgeOrRocks = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const snowball = t.getSprite('Snowball');
    await t.runUntil(() => snowball.isTouchingSprite('Rocks') || snowball.isTouchingEdge(), 5000);
    await t.runUntil(() => t.getGlobalVariable('power') === 0, 5000);
    t.assert.equal(t.getGlobalVariable('power'), 0, 'A new round should start after Snowball touches the edge of the stage or Rocks');
    t.end();
}

const testReindeerRandomXCoordinate = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => {
        const reindeer = t.getSprite('Reindeer');
        return reindeer.x >= 0 && reindeer.x <= 200;
    }, 5000);
    const reindeer = t.getSprite('Reindeer');
    t.assert.greaterOrEqual(reindeer.x, 0, 'Reindeer x coordinate should be greater or equal to 0 at the start of a round');
    t.assert.lessOrEqual(reindeer.x, 200, 'Reindeer x coordinate should be less or equal to 200 at the start of a round');
    t.end();
}

const testReindeerSaysYouGotMe = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const snowball = t.getSprite('Snowball');
    const reindeer = t.getSprite('Reindeer');
    await t.runUntil(() => snowball.isTouchingSprite('Reindeer'), 5000);
    await t.runUntil(() => reindeer.sayText === 'You got me!', 2000);
    t.assert.equal(reindeer.sayText, 'You got me!', 'Reindeer should say "You got me!" for 2 seconds if Snowball touches it');
    t.end();
}

module.exports = [
	{
		 test: testGlobalVariablePower,
		 name: "testGlobalVariablePower",
		 description: "At the start of a round the global variable power is 0",
		 categories: []
	},
	{
		 test: testSnowballCoordinates,
		 name: "testSnowballCoordinates",
		 description: "At the start of a round Snowball has coordinates (-200, -130)",
		 categories: []
	},
	{
		 test: testSnowballDirection,
		 name: "testSnowballDirection",
		 description: "At the start of a round Snowball has direction 90",
		 categories: []
	},
	{
		 test: testSnowballCostume,
		 name: "testSnowballCostume",
		 description: "At the start of a round Snowball has costume 'snowball-aim'",
		 categories: []
	},
	{
		 test: testSnowballVisibility,
		 name: "testSnowballVisibility",
		 description: "At the start of a round Snowball is visible",
		 categories: []
	},
	{
		 test: testSnowballPointsTowardsMouse,
		 name: "testSnowballPointsTowardsMouse",
		 description: "Until mouse is down Snowball points towards the mouse pointer",
		 categories: []
	},
	{
		 test: testSnowballDirectionWhileMouseDown,
		 name: "testSnowballDirectionWhileMouseDown",
		 description: "While mouse is down and while power is less than 20 the direction of Snowball points towards the mouse pointer",
		 categories: []
	},
	{
		 test: testPowerIncreaseWhileMouseDown,
		 name: "testPowerIncreaseWhileMouseDown",
		 description: "While mouse is down and while power is less than 20 power increases in steps of 1",
		 categories: []
	},
	{
		 test: testSnowballCostumeAfterMouseRelease,
		 name: "testSnowballCostumeAfterMouseRelease",
		 description: "After mouse is released Snowball switches to costume 'snowball'",
		 categories: []
	},
	{
		 test: testSnowballYCoordinateChange,
		 name: "testSnowballYCoordinateChange",
		 description: "Until Snowball touches the edge of the stage or Rocks the y coordinate is changed in steps of -5",
		 categories: []
	},
	{
		 test: testSnowballMovesPowerSteps,
		 name: "testSnowballMovesPowerSteps",
		 description: "Until Snowball touches the edge of the stage or Rocks Snowball moves power steps",
		 categories: []
	},
	{
		 test: testPowerDecreaseAfterMoving,
		 name: "testPowerDecreaseAfterMoving",
		 description: "After moving power steps power is decreased in steps of 0.25",
		 categories: []
	},
	{
		 test: testSnowballInvisibilityAfterTouchingEdgeOrRocks,
		 name: "testSnowballInvisibilityAfterTouchingEdgeOrRocks",
		 description: "After Snowball touches the edge of the stage or Rocks it gets invisible",
		 categories: []
	},
	{
		 test: testNewRoundAfterTouchingEdgeOrRocks,
		 name: "testNewRoundAfterTouchingEdgeOrRocks",
		 description: "After Snowball touches the edge of the stage or Rocks a new round starts",
		 categories: []
	},
	{
		 test: testReindeerRandomXCoordinate,
		 name: "testReindeerRandomXCoordinate",
		 description: "At the start of a round Reindeer goes to a random x coordinate between 0 and 200",
		 categories: []
	},
	{
		 test: testReindeerSaysYouGotMe,
		 name: "testReindeerSaysYouGotMe",
		 description: "If Snowball touches Reindeer, Reindeer says 'You got me!' for 2 seconds",
		 categories: []
	},
]
