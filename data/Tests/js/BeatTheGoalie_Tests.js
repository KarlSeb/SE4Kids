const testTimerStartsAt30 = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('timer') === 30, 5000);
    t.assert.equal(t.getGlobalVariable('timer'), 30, 'Timer should start at 30');
    t.end();
}

const testTimerDecreasesByOneEverySecond = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('timer') === 30, 5000);
    for (let i = 30; i > 0; i--) {
        await t.runForTime(1000);
        t.assert.equal(t.getGlobalVariable('timer'), i - 1, `Timer should be ${i - 1}`);
    }
    t.end();
}

const testProgramStopsAfterTimerReachesZero = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getGlobalVariable('timer') === 0, 31000);
    await t.runForTime(1000);
    t.assert.equal(t.getGlobalVariable('timer'), 0, 'Timer should remain at 0');
    t.end();
}

const testScoreStartsAtZero = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const soccerBall = await t.getSprite('Soccer Ball');
    await t.runUntil(() => soccerBall.getVariable('score') === 0, 5000);
    t.assert.equal(soccerBall.getVariable('score'), 0, 'Score should start at 0');
    t.end();
}

const testBallStartsAtPosition = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const soccerBall = await t.getSprite('Soccer Ball');
    await t.runUntil(() => soccerBall.x === -200 && soccerBall.y === -140, 5000);
    t.assert.equal(soccerBall.x, -200, 'Ball should start at x = -200');
    t.assert.equal(soccerBall.y, -140, 'Ball should start at y = -140');
    t.end();
}

const testBallMovesAlongXAxisUntilSpacePressed = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const soccerBall = await t.getSprite('Soccer Ball');
    const initialX = soccerBall.x;
    await t.runForTime(2000);
    t.assert.notEqual(soccerBall.x, initialX, 'Ball should move along the x axis');
    t.keyPress('space');
    await t.runForTime(1000);
    const xAfterSpace = soccerBall.x;
    await t.runForTime(1000);
    t.assert.equal(soccerBall.x, xAfterSpace, 'Ball should stop moving along the x axis after space is pressed');
    t.end();
}

const testBallChangesDirectionAtEdge = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const soccerBall = await t.getSprite('Soccer Ball');
    await t.runUntil(() => soccerBall.isTouchingEdge(), 10000);
    const initialDirection = soccerBall.direction;
    await t.runForTime(1000);
    t.assert.notEqual(soccerBall.direction, initialDirection, 'Ball should change direction when it touches the edge');
    t.end();
}

const testBallStopsMovingAlongXAxisWhenSpacePressed = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const soccerBall = await t.getSprite('Soccer Ball');
    await t.runForTime(2000);
    t.keyPress('space');
    await t.runForTime(1000);
    const xAfterSpace = soccerBall.x;
    await t.runForTime(1000);
    t.assert.equal(soccerBall.x, xAfterSpace, 'Ball should stop moving along the x axis after space is pressed');
    t.end();
}

const testBallMovesAlongYAxisWhenSpacePressed = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const soccerBall = await t.getSprite('Soccer Ball');
    await t.runForTime(2000);
    t.keyPress('space');
    await t.runForTime(1000);
    const initialY = soccerBall.y;
    await t.runForTime(2000);
    t.assert.notEqual(soccerBall.y, initialY, 'Ball should move along the y axis after space is pressed');
    t.end();
}

const testGoalieSaysSaveWhenBallTouchesAfterSpace = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const soccerBall = await t.getSprite('Soccer Ball');
    const goalie = await t.getSprite('Goalie');
    await t.runForTime(2000);
    t.keyPress('space');
    await t.runUntil(() => soccerBall.isTouchingSprite('Goalie'), 10000);
    await t.runForTime(1000);
    t.assert.equal(goalie.sayText, 'Save!', 'Goalie should say "Save!" when ball touches after space is pressed');
    t.end();
}

const testScoreIncreasesWhenBallDoesNotTouchGoalie = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const soccerBall = await t.getSprite('Soccer Ball');
    const initialScore = soccerBall.getVariable('score');
    await t.runForTime(2000);
    t.keyPress('space');
    await t.runUntil(() => !soccerBall.isTouchingSprite('Goalie'), 10000);
    await t.runForTime(1000);
    t.assert.equal(soccerBall.getVariable('score'), initialScore + 1, 'Score should increase by 1 when ball does not touch Goalie after space is pressed');
    t.end();
}

