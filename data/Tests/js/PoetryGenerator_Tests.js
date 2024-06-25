const testAdaClickSayHi = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ada');
    await t.runForTime(2000);
    const ada = await t.getSprite('Ada');
    t.assert.equal(ada.sayText, "Hi, I'm Ada!", "Ada should say 'Hi, I'm Ada!' for 2 seconds");
    t.end();
}

const testAdaAskName = async function (t) {
    t.greenFlag();
    await t.runForTime(3000);
    t.clickSprite('Ada');
    await t.runForTime(2000);
    const ada = await t.getSprite('Ada');
    t.assert.equal(ada.sayText, "What's your name?", "Ada should ask 'What's your name?' after saying 'Hi, I'm Ada!'");
    t.end();
}

const testStoreNameInGlobalVariable = async function (t) {
    t.greenFlag();
    await t.runForTime(3000);
    t.clickSprite('Ada');
    await t.runForTime(2000);
    t.typeText('John');
    await t.runForTime(1000);
    const name = await t.getGlobalVariable('name');
    t.assert.equal(name.value, 'John', "The answer to the question should be stored in the global variable 'name'");
    t.end();
}

const testAdaSayHiName = async function (t) {
    t.greenFlag();
    await t.runForTime(3000);
    t.clickSprite('Ada');
    await t.runForTime(2000);
    t.typeText('John');
    await t.runForTime(1000);
    await t.runForTime(2000);
    const ada = await t.getSprite('Ada');
    t.assert.equal(ada.sayText, 'Hi John', "Ada should say 'Hi [name]' for 2 seconds");
    t.end();
}

const testAdaSayClickComputer = async function (t) {
    t.greenFlag();
    await t.runForTime(3000);
    t.clickSprite('Ada');
    await t.runForTime(2000);
    t.typeText('John');
    await t.runForTime(1000);
    await t.runForTime(4000);
    const ada = await t.getSprite('Ada');
    t.assert.equal(ada.sayText, 'Click the computer to generate a poem.', "Ada should say 'Click the computer to generate a poem.' for 2 seconds");
    t.end();
}

const testComputerClickSayPoem = async function (t) {
    t.greenFlag();
    await t.runForTime(3000);
    t.clickSprite('Ada');
    await t.runForTime(2000);
    t.typeText('John');
    await t.runForTime(1000);
    await t.runForTime(6000);
    t.clickSprite('Computer');
    await t.runForTime(2000);
    const computer = await t.getSprite('Computer');
    t.assert.equal(computer.sayText, 'Here is your poem John', "Computer should say 'Here is your poem [name]' for 2 seconds");
    t.end();
}

const testComputerRepeatSequence = async function (t) {
    t.greenFlag();
    await t.runForTime(3000);
    t.clickSprite('Ada');
    await t.runForTime(2000);
    t.typeText('John');
    await t.runForTime(1000);
    await t.runForTime(6000);
    t.clickSprite('Computer');
    await t.runForTime(2000);
    const computer = await t.getSprite('Computer');
    for (let i = 0; i < 10; i++) {
        await t.runForTime(100);
        t.assert.equal(computer.direction, -5, "Computer should turn 5 degrees to the left");
        await t.runForTime(100);
        t.assert.equal(computer.direction, 5, "Computer should turn 5 degrees to the right");
    }
    t.end();
}

const testComputerSayRandomVerb = async function (t) {
    t.greenFlag();
    await t.runForTime(3000);
    t.clickSprite('Ada');
    await t.runForTime(2000);
    t.typeText('John');
    await t.runForTime(1000);
    await t.runForTime(6000);
    t.clickSprite('Computer');
    await t.runForTime(2000);
    await t.runForTime(2000);
    const computer = await t.getSprite('Computer');
    const verbs = await computer.getList('verbs', true);
    const verb = verbs[Math.floor(Math.random() * verbs.length)];
    t.assert.equal(computer.sayText, `I ${verb}`, "Computer should say 'I [verb]' for 2 seconds");
    t.end();
}

const testComputerSayRandomAdverb = async function (t) {
    t.greenFlag();
    await t.runForTime(3000);
    t.clickSprite('Ada');
    await t.runForTime(2000);
    t.typeText('John');
    await t.runForTime(1000);
    await t.runForTime(6000);
    t.clickSprite('Computer');
    await t.runForTime(2000);
    await t.runForTime(4000);
    const computer = await t.getSprite('Computer');
    const adverbs = await computer.getList('adverbs', true);
    const adverb = adverbs[Math.floor(Math.random() * adverbs.length)];
    t.assert.equal(computer.sayText, adverb, "Computer should say a random item from the 'adverbs' list for 2 seconds");
    t.end();
}

const testComputerSayRandomNoun = async function (t) {
    t.greenFlag();
    await t.runForTime(3000);
    t.clickSprite('Ada');
    await t.runForTime(2000);
    t.typeText('John');
    await t.runForTime(1000);
    await t.runForTime(6000);
    t.clickSprite('Computer');
    await t.runForTime(2000);
    await t.runForTime(6000);
    const computer = await t.getSprite('Computer');
    const nouns = await computer.getList('nouns', true);
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    t.assert.equal(computer.sayText, `by the ${noun}`, "Computer should say 'by the [noun]' for 2 seconds");
    t.end();
}

const testComputerSayRandomAdjective = async function (t) {
    t.greenFlag();
    await t.runForTime(3000);
    t.clickSprite('Ada');
    await t.runForTime(2000);
    t.typeText('John');
    await t.runForTime(1000);
    await t.runForTime(6000);
    t.clickSprite('Computer');
    await t.runForTime(2000);
    await t.runForTime(8000);
    const computer = await t.getSprite('Computer');
    const adjectives = await computer.getList('adjectives', true);
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    t.assert.equal(computer.sayText, `I feel ${adjective}`, "Computer should say 'I feel [adjective]' for 2 seconds");
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
		 test: testStoreNameInGlobalVariable,
		 name: "testStoreNameInGlobalVariable",
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
		 test: testComputerRepeatSequence,
		 name: "testComputerRepeatSequence",
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
