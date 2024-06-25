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
    const lightning = t.getSprite('Lightning');
    await t.runUntil(() => !lightning.visible && lightning.size === 25 && lightning.direction === -90, 1000);
    t.assert.not(lightning.visible, 'Lightning should be invisible at the start');
    t.assert.equal(lightning.size, 25, 'Lightning should have size 25 at the start');
    t.assert.equal(lightning.direction, -90, 'Lightning should have direction -90 at the start');
    t.end();
}

const testHippo1Invisible = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const hippo1 = t.getSprite('Hippo1');
    await t.runUntil(() => !hippo1.visible, 1000);
    t.assert.not(hippo1.visible, 'Hippo1 should be invisible at the start');
    t.end();
}

const testBatSize = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const bat = t.getSprite('Bat');
    await t.runUntil(() => bat.size === 50, 1000);
    t.assert.equal(bat.size, 50, 'Bat should have a size of 50 at the start');
    t.end();
}

const testOrangeInvisible = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const orange = t.getSprite('Orange');
    await t.runUntil(() => !orange.visible, 1000);
    t.assert.not(orange.visible, 'Orange should be invisible at the start');
    t.end();
}

const testGameOverInvisible = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const gameOver = t.getSprite('Game Over');
    await t.runUntil(() => !gameOver.visible, 1000);
    t.assert.not(gameOver.visible, 'Game Over should be invisible at the start');
    t.end();
}

const testSpaceshipCostume = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const spaceship = t.getSprite('Spaceship');
    await t.runUntil(() => spaceship.getCostumeByName('normal') === spaceship.getCostumeByIndex(spaceship.currentCostume), 1000);
    t.assert.equal(spaceship.getCostumeByIndex(spaceship.currentCostume).name, 'normal', 'Spaceship should have costume "normal" at the start');
    t.end();
}

const testHippo1CloneIntervals = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const hippo1 = t.getSprite('Hippo1');
    let initialCloneCount = hippo1.getCloneCount();
    await t.runForTime(2000);
    let newCloneCount = hippo1.getCloneCount();
    t.assert.greater(newCloneCount, initialCloneCount, 'A new clone of Hippo1 should be created in random intervals between 2 and 4 seconds');
    t.end();
}

const testBatMovement = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const bat = t.getSprite('Bat');
    let initialDirection = bat.direction;
    await t.runForTime(1000);
    t.assert.notEqual(bat.direction, initialDirection, 'Bat should change direction if it hits the edge of the Stage');
    t.end();
}

const testBatCostumeChange = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const bat = t.getSprite('Bat');
    let initialCostume = bat.currentCostume;
    await t.runForTime(1000);
    t.assert.notEqual(bat.currentCostume, initialCostume, 'Bat should change costumes every time it moves');
    t.end();
}

const testOrangeCloneIntervals = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const orange = t.getSprite('Orange');
    let initialCloneCount = orange.getCloneCount();
    await t.runForTime(5000);
    let newCloneCount = orange.getCloneCount();
    t.assert.greater(newCloneCount, initialCloneCount, 'A new clone of Orange should be created in random intervals between 5 and 10 seconds');
    t.end();
}

const testOrangeClonePosition = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const bat = t.getSprite('Bat');
    const orange = t.getSprite('Orange');
    await t.runForTime(5000);
    const newClone = orange.getNewClones()[0];
    t.assert.equal(newClone.x, bat.x, 'A clone of Orange should start at the current position of Bat');
    t.assert.equal(newClone.y, bat.y, 'A clone of Orange should start at the current position of Bat');
    t.end();
}

const testOrangeClonesVisible = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const orange = t.getSprite('Orange');
    await t.runForTime(5000);
    const newClone = orange.getNewClones()[0];
    t.assert.ok(newClone.visible, 'The clones of Orange should be visible');
    t.end();
}

const testOrangeClonesYDecreases = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const orange = t.getSprite('Orange');
    await t.runForTime(5000);
    const newClone = orange.getNewClones()[0];
    let initialY = newClone.y;
    await t.runForTime(1000);
    t.assert.less(newClone.y, initialY, 'The clones of Orange y coordinate should decrease');
    t.end();
}