const testGoalieSaysGoalWhenBallDoesNotTouchAfterSpace = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const soccerBall = await t.getSprite('Soccer Ball');
    const goalie = await t.getSprite('Goalie');
    await t.runForTime(2000);
    t.keyPress('space');
    await t.runUntil(() => !soccerBall.isTouchingSprite('Goalie'), 10000);
    await t.runForTime(1000);
    t.assert.equal(goalie.sayText, 'Goal!', 'Goalie should say "Goal!" when ball does not touch after space is pressed');
    t.end();
}

const testGoalieMovesLeftWhenLeftArrowPressed = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const goalie = await t.getSprite('Goalie');
    const initialX = goalie.x;
    t.keyPress('left arrow');
    await t.runForTime(1000);
    t.assert.less(goalie.x, initialX, 'Goalie should move left when left arrow key is pressed');
    t.end();
}

const testGoalieMovesRightWhenRightArrowPressed = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    const goalie = await t.getSprite('Goalie');
    const initialX = goalie.x;
    t.keyPress('right arrow');
    await t.runForTime(1000);
    t.assert.greater(goalie.x, initialX, 'Goalie should move right when right arrow key is pressed');
    t.end();
}

module.exports = [
	{
		 test: testTimerStartsAt30,
		 name: "testTimerStartsAt30",
		 description: "Timer variable of the stage starts at 30",
		 categories: []
	},
	{
		 test: testTimerDecreasesByOneEverySecond,
		 name: "testTimerDecreasesByOneEverySecond",
		 description: "Timer decreases by 1 every second",
		 categories: []
	},
	{
		 test: testProgramStopsAfterTimerReachesZero,
		 name: "testProgramStopsAfterTimerReachesZero",
		 description: "Program stops after timer reaches 0",
		 categories: []
	},
	{
		 test: testScoreStartsAtZero,
		 name: "testScoreStartsAtZero",
		 description: "Score variable of the Soccer Ball starts at 0",
		 categories: []
	},
	{
		 test: testBallStartsAtPosition,
		 name: "testBallStartsAtPosition",
		 description: "Ball starts at position (-200, -140)",
		 categories: []
	},
	{
		 test: testBallMovesAlongXAxisUntilSpacePressed,
		 name: "testBallMovesAlongXAxisUntilSpacePressed",
		 description: "Ball moves along the x axis until space is pressed",
		 categories: []
	},
	{
		 test: testBallChangesDirectionAtEdge,
		 name: "testBallChangesDirectionAtEdge",
		 description: "Ball changes direction when it touches the edge of the stage",
		 categories: []
	},
	{
		 test: testBallStopsMovingAlongXAxisWhenSpacePressed,
		 name: "testBallStopsMovingAlongXAxisWhenSpacePressed",
		 description: "Ball stops moving along the x axis when space is pressed",
		 categories: []
	},
	{
		 test: testBallMovesAlongYAxisWhenSpacePressed,
		 name: "testBallMovesAlongYAxisWhenSpacePressed",
		 description: "Ball starts moving along the y axis when space is pressed",
		 categories: []
	},
	{
		 test: testGoalieSaysSaveWhenBallTouchesAfterSpace,
		 name: "testGoalieSaysSaveWhenBallTouchesAfterSpace",
		 description: "Goalie says 'Save!' for 1 second when ball touches Goalie after space is pressed",
		 categories: []
	},
	{
		 test: testScoreIncreasesWhenBallDoesNotTouchGoalie,
		 name: "testScoreIncreasesWhenBallDoesNotTouchGoalie",
		 description: "Score increases by 1 when ball does not touch Goalie after space is pressed",
		 categories: []
	},
	{
		 test: testGoalieSaysGoalWhenBallDoesNotTouchAfterSpace,
		 name: "testGoalieSaysGoalWhenBallDoesNotTouchAfterSpace",
		 description: "Goalie says 'Goal!' for 1 second when ball does not touch Goalie after space is pressed",
		 categories: []
	},
	{
		 test: testGoalieMovesLeftWhenLeftArrowPressed,
		 name: "testGoalieMovesLeftWhenLeftArrowPressed",
		 description: "Goalie moves left when left arrow key is pressed",
		 categories: []
	},
	{
		 test: testGoalieMovesRightWhenRightArrowPressed,
		 name: "testGoalieMovesRightWhenRightArrowPressed",
		 description: "Goalie moves right when right arrow key is pressed",
		 categories: []
	},
]
