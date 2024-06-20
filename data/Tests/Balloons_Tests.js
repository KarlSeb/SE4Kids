const testTimerStartsAt10 = async function (t) {
    await t.runUntil(() => t.getStage().getVariable('timer').value === 10, 5000);
    t.assert.equal(t.getStage().getVariable('timer').value, 10, 'Timer should start at 10');
    t.end();
}

const testScoreStartsAt0 = async function (t) {
    await t.runUntil(() => t.getSprite('Balloon1').getVariable('score').value === 0, 5000);
    t.assert.equal(t.getSprite('Balloon1').getVariable('score').value, 0, 'Score should start at 0');
    t.end();
}

const testBalloon1Hidden = async function (t) {
    await t.runUntil(() => !t.getSprite('Balloon1').visible, 5000);
    t.assert.equal(t.getSprite('Balloon1').visible, false, 'Balloon1 should be hidden');
    t.end();
}

const test30ClonesAtStart = async function (t) {
    await t.runUntil(() => t.getSprite('Balloon1').getCloneCount(true) === 31, 5000);
    t.assert.equal(t.getSprite('Balloon1').getCloneCount(true), 31, 'There should be 30 clones of Balloon1 at the start');
    t.end();
}

const testClonesVisibleAtStart = async function (t) {
    await t.runUntil(() => t.getSprite('Balloon1').getCloneCount(true) === 31, 5000);
    const clones = t.getSprite('Balloon1').getClones(true);
    clones.forEach(clone => t.assert.equal(clone.visible, true, 'Each clone should be visible at the start'));
    t.end();
}

const testClonesStartWithCostume = async function (t) {
    await t.runUntil(() => t.getSprite('Balloon1').getCloneCount(true) === 31, 5000);
    const clones = t.getSprite('Balloon1').getClones(true);
    clones.forEach(clone => t.assert.equal(clone.currentCostume.name, 'balloon1-a', 'Each clone should start with costume balloon1-a'));
    t.end();
}

const testClonesStartAtRandomLocation = async function (t) {
    await t.runUntil(() => t.getSprite('Balloon1').getCloneCount(true) === 31, 5000);
    const clones = t.getSprite('Balloon1').getClones(true);
    clones.forEach(clone => {
        t.assert.greaterOrEqual(clone.x, -150, 'Clone x should be >= -150');
        t.assert.lessOrEqual(clone.x, 150, 'Clone x should be <= 150');
        t.assert.greaterOrEqual(clone.y, -150, 'Clone y should be >= -150');
        t.assert.lessOrEqual(clone.y, 150, 'Clone y should be <= 150');
    });
    t.end();
}

const testClonesPointInRandomDirection = async function (t) {
    await t.runUntil(() => t.getSprite('Balloon1').getCloneCount(true) === 31, 5000);
    const clones = t.getSprite('Balloon1').getClones(true);
    clones.forEach(clone => {
        t.assert.greaterOrEqual(clone.direction, -90, 'Clone direction should be >= -90');
        t.assert.lessOrEqual(clone.direction, 180, 'Clone direction should be <= 180');
    });
    t.end();
}

const testBalloonClickSwitchesCostume = async function (t) {
    await t.runUntil(() => t.getSprite('Balloon1').getCloneCount(true) === 31, 5000);
    const clone = t.getSprite('Balloon1').getClone(1);
    await t.clickClone(clone);
    await t.runForTime(1000);
    t.assert.equal(clone.currentCostume.name, 'burst', 'Balloon costume should switch to burst when clicked');
    t.end();
}

const testBalloonClickAddsToScore = async function (t) {
    await t.runUntil(() => t.getSprite('Balloon1').getCloneCount(true) === 31, 5000);
    const clone = t.getSprite('Balloon1').getClone(1);
    const initialScore = t.getSprite('Balloon1').getVariable('score').value;
    await t.clickClone(clone);
    await t.runForTime(1000);
    t.assert.equal(t.getSprite('Balloon1').getVariable('score').value, initialScore + 1, 'Score should increase by 1 when a balloon is clicked');
    t.end();
}

