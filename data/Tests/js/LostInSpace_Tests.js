const testRocketshipSize = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Rocketship').size === 100, 5000);
    t.assert.equal(t.getSprite('Rocketship').size, 100, 'Rocketship should have size 100 at start');
    t.end();
}

const testRocketshipDirection = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Rocketship').direction === 0, 5000);
    t.assert.equal(t.getSprite('Rocketship').direction, 0, 'Rocketship should have direction 0 at start');
    t.end();
}

const testRocketshipCoordinates = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Rocketship').x === -150 && t.getSprite('Rocketship').y === -150, 5000);
    t.assert.equal(t.getSprite('Rocketship').x, -150, 'Rocketship should have x coordinate -150 at start');
    t.assert.equal(t.getSprite('Rocketship').y, -150, 'Rocketship should have y coordinate -150 at start');
    t.end();
}

const testRocketshipSay = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Rocketship').sayText === "Let's go!", 5000);
    t.assert.equal(t.getSprite('Rocketship').sayText, "Let's go!", 'Rocketship should say "Let\'s go!"');
    await t.runForTime(2000);
    t.assert.equal(t.getSprite('Rocketship').sayText, '', 'Rocketship should stop saying "Let\'s go!" after 2 seconds');
    t.end();
}

const testRocketshipDirectionToEarth = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(5000);
    const earth = t.getSprite('Earth');
    const rocketship = t.getSprite('Rocketship');
    const expectedDirection = Math.atan2(earth.y - rocketship.y, earth.x - rocketship.x) * 180 / Math.PI;
    t.assert.equal(rocketship.direction, expectedDirection, 'Rocketship should point to Earth');
    t.end();
}

const testRocketshipSequence = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(200 * 3 * 100); // 200 times, 3 actions, 100ms each
    const rocketship = t.getSprite('Rocketship');
    t.assert.equal(rocketship.size, 100 - 200 * 0.3, 'Rocketship size should decrease by 0.3 for 200 times');
    t.assert.equal(rocketship.effects['color'], 200 * 25, 'Rocketship color effect should change by 25 for 200 times');
    t.end();
}

const testMonkeyRotation = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const monkey = t.getSprite('Monkey');
    const initialDirection = monkey.direction;
    await t.runForTime(1000);
    t.assert.equal(monkey.direction, initialDirection + 1, 'Monkey should rotate right by 1 degree');
    t.end();
}

const testStarSizeLoop = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const star = t.getSprite('Star');
    const initialSize = star.size;
    await t.runForTime(20 * 100 + 20 * 100); // 20 times increase, 20 times decrease, 100ms each
    t.assert.equal(star.size, initialSize, 'Star should return to initial size after increasing and decreasing');
    t.end();
}

const testRockDirectionToEarth = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    t.addConstraint(() => {
        const earth = t.getSprite('Earth');
        const rock = t.getSprite('Rock');
        const expectedDirection = Math.atan2(earth.y - rock.y, earth.x - rock.x) * 180 / Math.PI;
        t.assert.equal(rock.direction, expectedDirection, 'Rock should always point to Earth');
    });
    await t.runForTime(5000);
    t.end();
}

const testRockContinuousMove = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const rock = t.getSprite('Rock');
    const initialX = rock.x;
    const initialY = rock.y;
    await t.runForTime(1000);
    t.assert.notEqual(rock.x, initialX, 'Rock should move continuously');
    t.assert.notEqual(rock.y, initialY, 'Rock should move continuously');
    t.end();
}

const testRockChangeDirectionOnEdge = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const rock = t.getSprite('Rock');
    const initialDirection = rock.direction;
    await t.runUntil(() => rock.isTouchingEdge(), 5000);
    t.assert.notEqual(rock.direction, initialDirection, 'Rock should change direction when touching the edge');
    t.end();
}

module.exports = [
	{
		 test: testRocketshipSize,
		 name: "testRocketshipSize",
		 description: "Rocketship has size 100 at start",
		 categories: []
	},
	{
		 test: testRocketshipDirection,
		 name: "testRocketshipDirection",
		 description: "Rocketship has direction 0 at start",
		 categories: []
	},
	{
		 test: testRocketshipCoordinates,
		 name: "testRocketshipCoordinates",
		 description: "Rocketship has coordinates (-150, -150) at start",
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
