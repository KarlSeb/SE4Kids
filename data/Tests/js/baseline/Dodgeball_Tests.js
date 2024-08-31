const test0 = async function (t) {
  t.dragSprite('Pico walking', 233.8785575850556, 109.37478938828686, null);
  await t.runForSteps(1);
  await t.runForSteps(480);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Ball").getClone(1).currentCostume, 0, "Expected Clone 1 of Ball to have costume 0");
  t.assert.equal(t.getSprite("Ball").getClone(2).currentCostume, 2, "Expected Clone 2 of Ball to have costume 2");
  t.assert.equal(t.getSprite("Ball").getClone(3).currentCostume, 2, "Expected Clone 3 of Ball to have costume 2");
  t.assert.equal(t.getSprite("Ball").getCloneCount(), 3, "Expected Sprite Ball to have 3 clones");
  t.assert.equal(t.getSprite("Ball").getClone(1).direction, 150, 1, "Expected Clone 1 of Ball to face in direction 150 +-1");
  t.assert.equal(t.getSprite("Ball").getClone(2).direction, 144, 1, "Expected Clone 2 of Ball to face in direction 144 +-1");
  t.assert.equal(t.getSprite("Ball").getClone(3).direction, 42, 1, "Expected Clone 3 of Ball to face in direction 42 +-1");
  t.assert.equal(t.getSprite("Ball").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(2).effects.color, 0, "Expected effect color of Clone 2 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(2).effects.fisheye, 0, "Expected effect fisheye of Clone 2 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(2).effects.whirl, 0, "Expected effect whirl of Clone 2 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(2).effects.pixelate, 0, "Expected effect pixelate of Clone 2 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(2).effects.mosaic, 0, "Expected effect mosaic of Clone 2 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(2).effects.brightness, 0, "Expected effect brightness of Clone 2 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(2).effects.ghost, 0, "Expected effect ghost of Clone 2 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(3).effects.color, 0, "Expected effect color of Clone 3 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(3).effects.fisheye, 0, "Expected effect fisheye of Clone 3 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(3).effects.whirl, 0, "Expected effect whirl of Clone 3 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(3).effects.pixelate, 0, "Expected effect pixelate of Clone 3 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(3).effects.mosaic, 0, "Expected effect mosaic of Clone 3 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(3).effects.brightness, 0, "Expected effect brightness of Clone 3 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(3).effects.ghost, 0, "Expected effect ghost of Clone 3 of Ball to be 0");
  t.assert.equal(t.getSprite("Pico walking").layerOrder, 7, "Expected Sprite Pico walking to be at layer 7");
  t.assert.equal(t.getSprite("Ball").layerOrder, 6, "Expected Sprite Ball to be at layer 6");
  t.assert.equal(t.getSprite("Ball").getClone(1).getLayerOrder(), 3, "Expected Clone 1 of Ball to be at layer 3");
  t.assert.equal(t.getSprite("Ball").getClone(2).getLayerOrder(), 4, "Expected Clone 2 of Ball to be at layer 4");
  t.assert.equal(t.getSprite("Ball").getClone(3).getLayerOrder(), 5, "Expected Clone 3 of Ball to be at layer 5");
  t.assert.withinRange(t.getSprite("Pico walking").x, -210, 5, "Expected Sprite Pico walking to have x-position -210 +-5");
  t.assert.withinRange(t.getSprite("Pico walking").y, -152, 5, "Expected Sprite Pico walking to have y-position -152 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(1).x, 60, 5, "Expected Clone 1 of Ball to have x-position 60 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(1).y, -48, 5, "Expected Clone 1 of Ball to have y-position -48 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(2).x, -182, 5, "Expected Clone 2 of Ball to have x-position -182 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(2).y, -48, 5, "Expected Clone 2 of Ball to have y-position -48 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(3).x, 24, 5, "Expected Clone 3 of Ball to have x-position 24 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(3).y, 72, 5, "Expected Clone 3 of Ball to have y-position 72 +-5");
  t.assert.not(t.getSprite("Ball").getClone(1).sayText, "Expected Clone 1 of Ball not to say anything");
  t.assert.not(t.getSprite("Ball").getClone(2).sayText, "Expected Clone 2 of Ball not to say anything");
  t.assert.not(t.getSprite("Ball").getClone(3).sayText, "Expected Clone 3 of Ball not to say anything");
  t.assert.withinRange(t.getSprite("Ball").getClone(1).size, 43, 1, "Expected Clone 1 of Ball to have size 43 +-1");
  t.assert.withinRange(t.getSprite("Ball").getClone(2).size, 40, 1, "Expected Clone 2 of Ball to have size 40 +-1");
  t.assert.withinRange(t.getSprite("Ball").getClone(3).size, 33, 1, "Expected Clone 3 of Ball to have size 33 +-1");
  t.assert.ok(t.getSprite("Ball").getClone(1).visible, "Expected Clone 1 of Ball to be visible");
  t.assert.ok(t.getSprite("Ball").getClone(2).visible, "Expected Clone 2 of Ball to be visible");
  t.assert.ok(t.getSprite("Ball").getClone(3).visible, "Expected Clone 3 of Ball to be visible");
  t.assert.equal(t.getSprite("Ball").getClone(1).volume, 100, "Expected Clone 1 of Ball to have volume 100");
  t.assert.equal(t.getSprite("Ball").getClone(2).volume, 100, "Expected Clone 2 of Ball to have volume 100");
  t.assert.equal(t.getSprite("Ball").getClone(3).volume, 100, "Expected Clone 3 of Ball to have volume 100");
  await t.runForSteps(400);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Ball").getClone(2).currentCostume, 1, "Expected Clone 2 of Ball to have costume 1");
  t.assert.equal(t.getSprite("Ball").getClone(5).currentCostume, 0, "Expected Clone 5 of Ball to have costume 0");
  t.assert.equal(t.getSprite("Ball").getClone(4).currentCostume, 0, "Expected Clone 4 of Ball to have costume 0");
  t.assert.equal(t.getSprite("Ball").getCloneCount(), 5, "Expected Sprite Ball to have 5 clones");
  t.assert.equal(t.getSprite("Ball").getClone(1).direction, -84, 1, "Expected Clone 1 of Ball to face in direction -84 +-1");
  t.assert.equal(t.getSprite("Ball").getClone(2).direction, -162, 1, "Expected Clone 2 of Ball to face in direction -162 +-1");
  t.assert.equal(t.getSprite("Ball").getClone(5).direction, 90, 1, "Expected Clone 5 of Ball to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Ball").getClone(4).direction, -6, 1, "Expected Clone 4 of Ball to face in direction -6 +-1");
  t.assert.equal(t.getSprite("Ball").getClone(2).effects.color, 0, "Expected effect color of Clone 2 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(2).effects.fisheye, 0, "Expected effect fisheye of Clone 2 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(2).effects.whirl, 0, "Expected effect whirl of Clone 2 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(2).effects.pixelate, 0, "Expected effect pixelate of Clone 2 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(2).effects.mosaic, 0, "Expected effect mosaic of Clone 2 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(2).effects.brightness, 0, "Expected effect brightness of Clone 2 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(2).effects.ghost, 0, "Expected effect ghost of Clone 2 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(5).effects.color, 0, "Expected effect color of Clone 5 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(5).effects.fisheye, 0, "Expected effect fisheye of Clone 5 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(5).effects.whirl, 0, "Expected effect whirl of Clone 5 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(5).effects.pixelate, 0, "Expected effect pixelate of Clone 5 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(5).effects.mosaic, 0, "Expected effect mosaic of Clone 5 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(5).effects.brightness, 0, "Expected effect brightness of Clone 5 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(5).effects.ghost, 0, "Expected effect ghost of Clone 5 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(4).effects.color, 0, "Expected effect color of Clone 4 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(4).effects.fisheye, 0, "Expected effect fisheye of Clone 4 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(4).effects.whirl, 0, "Expected effect whirl of Clone 4 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(4).effects.pixelate, 0, "Expected effect pixelate of Clone 4 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(4).effects.mosaic, 0, "Expected effect mosaic of Clone 4 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(4).effects.brightness, 0, "Expected effect brightness of Clone 4 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(4).effects.ghost, 0, "Expected effect ghost of Clone 4 of Ball to be 0");
  t.assert.equal(t.getSprite("Pico walking").layerOrder, 9, "Expected Sprite Pico walking to be at layer 9");
  t.assert.equal(t.getSprite("Ball").layerOrder, 8, "Expected Sprite Ball to be at layer 8");
  t.assert.equal(t.getSprite("Ball").getClone(1).getLayerOrder(), 3, "Expected Clone 1 of Ball to be at layer 3");
  t.assert.equal(t.getSprite("Ball").getClone(2).getLayerOrder(), 4, "Expected Clone 2 of Ball to be at layer 4");
  t.assert.equal(t.getSprite("Ball").getClone(5).getLayerOrder(), 7, "Expected Clone 5 of Ball to be at layer 7");
  t.assert.equal(t.getSprite("Ball").getClone(4).getLayerOrder(), 6, "Expected Clone 4 of Ball to be at layer 6");
  t.assert.withinRange(t.getSprite("Ball").getClone(1).x, 102, 5, "Expected Clone 1 of Ball to have x-position 102 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(1).y, -168, 5, "Expected Clone 1 of Ball to have y-position -168 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(2).x, 76, 5, "Expected Clone 2 of Ball to have x-position 76 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(2).y, -48, 5, "Expected Clone 2 of Ball to have y-position -48 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(5).x, 160, 5, "Expected Clone 5 of Ball to have x-position 160 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(5).y, 132, 5, "Expected Clone 5 of Ball to have y-position 132 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(4).x, -112, 5, "Expected Clone 4 of Ball to have x-position -112 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(4).y, 72, 5, "Expected Clone 4 of Ball to have y-position 72 +-5");
  t.assert.not(t.getSprite("Ball").getClone(2).sayText, "Expected Clone 2 of Ball not to say anything");
  t.assert.not(t.getSprite("Ball").getClone(5).sayText, "Expected Clone 5 of Ball not to say anything");
  t.assert.not(t.getSprite("Ball").getClone(4).sayText, "Expected Clone 4 of Ball not to say anything");
  t.assert.withinRange(t.getSprite("Ball").getClone(2).size, 34, 1, "Expected Clone 2 of Ball to have size 34 +-1");
  t.assert.withinRange(t.getSprite("Ball").getClone(5).size, 50, 1, "Expected Clone 5 of Ball to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Ball").getClone(4).size, 32, 1, "Expected Clone 4 of Ball to have size 32 +-1");
  t.assert.ok(t.getSprite("Ball").getClone(2).visible, "Expected Clone 2 of Ball to be visible");
  t.assert.ok(t.getSprite("Ball").getClone(5).visible, "Expected Clone 5 of Ball to be visible");
  t.assert.ok(t.getSprite("Ball").getClone(4).visible, "Expected Clone 4 of Ball to be visible");
  t.assert.equal(t.getSprite("Ball").getClone(2).volume, 100, "Expected Clone 2 of Ball to have volume 100");
  t.assert.equal(t.getSprite("Ball").getClone(5).volume, 100, "Expected Clone 5 of Ball to have volume 100");
  t.assert.equal(t.getSprite("Ball").getClone(4).volume, 100, "Expected Clone 4 of Ball to have volume 100");
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(38);
  await t.runForSteps(1);
  t.keyPress('left arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Pico walking").currentCostume, 3, "Expected Sprite Pico walking to have costume 3");
  t.assert.equal(t.getSprite("Pico walking").direction, -90, 1, "Expected Sprite Pico walking to face in direction -90 +-1");
  t.assert.withinRange(t.getSprite("Pico walking").x, -213, 5, "Expected Sprite Pico walking to have x-position -213 +-5");
  t.assert.withinRange(t.getSprite("Pico walking").y, -152, 5, "Expected Sprite Pico walking to have y-position -152 +-5");
  await t.runForSteps(58);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Laser").currentCostume, 1, "Expected Sprite Laser to have costume 1");
  t.assert.equal(t.getSprite("Trapdoor").currentCostume, 1, "Expected Sprite Trapdoor to have costume 1");
  t.dragSprite('Pico walking', 240, 44.25393411285337, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pico walking").x, 240, 5, "Expected Sprite Pico walking to have x-position 240 +-5");
  t.assert.withinRange(t.getSprite("Pico walking").y, 44.25393411285337, 5, "Expected Sprite Pico walking to have y-position 44.25393411285337 +-5");
  t.assert.equal(t.getSprite("Pico walking").sayText, ":)", "Expected Sprite Pico walking to say :)");
  await t.runForSteps(20);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Ball").getClone(1).currentCostume, 1, "Expected Clone 1 of Ball to have costume 1");
  t.assert.equal(t.getSprite("Ball").getCloneCount(), 1, "Expected Sprite Ball to have 1 clones");
  t.assert.equal(t.getSprite("Ball").getClone(1).direction, 90, 1, "Expected Clone 1 of Ball to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Ball").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Ball to be 0");
  t.assert.equal(t.getSprite("Pico walking").layerOrder, 5, "Expected Sprite Pico walking to be at layer 5");
  t.assert.equal(t.getSprite("Ball").layerOrder, 4, "Expected Sprite Ball to be at layer 4");
  t.assert.equal(t.getSprite("Ball").getClone(1).getLayerOrder(), 3, "Expected Clone 1 of Ball to be at layer 3");
  t.assert.withinRange(t.getSprite("Ball").getClone(1).x, 160, 5, "Expected Clone 1 of Ball to have x-position 160 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(1).y, 152, 5, "Expected Clone 1 of Ball to have y-position 152 +-5");
  t.assert.not(t.getSprite("Ball").getClone(1).sayText, "Expected Clone 1 of Ball not to say anything");
  t.assert.withinRange(t.getSprite("Ball").getClone(1).size, 35, 1, "Expected Clone 1 of Ball to have size 35 +-1");
  t.assert.ok(t.getSprite("Ball").getClone(1).visible, "Expected Clone 1 of Ball to be visible");
  t.assert.equal(t.getSprite("Ball").getClone(1).volume, 100, "Expected Clone 1 of Ball to have volume 100");
  t.dragSprite('Ball', 235, 68, 1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Pico walking").direction, 90, 1, "Expected Sprite Pico walking to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Pico walking").x, -210, 5, "Expected Sprite Pico walking to have x-position -210 +-5");
  t.assert.withinRange(t.getSprite("Pico walking").y, -120, 5, "Expected Sprite Pico walking to have y-position -120 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(1).x, 235, 5, "Expected Clone 1 of Ball to have x-position 235 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(1).y, 64, 5, "Expected Clone 1 of Ball to have y-position 64 +-5");
  t.end();
}
const test2 = async function (t) {
  t.keyPress('space', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.dragSprite('Pico walking', 240, 67.2774704800175, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pico walking").x, 240, 5, "Expected Sprite Pico walking to have x-position 240 +-5");
  t.assert.withinRange(t.getSprite("Pico walking").y, 67.2774704800175, 5, "Expected Sprite Pico walking to have y-position 67.2774704800175 +-5");
  t.assert.equal(t.getSprite("Pico walking").sayText, ":)", "Expected Sprite Pico walking to say :)");
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.keyPress('space', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pico walking").x, 240, 5, "Expected Sprite Pico walking to have x-position 240 +-5");
  t.assert.withinRange(t.getSprite("Pico walking").y, 91.7774704800175, 5, "Expected Sprite Pico walking to have y-position 91.7774704800175 +-5");
  await t.runForSteps(43);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pico walking").x, 240, 5, "Expected Sprite Pico walking to have x-position 240 +-5");
  t.assert.withinRange(t.getSprite("Pico walking").y, 80.2774704800175, 5, "Expected Sprite Pico walking to have y-position 80.2774704800175 +-5");
  t.keyPress('right arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.dragSprite('Pico walking', -155, -52, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pico walking").x, -155, 5, "Expected Sprite Pico walking to have x-position -155 +-5");
  t.assert.withinRange(t.getSprite("Pico walking").y, -52, 5, "Expected Sprite Pico walking to have y-position -52 +-5");
  t.keyPress('left arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Pico walking").sayText, "Expected Sprite Pico walking not to say anything");
  t.end();
}
const test3 = async function (t) {
  t.dragSprite('Pico walking', 233.8785575850556, 109.37478938828686, null);
  await t.runForSteps(1);
  t.keyPress('right arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Pico walking").currentCostume, 3, "Expected Sprite Pico walking to have costume 3");
  t.assert.withinRange(t.getSprite("Pico walking").x, -207, 5, "Expected Sprite Pico walking to have x-position -207 +-5");
  t.assert.withinRange(t.getSprite("Pico walking").y, -132, 5, "Expected Sprite Pico walking to have y-position -132 +-5");
  t.end();
}
const test4 = async function (t) {
  await t.runForSteps(38);
  await t.runForSteps(1);
  t.dragSprite('Pico walking', -155, -52, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pico walking").x, -155, 5, "Expected Sprite Pico walking to have x-position -155 +-5");
  t.assert.withinRange(t.getSprite("Pico walking").y, -52, 5, "Expected Sprite Pico walking to have y-position -52 +-5");
  t.keyPress('space', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pico walking").x, -155, 5, "Expected Sprite Pico walking to have x-position -155 +-5");
  t.assert.withinRange(t.getSprite("Pico walking").y, -32.5, 5, "Expected Sprite Pico walking to have y-position -32.5 +-5");
  t.dragSprite('Laser', -162.774755934927, 68.65602474387322, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pico walking").x, -155, 5, "Expected Sprite Pico walking to have x-position -155 +-5");
  t.assert.withinRange(t.getSprite("Pico walking").y, -23.5, 5, "Expected Sprite Pico walking to have y-position -23.5 +-5");
  t.assert.withinRange(t.getSprite("Laser").x, -162.774755934927, 5, "Expected Sprite Laser to have x-position -162.774755934927 +-5");
  t.assert.withinRange(t.getSprite("Laser").y, 68.65602474387322, 5, "Expected Sprite Laser to have y-position 68.65602474387322 +-5");
  await t.runForSteps(20);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pico walking").x, -210, 5, "Expected Sprite Pico walking to have x-position -210 +-5");
  t.assert.withinRange(t.getSprite("Pico walking").y, -152, 5, "Expected Sprite Pico walking to have y-position -152 +-5");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724934484437',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724934484437',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724934484437',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724934484437',
      type: 'standard',
  },
  {
      test: test4,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724934484437',
      type: 'standard',
  }
]
