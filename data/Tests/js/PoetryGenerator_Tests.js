const testAdaSaysHi = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ada');
    await t.runForTime(200);
    const ada = t.getSprite('Ada');
    t.assert.equal(ada.sayText, "Hi, I'm Ada!", "Ada should say 'Hi, I'm Ada!'");
    await t.runForTime(2000);
    t.assert.equal(ada.sayText, '', "Ada should stop saying 'Hi, I'm Ada!' after 2 seconds");
    t.end();
}

const testAdaAsksName = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ada');
    await t.runForTime(2200);
    const ada = t.getSprite('Ada');
    t.assert.equal(ada.sayText, "What's your name?", "Ada should ask 'What's your name?'");
    t.end();
}

const testAnswerStoredInGlobalVariable = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ada');
    await t.runForTime(2200);
    t.typeText('John');
    await t.runForTime(1000);
    const name = t.getGlobalVariable('name');
    t.assert.equal(name.value, 'John', "The answer should be stored in the global variable 'name'");
    t.end();
}

const testAdaSaysHiName = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ada');
    await t.runForTime(2200);
    t.typeText('John');
    await t.runForTime(1000);
    await t.runForTime(200);
    const ada = t.getSprite('Ada');
    t.assert.equal(ada.sayText, 'Hi John', "Ada should say 'Hi John'");
    await t.runForTime(2000);
    t.assert.equal(ada.sayText, '', "Ada should stop saying 'Hi John' after 2 seconds");
    t.end();
}

const testAdaSaysClickComputer = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ada');
    await t.runForTime(2200);
    t.typeText('John');
    await t.runForTime(3200);
    const ada = t.getSprite('Ada');
    t.assert.equal(ada.sayText, 'Click the computer to generate a poem.', "Ada should say 'Click the computer to generate a poem.'");
    await t.runForTime(2000);
    t.assert.equal(ada.sayText, '', "Ada should stop saying 'Click the computer to generate a poem.' after 2 seconds");
    t.end();
}

const testComputerSaysPoem = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ada');
    await t.runForTime(2200);
    t.typeText('John');
    await t.runForTime(5200);
    t.clickSprite('Computer');
    await t.runForTime(200);
    const computer = t.getSprite('Computer');
    t.assert.equal(computer.sayText, 'Here is your poem John', "Computer should say 'Here is your poem John'");
    await t.runForTime(2000);
    t.assert.equal(computer.sayText, '', "Computer should stop saying 'Here is your poem John' after 2 seconds");
    t.end();
}

const testComputerRepeatsSequence = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ada');
    await t.runForTime(2200);
    t.typeText('John');
    await t.runForTime(5200);
    t.clickSprite('Computer');
    await t.runForTime(2200);
    const computer = t.getSprite('Computer');
    for (let i = 0; i < 10; i++) {
        const initialDirection = computer.direction;
        await t.runForTime(100);
        t.assert.equal(computer.direction, initialDirection - 5, 'Computer should turn 5 degrees to the left');
        await t.runForTime(100);
        t.assert.equal(computer.direction, initialDirection, 'Computer should turn 5 degrees to the right');
    }
    t.end();
}

const testComputerSaysRandomVerb = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ada');
    await t.runForTime(2200);
    t.typeText('John');
    await t.runForTime(5200);
    t.clickSprite('Computer');
    await t.runForTime(4200);
    const computer = t.getSprite('Computer');
    const verbs = computer.getList('verbs', true);
    const verb = verbs[Math.floor(Math.random() * verbs.length)];
    t.assert.equal(computer.sayText, `I ${verb}`, `Computer should say 'I ${verb}'`);
    await t.runForTime(2000);
    t.assert.equal(computer.sayText, '', `Computer should stop saying 'I ${verb}' after 2 seconds`);
    t.end();
}

