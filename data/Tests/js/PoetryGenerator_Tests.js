const testAdaClickSayHi = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ada');
    await t.runUntil(() => t.getSprite('Ada').sayText === "Hi, I'm Ada!", 2000);
    t.assert.equal(t.getSprite('Ada').sayText, "Hi, I'm Ada!", "Ada should say 'Hi, I'm Ada!'");
    await t.runForTime(2000);
    t.assert.equal(t.getSprite('Ada').sayText, '', "Ada should stop saying 'Hi, I'm Ada!' after 2 seconds");
    t.end();
}

const testAdaAskName = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ada');
    await t.runForTime(2000);
    t.assert.equal(t.getSprite('Ada').sayText, "What's your name?", "Ada should ask 'What's your name?'");
    t.end();
}

const testStoreName = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ada');
    await t.runForTime(2000);
    t.typeText('John');
    await t.runForTime(1000);
    t.assert.equal(t.getGlobalVariable('name'), 'John', "The global variable 'name' should store the answer");
    t.end();
}

const testAdaSayHiName = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ada');
    await t.runForTime(2000);
    t.typeText('John');
    await t.runForTime(1000);
    t.assert.equal(t.getSprite('Ada').sayText, 'Hi John', "Ada should say 'Hi John'");
    await t.runForTime(2000);
    t.assert.equal(t.getSprite('Ada').sayText, '', "Ada should stop saying 'Hi John' after 2 seconds");
    t.end();
}

const testAdaSayClickComputer = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ada');
    await t.runForTime(2000);
    t.typeText('John');
    await t.runForTime(3000);
    t.assert.equal(t.getSprite('Ada').sayText, 'Click the computer to generate a poem.', "Ada should say 'Click the computer to generate a poem.'");
    await t.runForTime(2000);
    t.assert.equal(t.getSprite('Ada').sayText, '', "Ada should stop saying 'Click the computer to generate a poem.' after 2 seconds");
    t.end();
}

const testComputerClickSayPoem = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ada');
    await t.runForTime(2000);
    t.typeText('John');
    await t.runForTime(5000);
    t.clickSprite('Computer');
    await t.runUntil(() => t.getSprite('Computer').sayText === 'Here is your poem John', 2000);
    t.assert.equal(t.getSprite('Computer').sayText, 'Here is your poem John', "Computer should say 'Here is your poem John'");
    await t.runForTime(2000);
    t.assert.equal(t.getSprite('Computer').sayText, '', "Computer should stop saying 'Here is your poem John' after 2 seconds");
    t.end();
}

const testComputerTurnSequence = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ada');
    await t.runForTime(2000);
    t.typeText('John');
    await t.runForTime(5000);
    t.clickSprite('Computer');
    await t.runForTime(2000);
    let initialDirection = t.getSprite('Computer').direction;
    for (let i = 0; i < 10; i++) {
        await t.runForTime(100);
        t.assert.equal(t.getSprite('Computer').direction, initialDirection - 5, `Computer should turn 5 degrees to the left (iteration ${i + 1})`);
        await t.runForTime(100);
        t.assert.equal(t.getSprite('Computer').direction, initialDirection, `Computer should turn 5 degrees to the right (iteration ${i + 1})`);
    }
    t.end();
}

const testComputerSayRandomVerb = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ada');
    await t.runForTime(2000);
    t.typeText('John');
    await t.runForTime(5000);
    t.clickSprite('Computer');
    await t.runForTime(2000);
    await t.runForTime(2000);
    let verbs = t.getSprite('Computer').getList('verbs', true);
    let saidText = t.getSprite('Computer').sayText;
    let verbFound = verbs.some(verb => saidText === `I ${verb}`);
    t.assert.ok(verbFound, "Computer should say 'I [verb]' from the 'verbs' list");
    await t.runForTime(2000);
    t.end();
}

