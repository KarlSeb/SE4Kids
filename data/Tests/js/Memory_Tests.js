const testInitialScore = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('score') === 3, 5000);
    t.assert.equal(t.getGlobalVariable('score'), 3, 'Initial score should be 3');
    t.end();
}

const testSequenceGenerationAndScoreIncrement = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const ballerina = await t.getSprite('Ballerina');
    const stage = await t.getStage();
    let previousScore = t.getGlobalVariable('score');
    while (true) {
        await t.runUntil(() => t.getSpriteVariable('Ballerina', 'sequence').length === 0, 10000);
        t.assert.equal(t.getSpriteVariable('Ballerina', 'sequence').length, 0, 'Sequence list should be empty');
        t.assert.greater(t.getGlobalVariable('score'), previousScore, 'Score should be incremented');
        previousScore = t.getGlobalVariable('score');
        for (let i = 0; i < 40; i++) {
            await t.runForTime(25);
            t.assert.notEqual(stage.effects['color'], 0, 'Stage color effect should change');
        }
        t.assert.equal(stage.effects['color'], 0, 'Stage color effect should be cleared');
    }
    t.end();
}

const testRedClick = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const ballerina = await t.getSprite('Ballerina');
    await t.runUntil(() => t.getSpriteVariable('Ballerina', 'sequence').length > 0, 5000);
    if (t.getSpriteVariable('Ballerina', 'sequence')[0] === 1) {
        t.clickSprite('red');
        await t.runForTime(1000);
        t.assert.notEqual(t.getSpriteVariable('Ballerina', 'sequence')[0], 1, 'First item should be removed if it is 1');
    } else {
        t.clickSprite('red');
        await t.runForTime(1000);
        t.assert.equal(ballerina.sayText, 'Game over!', 'Game Over routine should happen');
    }
    t.end();
}

const testBlueClick = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const ballerina = await t.getSprite('Ballerina');
    await t.runUntil(() => t.getSpriteVariable('Ballerina', 'sequence').length > 0, 5000);
    if (t.getSpriteVariable('Ballerina', 'sequence')[0] === 2) {
        t.clickSprite('blue');
        await t.runForTime(1000);
        t.assert.notEqual(t.getSpriteVariable('Ballerina', 'sequence')[0], 2, 'First item should be removed if it is 2');
    } else {
        t.clickSprite('blue');
        await t.runForTime(1000);
        t.assert.equal(ballerina.sayText, 'Game over!', 'Game Over routine should happen');
    }
    t.end();
}

const testGreenClick = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const ballerina = await t.getSprite('Ballerina');
    await t.runUntil(() => t.getSpriteVariable('Ballerina', 'sequence').length > 0, 5000);
    if (t.getSpriteVariable('Ballerina', 'sequence')[0] === 3) {
        t.clickSprite('green');
        await t.runForTime(1000);
        t.assert.notEqual(t.getSpriteVariable('Ballerina', 'sequence')[0], 3, 'First item should be removed if it is 3');
    } else {
        t.clickSprite('green');
        await t.runForTime(1000);
        t.assert.equal(ballerina.sayText, 'Game over!', 'Game Over routine should happen');
    }
    t.end();
}

const testYellowClick = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const ballerina = await t.getSprite('Ballerina');
    await t.runUntil(() => t.getSpriteVariable('Ballerina', 'sequence').length > 0, 5000);
    if (t.getSpriteVariable('Ballerina', 'sequence')[0] === 4) {
        t.clickSprite('yellow');
        await t.runForTime(1000);
        t.assert.notEqual(t.getSpriteVariable('Ballerina', 'sequence')[0], 4, 'First item should be removed if it is 4');
    } else {
        t.clickSprite('yellow');
        await t.runForTime(1000);
        t.assert.equal(ballerina.sayText, 'Game over!', 'Game Over routine should happen');
    }
    t.end();
}

const testGameOverRoutine = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const ballerina = await t.getSprite('Ballerina');
    const initialHighScore = t.getGlobalVariable('high score');
    const initialName = t.getGlobalVariable('name');
    await t.runUntil(() => ballerina.sayText === 'Game over!', 10000);
    await t.runForTime(1000);
    const currentScore = t.getGlobalVariable('score');
    if (currentScore > initialHighScore) {
        t.assert.equal(t.getGlobalVariable('high score'), currentScore, 'High score should be updated');
        t.assert.equal(ballerina.sayText, 'High Score! What is your name?', 'Ballerina should ask for name');
        t.typeText('TestName');
        await t.runForTime(1000);
        t.assert.equal(t.getGlobalVariable('name'), 'TestName', 'Name should be updated');
    } else {
        t.assert.equal(t.getGlobalVariable('high score'), initialHighScore, 'High score should remain the same');
        t.assert.equal(t.getGlobalVariable('name'), initialName, 'Name should remain the same');
    }
    t.end();
}

module.exports = [
	{
		 test: testInitialScore,
		 name: "testInitialScore",
		 description: "Test initial score",
		 categories: []
	},
	{
		 test: testSequenceGenerationAndScoreIncrement,
		 name: "testSequenceGenerationAndScoreIncrement",
		 description: "Test sequence generation and score increment",
		 categories: []
	},
	{
		 test: testRedClick,
		 name: "testRedClick",
		 description: "Test red click",
		 categories: []
	},
	{
		 test: testBlueClick,
		 name: "testBlueClick",
		 description: "Test blue click",
		 categories: []
	},
	{
		 test: testGreenClick,
		 name: "testGreenClick",
		 description: "Test green click",
		 categories: []
	},
	{
		 test: testYellowClick,
		 name: "testYellowClick",
		 description: "Test yellow click",
		 categories: []
	},
	{
		 test: testGameOverRoutine,
		 name: "testGameOverRoutine",
		 description: "Test Game Over routine",
		 categories: []
	},
]
