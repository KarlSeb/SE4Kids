const testGlobalTimeStartsAt10 = async function (t) {
    t.seedScratch(12345);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('time') === 10, 5000);
    t.assert.equal(t.getGlobalVariable('time'), 10, 'Global time variable should start at 10');
    t.end();
}

const testGlobalScoreStartsAt0 = async function (t) {
    t.seedScratch(12345);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('score') === 0, 5000);
    t.assert.equal(t.getGlobalVariable('score'), 0, 'Global score variable should start at 0');
    t.end();
}

const testBalloon1SpriteIsHidden = async function (t) {
    t.seedScratch(12345);
    t.greenFlag();
    const balloon1 = await t.getSprite('Balloon1');
    await t.runUntil(() => !balloon1.visible, 5000);
    t.assert.not(balloon1.visible, 'Balloon1 sprite should be hidden');
    t.end();
}

const test30ClonesOfBalloon1 = async function (t) {
    t.seedScratch(12345);
    t.greenFlag();
    const balloon1 = await t.getSprite('Balloon1');
    await t.runUntil(() => balloon1.getCloneCount() === 30, 5000);
    t.assert.equal(balloon1.getCloneCount(), 30, 'There should be 30 clones of Balloon1 at the start');
    t.end();
}

const testEveryCloneIsVisibleAtStart = async function (t) {
    t.seedScratch(12345);
    t.greenFlag();
    const balloon1 = await t.getSprite('Balloon1');
    await t.runUntil(() => balloon1.getCloneCount() === 30, 5000);
    const clones = balloon1.getClones();
    clones.forEach(clone => t.assert.ok(clone.visible, 'Every clone should be visible at the start'));
    t.end();
}

const testEachCloneStartsWithCostumeBalloon1A = async function (t) {
    t.seedScratch(12345);
    t.greenFlag();
    const balloon1 = await t.getSprite('Balloon1');
    await t.runUntil(() => balloon1.getCloneCount() === 30, 5000);
    const clones = balloon1.getClones();
    clones.forEach(clone => t.assert.equal(clone.currentCostume, balloon1.getCostumeByName('balloon1-a').index, 'Each clone should start with costume balloon1-a'));
    t.end();
}

const testClonesStartAtRandomLocation = async function (t) {
    t.seedScratch(12345);
    t.greenFlag();
    const balloon1 = await t.getSprite('Balloon1');
    await t.runUntil(() => balloon1.getCloneCount() === 30, 5000);
    const clones = balloon1.getClones();
    clones.forEach(clone => {
        t.assert.greaterOrEqual(clone.x, -150, 'Clone x coordinate should be >= -150');
        t.assert.lessOrEqual(clone.x, 150, 'Clone x coordinate should be <= 150');
        t.assert.greaterOrEqual(clone.y, -150, 'Clone y coordinate should be >= -150');
        t.assert.lessOrEqual(clone.y, 150, 'Clone y coordinate should be <= 150');
    });
    t.end();
}

const testClonesPointInRandomDirection = async function (t) {
    t.seedScratch(12345);
    t.greenFlag();
    const balloon1 = await t.getSprite('Balloon1');
    await t.runUntil(() => balloon1.getCloneCount() === 30, 5000);
    const clones = balloon1.getClones();
    clones.forEach(clone => {
        t.assert.greaterOrEqual(clone.direction, -90, 'Clone direction should be >= -90');
        t.assert.lessOrEqual(clone.direction, 180, 'Clone direction should be <= 180');
    });
    t.end();
}

const testClonesApplyRandomColorEffect = async function (t) {
    t.seedScratch(12345);
    t.greenFlag();
    const balloon1 = await t.getSprite('Balloon1');
    await t.runUntil(() => balloon1.getCloneCount() === 30, 5000);
    const clones = balloon1.getClones();
    clones.forEach(clone => {
        t.assert.greaterOrEqual(clone.effects['color'], 1, 'Clone color effect should be >= 1');
        t.assert.lessOrEqual(clone.effects['color'], 200, 'Clone color effect should be <= 200');
    });
    t.end();
}

const testBalloonCostumeSwitchesToBurstOnClick = async function (t) {
    t.seedScratch(12345);
    t.greenFlag();
    const balloon1 = await t.getSprite('Balloon1');
    await t.runUntil(() => balloon1.getCloneCount() === 30, 5000);
    const clone = balloon1.getClone(0);
    t.clickClone(clone);
    await t.runForTime(1000);
    t.assert.equal(clone.currentCostume, balloon1.getCostumeByName('burst').index, 'Balloon costume should switch to burst on click');
    t.end();
}

const testScoreIncreasesByOneOnClick = async function (t) {
    t.seedScratch(12345);
    t.greenFlag();
    const balloon1 = await t.getSprite('Balloon1');
    await t.runUntil(() => balloon1.getCloneCount() === 30, 5000);
    const initialScore = t.getGlobalVariable('score');
    const clone = balloon1.getClone(0);
    t.clickClone(clone);
    await t.runForTime(1000);
    t.assert.equal(t.getGlobalVariable('score'), initialScore + 1, 'Score should increase by 1 when a balloon is clicked');
    t.end();
}

