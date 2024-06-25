const testGlobalVariableScoreStartsAt0 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('score') === 0, 1000);
    t.assert.strictEqual(t.getGlobalVariable('score'), 0, 'Score should start at 0');
    t.end();
}

const testGlobalVariableTimeStartsAt10 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('time') === 10, 1000);
    t.assert.strictEqual(t.getGlobalVariable('time'), 10, 'Time should start at 10');
    t.end();
}

const testTimeReduction = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    let initialTime = t.getGlobalVariable('time');
    for (let i = 0; i < initialTime; i++) {
        await t.runForTime(1000);
        t.assert.strictEqual(t.getGlobalVariable('time'), initialTime - i - 1, 'Time should be reduced by 1 every second');
    }
    t.assert.strictEqual(t.getGlobalVariable('time'), 0, 'Time should be 0 after countdown');
    t.end();
}

const testGhostBecomesInvisibleWhenClicked = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    let ghost = t.getSprite('Ghost');
    t.clickSprite('Ghost');
    await t.runForTime(100);
    t.assert.strictEqual(ghost.visible, false, 'Ghost should become invisible when clicked');
    t.end();
}

const testScoreIncreasedWhenGhostClicked = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    let initialScore = t.getGlobalVariable('score');
    t.clickSprite('Ghost');
    await t.runForTime(100);
    t.assert.strictEqual(t.getGlobalVariable('score'), initialScore + 1, 'Score should increase by 1 when Ghost is clicked');
    t.end();
}

const testGhostRandomSize = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    let ghost = t.getSprite('Ghost');
    t.assert.greaterOrEqual(ghost.size, 50, 'Ghost size should be at least 50');
    t.assert.lessOrEqual(ghost.size, 200, 'Ghost size should be at most 200');
    t.end();
}

const testGhostStartsInvisible = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    let ghost = t.getSprite('Ghost');
    t.assert.strictEqual(ghost.visible, false, 'Ghost should start invisible');
    t.end();
}

const testGhostVisibleAfter1Second = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    let ghost = t.getSprite('Ghost');
    t.assert.strictEqual(ghost.visible, true, 'Ghost should be visible after 1 second');
    t.assert.ok(ghost.x !== 0 || ghost.y !== 0, 'Ghost should be at a random location');
    t.end();
}

const testGhostVisibleForRandomTime = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    let ghost = t.getSprite('Ghost');
    t.assert.strictEqual(ghost.visible, true, 'Ghost should be visible after 1 second');
    await t.runForTime(1000);
    t.assert.ok(ghost.visible === false || ghost.visible === true, 'Ghost should stay visible for a random amount of time between 1 and 2 seconds');
    t.end();
}

const testBatAndGhost3Behavior = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    let bat = t.getSprite('Bat');
    let ghost3 = t.getSprite('Ghost3');
    t.assert.strictEqual(bat.visible, false, 'Bat should start invisible');
    t.assert.strictEqual(ghost3.visible, false, 'Ghost3 should start invisible');
    await t.runForTime(1000);
    t.assert.strictEqual(bat.visible, true, 'Bat should be visible after 1 second');
    t.assert.strictEqual(ghost3.visible, true, 'Ghost3 should be visible after 1 second');
    t.assert.ok(bat.x !== 0 || bat.y !== 0, 'Bat should be at a random location');
    t.assert.ok(ghost3.x !== 0 || ghost3.y !== 0, 'Ghost3 should be at a random location');
    t.clickSprite('Bat');
    await t.runForTime(100);
    t.assert.strictEqual(bat.visible, false, 'Bat should become invisible when clicked');
    t.clickSprite('Ghost3');
    await t.runForTime(100);
    t.assert.strictEqual(ghost3.visible, false, 'Ghost3 should become invisible when clicked');
    t.end();
}

module.exports = [
	{
		 test: testGlobalVariableScoreStartsAt0,
		 name: "testGlobalVariableScoreStartsAt0",
		 description: "Global variable score starts at 0",
		 categories: []
	},
	{
		 test: testGlobalVariableTimeStartsAt10,
		 name: "testGlobalVariableTimeStartsAt10",
		 description: "Global variable time starts at 10",
		 categories: []
	},
	{
		 test: testTimeReduction,
		 name: "testTimeReduction",
		 description: "Time is reduced by 1 every second until it reaches 0",
		 categories: []
	},
	{
		 test: testGhostBecomesInvisibleWhenClicked,
		 name: "testGhostBecomesInvisibleWhenClicked",
		 description: "Ghost becomes invisible when clicked",
		 categories: []
	},
	{
		 test: testScoreIncreasedWhenGhostClicked,
		 name: "testScoreIncreasedWhenGhostClicked",
		 description: "Score is increased by 1 when Ghost is clicked",
		 categories: []
	},
	{
		 test: testGhostRandomSize,
		 name: "testGhostRandomSize",
		 description: "Ghost has a random size from 50 to 200",
		 categories: []
	},
	{
		 test: testGhostStartsInvisible,
		 name: "testGhostStartsInvisible",
		 description: "Ghost starts invisible",
		 categories: []
	},
	{
		 test: testGhostVisibleAfter1Second,
		 name: "testGhostVisibleAfter1Second",
		 description: "Ghost becomes visible after 1 second and is at a random location",
		 categories: []
	},
	{
		 test: testGhostVisibleForRandomTime,
		 name: "testGhostVisibleForRandomTime",
		 description: "Ghost stays visible for a random amount of time between 1 and 2 seconds",
		 categories: []
	},
	{
		 test: testBatAndGhost3Behavior,
		 name: "testBatAndGhost3Behavior",
		 description: "Bat and Ghost3 have the same behavior as Ghost",
		 categories: []
	},
]
