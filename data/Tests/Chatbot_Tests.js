const testNanoStartCostume = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Nano').currentCostume === 0, 5000);
    const nano = t.getSprite('Nano');
    t.assert.strictEqual(nano.getCostumeByIndex(nano.currentCostume).name, 'nano-a', 'Nano should start with costume nano-a');
    t.end();
};

const testNanoClickCostumeChange = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Nano').currentCostume === 0, 5000);
    t.clickSprite('Nano');
    await t.runForTime(1000);
    const nano = t.getSprite('Nano');
    t.assert.strictEqual(nano.getCostumeByIndex(nano.currentCostume).name, 'nano-b', 'Nano should change to costume nano-b when clicked');
    t.end();
};

const testStageCostumeChangeOnNanoClick = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Nano').currentCostume === 0, 5000);
    t.clickSprite('Nano');
    await t.runForTime(1000);
    const stage = t.getStage();
    t.assert.strictEqual(stage.getCostumeByIndex(stage.currentCostume).name, 'space', 'Stage costume should change to space when Nano is clicked');
    t.end();
};

const testNanoAsksName = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Nano').currentCostume === 0, 5000);
    t.clickSprite('Nano');
    await t.runForTime(1000);
    const nano = t.getSprite('Nano');
    t.assert.strictEqual(nano.sayText, "What's your name?", "Nano should ask 'What's your name?' after being clicked");
    t.end();
};

const testNameStoredInGlobalVariable = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Nano').currentCostume === 0, 5000);
    t.clickSprite('Nano');
    await t.runForTime(1000);
    t.typeText('Alice');
    await t.runForTime(1000);
    const name = t.getGlobalVariable('name');
    t.assert.strictEqual(name.value, 'Alice', "The answer to 'What's your name?' should be stored in the global variable 'name'");
    t.end();
};

const testNanoSaysHi = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Nano').currentCostume === 0, 5000);
    t.clickSprite('Nano');
    await t.runForTime(1000);
    t.typeText('Alice');
    await t.runForTime(1000);
    const nano = t.getSprite('Nano');
    t.assert.strictEqual(nano.sayText, 'Hi Alice', "Nano should say 'Hi [name]' after the name is answered");
    t.end();
};

const testNanoAsksAreYouOK = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Nano').currentCostume === 0, 5000);
    t.clickSprite('Nano');
    await t.runForTime(1000);
    t.typeText('Alice');
    await t.runForTime(3000);
    const nano = t.getSprite('Nano');
    t.assert.strictEqual(nano.sayText, 'Are you OK Alice', "Nano should ask 'Are you OK [name]' after saying 'Hi [name]'");
    t.end();
};

const testNanoCostumeChangeToC = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Nano').currentCostume === 0, 5000);
    t.clickSprite('Nano');
    await t.runForTime(1000);
    t.typeText('Alice');
    await t.runForTime(3000);
    t.typeText('yes');
    await t.runForTime(1000);
    const nano = t.getSprite('Nano');
    t.assert.strictEqual(nano.getCostumeByIndex(nano.currentCostume).name, 'nano-c', "Nano's costume should change to 'nano-c' if the answer to 'Are you OK [name]' is 'yes'");
    t.end();
};

const testNanoSaysGreatToHear = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Nano').currentCostume === 0, 5000);
    t.clickSprite('Nano');
    await t.runForTime(1000);
    t.typeText('Alice');
    await t.runForTime(3000);
    t.typeText('yes');
    await t.runForTime(1000);
    const nano = t.getSprite('Nano');
    t.assert.strictEqual(nano.sayText, "That's great to hear!", "Nano should say 'That's great to hear!' if the answer to 'Are you OK [name]' is 'yes'");
    t.end();
};

const testNanoCostumeChangeToD = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Nano').currentCostume === 0, 5000);
    t.clickSprite('Nano');
    await t.runForTime(1000);
    t.typeText('Alice');
    await t.runForTime(3000);
    t.typeText('no');
    await t.runForTime(1000);
    const nano = t.getSprite('Nano');
    t.assert.strictEqual(nano.getCostumeByIndex(nano.currentCostume).name, 'nano-d', "Nano's costume should change to 'nano-d' if the answer to 'Are you OK [name]' is not 'yes'");
    t.end();
};

const testNanoSaysOhNo = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Nano').currentCostume === 0, 5000);
    t.clickSprite('Nano');
    await t.runForTime(1000);
    t.typeText('Alice');
    await t.runForTime(3000);
    t.typeText('no');
    await t.runForTime(1000);
    const nano = t.getSprite('Nano');
    t.assert.strictEqual(nano.sayText, 'Oh no!', "Nano should say 'Oh no!' if the answer to 'Are you OK [name]' is not 'yes'");
    t.end();
};

const testNanoCostumeChangeBackToB = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Nano').currentCostume === 0, 5000);
    t.clickSprite('Nano');
    await t.runForTime(1000);
    t.typeText('Alice');
    await t.runForTime(3000);
    t.typeText('no');
    await t.runForTime(3000);
    const nano = t.getSprite('Nano');
    t.assert.strictEqual(nano.getCostumeByIndex(nano.currentCostume).name, 'nano-b', "Nano's costume should change back to 'nano-b'");
    t.end();
};

const testNanoAsksGoToMoon = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Nano').currentCostume === 0, 5000);
    t.clickSprite('Nano');
    await t.runForTime(1000);
    t.typeText('Alice');
    await t.runForTime(3000);
    t.typeText('no');
    await t.runForTime(3000);
    const nano = t.getSprite('Nano');
    t.assert.strictEqual(nano.sayText, 'Do you want to go to the moon?', "Nano should ask 'Do you want to go to the moon?'");
    t.end();
};

