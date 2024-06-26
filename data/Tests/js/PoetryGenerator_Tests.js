const testAdaSaysHi = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ada');
    await t.runUntil(() => t.getSprite('Ada').sayText === "Hi, I'm Ada!", 2000);
    t.assert.equal(t.getSprite('Ada').sayText, "Hi, I'm Ada!", "Ada should say 'Hi, I'm Ada!'");
    t.end();
}

const testAdaAsksName = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ada');
    await t.runForTime(2000);
    await t.runUntil(() => t.getSprite('Ada').sayText === "What's your name?", 2000);
    t.assert.equal(t.getSprite('Ada').sayText, "What's your name?", "Ada should ask 'What's your name?'");
    t.end();
}

const testAnswerStoredInGlobalVariable = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ada');
    await t.runForTime(4000);
    t.typeText('John');
    await t.runForTime(1000);
    t.assert.equal(t.getGlobalVariable('name'), 'John', "The answer should be stored in the global variable 'name'");
    t.end();
}

const testAdaSaysHiName = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ada');
    await t.runForTime(4000);
    t.typeText('John');
    await t.runForTime(1000);
    await t.runUntil(() => t.getSprite('Ada').sayText === 'Hi John', 2000);
    t.assert.equal(t.getSprite('Ada').sayText, 'Hi John', "Ada should say 'Hi John'");
    t.end();
}

const testAdaSaysClickComputer = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ada');
    await t.runForTime(6000);
    t.typeText('John');
    await t.runForTime(2000);
    await t.runUntil(() => t.getSprite('Ada').sayText === 'Click the computer to generate a poem.', 2000);
    t.assert.equal(t.getSprite('Ada').sayText, 'Click the computer to generate a poem.', "Ada should say 'Click the computer to generate a poem.'");
    t.end();
}

const testComputerSaysPoem = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ada');
    await t.runForTime(6000);
    t.typeText('John');
    await t.runForTime(2000);
    t.clickSprite('Computer');
    await t.runUntil(() => t.getSprite('Computer').sayText === 'Here is your poem John', 2000);
    t.assert.equal(t.getSprite('Computer').sayText, 'Here is your poem John', "Computer should say 'Here is your poem John'");
    t.end();
}

const testComputerTurnSequence = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ada');
    await t.runForTime(6000);
    t.typeText('John');
    await t.runForTime(2000);
    t.clickSprite('Computer');
    await t.runForTime(2000);
    let initialDirection = t.getSprite('Computer').direction;
    for (let i = 0; i < 10; i++) {
        await t.runForTime(100);
        t.assert.equal(t.getSprite('Computer').direction, initialDirection - 5, "Computer should turn 5 degrees to the left");
        await t.runForTime(100);
        t.assert.equal(t.getSprite('Computer').direction, initialDirection, "Computer should turn 5 degrees to the right");
    }
    t.end();
}

const testComputerSaysVerb = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ada');
    await t.runForTime(6000);
    t.typeText('John');
    await t.runForTime(2000);
    t.clickSprite('Computer');
    await t.runForTime(2000);
    await t.runForTime(2000);
    let verbs = t.getSprite('Computer').getList('verbs', true).value;
    await t.runUntil(() => verbs.some(verb => t.getSprite('Computer').sayText === `I ${verb}`), 2000);
    t.assert.ok(verbs.some(verb => t.getSprite('Computer').sayText === `I ${verb}`), "Computer should say a random item from 'verbs' list");
    t.end();
}

const testComputerSaysAdverb = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ada');
    await t.runForTime(6000);
    t.typeText('John');
    await t.runForTime(2000);
    t.clickSprite('Computer');
    await t.runForTime(2000);
    await t.runForTime(2000);
    await t.runForTime(2000);
    let adverbs = t.getSprite('Computer').getList('adverbs', true).value;
    await t.runUntil(() => adverbs.some(adverb => t.getSprite('Computer').sayText === adverb), 2000);
    t.assert.ok(adverbs.some(adverb => t.getSprite('Computer').sayText === adverb), "Computer should say a random item from 'adverbs' list");
    t.end();
}

const testComputerSaysNoun = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ada');
    await t.runForTime(6000);
    t.typeText('John');
    await t.runForTime(2000);
    t.clickSprite('Computer');
    await t.runForTime(2000);
    await t.runForTime(2000);
    await t.runForTime(2000);
    await t.runForTime(2000);
    let nouns = t.getSprite('Computer').getList('nouns', true).value;
    await t.runUntil(() => nouns.some(noun => t.getSprite('Computer').sayText === `by the ${noun}`), 2000);
    t.assert.ok(nouns.some(noun => t.getSprite('Computer').sayText === `by the ${noun}`), "Computer should say 'by the [item]' from 'nouns' list");
    t.end();
}

const testComputerSaysAdjective = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ada');
    await t.runForTime(6000);
    t.typeText('John');
    await t.runForTime(2000);
    t.clickSprite('Computer');
    await t.runForTime(2000);
    await t.runForTime(2000);
    await t.runForTime(2000);
    await t.runForTime(2000);
    await t.runForTime(2000);
    let adjectives = t.getSprite('Computer').getList('adjectives', true).value;
    await t.runUntil(() => adjectives.some(adjective => t.getSprite('Computer').sayText === `I feel ${adjective}`), 2000);
    t.assert.ok(adjectives.some(adjective => t.getSprite('Computer').sayText === `I feel ${adjective}`), "Computer should say 'I feel [item]' from 'adjectives' list");
    t.end();
}

module.exports = [
	{
		 test: testAdaSaysHi,
		 name: "testAdaSaysHi",
		 description: "Test Ada says 'Hi, I'm Ada!' when clicked",
		 categories: []
	},
	{
		 test: testAdaAsksName,
		 name: "testAdaAsksName",
		 description: "Test Ada asks 'What's your name?' after saying 'Hi, I'm Ada!'",
		 categories: []
	},
	{
		 test: testAnswerStoredInGlobalVariable,
		 name: "testAnswerStoredInGlobalVariable",
		 description: "Test answer to Ada's question is stored in global variable 'name'",
		 categories: []
	},
	{
		 test: testAdaSaysHiName,
		 name: "testAdaSaysHiName",
		 description: "Test Ada says 'Hi [name]' after storing the name",
		 categories: []
	},
	{
		 test: testAdaSaysClickComputer,
		 name: "testAdaSaysClickComputer",
		 description: "Test Ada says 'Click the computer to generate a poem.'",
		 categories: []
	},
	{
		 test: testComputerSaysPoem,
		 name: "testComputerSaysPoem",
		 description: "Test Computer says 'Here is your poem [name]' when clicked",
		 categories: []
	},
	{
		 test: testComputerTurnSequence,
		 name: "testComputerTurnSequence",
		 description: "Test Computer repeats turn sequence 10 times",
		 categories: []
	},
	{
		 test: testComputerSaysVerb,
		 name: "testComputerSaysVerb",
		 description: "Test Computer says a random item from 'verbs' list",
		 categories: []
	},
	{
		 test: testComputerSaysAdverb,
		 name: "testComputerSaysAdverb",
		 description: "Test Computer says a random item from 'adverbs' list",
		 categories: []
	},
	{
		 test: testComputerSaysNoun,
		 name: "testComputerSaysNoun",
		 description: "Test Computer says 'by the [item]' from 'nouns' list",
		 categories: []
	},
	{
		 test: testComputerSaysAdjective,
		 name: "testComputerSaysAdjective",
		 description: "Test Computer says 'I feel [item]' from 'adjectives' list",
		 categories: []
	},
]
