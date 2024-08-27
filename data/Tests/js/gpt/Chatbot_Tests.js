const testNanoStartCostume = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Nano').currentCostume === t.getSprite('Nano').getCostumeByName('nano-a').index, 5000);
    const nano = t.getSprite('Nano');
    t.assert.strictEqual(nano.getCostumeByIndex(nano.currentCostume).name, 'nano-a', 'Nano should start with costume nano-a');
    t.end();
}

const testNanoClickCostumeChange = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Nano').currentCostume === t.getSprite('Nano').getCostumeByName('nano-a').index, 5000);
    t.clickSprite('Nano');
    await t.runUntil(() => t.getSprite('Nano').currentCostume === t.getSprite('Nano').getCostumeByName('nano-b').index, 5000);
    const nano = t.getSprite('Nano');
    t.assert.strictEqual(nano.getCostumeByIndex(nano.currentCostume).name, 'nano-b', 'Nano should change to costume nano-b when clicked');
    t.end();
}

const testStageCostumeChangeOnNanoClick = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Nano').currentCostume === t.getSprite('Nano').getCostumeByName('nano-a').index, 5000);
    t.clickSprite('Nano');
    await t.runUntil(() => t.getStage().currentCostume === t.getStage().getCostumeByName('space').index, 5000);
    const stage = t.getStage();
    t.assert.strictEqual(stage.getCostumeByIndex(stage.currentCostume).name, 'space', 'Stage costume should change to space when Nano is clicked');
    t.end();
}

const testNanoAsksName = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Nano');
    await t.runUntil(() => t.getSprite('Nano').sayText === "What's your name?", 5000);
    t.assert.equal(t.getSprite('Nano').sayText, "What's your name?", "Nano should ask 'What's your name?' after being clicked");
    t.end();
}

const testStoreNameInGlobalVariable = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Nano');
    await t.runUntil(() => t.getSprite('Nano').sayText === "What's your name?", 5000);
    t.typeText('Alice');
    await t.runForTime(1000);
    t.assert.equal(t.getGlobalVariable('name').value, 'Alice', "The answer to 'What's your name?' should be stored in the global variable 'name'");
    t.end();
}

const testNanoSaysHi = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Nano');
    await t.runUntil(() => t.getSprite('Nano').sayText === "What's your name?", 5000);
    t.typeText('Alice');
    await t.runForTime(1000);
    await t.runUntil(() => t.getSprite('Nano').sayText === 'Hi Alice', 5000);
    t.assert.equal(t.getSprite('Nano').sayText, 'Hi Alice', "Nano should say 'Hi [name]' for 2 seconds after 'What's your name?' is answered");
    t.end();
}

const testNanoAsksAreYouOK = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Nano');
    await t.runUntil(() => t.getSprite('Nano').sayText === "What's your name?", 5000);
    t.typeText('Alice');
    await t.runForTime(1000);
    await t.runUntil(() => t.getSprite('Nano').sayText === 'Hi Alice', 5000);
    await t.runForTime(2000);
    await t.runUntil(() => t.getSprite('Nano').sayText === 'Are you OK Alice', 5000);
    t.assert.equal(t.getSprite('Nano').sayText, 'Are you OK Alice', "Nano should ask 'Are you OK [name]' after saying 'Hi [name]'");
    t.end();
}

const testNanoCostumeChangeYes = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Nano');
    await t.runUntil(() => t.getSprite('Nano').sayText === "What's your name?", 5000);
    t.typeText('Alice');
    await t.runForTime(1000);
    await t.runUntil(() => t.getSprite('Nano').sayText === 'Hi Alice', 5000);
    await t.runForTime(2000);
    await t.runUntil(() => t.getSprite('Nano').sayText === 'Are you OK Alice', 5000);
    t.typeText('yes');
    await t.runForTime(1000);
    t.assert.equal(t.getSprite('Nano').currentCostume.name, 'nano-c', "Nano's costume should change to 'nano-c' if the answer to 'Are you OK [name]' is 'yes'");
    t.end();
}

