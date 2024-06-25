const testSunglasses2ColorChange = async function (t) {
    t.seedScratch(1234);
    const sprite = t.getSprite('Sunglasses2');
    for (let i = 0; i < 100; i++) {
        t.clickSprite('Sunglasses2');
        await t.runForTime(100);
    }
    const colorEffect = sprite.effects.get('color');
    t.assert.equal(colorEffect, 500, 'Sunglasses2 should have color effect of 500');
    t.end();
}

const testBowTieTurnRight = async function (t) {
    t.seedScratch(1234);
    const sprite = t.getSprite('Bow Tie');
    for (let i = 0; i < 30; i++) {
        t.clickSprite('Bow Tie');
        await t.runForTime(100);
    }
    const direction = sprite.direction;
    t.assert.equal(direction, 1080, 'Bow Tie should be turned right by 1080 degrees');
    t.end();
}

const testHelicopterCostumeChange = async function (t) {
    t.seedScratch(1234);
    t.clickSprite('Laptop');
    await t.runForTime(1000);
    const helicopter = t.getSprite('Helicopter');
    const initialCostume = helicopter.currentCostume;
    await t.runForTime(1000);
    const newCostume = helicopter.currentCostume;
    t.assert.notEqual(initialCostume, newCostume, 'Helicopter should change costumes repeatedly');
    t.end();
}

const testHelicopterMoveLeft = async function (t) {
    t.seedScratch(1234);
    t.clickSprite('Laptop');
    await t.runForTime(100);
    const helicopter = t.getSprite('Helicopter');
    const initialX = helicopter.x;
    t.keyPress('left arrow');
    await t.runForTime(100);
    const newX = helicopter.x;
    t.assert.equal(newX, initialX - 2, 'Helicopter should move left by 2');
    t.end();
}

const testHelicopterMoveRight = async function (t) {
    t.seedScratch(1234);
    t.clickSprite('Laptop');
    await t.runForTime(100);
    const helicopter = t.getSprite('Helicopter');
    const initialX = helicopter.x;
    t.keyPress('right arrow');
    await t.runForTime(100);
    const newX = helicopter.x;
    t.assert.equal(newX, initialX + 2, 'Helicopter should move right by 2');
    t.end();
}

const testHelicopterMoveDown = async function (t) {
    t.seedScratch(1234);
    t.clickSprite('Laptop');
    await t.runForTime(100);
    const helicopter = t.getSprite('Helicopter');
    const initialY = helicopter.y;
    t.keyPress('down arrow');
    await t.runForTime(100);
    const newY = helicopter.y;
    t.assert.equal(newY, initialY - 2, 'Helicopter should move down by 2');
    t.end();
}

const testHelicopterMoveUp = async function (t) {
    t.seedScratch(1234);
    t.clickSprite('Laptop');
    await t.runForTime(100);
    const helicopter = t.getSprite('Helicopter');
    const initialY = helicopter.y;
    t.keyPress('up arrow');
    await t.runForTime(100);
    const newY = helicopter.y;
    t.assert.equal(newY, initialY + 2, 'Helicopter should move up by 2');
    t.end();
}

const testHelicopterMoveAndTurn = async function (t) {
    t.seedScratch(1234);
    const helicopter = t.getSprite('Helicopter');
    t.keyPress('space');
    await t.runForTime(1000);
    const initialX = helicopter.x;
    const initialY = helicopter.y;
    const initialDirection = helicopter.direction;
    await t.runForTime(1000);
    const newX = helicopter.x;
    const newY = helicopter.y;
    const newDirection = helicopter.direction;
    t.assert.notEqual(initialX, newX, 'Helicopter should move 4 steps');
    t.assert.notEqual(initialY, newY, 'Helicopter should move 4 steps');
    t.assert.equal(newDirection, initialDirection - 360, 'Helicopter should turn 4 degrees left 90 times');
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
		 description: "Helicopter moves left by 2 when left arrow key is pressed after Laptop is clicked",
		 categories: []
	},
	{
		 test: testHelicopterMoveRight,
		 name: "testHelicopterMoveRight",
		 description: "Helicopter moves right by 2 when right arrow key is pressed after Laptop is clicked",
		 categories: []
	},
	{
		 test: testHelicopterMoveDown,
		 name: "testHelicopterMoveDown",
		 description: "Helicopter moves down by 2 when down arrow key is pressed after Laptop is clicked",
		 categories: []
	},
	{
		 test: testHelicopterMoveUp,
		 name: "testHelicopterMoveUp",
		 description: "Helicopter moves up by 2 when up arrow key is pressed after Laptop is clicked",
		 categories: []
	},
	{
		 test: testHelicopterMoveAndTurn,
		 name: "testHelicopterMoveAndTurn",
		 description: "Helicopter moves 4 steps and turns 4 degrees left 90 times when space is pressed",
		 categories: []
	},
]
