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
    await t.runUntil(async () => {
        const lightning = await t.getSprite('Lightning');
        return lightning.visible === false && lightning.size === 25 && lightning.direction === -90;
    }, 1000);
    const lightning = await t.getSprite('Lightning');
    t.assert.equal(lightning.visible, false, 'Lightning should be invisible at the start');
    t.assert.equal(lightning.size, 25, 'Lightning should have size 25 at the start');
    t.assert.equal(lightning.direction, -90, 'Lightning should have direction -90 at the start');
    t.end();
}

const testHippo1Invisible = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(async () => (await t.getSprite('Hippo1')).visible === false, 1000);
    const hippo1 = await t.getSprite('Hippo1');
    t.assert.equal(hippo1.visible, false, 'Hippo1 should be invisible at the start');
    t.end();
}

const testBatSize = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(async () => (await t.getSprite('Bat')).size === 50, 1000);
    const bat = await t.getSprite('Bat');
    t.assert.equal(bat.size, 50, 'Bat should have a size of 50 at the start');
    t.end();
}

const testOrangeInvisible = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(async () => (await t.getSprite('Orange')).visible === false, 1000);
    const orange = await t.getSprite('Orange');
    t.assert.equal(orange.visible, false, 'Orange should be invisible at the start');
    t.end();
}

const testGameOverInvisible = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(async () => (await t.getSprite('Game Over')).visible === false, 1000);
    const gameOver = await t.getSprite('Game Over');
    t.assert.equal(gameOver.visible, false, 'Game Over should be invisible at the start');
    t.end();
}

const testSpaceshipCostume = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(async () => (await t.getSprite('Spaceship')).getCostumeByName('normal') !== undefined, 1000);
    const spaceship = await t.getSprite('Spaceship');
    t.assert.equal(spaceship.getCostumeByName('normal').name, 'normal', 'Spaceship should have costume normal at the start');
    t.end();
}

const testHippo1CloneIntervals = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const hippo1 = await t.getSprite('Hippo1');
    let initialCloneCount = hippo1.getCloneCount();
    await t.runForTime(2000);
    let newCloneCount = hippo1.getCloneCount();
    t.assert.greater(newCloneCount, initialCloneCount, 'A new clone of Hippo1 should be created within 2 to 4 seconds');
    t.end();
}

const testBatMovement = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const bat = await t.getSprite('Bat');
    let initialX = bat.x;
    await t.runForTime(1000);
    t.assert.notEqual(bat.x, initialX, 'Bat should move along the x axis');
    let initialDirection = bat.direction;
    await t.runUntil(() => bat.x <= -240 || bat.x >= 240, 5000);
    t.assert.notEqual(bat.direction, initialDirection, 'Bat should change direction if it hits the edge of the Stage');
    t.end();
}

const testBatCostumeChange = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const bat = await t.getSprite('Bat');
    let initialCostume = bat.currentCostume;
    await t.runForTime(1000);
    t.assert.notEqual(bat.currentCostume, initialCostume, 'Bat should change costumes every time it moves');
    t.end();
}

const testOrangeCloneIntervals = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const orange = await t.getSprite('Orange');
    let initialCloneCount = orange.getCloneCount();
    await t.runForTime(5000);
    let newCloneCount = orange.getCloneCount();
    t.assert.greater(newCloneCount, initialCloneCount, 'A new clone of Orange should be created within 5 to 10 seconds');
    t.end();
}

const testOrangeClonePosition = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const bat = await t.getSprite('Bat');
    const orange = await t.getSprite('Orange');
    await t.runForTime(5000);
    const newClone = orange.getNewClones()[0];
    t.assert.equal(newClone.x, bat.x, 'A clone of Orange should start at the current position of Bat');
    t.assert.equal(newClone.y, bat.y, 'A clone of Orange should start at the current position of Bat');
    t.end();
}

const testOrangeClonesVisible = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const orange = await t.getSprite('Orange');
    await t.runForTime(5000);
    const newClone = orange.getNewClones()[0];
    t.assert.equal(newClone.visible, true, 'The clones of Orange should be visible');
    t.end();
}

const testOrangeClonesYDecreases = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const orange = await t.getSprite('Orange');
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
    await t.runForTime(1000);
    let orangeClones = t.getSprite('Orange').getClones();
    t.assert.ok(orangeClones.length > 0, 'There should be clones of Orange');
    await t.runUntil(() => t.getSprite('Orange').getClones().length === 0, 5000);
    t.assert.equal(t.getSprite('Orange').getClones().length, 0, 'All Orange clones should be deleted when touching the edge');
    t.end();
}