const testComputerSayRandomAdverb = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ada');
    await t.runForTime(2000);
    t.typeText('John');
    await t.runForTime(5000);
    t.clickSprite('Computer');
    await t.runForTime(2000);
    await t.runForTime(4000);
    let adverbs = t.getSprite('Computer').getList('adverbs', true);
    let saidText = t.getSprite('Computer').sayText;
    let adverbFound = adverbs.some(adverb => saidText === adverb);
    t.assert.ok(adverbFound, "Computer should say a random item from the 'adverbs' list");
    await t.runForTime(2000);
    t.end();
}

const testComputerSayRandomNoun = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ada');
    await t.runForTime(2000);
    t.typeText('John');
    await t.runForTime(5000);
    t.clickSprite('Computer');
    await t.runForTime(2000);
    await t.runForTime(6000);
    let nouns = t.getSprite('Computer').getList('nouns', true);
    let saidText = t.getSprite('Computer').sayText;
    let nounFound = nouns.some(noun => saidText === `by the ${noun}`);
    t.assert.ok(nounFound, "Computer should say 'by the [noun]' from the 'nouns' list");
    await t.runForTime(2000);
    t.end();
}

const testComputerSayRandomAdjective = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ada');
    await t.runForTime(2000);
    t.typeText('John');
    await t.runForTime(5000);
    t.clickSprite('Computer');
    await t.runForTime(2000);
    await t.runForTime(8000);
    let adjectives = t.getSprite('Computer').getList('adjectives', true);
    let saidText = t.getSprite('Computer').sayText;
    let adjectiveFound = adjectives.some(adjective => saidText === `I feel ${adjective}`);
    t.assert.ok(adjectiveFound, "Computer should say 'I feel [adjective]' from the 'adjectives' list");
    await t.runForTime(2000);
    t.end();
}

module.exports = [
	{
		 test: testAdaClickSayHi,
		 name: "testAdaClickSayHi",
		 description: "When Ada is clicked Ada says 'Hi, I'm Ada!' for 2 seconds",
		 categories: []
	},
	{
		 test: testAdaAskName,
		 name: "testAdaAskName",
		 description: "Afterwards Ada asks 'What's your name?'",
		 categories: []
	},
	{
		 test: testStoreName,
		 name: "testStoreName",
		 description: "The answer to that question is stored in the global variable name",
		 categories: []
	},
	{
		 test: testAdaSayHiName,
		 name: "testAdaSayHiName",
		 description: "Ada then says 'Hi [name]' for 2 seconds",
		 categories: []
	},
	{
		 test: testAdaSayClickComputer,
		 name: "testAdaSayClickComputer",
		 description: "Then Ada says 'Click the computer to generate a poem.' for 2 seconds",
		 categories: []
	},
	{
		 test: testComputerClickSayPoem,
		 name: "testComputerClickSayPoem",
		 description: "When Computer is clicked, Computer says 'Here is your poem [name]' for 2 seconds",
		 categories: []
	},
	{
		 test: testComputerTurnSequence,
		 name: "testComputerTurnSequence",
		 description: "Computer then repeats the following sequence 10 times: turn 5 degrees to the left, wait for 0.1 seconds, turn 5 degrees to the right, wait for 0.1 seconds",
		 categories: []
	},
	{
		 test: testComputerSayRandomVerb,
		 name: "testComputerSayRandomVerb",
		 description: "Computer then pick a random item from the 'verbs' list and says 'I [items]' for 2 seconds",
		 categories: []
	},
	{
		 test: testComputerSayRandomAdverb,
		 name: "testComputerSayRandomAdverb",
		 description: "Then Computer says a random item from the 'adverbs' list for 2 seconds",
		 categories: []
	},
	{
		 test: testComputerSayRandomNoun,
		 name: "testComputerSayRandomNoun",
		 description: "Afterwards Computer picks a random word from the 'nouns' list and says 'by the [item]' for 2 seconds",
		 categories: []
	},
	{
		 test: testComputerSayRandomAdjective,
		 name: "testComputerSayRandomAdjective",
		 description: "Then a random item from the 'adjectives' list is picked and Computer says 'I feel [item]' for 2 seconds",
		 categories: []
	},
]
