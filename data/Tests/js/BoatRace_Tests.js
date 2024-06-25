const testTimeVariableStartsAtZero = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('time') === 0, 1000);
    t.assert.equal(t.getGlobalVariable('time'), 0, 'Time variable should start at 0');
    t.end();
}

const testTimeVariableIncreases = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.assert.greater(t.getGlobalVariable('time'), 0, 'Time variable should increase');
    t.end();
}

const testGateDirectionChanges = async function (t) {
    t.greenFlag();
    const gate = await t.getSprite('gate');
    const initialDirection = gate.direction;
    await t.runForTime(1000);
    t.assert.notEqual(gate.direction, initialDirection, 'Gate direction should change');
    t.end();
}

const testBoatStartsWithNormalCostume = async function (t) {
    t.greenFlag();
    const boat = await t.getSprite('boat');
    await t.runUntil(() => boat.getCostumeByName('normal'), 1000);
    t.assert.equal(boat.currentCostume, boat.getCostumeByName('normal').index, 'Boat should start with costume normal');
    t.end();
}

const testBoatStartsWithDirectionZero = async function (t) {
    t.greenFlag();
    const boat = await t.getSprite('boat');
    await t.runUntil(() => boat.direction === 0, 1000);
    t.assert.equal(boat.direction, 0, 'Boat should start with direction 0');
    t.end();
}

const testBoatStartsAtCoordinates = async function (t) {
    t.greenFlag();
    const boat = await t.getSprite('boat');
    await t.runUntil(() => boat.x === -190 && boat.y === -150, 1000);
    t.assert.equal(boat.x, -190, 'Boat should start at x coordinate -190');
    t.assert.equal(boat.y, -150, 'Boat should start at y coordinate -150');
    t.end();
}

const testBoatTouchesColorChangesCostume = async function (t) {
    t.greenFlag();
    const boat = await t.getSprite('boat');
    await t.runUntil(() => boat.isTouchingColor([102, 59, 0]), 1000);
    await t.runForTime(100);
    t.assert.equal(boat.currentCostume, boat.getCostumeByName('hit').index, 'Boat should change costume to hit when touching color [102, 59, 0]');
    t.end();
}

const testBoatTouchesColorSaysNoooooo = async function (t) {
    t.greenFlag();
    const boat = await t.getSprite('boat');
    await t.runUntil(() => boat.isTouchingColor([102, 59, 0]), 1000);
    await t.runForTime(100);
    t.assert.equal(boat.sayText, 'Noooooo!', 'Boat should say Noooooo! when touching color [102, 59, 0]');
    await t.runForTime(1000);
    t.assert.equal(boat.sayText, '', 'Boat should stop saying Noooooo! after 1 second');
    t.end();
}

const testBoatResetsAfterNoooooo = async function (t) {
    t.greenFlag();
    const boat = await t.getSprite('boat');
    await t.runUntil(() => boat.isTouchingColor([102, 59, 0]), 1000);
    await t.runForTime(1100);
    t.assert.equal(boat.currentCostume, boat.getCostumeByName('normal').index, 'Boat should reset to normal costume');
    t.assert.equal(boat.direction, 0, 'Boat should reset to direction 0');
    t.assert.equal(boat.x, -190, 'Boat should reset to x coordinate -190');
    t.assert.equal(boat.y, -150, 'Boat should reset to y coordinate -150');
    t.end();
}

const testBoatMovesByThreeSteps = async function (t) {
    t.greenFlag();
    const boat = await t.getSprite('boat');
    const initialX = boat.x;
    const initialY = boat.y;
    await t.runUntil(() => boat.isTouchingColor([255, 255, 255]), 1000);
    await t.runForTime(100);
    t.assert.notEqual(boat.x, initialX, 'Boat should move by 3 steps in x direction');
    t.assert.notEqual(boat.y, initialY, 'Boat should move by 3 steps in y direction');
    t.end();
}

const testBoatStopsMoving = async function (t) {
    t.greenFlag();
    const boat = await t.getSprite('boat');
    await t.runUntil(() => boat.isTouchingColor([255, 255, 153]), 1000);
    const initialX = boat.x;
    const initialY = boat.y;
    await t.runForTime(1000);
    t.assert.equal(boat.x, initialX, 'Boat should stop moving in x direction');
    t.assert.equal(boat.y, initialY, 'Boat should stop moving in y direction');
    t.end();
}

const testBoatSaysYeah = async function (t) {
    t.greenFlag();
    const boat = await t.getSprite('boat');
    await t.runUntil(() => boat.isTouchingColor([255, 255, 153]), 1000);
    await t.runForTime(100);
    t.assert.equal(boat.sayText, 'YEAH!', 'Boat should say YEAH! when touching color [255, 255, 153]');
    await t.runForTime(1000);
    t.assert.equal(boat.sayText, '', 'Boat should stop saying YEAH! after 1 second');
    t.end();
}

