const testGlobalVariableScoreAtStart = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('score') === 3, 5000);
    t.assert.equal(t.getGlobalVariable('score'), 3, 'The global variable score should be 3 at the start');
    t.end();
}

const testRoutineUntilGameOver = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const ballerina = t.getSprite('Ballerina');
    const stage = t.getStage();
    let score = t.getGlobalVariable('score');
    while (true) {
        await t.runUntil(() => ballerina.getList('sequence').length === 0, 5000);
        t.assert.equal(ballerina.getList('sequence').length, 0, 'The list sequence should be empty');
        score++;
        t.assert.equal(t.getGlobalVariable('score'), score, 'Score should be increased by 1');
        for (let i = 0; i < 40; i++) {
            await t.runForTime(25);
            t.assert.equal(stage.effects['color'], 25 * (i + 1), 'Stage color effect should change by 25');
        }
        t.assert.equal(stage.effects['color'], 0, 'Stage color effect should be cleared');
    }
    t.end();
}

const testRedClickSequence1 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const ballerina = t.getSprite('Ballerina');
    await t.runUntil(() => ballerina.getList('sequence').length > 0, 5000);
    if (ballerina.getList('sequence')[0] === 1) {
        t.clickSprite('red');
        await t.runForTime(1000);
        t.assert.not(ballerina.getList('sequence').includes(1), 'The first item in sequence should be removed if it is 1 and red is clicked');
    } else {
        t.clickSprite('red');
        await t.runForTime(1000);
        t.assert.ok(ballerina.sayText.includes('Game over!'), 'Game Over routine should happen if red is clicked and the first item in sequence is not 1');
    }
    t.end();
}

const testBlueClickSequence2 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const ballerina = t.getSprite('Ballerina');
    await t.runUntil(() => ballerina.getList('sequence').length > 0, 5000);
    if (ballerina.getList('sequence')[0] === 2) {
        t.clickSprite('blue');
        await t.runForTime(1000);
        t.assert.not(ballerina.getList('sequence').includes(2), 'The first item in sequence should be removed if it is 2 and blue is clicked');
    } else {
        t.clickSprite('blue');
        await t.runForTime(1000);
        t.assert.ok(ballerina.sayText.includes('Game over!'), 'Game Over routine should happen if blue is clicked and the first item in sequence is not 2');
    }
    t.end();
}

const testGreenClickSequence3 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const ballerina = t.getSprite('Ballerina');
    await t.runUntil(() => ballerina.getList('sequence').length > 0, 5000);
    if (ballerina.getList('sequence')[0] === 3) {
        t.clickSprite('green');
        await t.runForTime(1000);
        t.assert.not(ballerina.getList('sequence').includes(3), 'The first item in sequence should be removed if it is 3 and green is clicked');
    } else {
        t.clickSprite('green');
        await t.runForTime(1000);
        t.assert.ok(ballerina.sayText.includes('Game over!'), 'Game Over routine should happen if green is clicked and the first item in sequence is not 3');
    }
    t.end();
}

const testYellowClickSequence4 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const ballerina = t.getSprite('Ballerina');
    await t.runUntil(() => ballerina.getList('sequence').length > 0, 5000);
    if (ballerina.getList('sequence')[0] === 4) {
        t.clickSprite('yellow');
        await t.runForTime(1000);
        t.assert.not(ballerina.getList('sequence').includes(4), 'The first item in sequence should be removed if it is 4 and yellow is clicked');
    } else {
        t.clickSprite('yellow');
        await t.runForTime(1000);
        t.assert.ok(ballerina.sayText.includes('Game over!'), 'Game Over routine should happen if yellow is clicked and the first item in sequence is not 4');
    }
    t.end();
}

const testGameOverRoutine = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const ballerina = t.getSprite('Ballerina');
    const initialHighScore = t.getGlobalVariable('high score');
    const initialScore = t.getGlobalVariable('score');
    await t.runUntil(() => ballerina.sayText.includes('Game over!'), 5000);
    t.assert.ok(ballerina.sayText.includes('Game over!'), 'Ballerina should say Game over!');
    if (initialScore > initialHighScore) {
        t.assert.equal(t.getGlobalVariable('high score'), initialScore, 'High score should be updated if score is higher');
        t.assert.ok(ballerina.sayText.includes('High Score! What is your name?'), 'Ballerina should ask for name if score is higher than high score');
        t.typeText('TestName');
        await t.runForTime(1000);
        t.assert.equal(t.getGlobalVariable('name'), 'TestName', 'Global variable name should be set to the answer');
    }
    t.end();
}

module.exports = [
	{
		 test: testGlobalVariableScoreAtStart,
		 name: "testGlobalVariableScoreAtStart",
		 description: "Test if the global variable score is 3 at the start",
		 categories: []
	},
	{
		 test: testRoutineUntilGameOver,
		 name: "testRoutineUntilGameOver",
		 description: "Test the routine until Game Over",
		 categories: []
	},
	{
		 test: testRedClickSequence1,
		 name: "testRedClickSequence1",
		 description: "Test if red is clicked and the first item in sequence is 1",
		 categories: []
	},
	{
		 test: testBlueClickSequence2,
		 name: "testBlueClickSequence2",
		 description: "Test if blue is clicked and the first item in sequence is 2",
		 categories: []
	},
	{
		 test: testGreenClickSequence3,
		 name: "testGreenClickSequence3",
		 description: "Test if green is clicked and the first item in sequence is 3",
		 categories: []
	},
	{
		 test: testYellowClickSequence4,
		 name: "testYellowClickSequence4",
		 description: "Test if yellow is clicked and the first item in sequence is 4",
		 categories: []
	},
	{
		 test: testGameOverRoutine,
		 name: "testGameOverRoutine",
		 description: "Test the Game Over routine",
		 categories: []
	},
]
