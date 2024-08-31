const test0 = async function (t) {
  await t.runForSteps(71);
  await t.runForSteps(1);
  t.dragSprite('boat', -120, -82, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("gate").direction, 162.97405861640266, 1, "Expected Sprite gate to face in direction 162.97405861640266 +-1");
  t.assert.withinRange(t.getSprite("boat").x, -120, 5, "Expected Sprite boat to have x-position -120 +-5");
  t.assert.withinRange(t.getSprite("boat").y, -82, 5, "Expected Sprite boat to have y-position -82 +-5");
  t.mouseMove(43, 60);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("gate").direction, 163.97405861640266, 1, "Expected Sprite gate to face in direction 163.97405861640266 +-1");
  t.dragSprite('boat', 167.57740020180105, -131.68837256162587, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("gate").direction, 164.97405861640266, 1, "Expected Sprite gate to face in direction 164.97405861640266 +-1");
  t.assert.withinRange(t.getSprite("boat").x, 167.57740020180105, 5, "Expected Sprite boat to have x-position 167.57740020180105 +-5");
  t.assert.withinRange(t.getSprite("boat").y, -131.68837256162587, 5, "Expected Sprite boat to have y-position -131.68837256162587 +-5");
  t.dragSprite('boat', -120, -82, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("gate").direction, 165.97405861640266, 1, "Expected Sprite gate to face in direction 165.97405861640266 +-1");
  t.assert.withinRange(t.getSprite("boat").x, -120, 5, "Expected Sprite boat to have x-position -120 +-5");
  t.assert.withinRange(t.getSprite("boat").y, -82, 5, "Expected Sprite boat to have y-position -82 +-5");
  t.assert.equal(t.getStage().getVariable("time", false).value, "1.9000000000000006", "Expected time to have value 1.9000000000000006");
  await t.runForSteps(42);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("boat").currentCostume, 0, "Expected Sprite boat to have costume 0");
  t.assert.equal(t.getSprite("boat").direction, 47.97205591423471, 1, "Expected Sprite boat to face in direction 47.97205591423471 +-1");
  t.assert.equal(t.getSprite("gate").direction, -151.02594138359734, 1, "Expected Sprite gate to face in direction -151.02594138359734 +-1");
  t.assert.withinRange(t.getSprite("boat").x, -175.8864505672029, 5, "Expected Sprite boat to have x-position -175.8864505672029 +-5");
  t.assert.withinRange(t.getSprite("boat").y, -137.27963355842334, 5, "Expected Sprite boat to have y-position -137.27963355842334 +-5");
  t.assert.not(t.getSprite("boat").sayText, "Expected Sprite boat not to say anything");
  t.assert.equal(t.getStage().getVariable("time", false).value, "2.9000000000000012", "Expected time to have value 2.9000000000000012");
  t.end();
}
const test1 = async function (t) {
  t.dragSprite('boat', 188.9694348489435, -165.0794612404963, null);
  await t.runForSteps(1);
  await t.runForSteps(68);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("boat").currentCostume, 1, "Expected Sprite boat to have costume 1");
  t.assert.equal(t.getSprite("boat").direction, 51.70983680775691, 1, "Expected Sprite boat to face in direction 51.70983680775691 +-1");
  t.assert.equal(t.getSprite("gate").direction, 159.97405861640266, 1, "Expected Sprite gate to face in direction 159.97405861640266 +-1");
  t.assert.withinRange(t.getSprite("boat").x, -174.30234468933122, 5, "Expected Sprite boat to have x-position -174.30234468933122 +-5");
  t.assert.withinRange(t.getSprite("boat").y, -137.6071142284195, 5, "Expected Sprite boat to have y-position -137.6071142284195 +-5");
  t.assert.equal(t.getSprite("boat").sayText, "Noooooo!", "Expected Sprite boat to say Noooooo!");
  t.assert.equal(t.getStage().getVariable("time", false).value, "1.7000000000000004", "Expected time to have value 1.7000000000000004");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724933421717',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724933421717',
      type: 'standard',
  }
]
