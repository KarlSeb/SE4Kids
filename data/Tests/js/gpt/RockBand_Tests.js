const testDrumStartCostume = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Drum').getCostumeByName('drum-a'), 5000);
    const drum = t.getSprite('Drum');
    t.assert.strictEqual(drum.currentCostume.name, 'drum-a', 'Drum should start with costume drum-a');
    t.end();
}

const testDrumSpacePress = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Drum').getCostumeByName('drum-a'), 5000);
    t.keyPress('space');
    await t.runUntil(() => t.getSprite('Drum').getCostumeByName('drum-b'), 5000);
    const drum = t.getSprite('Drum');
    t.assert.strictEqual(drum.currentCostume.name, 'drum-b', 'Drum should switch to costume drum-b when space is pressed');
    await t.runUntil(() => t.getSprite('Drum').getCostumeByName('drum-a'), 5000);
    t.assert.strictEqual(drum.currentCostume.name, 'drum-a', 'Drum should switch back to costume drum-a');
    t.end();
}

const testDrumClick = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Drum').getCostumeByName('drum-a'), 5000);
    t.clickSprite('Drum');
    await t.runUntil(() => t.getSprite('Drum').getCostumeByName('drum-b'), 5000);
    const drum = t.getSprite('Drum');
    t.assert.strictEqual(drum.currentCostume.name, 'drum-b', 'Drum should switch to costume drum-b when clicked');
    await t.runUntil(() => t.getSprite('Drum').getCostumeByName('drum-a'), 5000);
    t.assert.strictEqual(drum.currentCostume.name, 'drum-a', 'Drum should switch back to costume drum-a');
    t.end();
}

const testSinger1StartCostume = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Singer1').getCostumeByName('not singing'), 5000);
    const singer1 = t.getSprite('Singer1');
    t.assert.strictEqual(singer1.currentCostume.name, 'not singing', 'Singer1 should start with costume not singing');
    t.end();
}

const testSinger1Click = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Singer1').getCostumeByName('not singing'), 5000);
    t.clickSprite('Singer1');
    await t.runUntil(() => t.getSprite('Singer1').getCostumeByName('singing'), 5000);
    const singer1 = t.getSprite('Singer1');
    t.assert.strictEqual(singer1.currentCostume.name, 'singing', 'Singer1 should switch to costume singing when clicked');
    await t.runUntil(() => t.getSprite('Singer1').getCostumeByName('not singing'), 5000);
    t.assert.strictEqual(singer1.currentCostume.name, 'not singing', 'Singer1 should switch back to costume not singing');
    t.end();
}

const testDrumCymbalStartCostume = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Drum-cymbal').getCostumeByName('drum-cymbal-a'), 5000);
    const drumCymbal = t.getSprite('Drum-cymbal');
    t.assert.strictEqual(drumCymbal.currentCostume.name, 'drum-cymbal-a', 'Drum-cymbal should start with costume drum-cymbal-a');
    t.end();
}

const testDrumCymbalClick = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Drum-cymbal').getCostumeByName('drum-cymbal-a'), 5000);
    t.clickSprite('Drum-cymbal');
    await t.runUntil(() => t.getSprite('Drum-cymbal').getCostumeByName('drum-cymbal-b'), 5000);
    const drumCymbal = t.getSprite('Drum-cymbal');
    t.assert.strictEqual(drumCymbal.currentCostume.name, 'drum-cymbal-b', 'Drum-cymbal should switch to costume drum-cymbal-b when clicked');
    await t.runUntil(() => t.getSprite('Drum-cymbal').getCostumeByName('drum-cymbal-a'), 5000);
    t.assert.strictEqual(drumCymbal.currentCostume.name, 'drum-cymbal-a', 'Drum-cymbal should switch back to costume drum-cymbal-a');
    t.end();
}

module.exports = [
	{
		 test: testDrumStartCostume,
		 name: "testDrumStartCostume",
		 description: "Drum starts with costume 'drum-a'",
		 categories: []
	},
	{
		 test: testDrumSpacePress,
		 name: "testDrumSpacePress",
		 description: "Drum switches costume to 'drum-b' and back to 'drum-a' when space is pressed",
		 categories: []
	},
	{
		 test: testDrumClick,
		 name: "testDrumClick",
		 description: "Drum switches costume to 'drum-b' and back to 'drum-a' when clicked",
		 categories: []
	},
	{
		 test: testSinger1StartCostume,
		 name: "testSinger1StartCostume",
		 description: "Singer1 starts with costume 'not singing'",
		 categories: []
	},
	{
		 test: testSinger1Click,
		 name: "testSinger1Click",
		 description: "Singer1 switches costume to 'singing' and back to 'not singing' when clicked",
		 categories: []
	},
	{
		 test: testDrumCymbalStartCostume,
		 name: "testDrumCymbalStartCostume",
		 description: "Drum-cymbal starts with costume 'drum-cymbal-a'",
		 categories: []
	},
	{
		 test: testDrumCymbalClick,
		 name: "testDrumCymbalClick",
		 description: "Drum-cymbal switches costume to 'drum-cymbal-b' and back to 'drum-cymbal-a' when clicked",
		 categories: []
	},
]