const testNanoSaysGreatToHear = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Nano');
    await t.runUntil(() => t.getSprite('Nano').sayText === "What's your name?", 5000);
    t.typeText('Alice');
    await t.runForTime(1000);
    await t.runUntil(() => t.getSprite('Nano').sayText === 'Hi Alice', 5000);
    await t.runForTime(2000);
    await t.runUntil(() => t.getSprite('Nano').sayText === 'Are you OK Alice', 5000);
    t.typeText('yes');
    await t.runForTime(1000);
    await t.runUntil(() => t.getSprite('Nano').sayText === "That's great to hear!", 5000);
    t.assert.equal(t.getSprite('Nano').sayText, "That's great to hear!", "Nano should say 'That's great to hear!' for 2 seconds if the answer to 'Are you OK [name]' is 'yes'");
    t.end();
}

const testNanoCostumeChangeNo = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Nano');
    await t.runUntil(() => t.getSprite('Nano').sayText === "What's your name?", 5000);
    t.typeText('Alice');
    await t.runForTime(1000);
    await t.runUntil(() => t.getSprite('Nano').sayText === 'Hi Alice', 5000);
    await t.runForTime(2000);
    await t.runUntil(() => t.getSprite('Nano').sayText === 'Are you OK Alice', 5000);
    t.typeText('no');
    await t.runForTime(1000);
    t.assert.equal(t.getSprite('Nano').currentCostume.name, 'nano-d', "Nano's costume should change to 'nano-d' if the answer to 'Are you OK [name]' is not 'yes'");
    t.end();
}

const testNanoSaysOhNo = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Nano');
    await t.runUntil(() => t.getSprite('Nano').sayText === "What's your name?", 5000);
    t.typeText('Alice');
    await t.runForTime(1000);
    await t.runUntil(() => t.getSprite('Nano').sayText === 'Hi Alice', 5000);
    await t.runForTime(2000);
    await t.runUntil(() => t.getSprite('Nano').sayText === 'Are you OK Alice', 5000);
    t.typeText('no');
    await t.runForTime(1000);
    await t.runUntil(() => t.getSprite('Nano').sayText === 'Oh no!', 5000);
    t.assert.equal(t.getSprite('Nano').sayText, 'Oh no!', "Nano should say 'Oh no!' for 2 seconds if the answer to 'Are you OK [name]' is not 'yes'");
    t.end();
}

const testNanoCostumeChangeAfterOhNo = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Nano');
    await t.runUntil(() => t.getSprite('Nano').sayText === "What's your name?", 5000);
    t.typeText('Alice');
    await t.runForTime(1000);
    await t.runUntil(() => t.getSprite('Nano').sayText === 'Hi Alice', 5000);
    await t.runForTime(2000);
    await t.runUntil(() => t.getSprite('Nano').sayText === 'Are you OK Alice', 5000);
    t.typeText('no');
    await t.runForTime(1000);
    await t.runUntil(() => t.getSprite('Nano').sayText === 'Oh no!', 5000);
    await t.runForTime(2000);
    t.assert.equal(t.getSprite('Nano').currentCostume.name, 'nano-b', "Nano's costume should change to 'nano-b' after saying 'Oh no!' for 2 seconds");
    t.end();
}

const testNanoAsksGoToMoon = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Nano');
    await t.runUntil(() => t.getSprite('Nano').sayText === "What's your name?", 5000);
    t.typeText('Alice');
    await t.runForTime(1000);
    await t.runUntil(() => t.getSprite('Nano').sayText === 'Hi Alice', 5000);
    await t.runForTime(2000);
    await t.runUntil(() => t.getSprite('Nano').sayText === 'Are you OK Alice', 5000);
    t.typeText('yes');
    await t.runForTime(1000);
    await t.runUntil(() => t.getSprite('Nano').sayText === "That's great to hear!", 5000);
    await t.runForTime(2000);
    await t.runUntil(() => t.getSprite('Nano').sayText === 'Do you want to go to the moon?', 5000);
    t.assert.equal(t.getSprite('Nano').sayText, 'Do you want to go to the moon?', "Nano should ask 'Do you want to go to the moon?' after responding to 'Are you OK [name]'");
    t.end();
}

const testStageCostumeChangeMoon = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Nano');
    await t.runUntil(() => t.getSprite('Nano').sayText === "What's your name?", 5000);
    t.typeText('Alice');
    await t.runForTime(1000);
    await t.runUntil(() => t.getSprite('Nano').sayText === 'Hi Alice', 5000);
    await t.runForTime(2000);
    await t.runUntil(() => t.getSprite('Nano').sayText === 'Are you OK Alice', 5000);
    t.typeText('yes');
    await t.runForTime(1000);
    await t.runUntil(() => t.getSprite('Nano').sayText === "That's great to hear!", 5000);
    await t.runForTime(2000);
    await t.runUntil(() => t.getSprite('Nano').sayText === 'Do you want to go to the moon?', 5000);
    t.typeText('yes');
    await t.runForTime(1000);
    t.assert.equal(t.getStage().currentCostume.name, 'moon', "Stage costume should change to 'moon' if the answer to 'Do you want to go to the moon?' is 'yes'");
    t.end();
}

