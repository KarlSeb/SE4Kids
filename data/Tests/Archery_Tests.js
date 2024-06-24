const testArrowStartCoordinates = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Arrow').x === -150 && t.getSprite('Arrow').y === -150, 5000);
    const arrow = t.getSprite('Arrow');
    t.assert.strictEqual(arrow.x, -150, 'Arrow should start at x = -150');
    t.assert.strictEqual(arrow.y, -150, 'Arrow should start at y = -150');
    t.end();
}

const testArrowStartSize = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runUntil(() => t.getSprite('Arrow').size === 400, 5000);
    const arrow = t.getSprite('Arrow');
    t.assert.strictEqual(arrow.size, 400, 'Arrow should start with size 400');
    t.end();
}

const testArrowStopsOnSpace = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    const initialX = t.getSprite('Arrow').x;
    const initialY = t.getSprite('Arrow').y;
    t.keyPress('space');
    await t.runForTime(1000);
    const arrow = t.getSprite('Arrow');
    t.assert.strictEqual(arrow.x, initialX, 'Arrow should stop moving on x-axis when space is pressed');
    t.assert.strictEqual(arrow.y, initialY, 'Arrow should stop moving on y-axis when space is pressed');
    t.end();
}

const testArrowSizeDecreasesOnSpace = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.keyPress('space');
    await t.runForTime(1000);
    const arrow = t.getSprite('Arrow');
    t.assert.less(arrow.size, 400, 'Arrow size should decrease after space is pressed');
    t.end();
}

const testArrowStaysWithinBounds = async function (t) {
    t.seedScratch(1234);
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
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.keyPress('space');
    await t.runForTime(1000);
    t.addConstraint(() => {
        const arrow = t.getSprite('Arrow');
        if (arrow.isColorTouchingColor([255, 242, 0], [255, 242, 0])) {
            t.assert.strictEqual(arrow.sayText, '200 points', 'Arrow should say "200 points" when hitting yellow color');
        }
    });
    await t.runForTime(2000);
    t.end();
}

const testArrowHitsRed = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.keyPress('space');
    await t.runForTime(1000);
    t.addConstraint(() => {
        const arrow = t.getSprite('Arrow');
        if (arrow.isColorTouchingColor([238, 28, 36], [238, 28, 36])) {
            t.assert.strictEqual(arrow.sayText, '150 points', 'Arrow should say "150 points" when hitting red color');
        }
    });
    await t.runForTime(2000);
    t.end();
}

const testArrowHitsBlue = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.keyPress('space');
    await t.runForTime(1000);
    t.addConstraint(() => {
        const arrow = t.getSprite('Arrow');
        if (arrow.isColorTouchingColor([0, 114, 188], [0, 114, 188])) {
            t.assert.strictEqual(arrow.sayText, '100 points', 'Arrow should say "100 points" when hitting blue color');
        }
    });
    await t.runForTime(2000);
    t.end();
}

const testArrowHitsBlack = async function (t) {
    t.seedScratch(1234);
    t.greenFlag();
    await t.runForTime(1000);
    t.keyPress('space');
    await t.runForTime(1000);
    t.addConstraint(() => {
        const arrow = t.getSprite('Arrow');
        if (arrow.isColorTouchingColor([0, 0, 0], [0, 0, 0])) {
            t.assert.strictEqual(arrow.sayText, '50 points', 'Arrow should say "50 points" when hitting black color');
        }
    });
    await t.runForTime(2000);
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
