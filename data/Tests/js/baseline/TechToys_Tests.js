const test0 = async function (t) {
  t.clickSprite('Laptop', 1);
  await t.runForSteps(1);
  t.keyPress('up arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Helicopter").x, 157, 5, "Expected Sprite Helicopter to have x-position 157 +-5");
  t.assert.withinRange(t.getSprite("Helicopter").y, -124, 5, "Expected Sprite Helicopter to have y-position -124 +-5");
  t.end();
}
const test1 = async function (t) {
  t.clickSprite('Laptop', 1);
  await t.runForSteps(1);
  t.keyPress('down arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Helicopter").currentCostume, 0, "Expected Sprite Helicopter to have costume 0");
  t.assert.withinRange(t.getSprite("Helicopter").x, 157, 5, "Expected Sprite Helicopter to have x-position 157 +-5");
  t.assert.withinRange(t.getSprite("Helicopter").y, -134, 5, "Expected Sprite Helicopter to have y-position -134 +-5");
  t.end();
}
const test2 = async function (t) {
  t.clickSprite('Laptop', 1);
  await t.runForSteps(1);
  t.keyPress('left arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Helicopter").currentCostume, 0, "Expected Sprite Helicopter to have costume 0");
  t.assert.withinRange(t.getSprite("Helicopter").x, 149, 5, "Expected Sprite Helicopter to have x-position 149 +-5");
  t.assert.withinRange(t.getSprite("Helicopter").y, -126, 5, "Expected Sprite Helicopter to have y-position -126 +-5");
  t.end();
}
const test3 = async function (t) {
  t.clickSprite('Laptop', 1);
  await t.runForSteps(1);
  t.keyPress('right arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Helicopter").x, 159, 5, "Expected Sprite Helicopter to have x-position 159 +-5");
  t.assert.withinRange(t.getSprite("Helicopter").y, -126, 5, "Expected Sprite Helicopter to have y-position -126 +-5");
  t.end();
}
const test4 = async function (t) {
  t.clickSprite('Laptop', 1);
  await t.runForSteps(1);
  t.keyPress('space', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Helicopter").direction, 82, 1, "Expected Sprite Helicopter to face in direction 82 +-1");
  t.assert.withinRange(t.getSprite("Helicopter").x, 164.9902562010393, 5, "Expected Sprite Helicopter to have x-position 164.9902562010393 +-5");
  t.assert.withinRange(t.getSprite("Helicopter").y, -125.7209741050235, 5, "Expected Sprite Helicopter to have y-position -125.7209741050235 +-5");
  t.end();
}
const test5 = async function (t) {
  t.clickSprite('Laptop', 1);
  await t.runForSteps(1);
  t.clickSprite('Sunglasses2', 1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Helicopter").currentCostume, 0, "Expected Sprite Helicopter to have costume 0");
  t.assert.equal(t.getSprite("Sunglasses2").effects.color, 5, "Expected effect color of Sprite Sunglasses2 to be 5");
  t.end();
}
const test6 = async function (t) {
  t.clickSprite('Laptop', 1);
  await t.runForSteps(1);
  t.clickSprite('Bow Tie', 1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Helicopter").currentCostume, 0, "Expected Sprite Helicopter to have costume 0");
  t.assert.equal(t.getSprite("Bow Tie").direction, 126, 1, "Expected Sprite Bow Tie to face in direction 126 +-1");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724675326838',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724675326838',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724675326838',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724675326838',
      type: 'standard',
  },
  {
      test: test4,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724675326838',
      type: 'standard',
  },
  {
      test: test5,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724675326838',
      type: 'standard',
  },
  {
      test: test6,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724675326838',
      type: 'standard',
  }
]
