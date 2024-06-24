const testPowerAtStart = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('power') === 0, 5000);
    t.assert.strictEqual(t.getGlobalVariable('power'), 0, 'Power should be 0 at the start of a round');
    t.end();
}

const testSnowballCoordinatesAtStart = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => {
        const snowball = t.getSprite('Snowball');
        return snowball.x === -200 && snowball.y === -130;
    }, 5000);
    const snowball = t.getSprite('Snowball');
    t.assert.strictEqual(snowball.x, -200, 'Snowball x should be -200 at the start of a round');
    t.assert.strictEqual(snowball.y, -130, 'Snowball y should be -130 at the start of a round');
    t.end();
}

const testSnowballDirectionAtStart = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Snowball').direction === 90, 5000);
    t.assert.strictEqual(t.getSprite('Snowball').direction, 90, 'Snowball direction should be 90 at the start of a round');
    t.end();
}

const testSnowballCostumeAtStart = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Snowball').getCostumeByName('snowball-aim') !== undefined, 5000);
    t.assert.strictEqual(t.getSprite('Snowball').getCostumeByName('snowball-aim').name, 'snowball-aim', 'Snowball should have costume snowball-aim at the start of a round');
    t.end();
}

const testSnowballVisibilityAtStart = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Snowball').visible, 5000);
    t.assert.ok(t.getSprite('Snowball').visible, 'Snowball should be visible at the start of a round');
    t.end();
}

const testSnowballPointsTowardsMouse = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.addConstraint(() => {
        const snowball = t.getSprite('Snowball');
        const mousePos = t.getMousePos();
        const angle = Math.atan2(mousePos.y - snowball.y, mousePos.x - snowball.x) * 180 / Math.PI;
        t.assert.strictEqual(snowball.direction, angle, 'Snowball should point towards the mouse pointer');
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
        const mousePos = t.getMousePos();
        const angle = Math.atan2(mousePos.y - snowball.y, mousePos.x - snowball.x) * 180 / Math.PI;
        t.assert.strictEqual(snowball.direction, angle, 'Snowball should point towards the mouse pointer while mouse is down and power is less than 20');
    });
    t.end();
}

const testPowerIncreaseWhileMouseDown = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.mouseDown(true);
    let initialPower = t.getGlobalVariable('power');
    await t.runUntil(() => t.getGlobalVariable('power') >= 20, 10000);
    t.assert.strictEqual(t.getGlobalVariable('power'), initialPower + 20, 'Power should increase by 1 while mouse is down and power is less than 20');
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
    t.assert.strictEqual(t.getSprite('Snowball').getCostumeByName('snowball').name, 'snowball', 'Snowball should switch to costume snowball after mouse is released');
    t.end();
}

const testSnowballYChangeUntilTouch = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.mouseDown(true);
    await t.runUntil(() => t.getGlobalVariable('power') >= 20, 10000);
    t.mouseDown(false);
    let initialY = t.getSprite('Snowball').y;
    await t.runUntil(() => t.getSprite('Snowball').isTouchingSprite('Rocks') || t.getSprite('Snowball').isTouchingEdge(), 10000);
    t.assert.strictEqual(t.getSprite('Snowball').y, initialY - 5, 'Snowball y coordinate should change by -5 until it touches the edge of the stage or Rocks');
    t.end();
}

const testSnowballMovesPowerSteps = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.mouseDown(true);
    await t.runUntil(() => t.getGlobalVariable('power') >= 20, 10000);
    t.mouseDown(false);
    let initialX = t.getSprite('Snowball').x;
    await t.runUntil(() => t.getSprite('Snowball').isTouchingSprite('Rocks') || t.getSprite('Snowball').isTouchingEdge(), 10000);
    t.assert.strictEqual(t.getSprite('Snowball').x, initialX + t.getGlobalVariable('power'), 'Snowball should move power steps until it touches the edge of the stage or Rocks');
    t.end();
}

const testPowerDecreaseAfterMove = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.mouseDown(true);
    await t.runUntil(() => t.getGlobalVariable('power') >= 20, 10000);
    t.mouseDown(false);
    let initialPower = t.getGlobalVariable('power');
    await t.runUntil(() => t.getSprite('Snowball').isTouchingSprite('Rocks') || t.getSprite('Snowball').isTouchingEdge(), 10000);
    t.assert.strictEqual(t.getGlobalVariable('power'), initialPower - 0.25, 'Power should decrease by 0.25 after moving power steps');
    t.end();
}

const testSnowballInvisibilityAfterTouch = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.mouseDown(true);
    await t.runUntil(() => t.getGlobalVariable('power') >= 20, 10000);
    t.mouseDown(false);
    await t.runUntil(() => t.getSprite('Snowball').isTouchingSprite('Rocks') || t.getSprite('Snowball').isTouchingEdge(), 10000);
    await t.runForTime(1000);
    t.assert.not(t.getSprite('Snowball').visible, 'Snowball should get invisible after touching the edge of the stage or Rocks');
    t.end();
}

const testNewRoundAfterTouch = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.mouseDown(true);
    await t.runUntil(() => t.getGlobalVariable('power') >= 20, 10000);
    t.mouseDown(false);
    await t.runUntil(() => t.getSprite('Snowball').isTouchingSprite('Rocks') || t.getSprite('Snowball').isTouchingEdge(), 10000);
    await t.runForTime(1000);
    t.assert.strictEqual(t.getGlobalVariable('power'), 0, 'A new round should start after Snowball touches the edge of the stage or Rocks');
    t.end();
}

const testReindeerRandomXAtStart = async function (t) {
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
    await t.runUntil(() => t.getSprite('Snowball').isTouchingSprite('Reindeer'), 10000);
    await t.runForTime(2000);
    t.assert.strictEqual(t.getSprite('Reindeer').sayText, 'You got me!', 'Reindeer should say You got me! for 2 seconds if Snowball touches it');
    t.end();
}

module.exports = [
	{
		 test: testPowerAtStart,
		 name: "testPowerAtStart",
		 description: "At the start of a round the global variable power is 0",
		 categories: []
	},
	{
		 test: testSnowballCoordinatesAtStart,
		 name: "testSnowballCoordinatesAtStart",
		 description: "At the start of a round Snowball has coordinates (-200, -130)",
		 categories: []
	},
	{
		 test: testSnowballDirectionAtStart,
		 name: "testSnowballDirectionAtStart",
		 description: "At the start of a round Snowball has direction 90",
		 categories: []
	},
	{
		 test: testSnowballCostumeAtStart,
		 name: "testSnowballCostumeAtStart",
		 description: "At the start of a round Snowball has costume 'snowball-aim'",
		 categories: []
	},
	{
		 test: testSnowballVisibilityAtStart,
		 name: "testSnowballVisibilityAtStart",
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
		 test: testSnowballYChangeUntilTouch,
		 name: "testSnowballYChangeUntilTouch",
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
		 test: testPowerDecreaseAfterMove,
		 name: "testPowerDecreaseAfterMove",
		 description: "After moving power steps power is decreased by 0.25",
		 categories: []
	},
	{
		 test: testSnowballInvisibilityAfterTouch,
		 name: "testSnowballInvisibilityAfterTouch",
		 description: "After Snowball touches the edge of the stage or Rocks it gets invisible",
		 categories: []
	},
	{
		 test: testNewRoundAfterTouch,
		 name: "testNewRoundAfterTouch",
		 description: "After Snowball touches the edge of the stage or Rocks a new round starts",
		 categories: []
	},
	{
		 test: testReindeerRandomXAtStart,
		 name: "testReindeerRandomXAtStart",
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
