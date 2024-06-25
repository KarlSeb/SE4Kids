const testPowerAtStart = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('power') === 0, 5000);
    t.assert.equal(t.getGlobalVariable('power'), 0, 'Power should be 0 at the start of a round');
    t.end();
}

const testSnowballCoordinatesAtStart = async function (t) {
    t.greenFlag();
    const snowball = await t.runUntil(() => {
        const s = t.getSprite('Snowball');
        return s.x === -200 && s.y === -130;
    }, 5000);
    t.assert.equal(snowball.x, -200, 'Snowball x coordinate should be -200 at the start of a round');
    t.assert.equal(snowball.y, -130, 'Snowball y coordinate should be -130 at the start of a round');
    t.end();
}

const testSnowballDirectionAtStart = async function (t) {
    t.greenFlag();
    const snowball = await t.runUntil(() => t.getSprite('Snowball').direction === 90, 5000);
    t.assert.equal(snowball.direction, 90, 'Snowball direction should be 90 at the start of a round');
    t.end();
}

const testSnowballCostumeAtStart = async function (t) {
    t.greenFlag();
    const snowball = await t.runUntil(() => t.getSprite('Snowball').getCostumeByName('snowball-aim'), 5000);
    t.assert.equal(snowball.getCostumeByName('snowball-aim').name, 'snowball-aim', 'Snowball should have costume "snowball-aim" at the start of a round');
    t.end();
}

const testSnowballVisibilityAtStart = async function (t) {
    t.greenFlag();
    const snowball = await t.runUntil(() => t.getSprite('Snowball').visible, 5000);
    t.assert.ok(snowball.visible, 'Snowball should be visible at the start of a round');
    t.end();
}

const testSnowballPointsTowardsMouse = async function (t) {
    t.greenFlag();
    t.addConstraint(async () => {
        const snowball = t.getSprite('Snowball');
        const mousePos = t.getMousePos();
        t.assert.equal(snowball.direction, Math.atan2(mousePos.y - snowball.y, mousePos.x - snowball.x) * 180 / Math.PI, 'Snowball should point towards the mouse pointer');
    });
    await t.runUntil(() => t.isMouseDown(), 10000);
    t.end();
}

const testSnowballDirectionWhileMouseDown = async function (t) {
    t.greenFlag();
    t.mouseDown(true);
    t.addConstraint(async () => {
        const snowball = t.getSprite('Snowball');
        const mousePos = t.getMousePos();
        const power = t.getGlobalVariable('power');
        if (power < 20) {
            t.assert.equal(snowball.direction, Math.atan2(mousePos.y - snowball.y, mousePos.x - snowball.x) * 180 / Math.PI, 'Snowball should point towards the mouse pointer while power is less than 20');
        }
    });
    await t.runUntil(() => t.getGlobalVariable('power') >= 20, 10000);
    t.mouseDown(false);
    t.end();
}

const testPowerIncreaseWhileMouseDown = async function (t) {
    t.greenFlag();
    t.mouseDown(true);
    let previousPower = t.getGlobalVariable('power');
    t.addConstraint(async () => {
        const currentPower = t.getGlobalVariable('power');
        if (currentPower < 20) {
            t.assert.equal(currentPower, previousPower + 1, 'Power should increase by 1 while mouse is down and power is less than 20');
            previousPower = currentPower;
        }
    });
    await t.runUntil(() => t.getGlobalVariable('power') >= 20, 10000);
    t.mouseDown(false);
    t.end();
}

const testSnowballCostumeAfterMouseRelease = async function (t) {
    t.greenFlag();
    t.mouseDown(true);
    await t.runUntil(() => t.getGlobalVariable('power') >= 20, 10000);
    t.mouseDown(false);
    const snowball = await t.runUntil(() => t.getSprite('Snowball').getCostumeByName('snowball'), 5000);
    t.assert.equal(snowball.getCostumeByName('snowball').name, 'snowball', 'Snowball should switch to costume "snowball" after mouse is released');
    t.end();
}

