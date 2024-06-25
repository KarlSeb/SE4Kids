const testSunglasses2ColorChange = async function (t) {
    t.seedScratch(1234);
    const sprite = t.getSprite('Sunglasses2');
    await t.clickSprite('Sunglasses2');
    await t.runForTime(1000);
    t.assert.equal(sprite.effects['color'], 500, 'Sunglasses2 should change color effect by 5 100 times');
    t.end();
}

const testBowTieTurn = async function (t) {
    t.seedScratch(1234);
    const sprite = t.getSprite('Bow Tie');
    await t.clickSprite('Bow Tie');
    await t.runForTime(1000);
    t.assert.equal(sprite.direction, 1080, 'Bow Tie should turn right by 36 degrees 30 times');
    t.end();
}

const testLaptopClickHelicopterCostumeChange = async function (t) {
    t.seedScratch(1234);
    const laptop = t.getSprite('Laptop');
    const helicopter = t.getSprite('Helicopter');
    await t.clickSprite('Laptop');
    await t.runForTime(1000);
    const initialCostume = helicopter.currentCostume;
    await t.runForTime(1000);
    t.assert.notEqual(helicopter.currentCostume, initialCostume, 'Helicopter should change costumes repeatedly after Laptop is clicked');
    t.end();
}

const testLaptopClickLeftArrowHelicopterMove = async function (t) {
    t.seedScratch(1234);
    const laptop = t.getSprite('Laptop');
    const helicopter = t.getSprite('Helicopter');
    await t.clickSprite('Laptop');
    await t.runForTime(1000);
    const initialX = helicopter.x;
    await t.keyPress('left arrow');
    await t.runForTime(100);
    t.assert.equal(helicopter.x, initialX - 2, 'Helicopter should move left by 2 when left arrow key is pressed after Laptop is clicked');
    t.end();
}

const testLaptopClickRightArrowHelicopterMove = async function (t) {
    t.seedScratch(1234);
    const laptop = t.getSprite('Laptop');
    const helicopter = t.getSprite('Helicopter');
    await t.clickSprite('Laptop');
    await t.runForTime(1000);
    const initialX = helicopter.x;
    await t.keyPress('right arrow');
    await t.runForTime(100);
    t.assert.equal(helicopter.x, initialX + 2, 'Helicopter should move right by 2 when right arrow key is pressed after Laptop is clicked');
    t.end();
}

const testLaptopClickDownArrowHelicopterMove = async function (t) {
    t.seedScratch(1234);
    const laptop = t.getSprite('Laptop');
    const helicopter = t.getSprite('Helicopter');
    await t.clickSprite('Laptop');
    await t.runForTime(1000);
    const initialY = helicopter.y;
    await t.keyPress('down arrow');
    await t.runForTime(100);
    t.assert.equal(helicopter.y, initialY - 2, 'Helicopter should move down by 2 when down arrow key is pressed after Laptop is clicked');
    t.end();
}

const testLaptopClickUpArrowHelicopterMove = async function (t) {
    t.seedScratch(1234);
    const laptop = t.getSprite('Laptop');
    const helicopter = t.getSprite('Helicopter');
    await t.clickSprite('Laptop');
    await t.runForTime(1000);
    const initialY = helicopter.y;
    await t.keyPress('up arrow');
    await t.runForTime(100);
    t.assert.equal(helicopter.y, initialY + 2, 'Helicopter should move up by 2 when up arrow key is pressed after Laptop is clicked');
    t.end();
}

const testSpacePressHelicopterMoveTurn = async function (t) {
    t.seedScratch(1234);
    const helicopter = t.getSprite('Helicopter');
    await t.keyPress('space');
    await t.runForTime(1000);
    t.assert.equal(helicopter.x, 360, 'Helicopter should move 4 steps 90 times when space is pressed');
    t.assert.equal(helicopter.direction, -360, 'Helicopter should turn 4 degrees left 90 times when space is pressed');
    t.end();
}

module.exports = [
	{
		 test: testSunglasses2ColorChange,
		 name: "testSunglasses2ColorChange",
		 description: "When Sunglasses2 is clicked it changes the color effect by 5 100 times",
		 categories: []
	},
	{
		 test: testBowTieTurn,
		 name: "testBowTieTurn",
		 description: "When Bow Tie is clicked it turns right by 36 degrees for 30 times",
		 categories: []
	},
	{
		 test: testLaptopClickHelicopterCostumeChange,
		 name: "testLaptopClickHelicopterCostumeChange",
		 description: "After Laptop was clicked Helicopter changes costumes repeatedly",
		 categories: []
	},
	{
		 test: testLaptopClickLeftArrowHelicopterMove,
		 name: "testLaptopClickLeftArrowHelicopterMove",
		 description: "After Laptop was clicked pressing the left arrow key changes the x coordinate of the Helicopter by -2",
		 categories: []
	},
	{
		 test: testLaptopClickRightArrowHelicopterMove,
		 name: "testLaptopClickRightArrowHelicopterMove",
		 description: "After Laptop was clicked pressing the right arrow key changes the x coordinate of the Helicopter by +2",
		 categories: []
	},
	{
		 test: testLaptopClickDownArrowHelicopterMove,
		 name: "testLaptopClickDownArrowHelicopterMove",
		 description: "After Laptop was clicked pressing the down arrow key changes the y coordinate of the Helicopter by -2",
		 categories: []
	},
	{
		 test: testLaptopClickUpArrowHelicopterMove,
		 name: "testLaptopClickUpArrowHelicopterMove",
		 description: "After Laptop was clicked pressing the up arrow key changes the y coordinate of the Helicopter by +2",
		 categories: []
	},
	{
		 test: testSpacePressHelicopterMoveTurn,
		 name: "testSpacePressHelicopterMoveTurn",
		 description: "When space is pressed the Helicopter repeats moving 4 steps and turning 4 degrees left 90 times",
		 categories: []
	},
]
