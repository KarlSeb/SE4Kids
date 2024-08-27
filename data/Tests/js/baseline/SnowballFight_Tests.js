const test0 = async function (t) {
  t.mouseDown(true);
  await t.runForSteps(1);
  await t.runForSteps(89);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Snowball").direction, 56.97613244420335, 1, "Expected Sprite Snowball to face in direction 56.97613244420335 +-1");
  t.mouseDown(false);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Snowball").currentCostume, 0, "Expected Sprite Snowball to have costume 0");
  t.assert.withinRange(t.getSprite("Snowball").x, -184.06957129028788, 5, "Expected Sprite Snowball to have x-position -184.06957129028788 +-5");
  t.assert.withinRange(t.getSprite("Snowball").y, -124.64522133868714, 5, "Expected Sprite Snowball to have y-position -124.64522133868714 +-5");
  t.end();
}
const test1 = async function (t) {
  t.mouseDown(true);
  await t.runForSteps(1);
  await t.runForSteps(89);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Snowball").direction, 56.97613244420335, 1, "Expected Sprite Snowball to face in direction 56.97613244420335 +-1");
  t.mouseDown(false);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Snowball").currentCostume, 0, "Expected Sprite Snowball to have costume 0");
  t.assert.withinRange(t.getSprite("Snowball").x, -184.06957129028788, 5, "Expected Sprite Snowball to have x-position -184.06957129028788 +-5");
  t.assert.withinRange(t.getSprite("Snowball").y, -124.64522133868714, 5, "Expected Sprite Snowball to have y-position -124.64522133868714 +-5");
  t.dragSprite('Snowball', -240, -84, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Snowball").x, -240, 5, "Expected Sprite Snowball to have x-position -240 +-5");
  t.assert.withinRange(t.getSprite("Snowball").y, -84, 5, "Expected Sprite Snowball to have y-position -84 +-5");
  t.assert.not(t.getSprite("Snowball").visible, "Expected Sprite Snowball not to be visible");
  t.end();
}
const test2 = async function (t) {
  t.mouseDown(true);
  await t.runForSteps(1);
  t.mouseDown(false);
  await t.runForSteps(1);
  await t.runForSteps(68);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Snowball").direction, 56.97613244420335, 1, "Expected Sprite Snowball to face in direction 56.97613244420335 +-1");
  t.end();
}
const test3 = async function (t) {
  t.mouseDown(true);
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
      seed: '1724674613673',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724674613673',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724674613673',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724674613673',
      type: 'standard',
  }
]
