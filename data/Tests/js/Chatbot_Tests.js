const testNanoStartCostume = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Nano').currentCostume.name === 'nano-a', 5000);
    const nano = t.getSprite('Nano');
    t.assert.strictEqual(nano.currentCostume.name, 'nano-a', 'Nano should start with costume nano-a');
    t.end();
}

const testNanoClickCostumeChange = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Nano').currentCostume.name === 'nano-a', 5000);
    t.clickSprite('Nano');
    await t.runUntil(() => t.getSprite('Nano').currentCostume.name === 'nano-b', 5000);
    const nano = t.getSprite('Nano');
    t.assert.strictEqual(nano.currentCostume.name, 'nano-b', 'Nano should change to costume nano-b when clicked');
    t.end();
}

const testStageCostumeChangeOnNanoClick = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Nano').currentCostume.name === 'nano-a', 5000);
    t.clickSprite('Nano');
    await t.runUntil(() => t.getStage().currentCostume.name === 'space', 5000);
    const stage = t.getStage();
    t.assert.strictEqual(stage.currentCostume.name, 'space', 'Stage costume should change to space when Nano is clicked');
    t.end();
}

const testNanoAsksNameOnClick = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Nano').currentCostume.name === 'nano-a', 5000);
    t.clickSprite('Nano');
    await t.runUntil(() => t.getSprite('Nano').sayText === "What's your name?", 5000);
    const nano = t.getSprite('Nano');
    t.assert.strictEqual(nano.sayText, "What's your name?", "Nano should ask 'What's your name?' when clicked");
    t.end();
}

const testAnswerStoredInGlobalVariable = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Nano').currentCostume.name === 'nano-a', 5000);
    t.clickSprite('Nano');
    await t.runUntil(() => t.getSprite('Nano').sayText === "What's your name?", 5000);
    t.typeText('Alice');
    await t.runForTime(1000);
    const nameVar = t.getGlobalVariable('name');
    t.assert.strictEqual(nameVar.value, 'Alice', "The answer to 'What's your name?' should be stored in the global variable 'name'");
    t.end();
}

const testNanoSaysHiAfterNameAnswer = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Nano').currentCostume.name === 'nano-a', 5000);
    t.clickSprite('Nano');
    await t.runUntil(() => t.getSprite('Nano').sayText === "What's your name?", 5000);
    t.typeText('Alice');
    await t.runForTime(1000);
    await t.runUntil(() => t.getSprite('Nano').sayText === 'Hi Alice', 5000);
    const nano = t.getSprite('Nano');
    t.assert.strictEqual(nano.sayText, 'Hi Alice', "Nano should say 'Hi Alice' after answering 'What's your name?'");
    await t.runForTime(2000);
    t.assert.strictEqual(nano.sayText, '', "Nano should stop saying 'Hi Alice' after 2 seconds");
    t.end();
}

const testNanoAsksAreYouOkAfterHi = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Nano').currentCostume.name === 'nano-a', 5000);
    t.clickSprite('Nano');
    await t.runUntil(() => t.getSprite('Nano').sayText === "What's your name?", 5000);
    t.typeText('Alice');
    await t.runForTime(1000);
    await t.runUntil(() => t.getSprite('Nano').sayText === 'Hi Alice', 5000);
    await t.runForTime(2000);
    await t.runUntil(() => t.getSprite('Nano').sayText === 'Are you OK Alice', 5000);
    const nano = t.getSprite('Nano');
    t.assert.strictEqual(nano.sayText, 'Are you OK Alice', "Nano should ask 'Are you OK Alice' after saying 'Hi Alice'");
    t.end();
}

const test8 = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Nano').sayText.includes('Are you OK'));
    t.typeText('yes');
    await t.runForTime(1000);
    const nano = t.getSprite('Nano');
    t.assert.equal(nano.getCostumeByIndex(nano.currentCostume).name, 'nano-c', 'Nano should change to costume nano-c');
    t.end();
}

const test9 = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Nano').sayText.includes('Are you OK'));
    t.typeText('yes');
    await t.runForTime(1000);
    const nano = t.getSprite('Nano');
    t.assert.equal(nano.sayText, "That's great to hear!", "Nano should say 'That's great to hear!'");
    await t.runForTime(2000);
    t.assert.equal(nano.sayText, '', "Nano should stop saying 'That's great to hear!' after 2 seconds");
    t.end();
}

const test10 = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Nano').sayText.includes('Are you OK'));
    t.typeText('no');
    await t.runForTime(1000);
    const nano = t.getSprite('Nano');
    t.assert.equal(nano.getCostumeByIndex(nano.currentCostume).name, 'nano-d', 'Nano should change to costume nano-d');
    t.end();
}

