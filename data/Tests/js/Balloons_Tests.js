const testGlobalTimeStartsAt10 = async function (t) {
    t.seedScratch(1234);
    await t.runUntil(() => t.getGlobalVariable('time') === 10, 1000);
    t.assert.equal(t.getGlobalVariable('time'), 10, 'Global time variable should start at 10');
    t.end();
}

const testGlobalScoreStartsAt0 = async function (t) {
    t.seedScratch(1234);
    await t.runUntil(() => t.getGlobalVariable('score') === 0, 1000);
    t.assert.equal(t.getGlobalVariable('score'), 0, 'Global score variable should start at 0');
    t.end();
}

const testBalloon1SpriteIsHidden = async function (t) {
    t.seedScratch(1234);
    await t.runUntil(() => t.getSprite('Balloon1').visible === false, 1000);
    t.assert.not(t.getSprite('Balloon1').visible, 'Balloon1 sprite should be hidden');
    t.end();
}

const test30ClonesOfBalloon1AtStart = async function (t) {
    t.seedScratch(1234);
    await t.runUntil(() => t.getSprite('Balloon1').getCloneCount() === 30, 1000);
    t.assert.equal(t.getSprite('Balloon1').getCloneCount(), 30, 'There should be 30 clones of Balloon1 at the start');
    t.end();
}

const testEveryCloneVisibleAtStart = async function (t) {
    t.seedScratch(1234);
    await t.runUntil(() => t.getSprite('Balloon1').getCloneCount() === 30, 1000);
    const clones = t.getSprite('Balloon1').getClones();
    clones.forEach(clone => t.assert.ok(clone.visible, 'Every clone should be visible at the start'));
    t.end();
}

const testEachCloneStartsWithCostumeBalloon1A = async function (t) {
    t.seedScratch(1234);
    await t.runUntil(() => t.getSprite('Balloon1').getCloneCount() === 30, 1000);
    const clones = t.getSprite('Balloon1').getClones();
    clones.forEach(clone => t.assert.equal(clone.getCostumeByIndex(clone.currentCostume).name, 'balloon1-a', 'Each clone should start with costume balloon1-a'));
    t.end();
}

const testClonesStartAtRandomLocation = async function (t) {
    t.seedScratch(1234);
    await t.runUntil(() => t.getSprite('Balloon1').getCloneCount() === 30, 1000);
    const clones = t.getSprite('Balloon1').getClones();
    clones.forEach(clone => {
        t.assert.greaterOrEqual(clone.x, -150, 'Clone x should be >= -150');
        t.assert.lessOrEqual(clone.x, 150, 'Clone x should be <= 150');
        t.assert.greaterOrEqual(clone.y, -150, 'Clone y should be >= -150');
        t.assert.lessOrEqual(clone.y, 150, 'Clone y should be <= 150');
    });
    t.end();
}

const testClonesPointInRandomDirection = async function (t) {
    t.seedScratch(1234);
    await t.runUntil(() => t.getSprite('Balloon1').getCloneCount() === 30, 1000);
    const clones = t.getSprite('Balloon1').getClones();
    clones.forEach(clone => {
        t.assert.greaterOrEqual(clone.direction, -90, 'Clone direction should be >= -90');
        t.assert.lessOrEqual(clone.direction, 180, 'Clone direction should be <= 180');
    });
    t.end();
}

const testClonesApplyRandomColorEffect = async function (t) {
    t.seedScratch(1234);
    await t.runUntil(() => t.getSprite('Balloon1').getCloneCount() === 30, 1000);
    const clones = t.getSprite('Balloon1').getClones();
    clones.forEach(clone => {
        const colorEffect = clone.effects['color'];
        t.assert.greaterOrEqual(colorEffect, 1, 'Clone color effect should be >= 1');
        t.assert.lessOrEqual(colorEffect, 200, 'Clone color effect should be <= 200');
    });
    t.end();
}

const testBalloonCostumeSwitchesToBurstOnClick = async function (t) {
    t.seedScratch(1234);
    await t.runUntil(() => t.getSprite('Balloon1').getCloneCount() === 30, 1000);
    const clone = t.getSprite('Balloon1').getClone(0);
    t.clickClone(clone);
    await t.runForTime(100);
    t.assert.equal(clone.getCostumeByIndex(clone.currentCostume).name, 'burst', 'Balloon costume should switch to burst on click');
    t.end();
}

const testScoreIncreasesByOneOnBalloonClick = async function (t) {
    t.seedScratch(1234);
    await t.runUntil(() => t.getSprite('Balloon1').getCloneCount() === 30, 1000);
    const initialScore = t.getGlobalVariable('score');
    const clone = t.getSprite('Balloon1').getClone(0);
    t.clickClone(clone);
    await t.runForTime(100);
    t.assert.equal(t.getGlobalVariable('score'), initialScore + 1, 'Score should increase by 1 when a balloon is clicked');
    t.end();
}

const testBalloonIsDeletedOnClick = async function (t) {
    t.seedScratch(1234);
    await t.runUntil(() => t.getSprite('Balloon1').getCloneCount() === 30, 1000);
    const clone = t.getSprite('Balloon1').getClone(0);
    t.clickClone(clone);
    await t.runForTime(100);
    t.assert.equal(t.getSprite('Balloon1').getCloneCount(), 29, 'Balloon should be deleted when clicked');
    t.end();
}

const testBalloonChangesDirectionOnEdgeTouch = async function (t) {
    t.seedScratch(1234);
    await t.runUntil(() => t.getSprite('Balloon1').getCloneCount() === 30, 1000);
    const clone = t.getSprite('Balloon1').getClone(0);
    const initialDirection = clone.direction;
    t.dragSprite(clone.name, 240, 0); // Drag to the right edge
    await t.runForTime(100);
    t.assert.notEqual(clone.direction, initialDirection, 'Balloon should change direction when touching the edge');
    t.end();
}

const testTimeDecreasesByOneEverySecond = async function (t) {
    t.seedScratch(1234);
    await t.runUntil(() => t.getGlobalVariable('time') === 10, 1000);
    const initialTime = t.getGlobalVariable('time');
    await t.runForTime(1000);
    t.assert.equal(t.getGlobalVariable('time'), initialTime - 1, 'Time should decrease by 1 every second');
    t.end();
}

const testTimerStopsAtZero = async function (t) {
    t.seedScratch(1234);
    await t.runUntil(() => t.getGlobalVariable('time') === 1, 1000);
    await t.runForTime(1000);
    t.assert.equal(t.getGlobalVariable('time'), 0, 'Time should be 0');
    await t.runForTime(1000);
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
		 test: test30ClonesOfBalloon1AtStart,
		 name: "test30ClonesOfBalloon1AtStart",
		 description: "At the start there are 30 clones of the Balloon1 sprite",
		 categories: []
	},
	{
		 test: testEveryCloneVisibleAtStart,
		 name: "testEveryCloneVisibleAtStart",
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
		 description: "The clones start at a random location with x and y coordinates in the interval [-150, 150]",
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
		 test: testScoreIncreasesByOneOnBalloonClick,
		 name: "testScoreIncreasesByOneOnBalloonClick",
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
