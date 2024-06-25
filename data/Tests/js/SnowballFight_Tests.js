const testPowerStart = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('power') === 0, 5000);
    t.assert.equal(t.getGlobalVariable('power'), 0, 'Power should be 0 at the start of a round');
    t.end();
}

const testSnowballCoordinatesStart = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => {
        const snowball = t.getSprite('Snowball');
        return snowball.x === -200 && snowball.y === -130;
    }, 5000);
    const snowball = t.getSprite('Snowball');
    t.assert.equal(snowball.x, -200, 'Snowball x should be -200 at the start of a round');
    t.assert.equal(snowball.y, -130, 'Snowball y should be -130 at the start of a round');
    t.end();
}

const testSnowballDirectionStart = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Snowball').direction === 90, 5000);
    t.assert.equal(t.getSprite('Snowball').direction, 90, 'Snowball direction should be 90 at the start of a round');
    t.end();
}

const testSnowballCostumeStart = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Snowball').getCostumeByName('snowball-aim') !== undefined, 5000);
    t.assert.equal(t.getSprite('Snowball').getCostumeByName('snowball-aim').name, 'snowball-aim', 'Snowball should have costume "snowball-aim" at the start of a round');
    t.end();
}

const testSnowballVisibleStart = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Snowball').visible, 5000);
    t.assert.ok(t.getSprite('Snowball').visible, 'Snowball should be visible at the start of a round');
    t.end();
}

const testSnowballPointsToMouse = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.addConstraint(() => {
        const snowball = t.getSprite('Snowball');
        return snowball.direction === Math.atan2(t.getMousePos().y - snowball.y, t.getMousePos().x - snowball.x) * 180 / Math.PI;
    });
    t.end();
}

const testSnowballDirectionWhileMouseDown = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.mouseDown(true);
    await t.runUntil(() => t.getGlobalVariable('power') >= 20, 10000);
    t.addConstraint(() => {
        const snowball = t.getSprite('Snowball');
        return snowball.direction === Math.atan2(t.getMousePos().y - snowball.y, t.getMousePos().x - snowball.x) * 180 / Math.PI;
    });
    t.end();
}

const testPowerIncreaseWhileMouseDown = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.mouseDown(true);
    const initialPower = t.getGlobalVariable('power');
    await t.runUntil(() => t.getGlobalVariable('power') >= 20, 10000);
    t.assert.equal(t.getGlobalVariable('power'), initialPower + 20, 'Power should increase by 1 while mouse is down and less than 20');
    t.end();
}

const testSnowballCostumeAfterMouseRelease = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.mouseDown(true);
    await t.runUntil(() => t.getGlobalVariable('power') >= 20, 10000);
    t.mouseDown(false);
    await t.runForTime(1000);
    t.assert.equal(t.getSprite('Snowball').getCostumeByName('snowball').name, 'snowball', 'Snowball should switch to costume "snowball" after mouse is released');
    t.end();
}

const testSnowballYChangeUntilEdgeOrRocks = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.mouseDown(true);
    await t.runUntil(() => t.getGlobalVariable('power') >= 20, 10000);
    t.mouseDown(false);
    const snowball = t.getSprite('Snowball');
    const initialY = snowball.y;
    await t.runUntil(() => snowball.isTouchingSprite('Rocks') || snowball.isTouchingEdge(), 10000);
    t.assert.equal(snowball.y, initialY - 5, 'Snowball y coordinate should change by -5 until it touches the edge or Rocks');
    t.end();
}

const testSnowballMovesPowerSteps = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.mouseDown(true);
    await t.runUntil(() => t.getGlobalVariable('power') >= 20, 10000);
    t.mouseDown(false);
    const snowball = t.getSprite('Snowball');
    const initialX = snowball.x;
    const initialY = snowball.y;
    const power = t.getGlobalVariable('power');
    await t.runUntil(() => snowball.isTouchingSprite('Rocks') || snowball.isTouchingEdge(), 10000);
    t.assert.equal(Math.sqrt(Math.pow(snowball.x - initialX, 2) + Math.pow(snowball.y - initialY, 2)), power, 'Snowball should move power steps until it touches the edge or Rocks');
    t.end();
}

