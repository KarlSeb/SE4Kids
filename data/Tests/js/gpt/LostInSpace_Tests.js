const testRocketshipSize = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Rocketship').size === 100, 1000);
    t.assert.equal(t.getSprite('Rocketship').size, 100, 'Rocketship should have size 100 at the start');
    t.end();
}

const testRocketshipDirection = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Rocketship').direction === 0, 1000);
    t.assert.equal(t.getSprite('Rocketship').direction, 0, 'Rocketship should have direction 0 at the start');
    t.end();
}

const testRocketshipCoordinates = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Rocketship').x === -150 && t.getSprite('Rocketship').y === -150, 1000);
    t.assert.equal(t.getSprite('Rocketship').x, -150, 'Rocketship should have x coordinate -150 at the start');
    t.assert.equal(t.getSprite('Rocketship').y, -150, 'Rocketship should have y coordinate -150 at the start');
    t.end();
}

const testRocketshipSay = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Rocketship').sayText === "Let's go!", 1000);
    t.assert.equal(t.getSprite('Rocketship').sayText, "Let's go!", 'Rocketship should say "Let\'s go!"');
    await t.runForTime(2000);
    t.assert.equal(t.getSprite('Rocketship').sayText, '', 'Rocketship should stop saying "Let\'s go!" after 2 seconds');
    t.end();
}

const testRocketshipDirectionToEarth = async function (t) {
    t.greenFlag();
    await t.runForTime(3000); // Adjust time as needed to allow Rocketship to point to Earth
    t.assert.equal(t.getSprite('Rocketship').direction, t.getSprite('Earth').direction, 'Rocketship direction should point to Earth');
    t.end();
}

const testRocketshipSequence = async function (t) {
    t.greenFlag();
    for (let i = 0; i < 200; i++) {
        await t.runForTime(100); // Adjust time as needed for each step
        t.assert.equal(t.getSprite('Rocketship').effects['color'], (i + 1) * 25 % 200, 'Rocketship color effect should change by 25');
        t.assert.equal(t.getSprite('Rocketship').size, 100 - (i + 1) * 0.3, 'Rocketship size should decrease by 0.3');
    }
    t.end();
}

const testMonkeyRotation = async function (t) {
    t.greenFlag();
    let initialDirection = t.getSprite('Monkey').direction;
    await t.runForTime(1000);
    t.assert.equal(t.getSprite('Monkey').direction, initialDirection + 1, 'Monkey should rotate right in steps of 1 degree');
    t.end();
}

const testStarSizeLoop = async function (t) {
    t.greenFlag();
    let initialSize = t.getSprite('Star').size;
    for (let i = 0; i < 20; i++) {
        await t.runForTime(100);
        t.assert.equal(t.getSprite('Star').size, initialSize + (i + 1) * 2, 'Star should increase size by 2');
    }
    for (let i = 0; i < 20; i++) {
        await t.runForTime(100);
        t.assert.equal(t.getSprite('Star').size, initialSize + 40 - (i + 1) * 2, 'Star should decrease size by 2');
    }
    t.end();
}

const testRockDirectionToEarth = async function (t) {
    t.greenFlag();
    t.addConstraint(() => {
        t.assert.equal(t.getSprite('Rock').direction, t.getSprite('Earth').direction, 'Rock direction should always point to Earth');
    });
    await t.runForTime(5000);
    t.end();
}

const testRockContinuousMove = async function (t) {
    t.greenFlag();
    let initialX = t.getSprite('Rock').x;
    let initialY = t.getSprite('Rock').y;
    await t.runForTime(1000);
    t.assert.equal(t.getSprite('Rock').x, initialX + 2, 'Rock should move by 2 steps in x direction');
    t.assert.equal(t.getSprite('Rock').y, initialY + 2, 'Rock should move by 2 steps in y direction');
    t.end();
}

const testRockChangeDirectionOnEdge = async function (t) {
    t.greenFlag();
    let initialDirection = t.getSprite('Rock').direction;
    await t.runUntil(() => t.getSprite('Rock').isTouchingEdge(), 5000);
    t.assert.notEqual(t.getSprite('Rock').direction, initialDirection, 'Rock should change direction when touching the edge of the stage');
    t.end();
}

module.exports = [
	{
		 test: testRocketshipSize,
		 name: "testRocketshipSize",
		 description: "Rocketship has size 100 at the start",
		 categories: []
	},
	{
		 test: testRocketshipDirection,
		 name: "testRocketshipDirection",
		 description: "Rocketship has direction 0 at the start",
		 categories: []
	},
	{
		 test: testRocketshipCoordinates,
		 name: "testRocketshipCoordinates",
		 description: "Rocketship has coordinates (-150, -150) at the start",
		 categories: []
	},
	{
		 test: testRocketshipSay,
		 name: "testRocketshipSay",
		 description: "Rocketship says 'Let's go!' for 2 seconds",
		 categories: []
	},
	{
		 test: testRocketshipDirectionToEarth,
		 name: "testRocketshipDirectionToEarth",
		 description: "Rocketship direction points to Earth afterwards",
		 categories: []
	},
	{
		 test: testRocketshipSequence,
		 name: "testRocketshipSequence",
		 description: "Rocketship repeats sequence 200 times",
		 categories: []
	},
	{
		 test: testMonkeyRotation,
		 name: "testMonkeyRotation",
		 description: "Monkey rotates right in steps of 1 degree in a continuous loop",
		 categories: []
	},
	{
		 test: testStarSizeLoop,
		 name: "testStarSizeLoop",
		 description: "Star increases and decreases size in a continuous loop",
		 categories: []
	},
	{
		 test: testRockDirectionToEarth,
		 name: "testRockDirectionToEarth",
		 description: "Rock always has a direction pointing to Earth",
		 categories: []
	},
	{
		 test: testRockContinuousMove,
		 name: "testRockContinuousMove",
		 description: "Rock continuously moves by 2 steps",
		 categories: []
	},
	{
		 test: testRockChangeDirectionOnEdge,
		 name: "testRockChangeDirectionOnEdge",
		 description: "Rock changes direction when touching the edge of the stage",
		 categories: []
	},
]
