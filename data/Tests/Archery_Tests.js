const testArrowStartCoordinates = async function (t) {
    let arrow = t.getSprite('Arrow');
    await t.runForTime(1000);
    t.assert.equal(arrow.x, -150, 'Arrow x coordinate should be -150');
    t.assert.equal(arrow.y, -150, 'Arrow y coordinate should be -150');
    t.end();
}

const testArrowStartSize = async function (t) {
    let arrow = t.getSprite('Arrow');
    await t.runForTime(1000);
    t.assert.equal(arrow.size, 400, 'Arrow size should be 400');
    t.end();
}

const testArrowStopsOnSpace = async function (t) {
    let arrow = t.getSprite('Arrow');
    let initialX = arrow.x;
    let initialY = arrow.y;
    await t.keyPress('space');
    await t.runForTime(1000);
    t.assert.equal(arrow.x, initialX, 'Arrow x coordinate should not change after space is pressed');
    t.assert.equal(arrow.y, initialY, 'Arrow y coordinate should not change after space is pressed');
    t.end();
}

const testArrowSizeDecreasesOnSpace = async function (t) {
    let arrow = t.getSprite('Arrow');
    let initialSize = arrow.size;
    await t.keyPress('space');
    await t.runForTime(1000);
    t.assert.less(arrow.size, initialSize, 'Arrow size should decrease after space is pressed');
    t.end();
}

const testArrowStaysWithinBounds = async function (t) {
    let arrow = t.getSprite('Arrow');
    t.addConstraint(() => {
        t.assert.greaterOrEqual(arrow.x, -150, 'Arrow x coordinate should be >= -150');
        t.assert.lessOrEqual(arrow.x, 150, 'Arrow x coordinate should be <= 150');
        t.assert.greaterOrEqual(arrow.y, -150, 'Arrow y coordinate should be >= -150');
        t.assert.lessOrEqual(arrow.y, 150, 'Arrow y coordinate should be <= 150');
    });
    await t.runForTime(10000);
    t.end();
}