const testPowerDecreaseAfterMoving = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.mouseDown(true);
    await t.runUntil(() => t.getGlobalVariable('power') >= 20, 10000);
    t.mouseDown(false);
    const initialPower = t.getGlobalVariable('power');
    await t.runForTime(1000);
    t.assert.equal(t.getGlobalVariable('power'), initialPower - 0.25, 'Power should decrease by 0.25 after moving power steps');
    t.end();
}

const testSnowballInvisibleAfterTouchingEdgeOrRocks = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.mouseDown(true);
    await t.runUntil(() => t.getGlobalVariable('power') >= 20, 10000);
    t.mouseDown(false);
    const snowball = t.getSprite('Snowball');
    await t.runUntil(() => snowball.isTouchingSprite('Rocks') || snowball.isTouchingEdge(), 10000);
    await t.runForTime(1000);
    t.assert.not(snowball.visible, 'Snowball should get invisible after touching the edge or Rocks');
    t.end();
}

const testNewRoundAfterTouchingEdgeOrRocks = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.mouseDown(true);
    await t.runUntil(() => t.getGlobalVariable('power') >= 20, 10000);
    t.mouseDown(false);
    const snowball = t.getSprite('Snowball');
    await t.runUntil(() => snowball.isTouchingSprite('Rocks') || snowball.isTouchingEdge(), 10000);
    await t.runForTime(1000);
    t.assert.equal(t.getGlobalVariable('power'), 0, 'A new round should start after Snowball touches the edge or Rocks');
    t.end();
}

const testReindeerRandomXStart = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => {
        const reindeer = t.getSprite('Reindeer');
        return reindeer.x >= 0 && reindeer.x <= 200;
    }, 5000);
    const reindeer = t.getSprite('Reindeer');
    t.assert.greaterOrEqual(reindeer.x, 0, 'Reindeer x should be greater or equal to 0 at the start of a round');
    t.assert.lessOrEqual(reindeer.x, 200, 'Reindeer x should be less or equal to 200 at the start of a round');
    t.end();
}

const testReindeerSaysYouGotMe = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.mouseDown(true);
    await t.runUntil(() => t.getGlobalVariable('power') >= 20, 10000);
    t.mouseDown(false);
    const snowball = t.getSprite('Snowball');
    const reindeer = t.getSprite('Reindeer');
    await t.runUntil(() => snowball.isTouchingSprite('Reindeer'), 10000);
    await t.runForTime(2000);
    t.assert.equal(reindeer.sayText, 'You got me!', 'Reindeer should say "You got me!" for 2 seconds if Snowball touches it');
    t.end();
}

module.exports = [
	{
		 test: testPowerStart,
		 name: "testPowerStart",
		 description: "At the start of a round the global variable power is 0",
		 categories: []
	},
	{
		 test: testSnowballCoordinatesStart,
		 name: "testSnowballCoordinatesStart",
		 description: "At the start of a round Snowball has coordinates (-200, -130)",
		 categories: []
	},
	{
		 test: testSnowballDirectionStart,
		 name: "testSnowballDirectionStart",
		 description: "At the start of a round Snowball has direction 90",
		 categories: []
	},
	{
		 test: testSnowballCostumeStart,
		 name: "testSnowballCostumeStart",
		 description: "At the start of a round Snowball has costume 'snowball-aim'",
		 categories: []
	},
	{
		 test: testSnowballVisibleStart,
		 name: "testSnowballVisibleStart",
		 description: "At the start of a round Snowball is visible",
		 categories: []
	},
	{
		 test: testSnowballPointsToMouse,
		 name: "testSnowballPointsToMouse",
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
		 description: "While mouse is down and while power is less than 20 power increases by 1",
		 categories: []
	},
	{
		 test: testSnowballCostumeAfterMouseRelease,
		 name: "testSnowballCostumeAfterMouseRelease",
		 description: "After mouse is released Snowball switches to costume 'snowball'",
		 categories: []
	},
	{
		 test: testSnowballYChangeUntilEdgeOrRocks,
		 name: "testSnowballYChangeUntilEdgeOrRocks",
		 description: "Until Snowball touches the edge of the stage or Rocks the y coordinate is changed by -5",
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
		 description: "After moving power steps power is decreased by 0.25",
		 categories: []
	},
	{
		 test: testSnowballInvisibleAfterTouchingEdgeOrRocks,
		 name: "testSnowballInvisibleAfterTouchingEdgeOrRocks",
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
		 test: testReindeerRandomXStart,
		 name: "testReindeerRandomXStart",
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
