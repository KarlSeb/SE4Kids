const test0 = async function (t) {
  t.keyPress('space', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.clickSprite('Singer1', 1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Singer1").currentCostume, 1, "Expected Sprite Singer1 to have costume 1");
  await t.runForSteps(98);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Drum").currentCostume, 0, "Expected Sprite Drum to have costume 0");
  t.assert.equal(t.getSprite("Singer1").currentCostume, 0, "Expected Sprite Singer1 to have costume 0");
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.clickSprite('Drum-cymbal', 1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Drum-cymbal").currentCostume, 1, "Expected Sprite Drum-cymbal to have costume 1");
  await t.runForSteps(43);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Drum-cymbal").currentCostume, 0, "Expected Sprite Drum-cymbal to have costume 0");
  t.end();
}
const test2 = async function (t) {
  t.keyPress('space', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.clickSprite('Drum', 1);
  await t.runForSteps(1);
  t.end();
}
const test3 = async function (t) {
  t.keyPress('space', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.clickSprite('Drum', 1);
  await t.runForSteps(1);
  await t.runForSteps(98);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Drum").currentCostume, 0, "Expected Sprite Drum to have costume 0");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724674550872',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724674550872',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724674550872',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724674550872',
      type: 'standard',
  }
]
