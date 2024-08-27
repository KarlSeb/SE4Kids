const testArrowStartCoordinates = async function (t) {
    t.greenFlag();
    await t.runUntil(() => {
        const arrow = t.getSprite('Arrow');
        return arrow.x === -150 && arrow.y === -150;
    }, 5000);
    const arrow = t.getSprite('Arrow');
    t.assert.equal(arrow.x, -150, 'Arrow should start at x = -150');
    t.assert.equal(arrow.y, -150, 'Arrow should start at y = -150');
    t.end();
}

const testArrowStartSize = async function (t) {
    t.greenFlag();
    await t.runUntil(() => {
        const arrow = t.getSprite('Arrow');
        return arrow.size === 400;
    }, 5000);
    const arrow = t.getSprite('Arrow');
    t.assert.equal(arrow.size, 400, 'Arrow should start with size 400');
    t.end();
}

const testArrowStopsOnSpace = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const arrow = t.getSprite('Arrow');
    const initialX = arrow.x;
    const initialY = arrow.y;
    t.keyPress('space');
    await t.runForTime(1000);
    t.assert.equal(arrow.x, initialX, 'Arrow should stop moving on space press (x coordinate)');
    t.assert.equal(arrow.y, initialY, 'Arrow should stop moving on space press (y coordinate)');
    t.end();
}

const testArrowSizeDecreasesOnSpace = async function (t) {
    t.greenFlag();
    await t.runForTime(1000);
    const arrow = t.getSprite('Arrow');
    const initialSize = arrow.size;
    t.keyPress('space');
    await t.runForTime(1000);
    t.assert.less(arrow.size, initialSize, 'Arrow size should decrease after space is pressed');
    t.end();
}

const testArrowStaysWithinBounds = async function (t) {
    t.greenFlag();
    t.addConstraint(() => {
        const arrow = t.getSprite('Arrow');
        t.assert.greaterOrEqual(arrow.x, -150, 'Arrow x should be >= -150');
        t.assert.lessOrEqual(arrow.x, 150, 'Arrow x should be <= 150');
        t.assert.greaterOrEqual(arrow.y, -150, 'Arrow y should be >= -150');
        t.assert.lessOrEqual(arrow.y, 150, 'Arrow y should be <= 150');
    });
    await t.runForTime(10000);
    t.end();
}

const testArrowHitsYellow = async function (t) {
    t.greenFlag();
    t.keyPress('space');
    await t.runForTime(1000);
    const arrow = t.getSprite('Arrow');
    await t.runUntil(() => arrow.isTouchingColor([255, 242, 0]), 10000);
    t.assert.equal(arrow.sayText, '200 points', 'Arrow should say "200 points" when hitting yellow color');
    await t.runForTime(2000);
    t.assert.equal(arrow.sayText, '', 'Arrow should stop saying "200 points" after 2 seconds');
    t.end();
}

const testArrowHitsRed = async function (t) {
    t.greenFlag();
    t.keyPress('space');
    await t.runForTime(1000);
    const arrow = t.getSprite('Arrow');
    await t.runUntil(() => arrow.isTouchingColor([238, 28, 36]), 10000);
    t.assert.equal(arrow.sayText, '150 points', 'Arrow should say "150 points" when hitting red color');
    await t.runForTime(2000);
    t.assert.equal(arrow.sayText, '', 'Arrow should stop saying "150 points" after 2 seconds');
    t.end();
}

const testArrowHitsBlue = async function (t) {
    t.greenFlag();
    t.keyPress('space');
    await t.runForTime(1000);
    const arrow = t.getSprite('Arrow');
    await t.runUntil(() => arrow.isTouchingColor([0, 114, 188]), 10000);
    t.assert.equal(arrow.sayText, '100 points', 'Arrow should say "100 points" when hitting blue color');
    await t.runForTime(2000);
    t.assert.equal(arrow.sayText, '', 'Arrow should stop saying "100 points" after 2 seconds');
    t.end();
}

const testArrowHitsBlack = async function (t) {
    t.greenFlag();
    t.keyPress('space');
    await t.runForTime(1000);
    const arrow = t.getSprite('Arrow');
    await t.runUntil(() => arrow.isTouchingColor([0, 0, 0]), 10000);
    t.assert.equal(arrow.sayText, '50 points', 'Arrow should say "50 points" when hitting black color');
    await t.runForTime(2000);
    t.assert.equal(arrow.sayText, '', 'Arrow should stop saying "50 points" after 2 seconds');
    t.end();
}

module.exports = [
	{
		 test: testArrowStartCoordinates,
		 name: "testArrowStartCoordinates",
		 description: "Arrow starts at coordinates (-150, -150)",
		 categories: []
	},
	{
		 test: testArrowStartSize,
		 name: "testArrowStartSize",
		 description: "Arrow size starts at 400",
		 categories: []
	},
	{
		 test: testArrowStopsOnSpace,
		 name: "testArrowStopsOnSpace",
		 description: "If space is pressed the Arrow stops moving",
		 categories: []
	},
	{
		 test: testArrowSizeDecreasesOnSpace,
		 name: "testArrowSizeDecreasesOnSpace",
		 description: "After space was pressed the Arrow's size decreases",
		 categories: []
	},
	{
		 test: testArrowStaysWithinBounds,
		 name: "testArrowStaysWithinBounds",
		 description: "Arrow always stays in between the coordinates -150 and 150 for both the x and y coordinates",
		 categories: []
	},
	{
		 test: testArrowHitsYellow,
		 name: "testArrowHitsYellow",
		 description: "If Arrow hits color [255, 242, 0] after space was pressed it says the text '200 points' for 2 seconds",
		 categories: []
	},
	{
		 test: testArrowHitsRed,
		 name: "testArrowHitsRed",
		 description: "If Arrow hits color [238, 28, 36] after space was pressed it says the text '150 points' for 2 seconds",
		 categories: []
	},
	{
		 test: testArrowHitsBlue,
		 name: "testArrowHitsBlue",
		 description: "If Arrow hits color [0, 114, 188] after space was pressed it says the text '100 points' for 2 seconds",
		 categories: []
	},
	{
		 test: testArrowHitsBlack,
		 name: "testArrowHitsBlack",
		 description: "If Arrow hits color [0, 0, 0] after space was pressed it says the text '50 points' for 2 seconds",
		 categories: []
	},
]