const testBalloonClickDeletesClone = async function (t) {
    await t.runUntil(() => t.getSprite('Balloon1').getCloneCount(true) === 31, 5000);
    const clone = t.getSprite('Balloon1').getClone(1);
    await t.clickClone(clone);
    await t.runForTime(1000);
    t.assert.equal(clone.exists, false, 'Balloon should be deleted when clicked');
    t.end();
}

const testBalloonTouchesEdgeChangesDirection = async function (t) {
    await t.runUntil(() => t.getSprite('Balloon1').getCloneCount(true) === 31, 5000);
    const clone = t.getSprite('Balloon1').getClone(1);
    const initialDirection = clone.direction;
    await t.dragSprite(clone.name, 240, 0); // Drag to the right edge
    await t.runForTime(1000);
    t.assert.notEqual(clone.direction, initialDirection, 'Balloon should change direction when touching the edge');
    t.end();
}

const testTimerDecreasesEverySecond = async function (t) {
    await t.runUntil(() => t.getStage().getVariable('timer').value === 10, 5000);
    const initialTimer = t.getStage().getVariable('timer').value;
    await t.runForTime(1000);
    t.assert.equal(t.getStage().getVariable('timer').value, initialTimer - 1, 'Timer should decrease by 1 every second');
    t.end();
}

const testTimerStopsAtZero = async function (t) {
    await t.runUntil(() => t.getStage().getVariable('timer').value === 0, 20000);
    const timerAtZero = t.getStage().getVariable('timer').value;
    await t.runForTime(2000);
    t.assert.equal(t.getStage().getVariable('timer').value, timerAtZero, 'Timer should not decrease after reaching 0');
    t.end();
}

module.exports = [
	{
		 test: testTimerStartsAt10,
		 name: "testTimerStartsAt10",
		 description: "Timer variable of the stage starts at 10",
		 categories: []
	},
	{
		 test: testScoreStartsAt0,
		 name: "testScoreStartsAt0",
		 description: "Score variable of the Balloon1 sprite starts at 0",
		 categories: []
	},
	{
		 test: testBalloon1Hidden,
		 name: "testBalloon1Hidden",
		 description: "Balloon1 sprite is hidden",
		 categories: []
	},
	{
		 test: test30ClonesAtStart,
		 name: "test30ClonesAtStart",
		 description: "At the start there are 30 clones of the Balloon1 sprite",
		 categories: []
	},
	{
		 test: testClonesVisibleAtStart,
		 name: "testClonesVisibleAtStart",
		 description: "Every clone is visible at the start",
		 categories: []
	},
	{
		 test: testClonesStartWithCostume,
		 name: "testClonesStartWithCostume",
		 description: "Each clone starts with costume 'balloon1-a'",
		 categories: []
	},
	{
		 test: testClonesStartAtRandomLocation,
		 name: "testClonesStartAtRandomLocation",
		 description: "Clones start at random location with x and y coordinates in the interval [-150, 150]",
		 categories: []
	},
	{
		 test: testClonesPointInRandomDirection,
		 name: "testClonesPointInRandomDirection",
		 description: "Each clone points in a random direction in the interval [-90, 180]",
		 categories: []
	},
	{
		 test: testBalloonClickSwitchesCostume,
		 name: "testBalloonClickSwitchesCostume",
		 description: "When a balloon is clicked its costume switches to 'burst'",
		 categories: []
	},
	{
		 test: testBalloonClickAddsToScore,
		 name: "testBalloonClickAddsToScore",
		 description: "When a balloon is clicked 1 is added to the score",
		 categories: []
	},
	{
		 test: testBalloonClickDeletesClone,
		 name: "testBalloonClickDeletesClone",
		 description: "When a balloon is clicked it is deleted",
		 categories: []
	},
	{
		 test: testBalloonTouchesEdgeChangesDirection,
		 name: "testBalloonTouchesEdgeChangesDirection",
		 description: "When a balloon touches the edge of the stage the balloon changes direction",
		 categories: []
	},
	{
		 test: testTimerDecreasesEverySecond,
		 name: "testTimerDecreasesEverySecond",
		 description: "Every second the timer is decreased by 1",
		 categories: []
	},
	{
		 test: testTimerStopsAtZero,
		 name: "testTimerStopsAtZero",
		 description: "After the timer reaches 0 the timer does not decrease any more",
		 categories: []
	},
]
