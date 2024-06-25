const testTimeStartsAtZero = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('time') === 0, 1000);
    t.assert.equal(t.getGlobalVariable('time'), 0, 'Time variable should start at 0');
    t.end();
}

const testTimeIncreases = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.assert.greater(t.getGlobalVariable('time'), 0, 'Time variable should increase');
    t.end();
}

const testGateDirectionChanges = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const gate = t.getSprite('gate');
    let initialDirection = gate.direction;
    await t.runForTime(1000);
    t.assert.notEqual(gate.direction, initialDirection, 'Gate direction should change');
    t.end();
}

const testBoatStartsWithNormalCostume = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const boat = t.getSprite('boat');
    await t.runUntil(() => boat.getCostumeByName('normal') !== undefined, 1000);
    t.assert.equal(boat.currentCostume, boat.getCostumeByName('normal').index, 'Boat should start with costume normal');
    t.end();
}

const testBoatStartsWithDirectionZero = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const boat = t.getSprite('boat');
    await t.runUntil(() => boat.direction === 0, 1000);
    t.assert.equal(boat.direction, 0, 'Boat should start with direction 0');
    t.end();
}

const testBoatStartsAtCoordinates = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const boat = t.getSprite('boat');
    await t.runUntil(() => boat.x === -190 && boat.y === -150, 1000);
    t.assert.equal(boat.x, -190, 'Boat should start at x coordinate -190');
    t.assert.equal(boat.y, -150, 'Boat should start at y coordinate -150');
    t.end();
}

const testBoatTouchesColorChangesCostume = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const boat = t.getSprite('boat');
    await t.runUntil(() => boat.isTouchingColor([102, 59, 0]), 1000);
    await t.runForTime(100);
    t.assert.equal(boat.currentCostume, boat.getCostumeByName('hit').index, 'Boat costume should change to hit');
    t.end();
}

const testBoatTouchesColorSaysNoooooo = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const boat = t.getSprite('boat');
    await t.runUntil(() => boat.isTouchingColor([102, 59, 0]), 1000);
    await t.runForTime(100);
    t.assert.equal(boat.sayText, 'Noooooo!', 'Boat should say Noooooo!');
    await t.runForTime(1000);
    t.assert.equal(boat.sayText, '', 'Boat should stop saying Noooooo! after 1 second');
    t.end();
}

const testBoatResetsAfterNoooooo = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const boat = t.getSprite('boat');
    await t.runUntil(() => boat.isTouchingColor([102, 59, 0]), 1000);
    await t.runForTime(1100);
    t.assert.equal(boat.x, -190, 'Boat should reset to x coordinate -190');
    t.assert.equal(boat.y, -150, 'Boat should reset to y coordinate -150');
    t.assert.equal(boat.direction, 0, 'Boat should reset to direction 0');
    t.assert.equal(boat.currentCostume, boat.getCostumeByName('normal').index, 'Boat should reset to costume normal');
    t.end();
}

const testBoatMovesOnWhite = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const boat = t.getSprite('boat');
    await t.runUntil(() => boat.isTouchingColor([255, 255, 255]), 1000);
    const initialX = boat.x;
    const initialY = boat.y;
    await t.runForTime(100);
    t.assert.notEqual(boat.x, initialX, 'Boat should move on white color');
    t.assert.notEqual(boat.y, initialY, 'Boat should move on white color');
    t.end();
}

const testBoatStopsOnYellow = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const boat = t.getSprite('boat');
    await t.runUntil(() => boat.isTouchingColor([255, 255, 153]), 1000);
    const initialX = boat.x;
    const initialY = boat.y;
    await t.runForTime(100);
    t.assert.equal(boat.x, initialX, 'Boat should stop moving on yellow color');
    t.assert.equal(boat.y, initialY, 'Boat should stop moving on yellow color');
    t.end();
}

const testBoatSaysYeahOnYellow = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const boat = t.getSprite('boat');
    await t.runUntil(() => boat.isTouchingColor([255, 255, 153]), 1000);
    await t.runForTime(100);
    t.assert.equal(boat.sayText, 'YEAH!', 'Boat should say YEAH!');
    await t.runForTime(1000);
    t.assert.equal(boat.sayText, '', 'Boat should stop saying YEAH! after 1 second');
    t.end();
}

const testProgramEndsOnYellow = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const boat = t.getSprite('boat');
    await t.runUntil(() => boat.isTouchingColor([255, 255, 153]), 1000);
    await t.runForTime(100);
    t.assert.fail('Program should end');
    t.end();
}

const testBoatMovesTowardsMouse = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const boat = t.getSprite('boat');
    await t.runForTime(100);
    const initialX = boat.x;
    const initialY = boat.y;
    t.mouseMove(100, 100, 10);
    await t.runForTime(100);
    t.assert.notEqual(boat.x, initialX, 'Boat should move towards mouse');
    t.assert.notEqual(boat.y, initialY, 'Boat should move towards mouse');
    t.end();
}

const testBoatStopsNearMouse = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const boat = t.getSprite('boat');
    t.mouseMove(boat.x + 4, boat.y + 4, 10);
    await t.runForTime(100);
    const initialX = boat.x;
    const initialY = boat.y;
    await t.runForTime(100);
    t.assert.equal(boat.x, initialX, 'Boat should stop near mouse');
    t.assert.equal(boat.y, initialY, 'Boat should stop near mouse');
    t.end();
}

module.exports = [
	{
		 test: testTimeStartsAtZero,
		 name: "testTimeStartsAtZero",
		 description: "The time variable of the stage starts at 0",
		 categories: []
	},
	{
		 test: testTimeIncreases,
		 name: "testTimeIncreases",
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
		 test: testBoatMovesOnWhite,
		 name: "testBoatMovesOnWhite",
		 description: "If the boat touches the color [255, 255, 255] the boat moves by 3 steps",
		 categories: []
	},
	{
		 test: testBoatStopsOnYellow,
		 name: "testBoatStopsOnYellow",
		 description: "If the boat touches the color [255, 255, 153] the boat stops moving",
		 categories: []
	},
	{
		 test: testBoatSaysYeahOnYellow,
		 name: "testBoatSaysYeahOnYellow",
		 description: "If the boat touches the color [255, 255, 153] the boat says 'YEAH!' for 1 second",
		 categories: []
	},
	{
		 test: testProgramEndsOnYellow,
		 name: "testProgramEndsOnYellow",
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
