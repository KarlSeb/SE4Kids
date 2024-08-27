const testStageCostume = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getStage().currentCostume === t.getStage().getCostumeByName('sparkling').index, 5000);
    t.assert.equal(t.getStage().getCostumeByName('sparkling').index, t.getStage().currentCostume, 'Stage should have costume sparkling at the start');
    t.end();
}

const testGigaHidden = async function (t) {
    t.greenFlag();
    await t.runUntil(() => !t.getSprite('Giga').visible, 5000);
    t.assert.not(t.getSprite('Giga').visible, 'Giga should be hidden at the start');
    t.end();
}

const testPlayVisible = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Play').visible, 5000);
    t.assert.ok(t.getSprite('Play').visible, 'Play should be visible at the start');
    t.end();
}

const testResultHidden = async function (t) {
    t.greenFlag();
    await t.runUntil(() => !t.getSprite('Result').visible, 5000);
    t.assert.not(t.getSprite('Result').visible, 'Result should be hidden at the start');
    t.end();
}

const testScoreZero = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('score') === 0, 5000);
    t.assert.equal(t.getGlobalVariable('score'), 0, 'Global variable score should be 0 at the start');
    t.end();
}

const testPlayFisheyeEffect = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Play').visible, 5000);
    t.mouseMove(t.getSprite('Play').x, t.getSprite('Play').y);
    await t.runForTime(1000);
    t.assert.equal(t.getSprite('Play').effects['fisheye'], 30, 'Play should set fisheye effect to 30 when touched by mouse-pointer');
    t.end();
}

const testPlayNoFisheyeEffect = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Play').visible, 5000);
    t.mouseMove(0, 0);
    await t.runForTime(1000);
    t.assert.equal(t.getSprite('Play').effects['fisheye'], 0, 'Play should set fisheye effect to 0 when not touched by mouse-pointer');
    t.end();
}

const testPlayInvisibleOnClick = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Play').visible, 5000);
    t.clickSprite('Play');
    await t.runForTime(1000);
    t.assert.not(t.getSprite('Play').visible, 'Play should become invisible when clicked');
    t.end();
}

const testTimerSetTo30 = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Play').visible, 5000);
    t.clickSprite('Play');
    await t.runForTime(1000);
    t.assert.equal(t.getGlobalVariable('timer'), 30, 'Global variable timer should be set to 30 after Play is clicked');
    t.end();
}

const testStageCostumeChange = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Play').visible, 5000);
    t.clickSprite('Play');
    await t.runUntil(() => t.getStage().currentCostume === t.getStage().getCostumeByName('room 1').index, 5000);
    t.assert.equal(t.getStage().getCostumeByName('room 1').index, t.getStage().currentCostume, 'Stage costume should change to room 1 after Play is clicked');
    t.end();
}

const testGigaVisibleOnClick = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Play').visible, 5000);
    t.clickSprite('Play');
    await t.runUntil(() => t.getSprite('Giga').visible, 5000);
    t.assert.ok(t.getSprite('Giga').visible, 'Giga should become visible after Play is clicked');
    t.end();
}

const testGigaCostume = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Play').visible, 5000);
    t.clickSprite('Play');
    await t.runUntil(() => t.getSprite('Giga').currentCostume === t.getSprite('Giga').getCostumeByName('giga-a').index, 5000);
    t.assert.equal(t.getSprite('Giga').getCostumeByName('giga-a').index, t.getSprite('Giga').currentCostume, 'Giga should have costume giga-a after Play is clicked');
    t.end();
}

const testTimerDecreases = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Play').visible, 5000);
    t.clickSprite('Play');
    await t.runForTime(1000);
    const initialTimer = t.getGlobalVariable('timer');
    await t.runForTime(1000);
    t.assert.equal(t.getGlobalVariable('timer'), initialTimer - 1, 'Timer should decrease by 1 every second after Play is clicked');
    t.end();
}

