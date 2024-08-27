const test0 = async function (t) {
  await t.runForSteps(47);
  await t.runForSteps(1);
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(47);
  await t.runForSteps(1);
  await t.runForSteps(52);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Rocketship").direction, 51.56155716429894, 1, "Expected Sprite Rocketship to face in direction 51.56155716429894 +-1");
  t.assert.equal(t.getSprite("Monkey").direction, 138, 1, "Expected Sprite Monkey to face in direction 138 +-1");
  t.assert.equal(t.getSprite("Rocks").direction, -130.04041907726153, 1, "Expected Sprite Rocks to face in direction -130.04041907726153 +-1");
  t.assert.equal(t.getSprite("Rocketship").effects.color, 1025, "Expected effect color of Sprite Rocketship to be 1025");
  t.assert.withinRange(t.getSprite("Rocketship").x, -85.7713254147126, 5, "Expected Sprite Rocketship to have x-position -85.7713254147126 +-5");
  t.assert.withinRange(t.getSprite("Rocketship").y, -99.02277605619082, 5, "Expected Sprite Rocketship to have y-position -99.02277605619082 +-5");
  t.assert.withinRange(t.getSprite("Rocks").x, 84.2931578187809, 5, "Expected Sprite Rocks to have x-position 84.2931578187809 +-5");
  t.assert.withinRange(t.getSprite("Rocks").y, 44.44328935807454, 5, "Expected Sprite Rocks to have y-position 44.44328935807454 +-5");
  t.assert.not(t.getSprite("Rocketship").sayText, "Expected Sprite Rocketship not to say anything");
  t.assert.withinRange(t.getSprite("Rocketship").size, 87, 1, "Expected Sprite Rocketship to have size 87 +-1");
  t.assert.withinRange(t.getSprite("Star").size, 268, 1, "Expected Sprite Star to have size 268 +-1");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724673523854',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724673523854',
      type: 'standard',
  }
]