const testHippo1SpeedVariable = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    let hippo1Clones = t.getSprite('Hippo1').getClones();
    t.assert.ok(hippo1Clones.length > 0, 'There should be clones of Hippo1');
    hippo1Clones.forEach(clone => {
        let speed = clone.getVariable('speed').value;
        t.assert.ok(speed >= 2 && speed <= 4, 'Speed should be between 2 and 4');
    });
    t.end();
}

const testHippo1StartPosition = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    let hippo1Clones = t.getSprite('Hippo1').getClones();
    t.assert.ok(hippo1Clones.length > 0, 'There should be clones of Hippo1');
    hippo1Clones.forEach(clone => {
        t.assert.ok(clone.x >= -220 && clone.x <= 220, 'X coordinate should be between -220 and 220');
        t.assert.equal(clone.y, 150, 'Y coordinate should be 150');
    });
    t.end();
}

const testHippo1Visibility = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    let hippo1Clones = t.getSprite('Hippo1').getClones();
    t.assert.ok(hippo1Clones.length > 0, 'There should be clones of Hippo1');
    hippo1Clones.forEach(clone => {
        t.assert.ok(clone.visible, 'Hippo1 clones should be visible');
    });
    t.end();
}

const testHippo1Movement = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    let hippo1Clones = t.getSprite('Hippo1').getClones();
    t.assert.ok(hippo1Clones.length > 0, 'There should be clones of Hippo1');
    let initialPositions = hippo1Clones.map(clone => ({ x: clone.x, y: clone.y }));
    await t.runForTime(1000);
    hippo1Clones.forEach((clone, index) => {
        let speed = clone.getVariable('speed').value;
        let initialPosition = initialPositions[index];
        let distanceMoved = Math.sqrt(Math.pow(clone.x - initialPosition.x, 2) + Math.pow(clone.y - initialPosition.y, 2));
        t.assert.ok(distanceMoved >= speed - 1 && distanceMoved <= speed + 1, 'Hippo1 clones should move [speed] steps');
        let directionChange = Math.abs(clone.direction - initialPosition.direction);
        t.assert.ok(directionChange >= -10 && directionChange <= 10, 'Hippo1 clones should turn between -10 and 10 degrees');
    });
    t.end();
}

const testHippo1ChangeDirectionOnEdge = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    let hippo1Clones = t.getSprite('Hippo1').getClones();
    t.assert.ok(hippo1Clones.length > 0, 'There should be clones of Hippo1');
    let initialDirections = hippo1Clones.map(clone => clone.direction);
    await t.runUntil(() => hippo1Clones.some(clone => clone.x <= -240 || clone.x >= 240 || clone.y <= -180 || clone.y >= 180), 5000);
    hippo1Clones.forEach((clone, index) => {
        if (clone.x <= -240 || clone.x >= 240 || clone.y <= -180 || clone.y >= 180) {
            t.assert.notEqual(clone.direction, initialDirections[index], 'Hippo1 clones should change direction when touching the edge');
        }
    });
    t.end();
}

const testHippo1TouchLightning = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    let initialScore = t.getGlobalVariable('score').value;
    let hippo1Clones = t.getSprite('Hippo1').getClones();
    t.assert.ok(hippo1Clones.length > 0, 'There should be clones of Hippo1');
    let lightning = t.getSprite('Lightning');
    await t.runUntil(() => hippo1Clones.some(clone => clone.isTouchingSprite('Lightning')), 5000);
    let newScore = t.getGlobalVariable('score').value;
    t.assert.equal(newScore, initialScore + 10, 'Score should increase by 10 when Hippo1 touches Lightning');
    t.assert.equal(t.getSprite('Hippo1').getClones().length, hippo1Clones.length - 1, 'Hippo1 clone should be deleted when touching Lightning');
    t.end();
}

const testSpaceshipTouch = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    let spaceship = t.getSprite('Spaceship');
    let initialLives = t.getGlobalVariable('lives').value;
    let hippo1 = t.getSprite('Hippo1');
    let orange = t.getSprite('Orange');
    await t.runUntil(() => spaceship.isTouchingSprite('Hippo1') || spaceship.isTouchingSprite('Orange'), 5000);
    t.assert.equal(spaceship.currentCostume, spaceship.getCostumeByName('hit').index, 'Spaceship costume should change to hit');
    await t.runForTime(1000);
    t.assert.equal(t.getGlobalVariable('lives').value, initialLives - 1, 'Lives should decrease by 1 when Spaceship touches Hippo1 or Orange');
    t.end();
}