const testProgramEnds = async function (t) {
    t.greenFlag();
    const boat = await t.getSprite('boat');
    await t.runUntil(() => boat.isTouchingColor([255, 255, 153]), 1000);
    await t.runForTime(100);
    t.assert.fail('Program should end when boat touches color [255, 255, 153]');
    t.end();
}

const testBoatMovesTowardsMouse = async function (t) {
    t.greenFlag();
    const boat = await t.getSprite('boat');
    const initialX = boat.x;
    const initialY = boat.y;
    await t.runUntil(() => Math.sqrt(Math.pow(boat.x - t.getMousePos().x, 2) + Math.pow(boat.y - t.getMousePos().y, 2)) > 5, 1000);
    await t.runForTime(100);
    t.assert.notEqual(boat.x, initialX, 'Boat should move towards mouse in x direction');
    t.assert.notEqual(boat.y, initialY, 'Boat should move towards mouse in y direction');
    t.end();
}

const testBoatStopsNearMouse = async function (t) {
    t.greenFlag();
    const boat = await t.getSprite('boat');
    await t.runUntil(() => Math.sqrt(Math.pow(boat.x - t.getMousePos().x, 2) + Math.pow(boat.y - t.getMousePos().y, 2)) < 5, 1000);
    const initialX = boat.x;
    const initialY = boat.y;
    await t.runForTime(1000);
    t.assert.equal(boat.x, initialX, 'Boat should stop moving in x direction');
    t.assert.equal(boat.y, initialY, 'Boat should stop moving in y direction');
    t.end();
}

module.exports = [
	{
		 test: testTimeVariableStartsAtZero,
		 name: "testTimeVariableStartsAtZero",
		 description: "The time variable of the stage starts at 0",
		 categories: []
	},
	{
		 test: testTimeVariableIncreases,
		 name: "testTimeVariableIncreases",
		 description: "The time variable increases by 0.1 every 0.1 seconds",
		 categories: []
	},
	{
		 test: testGateDirectionChanges,
		 name: "testGateDirectionChanges",
		 description: "The gate direction changes constantly",
		 categories: []
	},
	{
		 test: testBoatStartsWithNormalCostume,
		 name: "testBoatStartsWithNormalCostume",
		 description: "The boat starts with the costume 'normal'",
		 categories: []
	},
	{
		 test: testBoatStartsWithDirectionZero,
		 name: "testBoatStartsWithDirectionZero",
		 description: "The boat starts with the direction 0",
		 categories: []
	},
	{
		 test: testBoatStartsAtCoordinates,
		 name: "testBoatStartsAtCoordinates",
		 description: "The boat starts at coordinates (-190, -150)",
		 categories: []
	},
	{
		 test: testBoatTouchesColorChangesCostume,
		 name: "testBoatTouchesColorChangesCostume",
		 description: "If the boat touches the color [102, 59, 0] the costume changes to 'hit'",
		 categories: []
	},
	{
		 test: testBoatTouchesColorSaysNoooooo,
		 name: "testBoatTouchesColorSaysNoooooo",
		 description: "If the boat touches the color [102, 59, 0] the boat says 'Noooooo!' for 1 second",
		 categories: []
	},
	{
		 test: testBoatResetsAfterNoooooo,
		 name: "testBoatResetsAfterNoooooo",
		 description: "After the boat says 'Noooooo!' for 1 second the boat is reset to starting conditions",
		 categories: []
	},
	{
		 test: testBoatMovesByThreeSteps,
		 name: "testBoatMovesByThreeSteps",
		 description: "If the boat touches the color [255, 255, 255] the boat moves by 3 steps",
		 categories: []
	},
	{
		 test: testBoatStopsMoving,
		 name: "testBoatStopsMoving",
		 description: "If the boat touches the color [255, 255, 153] the boat stops moving",
		 categories: []
	},
	{
		 test: testBoatSaysYeah,
		 name: "testBoatSaysYeah",
		 description: "If the boat touches the color [255, 255, 153] the boat says 'YEAH!' for 1 second",
		 categories: []
	},
	{
		 test: testProgramEnds,
		 name: "testProgramEnds",
		 description: "If the boat touches the color [255, 255, 153] the program ends",
		 categories: []
	},
	{
		 test: testBoatMovesTowardsMouse,
		 name: "testBoatMovesTowardsMouse",
		 description: "If the boat's distance to the mouse pointer is greater than 5 the boat makes 1 step in the direction of the mouse pointer",
		 categories: []
	},
	{
		 test: testBoatStopsNearMouse,
		 name: "testBoatStopsNearMouse",
		 description: "If the boat's distance to the mouse pointer is less than 5 the boat stops moving",
		 categories: []
	},
]
