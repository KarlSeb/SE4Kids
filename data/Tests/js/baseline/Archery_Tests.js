const test0 = async function (t) {
  t.keyPress('space', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(73);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Arrow").sayText, "100 points", "Expected Sprite Arrow to say 100 points");
  t.assert.withinRange(t.getSprite("Arrow").size, 20, 1, "Expected Sprite Arrow to have size 20 +-1");
  await t.runForSteps(64);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Arrow").x, -21.133333333333326, 5, "Expected Sprite Arrow to have x-position -21.133333333333326 +-5");
  t.assert.withinRange(t.getSprite("Arrow").y, 25.46666666666667, 5, "Expected Sprite Arrow to have y-position 25.46666666666667 +-5");
  t.assert.not(t.getSprite("Arrow").sayText, "Expected Sprite Arrow not to say anything");
  t.assert.withinRange(t.getSprite("Arrow").size, 400, 1, "Expected Sprite Arrow to have size 400 +-1");
  t.end();
}
const test1 = async function (t) {
  t.keyPress('space', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.dragSprite('Arrow', -14.243056932265347, -100.31244579156612, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Arrow").x, -14.243056932265347, 5, "Expected Sprite Arrow to have x-position -14.243056932265347 +-5");
  t.assert.withinRange(t.getSprite("Arrow").y, -100.31244579156612, 5, "Expected Sprite Arrow to have y-position -100.31244579156612 +-5");
  t.assert.withinRange(t.getSprite("Arrow").size, 370, 1, "Expected Sprite Arrow to have size 370 +-1");
  await t.runForSteps(73);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Arrow").sayText, "50 points", "Expected Sprite Arrow to say 50 points");
  t.assert.withinRange(t.getSprite("Arrow").size, 20, 1, "Expected Sprite Arrow to have size 20 +-1");
  t.end();
}
const test2 = async function (t) {
  t.keyPress('space', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(73);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Arrow").sayText, "100 points", "Expected Sprite Arrow to say 100 points");
  t.assert.withinRange(t.getSprite("Arrow").size, 20, 1, "Expected Sprite Arrow to have size 20 +-1");
  await t.runForSteps(13);
  await t.runForSteps(1);
  await t.runForSteps(70);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Arrow").x, 115.66666666666667, 5, "Expected Sprite Arrow to have x-position 115.66666666666667 +-5");
  t.assert.withinRange(t.getSprite("Arrow").y, 28.53333333333333, 5, "Expected Sprite Arrow to have y-position 28.53333333333333 +-5");
  t.assert.not(t.getSprite("Arrow").sayText, "Expected Sprite Arrow not to say anything");
  t.assert.withinRange(t.getSprite("Arrow").size, 400, 1, "Expected Sprite Arrow to have size 400 +-1");
  await t.runForSteps(74);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Arrow").x, -17.866666666666674, 5, "Expected Sprite Arrow to have x-position -17.866666666666674 +-5");
  t.assert.withinRange(t.getSprite("Arrow").y, 26.33333333333333, 5, "Expected Sprite Arrow to have y-position 26.33333333333333 +-5");
  t.keyPress('space', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Arrow").x, -27.933333333333337, 5, "Expected Sprite Arrow to have x-position -27.933333333333337 +-5");
  t.assert.withinRange(t.getSprite("Arrow").y, 17.66666666666667, 5, "Expected Sprite Arrow to have y-position 17.66666666666667 +-5");
  t.assert.withinRange(t.getSprite("Arrow").size, 380, 1, "Expected Sprite Arrow to have size 380 +-1");
  await t.runForSteps(58);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Arrow").sayText, "150 points", "Expected Sprite Arrow to say 150 points");
  t.assert.withinRange(t.getSprite("Arrow").size, 20, 1, "Expected Sprite Arrow to have size 20 +-1");
  t.end();
}
const test3 = async function (t) {
  await t.runForSteps(5);
  await t.runForSteps(1);
  t.keyPress('space', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Arrow").x, -124, 5, "Expected Sprite Arrow to have x-position -124 +-5");
  t.assert.withinRange(t.getSprite("Arrow").y, -48.39999999999999, 5, "Expected Sprite Arrow to have y-position -48.39999999999999 +-5");
  t.assert.withinRange(t.getSprite("Arrow").size, 350, 1, "Expected Sprite Arrow to have size 350 +-1");
  t.dragSprite('Arrow', 8, 1, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Arrow").x, 8, 5, "Expected Sprite Arrow to have x-position 8 +-5");
  t.assert.withinRange(t.getSprite("Arrow").y, 1, 5, "Expected Sprite Arrow to have y-position 1 +-5");
  t.assert.withinRange(t.getSprite("Arrow").size, 340, 1, "Expected Sprite Arrow to have size 340 +-1");
  await t.runForSteps(200);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Arrow").x, 69, 5, "Expected Sprite Arrow to have x-position 69 +-5");
  t.assert.withinRange(t.getSprite("Arrow").y, -124, 5, "Expected Sprite Arrow to have y-position -124 +-5");
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
      seed: '1724933126669',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724933126669',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724933126669',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724933126669',
      type: 'standard',
  }
]