const testSpacePressCreatesLightningClone = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    let initialCloneCount = t.getSprite('Lightning').getCloneCount();
    t.keyPress('space');
    await t.runForTime(1000);
    t.assert.equal(t.getSprite('Lightning').getCloneCount(), initialCloneCount + 1, 'A new clone of Lightning should be created when space is pressed');
    t.end();
}

const testLeftArrowPress = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    let spaceship = t.getSprite('Spaceship');
    let initialX = spaceship.x;
    t.keyPress('left arrow');
    await t.runForTime(1000);
    t.assert.equal(spaceship.x, initialX - 4, 'Spaceship x coordinate should decrease by 4 when left arrow is pressed');
    t.end();
}

const testRightArrowPress = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    let spaceship = t.getSprite('Spaceship');
    let initialX = spaceship.x;
    t.keyPress('right arrow');
    await t.runForTime(1000);
    t.assert.equal(spaceship.x, initialX + 4, 'Spaceship x coordinate should increase by 4 when right arrow is pressed');
    t.end();
}

const testGameOver = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.getGlobalVariable('lives').value = 0;
    await t.runForTime(1000);
    let gameOver = t.getSprite('Game Over');
    t.assert.ok(gameOver.visible, 'Game Over should be visible when lives reach 0');
    t.assert.ok(t.getGlobalVariable('gameEnded').value, 'Game should end when lives reach 0');
    t.end();
}

const testLightningCloneStartPosition = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    let spaceship = t.getSprite('Spaceship');
    t.keyPress('space');
    await t.runForTime(1000);
    let lightningClones = t.getSprite('Lightning').getClones();
    t.assert.ok(lightningClones.length > 0, 'There should be clones of Lightning');
    lightningClones.forEach(clone => {
        t.assert.equal(clone.x, spaceship.x, 'Lightning clone should start at the x coordinate of Spaceship');
        t.assert.equal(clone.y, spaceship.y, 'Lightning clone should start at the y coordinate of Spaceship');
        t.assert.ok(clone.visible, 'Lightning clone should be visible');
    });
    t.end();
}

const testLightningCloneMovement = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.keyPress('space');
    await t.runForTime(1000);
    let lightningClones = t.getSprite('Lightning').getClones();
    t.assert.ok(lightningClones.length > 0, 'There should be clones of Lightning');
    let initialPositions = lightningClones.map(clone => clone.y);
    await t.runForTime(1000);
    lightningClones.forEach((clone, index) => {
        t.assert.equal(clone.y, initialPositions[index] + 10, 'Lightning clones should increase their y coordinate by 10');
    });
    t.end();
}

const testLightningCloneDeletionOnEdge = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.keyPress('space');
    await t.runForTime(1000);
    let lightningClones = t.getSprite('Lightning').getClones();
    t.assert.ok(lightningClones.length > 0, 'There should be clones of Lightning');
    await t.runUntil(() => t.getSprite('Lightning').getClones().length === 0, 5000);
    t.assert.equal(t.getSprite('Lightning').getClones().length, 0, 'All Lightning clones should be deleted when touching the edge');
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
		 description: "Lightning is invisible, size is 25, and direction is -90 at the start",
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
		 description: "Bat moves along the x axis and changes direction if it hits the edge of the Stage",
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
		 test: testHippo1SpeedVariable,
		 name: "testHippo1SpeedVariable",
		 description: "A clone of Hippo1 sets its variable speed to a random value between 2 and 4",
		 categories: []
	},
	{
		 test: testHippo1StartPosition,
		 name: "testHippo1StartPosition",
		 description: "A clone of Hippo1 starts at a randomly picked x coordinate between -220 and 220 and at y coordinate 150",
		 categories: []
	},
	{
		 test: testHippo1Visibility,
		 name: "testHippo1Visibility",
		 description: "Clones of Hippo1 are visible",
		 categories: []
	},
	{
		 test: testHippo1Movement,
		 name: "testHippo1Movement",
		 description: "Clones of Hippo1 move [speed] steps and turn pick a random amount of degrees to turn between -10 and 10",
		 categories: []
	},
	{
		 test: testHippo1ChangeDirectionOnEdge,
		 name: "testHippo1ChangeDirectionOnEdge",
		 description: "If a clone of Hippo1 touches the edges it changes direction",
		 categories: []
	},
	{
		 test: testHippo1TouchLightning,
		 name: "testHippo1TouchLightning",
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
		 test: testLightningCloneDeletionOnEdge,
		 name: "testLightningCloneDeletionOnEdge",
		 description: "When a clone of Lightning touches the edge of the stage it gets deleted",
		 categories: []
	},
]
