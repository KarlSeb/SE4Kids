const test0 = async function (t) {
  await t.runForSteps(92);
  await t.runForSteps(1);
  t.mouseDown(true);
  await t.runForSteps(1);
  t.mouseDown(false);
  await t.runForSteps(1);
  await t.runForSteps(63);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Reindeer").x, 48, 5, "Expected Sprite Reindeer to have x-position 48 +-5");
  t.assert.withinRange(t.getSprite("Reindeer").y, -120.00000000000001, 5, "Expected Sprite Reindeer to have y-position -120.00000000000001 +-5");
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(92);
  await t.runForSteps(1);
  t.dragSprite('Reindeer', -200, -130, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Reindeer").x, -200, 5, "Expected Sprite Reindeer to have x-position -200 +-5");
  t.assert.withinRange(t.getSprite("Reindeer").y, -130, 5, "Expected Sprite Reindeer to have y-position -130 +-5");
  t.assert.equal(t.getSprite("Reindeer").sayText, "You got me!", "Expected Sprite Reindeer to say You got me!");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724935414051',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724935414051',
      type: 'standard',
  }
]