const testBalloonIsDeletedOnClick = async function (t) {
    t.seedScratch(12345);
    t.greenFlag();
    const balloon1 = await t.getSprite('Balloon1');
    await t.runUntil(() => balloon1.getCloneCount() === 30, 5000);
    const clone = balloon1.getClone(0);
    t.clickClone(clone);
    await t.runForTime(1000);
    t.assert.equal(balloon1.getCloneCount(), 29, 'Balloon should be deleted when clicked');
    t.end();
}

const testBalloonChangesDirectionOnEdgeTouch = async function (t) {
    t.seedScratch(12345);
    t.greenFlag();
    const balloon1 = await t.getSprite('Balloon1');
    await t.runUntil(() => balloon1.getCloneCount() === 30, 5000);
    const clone = balloon1.getClone(0);
    const initialDirection = clone.direction;
    await t.runUntil(() => clone.isTouchingSprite('edge'), 10000);
    await t.runForTime(1000);
    t.assert.notEqual(clone.direction, initialDirection, 'Balloon should change direction when touching the edge');
    t.end();
}

const testTimeDecreasesByOneEverySecond = async function (t) {
    t.seedScratch(12345);
    t.greenFlag();
    const initialTime = t.getGlobalVariable('time');
    await t.runForTime(1000);
    t.assert.equal(t.getGlobalVariable('time'), initialTime - 1, 'Time should decrease by 1 every second');
    t.end();
}

const testTimerStopsAtZero = async function (t) {
    t.seedScratch(12345);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('time') === 0, 30000);
    await t.runForTime(2000);
    t.assert.equal(t.getGlobalVariable('time'), 0, 'Timer should not decrease after reaching 0');
    t.end();
}

module.exports = [
	{
		 test: testGlobalTimeStartsAt10,
		 name: "testGlobalTimeStartsAt10",
		 description: "Global time variable starts at 10",
		 categories: []
	},
	{
		 test: testGlobalScoreStartsAt0,
		 name: "testGlobalScoreStartsAt0",
		 description: "Global score variable starts at 0",
		 categories: []
	},
	{
		 test: testBalloon1SpriteIsHidden,
		 name: "testBalloon1SpriteIsHidden",
		 description: "Balloon1 sprite is hidden",
		 categories: []
	},
	{
		 test: test30ClonesOfBalloon1,
		 name: "test30ClonesOfBalloon1",
		 description: "At the start there are 30 clones of the Balloon1 sprite",
		 categories: []
	},
	{
		 test: testEveryCloneIsVisibleAtStart,
		 name: "testEveryCloneIsVisibleAtStart",
		 description: "Every clone is visible at the start",
		 categories: []
	},
	{
		 test: testEachCloneStartsWithCostumeBalloon1A,
		 name: "testEachCloneStartsWithCostumeBalloon1A",
		 description: "Each clone starts with costume 'balloon1-a'",
		 categories: []
	},
	{
		 test: testClonesStartAtRandomLocation,
		 name: "testClonesStartAtRandomLocation",
		 description: "The clones start at a random location in the with x and y coordinates in the interval [-150, 150]",
		 categories: []
	},
	{
		 test: testClonesPointInRandomDirection,
		 name: "testClonesPointInRandomDirection",
		 description: "Each clone points in a random direction in the interval [-90, 180]",
		 categories: []
	},
	{
		 test: testClonesApplyRandomColorEffect,
		 name: "testClonesApplyRandomColorEffect",
		 description: "Each clone applies a random color effect between 1 and 200",
		 categories: []
	},
	{
		 test: testBalloonCostumeSwitchesToBurstOnClick,
		 name: "testBalloonCostumeSwitchesToBurstOnClick",
		 description: "When a balloon is clicked its costume switches to 'burst'",
		 categories: []
	},
	{
		 test: testScoreIncreasesByOneOnClick,
		 name: "testScoreIncreasesByOneOnClick",
		 description: "When a balloon is clicked 1 is added to the score",
		 categories: []
	},
	{
		 test: testBalloonIsDeletedOnClick,
		 name: "testBalloonIsDeletedOnClick",
		 description: "When a balloon is clicked it is deleted",
		 categories: []
	},
	{
		 test: testBalloonChangesDirectionOnEdgeTouch,
		 name: "testBalloonChangesDirectionOnEdgeTouch",
		 description: "When a balloon touches the edge of the stage the balloon changes direction",
		 categories: []
	},
	{
		 test: testTimeDecreasesByOneEverySecond,
		 name: "testTimeDecreasesByOneEverySecond",
		 description: "Every second the time is decreased by 1",
		 categories: []
	},
	{
		 test: testTimerStopsAtZero,
		 name: "testTimerStopsAtZero",
		 description: "After the time reaches 0 the timer does not decrease any more",
		 categories: []
	},
]