const testNanoMovesUpDown = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Nano');
    await t.runUntil(() => t.getSprite('Nano').sayText === "What's your name?", 5000);
    t.typeText('Alice');
    await t.runForTime(1000);
    await t.runUntil(() => t.getSprite('Nano').sayText === 'Hi Alice', 5000);
    await t.runForTime(2000);
    await t.runUntil(() => t.getSprite('Nano').sayText === 'Are you OK Alice', 5000);
    t.typeText('yes');
    await t.runForTime(1000);
    await t.runUntil(() => t.getSprite('Nano').sayText === "That's great to hear!", 5000);
    await t.runForTime(2000);
    await t.runUntil(() => t.getSprite('Nano').sayText === 'Do you want to go to the moon?', 5000);
    t.typeText('yes');
    await t.runForTime(1000);
    const initialY = t.getSprite('Nano').y;
    for (let i = 0; i < 4; i++) {
        await t.runForTime(100);
        t.assert.notEqual(t.getSprite('Nano').y, initialY, "Nano should move up and down");
        await t.runForTime(100);
        t.assert.equal(t.getSprite('Nano').y, initialY, "Nano should move up and down");
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
		 test: testNanoAsksName,
		 name: "testNanoAsksName",
		 description: "Nano asks 'What's your name?' after being clicked",
		 categories: []
	},
	{
		 test: testStoreNameInGlobalVariable,
		 name: "testStoreNameInGlobalVariable",
		 description: "Answer to 'What's your name?' is stored in global variable 'name'",
		 categories: []
	},
	{
		 test: testNanoSaysHi,
		 name: "testNanoSaysHi",
		 description: "Nano says 'Hi [name]' for 2 seconds after 'What's your name?' is answered",
		 categories: []
	},
	{
		 test: testNanoAsksAreYouOK,
		 name: "testNanoAsksAreYouOK",
		 description: "Nano asks 'Are you OK [name]' after saying 'Hi [name]'",
		 categories: []
	},
	{
		 test: testNanoCostumeChangeYes,
		 name: "testNanoCostumeChangeYes",
		 description: "Nano changes costume to 'nano-c' if answer to 'Are you OK [name]' is 'yes'",
		 categories: []
	},
	{
		 test: testNanoSaysGreatToHear,
		 name: "testNanoSaysGreatToHear",
		 description: "Nano says 'That's great to hear!' for 2 seconds if answer to 'Are you OK [name]' is 'yes'",
		 categories: []
	},
	{
		 test: testNanoCostumeChangeNo,
		 name: "testNanoCostumeChangeNo",
		 description: "Nano changes costume to 'nano-d' if answer to 'Are you OK [name]' is not 'yes'",
		 categories: []
	},
	{
		 test: testNanoSaysOhNo,
		 name: "testNanoSaysOhNo",
		 description: "Nano says 'Oh no!' for 2 seconds if answer to 'Are you OK [name]' is not 'yes'",
		 categories: []
	},
	{
		 test: testNanoCostumeChangeAfterOhNo,
		 name: "testNanoCostumeChangeAfterOhNo",
		 description: "Nano changes costume to 'nano-b' after saying 'Oh no!' for 2 seconds",
		 categories: []
	},
	{
		 test: testNanoAsksGoToMoon,
		 name: "testNanoAsksGoToMoon",
		 description: "Nano asks 'Do you want to go to the moon?' after responding to 'Are you OK [name]'",
		 categories: []
	},
	{
		 test: testStageCostumeChangeMoon,
		 name: "testStageCostumeChangeMoon",
		 description: "Stage costume changes to 'moon' if answer to 'Do you want to go to the moon?' is 'yes'",
		 categories: []
	},
	{
		 test: testNanoMovesUpDown,
		 name: "testNanoMovesUpDown",
		 description: "Nano moves up and down 4 times if answer to 'Do you want to go to the moon?' is 'yes'",
		 categories: []
	},
]
