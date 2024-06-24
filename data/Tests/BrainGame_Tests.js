const testStageCostume = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getStage().currentCostume === 'sparkling', 1000);
    t.assert.equal(t.getStage().currentCostume, 'sparkling', 'Stage should have costume sparkling at start');
    t.end();
}

const testGigaHidden = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Giga').visible === false, 1000);
    t.assert.equal(t.getSprite('Giga').visible, false, 'Giga should be hidden at start');
    t.end();
}

const testPlayVisible = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Play').visible === true, 1000);
    t.assert.equal(t.getSprite('Play').visible, true, 'Play should be visible at start');
    t.end();
}

const testResultHidden = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Result').visible === false, 1000);
    t.assert.equal(t.getSprite('Result').visible, false, 'Result should be hidden at start');
    t.end();
}

const testScoreZero = async function (t) {
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('score') === 0, 1000);
    t.assert.equal(t.getGlobalVariable('score'), 0, 'Global variable score should be 0 at start');
    t.end();
}

const testPlayFisheyeEffectOnTouch = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.mouseMove(t.getSprite('Play').x, t.getSprite('Play').y);
    await t.runForTime(1000);
    t.assert.equal(t.getSprite('Play').effects.get('fisheye'), 30, 'Play should set fisheye effect to 30 when touched by mouse');
    t.end();
}

const testPlayFisheyeEffectOffTouch = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.mouseMove(0, 0);
    await t.runForTime(1000);
    t.assert.equal(t.getSprite('Play').effects.get('fisheye'), 0, 'Play should set fisheye effect to 0 when not touched by mouse');
    t.end();
}

const testPlayInvisibleOnClick = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Play');
    await t.runForTime(1000);
    t.assert.equal(t.getSprite('Play').visible, false, 'Play should become invisible when clicked');
    t.end();
}

const testTimerSetTo30 = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Play');
    await t.runForTime(1000);
    t.assert.equal(t.getGlobalVariable('timer'), 30, 'Global variable timer should be set to 30 after Play is clicked');
    t.end();
}

const testStageCostumeChange = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Play');
    await t.runForTime(1000);
    t.assert.equal(t.getStage().currentCostume, 'room 1', 'Stage costume should change to room 1 after Play is clicked');
    t.end();
}

const testGigaVisible = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Play');
    await t.runForTime(1000);
    t.assert.equal(t.getSprite('Giga').visible, true, 'Giga should become visible after Play is clicked');
    t.end();
}

const testGigaCostume = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Play');
    await t.runForTime(1000);
    t.assert.equal(t.getSprite('Giga').currentCostume, 'giga-a', 'Giga should have costume giga-a after Play is clicked');
    t.end();
}

const testTimerDecreases = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Play');
    await t.runForTime(1000);
    const initialTimer = t.getGlobalVariable('timer');
    await t.runForTime(1000);
    t.assert.equal(t.getGlobalVariable('timer'), initialTimer - 1, 'Timer should decrease by 1 every second after Play is clicked');
    t.end();
}

const testNumber1Random = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Play');
    await t.runForTime(1000);
    const number1 = t.getGlobalVariable('number1');
    t.assert.ok(number1 >= 2 && number1 <= 12, 'Global variable number1 should be set to a random number between 2 and 12 after Play is clicked');
    t.end();
}

const testNumber2Random = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Play');
    await t.runForTime(1000);
    const number2 = t.getGlobalVariable('number2');
    t.assert.ok(number2 >= 2 && number2 <= 12, 'Global variable number2 should be set to a random number between 2 and 12 after Play is clicked');
    t.end();
}

const testGigaAsks = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Play');
    await t.runForTime(1000);
    const number1 = t.getGlobalVariable('number1');
    const number2 = t.getGlobalVariable('number2');
    t.assert.equal(t.getSprite('Giga').sayText, `${number1}x${number2}`, 'Giga should ask [number1]x[number2] after Play is clicked');
    t.end();
}

