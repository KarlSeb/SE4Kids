const test1 = async function (t) {
    t.seedScratch(12345);
    const abby = await t.getSprite('Abby');
    const adjectives = await abby.getList('adjectives', true);
    const nouns = await abby.getList('nouns', true);
    await t.clickSprite('Abby');
    await t.runForTime(1000);
    const username = await t.getGlobalVariable('username');
    const [adj, noun] = username.split(' ');
    t.assert.ok(adjectives.includes(adj), 'Username should contain an adjective from the list');
    t.assert.ok(nouns.includes(noun), 'Username should contain a noun from the list');
    t.end();
}

const test2 = async function (t) {
    t.seedScratch(12345);
    const abby = await t.getSprite('Abby');
    await t.clickSprite('Abby');
    await t.runForTime(1000);
    const username = await t.getGlobalVariable('username');
    t.assert.equal(abby.sayText, username, 'Abby should say the generated username');
    t.end();
}

const test3 = async function (t) {
    t.seedScratch(12345);
    const abby = await t.getSprite('Abby');
    const button4 = await t.getSprite('Button4');
    await t.clickSprite('Abby');
    await t.runForTime(1000);
    const username = await t.getGlobalVariable('username');
    await t.clickSprite('Button4');
    await t.runForTime(1000);
    const namesILike = await button4.getList('names i like', true);
    t.assert.ok(namesILike.includes(username), 'The username should be added to the names i like list');
    t.end();
}

module.exports = [
	{
		 test: test1,
		 name: "test1",
		 description: "Test 1: When Abby is clicked the global variable username is set to a randomly picked item from the 'adjectives' list and an item from the 'nouns' list at a random index between 1 and length of the adjective list",
		 categories: []
	},
	{
		 test: test2,
		 name: "test2",
		 description: "Test 2: When Abby is clicked the generated username is said",
		 categories: []
	},
	{
		 test: test3,
		 name: "test3",
		 description: "Test 3: When Button4 is clicked the current value of username is added to the 'names i like' list",
		 categories: []
	},
]
