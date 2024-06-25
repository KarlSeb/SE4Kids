const testRocketshipSize = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Rocketship').size === 100, 5000);
    t.assert.equal(t.getSprite('Rocketship').size, 100, 'Rocketship should have size 100 at the start');
    t.end();
}

const testRocketshipDirection = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Rocketship').direction === 0, 5000);
    t.assert.equal(t.getSprite('Rocketship').direction, 0, 'Rocketship should have direction 0 at the start');
    t.end();
}

const testRocketshipCoordinates = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Rocketship').x === -150 && t.getSprite('Rocketship').y === -150, 5000);
    t.assert.equal(t.getSprite('Rocketship').x, -150, 'Rocketship should have x coordinate -150 at the start');
    t.assert.equal(t.getSprite('Rocketship').y, -150, 'Rocketship should have y coordinate -150 at the start');
    t.end();
}

const testRocketshipSay = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Rocketship').sayText === "Let's go!", 5000);
    t.assert.equal(t.getSprite('Rocketship').sayText, "Let's go!", 'Rocketship should say "Let\'s go!"');
    await t.runForTime(2000);
    t.assert.equal(t.getSprite('Rocketship').sayText, '', 'Rocketship should stop saying "Let\'s go!" after 2 seconds');
    t.end();
}

const testRocketshipDirectionToEarth = async function (t) {
    t.greenFlag();
    await t.runForTime(5000); // Adjust time as needed to allow Rocketship to point to Earth
    t.assert.equal(t.getSprite('Rocketship').direction, t.getSprite('Earth').direction, 'Rocketship direction should point to Earth');
    t.end();
}

const testRocketshipSequence = async function (t) {
    t.greenFlag();
    await t.runForTime(200 * 3 * 100); // 200 times, 3 actions, assuming each action takes 100ms
    const rocketship = t.getSprite('Rocketship');
    t.assert.equal(rocketship.size, 100 - 200 * 0.3, 'Rocketship size should decrease by 0.3 for 200 times');
    t.assert.equal(rocketship.effects['color'], 200 * 25, 'Rocketship color effect should change by 25 for 200 times');
    t.end();
}

const testMonkeyRotation = async function (t) {
    t.greenFlag();
    const initialDirection = t.getSprite('Monkey').direction;
    await t.runForTime(1000);
    t.assert.notEqual(t.getSprite('Monkey').direction, initialDirection, 'Monkey should rotate right by 1 degree in a continuous loop');
    t.end();
}

const testStarSizeLoop = async function (t) {
    t.greenFlag();
    const star = t.getSprite('Star');
    const initialSize = star.size;
    await t.runForTime(20 * 100); // 20 times increase
    t.assert.equal(star.size, initialSize + 20 * 2, 'Star should increase size by 2 for 20 times');
    await t.runForTime(20 * 100); // 20 times decrease
    t.assert.equal(star.size, initialSize, 'Star should decrease size by 2 for 20 times');
    t.end();
}

const testRockDirectionToEarth = async function (t) {
    t.greenFlag();
    t.addConstraint(() => {
        const rock = t.getSprite('Rock');
        const earth = t.getSprite('Earth');
        t.assert.equal(rock.direction, earth.direction, 'Rock should always have a direction pointing to Earth');
    });
    await t.runForTime(5000);
    t.end();
}

const testRockContinuousMove = async function (t) {
    t.greenFlag();
    const initialX = t.getSprite('Rock').x;
    const initialY = t.getSprite('Rock').y;
    await t.runForTime(1000);
    t.assert.notEqual(t.getSprite('Rock').x, initialX, 'Rock should continuously move by 2 steps');
    t.assert.notEqual(t.getSprite('Rock').y, initialY, 'Rock should continuously move by 2 steps');
    t.end();
}

const testRockChangeDirectionOnEdge = async function (t) {
    t.greenFlag();
    const rock = t.getSprite('Rock');
    const initialDirection = rock.direction;
    await t.runUntil(() => rock.isTouchingEdge(), 5000);
    await t.runForTime(100);
    t.assert.notEqual(rock.direction, initialDirection, 'Rock should change direction when touching the edge of the stage');
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
		 description: "Monkey rotates right by 1 degree in a continuous loop",
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
