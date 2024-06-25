const test1 = async function (t) {
    t.seedScratch(1234);
    await t.runForTime(1000);
    t.clickSprite('Abby');
    await t.runForTime(1000);
    const username = t.getGlobalVariable('username');
    const adjectives = t.getSpriteVariable('Abby', 'adjective list');
    const nouns = t.getSpriteVariable('Abby', 'nouns list');
    const [adjective, noun] = username.split(' ');
    t.assert.ok(adjectives.includes(adjective), 'Username contains a valid adjective');
    t.assert.ok(nouns.includes(noun), 'Username contains a valid noun');
    t.end();
}

const test2 = async function (t) {
    t.seedScratch(1234);
    await t.runForTime(1000);
    t.clickSprite('Abby');
    await t.runForTime(1000);
    const username = t.getGlobalVariable('username');
    const abby = t.getSprite('Abby');
    t.assert.equal(abby.sayText, username, 'Abby says the generated username');
    t.end();
}

const test3 = async function (t) {
    t.seedScratch(1234);
    await t.runForTime(1000);
    t.clickSprite('Abby');
    await t.runForTime(1000);
    t.clickSprite('Button4');
    await t.runForTime(1000);
    const username = t.getGlobalVariable('username');
    const button4 = t.getSprite('Button4');
    const namesILike = button4.getList('names i like');
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