const testNumber1Random = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Play').visible, 5000);
    t.clickSprite('Play');
    await t.runForTime(1000);
    const number1 = t.getGlobalVariable('number1');
    t.assert.ok(number1 >= 2 && number1 <= 12, 'Global variable number1 should be set to a random number between 2 and 12 after Play is clicked');
    t.end();
}

const testNumber2Random = async function (t) {
    t.seedScratch(12345);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Play');
    await t.runForTime(1000);
    const number2 = t.getGlobalVariable('number2');
    t.assert.greaterOrEqual(number2, 2, 'number2 should be at least 2');
    t.assert.lessOrEqual(number2, 12, 'number2 should be at most 12');
    t.end();
}

const testGigaAsks = async function (t) {
    t.seedScratch(12345);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Play');
    await t.runForTime(1000);
    const number1 = t.getGlobalVariable('number1');
    const number2 = t.getGlobalVariable('number2');
    const giga = t.getSprite('Giga');
    await t.runUntil(() => giga.sayText.includes(`${number1} x ${number2}`), 5000);
    t.assert.ok(giga.sayText.includes(`${number1} x ${number2}`), 'Giga should ask the multiplication question');
    t.end();
}

const testGigaRightAnswerCostume = async function (t) {
    t.seedScratch(12345);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Play');
    await t.runForTime(1000);
    const number1 = t.getGlobalVariable('number1');
    const number2 = t.getGlobalVariable('number2');
    const rightAnswer = number1 * number2;
    t.typeText(rightAnswer.toString());
    await t.runForTime(1000);
    const giga = t.getSprite('Giga');
    t.assert.equal(giga.currentCostume, giga.getCostumeByName('giga-c').index, 'Giga should change to costume giga-c');
    t.end();
}

const testScoreIncrease = async function (t) {
    t.seedScratch(12345);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Play');
    await t.runForTime(1000);
    const number1 = t.getGlobalVariable('number1');
    const number2 = t.getGlobalVariable('number2');
    const rightAnswer = number1 * number2;
    const initialScore = t.getGlobalVariable('score');
    t.typeText(rightAnswer.toString());
    await t.runForTime(1000);
    const newScore = t.getGlobalVariable('score');
    t.assert.equal(newScore, initialScore + 1, 'Score should increase by 1');
    t.end();
}

const testGigaWrongAnswerCostume = async function (t) {
    t.seedScratch(12345);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Play');
    await t.runForTime(1000);
    const number1 = t.getGlobalVariable('number1');
    const number2 = t.getGlobalVariable('number2');
    const wrongAnswer = (number1 * number2) + 1;
    t.typeText(wrongAnswer.toString());
    await t.runForTime(1000);
    const giga = t.getSprite('Giga');
    t.assert.equal(giga.currentCostume, giga.getCostumeByName('giga-d').index, 'Giga should change to costume giga-d');
    t.end();
}

const testResultRightAnswerCostume = async function (t) {
    t.seedScratch(12345);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Play');
    await t.runForTime(1000);
    const number1 = t.getGlobalVariable('number1');
    const number2 = t.getGlobalVariable('number2');
    const rightAnswer = number1 * number2;
    t.typeText(rightAnswer.toString());
    await t.runForTime(1000);
    const result = t.getSprite('Result');
    t.assert.equal(result.currentCostume, result.getCostumeByName('tick').index, 'Result should change to costume tick');
    t.end();
}

const testResultWrongAnswerCostume = async function (t) {
    t.seedScratch(12345);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Play');
    await t.runForTime(1000);
    const number1 = t.getGlobalVariable('number1');
    const number2 = t.getGlobalVariable('number2');
    const wrongAnswer = (number1 * number2) + 1;
    t.typeText(wrongAnswer.toString());
    await t.runForTime(1000);
    const result = t.getSprite('Result');
    t.assert.equal(result.currentCostume, result.getCostumeByName('cross').index, 'Result should change to costume cross');
    t.end();
}

