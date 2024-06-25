const testGlobalVariableScore = async function (t) {
    t.seedScratch(1234);
    await t.runUntil(() => t.getGlobalVariable('score') === 0, 1000);
    t.assert.equal(t.getGlobalVariable('score'), 0, 'Score should be 0 at the start');
    t.end();
}

const testGlobalVariableTime = async function (t) {
    t.seedScratch(1234);
    await t.runUntil(() => t.getGlobalVariable('time') === 10, 1000);
    t.assert.equal(t.getGlobalVariable('time'), 10, 'Time should be 10 at the start');
    t.end();
}

const testTimeReduction = async function (t) {
    t.seedScratch(1234);
    let previousTime = t.getGlobalVariable('time');
    while (previousTime > 0) {
        await t.runForTime(1000);
        let currentTime = t.getGlobalVariable('time');
        t.assert.equal(currentTime, previousTime - 1, 'Time should be reduced by 1 every second');
        previousTime = currentTime;
    }
    t.end();
}

const testGhostInvisibilityOnClick = async function (t) {
    t.seedScratch(1234);
    const ghost = await t.getSprite('Ghost');
    await t.runForTime(1000);
    t.clickSprite('Ghost');
    await t.runForTime(100);
    t.assert.not(ghost.visible, 'Ghost should become invisible when clicked');
    t.end();
}

const testScoreIncreaseOnGhostClick = async function (t) {
    t.seedScratch(1234);
    await t.runForTime(1000);
    const initialScore = t.getGlobalVariable('score');
    t.clickSprite('Ghost');
    await t.runForTime(100);
    t.assert.equal(t.getGlobalVariable('score'), initialScore + 1, 'Score should increase by 1 when Ghost is clicked');
    t.end();
}

const testGhostRandomSize = async function (t) {
    t.seedScratch(1234);
    const ghost = await t.getSprite('Ghost');
    await t.runForTime(1000);
    t.assert.greaterOrEqual(ghost.size, 50, 'Ghost size should be at least 50');
    t.assert.lessOrEqual(ghost.size, 200, 'Ghost size should be at most 200');
    t.end();
}

const testGhostStartsInvisible = async function (t) {
    t.seedScratch(1234);
    const ghost = await t.getSprite('Ghost');
    await t.runForTime(1000);
    t.assert.not(ghost.visible, 'Ghost should start invisible');
    t.end();
}

const testGhostVisibleAfter1Second = async function (t) {
    t.seedScratch(1234);
    const ghost = await t.getSprite('Ghost');
    await t.runForTime(1000);
    t.assert.ok(ghost.visible, 'Ghost should be visible after 1 second');
    t.assert.greaterOrEqual(ghost.x, -240, 'Ghost should be within stage bounds');
    t.assert.lessOrEqual(ghost.x, 240, 'Ghost should be within stage bounds');
    t.assert.greaterOrEqual(ghost.y, -180, 'Ghost should be within stage bounds');
    t.assert.lessOrEqual(ghost.y, 180, 'Ghost should be within stage bounds');
    t.end();
}

const testGhostVisibleDuration = async function (t) {
    t.seedScratch(1234);
    const ghost = await t.getSprite('Ghost');
    await t.runForTime(1000);
    t.assert.ok(ghost.visible, 'Ghost should be visible after 1 second');
    await t.runForTime(1000);
    t.assert.ok(ghost.visible, 'Ghost should still be visible after 2 seconds');
    await t.runForTime(1000);
    t.assert.not(ghost.visible, 'Ghost should not be visible after 3 seconds');
    t.end();
}

const testBatAndGhost3Behavior = async function (t) {
    t.seedScratch(1234);
    const bat = await t.getSprite('Bat');
    const ghost3 = await t.getSprite('Ghost3');
    await t.runForTime(1000);
    t.assert.not(bat.visible, 'Bat should start invisible');
    t.assert.not(ghost3.visible, 'Ghost3 should start invisible');
    await t.runForTime(1000);
    t.assert.ok(bat.visible, 'Bat should be visible after 1 second');
    t.assert.ok(ghost3.visible, 'Ghost3 should be visible after 1 second');
    await t.runForTime(1000);
    t.assert.ok(bat.visible, 'Bat should still be visible after 2 seconds');
    t.assert.ok(ghost3.visible, 'Ghost3 should still be visible after 2 seconds');
    await t.runForTime(1000);
    t.assert.not(bat.visible, 'Bat should not be visible after 3 seconds');
    t.assert.not(ghost3.visible, 'Ghost3 should not be visible after 3 seconds');
    t.end();
}

module.exports = [
	{
		 test: testGlobalVariableScore,
		 name: "testGlobalVariableScore",
		 description: "Global variable score is 0 at the start",
		 categories: []
	},
	{
		 test: testGlobalVariableTime,
		 name: "testGlobalVariableTime",
		 description: "Global variable time is 10 at the start",
		 categories: []
	},
	{
		 test: testTimeReduction,
		 name: "testTimeReduction",
		 description: "Time is reduced by 1 every second until it reaches 0",
		 categories: []
	},
	{
		 test: testGhostInvisibilityOnClick,
		 name: "testGhostInvisibilityOnClick",
		 description: "Ghost becomes invisible when clicked",
		 categories: []
	},
	{
		 test: testScoreIncreaseOnGhostClick,
		 name: "testScoreIncreaseOnGhostClick",
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
		 test: testGhostVisibleDuration,
		 name: "testGhostVisibleDuration",
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
