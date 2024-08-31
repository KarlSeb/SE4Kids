const test0 = async function (t) {
  t.clickSprite('Bow Tie', 1);
  await t.runForSteps(1);
  t.clickSprite('Laptop', 1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Helicopter").currentCostume, 1, "Expected Sprite Helicopter to have costume 1");
  t.assert.equal(t.getSprite("Bow Tie").direction, 162, 1, "Expected Sprite Bow Tie to face in direction 162 +-1");
  t.keyPress('up arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Bow Tie").direction, -126, 1, "Expected Sprite Bow Tie to face in direction -126 +-1");
  t.assert.withinRange(t.getSprite("Helicopter").x, 157, 5, "Expected Sprite Helicopter to have x-position 157 +-5");
  t.assert.withinRange(t.getSprite("Helicopter").y, -124, 5, "Expected Sprite Helicopter to have y-position -124 +-5");
  t.end();
}
const test1 = async function (t) {
  t.keyPress('space', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.clickSprite('Laptop', 1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Helicopter").currentCostume, 1, "Expected Sprite Helicopter to have costume 1");
  t.assert.equal(t.getSprite("Helicopter").direction, 70, 1, "Expected Sprite Helicopter to face in direction 70 +-1");
  t.assert.withinRange(t.getSprite("Helicopter").x, 176.70896566269408, 5, "Expected Sprite Helicopter to have x-position 176.70896566269408 +-5");
  t.assert.withinRange(t.getSprite("Helicopter").y, -123.2300855146442, 5, "Expected Sprite Helicopter to have y-position -123.2300855146442 +-5");
  t.keyPress('down arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Helicopter").direction, 62, 1, "Expected Sprite Helicopter to face in direction 62 +-1");
  t.assert.withinRange(t.getSprite("Helicopter").x, 184.1219179764081, 5, "Expected Sprite Helicopter to have x-position 184.1219179764081 +-5");
  t.assert.withinRange(t.getSprite("Helicopter").y, -122.23505836903833, 5, "Expected Sprite Helicopter to have y-position -122.23505836903833 +-5");
  t.end();
}
const test2 = async function (t) {
  t.keyPress('space', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.clickSprite('Laptop', 1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Helicopter").currentCostume, 1, "Expected Sprite Helicopter to have costume 1");
  t.assert.equal(t.getSprite("Helicopter").direction, 70, 1, "Expected Sprite Helicopter to face in direction 70 +-1");
  t.assert.withinRange(t.getSprite("Helicopter").x, 176.70896566269408, 5, "Expected Sprite Helicopter to have x-position 176.70896566269408 +-5");
  t.assert.withinRange(t.getSprite("Helicopter").y, -123.2300855146442, 5, "Expected Sprite Helicopter to have y-position -123.2300855146442 +-5");
  t.keyPress('left arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Helicopter").direction, 62, 1, "Expected Sprite Helicopter to face in direction 62 +-1");
  t.assert.withinRange(t.getSprite("Helicopter").x, 182.1219179764081, 5, "Expected Sprite Helicopter to have x-position 182.1219179764081 +-5");
  t.assert.withinRange(t.getSprite("Helicopter").y, -120.23505836903833, 5, "Expected Sprite Helicopter to have y-position -120.23505836903833 +-5");
  t.end();
}
const test3 = async function (t) {
  t.clickSprite('Sunglasses2', 1);
  await t.runForSteps(1);
  t.clickSprite('Laptop', 1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Helicopter").currentCostume, 1, "Expected Sprite Helicopter to have costume 1");
  t.assert.equal(t.getSprite("Sunglasses2").effects.color, 10, "Expected effect color of Sprite Sunglasses2 to be 10");
  t.keyPress('right arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Sunglasses2").effects.color, 20, "Expected effect color of Sprite Sunglasses2 to be 20");
  t.assert.withinRange(t.getSprite("Helicopter").x, 159, 5, "Expected Sprite Helicopter to have x-position 159 +-5");
  t.assert.withinRange(t.getSprite("Helicopter").y, -126, 5, "Expected Sprite Helicopter to have y-position -126 +-5");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724935681646',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724935681646',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724935681646',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724935681646',
      type: 'standard',
  }
]
