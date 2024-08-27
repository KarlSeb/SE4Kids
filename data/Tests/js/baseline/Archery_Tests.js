const test0 = async function (t) {
  t.keyPress('space', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  await t.runForSteps(200);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Arrow").x, 108.4, 5, "Expected Sprite Arrow to have x-position 108.4 +-5");
  t.assert.withinRange(t.getSprite("Arrow").y, 123.46666666666667, 5, "Expected Sprite Arrow to have y-position 123.46666666666667 +-5");
  t.assert.withinRange(t.getSprite("Arrow").size, 400, 1, "Expected Sprite Arrow to have size 400 +-1");
  t.end();
}
const test1 = async function (t) {
  t.keyPress('space', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.dragSprite('Arrow', -76, 64, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Arrow").x, -76, 5, "Expected Sprite Arrow to have x-position -76 +-5");
  t.assert.withinRange(t.getSprite("Arrow").y, 64, 5, "Expected Sprite Arrow to have y-position 64 +-5");
  t.assert.withinRange(t.getSprite("Arrow").size, 340, 1, "Expected Sprite Arrow to have size 340 +-1");
  await t.runForSteps(92);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Arrow").sayText, "50 points", "Expected Sprite Arrow to say 50 points");
  t.assert.withinRange(t.getSprite("Arrow").size, 20, 1, "Expected Sprite Arrow to have size 20 +-1");
  t.end();
}
const test2 = async function (t) {
  t.keyPress('space', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  await t.runForSteps(65);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Arrow").sayText, "100 points", "Expected Sprite Arrow to say 100 points");
  t.assert.withinRange(t.getSprite("Arrow").size, 20, 1, "Expected Sprite Arrow to have size 20 +-1");
  await t.runForSteps(80);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Arrow").x, -65, 5, "Expected Sprite Arrow to have x-position -65 +-5");
  t.assert.withinRange(t.getSprite("Arrow").y, 43, 5, "Expected Sprite Arrow to have y-position 43 +-5");
  t.assert.not(t.getSprite("Arrow").sayText, "Expected Sprite Arrow not to say anything");
  t.assert.withinRange(t.getSprite("Arrow").size, 400, 1, "Expected Sprite Arrow to have size 400 +-1");
  t.keyPress('space', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Arrow").x, -75.66666666666666, 5, "Expected Sprite Arrow to have x-position -75.66666666666666 +-5");
  t.assert.withinRange(t.getSprite("Arrow").y, 58, 5, "Expected Sprite Arrow to have y-position 58 +-5");
  t.assert.withinRange(t.getSprite("Arrow").size, 350, 1, "Expected Sprite Arrow to have size 350 +-1");
  t.dragSprite('Arrow', -36, 24, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Arrow").x, -36, 5, "Expected Sprite Arrow to have x-position -36 +-5");
  t.assert.withinRange(t.getSprite("Arrow").y, 24, 5, "Expected Sprite Arrow to have y-position 24 +-5");
  t.assert.withinRange(t.getSprite("Arrow").size, 340, 1, "Expected Sprite Arrow to have size 340 +-1");
  await t.runForSteps(92);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Arrow").sayText, "150 points", "Expected Sprite Arrow to say 150 points");
  t.assert.withinRange(t.getSprite("Arrow").size, 20, 1, "Expected Sprite Arrow to have size 20 +-1");
  t.end();
}
const test3 = async function (t) {
  t.keyPress('space', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.dragSprite('Arrow', 0.8278289491915927, 2.0096145208649756, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Arrow").x, 0.8278289491915927, 5, "Expected Sprite Arrow to have x-position 0.8278289491915927 +-5");
  t.assert.withinRange(t.getSprite("Arrow").y, 2.0096145208649756, 5, "Expected Sprite Arrow to have y-position 2.0096145208649756 +-5");
  t.assert.withinRange(t.getSprite("Arrow").size, 360, 1, "Expected Sprite Arrow to have size 360 +-1");
  await t.runForSteps(200);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Arrow").x, 124.20000000000002, 5, "Expected Sprite Arrow to have x-position 124.20000000000002 +-5");
  t.assert.withinRange(t.getSprite("Arrow").y, 135.73333333333335, 5, "Expected Sprite Arrow to have y-position 135.73333333333335 +-5");
  t.assert.withinRange(t.getSprite("Arrow").size, 400, 1, "Expected Sprite Arrow to have size 400 +-1");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724670402480',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724670402480',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724670402480',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724670402480',
      type: 'standard',
  }
]