const testCloneDeletionOnEdge = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Orange').getCloneCount() > 0, 5000);
    const clone = t.getSprite('Orange').getClones()[0];
    await t.runUntil(() => clone.isTouchingEdge(), 5000);
    await t.runForTime(1000);
    t.assert.equal(t.getSprite('Orange').getCloneCount(), 0, 'Clone should be deleted when touching the edge');
    t.end();
}

const testCloneSpeedVariable = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Hippo1').getCloneCount() > 0, 5000);
    const clone = t.getSprite('Hippo1').getClones()[0];
    const speed = clone.getVariable('speed');
    t.assert.greaterOrEqual(speed, 2, 'Speed should be at least 2');
    t.assert.lessOrEqual(speed, 4, 'Speed should be at most 4');
    t.end();
}

const testCloneStartPosition = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Hippo1').getCloneCount() > 0, 5000);
    const clone = t.getSprite('Hippo1').getClones()[0];
    t.assert.greaterOrEqual(clone.x, -220, 'X coordinate should be at least -220');
    t.assert.lessOrEqual(clone.x, 220, 'X coordinate should be at most 220');
    t.assert.equal(clone.y, 150, 'Y coordinate should be 150');
    t.end();
}

const testCloneVisibility = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Hippo1').getCloneCount() > 0, 5000);
    const clone = t.getSprite('Hippo1').getClones()[0];
    t.assert.ok(clone.visible, 'Clone should be visible');
    t.end();
}

const testCloneMovement = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Hippo1').getCloneCount() > 0, 5000);
    const clone = t.getSprite('Hippo1').getClones()[0];
    const initialX = clone.x;
    const initialY = clone.y;
    const initialDirection = clone.direction;
    await t.runForTime(1000);
    const speed = clone.getVariable('speed');
    const deltaX = clone.x - initialX;
    const deltaY = clone.y - initialY;
    const distanceMoved = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    t.assert.greaterOrEqual(distanceMoved, speed - 1, 'Clone should move at least [speed] steps');
    t.assert.lessOrEqual(distanceMoved, speed + 1, 'Clone should move at most [speed] steps');
    const directionChange = Math.abs(clone.direction - initialDirection);
    t.assert.greaterOrEqual(directionChange, -10, 'Clone should turn at least -10 degrees');
    t.assert.lessOrEqual(directionChange, 10, 'Clone should turn at most 10 degrees');
    t.end();
}

const testCloneChangeDirectionOnEdge = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Hippo1').getCloneCount() > 0, 5000);
    const clone = t.getSprite('Hippo1').getClones()[0];
    await t.runUntil(() => clone.isTouchingEdge(), 5000);
    const initialDirection = clone.direction;
    await t.runForTime(1000);
    t.assert.notEqual(clone.direction, initialDirection, 'Clone should change direction when touching the edge');
    t.end();
}

const testCloneTouchLightning = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Hippo1').getCloneCount() > 0 && t.getSprite('Lightning').getCloneCount() > 0, 5000);
    const hippoClone = t.getSprite('Hippo1').getClones()[0];
    const lightningClone = t.getSprite('Lightning').getClones()[0];
    await t.runUntil(() => hippoClone.isTouchingSprite('Lightning'), 5000);
    const initialScore = t.getGlobalVariable('score');
    await t.runForTime(1000);
    t.assert.equal(t.getGlobalVariable('score'), initialScore + 10, 'Score should increase by 10');
    t.assert.equal(t.getSprite('Hippo1').getCloneCount(), 0, 'Hippo1 clone should be deleted');
    t.end();
}

const testSpaceshipTouch = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Spaceship').isTouchingSprite('Hippo1') || t.getSprite('Spaceship').isTouchingSprite('Orange'), 5000);
    const initialLives = t.getGlobalVariable('lives');
    await t.runForTime(1000);
    t.assert.equal(t.getSprite('Spaceship').currentCostume, 'hit', 'Costume should change to hit');
    await t.runForTime(1000);
    t.assert.equal(t.getGlobalVariable('lives'), initialLives - 1, 'Lives should decrease by 1');
    t.end();
}

