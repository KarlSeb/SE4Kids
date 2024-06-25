const testAdaSaysHi = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ada');
    await t.runForTime(2000);
    const ada = t.getSprite('Ada');
    t.assert.equal(ada.sayText, "Hi, I'm Ada!", "Ada should say 'Hi, I'm Ada!' when clicked");
    t.end();
}

const testAdaAsksName = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ada');
    await t.runForTime(2000);
    await t.runForTime(2000);
    const ada = t.getSprite('Ada');
    t.assert.equal(ada.sayText, "What's your name?", "Ada should ask 'What's your name?' after saying 'Hi, I'm Ada!'");
    t.end();
}

const testStoreName = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ada');
    await t.runForTime(4000);
    t.typeText('John');
    await t.runForTime(1000);
    const name = t.getGlobalVariable('name');
    t.assert.equal(name.value, 'John', "The answer to Ada's question should be stored in the global variable 'name'");
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
    await t.runForTime(2000);
    const ada = t.getSprite('Ada');
    t.assert.equal(ada.sayText, 'Hi John', "Ada should say 'Hi [name]' after storing the name");
    t.end();
}

const testAdaSaysClickComputer = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ada');
    await t.runForTime(4000);
    t.typeText('John');
    await t.runForTime(1000);
    await t.runForTime(4000);
    const ada = t.getSprite('Ada');
    t.assert.equal(ada.sayText, 'Click the computer to generate a poem.', "Ada should say 'Click the computer to generate a poem.'");
    t.end();
}

const testComputerSaysPoem = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ada');
    await t.runForTime(4000);
    t.typeText('John');
    await t.runForTime(1000);
    await t.runForTime(4000);
    t.clickSprite('Computer');
    await t.runForTime(2000);
    const computer = t.getSprite('Computer');
    t.assert.equal(computer.sayText, 'Here is your poem John', "Computer should say 'Here is your poem [name]' when clicked");
    t.end();
}

const testComputerTurningSequence = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ada');
    await t.runForTime(4000);
    t.typeText('John');
    await t.runForTime(1000);
    await t.runForTime(4000);
    t.clickSprite('Computer');
    await t.runForTime(2000);
    const computer = t.getSprite('Computer');
    let initialDirection = computer.direction;
    for (let i = 0; i < 10; i++) {
        await t.runForTime(100);
        t.assert.equal(computer.direction, initialDirection - 5, "Computer should turn 5 degrees to the left");
        await t.runForTime(100);
        t.assert.equal(computer.direction, initialDirection, "Computer should turn 5 degrees to the right");
    }
    t.end();
}

const testComputerSaysRandomVerb = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ada');
    await t.runForTime(4000);
    t.typeText('John');
    await t.runForTime(1000);
    await t.runForTime(4000);
    t.clickSprite('Computer');
    await t.runForTime(2000);
    await t.runForTime(2000);
    const computer = t.getSprite('Computer');
    const verbs = ['run', 'jump', 'swim']; // Example verbs list
    t.assert.ok(verbs.includes(computer.sayText.replace('I ', '')), "Computer should say a random item from the verbs list");
    t.end();
}

const testComputerSaysRandomAdverb = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ada');
    await t.runForTime(4000);
    t.typeText('John');
    await t.runForTime(1000);
    await t.runForTime(4000);
    t.clickSprite('Computer');
    await t.runForTime(2000);
    await t.runForTime(2000);
    await t.runForTime(2000);
    const computer = t.getSprite('Computer');
    const adverbs = ['quickly', 'slowly', 'happily']; // Example adverbs list
    t.assert.ok(adverbs.includes(computer.sayText), "Computer should say a random item from the adverbs list");
    t.end();
}

const testComputerSaysRandomNoun = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ada');
    await t.runForTime(4000);
    t.typeText('John');
    await t.runForTime(1000);
    await t.runForTime(4000);
    t.clickSprite('Computer');
    await t.runForTime(2000);
    await t.runForTime(2000);
    await t.runForTime(2000);
    await t.runForTime(2000);
    const computer = t.getSprite('Computer');
    const nouns = ['tree', 'river', 'mountain']; // Example nouns list
    t.assert.ok(nouns.includes(computer.sayText.replace('by the ', '')), "Computer should say 'by the [item]' with a random item from the nouns list");
    t.end();
}

const testComputerSaysRandomAdjective = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Ada');
    await t.runForTime(4000);
    t.typeText('John');
    await t.runForTime(1000);
    await t.runForTime(4000);
    t.clickSprite('Computer');
    await t.runForTime(2000);
    await t.runForTime(2000);
    await t.runForTime(2000);
    await t.runForTime(2000);
    await t.runForTime(2000);
    const computer = t.getSprite('Computer');
    const adjectives = ['happy', 'sad', 'excited']; // Example adjectives list
    t.assert.ok(adjectives.includes(computer.sayText.replace('I feel ', '')), "Computer should say 'I feel [item]' with a random item from the adjectives list");
    t.end();
}

module.exports = [
	{
		 test: testAdaSaysHi,
		 name: "testAdaSaysHi",
		 description: "Ada says 'Hi, I'm Ada!' when clicked",
		 categories: []
	},
	{
		 test: testAdaAsksName,
		 name: "testAdaAsksName",
		 description: "Ada asks 'What's your name?' after saying 'Hi, I'm Ada!'",
		 categories: []
	},
	{
		 test: testStoreName,
		 name: "testStoreName",
		 description: "Answer to Ada's question is stored in global variable 'name'",
		 categories: []
	},
	{
		 test: testAdaSaysHiName,
		 name: "testAdaSaysHiName",
		 description: "Ada says 'Hi [name]' after storing the name",
		 categories: []
	},
	{
		 test: testAdaSaysClickComputer,
		 name: "testAdaSaysClickComputer",
		 description: "Ada says 'Click the computer to generate a poem.'",
		 categories: []
	},
	{
		 test: testComputerSaysPoem,
		 name: "testComputerSaysPoem",
		 description: "Computer says 'Here is your poem [name]' when clicked",
		 categories: []
	},
	{
		 test: testComputerTurningSequence,
		 name: "testComputerTurningSequence",
		 description: "Computer repeats turning sequence 10 times",
		 categories: []
	},
	{
		 test: testComputerSaysRandomVerb,
		 name: "testComputerSaysRandomVerb",
		 description: "Computer says a random item from the verbs list",
		 categories: []
	},
	{
		 test: testComputerSaysRandomAdverb,
		 name: "testComputerSaysRandomAdverb",
		 description: "Computer says a random item from the adverbs list",
		 categories: []
	},
	{
		 test: testComputerSaysRandomNoun,
		 name: "testComputerSaysRandomNoun",
		 description: "Computer says 'by the [item]' with a random item from the nouns list",
		 categories: []
	},
	{
		 test: testComputerSaysRandomAdjective,
		 name: "testComputerSaysRandomAdjective",
		 description: "Computer says 'I feel [item]' with a random item from the adjectives list",
		 categories: []
	},
]
