const test0 = async function (t) {
  t.dragSprite('boat', -120, -82, null);
  await t.runForSteps(1);
  t.dragSprite('boat', 170.74282222381282, -130.1990355948775, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("boat").direction, -52.67285972372426, 1, "Expected Sprite boat to face in direction -52.67285972372426 +-1");
  t.assert.equal(t.getSprite("gate").direction, 91.97405861640266, 1, "Expected Sprite gate to face in direction 91.97405861640266 +-1");
  t.assert.withinRange(t.getSprite("boat").x, 169.94763588112818, 5, "Expected Sprite boat to have x-position 169.94763588112818 +-5");
  t.assert.withinRange(t.getSprite("boat").y, -129.59267045702094, 5, "Expected Sprite boat to have y-position -129.59267045702094 +-5");
  t.assert.equal(t.getSprite("boat").sayText, "YEAH!", "Expected Sprite boat to say YEAH!");
  await t.runForSteps(100);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("gate").direction, 121.97405861640266, 1, "Expected Sprite gate to face in direction 121.97405861640266 +-1");
  t.assert.not(t.getSprite("boat").sayText, "Expected Sprite boat not to say anything");
  t.assert.equal(t.getStage().getVariable("time", false).value, "0.7", "Expected time to have value 0.7");
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(7);
  await t.runForSteps(1);
  t.mouseMove(-47, -72);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("boat").direction, 61.88674129079203, 1, "Expected Sprite boat to face in direction 61.88674129079203 +-1");
  t.assert.equal(t.getSprite("gate").direction, 98.97405861640266, 1, "Expected Sprite gate to face in direction 98.97405861640266 +-1");
  t.assert.withinRange(t.getSprite("boat").x, -182.83892002931142, 5, "Expected Sprite boat to have x-position -182.83892002931142 +-5");
  t.assert.withinRange(t.getSprite("boat").y, -144.57162969143278, 5, "Expected Sprite boat to have y-position -144.57162969143278 +-5");
  await t.runForSteps(78);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("boat").currentCostume, 1, "Expected Sprite boat to have costume 1");
  t.assert.equal(t.getSprite("boat").direction, 61.38954033403474, 1, "Expected Sprite boat to face in direction 61.38954033403474 +-1");
  t.assert.equal(t.getSprite("gate").direction, 177.97405861640266, 1, "Expected Sprite gate to face in direction 177.97405861640266 +-1");
  t.assert.withinRange(t.getSprite("boat").x, -175.0757752604555, 5, "Expected Sprite boat to have x-position -175.0757752604555 +-5");
  t.assert.withinRange(t.getSprite("boat").y, -141.8595137784304, 5, "Expected Sprite boat to have y-position -141.8595137784304 +-5");
  t.assert.equal(t.getSprite("boat").sayText, "Noooooo!", "Expected Sprite boat to say Noooooo!");
  t.assert.equal(t.getStage().getVariable("time", false).value, "2.2000000000000006", "Expected time to have value 2.2000000000000006");
  t.mouseMove(42, -152);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("gate").direction, 178.97405861640266, 1, "Expected Sprite gate to face in direction 178.97405861640266 +-1");
  await t.runForSteps(5);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("boat").currentCostume, 0, "Expected Sprite boat to have costume 0");
  t.assert.equal(t.getSprite("boat").direction, 0, 1, "Expected Sprite boat to face in direction 0 +-1");
  t.assert.equal(t.getSprite("gate").direction, -175.02594138359734, 1, "Expected Sprite gate to face in direction -175.02594138359734 +-1");
  t.assert.withinRange(t.getSprite("boat").x, -190, 5, "Expected Sprite boat to have x-position -190 +-5");
  t.assert.withinRange(t.getSprite("boat").y, -150, 5, "Expected Sprite boat to have y-position -150 +-5");
  t.assert.not(t.getSprite("boat").sayText, "Expected Sprite boat not to say anything");
  t.assert.equal(t.getStage().getVariable("time", false).value, "2.3000000000000007", "Expected time to have value 2.3000000000000007");
  t.dragSprite('boat', -120, -82, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("boat").direction, 113.36911316348207, 1, "Expected Sprite boat to face in direction 113.36911316348207 +-1");
  t.assert.equal(t.getSprite("gate").direction, -174.02594138359734, 1, "Expected Sprite gate to face in direction -174.02594138359734 +-1");
  t.assert.withinRange(t.getSprite("boat").x, -116.3281256575496, 5, "Expected Sprite boat to have x-position -116.3281256575496 +-5");
  t.assert.withinRange(t.getSprite("boat").y, -83.5866123701946, 5, "Expected Sprite boat to have y-position -83.5866123701946 +-5");
  t.assert.equal(t.getStage().getVariable("time", false).value, "2.400000000000001", "Expected time to have value 2.400000000000001");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724670929887',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724670929887',
      type: 'standard',
  }
]
