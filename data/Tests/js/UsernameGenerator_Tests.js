const test1 = async function (t) {
    t.seedScratch(12345);
    await t.runForTime(1000);
    const abby = await t.getSprite('Abby');
    const adjectives = await t.getSpriteVariable('Stage', 'adjectives');
    const nouns = await t.getSpriteVariable('Stage', 'nouns');
    await t.clickSprite('Abby');
    await t.runForTime(1000);
    const username = await t.getGlobalVariable('username');
    const adjective = username.slice(0, adjectives[0].length);
    const noun = username.slice(adjectives[0].length);
    t.assert.ok(adjectives.includes(adjective), 'Adjective is from the adjectives list');
    t.assert.ok(nouns.includes(noun), 'Noun is from the nouns list');
    t.end();
}

const test2 = async function (t) {
    t.seedScratch(12345);
    await t.runForTime(1000);
    const abby = await t.getSprite('Abby');
    await t.clickSprite('Abby');
    await t.runForTime(1000);
    const username = await t.getGlobalVariable('username');
    t.assert.equal(abby.sayText, username, 'Abby says the generated username');
    t.end();
}

const test3 = async function (t) {
    t.seedScratch(12345);
    await t.runForTime(1000);
    const abby = await t.getSprite('Abby');
    const button4 = await t.getSprite('Button4');
    await t.clickSprite('Abby');
    await t.runForTime(1000);
    const username = await t.getGlobalVariable('username');
    await t.clickSprite('Button4');
    await t.runForTime(1000);
    const namesILike = await t.getSpriteVariable('Stage', 'names i like');
    t.assert.ok(namesILike.includes(username), 'Username is added to the names i like list');
    t.end();
}

module.exports = [
	{
		 test: test1,
		 name: "test1",
		 description: "Test 1: Abby click sets global variable username",
		 categories: []
	},
	{
		 test: test2,
		 name: "test2",
		 description: "Test 2: Abby click makes Abby say the generated username",
		 categories: []
	},
	{
		 test: test3,
		 name: "test3",
		 description: "Test 3: Button4 click adds username to 'names i like' list",
		 categories: []
	},
]
