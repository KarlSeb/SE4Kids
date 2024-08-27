const test1 = async function (t) {
    t.seedScratch(12345);
    await t.runForTime(1000);
    const abby = t.getSprite('Abby');
    const adjectives = abby.getList('adjectives', true).value;
    const nouns = abby.getList('nouns', true).value;
    t.clickSprite('Abby');
    await t.runForTime(1000);
    const username = t.getGlobalVariable('username');
    const adjective = username.slice(0, adjectives[0].length);
    const noun = username.slice(adjectives[0].length);
    t.assert.ok(adjectives.includes(adjective), 'Adjective is from the list');
    t.assert.ok(nouns.includes(noun), 'Noun is from the list');
    t.end();
}

const test2 = async function (t) {
    t.seedScratch(12345);
    await t.runForTime(1000);
    const abby = t.getSprite('Abby');
    t.clickSprite('Abby');
    await t.runForTime(1000);
    const username = t.getGlobalVariable('username');
    t.assert.equal(abby.sayText, username, 'Abby says the generated username');
    t.end();
}

const test3 = async function (t) {
    t.seedScratch(12345);
    await t.runForTime(1000);
    const abby = t.getSprite('Abby');
    const button4 = t.getSprite('Button4');
    t.clickSprite('Abby');
    await t.runForTime(1000);
    const username = t.getGlobalVariable('username');
    t.clickSprite('Button4');
    await t.runForTime(1000);
    const namesILike = abby.getList('names i like', true).value;
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
