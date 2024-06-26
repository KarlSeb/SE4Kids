const testGlobalVariableScore = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('score') === 3, 5000);
    t.assert.equal(t.getGlobalVariable('score'), 3, 'Global variable score should be 3 at the start');
    t.end();
}

const testRoutineRepeatsUntilGameOver = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const stage = t.getStage();
    const ballerina = t.getSprite('Ballerina');
    const sequenceList = stage.getList('sequence', true);
    let previousScore = t.getGlobalVariable('score');

    while (true) {
        await t.runUntil(() => sequenceList.value.length === 0, 5000);
        t.assert.equal(sequenceList.value.length, 0, 'Sequence list should be empty');
        t.assert.greater(t.getGlobalVariable('score'), previousScore, 'Score should increase by 1');
        previousScore = t.getGlobalVariable('score');

        for (let i = 0; i < 40; i++) {
            await t.runForTime(100);
            t.assert.equal(stage.effects['color'], 25 * (i + 1), 'Stage color effect should change by 25');
        }
        t.assert.equal(stage.effects['color'], 0, 'Stage color effect should be cleared');
    }
    t.end();
}

const testRedClick = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const stage = t.getStage();
    const sequenceList = stage.getList('sequence', true);

    await t.runUntil(() => sequenceList.value.length === t.getGlobalVariable('score'), 5000);
    if (sequenceList.value[0] === '1') {
        t.clickSprite('red');
        await t.runForTime(1000);
        t.assert.not(sequenceList.value.includes('1'), 'Red click should remove 1 from sequence');
    } else {
        t.clickSprite('red');
        await t.runForTime(1000);
        t.assert.equal(t.getSprite('Ballerina').sayText, 'Game over!', 'Game Over should be triggered');
    }
    t.end();
}

const testBlueClick = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const stage = t.getStage();
    const sequenceList = stage.getList('sequence', true);

    await t.runUntil(() => sequenceList.value.length === t.getGlobalVariable('score'), 5000);
    if (sequenceList.value[0] === '2') {
        t.clickSprite('blue');
        await t.runForTime(1000);
        t.assert.not(sequenceList.value.includes('2'), 'Blue click should remove 2 from sequence');
    } else {
        t.clickSprite('blue');
        await t.runForTime(1000);
        t.assert.equal(t.getSprite('Ballerina').sayText, 'Game over!', 'Game Over should be triggered');
    }
    t.end();
}

const testGreenClick = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const stage = t.getStage();
    const sequenceList = stage.getList('sequence', true);

    await t.runUntil(() => sequenceList.value.length === t.getGlobalVariable('score'), 5000);
    if (sequenceList.value[0] === '3') {
        t.clickSprite('green');
        await t.runForTime(1000);
        t.assert.not(sequenceList.value.includes('3'), 'Green click should remove 3 from sequence');
    } else {
        t.clickSprite('green');
        await t.runForTime(1000);
        t.assert.equal(t.getSprite('Ballerina').sayText, 'Game over!', 'Game Over should be triggered');
    }
    t.end();
}

const testYellowClick = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const stage = t.getStage();
    const sequenceList = stage.getList('sequence', true);

    await t.runUntil(() => sequenceList.value.length === t.getGlobalVariable('score'), 5000);
    if (sequenceList.value[0] === '4') {
        t.clickSprite('yellow');
        await t.runForTime(1000);
        t.assert.not(sequenceList.value.includes('4'), 'Yellow click should remove 4 from sequence');
    } else {
        t.clickSprite('yellow');
        await t.runForTime(1000);
        t.assert.equal(t.getSprite('Ballerina').sayText, 'Game over!', 'Game Over should be triggered');
    }
    t.end();
}

const testGameOverRoutine = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const ballerina = t.getSprite('Ballerina');
    const stage = t.getStage();
    const sequenceList = stage.getList('sequence', true);

    await t.runUntil(() => sequenceList.value.length === t.getGlobalVariable('score'), 5000);
    t.clickSprite('red'); // Trigger Game Over
    await t.runForTime(1000);
    t.assert.equal(ballerina.sayText, 'Game over!', 'Ballerina should say Game over!');

    const score = t.getGlobalVariable('score');
    const highScore = t.getGlobalVariable('high score');

    if (score > highScore) {
        t.assert.equal(ballerina.sayText, 'High Score! What is your name?', 'Ballerina should ask for name');
        t.typeText('TestName');
        await t.runForTime(1000);
        t.assert.equal(t.getGlobalVariable('name'), 'TestName', 'Global variable name should be set to the answer');
    }
    t.end();
}

module.exports = [
	{
		 test: testGlobalVariableScore,
		 name: "testGlobalVariableScore",
		 description: "Global variable score is 3 at the start",
		 categories: []
	},
	{
		 test: testRoutineRepeatsUntilGameOver,
		 name: "testRoutineRepeatsUntilGameOver",
		 description: "Routine repeats until Game Over",
		 categories: []
	},
	{
		 test: testRedClick,
		 name: "testRedClick",
		 description: "Red click removes '1' from sequence or triggers Game Over",
		 categories: []
	},
	{
		 test: testBlueClick,
		 name: "testBlueClick",
		 description: "Blue click removes '2' from sequence or triggers Game Over",
		 categories: []
	},
	{
		 test: testGreenClick,
		 name: "testGreenClick",
		 description: "Green click removes '3' from sequence or triggers Game Over",
		 categories: []
	},
	{
		 test: testYellowClick,
		 name: "testYellowClick",
		 description: "Yellow click removes '4' from sequence or triggers Game Over",
		 categories: []
	},
	{
		 test: testGameOverRoutine,
		 name: "testGameOverRoutine",
		 description: "Game Over routine",
		 categories: []
	},
]