const testSpacePressCreatesLightningClone = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const initialCloneCount = t.getSprite('Lightning').getCloneCount();
    t.keyPress('space');
    await t.runForTime(1000);
    t.assert.equal(t.getSprite('Lightning').getCloneCount(), initialCloneCount + 1, 'A new clone of Lightning should be created');
    t.end();
}

const testLeftArrowPress = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const spaceship = t.getSprite('Spaceship');
    const initialX = spaceship.x;
    t.keyPress('left arrow');
    await t.runForTime(1000);
    t.assert.equal(spaceship.x, initialX - 4, 'Spaceship x coordinate should decrease by 4');
    t.end();
}

const testRightArrowPress = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const spaceship = t.getSprite('Spaceship');
    const initialX = spaceship.x;
    t.keyPress('right arrow');
    await t.runForTime(1000);
    t.assert.equal(spaceship.x, initialX + 4, 'Spaceship x coordinate should increase by 4');
    t.end();
}

const testGameOverVisibility = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('lives') === 0, 5000);
    const gameOver = t.getSprite('Game Over');
    t.assert.ok(gameOver.visible, 'Game Over should be visible');
    t.assert.fail('Game should end');
    t.end();
}

const testLightningCloneStartPosition = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const spaceship = t.getSprite('Spaceship');
    t.keyPress('space');
    await t.runUntil(() => t.getSprite('Lightning').getCloneCount() > 0, 5000);
    const lightningClone = t.getSprite('Lightning').getClones()[0];
    t.assert.equal(lightningClone.x, spaceship.x, 'Lightning clone x coordinate should match spaceship x coordinate');
    t.assert.equal(lightningClone.y, spaceship.y, 'Lightning clone y coordinate should match spaceship y coordinate');
    t.assert.ok(lightningClone.visible, 'Lightning clone should be visible');
    t.end();
}

const testLightningCloneMovement = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    t.keyPress('space');
    await t.runUntil(() => t.getSprite('Lightning').getCloneCount() > 0, 5000);
    const lightningClone = t.getSprite('Lightning').getClones()[0];
    const initialY = lightningClone.y;
    await t.runForTime(1000);
    t.assert.equal(lightningClone.y, initialY + 10, 'Lightning clone y coordinate should increase by 10');
    t.end();
}

const testLightningCloneDeletionOnEdge = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    t.keyPress('space');
    await t.runUntil(() => t.getSprite('Lightning').getCloneCount() > 0, 5000);
    const lightningClone = t.getSprite('Lightning').getClones()[0];
    await t.runUntil(() => lightningClone.isTouchingEdge(), 5000);
    await t.runForTime(1000);
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
		 test: testCloneDeletionOnEdge,
		 name: "testCloneDeletionOnEdge",
		 description: "When the clone of Orange touches the edge of the stage the clone is deleted",
		 categories: []
	},
	{
		 test: testCloneSpeedVariable,
		 name: "testCloneSpeedVariable",
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
		 test: testSpacePressCreatesLightningClone,
		 name: "testSpacePressCreatesLightningClone",
		 description: "If space is pressed a new clone of Lightning is created",
		 categories: []
	},
	{
		 test: testLeftArrowPress,
		 name: "testLeftArrowPress",
		 description: "If left arrow is pressed the spaceship's x coordinate is decreased in steps of 4",
		 categories: []
	},
	{
		 test: testRightArrowPress,
		 name: "testRightArrowPress",
		 description: "If right arrow is pressed the spaceship's x coordinate is increased in steps of 4",
		 categories: []
	},
	{
		 test: testGameOverVisibility,
		 name: "testGameOverVisibility",
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
		 description: "Clones of Lightning continue to increase their y coordinate in steps of 10",
		 categories: []
	},
	{
		 test: testLightningCloneDeletionOnEdge,
		 name: "testLightningCloneDeletionOnEdge",
		 description: "When a clone of Lightning touches the edge of the stage it gets deleted",
		 categories: []
	},
]
