const testSunglasses2ColorChange = async function (t) {
    t.seedScratch(1234);
    const sunglasses2 = await t.getSprite('Sunglasses2');
    for (let i = 0; i < 100; i++) {
        await t.clickSprite('Sunglasses2');
    }
    await t.runForTime(1000);
    t.assert.equal(sunglasses2.effects['color'], 500, 'Sunglasses2 should have color effect of 500');
    t.end();
}

const testBowTieTurnRight = async function (t) {
    t.seedScratch(1234);
    const bowTie = await t.getSprite('Bow Tie');
    for (let i = 0; i < 30; i++) {
        await t.clickSprite('Bow Tie');
    }
    await t.runForTime(1000);
    t.assert.equal(bowTie.direction, 1080, 'Bow Tie should have turned right by 1080 degrees');
    t.end();
}

const testHelicopterCostumeChange = async function (t) {
    t.seedScratch(1234);
    await t.clickSprite('Laptop');
    const helicopter = await t.getSprite('Helicopter');
    const initialCostume = helicopter.currentCostume;
    await t.runForTime(2000);
    t.assert.notEqual(helicopter.currentCostume, initialCostume, 'Helicopter should change costumes repeatedly');
    t.end();
}

const testHelicopterMoveLeft = async function (t) {
    t.seedScratch(1234);
    await t.clickSprite('Laptop');
    const helicopter = await t.getSprite('Helicopter');
    const initialX = helicopter.x;
    await t.keyPress('left arrow');
    await t.runForTime(1000);
    t.assert.equal(helicopter.x, initialX - 2, 'Helicopter should move left by 2 units');
    t.end();
}

const testHelicopterMoveRight = async function (t) {
    t.seedScratch(1234);
    await t.clickSprite('Laptop');
    const helicopter = await t.getSprite('Helicopter');
    const initialX = helicopter.x;
    await t.keyPress('right arrow');
    await t.runForTime(1000);
    t.assert.equal(helicopter.x, initialX + 2, 'Helicopter should move right by 2 units');
    t.end();
}

const testHelicopterMoveDown = async function (t) {
    t.seedScratch(1234);
    await t.clickSprite('Laptop');
    const helicopter = await t.getSprite('Helicopter');
    const initialY = helicopter.y;
    await t.keyPress('down arrow');
    await t.runForTime(1000);
    t.assert.equal(helicopter.y, initialY - 2, 'Helicopter should move down by 2 units');
    t.end();
}

const testHelicopterMoveUp = async function (t) {
    t.seedScratch(1234);
    await t.clickSprite('Laptop');
    const helicopter = await t.getSprite('Helicopter');
    const initialY = helicopter.y;
    await t.keyPress('up arrow');
    await t.runForTime(1000);
    t.assert.equal(helicopter.y, initialY + 2, 'Helicopter should move up by 2 units');
    t.end();
}

const testHelicopterMoveAndTurn = async function (t) {
    t.seedScratch(1234);
    const helicopter = await t.getSprite('Helicopter');
    await t.keyPress('space');
    await t.runForTime(5000);
    t.assert.equal(helicopter.direction, -360, 'Helicopter should turn left by 360 degrees');
    t.end();
}

module.exports = [
	{
		 test: testSunglasses2ColorChange,
		 name: "testSunglasses2ColorChange",
		 description: "Sunglasses2 changes color effect by 5 when clicked 100 times",
		 categories: []
	},
	{
		 test: testBowTieTurnRight,
		 name: "testBowTieTurnRight",
		 description: "Bow Tie turns right by 36 degrees when clicked 30 times",
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
		 description: "Helicopter moves left by -2 on left arrow key press after Laptop is clicked",
		 categories: []
	},
	{
		 test: testHelicopterMoveRight,
		 name: "testHelicopterMoveRight",
		 description: "Helicopter moves right by 2 on right arrow key press after Laptop is clicked",
		 categories: []
	},
	{
		 test: testHelicopterMoveDown,
		 name: "testHelicopterMoveDown",
		 description: "Helicopter moves down by -2 on down arrow key press after Laptop is clicked",
		 categories: []
	},
	{
		 test: testHelicopterMoveUp,
		 name: "testHelicopterMoveUp",
		 description: "Helicopter moves up by 2 on up arrow key press after Laptop is clicked",
		 categories: []
	},
	{
		 test: testHelicopterMoveAndTurn,
		 name: "testHelicopterMoveAndTurn",
		 description: "Helicopter moves 4 steps and turns 4 degrees left 90 times when space is pressed",
		 categories: []
	},
]