const testSnowballYCoordinateChange = async function (t) {
    t.greenFlag();
    const snowball = t.getSprite('Snowball');
    let previousY = snowball.y;
    t.addConstraint(async () => {
        if (!snowball.isTouchingSprite('Rocks') && !snowball.isTouchingEdge()) {
            t.assert.equal(snowball.y, previousY - 5, 'Snowball y coordinate should change by -5 until it touches the edge or Rocks');
            previousY = snowball.y;
        }
    });
    await t.runUntil(() => snowball.isTouchingSprite('Rocks') || snowball.isTouchingEdge(), 10000);
    t.end();
}

const testSnowballMovesPowerSteps = async function (t) {
    t.greenFlag();
    const snowball = t.getSprite('Snowball');
    const initialX = snowball.x;
    const initialY = snowball.y;
    const power = t.getGlobalVariable('power');
    await t.runUntil(() => snowball.isTouchingSprite('Rocks') || snowball.isTouchingEdge(), 10000);
    const distanceMoved = Math.sqrt(Math.pow(snowball.x - initialX, 2) + Math.pow(snowball.y - initialY, 2));
    t.assert.equal(distanceMoved, power, 'Snowball should move power steps until it touches the edge or Rocks');
    t.end();
}

const testPowerDecreaseAfterMoving = async function (t) {
    t.greenFlag();
    const initialPower = t.getGlobalVariable('power');
    await t.runUntil(() => t.getGlobalVariable('power') < initialPower, 10000);
    t.assert.equal(t.getGlobalVariable('power'), initialPower - 0.25, 'Power should decrease by 0.25 after moving power steps');
    t.end();
}

const testSnowballInvisibilityAfterTouchingEdgeOrRocks = async function (t) {
    t.greenFlag();
    const snowball = t.getSprite('Snowball');
    await t.runUntil(() => snowball.isTouchingSprite('Rocks') || snowball.isTouchingEdge(), 10000);
    await t.runUntil(() => !snowball.visible, 5000);
    t.assert.not(snowball.visible, 'Snowball should get invisible after touching the edge or Rocks');
    t.end();
}

const testNewRoundAfterTouchingEdgeOrRocks = async function (t) {
    t.greenFlag();
    const initialRound = t.getGlobalVariable('round');
    const snowball = t.getSprite('Snowball');
    await t.runUntil(() => snowball.isTouchingSprite('Rocks') || snowball.isTouchingEdge(), 10000);
    await t.runUntil(() => t.getGlobalVariable('round') > initialRound, 5000);
    t.assert.greater(t.getGlobalVariable('round'), initialRound, 'A new round should start after Snowball touches the edge or Rocks');
    t.end();
}

const testReindeerRandomXCoordinateAtStart = async function (t) {
    t.greenFlag();
    const reindeer = await t.runUntil(() => {
        const r = t.getSprite('Reindeer');
        return r.x >= 0 && r.x <= 200;
    }, 5000);
    t.assert.greaterOrEqual(reindeer.x, 0, 'Reindeer x coordinate should be at least 0 at the start of a round');
    t.assert.lessOrEqual(reindeer.x, 200, 'Reindeer x coordinate should be at most 200 at the start of a round');
    t.end();
}

const testReindeerSaysYouGotMe = async function (t) {
    t.greenFlag();
    const snowball = t.getSprite('Snowball');
    const reindeer = t.getSprite('Reindeer');
    await t.runUntil(() => snowball.isTouchingSprite('Reindeer'), 10000);
    await t.runUntil(() => reindeer.sayText === 'You got me!', 5000);
    t.assert.equal(reindeer.sayText, 'You got me!', 'Reindeer should say "You got me!" for 2 seconds if Snowball touches it');
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
		 test: testSnowballYCoordinateChange,
		 name: "testSnowballYCoordinateChange",
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
		 test: testReindeerRandomXCoordinateAtStart,
		 name: "testReindeerRandomXCoordinateAtStart",
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
