const testGlobalLives = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('lives') === 3, 1000);
    t.assert.equal(t.getGlobalVariable('lives'), 3, 'Global variable lives should be 3 at the start');
    t.end();
}

const testGlobalScore = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('score') === 0, 1000);
    t.assert.equal(t.getGlobalVariable('score'), 0, 'Global variable score should be 0 at the start');
    t.end();
}

const testLightningStart = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => {
        const lightning = t.getSprite('Lightning');
        return !lightning.visible && lightning.size === 25 && lightning.direction === -90;
    }, 1000);
    const lightning = t.getSprite('Lightning');
    t.assert.not(lightning.visible, 'Lightning should be invisible at the start');
    t.assert.equal(lightning.size, 25, 'Lightning size should be 25 at the start');
    t.assert.equal(lightning.direction, -90, 'Lightning direction should be -90 at the start');
    t.end();
}

const testHippo1Invisible = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => !t.getSprite('Hippo1').visible, 1000);
    t.assert.not(t.getSprite('Hippo1').visible, 'Hippo1 should be invisible at the start');
    t.end();
}

const testBatSize = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Bat').size === 50, 1000);
    t.assert.equal(t.getSprite('Bat').size, 50, 'Bat should have a size of 50 at the start');
    t.end();
}

const testOrangeInvisible = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => !t.getSprite('Orange').visible, 1000);
    t.assert.not(t.getSprite('Orange').visible, 'Orange should be invisible at the start');
    t.end();
}

const testGameOverInvisible = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => !t.getSprite('Game Over').visible, 1000);
    t.assert.not(t.getSprite('Game Over').visible, 'Game Over should be invisible at the start');
    t.end();
}

const testSpaceshipCostume = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Spaceship').getCostumeByName('normal') !== undefined, 1000);
    t.assert.equal(t.getSprite('Spaceship').currentCostume, t.getSprite('Spaceship').getCostumeByName('normal').index, 'Spaceship should have costume normal at the start');
    t.end();
}

const testHippo1CloneIntervals = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    let initialCloneCount = t.getSprite('Hippo1').getCloneCount();
    await t.runForTime(2000);
    let newCloneCount = t.getSprite('Hippo1').getCloneCount();
    t.assert.greaterOrEqual(newCloneCount, initialCloneCount + 1, 'A new clone of Hippo1 should be created in random intervals between 2 and 4 seconds');
    t.end();
}

const testBatMovement = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    let bat = t.getSprite('Bat');
    let initialDirection = bat.direction;
    await t.runForTime(5000);
    t.assert.notEqual(bat.direction, initialDirection, 'Bat should change direction if it hits the edge of the Stage');
    t.end();
}

const testBatCostumeChange = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    let bat = t.getSprite('Bat');
    let initialCostume = bat.currentCostume;
    await t.runForTime(1000);
    t.assert.notEqual(bat.currentCostume, initialCostume, 'Bat should change costumes every time it moves');
    t.end();
}

const testOrangeCloneIntervals = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    let initialCloneCount = t.getSprite('Orange').getCloneCount();
    await t.runForTime(5000);
    let newCloneCount = t.getSprite('Orange').getCloneCount();
    t.assert.greaterOrEqual(newCloneCount, initialCloneCount + 1, 'A new clone of Orange should be created in random intervals between 5 and 10 seconds');
    t.end();
}

const testOrangeClonePosition = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    let bat = t.getSprite('Bat');
    await t.runForTime(5000);
    let orangeClones = t.getSprite('Orange').getClones();
    let lastClone = orangeClones[orangeClones.length - 1];
    t.assert.equal(lastClone.x, bat.x, 'A clone of Orange should start at the current position of Bat');
    t.assert.equal(lastClone.y, bat.y, 'A clone of Orange should start at the current position of Bat');
    t.end();
}

const testOrangeClonesVisible = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(5000);
    let orangeClones = t.getSprite('Orange').getClones();
    for (let clone of orangeClones) {
        t.assert.ok(clone.visible, 'The clones of Orange should be visible');
    }
    t.end();
}