const testResultAnimation = async function (t) {
    t.seedScratch(12345);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Play');
    await t.runForTime(1000);
    const number1 = t.getGlobalVariable('number1');
    const number2 = t.getGlobalVariable('number2');
    const rightAnswer = number1 * number2;
    t.typeText(rightAnswer.toString());
    await t.runForTime(1000);
    const result = t.getSprite('Result');
    await t.runUntil(() => result.effects['ghost'] === 100, 5000);
    t.assert.equal(result.effects['ghost'], 100, 'Result ghost effect should be 100');
    t.assert.ok(result.visible, 'Result should be visible');
    await t.runForTime(100);
    t.assert.equal(result.effects['ghost'], 0, 'Result ghost effect should be 0 after decreasing');
    await t.runForTime(500);
    t.assert.equal(result.effects['ghost'], 100, 'Result ghost effect should be 100 after increasing');
    t.assert.not(result.visible, 'Result should be invisible');
    t.end();
}

const testTimerNotBelowZero = async function (t) {
    t.seedScratch(12345);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Play');
    await t.runForTime(1000);
    const timer = t.getGlobalVariable('timer');
    await t.runUntil(() => timer === 0, 60000);
    t.assert.greaterOrEqual(timer, 0, 'Timer should not go below 0');
    t.end();
}

const testGigaHiddenAfterTimer = async function (t) {
    t.seedScratch(12345);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Play');
    await t.runForTime(1000);
    const timer = t.getGlobalVariable('timer');
    await t.runUntil(() => timer === 0, 60000);
    const giga = t.getSprite('Giga');
    t.assert.not(giga.visible, 'Giga should be hidden after timer reaches 0');
    t.end();
}

const testResultInvisibleAfterTimer = async function (t) {
    t.seedScratch(12345);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Play');
    await t.runForTime(1000);
    const timer = t.getGlobalVariable('timer');
    await t.runUntil(() => timer === 0, 60000);
    const result = t.getSprite('Result');
    t.assert.not(result.visible, 'Result should be invisible after timer reaches 0');
    t.end();
}

const testPlayVisibleAfterTimer = async function (t) {
    t.seedScratch(12345);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Play');
    await t.runForTime(1000);
    const timer = t.getGlobalVariable('timer');
    await t.runUntil(() => timer === 0, 60000);
    const play = t.getSprite('Play');
    t.assert.ok(play.visible, 'Play should be visible after timer reaches 0');
    t.end();
}

const testStageCostumeAfterTimer = async function (t) {
    t.seedScratch(12345);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Play');
    await t.runForTime(1000);
    const timer = t.getGlobalVariable('timer');
    await t.runUntil(() => timer === 0, 60000);
    const stage = t.getStage();
    t.assert.equal(stage.currentCostume, stage.getCostumeByName('sparkling').index, 'Stage should change to costume sparkling after timer reaches 0');
    t.end();
}

const testProgramEndsAfterTimer = async function (t) {
    t.seedScratch(12345);
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Play');
    await t.runForTime(1000);
    const timer = t.getGlobalVariable('timer');
    await t.runUntil(() => timer === 0, 60000);
    await t.runForTime(1000);
    t.assert.fail('Program should end after timer reaches 0');
    t.end();
}