const testComputerSaysRandomAdverb = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ada');
    await t.runForTime(2200);
    t.typeText('John');
    await t.runForTime(5200);
    t.clickSprite('Computer');
    await t.runForTime(6200);
    const computer = t.getSprite('Computer');
    const adverbs = computer.getList('adverbs', true);
    const adverb = adverbs[Math.floor(Math.random() * adverbs.length)];
    t.assert.equal(computer.sayText, adverb, `Computer should say '${adverb}'`);
    await t.runForTime(2000);
    t.assert.equal(computer.sayText, '', `Computer should stop saying '${adverb}' after 2 seconds`);
    t.end();
}

const testComputerSaysRandomNoun = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ada');
    await t.runForTime(2200);
    t.typeText('John');
    await t.runForTime(5200);
    t.clickSprite('Computer');
    await t.runForTime(8200);
    const computer = t.getSprite('Computer');
    const nouns = computer.getList('nouns', true);
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    t.assert.equal(computer.sayText, `by the ${noun}`, `Computer should say 'by the ${noun}'`);
    await t.runForTime(2000);
    t.assert.equal(computer.sayText, '', `Computer should stop saying 'by the ${noun}' after 2 seconds`);
    t.end();
}

const testComputerSaysRandomAdjective = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ada');
    await t.runForTime(2200);
    t.typeText('John');
    await t.runForTime(5200);
    t.clickSprite('Computer');
    await t.runForTime(10200);
    const computer = t.getSprite('Computer');
    const adjectives = computer.getList('adjectives', true);
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    t.assert.equal(computer.sayText, `I feel ${adjective}`, `Computer should say 'I feel ${adjective}'`);
    await t.runForTime(2000);
    t.assert.equal(computer.sayText, '', `Computer should stop saying 'I feel ${adjective}' after 2 seconds`);
    t.end();
}

module.exports = [
	{
		 test: testAdaSaysHi,
		 name: "testAdaSaysHi",
		 description: "When Ada is clicked Ada says 'Hi, I'm Ada!' for 2 seconds",
		 categories: []
	},
	{
		 test: testAdaAsksName,
		 name: "testAdaAsksName",
		 description: "Afterwards Ada asks 'What's your name?'",
		 categories: []
	},
	{
		 test: testAnswerStoredInGlobalVariable,
		 name: "testAnswerStoredInGlobalVariable",
		 description: "The answer to that question is stored in the global variable name",
		 categories: []
	},
	{
		 test: testAdaSaysHiName,
		 name: "testAdaSaysHiName",
		 description: "Ada then says 'Hi [name]' for 2 seconds",
		 categories: []
	},
	{
		 test: testAdaSaysClickComputer,
		 name: "testAdaSaysClickComputer",
		 description: "Then Ada says 'Click the computer to generate a poem.' for 2 seconds",
		 categories: []
	},
	{
		 test: testComputerSaysPoem,
		 name: "testComputerSaysPoem",
		 description: "When Computer is clicked, Computer says 'Here is your poem [name]' for 2 seconds",
		 categories: []
	},
	{
		 test: testComputerRepeatsSequence,
		 name: "testComputerRepeatsSequence",
		 description: "Computer then repeats the following sequence 10 times: turn 5 degrees to the left, wait for 0.1 seconds, turn 5 degrees to the right, wait for 0.1 seconds",
		 categories: []
	},
	{
		 test: testComputerSaysRandomVerb,
		 name: "testComputerSaysRandomVerb",
		 description: "Computer then pick a random item from the 'verbs' list and says 'I [items]' for 2 seconds",
		 categories: []
	},
	{
		 test: testComputerSaysRandomAdverb,
		 name: "testComputerSaysRandomAdverb",
		 description: "Then Computer says a random item from the 'adverbs' list for 2 seconds",
		 categories: []
	},
	{
		 test: testComputerSaysRandomNoun,
		 name: "testComputerSaysRandomNoun",
		 description: "Afterwards Computer picks a random word from the 'nouns' list and says 'by the [item]' for 2 seconds",
		 categories: []
	},
	{
		 test: testComputerSaysRandomAdjective,
		 name: "testComputerSaysRandomAdjective",
		 description: "Then a random item from the 'adjectives' list is picked and Computer says 'I feel [item]' for 2 seconds",
		 categories: []
	},
]