const testOrangeClonesYDecreases = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(5000);
    let orangeClones = t.getSprite('Orange').getClones();
    for (let clone of orangeClones) {
        let initialY = clone.y;
        await t.runForTime(1000);
        t.assert.less(clone.y, initialY, 'The clones of Orange y coordinate should decrease');
    }
    t.end();
}

const testCloneDeleteOnEdge = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Orange').getCloneCount() > 0, 5000);
    let clone = t.getSprite('Orange').getClones()[0];
    await t.runUntil(() => clone.x <= -240 || clone.x >= 240 || clone.y <= -180 || clone.y >= 180, 10000);
    await t.runForTime(100);
    t.assert.equal(t.getSprite('Orange').getCloneCount(), 0, 'Clone should be deleted when touching the edge');
    t.end();
}

const testCloneSpeedRandom = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Hippo1').getCloneCount() > 0, 5000);
    let clone = t.getSprite('Hippo1').getClones()[0];
    let speed = clone.getVariable('speed');
    t.assert.greaterOrEqual(speed, 2, 'Speed should be at least 2');
    t.assert.lessOrEqual(speed, 4, 'Speed should be at most 4');
    t.end();
}

const testCloneStartPosition = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Hippo1').getCloneCount() > 0, 5000);
    let clone = t.getSprite('Hippo1').getClones()[0];
    t.assert.greaterOrEqual(clone.x, -220, 'X coordinate should be at least -220');
    t.assert.lessOrEqual(clone.x, 220, 'X coordinate should be at most 220');
    t.assert.equal(clone.y, 150, 'Y coordinate should be 150');
    t.end();
}

const testCloneVisibility = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Hippo1').getCloneCount() > 0, 5000);
    let clone = t.getSprite('Hippo1').getClones()[0];
    t.assert.ok(clone.visible, 'Clone should be visible');
    t.end();
}

const testCloneMovement = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Hippo1').getCloneCount() > 0, 5000);
    let clone = t.getSprite('Hippo1').getClones()[0];
    let initialX = clone.x;
    let initialY = clone.y;
    let initialDirection = clone.direction;
    await t.runForTime(1000);
    let speed = clone.getVariable('speed');
    let movedDistance = Math.sqrt(Math.pow(clone.x - initialX, 2) + Math.pow(clone.y - initialY, 2));
    t.assert.greaterOrEqual(movedDistance, speed - 1, 'Clone should move approximately [speed] steps');
    t.assert.lessOrEqual(movedDistance, speed + 1, 'Clone should move approximately [speed] steps');
    let directionChange = Math.abs(clone.direction - initialDirection);
    t.assert.greaterOrEqual(directionChange, 0, 'Direction change should be at least 0 degrees');
    t.assert.lessOrEqual(directionChange, 10, 'Direction change should be at most 10 degrees');
    t.end();
}

const testCloneChangeDirectionOnEdge = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Hippo1').getCloneCount() > 0, 5000);
    let clone = t.getSprite('Hippo1').getClones()[0];
    await t.runUntil(() => clone.x <= -240 || clone.x >= 240 || clone.y <= -180 || clone.y >= 180, 10000);
    let initialDirection = clone.direction;
    await t.runForTime(100);
    t.assert.notEqual(clone.direction, initialDirection, 'Clone should change direction when touching the edge');
    t.end();
}

const testCloneTouchLightning = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Hippo1').getCloneCount() > 0 && t.getSprite('Lightning').getCloneCount() > 0, 5000);
    let hippoClone = t.getSprite('Hippo1').getClones()[0];
    let lightningClone = t.getSprite('Lightning').getClones()[0];
    let initialScore = t.getGlobalVariable('score');
    await t.runUntil(() => hippoClone.isTouchingSprite('Lightning'), 10000);
    await t.runForTime(100);
    t.assert.equal(t.getGlobalVariable('score'), initialScore + 10, 'Score should increase by 10');
    t.assert.equal(t.getSprite('Hippo1').getCloneCount(), 0, 'Hippo1 clone should be deleted');
    t.end();
}

const testSpaceshipTouch = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Spaceship').isTouchingSprite('Hippo1') || t.getSprite('Spaceship').isTouchingSprite('Orange'), 10000);
    let initialLives = t.getGlobalVariable('lives');
    await t.runForTime(100);
    t.assert.equal(t.getSprite('Spaceship').currentCostume, t.getSprite('Spaceship').getCostumeByName('hit').index, 'Costume should change to hit');
    await t.runForTime(1000);
    t.assert.equal(t.getGlobalVariable('lives'), initialLives - 1, 'Lives should decrease by 1');
    t.end();
}

