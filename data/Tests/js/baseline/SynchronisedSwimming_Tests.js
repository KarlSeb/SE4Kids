const test0 = async function (t) {
  t.keyPress('up arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.end();
}
const test1 = async function (t) {
  t.keyPress('up arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.keyPress('space', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).currentCostume, 2, "Expected Clone 6 of Cat1 Flying to have costume 2");
  t.assert.equal(t.getSprite("Cat1 Flying").getCloneCount(), 6, "Expected Sprite Cat1 Flying to have 6 clones");
  t.assert.equal(t.getSprite("Cat1 Flying").direction, 110, 1, "Expected Sprite Cat1 Flying to face in direction 110 +-1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(1).direction, 170, 1, "Expected Clone 1 of Cat1 Flying to face in direction 170 +-1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(2).direction, -130, 1, "Expected Clone 2 of Cat1 Flying to face in direction -130 +-1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(3).direction, -70, 1, "Expected Clone 3 of Cat1 Flying to face in direction -70 +-1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(4).direction, -10, 1, "Expected Clone 4 of Cat1 Flying to face in direction -10 +-1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(5).direction, 50, 1, "Expected Clone 5 of Cat1 Flying to face in direction 50 +-1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).direction, 90, 1, "Expected Clone 6 of Cat1 Flying to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).effects.color, 0, "Expected effect color of Clone 6 of Cat1 Flying to be 0");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).effects.fisheye, 0, "Expected effect fisheye of Clone 6 of Cat1 Flying to be 0");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).effects.whirl, 0, "Expected effect whirl of Clone 6 of Cat1 Flying to be 0");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).effects.pixelate, 0, "Expected effect pixelate of Clone 6 of Cat1 Flying to be 0");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).effects.mosaic, 0, "Expected effect mosaic of Clone 6 of Cat1 Flying to be 0");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).effects.brightness, 0, "Expected effect brightness of Clone 6 of Cat1 Flying to be 0");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).effects.ghost, 0, "Expected effect ghost of Clone 6 of Cat1 Flying to be 0");
  t.assert.equal(t.getSprite("Cat1 Flying").layerOrder, 7, "Expected Sprite Cat1 Flying to be at layer 7");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).getLayerOrder(), 6, "Expected Clone 6 of Cat1 Flying to be at layer 6");
  t.assert.withinRange(t.getSprite("Cat1 Flying").x, 24.245003737981165, 5, "Expected Sprite Cat1 Flying to have x-position 24.245003737981165 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").y, -13.816937247770376, 5, "Expected Sprite Cat1 Flying to have y-position -13.816937247770376 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(1).x, 5.156683209925992, 5, "Expected Clone 1 of Cat1 Flying to have x-position 5.156683209925992 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(1).y, -19.245003737981165, 5, "Expected Clone 1 of Cat1 Flying to have y-position -19.245003737981165 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(2).x, -9.088320528055174, 5, "Expected Clone 2 of Cat1 Flying to have x-position -9.088320528055174 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(2).y, -22.748574565899556, 5, "Expected Clone 2 of Cat1 Flying to have y-position -22.748574565899556 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(3).x, -14.245003737981161, 5, "Expected Clone 3 of Cat1 Flying to have x-position -14.245003737981161 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(3).y, -3.503570827918394, 5, "Expected Clone 3 of Cat1 Flying to have y-position -3.503570827918394 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(4).x, -0.15668320992598916, 5, "Expected Clone 4 of Cat1 Flying to have x-position -0.15668320992598916 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(4).y, 10.58474970013678, 5, "Expected Clone 4 of Cat1 Flying to have y-position 10.58474970013678 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(5).x, 19.088320528055174, 5, "Expected Clone 5 of Cat1 Flying to have x-position 19.088320528055174 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(5).y, 5.428066490210787, 5, "Expected Clone 5 of Cat1 Flying to have y-position 5.428066490210787 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(6).x, 5.000000000000001, 5, "Expected Clone 6 of Cat1 Flying to have x-position 5.000000000000001 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(6).y, -8.660254037844386, 5, "Expected Clone 6 of Cat1 Flying to have y-position -8.660254037844386 +-5");
  t.assert.not(t.getSprite("Cat1 Flying").getClone(6).sayText, "Expected Clone 6 of Cat1 Flying not to say anything");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(6).size, 100, 1, "Expected Clone 6 of Cat1 Flying to have size 100 +-1");
  t.assert.ok(t.getSprite("Cat1 Flying").getClone(6).visible, "Expected Clone 6 of Cat1 Flying to be visible");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).volume, 100, "Expected Clone 6 of Cat1 Flying to have volume 100");
  t.end();
}
const test2 = async function (t) {
  t.keyPress('up arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.keyPress('left arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Cat1 Flying").currentCostume, 1, "Expected Sprite Cat1 Flying to have costume 1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(1).currentCostume, 1, "Expected Clone 1 of Cat1 Flying to have costume 1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(2).currentCostume, 1, "Expected Clone 2 of Cat1 Flying to have costume 1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(3).currentCostume, 1, "Expected Clone 3 of Cat1 Flying to have costume 1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(4).currentCostume, 1, "Expected Clone 4 of Cat1 Flying to have costume 1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(5).currentCostume, 1, "Expected Clone 5 of Cat1 Flying to have costume 1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).currentCostume, 2, "Expected Clone 6 of Cat1 Flying to have costume 2");
  t.assert.equal(t.getSprite("Cat1 Flying").getCloneCount(), 6, "Expected Sprite Cat1 Flying to have 6 clones");
  t.assert.equal(t.getSprite("Cat1 Flying").direction, 75, 1, "Expected Sprite Cat1 Flying to face in direction 75 +-1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(1).direction, 135, 1, "Expected Clone 1 of Cat1 Flying to face in direction 135 +-1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(2).direction, -165, 1, "Expected Clone 2 of Cat1 Flying to face in direction -165 +-1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(3).direction, -105, 1, "Expected Clone 3 of Cat1 Flying to face in direction -105 +-1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(4).direction, -45, 1, "Expected Clone 4 of Cat1 Flying to face in direction -45 +-1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(5).direction, 15, 1, "Expected Clone 5 of Cat1 Flying to face in direction 15 +-1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).direction, 90, 1, "Expected Clone 6 of Cat1 Flying to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).effects.color, 0, "Expected effect color of Clone 6 of Cat1 Flying to be 0");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).effects.fisheye, 0, "Expected effect fisheye of Clone 6 of Cat1 Flying to be 0");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).effects.whirl, 0, "Expected effect whirl of Clone 6 of Cat1 Flying to be 0");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).effects.pixelate, 0, "Expected effect pixelate of Clone 6 of Cat1 Flying to be 0");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).effects.mosaic, 0, "Expected effect mosaic of Clone 6 of Cat1 Flying to be 0");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).effects.brightness, 0, "Expected effect brightness of Clone 6 of Cat1 Flying to be 0");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).effects.ghost, 0, "Expected effect ghost of Clone 6 of Cat1 Flying to be 0");
  t.assert.equal(t.getSprite("Cat1 Flying").layerOrder, 7, "Expected Sprite Cat1 Flying to be at layer 7");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).getLayerOrder(), 6, "Expected Clone 6 of Cat1 Flying to be at layer 6");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(6).x, 5.000000000000001, 5, "Expected Clone 6 of Cat1 Flying to have x-position 5.000000000000001 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(6).y, -8.660254037844386, 5, "Expected Clone 6 of Cat1 Flying to have y-position -8.660254037844386 +-5");
  t.assert.not(t.getSprite("Cat1 Flying").getClone(6).sayText, "Expected Clone 6 of Cat1 Flying not to say anything");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(6).size, 100, 1, "Expected Clone 6 of Cat1 Flying to have size 100 +-1");
  t.assert.ok(t.getSprite("Cat1 Flying").getClone(6).visible, "Expected Clone 6 of Cat1 Flying to be visible");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).volume, 100, "Expected Clone 6 of Cat1 Flying to have volume 100");
  t.end();
}
const test3 = async function (t) {
  t.keyPress('up arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.keyPress('right arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).currentCostume, 2, "Expected Clone 6 of Cat1 Flying to have costume 2");
  t.assert.equal(t.getSprite("Cat1 Flying").getCloneCount(), 6, "Expected Sprite Cat1 Flying to have 6 clones");
  t.assert.equal(t.getSprite("Cat1 Flying").direction, 105, 1, "Expected Sprite Cat1 Flying to face in direction 105 +-1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(1).direction, 165, 1, "Expected Clone 1 of Cat1 Flying to face in direction 165 +-1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(2).direction, -135, 1, "Expected Clone 2 of Cat1 Flying to face in direction -135 +-1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(3).direction, -75, 1, "Expected Clone 3 of Cat1 Flying to face in direction -75 +-1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(4).direction, -15, 1, "Expected Clone 4 of Cat1 Flying to face in direction -15 +-1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(5).direction, 45, 1, "Expected Clone 5 of Cat1 Flying to face in direction 45 +-1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).direction, 90, 1, "Expected Clone 6 of Cat1 Flying to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).effects.color, 0, "Expected effect color of Clone 6 of Cat1 Flying to be 0");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).effects.fisheye, 0, "Expected effect fisheye of Clone 6 of Cat1 Flying to be 0");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).effects.whirl, 0, "Expected effect whirl of Clone 6 of Cat1 Flying to be 0");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).effects.pixelate, 0, "Expected effect pixelate of Clone 6 of Cat1 Flying to be 0");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).effects.mosaic, 0, "Expected effect mosaic of Clone 6 of Cat1 Flying to be 0");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).effects.brightness, 0, "Expected effect brightness of Clone 6 of Cat1 Flying to be 0");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).effects.ghost, 0, "Expected effect ghost of Clone 6 of Cat1 Flying to be 0");
  t.assert.equal(t.getSprite("Cat1 Flying").layerOrder, 7, "Expected Sprite Cat1 Flying to be at layer 7");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).getLayerOrder(), 6, "Expected Clone 6 of Cat1 Flying to be at layer 6");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(6).x, 5.000000000000001, 5, "Expected Clone 6 of Cat1 Flying to have x-position 5.000000000000001 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(6).y, -8.660254037844386, 5, "Expected Clone 6 of Cat1 Flying to have y-position -8.660254037844386 +-5");
  t.assert.not(t.getSprite("Cat1 Flying").getClone(6).sayText, "Expected Clone 6 of Cat1 Flying not to say anything");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(6).size, 100, 1, "Expected Clone 6 of Cat1 Flying to have size 100 +-1");
  t.assert.ok(t.getSprite("Cat1 Flying").getClone(6).visible, "Expected Clone 6 of Cat1 Flying to be visible");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).volume, 100, "Expected Clone 6 of Cat1 Flying to have volume 100");
  t.end();
}
const test4 = async function (t) {
  t.keyPress('up arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.keyPress('down arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).currentCostume, 2, "Expected Clone 6 of Cat1 Flying to have costume 2");
  t.assert.equal(t.getSprite("Cat1 Flying").getCloneCount(), 6, "Expected Sprite Cat1 Flying to have 6 clones");
  t.assert.equal(t.getSprite("Cat1 Flying").direction, 90, 1, "Expected Sprite Cat1 Flying to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).direction, 90, 1, "Expected Clone 6 of Cat1 Flying to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).effects.color, 0, "Expected effect color of Clone 6 of Cat1 Flying to be 0");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).effects.fisheye, 0, "Expected effect fisheye of Clone 6 of Cat1 Flying to be 0");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).effects.whirl, 0, "Expected effect whirl of Clone 6 of Cat1 Flying to be 0");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).effects.pixelate, 0, "Expected effect pixelate of Clone 6 of Cat1 Flying to be 0");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).effects.mosaic, 0, "Expected effect mosaic of Clone 6 of Cat1 Flying to be 0");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).effects.brightness, 0, "Expected effect brightness of Clone 6 of Cat1 Flying to be 0");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).effects.ghost, 0, "Expected effect ghost of Clone 6 of Cat1 Flying to be 0");
  t.assert.equal(t.getSprite("Cat1 Flying").layerOrder, 7, "Expected Sprite Cat1 Flying to be at layer 7");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).getLayerOrder(), 6, "Expected Clone 6 of Cat1 Flying to be at layer 6");
  t.assert.withinRange(t.getSprite("Cat1 Flying").x, -4.999999999999999, 5, "Expected Sprite Cat1 Flying to have x-position -4.999999999999999 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").y, -8.660254037844386, 5, "Expected Sprite Cat1 Flying to have y-position -8.660254037844386 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(1).x, -5.000000000000001, 5, "Expected Clone 1 of Cat1 Flying to have x-position -5.000000000000001 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(1).y, 8.660254037844386, 5, "Expected Clone 1 of Cat1 Flying to have y-position 8.660254037844386 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(2).x, 10.000000000000005, 5, "Expected Clone 2 of Cat1 Flying to have x-position 10.000000000000005 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(2).y, 0, 5, "Expected Clone 2 of Cat1 Flying to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(3).x, 15, 5, "Expected Clone 3 of Cat1 Flying to have x-position 15 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(3).y, -8.660254037844387, 5, "Expected Clone 3 of Cat1 Flying to have y-position -8.660254037844387 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(4).x, 10, 5, "Expected Clone 4 of Cat1 Flying to have x-position 10 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(4).y, -17.32050807568877, 5, "Expected Clone 4 of Cat1 Flying to have y-position -17.32050807568877 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(5).x, 0, 5, "Expected Clone 5 of Cat1 Flying to have x-position 0 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(5).y, -17.32050807568877, 5, "Expected Clone 5 of Cat1 Flying to have y-position -17.32050807568877 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(6).x, 5.000000000000001, 5, "Expected Clone 6 of Cat1 Flying to have x-position 5.000000000000001 +-5");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(6).y, -8.660254037844386, 5, "Expected Clone 6 of Cat1 Flying to have y-position -8.660254037844386 +-5");
  t.assert.not(t.getSprite("Cat1 Flying").getClone(6).sayText, "Expected Clone 6 of Cat1 Flying not to say anything");
  t.assert.withinRange(t.getSprite("Cat1 Flying").getClone(6).size, 100, 1, "Expected Clone 6 of Cat1 Flying to have size 100 +-1");
  t.assert.ok(t.getSprite("Cat1 Flying").getClone(6).visible, "Expected Clone 6 of Cat1 Flying to be visible");
  t.assert.equal(t.getSprite("Cat1 Flying").getClone(6).volume, 100, "Expected Clone 6 of Cat1 Flying to have volume 100");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724935618981',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724935618981',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724935618981',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724935618981',
      type: 'standard',
  },
  {
      test: test4,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724935618981',
      type: 'standard',
  }
]
