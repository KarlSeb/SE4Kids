const test0 = async function (t) {
  t.clickSprite('Nano', 1);
  await t.runForSteps(1);
  t.typeText('0');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Nano").sayText, "Hi 0", "Expected Sprite Nano to say Hi 0");
  await t.runForSteps(94);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Nano").sayText, "Are you OK 0", "Expected Sprite Nano to say Are you OK 0");
  t.typeText('Uig');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Nano").currentCostume, 3, "Expected Sprite Nano to have costume 3");
  t.assert.equal(t.getSprite("Nano").sayText, "Oh no!", "Expected Sprite Nano to say Oh no!");
  await t.runForSteps(78);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Nano").currentCostume, 1, "Expected Sprite Nano to have costume 1");
  t.assert.equal(t.getSprite("Nano").sayText, "Do you want to go to the moon?", "Expected Sprite Nano to say Do you want to go to the moon?");
  t.typeText('yes');
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.withinRange(t.getSprite("Nano").x, -132, 5, "Expected Sprite Nano to have x-position -132 +-5");
  t.assert.withinRange(t.getSprite("Nano").y, -50, 5, "Expected Sprite Nano to have y-position -50 +-5");
  t.assert.not(t.getSprite("Nano").sayText, "Expected Sprite Nano not to say anything");
  await t.runForSteps(400);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Nano").x, -132, 5, "Expected Sprite Nano to have x-position -132 +-5");
  t.assert.withinRange(t.getSprite("Nano").y, -60, 5, "Expected Sprite Nano to have y-position -60 +-5");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724933862133',
      type: 'standard',
  }
]