const testSpacePressCreatesClone = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    let initialCloneCount = t.getSprite('Lightning').getCloneCount();
    t.keyPress('space');
    await t.runForTime(100);
    t.assert.equal(t.getSprite('Lightning').getCloneCount(), initialCloneCount + 1, 'A new clone of Lightning should be created');
    t.end();
}

const testLeftArrowPress = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    let spaceship = t.getSprite('Spaceship');
    let initialX = spaceship.x;
    t.keyPress('left arrow');
    await t.runForTime(100);
    t.assert.equal(spaceship.x, initialX - 4, 'Spaceship x coordinate should decrease by 4');
    t.end();
}

const testRightArrowPress = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    let spaceship = t.getSprite('Spaceship');
    let initialX = spaceship.x;
    t.keyPress('right arrow');
    await t.runForTime(100);
    t.assert.equal(spaceship.x, initialX + 4, 'Spaceship x coordinate should increase by 4');
    t.end();
}

const testGameOver = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('lives') === 0, 10000);
    await t.runForTime(100);
    t.assert.ok(t.getSprite('Game Over').visible, 'Game Over should be visible');
    t.assert.ok(t.getGlobalVariable('gameEnded'), 'Game should end');
    t.end();
}

const testLightningCloneStartPosition = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    let spaceship = t.getSprite('Spaceship');
    t.keyPress('space');
    await t.runForTime(100);
    let lightningClone = t.getSprite('Lightning').getClones()[0];
    t.assert.equal(lightningClone.x, spaceship.x, 'Lightning clone should start at the spaceship x position');
    t.assert.equal(lightningClone.y, spaceship.y, 'Lightning clone should start at the spaceship y position');
    t.assert.ok(lightningClone.visible, 'Lightning clone should be visible');
    t.end();
}

const testLightningCloneMovement = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Lightning').getCloneCount() > 0, 5000);
    let lightningClone = t.getSprite('Lightning').getClones()[0];
    let initialY = lightningClone.y;
    await t.runForTime(1000);
    t.assert.equal(lightningClone.y, initialY + 10, 'Lightning clone y coordinate should increase by 10');
    t.end();
}

const testLightningCloneDeleteOnEdge = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Lightning').getCloneCount() > 0, 5000);
    let lightningClone = t.getSprite('Lightning').getClones()[0];
    await t.runUntil(() => lightningClone.y >= 180, 10000);
    await t.runForTime(100);
    t.assert.equal(t.getSprite('Lightning').getCloneCount(), 0, 'Lightning clone should be deleted when touching the edge');
    t.end();
}

