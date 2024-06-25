const testStartScore = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('score') === 3, 5000);
    t.assert.equal(t.getGlobalVariable('score'), 3, 'The global variable score should be 3 at the start');
    t.end();
}

const testRoutineRepeats = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const ballerina = await t.getSprite('Ballerina');
    const stage = await t.getStage();
    let previousScore = t.getGlobalVariable('score');
    let sequenceList = stage.getList('sequence', true);

    t.addConstraint(async () => {
        if (sequenceList.length === 0) {
            t.assert.greater(t.getGlobalVariable('score'), previousScore, 'Score should increase when sequence list is empty');
            previousScore = t.getGlobalVariable('score');
            for (let i = 0; i < 40; i++) {
                t.assert.equal(stage.effects['color'], 25 * (i + 1), 'Stage color effect should change by 25');
                await t.runForTime(100);
            }
            t.assert.equal(stage.effects['color'], 0, 'Stage color effect should be cleared');
        } else {
            t.assert.equal(sequenceList.length, t.getGlobalVariable('score'), 'Sequence list should have score items');
            for (let i = 0; i < sequenceList.length; i++) {
                t.assert.ok(sequenceList[i] >= 1 && sequenceList[i] <= 4, 'Sequence list items should be between 1 and 4');
                t.assert.equal(ballerina.currentCostume, sequenceList[i] - 1, 'Ballerina should change costume to the index of the generated number');
            }
        }
    });

    await t.runForTime(10000);
    t.end();
}

const testClickRed = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const stage = await t.getStage();
    const sequenceList = stage.getList('sequence', true);

    await t.runUntil(() => sequenceList.length > 0, 5000);
    if (sequenceList[0] === 1) {
        t.clickSprite('red');
        await t.runForTime(1000);
        t.assert.not(sequenceList.includes(1), 'First item should be removed from the sequence list when red is clicked and first item is 1');
    } else {
        t.clickSprite('red');
        await t.runForTime(1000);
        t.assert.ok(sequenceList.includes(1), 'Game Over routine should happen when red is clicked and first item is not 1');
    }
    t.end();
}

const testClickBlue = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const stage = await t.getStage();
    const sequenceList = stage.getList('sequence', true);

    await t.runUntil(() => sequenceList.length > 0, 5000);
    if (sequenceList[0] === 2) {
        t.clickSprite('blue');
        await t.runForTime(1000);
        t.assert.not(sequenceList.includes(2), 'First item should be removed from the sequence list when blue is clicked and first item is 2');
    } else {
        t.clickSprite('blue');
        await t.runForTime(1000);
        t.assert.ok(sequenceList.includes(2), 'Game Over routine should happen when blue is clicked and first item is not 2');
    }
    t.end();
}

const testClickGreen = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const stage = await t.getStage();
    const sequenceList = stage.getList('sequence', true);

    await t.runUntil(() => sequenceList.length > 0, 5000);
    if (sequenceList[0] === 3) {
        t.clickSprite('green');
        await t.runForTime(1000);
        t.assert.not(sequenceList.includes(3), 'First item should be removed from the sequence list when green is clicked and first item is 3');
    } else {
        t.clickSprite('green');
        await t.runForTime(1000);
        t.assert.ok(sequenceList.includes(3), 'Game Over routine should happen when green is clicked and first item is not 3');
    }
    t.end();
}

const testClickYellow = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const stage = await t.getStage();
    const sequenceList = stage.getList('sequence', true);

    await t.runUntil(() => sequenceList.length > 0, 5000);
    if (sequenceList[0] === 4) {
        t.clickSprite('yellow');
        await t.runForTime(1000);
        t.assert.not(sequenceList.includes(4), 'First item should be removed from the sequence list when yellow is clicked and first item is 4');
    } else {
        t.clickSprite('yellow');
        await t.runForTime(1000);
        t.assert.ok(sequenceList.includes(4), 'Game Over routine should happen when yellow is clicked and first item is not 4');
    }
    t.end();
}

const testGameOverRoutine = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const ballerina = await t.getSprite('Ballerina');
    const stage = await t.getStage();
    const initialHighScore = t.getGlobalVariable('high score');
    const initialScore = t.getGlobalVariable('score');

    // Trigger Game Over routine
    t.clickSprite('red');
    await t.runForTime(1000);

    t.assert.equal(ballerina.sayText, 'Game over!', 'Ballerina should say Game over!');
    await t.runForTime(1000);

    if (initialScore > initialHighScore) {
        t.assert.equal(t.getGlobalVariable('high score'), initialScore, 'High score should be updated to the value of score');
        t.assert.equal(ballerina.sayText, 'High Score! What is your name?', 'Ballerina should ask for name if score is higher than high score');
        t.typeText('TestName');
        await t.runForTime(1000);
        t.assert.equal(t.getGlobalVariable('name'), 'TestName', 'Global variable name should be set to the answer');
    }

    t.end();
}

module.exports = [
	{
		 test: testStartScore,
		 name: "testStartScore",
		 description: "At the start the global variable score is 3",
		 categories: []
	},
	{
		 test: testRoutineRepeats,
		 name: "testRoutineRepeats",
		 description: "Routine repeats until Game Over",
		 categories: []
	},
	{
		 test: testClickRed,
		 name: "testClickRed",
		 description: "Click red and first item in sequence is 1",
		 categories: []
	},
	{
		 test: testClickBlue,
		 name: "testClickBlue",
		 description: "Click blue and first item in sequence is 2",
		 categories: []
	},
	{
		 test: testClickGreen,
		 name: "testClickGreen",
		 description: "Click green and first item in sequence is 3",
		 categories: []
	},
	{
		 test: testClickYellow,
		 name: "testClickYellow",
		 description: "Click yellow and first item in sequence is 4",
		 categories: []
	},
	{
		 test: testGameOverRoutine,
		 name: "testGameOverRoutine",
		 description: "Game Over routine",
		 categories: []
	},
]
