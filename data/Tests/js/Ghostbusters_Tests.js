const testScoreStart = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('score') === 0, 1000);
    t.assert.equal(t.getGlobalVariable('score'), 0, 'Score should be 0 at the start');
    t.end();
}

const testTimeStart = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('time') === 10, 1000);
    t.assert.equal(t.getGlobalVariable('time'), 10, 'Time should be 10 at the start');
    t.end();
}

const testTimeReduction = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    let initialTime = t.getGlobalVariable('time');
    for (let i = 0; i < initialTime; i++) {
        await t.runForTime(1000);
        t.assert.equal(t.getGlobalVariable('time'), initialTime - i - 1, 'Time should reduce by 1 every second');
    }
    t.end();
}

const testGhostClickInvisible = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ghost');
    await t.runForTime(100);
    const ghost = t.getSprite('Ghost');
    t.assert.not(ghost.visible, 'Ghost should become invisible when clicked');
    t.end();
}

const testGhostClickScore = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    const initialScore = t.getGlobalVariable('score');
    t.clickSprite('Ghost');
    await t.runForTime(100);
    t.assert.equal(t.getGlobalVariable('score'), initialScore + 1, 'Score should increase by 1 when Ghost is clicked');
    t.end();
}

const testGhostSize = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    const ghost = t.getSprite('Ghost');
    t.assert.greaterOrEqual(ghost.size, 50, 'Ghost size should be at least 50');
    t.assert.lessOrEqual(ghost.size, 200, 'Ghost size should be at most 200');
    t.end();
}

const testGhostStartInvisible = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(100);
    const ghost = t.getSprite('Ghost');
    t.assert.not(ghost.visible, 'Ghost should start invisible');
    t.end();
}

const testGhostVisibleAfter1Sec = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    const ghost = t.getSprite('Ghost');
    t.assert.ok(ghost.visible, 'Ghost should be visible after 1 second');
    t.assert.greaterOrEqual(ghost.x, -240, 'Ghost should be within stage bounds');
    t.assert.lessOrEqual(ghost.x, 240, 'Ghost should be within stage bounds');
    t.assert.greaterOrEqual(ghost.y, -180, 'Ghost should be within stage bounds');
    t.assert.lessOrEqual(ghost.y, 180, 'Ghost should be within stage bounds');
    t.end();
}

const testGhostVisibleDuration = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    const ghost = t.getSprite('Ghost');
    t.assert.ok(ghost.visible, 'Ghost should be visible after 1 second');
    await t.runForTime(1000);
    t.assert.ok(ghost.visible, 'Ghost should still be visible after 2 seconds');
    await t.runForTime(1000);
    t.assert.not(ghost.visible, 'Ghost should be invisible after 3 seconds');
    t.end();
}

const testBatAndGhost3Behavior = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    const bat = t.getSprite('Bat');
    const ghost3 = t.getSprite('Ghost3');
    t.assert.ok(bat.visible, 'Bat should be visible after 1 second');
    t.assert.ok(ghost3.visible, 'Ghost3 should be visible after 1 second');
    await t.runForTime(1000);
    t.assert.ok(bat.visible, 'Bat should still be visible after 2 seconds');
    t.assert.ok(ghost3.visible, 'Ghost3 should still be visible after 2 seconds');
    await t.runForTime(1000);
    t.assert.not(bat.visible, 'Bat should be invisible after 3 seconds');
    t.assert.not(ghost3.visible, 'Ghost3 should be invisible after 3 seconds');
    t.end();
}

module.exports = [
	{
		 test: testScoreStart,
		 name: "testScoreStart",
		 description: "At the start the global variable score is 0",
		 categories: []
	},
	{
		 test: testTimeStart,
		 name: "testTimeStart",
		 description: "At the start the global variable time is 10",
		 categories: []
	},
	{
		 test: testTimeReduction,
		 name: "testTimeReduction",
		 description: "Until time is 0, time is reduced by 1 every second",
		 categories: []
	},
	{
		 test: testGhostClickInvisible,
		 name: "testGhostClickInvisible",
		 description: "If Ghost is clicked it becomes invisible",
		 categories: []
	},
	{
		 test: testGhostClickScore,
		 name: "testGhostClickScore",
		 description: "If Ghost is clicked score is increased by 1",
		 categories: []
	},
	{
		 test: testGhostSize,
		 name: "testGhostSize",
		 description: "Ghost has a random size from 50 to 200",
		 categories: []
	},
	{
		 test: testGhostStartInvisible,
		 name: "testGhostStartInvisible",
		 description: "Ghost starts invisible",
		 categories: []
	},
	{
		 test: testGhostVisibleAfter1Sec,
		 name: "testGhostVisibleAfter1Sec",
		 description: "After 1 second Ghost is visible and at a random location in the stage",
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