module.exports = [
	{
		 test: testStageCostume,
		 name: "testStageCostume",
		 description: "Stage has costume 'sparkling' at the start",
		 categories: []
	},
	{
		 test: testGigaHidden,
		 name: "testGigaHidden",
		 description: "Giga is hidden at the start",
		 categories: []
	},
	{
		 test: testPlayVisible,
		 name: "testPlayVisible",
		 description: "Play is visible at the start",
		 categories: []
	},
	{
		 test: testResultHidden,
		 name: "testResultHidden",
		 description: "Result is hidden at the start",
		 categories: []
	},
	{
		 test: testScoreZero,
		 name: "testScoreZero",
		 description: "Global variable score is set to 0 at the start",
		 categories: []
	},
	{
		 test: testPlayFisheyeEffect,
		 name: "testPlayFisheyeEffect",
		 description: "Play sets fisheye effect to 30 when touched by mouse-pointer",
		 categories: []
	},
	{
		 test: testPlayNoFisheyeEffect,
		 name: "testPlayNoFisheyeEffect",
		 description: "Play sets fisheye effect to 0 when not touched by mouse-pointer",
		 categories: []
	},
	{
		 test: testPlayInvisibleOnClick,
		 name: "testPlayInvisibleOnClick",
		 description: "Play becomes invisible when clicked",
		 categories: []
	},
	{
		 test: testTimerSetTo30,
		 name: "testTimerSetTo30",
		 description: "Global variable timer is set to 30 after Play is clicked",
		 categories: []
	},
	{
		 test: testStageCostumeChange,
		 name: "testStageCostumeChange",
		 description: "Stage costume changes to 'room 1' after Play is clicked",
		 categories: []
	},
	{
		 test: testGigaVisibleOnClick,
		 name: "testGigaVisibleOnClick",
		 description: "Giga becomes visible after Play is clicked",
		 categories: []
	},
	{
		 test: testGigaCostume,
		 name: "testGigaCostume",
		 description: "Giga has costume 'giga-a' after Play is clicked",
		 categories: []
	},
	{
		 test: testTimerDecreases,
		 name: "testTimerDecreases",
		 description: "Timer decreases by 1 every second after Play is clicked",
		 categories: []
	},
	{
		 test: testNumber1Random,
		 name: "testNumber1Random",
		 description: "Global variable number1 is set to a random number between 2 and 12 after Play is clicked",
		 categories: []
	},
	{
		 test: testNumber2Random,
		 name: "testNumber2Random",
		 description: "After Play was clicked the global variable number2 is set to a random number between 2 and 12",
		 categories: []
	},
	{
		 test: testGigaAsks,
		 name: "testGigaAsks",
		 description: "Giga then asks '[number1] x [number2]'",
		 categories: []
	},
	{
		 test: testGigaRightAnswerCostume,
		 name: "testGigaRightAnswerCostume",
		 description: "If the right answer is given Giga changes the costume to 'giga-c'",
		 categories: []
	},
	{
		 test: testScoreIncrease,
		 name: "testScoreIncrease",
		 description: "If the right answer is given the score increases by 1",
		 categories: []
	},
	{
		 test: testGigaWrongAnswerCostume,
		 name: "testGigaWrongAnswerCostume",
		 description: "If the wrong answer is given Giga changes the costume to 'giga-d'",
		 categories: []
	},
	{
		 test: testResultRightAnswerCostume,
		 name: "testResultRightAnswerCostume",
		 description: "If the right answer is given Result changes the costume to 'tick'",
		 categories: []
	},
	{
		 test: testResultWrongAnswerCostume,
		 name: "testResultWrongAnswerCostume",
		 description: "If the wrong answer is given Result changes the costume to 'cross'",
		 categories: []
	},
	{
		 test: testResultAnimation,
		 name: "testResultAnimation",
		 description: "After an answer was given Result plays an animation",
		 categories: []
	},
	{
		 test: testTimerNotBelowZero,
		 name: "testTimerNotBelowZero",
		 description: "The timer does not go below 0",
		 categories: []
	},
	{
		 test: testGigaHiddenAfterTimer,
		 name: "testGigaHiddenAfterTimer",
		 description: "After the timer reaches 0 Giga becomes hidden",
		 categories: []
	},
	{
		 test: testResultInvisibleAfterTimer,
		 name: "testResultInvisibleAfterTimer",
		 description: "After the timer reaches 0 Result is invisible",
		 categories: []
	},
	{
		 test: testPlayVisibleAfterTimer,
		 name: "testPlayVisibleAfterTimer",
		 description: "After the timer reaches 0 Play becomes visible",
		 categories: []
	},
	{
		 test: testStageCostumeAfterTimer,
		 name: "testStageCostumeAfterTimer",
		 description: "After the timer reaches 0 the stage changes costume to 'sparkling'",
		 categories: []
	},
	{
		 test: testProgramEndsAfterTimer,
		 name: "testProgramEndsAfterTimer",
		 description: "After the timer reaches 0 the program ends",
		 categories: []
	},
]
