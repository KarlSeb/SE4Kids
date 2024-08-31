const test0 = async function (t) {
  t.clickSprite('Button4', 1);
  await t.runForSteps(1);
  t.end();
}
const test1 = async function (t) {
  t.clickSprite('Button4', 1);
  await t.runForSteps(1);
  t.clickSprite('Abby', 1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Abby").sayText, "Moon", "Expected Sprite Abby to say Moon");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724935714586',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724935714586',
      type: 'standard',
  }
]