const testStageCostumeChangeToMoon = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Nano').currentCostume === 0, 5000);
    t.clickSprite('Nano');
    await t.runForTime(1000);
    t.typeText('Alice');
    await t.runForTime(3000);
    t.typeText('no');
    await t.runForTime(3000);
    t.typeText('yes');
    await t.runForTime(1000);
    const stage = t.getStage();
    t.assert.strictEqual(stage.getCostumeByIndex(stage.currentCostume).name, 'moon', "Stage costume should change to 'moon' if the answer to 'Do you want to go to the moon?' is 'yes'");
    t.end();
};

const testNanoMovesUpDown = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Nano').currentCostume === 0, 5000);
    t.clickSprite('Nano');
    await t.runForTime(1000);
    t.typeText('Alice');
    await t.runForTime(3000);
    t.typeText('no');
    await t.runForTime(3000);
    t.typeText('yes');
    await t.runForTime(1000);
    const nano = t.getSprite('Nano');
    const initialY = nano.y;
    for (let i = 0; i < 4; i++) {
        await t.runForTime(100);
        t.assert.notStrictEqual(nano.y, initialY, 'Nano should move up');
        await t.runForTime(100);
        t.assert.strictEqual(nano.y, initialY, 'Nano should move down');
    }
    t.end();
};

const testProgramEndsIfNotYes = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Nano').currentCostume === 0, 5000);
    t.clickSprite('Nano');
    await t.runForTime(1000);
    t.typeText('Alice');
    await t.runForTime(3000);
    t.typeText('no');
    await t.runForTime(3000);
    const nano = t.getSprite('Nano');
    t.assert.strictEqual(nano.sayText, '', 'Program should end if the answer to Do you want to go to the moon? is not yes');
    t.end();
};

module.exports = [
	{
		 test: testNanoStartCostume,
		 name: "testNanoStartCostume",
		 description: "At the start Nano has costume 'nano-a'",
		 categories: []
	},
	{
		 test: testNanoClickCostumeChange,
		 name: "testNanoClickCostumeChange",
		 description: "When Nano is clicked the costume changes to 'nano-b'",
		 categories: []
	},
	{
		 test: testStageCostumeChangeOnNanoClick,
		 name: "testStageCostumeChangeOnNanoClick",
		 description: "When Nano is clicked the stage costume is set to 'space'",
		 categories: []
	},
	{
		 test: testNanoAsksName,
		 name: "testNanoAsksName",
		 description: "After Nano is clicked Nano asks 'What's your name?'",
		 categories: []
	},
	{
		 test: testNameStoredInGlobalVariable,
		 name: "testNameStoredInGlobalVariable",
		 description: "After the question 'What's your name?' is answered the answer is stored in the global variable 'name'",
		 categories: []
	},
	{
		 test: testNanoSaysHi,
		 name: "testNanoSaysHi",
		 description: "After the question 'What's your name?' is answered Nano says 'Hi [name]' for 2 seconds",
		 categories: []
	},
	{
		 test: testNanoAsksAreYouOK,
		 name: "testNanoAsksAreYouOK",
		 description: "Then Nano asks 'Are you OK [name]'",
		 categories: []
	},
	{
		 test: testNanoCostumeChangeToC,
		 name: "testNanoCostumeChangeToC",
		 description: "If the answer to 'Are you OK [name]' is 'yes' Nano's costume changes to 'nano-c'",
		 categories: []
	},
	{
		 test: testNanoSaysGreatToHear,
		 name: "testNanoSaysGreatToHear",
		 description: "If the answer to 'Are you OK [name]' is 'yes' Nano says 'That's great to hear!' for 2 seconds",
		 categories: []
	},
	{
		 test: testNanoCostumeChangeToD,
		 name: "testNanoCostumeChangeToD",
		 description: "If the answer to 'Are you OK [name]' is not 'yes' Nano's costume changes to 'nano-d'",
		 categories: []
	},
	{
		 test: testNanoSaysOhNo,
		 name: "testNanoSaysOhNo",
		 description: "If the answer to 'Are you OK [name]' is not 'yes' Nano says 'Oh no!' for 2 seconds",
		 categories: []
	},
	{
		 test: testNanoCostumeChangeBackToB,
		 name: "testNanoCostumeChangeBackToB",
		 description: "Then Nano's costume changes to 'nano-b'",
		 categories: []
	},
	{
		 test: testNanoAsksGoToMoon,
		 name: "testNanoAsksGoToMoon",
		 description: "Nano then asks 'Do you want to go to the moon?'",
		 categories: []
	},
	{
		 test: testStageCostumeChangeToMoon,
		 name: "testStageCostumeChangeToMoon",
		 description: "If the answer to 'Do you want to go to the moon?' is 'yes' the stage costume changes to 'moon'",
		 categories: []
	},
	{
		 test: testNanoMovesUpDown,
		 name: "testNanoMovesUpDown",
		 description: "If the answer to 'Do you want to go to the moon?' is 'yes' Nano moves up, waits 0.1 seconds, moves down and waits 0.1 seconds for 4 times",
		 categories: []
	},
	{
		 test: testProgramEndsIfNotYes,
		 name: "testProgramEndsIfNotYes",
		 description: "If the answer to 'Do you want to go to the moon?' is not 'yes' the program ends",
		 categories: []
	},
]
