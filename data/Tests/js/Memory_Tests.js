const testInitialScore = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('score') === 3, 5000);
    t.assert.equal(t.getGlobalVariable('score'), 3, 'Initial score should be 3');
    t.end();
}

const testSequenceListEmptyingAndScoreIncrement = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    const sequence = t.getGlobalVariable('sequence');
    t.assert.equal(sequence.length, 0, 'Sequence list should be empty');
    const initialScore = t.getGlobalVariable('score');
    await t.runForTime(1000);
    t.assert.equal(t.getGlobalVariable('score'), initialScore + 1, 'Score should be incremented by 1');
    t.end();
}

const testStageColorEffectChange = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    const stage = t.getStage();
    t.assert.equal(stage.effects.color, 0, 'Stage color effect should be reset to 0');
    t.end();
}

const testRedClickAndSequenceItem1 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    const sequence = t.getGlobalVariable('sequence');
    sequence.push(1);
    t.clickSprite('red');
    await t.runForTime(500);
    t.assert.equal(sequence.length, 0, 'Sequence list should be empty after clicking red with first item 1');
    t.end();
}

const testBlueClickAndSequenceItem2 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    const sequence = t.getGlobalVariable('sequence');
    sequence.push(2);
    t.clickSprite('blue');
    await t.runForTime(500);
    t.assert.equal(sequence.length, 0, 'Sequence list should be empty after clicking blue with first item 2');
    t.end();
}

const testGreenClickAndSequenceItem3 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    const sequence = t.getGlobalVariable('sequence');
    sequence.push(3);
    t.clickSprite('green');
    await t.runForTime(500);
    t.assert.equal(sequence.length, 0, 'Sequence list should be empty after clicking green with first item 3');
    t.end();
}

const testYellowClickAndSequenceItem4 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    const sequence = t.getGlobalVariable('sequence');
    sequence.push(4);
    t.clickSprite('yellow');
    await t.runForTime(500);
    t.assert.equal(sequence.length, 0, 'Sequence list should be empty after clicking yellow with first item 4');
    t.end();
}

const testGameOverRoutine = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    const sequence = t.getGlobalVariable('sequence');
    sequence.push(1);
    t.clickSprite('blue');
    await t.runForTime(500);
    const ballerina = t.getSprite('Ballerina');
    t.assert.equal(ballerina.sayText, 'Game over!', 'Ballerina should say Game over!');
    const score = t.getGlobalVariable('score');
    const highScore = t.getGlobalVariable('high score');
    if (score > highScore) {
        t.assert.equal(t.getGlobalVariable('high score'), score, 'High score should be updated');
        t.assert.equal(ballerina.sayText, 'High Score! What is your name?', 'Ballerina should ask for name');
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
		 test: testSequenceListEmptyingAndScoreIncrement,
		 name: "testSequenceListEmptyingAndScoreIncrement",
		 description: "Test sequence list emptying and score increment",
		 categories: []
	},
	{
		 test: testStageColorEffectChange,
		 name: "testStageColorEffectChange",
		 description: "Test stage color effect change",
		 categories: []
	},
	{
		 test: testRedClickAndSequenceItem1,
		 name: "testRedClickAndSequenceItem1",
		 description: "Test red click and sequence item 1",
		 categories: []
	},
	{
		 test: testBlueClickAndSequenceItem2,
		 name: "testBlueClickAndSequenceItem2",
		 description: "Test blue click and sequence item 2",
		 categories: []
	},
	{
		 test: testGreenClickAndSequenceItem3,
		 name: "testGreenClickAndSequenceItem3",
		 description: "Test green click and sequence item 3",
		 categories: []
	},
	{
		 test: testYellowClickAndSequenceItem4,
		 name: "testYellowClickAndSequenceItem4",
		 description: "Test yellow click and sequence item 4",
		 categories: []
	},
	{
		 test: testGameOverRoutine,
		 name: "testGameOverRoutine",
		 description: "Test Game Over routine",
		 categories: []
	},
]