const testGigaCostumeRightAnswer = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Play');
    await t.runForTime(1000);
    const number1 = t.getGlobalVariable('number1');
    const number2 = t.getGlobalVariable('number2');
    const correctAnswer = number1 * number2;
    t.typeText(correctAnswer.toString());
    await t.runForTime(1000);
    t.assert.equal(t.getSprite('Giga').currentCostume, 'giga-c', 'Giga should change costume to giga-c if the right answer is input');
    t.end();
}

const testScoreIncreases = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Play');
    await t.runForTime(1000);
    const number1 = t.getGlobalVariable('number1');
    const number2 = t.getGlobalVariable('number2');
    const correctAnswer = number1 * number2;
    t.typeText(correctAnswer.toString());
    await t.runForTime(1000);
    t.assert.equal(t.getGlobalVariable('score'), 1, 'Score should increase by 1 if the right answer is input');
    t.end();
}

const testGigaCostumeWrongAnswer = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Play');
    await t.runForTime(1000);
    const number1 = t.getGlobalVariable('number1');
    const number2 = t.getGlobalVariable('number2');
    const wrongAnswer = (number1 * number2) + 1;
    t.typeText(wrongAnswer.toString());
    await t.runForTime(1000);
    t.assert.equal(t.getSprite('Giga').currentCostume, 'giga-d', 'Giga should change costume to giga-d if the wrong answer is input');
    t.end();
}

const testResultCostumeRightAnswer = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Play');
    await t.runForTime(1000);
    const number1 = t.getGlobalVariable('number1');
    const number2 = t.getGlobalVariable('number2');
    const correctAnswer = number1 * number2;
    t.typeText(correctAnswer.toString());
    await t.runForTime(1000);
    t.assert.equal(t.getSprite('Result').currentCostume, 'tick', 'Result should change costume to tick if the right answer is input');
    t.end();
}

const testResultCostumeWrongAnswer = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Play');
    await t.runForTime(1000);
    const number1 = t.getGlobalVariable('number1');
    const number2 = t.getGlobalVariable('number2');
    const wrongAnswer = (number1 * number2) + 1;
    t.typeText(wrongAnswer.toString());
    await t.runForTime(1000);
    t.assert.equal(t.getSprite('Result').currentCostume, 'cross', 'Result should change costume to cross if the wrong answer is input');
    t.end();
}

const testResultAnimation = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Play');
    await t.runForTime(1000);
    const number1 = t.getGlobalVariable('number1');
    const number2 = t.getGlobalVariable('number2');
    const correctAnswer = number1 * number2;
    t.typeText(correctAnswer.toString());
    await t.runForTime(1000);
    t.assert.equal(t.getSprite('Result').effects.get('ghost'), 100, 'Result should set ghost effect to 100');
    t.assert.equal(t.getSprite('Result').visible, true, 'Result should become visible');
    await t.runForTime(1000);
    t.assert.equal(t.getSprite('Result').effects.get('ghost'), 0, 'Result should decrease ghost effect by 4 25 times');
    await t.runForTime(500);
    await t.runForTime(1000);
    t.assert.equal(t.getSprite('Result').effects.get('ghost'), 100, 'Result should increase ghost effect by 4 25 times');
    t.assert.equal(t.getSprite('Result').visible, false, 'Result should become invisible');
    t.end();
}

const testTimerNotBelowZero = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Play');
    await t.runForTime(31000);
    t.assert.greaterOrEqual(t.getGlobalVariable('timer'), 0, 'Timer should not go below 0');
    t.end();
}

const testGigaHiddenAfterTimer = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Play');
    await t.runForTime(31000);
    t.assert.equal(t.getSprite('Giga').visible, false, 'Giga should become hidden after timer reaches 0');
    t.end();
}

const testResultInvisibleAfterTimer = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Play');
    await t.runForTime(31000);
    t.assert.equal(t.getSprite('Result').visible, false, 'Result should be invisible after timer reaches 0');
    t.end();
}

const testPlayVisibleAfterTimer = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Play');
    await t.runForTime(31000);
    t.assert.equal(t.getSprite('Play').visible, true, 'Play should become visible after timer reaches 0');
    t.end();
}