const test11 = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Nano').sayText.includes('Are you OK'));
    t.typeText('no');
    await t.runForTime(1000);
    const nano = t.getSprite('Nano');
    t.assert.equal(nano.sayText, 'Oh no!', "Nano should say 'Oh no!'");
    await t.runForTime(2000);
    t.assert.equal(nano.sayText, '', "Nano should stop saying 'Oh no!' after 2 seconds");
    t.assert.equal(nano.getCostumeByIndex(nano.currentCostume).name, 'nano-b', 'Nano should change to costume nano-b');
    t.end();
}

const test12 = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Nano').sayText.includes('Do you want to go to the moon?'));
    const nano = t.getSprite('Nano');
    t.assert.equal(nano.sayText, 'Do you want to go to the moon?', "Nano should ask 'Do you want to go to the moon?'");
    t.end();
}

const test13 = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Nano').sayText.includes('Do you want to go to the moon?'));
    t.typeText('yes');
    await t.runForTime(1000);
    const stage = t.getStage();
    t.assert.equal(stage.getCostumeByIndex(stage.currentCostume).name, 'moon', 'Stage should change to costume moon');
    t.end();
}

const test14 = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Nano').sayText.includes('Do you want to go to the moon?'));
    t.typeText('yes');
    await t.runForTime(1000);
    const nano = t.getSprite('Nano');
    const initialY = nano.y;
    for (let i = 0; i < 4; i++) {
        await t.runForTime(100);
        t.assert.notEqual(nano.y, initialY, 'Nano should move up');
        await t.runForTime(100);
        t.assert.equal(nano.y, initialY, 'Nano should move down');
    }
    t.end();
}

module.exports = [
	{
		 test: testNanoStartCostume,
		 name: "testNanoStartCostume",
		 description: "Nano starts with costume 'nano-a'",
		 categories: []
	},
	{
		 test: testNanoClickCostumeChange,
		 name: "testNanoClickCostumeChange",
		 description: "Nano changes to costume 'nano-b' when clicked",
		 categories: []
	},
	{
		 test: testStageCostumeChangeOnNanoClick,
		 name: "testStageCostumeChangeOnNanoClick",
		 description: "Stage costume changes to 'space' when Nano is clicked",
		 categories: []
	},
	{
		 test: testNanoAsksNameOnClick,
		 name: "testNanoAsksNameOnClick",
		 description: "Nano asks 'What's your name?' when clicked",
		 categories: []
	},
	{
		 test: testAnswerStoredInGlobalVariable,
		 name: "testAnswerStoredInGlobalVariable",
		 description: "Answer to 'What's your name?' is stored in global variable 'name'",
		 categories: []
	},
	{
		 test: testNanoSaysHiAfterNameAnswer,
		 name: "testNanoSaysHiAfterNameAnswer",
		 description: "Nano says 'Hi [name]' for 2 seconds after answering 'What's your name?'",
		 categories: []
	},
	{
		 test: testNanoAsksAreYouOkAfterHi,
		 name: "testNanoAsksAreYouOkAfterHi",
		 description: "Nano asks 'Are you OK [name]' after saying 'Hi [name]'",
		 categories: []
	},
	{
		 test: test8,
		 name: "test8",
		 description: "Test 8: If the answer to 'Are you OK [name]' is 'yes' Nanos costume changes to 'nano-c'",
		 categories: []
	},
	{
		 test: test9,
		 name: "test9",
		 description: "Test 9: If the answer to 'Are you OK [name]' is 'yes' Nano says 'That's great to hear!' for 2 seconds",
		 categories: []
	},
	{
		 test: test10,
		 name: "test10",
		 description: "Test 10: If the answer to 'Are you OK [name]' is not 'yes' Nanos costume changes to 'nano-d'",
		 categories: []
	},
	{
		 test: test11,
		 name: "test11",
		 description: "Test 11: If the answer to 'Are you OK [name]' is not 'yes' Nano says 'Oh no!' for 2 seconds, then Nanos costume changes to 'nano-b'",
		 categories: []
	},
	{
		 test: test12,
		 name: "test12",
		 description: "Test 12: Nano then asks 'Do you want to go to the moon?'",
		 categories: []
	},
	{
		 test: test13,
		 name: "test13",
		 description: "Test 13: If the answer to 'Do you want to go to the moon?' is 'yes' the stage costume changes to 'moon'",
		 categories: []
	},
	{
		 test: test14,
		 name: "test14",
		 description: "Test 14: If the answer to 'Do you want to go to the moon?' is 'yes' Nano moves up, waits 0.1 seconds, moves down and waits 0.1 seconds for 4 times",
		 categories: []
	},
]
