const testSunglasses2ColorChange = async function (t) {
    t.seedScratch(1234);
    const sunglasses2 = await t.getSprite('Sunglasses2');
    await t.clickSprite('Sunglasses2');
    await t.runForTime(1000);
    t.assert.equal(sunglasses2.effects['color'], 500, 'Sunglasses2 should change color effect by 5 100 times');
    t.end();
}

const testBowTieTurnRight = async function (t) {
    t.seedScratch(1234);
    const bowTie = await t.getSprite('Bow Tie');
    await t.clickSprite('Bow Tie');
    await t.runForTime(1000);
    t.assert.equal(bowTie.direction, 1080, 'Bow Tie should turn right by 36 degrees 30 times');
    t.end();
}

const testHelicopterCostumeChange = async function (t) {
    t.seedScratch(1234);
    await t.clickSprite('Laptop');
    const helicopter = await t.getSprite('Helicopter');
    const initialCostume = helicopter.currentCostume;
    await t.runForTime(1000);
    t.assert.notEqual(helicopter.currentCostume, initialCostume, 'Helicopter should change costumes repeatedly after Laptop is clicked');
    t.end();
}

const testHelicopterMoveLeft = async function (t) {
    t.seedScratch(1234);
    await t.clickSprite('Laptop');
    const helicopter = await t.getSprite('Helicopter');
    const initialX = helicopter.x;
    await t.keyPress('left arrow');
    await t.runForTime(1000);
    t.assert.equal(helicopter.x, initialX - 2, 'Helicopter x coordinate should change by -2 when left arrow key is pressed after Laptop is clicked');
    t.end();
}

const testHelicopterMoveRight = async function (t) {
    t.seedScratch(1234);
    await t.clickSprite('Laptop');
    const helicopter = await t.getSprite('Helicopter');
    const initialX = helicopter.x;
    await t.keyPress('right arrow');
    await t.runForTime(1000);
    t.assert.equal(helicopter.x, initialX + 2, 'Helicopter x coordinate should change by +2 when right arrow key is pressed after Laptop is clicked');
    t.end();
}

const testHelicopterMoveDown = async function (t) {
    t.seedScratch(1234);
    await t.clickSprite('Laptop');
    const helicopter = await t.getSprite('Helicopter');
    const initialY = helicopter.y;
    await t.keyPress('down arrow');
    await t.runForTime(1000);
    t.assert.equal(helicopter.y, initialY - 2, 'Helicopter y coordinate should change by -2 when down arrow key is pressed after Laptop is clicked');
    t.end();
}

const testHelicopterMoveUp = async function (t) {
    t.seedScratch(1234);
    await t.clickSprite('Laptop');
    const helicopter = await t.getSprite('Helicopter');
    const initialY = helicopter.y;
    await t.keyPress('up arrow');
    await t.runForTime(1000);
    t.assert.equal(helicopter.y, initialY + 2, 'Helicopter y coordinate should change by +2 when up arrow key is pressed after Laptop is clicked');
    t.end();
}

const testHelicopterMoveAndTurn = async function (t) {
    t.seedScratch(1234);
    const helicopter = await t.getSprite('Helicopter');
    const initialX = helicopter.x;
    const initialY = helicopter.y;
    const initialDirection = helicopter.direction;
    await t.keyPress('space');
    await t.runForTime(1000);
    t.assert.notEqual(helicopter.x, initialX, 'Helicopter should move when space is pressed');
    t.assert.notEqual(helicopter.y, initialY, 'Helicopter should move when space is pressed');
    t.assert.notEqual(helicopter.direction, initialDirection, 'Helicopter should turn when space is pressed');
    t.end();
}

module.exports = [
	{
		 test: testSunglasses2ColorChange,
		 name: "testSunglasses2ColorChange",
		 description: "Sunglasses2 changes color effect by 5 100 times when clicked",
		 categories: []
	},
	{
		 test: testBowTieTurnRight,
		 name: "testBowTieTurnRight",
		 description: "Bow Tie turns right by 36 degrees 30 times when clicked",
		 categories: []
	},
	{
		 test: testHelicopterCostumeChange,
		 name: "testHelicopterCostumeChange",
		 description: "Helicopter changes costumes repeatedly after Laptop is clicked",
		 categories: []
	},
	{
		 test: testHelicopterMoveLeft,
		 name: "testHelicopterMoveLeft",
		 description: "Helicopter x coordinate changes by -2 when left arrow key is pressed after Laptop is clicked",
		 categories: []
	},
	{
		 test: testHelicopterMoveRight,
		 name: "testHelicopterMoveRight",
		 description: "Helicopter x coordinate changes by +2 when right arrow key is pressed after Laptop is clicked",
		 categories: []
	},
	{
		 test: testHelicopterMoveDown,
		 name: "testHelicopterMoveDown",
		 description: "Helicopter y coordinate changes by -2 when down arrow key is pressed after Laptop is clicked",
		 categories: []
	},
	{
		 test: testHelicopterMoveUp,
		 name: "testHelicopterMoveUp",
		 description: "Helicopter y coordinate changes by +2 when up arrow key is pressed after Laptop is clicked",
		 categories: []
	},
	{
		 test: testHelicopterMoveAndTurn,
		 name: "testHelicopterMoveAndTurn",
		 description: "Helicopter repeats moving 4 steps and turning 4 degrees left 90 times when space is pressed",
		 categories: []
	},
]
