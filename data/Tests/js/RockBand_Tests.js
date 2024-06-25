const testDrumStartCostume = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Drum').getCostumeByName('drum-a') !== undefined, 5000);
    const drum = t.getSprite('Drum');
    t.assert.strictEqual(drum.currentCostume, drum.getCostumeByName('drum-a').index, 'Drum should start with costume drum-a');
    t.end();
}

const testDrumSpacePress = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Drum').getCostumeByName('drum-a') !== undefined, 5000);
    t.keyPress('space');
    await t.runForTime(1000);
    const drum = t.getSprite('Drum');
    t.assert.strictEqual(drum.currentCostume, drum.getCostumeByName('drum-b').index, 'Drum should switch to costume drum-b when space is pressed');
    await t.runForTime(1000);
    t.assert.strictEqual(drum.currentCostume, drum.getCostumeByName('drum-a').index, 'Drum should switch back to costume drum-a after space is pressed');
    t.end();
}

const testDrumClick = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Drum').getCostumeByName('drum-a') !== undefined, 5000);
    t.clickSprite('Drum');
    await t.runForTime(1000);
    const drum = t.getSprite('Drum');
    t.assert.strictEqual(drum.currentCostume, drum.getCostumeByName('drum-b').index, 'Drum should switch to costume drum-b when clicked');
    await t.runForTime(1000);
    t.assert.strictEqual(drum.currentCostume, drum.getCostumeByName('drum-a').index, 'Drum should switch back to costume drum-a after being clicked');
    t.end();
}

const testSinger1StartCostume = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Singer1').getCostumeByName('not singing') !== undefined, 5000);
    const singer1 = t.getSprite('Singer1');
    t.assert.strictEqual(singer1.currentCostume, singer1.getCostumeByName('not singing').index, 'Singer1 should start with costume not singing');
    t.end();
}

const testSinger1Click = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Singer1').getCostumeByName('not singing') !== undefined, 5000);
    t.clickSprite('Singer1');
    await t.runForTime(1000);
    const singer1 = t.getSprite('Singer1');
    t.assert.strictEqual(singer1.currentCostume, singer1.getCostumeByName('singing').index, 'Singer1 should switch to costume singing when clicked');
    await t.runForTime(1000);
    t.assert.strictEqual(singer1.currentCostume, singer1.getCostumeByName('not singing').index, 'Singer1 should switch back to costume not singing after being clicked');
    t.end();
}

const testDrumCymbalStartCostume = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Drum-cymbal').getCostumeByName('drum-cymbal-a') !== undefined, 5000);
    const drumCymbal = t.getSprite('Drum-cymbal');
    t.assert.strictEqual(drumCymbal.currentCostume, drumCymbal.getCostumeByName('drum-cymbal-a').index, 'Drum-cymbal should start with costume drum-cymbal-a');
    t.end();
}

const testDrumCymbalClick = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Drum-cymbal').getCostumeByName('drum-cymbal-a') !== undefined, 5000);
    t.clickSprite('Drum-cymbal');
    await t.runForTime(1000);
    const drumCymbal = t.getSprite('Drum-cymbal');
    t.assert.strictEqual(drumCymbal.currentCostume, drumCymbal.getCostumeByName('drum-cymbal-b').index, 'Drum-cymbal should switch to costume drum-cymbal-b when clicked');
    await t.runForTime(1000);
    t.assert.strictEqual(drumCymbal.currentCostume, drumCymbal.getCostumeByName('drum-cymbal-a').index, 'Drum-cymbal should switch back to costume drum-cymbal-a after being clicked');
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
