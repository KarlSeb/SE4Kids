const test0 = async function (t) {
  await t.runForSteps(99);
  await t.runForSteps(1);
  t.keyPress('left arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Finish Line").x, 0, 5, "Expected Sprite Finish Line to have x-position 0 +-5");
  t.assert.withinRange(t.getSprite("Finish Line").y, 28.5, 5, "Expected Sprite Finish Line to have y-position 28.5 +-5");
  t.assert.withinRange(t.getSprite("Tree1").x, -52, 5, "Expected Sprite Tree1 to have x-position -52 +-5");
  t.assert.withinRange(t.getSprite("Tree1").y, 18.5, 5, "Expected Sprite Tree1 to have y-position 18.5 +-5");
  t.assert.withinRange(t.getSprite("Finish Line").size, 4, 1, "Expected Sprite Finish Line to have size 4 +-1");
  t.assert.withinRange(t.getSprite("Tree1").size, 2, 1, "Expected Sprite Tree1 to have size 2 +-1");
  t.keyPress('right arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Finish Line").x, 0, 5, "Expected Sprite Finish Line to have x-position 0 +-5");
  t.assert.withinRange(t.getSprite("Finish Line").y, 27, 5, "Expected Sprite Finish Line to have y-position 27 +-5");
  t.assert.withinRange(t.getSprite("Tree1").x, -54, 5, "Expected Sprite Tree1 to have x-position -54 +-5");
  t.assert.withinRange(t.getSprite("Tree1").y, 17, 5, "Expected Sprite Tree1 to have y-position 17 +-5");
  t.assert.withinRange(t.getSprite("Finish Line").size, 5, 1, "Expected Sprite Finish Line to have size 5 +-1");
  t.assert.withinRange(t.getSprite("Tree1").size, 3, 1, "Expected Sprite Tree1 to have size 3 +-1");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724674671928',
      type: 'standard',
  }
]
