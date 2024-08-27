const test0 = async function (t) {
  t.keyPress('up arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  await t.runForSteps(99);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Laser").currentCostume, 1, "Expected Sprite Laser to have costume 1");
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
  t.assert.withinRange(t.getSprite("Pico walking").x, -210, 5, "Expected Sprite Pico walking to have x-position -210 +-5");
  t.assert.withinRange(t.getSprite("Pico walking").y, -152, 5, "Expected Sprite Pico walking to have y-position -152 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(1).x, 160, 5, "Expected Clone 1 of Ball to have x-position 160 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(1).y, 100, 5, "Expected Clone 1 of Ball to have y-position 100 +-5");
  t.assert.not(t.getSprite("Ball").getClone(1).sayText, "Expected Clone 1 of Ball not to say anything");
  t.assert.withinRange(t.getSprite("Ball").getClone(1).size, 43, 1, "Expected Clone 1 of Ball to have size 43 +-1");
  t.assert.ok(t.getSprite("Ball").getClone(1).visible, "Expected Clone 1 of Ball to be visible");
  t.assert.equal(t.getSprite("Ball").getClone(1).volume, 100, "Expected Clone 1 of Ball to have volume 100");
  await t.runForSteps(480);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Laser").currentCostume, 0, "Expected Sprite Laser to have costume 0");
  t.assert.equal(t.getSprite("Trapdoor").currentCostume, 1, "Expected Sprite Trapdoor to have costume 1");
  t.assert.equal(t.getSprite("Ball").getClone(2).currentCostume, 1, "Expected Clone 2 of Ball to have costume 1");
  t.assert.equal(t.getSprite("Ball").getClone(3).currentCostume, 1, "Expected Clone 3 of Ball to have costume 1");
  t.assert.equal(t.getSprite("Ball").getClone(4).currentCostume, 2, "Expected Clone 4 of Ball to have costume 2");
  t.assert.equal(t.getSprite("Ball").getCloneCount(), 4, "Expected Sprite Ball to have 4 clones");
  t.assert.equal(t.getSprite("Ball").getClone(1).direction, -114, 1, "Expected Clone 1 of Ball to face in direction -114 +-1");
  t.assert.equal(t.getSprite("Ball").getClone(2).direction, -132, 1, "Expected Clone 2 of Ball to face in direction -132 +-1");
  t.assert.equal(t.getSprite("Ball").getClone(3).direction, 42, 1, "Expected Clone 3 of Ball to face in direction 42 +-1");
  t.assert.equal(t.getSprite("Ball").getClone(4).direction, 144, 1, "Expected Clone 4 of Ball to face in direction 144 +-1");
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
  t.assert.equal(t.getSprite("Ball").getClone(4).effects.color, 0, "Expected effect color of Clone 4 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(4).effects.fisheye, 0, "Expected effect fisheye of Clone 4 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(4).effects.whirl, 0, "Expected effect whirl of Clone 4 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(4).effects.pixelate, 0, "Expected effect pixelate of Clone 4 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(4).effects.mosaic, 0, "Expected effect mosaic of Clone 4 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(4).effects.brightness, 0, "Expected effect brightness of Clone 4 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(4).effects.ghost, 0, "Expected effect ghost of Clone 4 of Ball to be 0");
  t.assert.equal(t.getSprite("Pico walking").layerOrder, 8, "Expected Sprite Pico walking to be at layer 8");
  t.assert.equal(t.getSprite("Ball").layerOrder, 7, "Expected Sprite Ball to be at layer 7");
  t.assert.equal(t.getSprite("Ball").getClone(2).getLayerOrder(), 4, "Expected Clone 2 of Ball to be at layer 4");
  t.assert.equal(t.getSprite("Ball").getClone(3).getLayerOrder(), 5, "Expected Clone 3 of Ball to be at layer 5");
  t.assert.equal(t.getSprite("Ball").getClone(4).getLayerOrder(), 6, "Expected Clone 4 of Ball to be at layer 6");
  t.assert.withinRange(t.getSprite("Ball").getClone(1).x, 92, 5, "Expected Clone 1 of Ball to have x-position 92 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(1).y, -168, 5, "Expected Clone 1 of Ball to have y-position -168 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(2).x, 86, 5, "Expected Clone 2 of Ball to have x-position 86 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(2).y, -48, 5, "Expected Clone 2 of Ball to have y-position -48 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(3).x, -96, 5, "Expected Clone 3 of Ball to have x-position -96 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(3).y, -48, 5, "Expected Clone 3 of Ball to have y-position -48 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(4).x, -62, 5, "Expected Clone 4 of Ball to have x-position -62 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(4).y, 72, 5, "Expected Clone 4 of Ball to have y-position 72 +-5");
  t.assert.not(t.getSprite("Ball").getClone(2).sayText, "Expected Clone 2 of Ball not to say anything");
  t.assert.not(t.getSprite("Ball").getClone(3).sayText, "Expected Clone 3 of Ball not to say anything");
  t.assert.not(t.getSprite("Ball").getClone(4).sayText, "Expected Clone 4 of Ball not to say anything");
  t.assert.withinRange(t.getSprite("Ball").getClone(2).size, 32, 1, "Expected Clone 2 of Ball to have size 32 +-1");
  t.assert.withinRange(t.getSprite("Ball").getClone(3).size, 32, 1, "Expected Clone 3 of Ball to have size 32 +-1");
  t.assert.withinRange(t.getSprite("Ball").getClone(4).size, 35, 1, "Expected Clone 4 of Ball to have size 35 +-1");
  t.assert.ok(t.getSprite("Ball").getClone(2).visible, "Expected Clone 2 of Ball to be visible");
  t.assert.ok(t.getSprite("Ball").getClone(3).visible, "Expected Clone 3 of Ball to be visible");
  t.assert.ok(t.getSprite("Ball").getClone(4).visible, "Expected Clone 4 of Ball to be visible");
  t.assert.equal(t.getSprite("Ball").getClone(2).volume, 100, "Expected Clone 2 of Ball to have volume 100");
  t.assert.equal(t.getSprite("Ball").getClone(3).volume, 100, "Expected Clone 3 of Ball to have volume 100");
  t.assert.equal(t.getSprite("Ball").getClone(4).volume, 100, "Expected Clone 4 of Ball to have volume 100");
  t.end();
}
const test1 = async function (t) {
  t.dragSprite('Pico walking', 240, 105.4797089877735, null);
  await t.runForSteps(1);
  await t.runForSteps(100);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Laser").currentCostume, 1, "Expected Sprite Laser to have costume 1");
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
  t.assert.withinRange(t.getSprite("Pico walking").x, -210, 5, "Expected Sprite Pico walking to have x-position -210 +-5");
  t.assert.withinRange(t.getSprite("Pico walking").y, -152, 5, "Expected Sprite Pico walking to have y-position -152 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(1).x, 160, 5, "Expected Clone 1 of Ball to have x-position 160 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(1).y, 112, 5, "Expected Clone 1 of Ball to have y-position 112 +-5");
  t.assert.not(t.getSprite("Ball").getClone(1).sayText, "Expected Clone 1 of Ball not to say anything");
  t.assert.withinRange(t.getSprite("Ball").getClone(1).size, 43, 1, "Expected Clone 1 of Ball to have size 43 +-1");
  t.assert.ok(t.getSprite("Ball").getClone(1).visible, "Expected Clone 1 of Ball to be visible");
  t.assert.equal(t.getSprite("Ball").getClone(1).volume, 100, "Expected Clone 1 of Ball to have volume 100");
  await t.runForSteps(400);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Trapdoor").currentCostume, 1, "Expected Sprite Trapdoor to have costume 1");
  t.assert.equal(t.getSprite("Ball").getClone(2).currentCostume, 1, "Expected Clone 2 of Ball to have costume 1");
  t.assert.equal(t.getSprite("Ball").getClone(3).currentCostume, 1, "Expected Clone 3 of Ball to have costume 1");
  t.assert.equal(t.getSprite("Ball").getClone(4).currentCostume, 2, "Expected Clone 4 of Ball to have costume 2");
  t.assert.equal(t.getSprite("Ball").getCloneCount(), 4, "Expected Sprite Ball to have 4 clones");
  t.assert.equal(t.getSprite("Ball").getClone(1).direction, 96, 1, "Expected Clone 1 of Ball to face in direction 96 +-1");
  t.assert.equal(t.getSprite("Ball").getClone(2).direction, 90, 1, "Expected Clone 2 of Ball to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Ball").getClone(3).direction, 96, 1, "Expected Clone 3 of Ball to face in direction 96 +-1");
  t.assert.equal(t.getSprite("Ball").getClone(4).direction, -78, 1, "Expected Clone 4 of Ball to face in direction -78 +-1");
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
  t.assert.equal(t.getSprite("Ball").getClone(4).effects.color, 0, "Expected effect color of Clone 4 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(4).effects.fisheye, 0, "Expected effect fisheye of Clone 4 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(4).effects.whirl, 0, "Expected effect whirl of Clone 4 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(4).effects.pixelate, 0, "Expected effect pixelate of Clone 4 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(4).effects.mosaic, 0, "Expected effect mosaic of Clone 4 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(4).effects.brightness, 0, "Expected effect brightness of Clone 4 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(4).effects.ghost, 0, "Expected effect ghost of Clone 4 of Ball to be 0");
  t.assert.equal(t.getSprite("Pico walking").layerOrder, 8, "Expected Sprite Pico walking to be at layer 8");
  t.assert.equal(t.getSprite("Ball").layerOrder, 7, "Expected Sprite Ball to be at layer 7");
  t.assert.equal(t.getSprite("Ball").getClone(2).getLayerOrder(), 4, "Expected Clone 2 of Ball to be at layer 4");
  t.assert.equal(t.getSprite("Ball").getClone(3).getLayerOrder(), 5, "Expected Clone 3 of Ball to be at layer 5");
  t.assert.equal(t.getSprite("Ball").getClone(4).getLayerOrder(), 6, "Expected Clone 4 of Ball to be at layer 6");
  t.assert.withinRange(t.getSprite("Ball").getClone(1).x, 162, 5, "Expected Clone 1 of Ball to have x-position 162 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(1).y, -48, 5, "Expected Clone 1 of Ball to have y-position -48 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(2).x, -80, 5, "Expected Clone 2 of Ball to have x-position -80 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(2).y, -48, 5, "Expected Clone 2 of Ball to have y-position -48 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(3).x, -198, 5, "Expected Clone 3 of Ball to have x-position -198 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(3).y, 72, 5, "Expected Clone 3 of Ball to have y-position 72 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(4).x, 104, 5, "Expected Clone 4 of Ball to have x-position 104 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(4).y, 72, 5, "Expected Clone 4 of Ball to have y-position 72 +-5");
  t.assert.not(t.getSprite("Ball").getClone(2).sayText, "Expected Clone 2 of Ball not to say anything");
  t.assert.not(t.getSprite("Ball").getClone(3).sayText, "Expected Clone 3 of Ball not to say anything");
  t.assert.not(t.getSprite("Ball").getClone(4).sayText, "Expected Clone 4 of Ball not to say anything");
  t.assert.withinRange(t.getSprite("Ball").getClone(2).size, 32, 1, "Expected Clone 2 of Ball to have size 32 +-1");
  t.assert.withinRange(t.getSprite("Ball").getClone(3).size, 32, 1, "Expected Clone 3 of Ball to have size 32 +-1");
  t.assert.withinRange(t.getSprite("Ball").getClone(4).size, 35, 1, "Expected Clone 4 of Ball to have size 35 +-1");
  t.assert.ok(t.getSprite("Ball").getClone(2).visible, "Expected Clone 2 of Ball to be visible");
  t.assert.ok(t.getSprite("Ball").getClone(3).visible, "Expected Clone 3 of Ball to be visible");
  t.assert.ok(t.getSprite("Ball").getClone(4).visible, "Expected Clone 4 of Ball to be visible");
  t.assert.equal(t.getSprite("Ball").getClone(2).volume, 100, "Expected Clone 2 of Ball to have volume 100");
  t.assert.equal(t.getSprite("Ball").getClone(3).volume, 100, "Expected Clone 3 of Ball to have volume 100");
  t.assert.equal(t.getSprite("Ball").getClone(4).volume, 100, "Expected Clone 4 of Ball to have volume 100");
  await t.runForSteps(300);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Laser").currentCostume, 0, "Expected Sprite Laser to have costume 0");
  t.assert.equal(t.getSprite("Trapdoor").currentCostume, 0, "Expected Sprite Trapdoor to have costume 0");
  t.assert.equal(t.getSprite("Ball").getClone(4).currentCostume, 2, "Expected Clone 4 of Ball to have costume 2");
  t.assert.equal(t.getSprite("Ball").getClone(5).currentCostume, 2, "Expected Clone 5 of Ball to have costume 2");
  t.assert.equal(t.getSprite("Ball").getCloneCount(), 5, "Expected Sprite Ball to have 5 clones");
  t.assert.equal(t.getSprite("Ball").getClone(1).direction, 24, 1, "Expected Clone 1 of Ball to face in direction 24 +-1");
  t.assert.equal(t.getSprite("Ball").getClone(2).direction, -150, 1, "Expected Clone 2 of Ball to face in direction -150 +-1");
  t.assert.equal(t.getSprite("Ball").getClone(3).direction, 84, 1, "Expected Clone 3 of Ball to face in direction 84 +-1");
  t.assert.equal(t.getSprite("Ball").getClone(4).direction, 102, 1, "Expected Clone 4 of Ball to face in direction 102 +-1");
  t.assert.equal(t.getSprite("Ball").getClone(5).direction, -72, 1, "Expected Clone 5 of Ball to face in direction -72 +-1");
  t.assert.equal(t.getSprite("Ball").getClone(4).effects.color, 0, "Expected effect color of Clone 4 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(4).effects.fisheye, 0, "Expected effect fisheye of Clone 4 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(4).effects.whirl, 0, "Expected effect whirl of Clone 4 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(4).effects.pixelate, 0, "Expected effect pixelate of Clone 4 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(4).effects.mosaic, 0, "Expected effect mosaic of Clone 4 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(4).effects.brightness, 0, "Expected effect brightness of Clone 4 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(4).effects.ghost, 0, "Expected effect ghost of Clone 4 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(5).effects.color, 0, "Expected effect color of Clone 5 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(5).effects.fisheye, 0, "Expected effect fisheye of Clone 5 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(5).effects.whirl, 0, "Expected effect whirl of Clone 5 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(5).effects.pixelate, 0, "Expected effect pixelate of Clone 5 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(5).effects.mosaic, 0, "Expected effect mosaic of Clone 5 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(5).effects.brightness, 0, "Expected effect brightness of Clone 5 of Ball to be 0");
  t.assert.equal(t.getSprite("Ball").getClone(5).effects.ghost, 0, "Expected effect ghost of Clone 5 of Ball to be 0");
  t.assert.equal(t.getSprite("Pico walking").layerOrder, 9, "Expected Sprite Pico walking to be at layer 9");
  t.assert.equal(t.getSprite("Ball").layerOrder, 8, "Expected Sprite Ball to be at layer 8");
  t.assert.equal(t.getSprite("Ball").getClone(1).getLayerOrder(), 3, "Expected Clone 1 of Ball to be at layer 3");
  t.assert.equal(t.getSprite("Ball").getClone(2).getLayerOrder(), 4, "Expected Clone 2 of Ball to be at layer 4");
  t.assert.equal(t.getSprite("Ball").getClone(3).getLayerOrder(), 5, "Expected Clone 3 of Ball to be at layer 5");
  t.assert.equal(t.getSprite("Ball").getClone(4).getLayerOrder(), 6, "Expected Clone 4 of Ball to be at layer 6");
  t.assert.equal(t.getSprite("Ball").getClone(5).getLayerOrder(), 7, "Expected Clone 5 of Ball to be at layer 7");
  t.assert.withinRange(t.getSprite("Ball").getClone(1).x, -102, 5, "Expected Clone 1 of Ball to have x-position -102 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(1).y, -168, 5, "Expected Clone 1 of Ball to have y-position -168 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(2).x, 80, 5, "Expected Clone 2 of Ball to have x-position 80 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(2).y, -168, 5, "Expected Clone 2 of Ball to have y-position -168 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(3).x, 38, 5, "Expected Clone 3 of Ball to have x-position 38 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(3).y, -48, 5, "Expected Clone 3 of Ball to have y-position -48 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(4).x, -196, 5, "Expected Clone 4 of Ball to have x-position -196 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(4).y, 72, 5, "Expected Clone 4 of Ball to have y-position 72 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(5).x, -14, 5, "Expected Clone 5 of Ball to have x-position -14 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(5).y, 72, 5, "Expected Clone 5 of Ball to have y-position 72 +-5");
  t.assert.not(t.getSprite("Ball").getClone(4).sayText, "Expected Clone 4 of Ball not to say anything");
  t.assert.not(t.getSprite("Ball").getClone(5).sayText, "Expected Clone 5 of Ball not to say anything");
  t.assert.withinRange(t.getSprite("Ball").getClone(4).size, 48, 1, "Expected Clone 4 of Ball to have size 48 +-1");
  t.assert.withinRange(t.getSprite("Ball").getClone(5).size, 38, 1, "Expected Clone 5 of Ball to have size 38 +-1");
  t.assert.ok(t.getSprite("Ball").getClone(4).visible, "Expected Clone 4 of Ball to be visible");
  t.assert.ok(t.getSprite("Ball").getClone(5).visible, "Expected Clone 5 of Ball to be visible");
  t.assert.equal(t.getSprite("Ball").getClone(4).volume, 100, "Expected Clone 4 of Ball to have volume 100");
  t.assert.equal(t.getSprite("Ball").getClone(5).volume, 100, "Expected Clone 5 of Ball to have volume 100");
  t.end();
}
const test2 = async function (t) {
  t.dragSprite('Pico walking', 240, 105.4797089877735, null);
  await t.runForSteps(1);
  t.keyPress('left arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Pico walking").currentCostume, 0, "Expected Sprite Pico walking to have costume 0");
  t.assert.equal(t.getSprite("Pico walking").direction, -90, 1, "Expected Sprite Pico walking to face in direction -90 +-1");
  t.assert.withinRange(t.getSprite("Pico walking").x, -216, 5, "Expected Sprite Pico walking to have x-position -216 +-5");
  t.assert.withinRange(t.getSprite("Pico walking").y, -136, 5, "Expected Sprite Pico walking to have y-position -136 +-5");
  await t.runForSteps(100);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Laser").currentCostume, 1, "Expected Sprite Laser to have costume 1");
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
  t.assert.withinRange(t.getSprite("Pico walking").x, -216, 5, "Expected Sprite Pico walking to have x-position -216 +-5");
  t.assert.withinRange(t.getSprite("Pico walking").y, -152, 5, "Expected Sprite Pico walking to have y-position -152 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(1).x, 160, 5, "Expected Clone 1 of Ball to have x-position 160 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(1).y, 100, 5, "Expected Clone 1 of Ball to have y-position 100 +-5");
  t.assert.not(t.getSprite("Ball").getClone(1).sayText, "Expected Clone 1 of Ball not to say anything");
  t.assert.withinRange(t.getSprite("Ball").getClone(1).size, 43, 1, "Expected Clone 1 of Ball to have size 43 +-1");
  t.assert.ok(t.getSprite("Ball").getClone(1).visible, "Expected Clone 1 of Ball to be visible");
  t.assert.equal(t.getSprite("Ball").getClone(1).volume, 100, "Expected Clone 1 of Ball to have volume 100");
  t.dragSprite('Ball', -228.32268356904729, -174.06973853603205, 1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Pico walking").direction, 90, 1, "Expected Sprite Pico walking to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Pico walking").x, -210, 5, "Expected Sprite Pico walking to have x-position -210 +-5");
  t.assert.withinRange(t.getSprite("Pico walking").y, -120, 5, "Expected Sprite Pico walking to have y-position -120 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(1).x, -228.32268356904729, 5, "Expected Clone 1 of Ball to have x-position -228.32268356904729 +-5");
  t.assert.withinRange(t.getSprite("Ball").getClone(1).y, -178.06973853603205, 5, "Expected Clone 1 of Ball to have y-position -178.06973853603205 +-5");
  t.end();
}
const test3 = async function (t) {
  t.dragSprite('Laser', -186.9108535833075, -180, null);
  await t.runForSteps(1);
  t.dragSprite('Pico walking', 235, 68, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pico walking").x, 235, 5, "Expected Sprite Pico walking to have x-position 235 +-5");
  t.assert.withinRange(t.getSprite("Pico walking").y, 68, 5, "Expected Sprite Pico walking to have y-position 68 +-5");
  t.assert.equal(t.getSprite("Pico walking").sayText, ":)", "Expected Sprite Pico walking to say :)");
  await t.runForSteps(97);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Pico walking").sayText, "Expected Sprite Pico walking not to say anything");
  t.end();
}
const test4 = async function (t) {
  t.keyPress('up arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.keyPress('right arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Pico walking").currentCostume, 3, "Expected Sprite Pico walking to have costume 3");
  t.assert.withinRange(t.getSprite("Pico walking").x, -207, 5, "Expected Sprite Pico walking to have x-position -207 +-5");
  t.assert.withinRange(t.getSprite("Pico walking").y, -148, 5, "Expected Sprite Pico walking to have y-position -148 +-5");
  t.end();
}
const test5 = async function (t) {
  t.keyPress('up arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.dragSprite('Pico walking', -169.39485008282983, -12.408981643925074, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pico walking").x, -169.39485008282983, 5, "Expected Sprite Pico walking to have x-position -169.39485008282983 +-5");
  t.assert.withinRange(t.getSprite("Pico walking").y, -12.408981643925074, 5, "Expected Sprite Pico walking to have y-position -12.408981643925074 +-5");
  t.keyPress('up arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pico walking").x, -169.39485008282983, 5, "Expected Sprite Pico walking to have x-position -169.39485008282983 +-5");
  t.assert.withinRange(t.getSprite("Pico walking").y, -4.408981643925074, 5, "Expected Sprite Pico walking to have y-position -4.408981643925074 +-5");
  t.end();
}
const test6 = async function (t) {
  t.dragSprite('Laser', -186.9108535833075, -180, null);
  await t.runForSteps(1);
  t.keyPress('left arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Pico walking").currentCostume, 1, "Expected Sprite Pico walking to have costume 1");
  t.assert.equal(t.getSprite("Pico walking").direction, -90, 1, "Expected Sprite Pico walking to face in direction -90 +-1");
  t.assert.withinRange(t.getSprite("Pico walking").x, -219, 5, "Expected Sprite Pico walking to have x-position -219 +-5");
  t.assert.withinRange(t.getSprite("Pico walking").y, -140, 5, "Expected Sprite Pico walking to have y-position -140 +-5");
  t.keyPress('space', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pico walking").x, -219, 5, "Expected Sprite Pico walking to have x-position -219 +-5");
  t.assert.withinRange(t.getSprite("Pico walking").y, -152, 5, "Expected Sprite Pico walking to have y-position -152 +-5");
  t.keyPress('space', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pico walking").x, -219, 5, "Expected Sprite Pico walking to have x-position -219 +-5");
  t.assert.withinRange(t.getSprite("Pico walking").y, -127, 5, "Expected Sprite Pico walking to have y-position -127 +-5");
  t.end();
}
const test7 = async function (t) {
  t.dragSprite('Pico walking', 240, 105.21008174549078, null);
  await t.runForSteps(1);
  t.dragSprite('Laser', -216, -144, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Pico walking").x, -210, 5, "Expected Sprite Pico walking to have x-position -210 +-5");
  t.assert.withinRange(t.getSprite("Pico walking").y, -120, 5, "Expected Sprite Pico walking to have y-position -120 +-5");
  t.assert.withinRange(t.getSprite("Laser").x, -216, 5, "Expected Sprite Laser to have x-position -216 +-5");
  t.assert.withinRange(t.getSprite("Laser").y, -144, 5, "Expected Sprite Laser to have y-position -144 +-5");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724673141175',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724673141175',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724673141175',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724673141175',
      type: 'standard',
  },
  {
      test: test4,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724673141175',
      type: 'standard',
  },
  {
      test: test5,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724673141175',
      type: 'standard',
  },
  {
      test: test6,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724673141175',
      type: 'standard',
  },
  {
      test: test7,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724673141175',
      type: 'standard',
  }
]