const testStageCostumeAfterTimer = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Play');
    await t.runForTime(31000);
    t.assert.equal(t.getStage().currentCostume, 'sparkling', 'Stage should change costume to sparkling after timer reaches 0');
    t.end();
}

const testProgramEnds = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    t.clickSprite('Play');
    await t.runForTime(31000);
    t.assert.fail('Program should end after timer reaches 0');
    t.end();
}

module.exports = [
	{
		 test: testStageCostume,
		 name: "testStageCostume",
		 description: "Stage has costume 'sparkling' at start",
		 categories: []
	},
	{
		 test: testGigaHidden,
		 name: "testGigaHidden",
		 description: "Giga is hidden at start",
		 categories: []
	},
	{
		 test: testPlayVisible,
		 name: "testPlayVisible",
		 description: "Play is visible at start",
		 categories: []
	},
	{
		 test: testResultHidden,
		 name: "testResultHidden",
		 description: "Result is hidden at start",
		 categories: []
	},
	{
		 test: testScoreZero,
		 name: "testScoreZero",
		 description: "Global variable score is 0 at start",
		 categories: []
	},
	{
		 test: testPlayFisheyeEffectOnTouch,
		 name: "testPlayFisheyeEffectOnTouch",
		 description: "Play sets fisheye effect to 30 when touched by mouse",
		 categories: []
	},
	{
		 test: testPlayFisheyeEffectOffTouch,
		 name: "testPlayFisheyeEffectOffTouch",
		 description: "Play sets fisheye effect to 0 when not touched by mouse",
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
		 test: testGigaVisible,
		 name: "testGigaVisible",
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
		 description: "Global variable number2 is set to a random number between 2 and 12 after Play is clicked",
		 categories: []
	},
	{
		 test: testGigaAsks,
		 name: "testGigaAsks",
		 description: "Giga asks '[number1]x[number2]' after Play is clicked",
		 categories: []
	},
	{
		 test: testGigaCostumeRightAnswer,
		 name: "testGigaCostumeRightAnswer",
		 description: "Giga changes costume to 'giga-c' if the right answer is input",
		 categories: []
	},
	{
		 test: testScoreIncreases,
		 name: "testScoreIncreases",
		 description: "Score increases by 1 if the right answer is input",
		 categories: []
	},
	{
		 test: testGigaCostumeWrongAnswer,
		 name: "testGigaCostumeWrongAnswer",
		 description: "Giga changes costume to 'giga-d' if the wrong answer is input",
		 categories: []
	},
	{
		 test: testResultCostumeRightAnswer,
		 name: "testResultCostumeRightAnswer",
		 description: "Result changes costume to 'tick' if the right answer is input",
		 categories: []
	},
	{
		 test: testResultCostumeWrongAnswer,
		 name: "testResultCostumeWrongAnswer",
		 description: "Result changes costume to 'cross' if the wrong answer is input",
		 categories: []
	},
	{
		 test: testResultAnimation,
		 name: "testResultAnimation",
		 description: "Result plays animation after an answer is given",
		 categories: []
	},
	{
		 test: testTimerNotBelowZero,
		 name: "testTimerNotBelowZero",
		 description: "Timer does not go below 0",
		 categories: []
	},
	{
		 test: testGigaHiddenAfterTimer,
		 name: "testGigaHiddenAfterTimer",
		 description: "Giga becomes hidden after timer reaches 0",
		 categories: []
	},
	{
		 test: testResultInvisibleAfterTimer,
		 name: "testResultInvisibleAfterTimer",
		 description: "Result is invisible after timer reaches 0",
		 categories: []
	},
	{
		 test: testPlayVisibleAfterTimer,
		 name: "testPlayVisibleAfterTimer",
		 description: "Play becomes visible after timer reaches 0",
		 categories: []
	},
	{
		 test: testStageCostumeAfterTimer,
		 name: "testStageCostumeAfterTimer",
		 description: "Stage changes costume to 'sparkling' after timer reaches 0",
		 categories: []
	},
	{
		 test: testProgramEnds,
		 name: "testProgramEnds",
		 description: "Program ends after timer reaches 0",
		 categories: []
	},
]