module.exports = [
	{
		 test: testGlobalLives,
		 name: "testGlobalLives",
		 description: "Global variable lives is set to 3 at the start",
		 categories: []
	},
	{
		 test: testGlobalScore,
		 name: "testGlobalScore",
		 description: "Global variable score is set to 0 at the start",
		 categories: []
	},
	{
		 test: testLightningStart,
		 name: "testLightningStart",
		 description: "Lightning is invisible, size 25, direction -90 at the start",
		 categories: []
	},
	{
		 test: testHippo1Invisible,
		 name: "testHippo1Invisible",
		 description: "Hippo1 is invisible at the start",
		 categories: []
	},
	{
		 test: testBatSize,
		 name: "testBatSize",
		 description: "Bat has a size of 50 at the start",
		 categories: []
	},
	{
		 test: testOrangeInvisible,
		 name: "testOrangeInvisible",
		 description: "Orange is invisible at the start",
		 categories: []
	},
	{
		 test: testGameOverInvisible,
		 name: "testGameOverInvisible",
		 description: "Game Over is invisible at the start",
		 categories: []
	},
	{
		 test: testSpaceshipCostume,
		 name: "testSpaceshipCostume",
		 description: "Spaceship has costume 'normal' at the start",
		 categories: []
	},
	{
		 test: testHippo1CloneIntervals,
		 name: "testHippo1CloneIntervals",
		 description: "New clone of Hippo1 is created in random intervals between 2 and 4 seconds",
		 categories: []
	},
	{
		 test: testBatMovement,
		 name: "testBatMovement",
		 description: "Bat moves along x axis and changes direction if it hits the edge of the Stage",
		 categories: []
	},
	{
		 test: testBatCostumeChange,
		 name: "testBatCostumeChange",
		 description: "Bat changes costumes every time it moves",
		 categories: []
	},
	{
		 test: testOrangeCloneIntervals,
		 name: "testOrangeCloneIntervals",
		 description: "New clone of Orange is created in random intervals between 5 and 10 seconds",
		 categories: []
	},
	{
		 test: testOrangeClonePosition,
		 name: "testOrangeClonePosition",
		 description: "A clone of Orange starts at the current position of Bat",
		 categories: []
	},
	{
		 test: testOrangeClonesVisible,
		 name: "testOrangeClonesVisible",
		 description: "The clones of Orange are visible",
		 categories: []
	},
	{
		 test: testOrangeClonesYDecreases,
		 name: "testOrangeClonesYDecreases",
		 description: "The clones of Orange y coordinate decreases",
		 categories: []
	},
	{
		 test: testCloneDeleteOnEdge,
		 name: "testCloneDeleteOnEdge",
		 description: "When the clone of Orange touches the edge of the stage the clone is deleted",
		 categories: []
	},
	{
		 test: testCloneSpeedRandom,
		 name: "testCloneSpeedRandom",
		 description: "A clone of Hippo1 sets its variable speed to a random value between 2 and 4",
		 categories: []
	},
	{
		 test: testCloneStartPosition,
		 name: "testCloneStartPosition",
		 description: "A clone of Hippo1 starts at a randomly picked x coordinate between -220 and 220 and at y coordinate 150",
		 categories: []
	},
	{
		 test: testCloneVisibility,
		 name: "testCloneVisibility",
		 description: "Clones of Hippo1 are visible",
		 categories: []
	},
	{
		 test: testCloneMovement,
		 name: "testCloneMovement",
		 description: "Clones of Hippo1 move [speed] steps and turn pick a random amount of degrees to turn between -10 and 10",
		 categories: []
	},
	{
		 test: testCloneChangeDirectionOnEdge,
		 name: "testCloneChangeDirectionOnEdge",
		 description: "If a clone of Hippo1 touches the edges it changes direction",
		 categories: []
	},
	{
		 test: testCloneTouchLightning,
		 name: "testCloneTouchLightning",
		 description: "If a clone of Hippo1 touches Lightning the score is increased by 10 and the clone is deleted",
		 categories: []
	},
	{
		 test: testSpaceshipTouch,
		 name: "testSpaceshipTouch",
		 description: "If Spaceship touches Hippo1 or Orange the costume changes to 'hit' for 1 second and lives is decreased by 1",
		 categories: []
	},
	{
		 test: testSpacePressCreatesClone,
		 name: "testSpacePressCreatesClone",
		 description: "If space is pressed a new clone of Lightning is created",
		 categories: []
	},
	{
		 test: testLeftArrowPress,
		 name: "testLeftArrowPress",
		 description: "If left arrow is pressed the spaceship's x coordinate is decreased by 4",
		 categories: []
	},
	{
		 test: testRightArrowPress,
		 name: "testRightArrowPress",
		 description: "If right arrow is pressed the spaceship's x coordinate is increased by 4",
		 categories: []
	},
	{
		 test: testGameOver,
		 name: "testGameOver",
		 description: "When lives reaches 0 Game Over becomes visible and the game ends",
		 categories: []
	},
	{
		 test: testLightningCloneStartPosition,
		 name: "testLightningCloneStartPosition",
		 description: "A clone of Lightning starts at the current position of Spaceship and is visible",
		 categories: []
	},
	{
		 test: testLightningCloneMovement,
		 name: "testLightningCloneMovement",
		 description: "Clones of Lightning continue to increase their y coordinate by 10",
		 categories: []
	},
	{
		 test: testLightningCloneDeleteOnEdge,
		 name: "testLightningCloneDeleteOnEdge",
		 description: "When a clone of Lightning touches the edge of the stage it gets deleted",
		 categories: []
	},
]
