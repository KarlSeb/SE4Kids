const test0 = async function (t) {
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(52);
  await t.runForSteps(1);
  t.keyPress('space', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Cat1 Flying").direction, 140, 1, "Expected Sprite Cat1 Flying to face in direction 140 +-1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(1).direction, -160, 1, "Expected Clone 1 of Cat1 Flying to face in direction -160 +-1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(2).direction, -100, 1, "Expected Clone 2 of Cat1 Flying to face in direction -100 +-1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(3).direction, -40, 1, "Expected Clone 3 of Cat1 Flying to face in direction -40 +-1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(4).direction, 20, 1, "Expected Clone 4 of Cat1 Flying to face in direction 20 +-1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(5).direction, 80, 1, "Expected Clone 5 of Cat1 Flying to face in direction 80 +-1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).direction, 140, 1, "Expected Clone 6 of Cat1 Flying to face in direction 140 +-1");
  t.assert.withinRange(t.getSprite("Cat1 Flying").x, 41.993578303880724, 5, "Expected Sprite Cat1 Flying to have x-position 41.993578303880724 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").y, -24.245003737981165, 5, "Expected Sprite Cat1 Flying to have y-position -24.245003737981165 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(1).x, -3.9968028886505635e-15, 5, "Expected Clone 1 of Cat1 Flying to have x-position -3.9968028886505635e-15 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(1).y, -48.49000747596233, 5, "Expected Clone 1 of Cat1 Flying to have y-position -48.49000747596233 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(2).x, -41.993578303880724, 5, "Expected Clone 2 of Cat1 Flying to have x-position -41.993578303880724 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(2).y, -24.24500373798116, 5, "Expected Clone 2 of Cat1 Flying to have y-position -24.24500373798116 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(3).x, -41.993578303880724, 5, "Expected Clone 3 of Cat1 Flying to have x-position -41.993578303880724 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(3).y, 24.245003737981165, 5, "Expected Clone 3 of Cat1 Flying to have y-position 24.245003737981165 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(4).x, 3.1086244689504383e-15, 5, "Expected Clone 4 of Cat1 Flying to have x-position 3.1086244689504383e-15 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(4).y, 48.49000747596233, 5, "Expected Clone 4 of Cat1 Flying to have y-position 48.49000747596233 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(5).x, 41.993578303880724, 5, "Expected Clone 5 of Cat1 Flying to have x-position 41.993578303880724 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(5).y, 24.24500373798116, 5, "Expected Clone 5 of Cat1 Flying to have y-position 24.24500373798116 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(6).x, 41.993578303880724, 5, "Expected Clone 6 of Cat1 Flying to have x-position 41.993578303880724 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(6).y, -24.245003737981165, 5, "Expected Clone 6 of Cat1 Flying to have y-position -24.245003737981165 +-5");
  t.end();
}
const test2 = async function (t) {
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.keyPress('left arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Cat1 Flying").currentCostume, 1, "Expected Sprite Cat1 Flying to have costume 1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(1).currentCostume, 1, "Expected Clone 1 of Cat1 Flying to have costume 1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(2).currentCostume, 1, "Expected Clone 2 of Cat1 Flying to have costume 1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(3).currentCostume, 1, "Expected Clone 3 of Cat1 Flying to have costume 1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(4).currentCostume, 1, "Expected Clone 4 of Cat1 Flying to have costume 1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(5).currentCostume, 1, "Expected Clone 5 of Cat1 Flying to have costume 1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).currentCostume, 2, "Expected Clone 6 of Cat1 Flying to have costume 2");
  t.assert.equal(t.getSprite("Cat1 Flying").getCloneCount(), 6, "Expected Sprite Cat1 Flying to have 6 clones");
  t.assert.equal(t.getSprite("Cat1 Flying").direction, 90, 1, "Expected Sprite Cat1 Flying to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(1).direction, 135, 1, "Expected Clone 1 of Cat1 Flying to face in direction 135 +-1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(2).direction, -150, 1, "Expected Clone 2 of Cat1 Flying to face in direction -150 +-1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(3).direction, -90, 1, "Expected Clone 3 of Cat1 Flying to face in direction -90 +-1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(4).direction, -30, 1, "Expected Clone 4 of Cat1 Flying to face in direction -30 +-1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(5).direction, 30, 1, "Expected Clone 5 of Cat1 Flying to face in direction 30 +-1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).direction, 105, 1, "Expected Clone 6 of Cat1 Flying to face in direction 105 +-1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).effects.color, 0, "Expected effect color of Clone 6 of Cat1 Flying to be 0");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).effects.fisheye, 0, "Expected effect fisheye of Clone 6 of Cat1 Flying to be 0");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).effects.whirl, 0, "Expected effect whirl of Clone 6 of Cat1 Flying to be 0");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).effects.pixelate, 0, "Expected effect pixelate of Clone 6 of Cat1 Flying to be 0");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).effects.mosaic, 0, "Expected effect mosaic of Clone 6 of Cat1 Flying to be 0");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).effects.brightness, 0, "Expected effect brightness of Clone 6 of Cat1 Flying to be 0");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).effects.ghost, 0, "Expected effect ghost of Clone 6 of Cat1 Flying to be 0");
  t.assert.equal(t.getSprite("Cat1 Flying").layerOrder, 7, "Expected Sprite Cat1 Flying to be at layer 7");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).getLayerOrder(), 6, "Expected Clone 6 of Cat1 Flying to be at layer 6");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(6).x, 0, 5, "Expected Clone 6 of Cat1 Flying to have x-position 0 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(6).y, 0, 5, "Expected Clone 6 of Cat1 Flying to have y-position 0 +-5");
  t.assert.not(t.getSprite("Cat1 Flying").getClone(6).sayText, "Expected Clone 6 of Cat1 Flying not to say anything");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(6).size, 100, 1, "Expected Clone 6 of Cat1 Flying to have size 100 +-1");
  t.assert.ok(t.getSprite("Cat1 Flying").getClone(6).visible, "Expected Clone 6 of Cat1 Flying to be visible");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).volume, 100, "Expected Clone 6 of Cat1 Flying to have volume 100");
  t.end();
}
const test3 = async function (t) {
  await t.runForSteps(52);
  await t.runForSteps(1);
  t.keyPress('up arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Cat1 Flying").x, 10, 5, "Expected Sprite Cat1 Flying to have x-position 10 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").y, 0, 5, "Expected Sprite Cat1 Flying to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(1).x, 5.000000000000001, 5, "Expected Clone 1 of Cat1 Flying to have x-position 5.000000000000001 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(1).y, -8.660254037844386, 5, "Expected Clone 1 of Cat1 Flying to have y-position -8.660254037844386 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(2).x, -5.000000000000004, 5, "Expected Clone 2 of Cat1 Flying to have x-position -5.000000000000004 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(2).y, -8.660254037844386, 5, "Expected Clone 2 of Cat1 Flying to have y-position -8.660254037844386 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(3).x, -10, 5, "Expected Clone 3 of Cat1 Flying to have x-position -10 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(3).y, 1.2246467991473533e-15, 5, "Expected Clone 3 of Cat1 Flying to have y-position 1.2246467991473533e-15 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(4).x, -4.999999999999998, 5, "Expected Clone 4 of Cat1 Flying to have x-position -4.999999999999998 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(4).y, 8.660254037844387, 5, "Expected Clone 4 of Cat1 Flying to have y-position 8.660254037844387 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(5).x, 5.000000000000001, 5, "Expected Clone 5 of Cat1 Flying to have x-position 5.000000000000001 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(5).y, 8.660254037844386, 5, "Expected Clone 5 of Cat1 Flying to have y-position 8.660254037844386 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(6).x, 10, 5, "Expected Clone 6 of Cat1 Flying to have x-position 10 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(6).y, 0, 5, "Expected Clone 6 of Cat1 Flying to have y-position 0 +-5");
  t.end();
}
const test4 = async function (t) {
  await t.runForSteps(52);
  await t.runForSteps(1);
  t.keyPress('down arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Cat1 Flying").x, -10, 5, "Expected Sprite Cat1 Flying to have x-position -10 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").y, 0, 5, "Expected Sprite Cat1 Flying to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(1).x, -5.000000000000001, 5, "Expected Clone 1 of Cat1 Flying to have x-position -5.000000000000001 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(1).y, 8.660254037844386, 5, "Expected Clone 1 of Cat1 Flying to have y-position 8.660254037844386 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(2).x, 5.000000000000004, 5, "Expected Clone 2 of Cat1 Flying to have x-position 5.000000000000004 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(2).y, 8.660254037844386, 5, "Expected Clone 2 of Cat1 Flying to have y-position 8.660254037844386 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(3).x, 10, 5, "Expected Clone 3 of Cat1 Flying to have x-position 10 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(3).y, -1.2246467991473533e-15, 5, "Expected Clone 3 of Cat1 Flying to have y-position -1.2246467991473533e-15 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(4).x, 4.999999999999998, 5, "Expected Clone 4 of Cat1 Flying to have x-position 4.999999999999998 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(4).y, -8.660254037844387, 5, "Expected Clone 4 of Cat1 Flying to have y-position -8.660254037844387 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(5).x, -5.000000000000001, 5, "Expected Clone 5 of Cat1 Flying to have x-position -5.000000000000001 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(5).y, -8.660254037844386, 5, "Expected Clone 5 of Cat1 Flying to have y-position -8.660254037844386 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(6).x, -10, 5, "Expected Clone 6 of Cat1 Flying to have x-position -10 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(6).y, 0, 5, "Expected Clone 6 of Cat1 Flying to have y-position 0 +-5");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724675309835',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724675309835',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724675309835',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724675309835',
      type: 'standard',
  },
  {
      test: test4,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724675309835',
      type: 'standard',
  }
]
