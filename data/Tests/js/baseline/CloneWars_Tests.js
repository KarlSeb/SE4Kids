const test0 = async function (t) {
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.keyPress('space', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Lightning").getClone(1).currentCostume, 0, "Expected Clone 1 of Lightning to have costume 0");
  t.assert.equal(t.getSprite("Lightning").getCloneCount(), 1, "Expected Sprite Lightning to have 1 clones");
  t.assert.equal(t.getSprite("Lightning").getClone(1).direction, -90, 1, "Expected Clone 1 of Lightning to face in direction -90 +-1");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Spaceship").layerOrder, 6, "Expected Sprite Spaceship to be at layer 6");
  t.assert.equal(t.getSprite("Lightning").layerOrder, 2, "Expected Sprite Lightning to be at layer 2");
  t.assert.equal(t.getSprite("Hippo1").layerOrder, 3, "Expected Sprite Hippo1 to be at layer 3");
  t.assert.equal(t.getSprite("Bat").layerOrder, 5, "Expected Sprite Bat to be at layer 5");
  t.assert.equal(t.getSprite("Orange").layerOrder, 4, "Expected Sprite Orange to be at layer 4");
  t.assert.equal(t.getSprite("Game Over").layerOrder, 7, "Expected Sprite Game Over to be at layer 7");
  t.assert.equal(t.getSprite("Lightning").getClone(1).getLayerOrder(), 1, "Expected Clone 1 of Lightning to be at layer 1");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).x, 36.32365145, 5, "Expected Clone 1 of Lightning to have x-position 36.32365145 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).y, -117.25966851000001, 5, "Expected Clone 1 of Lightning to have y-position -117.25966851000001 +-5");
  t.assert.not(t.getSprite("Lightning").getClone(1).sayText, "Expected Clone 1 of Lightning not to say anything");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).size, 25, 1, "Expected Clone 1 of Lightning to have size 25 +-1");
  t.assert.ok(t.getSprite("Lightning").getClone(1).visible, "Expected Clone 1 of Lightning to be visible");
  t.assert.equal(t.getSprite("Lightning").getClone(1).volume, 100, "Expected Clone 1 of Lightning to have volume 100");
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(28);
  await t.runForSteps(1);
  t.keyPress('space', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Bat").currentCostume, 3, "Expected Sprite Bat to have costume 3");
  t.assert.equal(t.getSprite("Lightning").getClone(1).currentCostume, 0, "Expected Clone 1 of Lightning to have costume 0");
  t.assert.equal(t.getSprite("Lightning").getCloneCount(), 1, "Expected Sprite Lightning to have 1 clones");
  t.assert.equal(t.getSprite("Lightning").getClone(1).direction, -90, 1, "Expected Clone 1 of Lightning to face in direction -90 +-1");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Spaceship").layerOrder, 6, "Expected Sprite Spaceship to be at layer 6");
  t.assert.equal(t.getSprite("Lightning").layerOrder, 2, "Expected Sprite Lightning to be at layer 2");
  t.assert.equal(t.getSprite("Hippo1").layerOrder, 3, "Expected Sprite Hippo1 to be at layer 3");
  t.assert.equal(t.getSprite("Bat").layerOrder, 5, "Expected Sprite Bat to be at layer 5");
  t.assert.equal(t.getSprite("Orange").layerOrder, 4, "Expected Sprite Orange to be at layer 4");
  t.assert.equal(t.getSprite("Game Over").layerOrder, 7, "Expected Sprite Game Over to be at layer 7");
  t.assert.equal(t.getSprite("Lightning").getClone(1).getLayerOrder(), 1, "Expected Clone 1 of Lightning to be at layer 1");
  t.assert.withinRange(t.getSprite("Bat").x, 132.40239807, 5, "Expected Sprite Bat to have x-position 132.40239807 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 129.28176796, 5, "Expected Sprite Bat to have y-position 129.28176796 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).x, 20.32365145, 5, "Expected Clone 1 of Lightning to have x-position 20.32365145 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).y, -117.25966851000001, 5, "Expected Clone 1 of Lightning to have y-position -117.25966851000001 +-5");
  t.assert.not(t.getSprite("Lightning").getClone(1).sayText, "Expected Clone 1 of Lightning not to say anything");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).size, 25, 1, "Expected Clone 1 of Lightning to have size 25 +-1");
  t.assert.ok(t.getSprite("Lightning").getClone(1).visible, "Expected Clone 1 of Lightning to be visible");
  t.assert.equal(t.getSprite("Lightning").getClone(1).volume, 100, "Expected Clone 1 of Lightning to have volume 100");
  t.keyPress('right arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spaceship").x, 28.32365145, 5, "Expected Sprite Spaceship to have x-position 28.32365145 +-5");
  t.assert.withinRange(t.getSprite("Spaceship").y, -137.25966851, 5, "Expected Sprite Spaceship to have y-position -137.25966851 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).x, 20.32365145, 5, "Expected Clone 1 of Lightning to have x-position 20.32365145 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).y, -87.25966851000001, 5, "Expected Clone 1 of Lightning to have y-position -87.25966851000001 +-5");
  await t.runForSteps(22);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Bat").currentCostume, 1, "Expected Sprite Bat to have costume 1");
  t.assert.withinRange(t.getSprite("Bat").x, 152.40239807, 5, "Expected Sprite Bat to have x-position 152.40239807 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 129.28176796, 5, "Expected Sprite Bat to have y-position 129.28176796 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).x, 20.32365145, 5, "Expected Clone 1 of Lightning to have x-position 20.32365145 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).y, 142.74033149, 5, "Expected Clone 1 of Lightning to have y-position 142.74033149 +-5");
  t.keyPress('space', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Bat").currentCostume, 2, "Expected Sprite Bat to have costume 2");
  t.assert.equal(t.getSprite("Lightning").getClone(1).currentCostume, 0, "Expected Clone 1 of Lightning to have costume 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).direction, -90, 1, "Expected Clone 1 of Lightning to face in direction -90 +-1");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).getLayerOrder(), 1, "Expected Clone 1 of Lightning to be at layer 1");
  t.assert.withinRange(t.getSprite("Bat").x, 162.40239807, 5, "Expected Sprite Bat to have x-position 162.40239807 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 129.28176796, 5, "Expected Sprite Bat to have y-position 129.28176796 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).x, 28.32365145, 5, "Expected Clone 1 of Lightning to have x-position 28.32365145 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).y, -97.25966851000001, 5, "Expected Clone 1 of Lightning to have y-position -97.25966851000001 +-5");
  t.assert.not(t.getSprite("Lightning").getClone(1).sayText, "Expected Clone 1 of Lightning not to say anything");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).size, 25, 1, "Expected Clone 1 of Lightning to have size 25 +-1");
  t.assert.ok(t.getSprite("Lightning").getClone(1).visible, "Expected Clone 1 of Lightning to be visible");
  t.assert.equal(t.getSprite("Lightning").getClone(1).volume, 100, "Expected Clone 1 of Lightning to have volume 100");
  t.end();
}
const test2 = async function (t) {
  await t.runForSteps(28);
  await t.runForSteps(1);
  await t.runForSteps(14);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Bat").currentCostume, 0, "Expected Sprite Bat to have costume 0");
  t.assert.withinRange(t.getSprite("Bat").x, 142.40239807, 5, "Expected Sprite Bat to have x-position 142.40239807 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 129.28176796, 5, "Expected Sprite Bat to have y-position 129.28176796 +-5");
  t.keyPress('right arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spaceship").x, 32.32365145, 5, "Expected Sprite Spaceship to have x-position 32.32365145 +-5");
  t.assert.withinRange(t.getSprite("Spaceship").y, -137.25966851, 5, "Expected Sprite Spaceship to have y-position -137.25966851 +-5");
  t.keyPress('space', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Lightning").getClone(1).currentCostume, 0, "Expected Clone 1 of Lightning to have costume 0");
  t.assert.equal(t.getSprite("Lightning").getCloneCount(), 1, "Expected Sprite Lightning to have 1 clones");
  t.assert.equal(t.getSprite("Lightning").getClone(1).direction, -90, 1, "Expected Clone 1 of Lightning to face in direction -90 +-1");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Spaceship").layerOrder, 6, "Expected Sprite Spaceship to be at layer 6");
  t.assert.equal(t.getSprite("Lightning").layerOrder, 2, "Expected Sprite Lightning to be at layer 2");
  t.assert.equal(t.getSprite("Hippo1").layerOrder, 3, "Expected Sprite Hippo1 to be at layer 3");
  t.assert.equal(t.getSprite("Bat").layerOrder, 5, "Expected Sprite Bat to be at layer 5");
  t.assert.equal(t.getSprite("Orange").layerOrder, 4, "Expected Sprite Orange to be at layer 4");
  t.assert.equal(t.getSprite("Game Over").layerOrder, 7, "Expected Sprite Game Over to be at layer 7");
  t.assert.equal(t.getSprite("Lightning").getClone(1).getLayerOrder(), 1, "Expected Clone 1 of Lightning to be at layer 1");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).x, 32.32365145, 5, "Expected Clone 1 of Lightning to have x-position 32.32365145 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).y, -117.25966851000001, 5, "Expected Clone 1 of Lightning to have y-position -117.25966851000001 +-5");
  t.assert.not(t.getSprite("Lightning").getClone(1).sayText, "Expected Clone 1 of Lightning not to say anything");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).size, 25, 1, "Expected Clone 1 of Lightning to have size 25 +-1");
  t.assert.ok(t.getSprite("Lightning").getClone(1).visible, "Expected Clone 1 of Lightning to be visible");
  t.assert.equal(t.getSprite("Lightning").getClone(1).volume, 100, "Expected Clone 1 of Lightning to have volume 100");
  await t.runForSteps(41);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Bat").currentCostume, 1, "Expected Sprite Bat to have costume 1");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).currentCostume, 0, "Expected Clone 1 of Hippo1 to have costume 0");
  t.assert.equal(t.getSprite("Lightning").getCloneCount(), 0, "Expected Sprite Lightning to have 0 clones");
  t.assert.equal(t.getSprite("Hippo1").getCloneCount(), 1, "Expected Sprite Hippo1 to have 1 clones");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).direction, 95.32505275898842, 1, "Expected Clone 1 of Hippo1 to face in direction 95.32505275898842 +-1");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Lightning").layerOrder, 1, "Expected Sprite Lightning to be at layer 1");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).getLayerOrder(), 2, "Expected Clone 1 of Hippo1 to be at layer 2");
  t.assert.withinRange(t.getSprite("Bat").x, 192.40239807, 5, "Expected Sprite Bat to have x-position 192.40239807 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 129.28176796, 5, "Expected Sprite Bat to have y-position 129.28176796 +-5");
  t.assert.withinRange(t.getSprite("Hippo1").getClone(1).x, 5.961057773484501, 5, "Expected Clone 1 of Hippo1 to have x-position 5.961057773484501 +-5");
  t.assert.withinRange(t.getSprite("Hippo1").getClone(1).y, 121.03512189944723, 5, "Expected Clone 1 of Hippo1 to have y-position 121.03512189944723 +-5");
  t.assert.not(t.getSprite("Hippo1").getClone(1).sayText, "Expected Clone 1 of Hippo1 not to say anything");
  t.assert.withinRange(t.getSprite("Hippo1").getClone(1).size, 100, 1, "Expected Clone 1 of Hippo1 to have size 100 +-1");
  t.assert.ok(t.getSprite("Hippo1").getClone(1).visible, "Expected Clone 1 of Hippo1 to be visible");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).volume, 100, "Expected Clone 1 of Hippo1 to have volume 100");
  t.end();
}
const test3 = async function (t) {
  await t.runForSteps(28);
  await t.runForSteps(1);
  await t.runForSteps(14);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Bat").currentCostume, 0, "Expected Sprite Bat to have costume 0");
  t.assert.withinRange(t.getSprite("Bat").x, 142.40239807, 5, "Expected Sprite Bat to have x-position 142.40239807 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 129.28176796, 5, "Expected Sprite Bat to have y-position 129.28176796 +-5");
  await t.runForSteps(22);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Bat").currentCostume, 2, "Expected Sprite Bat to have costume 2");
  t.assert.withinRange(t.getSprite("Bat").x, 162.40239807, 5, "Expected Sprite Bat to have x-position 162.40239807 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 129.28176796, 5, "Expected Sprite Bat to have y-position 129.28176796 +-5");
  t.keyPress('space', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Bat").currentCostume, 3, "Expected Sprite Bat to have costume 3");
  t.assert.equal(t.getSprite("Lightning").getClone(1).currentCostume, 0, "Expected Clone 1 of Lightning to have costume 0");
  t.assert.equal(t.getSprite("Lightning").getCloneCount(), 1, "Expected Sprite Lightning to have 1 clones");
  t.assert.equal(t.getSprite("Lightning").getClone(1).direction, -90, 1, "Expected Clone 1 of Lightning to face in direction -90 +-1");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Spaceship").layerOrder, 6, "Expected Sprite Spaceship to be at layer 6");
  t.assert.equal(t.getSprite("Lightning").layerOrder, 2, "Expected Sprite Lightning to be at layer 2");
  t.assert.equal(t.getSprite("Hippo1").layerOrder, 3, "Expected Sprite Hippo1 to be at layer 3");
  t.assert.equal(t.getSprite("Bat").layerOrder, 5, "Expected Sprite Bat to be at layer 5");
  t.assert.equal(t.getSprite("Orange").layerOrder, 4, "Expected Sprite Orange to be at layer 4");
  t.assert.equal(t.getSprite("Game Over").layerOrder, 7, "Expected Sprite Game Over to be at layer 7");
  t.assert.equal(t.getSprite("Lightning").getClone(1).getLayerOrder(), 1, "Expected Clone 1 of Lightning to be at layer 1");
  t.assert.withinRange(t.getSprite("Bat").x, 172.40239807, 5, "Expected Sprite Bat to have x-position 172.40239807 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 129.28176796, 5, "Expected Sprite Bat to have y-position 129.28176796 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).x, 20.32365145, 5, "Expected Clone 1 of Lightning to have x-position 20.32365145 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).y, -97.25966851000001, 5, "Expected Clone 1 of Lightning to have y-position -97.25966851000001 +-5");
  t.assert.not(t.getSprite("Lightning").getClone(1).sayText, "Expected Clone 1 of Lightning not to say anything");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).size, 25, 1, "Expected Clone 1 of Lightning to have size 25 +-1");
  t.assert.ok(t.getSprite("Lightning").getClone(1).visible, "Expected Clone 1 of Lightning to be visible");
  t.assert.equal(t.getSprite("Lightning").getClone(1).volume, 100, "Expected Clone 1 of Lightning to have volume 100");
  await t.runForSteps(41);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Lightning").getCloneCount(), 0, "Expected Sprite Lightning to have 0 clones");
  t.assert.equal(t.getSprite("Bat").direction, -90, 1, "Expected Sprite Bat to face in direction -90 +-1");
  t.assert.equal(t.getSprite("Spaceship").layerOrder, 5, "Expected Sprite Spaceship to be at layer 5");
  t.assert.equal(t.getSprite("Lightning").layerOrder, 1, "Expected Sprite Lightning to be at layer 1");
  t.assert.equal(t.getSprite("Hippo1").layerOrder, 2, "Expected Sprite Hippo1 to be at layer 2");
  t.assert.equal(t.getSprite("Bat").layerOrder, 4, "Expected Sprite Bat to be at layer 4");
  t.assert.equal(t.getSprite("Orange").layerOrder, 3, "Expected Sprite Orange to be at layer 3");
  t.assert.equal(t.getSprite("Game Over").layerOrder, 6, "Expected Sprite Game Over to be at layer 6");
  t.assert.withinRange(t.getSprite("Bat").x, 212.40235229363282, 5, "Expected Sprite Bat to have x-position 212.40235229363282 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 129.28176796, 5, "Expected Sprite Bat to have y-position 129.28176796 +-5");
  t.assert.equal(t.getStage().getVariable("score", false).value, "10", "Expected score to have value 10");
  t.end();
}
const test4 = async function (t) {
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  await t.runForSteps(55);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Bat").currentCostume, 2, "Expected Sprite Bat to have costume 2");
  t.assert.withinRange(t.getSprite("Bat").x, 162.40239807, 5, "Expected Sprite Bat to have x-position 162.40239807 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 129.28176796, 5, "Expected Sprite Bat to have y-position 129.28176796 +-5");
  await t.runForSteps(98);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Bat").currentCostume, 3, "Expected Sprite Bat to have costume 3");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).currentCostume, 0, "Expected Clone 1 of Hippo1 to have costume 0");
  t.assert.equal(t.getSprite("Hippo1").getCloneCount(), 1, "Expected Sprite Hippo1 to have 1 clones");
  t.assert.equal(t.getSprite("Bat").direction, -90, 1, "Expected Sprite Bat to face in direction -90 +-1");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).direction, 80.47980805908958, 1, "Expected Clone 1 of Hippo1 to face in direction 80.47980805908958 +-1");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Spaceship").layerOrder, 6, "Expected Sprite Spaceship to be at layer 6");
  t.assert.equal(t.getSprite("Hippo1").layerOrder, 3, "Expected Sprite Hippo1 to be at layer 3");
  t.assert.equal(t.getSprite("Bat").layerOrder, 5, "Expected Sprite Bat to be at layer 5");
  t.assert.equal(t.getSprite("Orange").layerOrder, 4, "Expected Sprite Orange to be at layer 4");
  t.assert.equal(t.getSprite("Game Over").layerOrder, 7, "Expected Sprite Game Over to be at layer 7");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).getLayerOrder(), 2, "Expected Clone 1 of Hippo1 to be at layer 2");
  t.assert.withinRange(t.getSprite("Bat").x, 172.40235229363282, 5, "Expected Sprite Bat to have x-position 172.40235229363282 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 129.28176796, 5, "Expected Sprite Bat to have y-position 129.28176796 +-5");
  t.assert.withinRange(t.getSprite("Hippo1").getClone(1).x, -24.382917530621313, 5, "Expected Clone 1 of Hippo1 to have x-position -24.382917530621313 +-5");
  t.assert.withinRange(t.getSprite("Hippo1").getClone(1).y, 99.6974842678314, 5, "Expected Clone 1 of Hippo1 to have y-position 99.6974842678314 +-5");
  t.assert.not(t.getSprite("Hippo1").getClone(1).sayText, "Expected Clone 1 of Hippo1 not to say anything");
  t.assert.withinRange(t.getSprite("Hippo1").getClone(1).size, 100, 1, "Expected Clone 1 of Hippo1 to have size 100 +-1");
  t.assert.ok(t.getSprite("Hippo1").getClone(1).visible, "Expected Clone 1 of Hippo1 to be visible");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).volume, 100, "Expected Clone 1 of Hippo1 to have volume 100");
  await t.runForSteps(50);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Bat").currentCostume, 1, "Expected Sprite Bat to have costume 1");
  t.assert.equal(t.getSprite("Hippo1").getClone(2).currentCostume, 0, "Expected Clone 2 of Hippo1 to have costume 0");
  t.assert.equal(t.getSprite("Hippo1").getCloneCount(), 2, "Expected Sprite Hippo1 to have 2 clones");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).direction, 115.47980805908958, 1, "Expected Clone 1 of Hippo1 to face in direction 115.47980805908958 +-1");
  t.assert.equal(t.getSprite("Hippo1").getClone(2).direction, -84.3520148549303, 1, "Expected Clone 2 of Hippo1 to face in direction -84.3520148549303 +-1");
  t.assert.equal(t.getSprite("Hippo1").getClone(2).effects.color, 0, "Expected effect color of Clone 2 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(2).effects.fisheye, 0, "Expected effect fisheye of Clone 2 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(2).effects.whirl, 0, "Expected effect whirl of Clone 2 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(2).effects.pixelate, 0, "Expected effect pixelate of Clone 2 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(2).effects.mosaic, 0, "Expected effect mosaic of Clone 2 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(2).effects.brightness, 0, "Expected effect brightness of Clone 2 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(2).effects.ghost, 0, "Expected effect ghost of Clone 2 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Spaceship").layerOrder, 7, "Expected Sprite Spaceship to be at layer 7");
  t.assert.equal(t.getSprite("Hippo1").layerOrder, 4, "Expected Sprite Hippo1 to be at layer 4");
  t.assert.equal(t.getSprite("Bat").layerOrder, 6, "Expected Sprite Bat to be at layer 6");
  t.assert.equal(t.getSprite("Orange").layerOrder, 5, "Expected Sprite Orange to be at layer 5");
  t.assert.equal(t.getSprite("Game Over").layerOrder, 8, "Expected Sprite Game Over to be at layer 8");
  t.assert.equal(t.getSprite("Hippo1").getClone(2).getLayerOrder(), 3, "Expected Clone 2 of Hippo1 to be at layer 3");
  t.assert.withinRange(t.getSprite("Bat").x, 112.40235229363282, 5, "Expected Sprite Bat to have x-position 112.40235229363282 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 129.28176796, 5, "Expected Sprite Bat to have y-position 129.28176796 +-5");
  t.assert.withinRange(t.getSprite("Hippo1").getClone(1).x, 72.99533451581631, 5, "Expected Clone 1 of Hippo1 to have x-position 72.99533451581631 +-5");
  t.assert.withinRange(t.getSprite("Hippo1").getClone(1).y, 78.19206712602538, 5, "Expected Clone 1 of Hippo1 to have y-position 78.19206712602538 +-5");
  t.assert.withinRange(t.getSprite("Hippo1").getClone(2).x, 166.36663825792363, 5, "Expected Clone 2 of Hippo1 to have x-position 166.36663825792363 +-5");
  t.assert.withinRange(t.getSprite("Hippo1").getClone(2).y, 102.05101000968071, 5, "Expected Clone 2 of Hippo1 to have y-position 102.05101000968071 +-5");
  t.assert.not(t.getSprite("Hippo1").getClone(2).sayText, "Expected Clone 2 of Hippo1 not to say anything");
  t.assert.withinRange(t.getSprite("Hippo1").getClone(2).size, 100, 1, "Expected Clone 2 of Hippo1 to have size 100 +-1");
  t.assert.ok(t.getSprite("Hippo1").getClone(2).visible, "Expected Clone 2 of Hippo1 to be visible");
  t.assert.equal(t.getSprite("Hippo1").getClone(2).volume, 100, "Expected Clone 2 of Hippo1 to have volume 100");
  await t.runForSteps(65);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Bat").currentCostume, 3, "Expected Sprite Bat to have costume 3");
  t.assert.equal(t.getSprite("Hippo1").getClone(3).currentCostume, 0, "Expected Clone 3 of Hippo1 to have costume 0");
  t.assert.equal(t.getSprite("Orange").getClone(1).currentCostume, 0, "Expected Clone 1 of Orange to have costume 0");
  t.assert.equal(t.getSprite("Hippo1").getCloneCount(), 3, "Expected Sprite Hippo1 to have 3 clones");
  t.assert.equal(t.getSprite("Orange").getCloneCount(), 1, "Expected Sprite Orange to have 1 clones");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).direction, -76.4798080590896, 1, "Expected Clone 1 of Hippo1 to face in direction -76.4798080590896 +-1");
  t.assert.equal(t.getSprite("Hippo1").getClone(2).direction, -163.6479851450697, 1, "Expected Clone 2 of Hippo1 to face in direction -163.6479851450697 +-1");
  t.assert.equal(t.getSprite("Hippo1").getClone(3).direction, -99.47980805908958, 1, "Expected Clone 3 of Hippo1 to face in direction -99.47980805908958 +-1");
  t.assert.equal(t.getSprite("Orange").getClone(1).direction, 90, 1, "Expected Clone 1 of Orange to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Hippo1").getClone(3).effects.color, 0, "Expected effect color of Clone 3 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(3).effects.fisheye, 0, "Expected effect fisheye of Clone 3 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(3).effects.whirl, 0, "Expected effect whirl of Clone 3 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(3).effects.pixelate, 0, "Expected effect pixelate of Clone 3 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(3).effects.mosaic, 0, "Expected effect mosaic of Clone 3 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(3).effects.brightness, 0, "Expected effect brightness of Clone 3 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(3).effects.ghost, 0, "Expected effect ghost of Clone 3 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Orange").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Orange to be 0");
  t.assert.equal(t.getSprite("Orange").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Orange to be 0");
  t.assert.equal(t.getSprite("Orange").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Orange to be 0");
  t.assert.equal(t.getSprite("Orange").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Orange to be 0");
  t.assert.equal(t.getSprite("Orange").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Orange to be 0");
  t.assert.equal(t.getSprite("Orange").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Orange to be 0");
  t.assert.equal(t.getSprite("Orange").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Orange to be 0");
  t.assert.equal(t.getSprite("Spaceship").layerOrder, 9, "Expected Sprite Spaceship to be at layer 9");
  t.assert.equal(t.getSprite("Hippo1").layerOrder, 5, "Expected Sprite Hippo1 to be at layer 5");
  t.assert.equal(t.getSprite("Bat").layerOrder, 8, "Expected Sprite Bat to be at layer 8");
  t.assert.equal(t.getSprite("Orange").layerOrder, 7, "Expected Sprite Orange to be at layer 7");
  t.assert.equal(t.getSprite("Game Over").layerOrder, 10, "Expected Sprite Game Over to be at layer 10");
  t.assert.equal(t.getSprite("Hippo1").getClone(3).getLayerOrder(), 4, "Expected Clone 3 of Hippo1 to be at layer 4");
  t.assert.equal(t.getSprite("Orange").getClone(1).getLayerOrder(), 6, "Expected Clone 1 of Orange to be at layer 6");
  t.assert.withinRange(t.getSprite("Bat").x, 52.402352293632816, 5, "Expected Sprite Bat to have x-position 52.402352293632816 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 129.28176796, 5, "Expected Sprite Bat to have y-position 129.28176796 +-5");
  t.assert.withinRange(t.getSprite("Hippo1").getClone(1).x, 140.90410464410908, 5, "Expected Clone 1 of Hippo1 to have x-position 140.90410464410908 +-5");
  t.assert.withinRange(t.getSprite("Hippo1").getClone(1).y, 97.63729120039203, 5, "Expected Clone 1 of Hippo1 to have y-position 97.63729120039203 +-5");
  t.assert.withinRange(t.getSprite("Hippo1").getClone(2).x, 110.77015520162985, 5, "Expected Clone 2 of Hippo1 to have x-position 110.77015520162985 +-5");
  t.assert.withinRange(t.getSprite("Hippo1").getClone(2).y, 44.25124010061167, 5, "Expected Clone 2 of Hippo1 to have y-position 44.25124010061167 +-5");
  t.assert.withinRange(t.getSprite("Hippo1").getClone(3).x, 105.74147325977708, 5, "Expected Clone 3 of Hippo1 to have x-position 105.74147325977708 +-5");
  t.assert.withinRange(t.getSprite("Hippo1").getClone(3).y, 85.23178736357292, 5, "Expected Clone 3 of Hippo1 to have y-position 85.23178736357292 +-5");
  t.assert.withinRange(t.getSprite("Orange").getClone(1).x, 52.402352293632816, 5, "Expected Clone 1 of Orange to have x-position 52.402352293632816 +-5");
  t.assert.withinRange(t.getSprite("Orange").getClone(1).y, 101.28176796, 5, "Expected Clone 1 of Orange to have y-position 101.28176796 +-5");
  t.assert.not(t.getSprite("Hippo1").getClone(3).sayText, "Expected Clone 3 of Hippo1 not to say anything");
  t.assert.not(t.getSprite("Orange").getClone(1).sayText, "Expected Clone 1 of Orange not to say anything");
  t.assert.withinRange(t.getSprite("Hippo1").getClone(3).size, 100, 1, "Expected Clone 3 of Hippo1 to have size 100 +-1");
  t.assert.withinRange(t.getSprite("Orange").getClone(1).size, 100, 1, "Expected Clone 1 of Orange to have size 100 +-1");
  t.assert.ok(t.getSprite("Hippo1").getClone(3).visible, "Expected Clone 3 of Hippo1 to be visible");
  t.assert.ok(t.getSprite("Orange").getClone(1).visible, "Expected Clone 1 of Orange to be visible");
  t.assert.equal(t.getSprite("Hippo1").getClone(3).volume, 100, "Expected Clone 3 of Hippo1 to have volume 100");
  t.assert.equal(t.getSprite("Orange").getClone(1).volume, 100, "Expected Clone 1 of Orange to have volume 100");
  t.end();
}
const test5 = async function (t) {
  await t.runForSteps(28);
  await t.runForSteps(1);
  await t.runForSteps(14);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Bat").currentCostume, 0, "Expected Sprite Bat to have costume 0");
  t.assert.withinRange(t.getSprite("Bat").x, 142.40239807, 5, "Expected Sprite Bat to have x-position 142.40239807 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 129.28176796, 5, "Expected Sprite Bat to have y-position 129.28176796 +-5");
  t.keyPress('right arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spaceship").x, 32.32365145, 5, "Expected Sprite Spaceship to have x-position 32.32365145 +-5");
  t.assert.withinRange(t.getSprite("Spaceship").y, -137.25966851, 5, "Expected Sprite Spaceship to have y-position -137.25966851 +-5");
  t.keyPress('space', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Lightning").getClone(1).currentCostume, 0, "Expected Clone 1 of Lightning to have costume 0");
  t.assert.equal(t.getSprite("Lightning").getCloneCount(), 1, "Expected Sprite Lightning to have 1 clones");
  t.assert.equal(t.getSprite("Lightning").getClone(1).direction, -90, 1, "Expected Clone 1 of Lightning to face in direction -90 +-1");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Spaceship").layerOrder, 6, "Expected Sprite Spaceship to be at layer 6");
  t.assert.equal(t.getSprite("Lightning").layerOrder, 2, "Expected Sprite Lightning to be at layer 2");
  t.assert.equal(t.getSprite("Hippo1").layerOrder, 3, "Expected Sprite Hippo1 to be at layer 3");
  t.assert.equal(t.getSprite("Bat").layerOrder, 5, "Expected Sprite Bat to be at layer 5");
  t.assert.equal(t.getSprite("Orange").layerOrder, 4, "Expected Sprite Orange to be at layer 4");
  t.assert.equal(t.getSprite("Game Over").layerOrder, 7, "Expected Sprite Game Over to be at layer 7");
  t.assert.equal(t.getSprite("Lightning").getClone(1).getLayerOrder(), 1, "Expected Clone 1 of Lightning to be at layer 1");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).x, 32.32365145, 5, "Expected Clone 1 of Lightning to have x-position 32.32365145 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).y, -117.25966851000001, 5, "Expected Clone 1 of Lightning to have y-position -117.25966851000001 +-5");
  t.assert.not(t.getSprite("Lightning").getClone(1).sayText, "Expected Clone 1 of Lightning not to say anything");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).size, 25, 1, "Expected Clone 1 of Lightning to have size 25 +-1");
  t.assert.ok(t.getSprite("Lightning").getClone(1).visible, "Expected Clone 1 of Lightning to be visible");
  t.assert.equal(t.getSprite("Lightning").getClone(1).volume, 100, "Expected Clone 1 of Lightning to have volume 100");
  t.keyPress('right arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Bat").currentCostume, 1, "Expected Sprite Bat to have costume 1");
  t.assert.withinRange(t.getSprite("Spaceship").x, 40.32365145, 5, "Expected Sprite Spaceship to have x-position 40.32365145 +-5");
  t.assert.withinRange(t.getSprite("Spaceship").y, -137.25966851, 5, "Expected Sprite Spaceship to have y-position -137.25966851 +-5");
  t.assert.withinRange(t.getSprite("Bat").x, 152.40239807, 5, "Expected Sprite Bat to have x-position 152.40239807 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 129.28176796, 5, "Expected Sprite Bat to have y-position 129.28176796 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).x, 32.32365145, 5, "Expected Clone 1 of Lightning to have x-position 32.32365145 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).y, -87.25966851000001, 5, "Expected Clone 1 of Lightning to have y-position -87.25966851000001 +-5");
  await t.runForSteps(22);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Bat").currentCostume, 3, "Expected Sprite Bat to have costume 3");
  t.assert.withinRange(t.getSprite("Bat").x, 172.40239807, 5, "Expected Sprite Bat to have x-position 172.40239807 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 129.28176796, 5, "Expected Sprite Bat to have y-position 129.28176796 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).x, 32.32365145, 5, "Expected Clone 1 of Lightning to have x-position 32.32365145 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).y, 142.74033149, 5, "Expected Clone 1 of Lightning to have y-position 142.74033149 +-5");
  t.keyPress('space', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Lightning").getClone(1).currentCostume, 0, "Expected Clone 1 of Lightning to have costume 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).direction, -90, 1, "Expected Clone 1 of Lightning to face in direction -90 +-1");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).getLayerOrder(), 1, "Expected Clone 1 of Lightning to be at layer 1");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).x, 40.32365145, 5, "Expected Clone 1 of Lightning to have x-position 40.32365145 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).y, -97.25966851000001, 5, "Expected Clone 1 of Lightning to have y-position -97.25966851000001 +-5");
  t.assert.not(t.getSprite("Lightning").getClone(1).sayText, "Expected Clone 1 of Lightning not to say anything");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).size, 25, 1, "Expected Clone 1 of Lightning to have size 25 +-1");
  t.assert.ok(t.getSprite("Lightning").getClone(1).visible, "Expected Clone 1 of Lightning to be visible");
  t.assert.equal(t.getSprite("Lightning").getClone(1).volume, 100, "Expected Clone 1 of Lightning to have volume 100");
  t.keyPress('space', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Bat").currentCostume, 0, "Expected Sprite Bat to have costume 0");
  t.assert.withinRange(t.getSprite("Bat").x, 182.40239807, 5, "Expected Sprite Bat to have x-position 182.40239807 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 129.28176796, 5, "Expected Sprite Bat to have y-position 129.28176796 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).x, 40.32365145, 5, "Expected Clone 1 of Lightning to have x-position 40.32365145 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).y, -57.25966851000001, 5, "Expected Clone 1 of Lightning to have y-position -57.25966851000001 +-5");
  t.keyPress('right arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spaceship").x, 52.32365145, 5, "Expected Sprite Spaceship to have x-position 52.32365145 +-5");
  t.assert.withinRange(t.getSprite("Spaceship").y, -137.25966851, 5, "Expected Sprite Spaceship to have y-position -137.25966851 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).x, 40.32365145, 5, "Expected Clone 1 of Lightning to have x-position 40.32365145 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).y, -17.25966851000001, 5, "Expected Clone 1 of Lightning to have y-position -17.25966851000001 +-5");
  await t.runForSteps(41);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Lightning").getCloneCount(), 0, "Expected Sprite Lightning to have 0 clones");
  t.assert.equal(t.getSprite("Bat").direction, -90, 1, "Expected Sprite Bat to face in direction -90 +-1");
  t.assert.equal(t.getSprite("Spaceship").layerOrder, 5, "Expected Sprite Spaceship to be at layer 5");
  t.assert.equal(t.getSprite("Lightning").layerOrder, 1, "Expected Sprite Lightning to be at layer 1");
  t.assert.equal(t.getSprite("Hippo1").layerOrder, 2, "Expected Sprite Hippo1 to be at layer 2");
  t.assert.equal(t.getSprite("Bat").layerOrder, 4, "Expected Sprite Bat to be at layer 4");
  t.assert.equal(t.getSprite("Orange").layerOrder, 3, "Expected Sprite Orange to be at layer 3");
  t.assert.equal(t.getSprite("Game Over").layerOrder, 6, "Expected Sprite Game Over to be at layer 6");
  t.assert.withinRange(t.getSprite("Bat").x, 202.40235229363282, 5, "Expected Sprite Bat to have x-position 202.40235229363282 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 129.28176796, 5, "Expected Sprite Bat to have y-position 129.28176796 +-5");
  t.assert.equal(t.getStage().getVariable("score", false).value, "10", "Expected score to have value 10");
  await t.runForSteps(24);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Bat").currentCostume, 3, "Expected Sprite Bat to have costume 3");
  t.assert.withinRange(t.getSprite("Bat").x, 172.40235229363282, 5, "Expected Sprite Bat to have x-position 172.40235229363282 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 129.28176796, 5, "Expected Sprite Bat to have y-position 129.28176796 +-5");
  t.keyPress('right arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spaceship").x, 56.32365145, 5, "Expected Sprite Spaceship to have x-position 56.32365145 +-5");
  t.assert.withinRange(t.getSprite("Spaceship").y, -137.25966851, 5, "Expected Sprite Spaceship to have y-position -137.25966851 +-5");
  await t.runForSteps(70);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Bat").currentCostume, 2, "Expected Sprite Bat to have costume 2");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).currentCostume, 0, "Expected Clone 1 of Hippo1 to have costume 0");
  t.assert.equal(t.getSprite("Hippo1").getCloneCount(), 1, "Expected Sprite Hippo1 to have 1 clones");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).direction, 118.31161087842045, 1, "Expected Clone 1 of Hippo1 to face in direction 118.31161087842045 +-1");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Spaceship").layerOrder, 6, "Expected Sprite Spaceship to be at layer 6");
  t.assert.equal(t.getSprite("Hippo1").layerOrder, 3, "Expected Sprite Hippo1 to be at layer 3");
  t.assert.equal(t.getSprite("Bat").layerOrder, 5, "Expected Sprite Bat to be at layer 5");
  t.assert.equal(t.getSprite("Orange").layerOrder, 4, "Expected Sprite Orange to be at layer 4");
  t.assert.equal(t.getSprite("Game Over").layerOrder, 7, "Expected Sprite Game Over to be at layer 7");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).getLayerOrder(), 2, "Expected Clone 1 of Hippo1 to be at layer 2");
  t.assert.withinRange(t.getSprite("Bat").x, 102.40235229363282, 5, "Expected Sprite Bat to have x-position 102.40235229363282 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 129.28176796, 5, "Expected Sprite Bat to have y-position 129.28176796 +-5");
  t.assert.withinRange(t.getSprite("Hippo1").getClone(1).x, -111.88643045906596, 5, "Expected Clone 1 of Hippo1 to have x-position -111.88643045906596 +-5");
  t.assert.withinRange(t.getSprite("Hippo1").getClone(1).y, 103.02361928985981, 5, "Expected Clone 1 of Hippo1 to have y-position 103.02361928985981 +-5");
  t.assert.not(t.getSprite("Hippo1").getClone(1).sayText, "Expected Clone 1 of Hippo1 not to say anything");
  t.assert.withinRange(t.getSprite("Hippo1").getClone(1).size, 100, 1, "Expected Clone 1 of Hippo1 to have size 100 +-1");
  t.assert.ok(t.getSprite("Hippo1").getClone(1).visible, "Expected Clone 1 of Hippo1 to be visible");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).volume, 100, "Expected Clone 1 of Hippo1 to have volume 100");
  t.dragSprite('Spaceship', -149.40682234211448, 105.22309809970653, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spaceship").currentCostume, 1, "Expected Sprite Spaceship to have costume 1");
  t.assert.equal(t.getSprite("Hippo1").getCloneCount(), 0, "Expected Sprite Hippo1 to have 0 clones");
  t.assert.equal(t.getSprite("Spaceship").layerOrder, 5, "Expected Sprite Spaceship to be at layer 5");
  t.assert.equal(t.getSprite("Hippo1").layerOrder, 2, "Expected Sprite Hippo1 to be at layer 2");
  t.assert.equal(t.getSprite("Bat").layerOrder, 4, "Expected Sprite Bat to be at layer 4");
  t.assert.equal(t.getSprite("Orange").layerOrder, 3, "Expected Sprite Orange to be at layer 3");
  t.assert.equal(t.getSprite("Game Over").layerOrder, 6, "Expected Sprite Game Over to be at layer 6");
  t.assert.withinRange(t.getSprite("Spaceship").x, -149.40682234211448, 5, "Expected Sprite Spaceship to have x-position -149.40682234211448 +-5");
  t.assert.withinRange(t.getSprite("Spaceship").y, 105.22309809970653, 5, "Expected Sprite Spaceship to have y-position 105.22309809970653 +-5");
  t.assert.equal(t.getStage().getVariable("lives", false).value, "2", "Expected lives to have value 2");
  t.dragSprite('Lightning', -235.91729985812879, 56.90105274611914, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Lightning").x, -235.91729985812879, 5, "Expected Sprite Lightning to have x-position -235.91729985812879 +-5");
  t.assert.withinRange(t.getSprite("Lightning").y, 56.90105274611914, 5, "Expected Sprite Lightning to have y-position 56.90105274611914 +-5");
  await t.runForSteps(15);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Bat").currentCostume, 0, "Expected Sprite Bat to have costume 0");
  t.assert.withinRange(t.getSprite("Bat").x, 82.40235229363282, 5, "Expected Sprite Bat to have x-position 82.40235229363282 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 129.28176796, 5, "Expected Sprite Bat to have y-position 129.28176796 +-5");
  t.keyPress('left arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spaceship").x, -153.40682234211448, 5, "Expected Sprite Spaceship to have x-position -153.40682234211448 +-5");
  t.assert.withinRange(t.getSprite("Spaceship").y, 105.22309809970653, 5, "Expected Sprite Spaceship to have y-position 105.22309809970653 +-5");
  await t.runForSteps(95);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spaceship").currentCostume, 0, "Expected Sprite Spaceship to have costume 0");
  t.assert.equal(t.getSprite("Bat").currentCostume, 2, "Expected Sprite Bat to have costume 2");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).currentCostume, 0, "Expected Clone 1 of Hippo1 to have costume 0");
  t.assert.equal(t.getSprite("Hippo1").getCloneCount(), 1, "Expected Sprite Hippo1 to have 1 clones");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).direction, 139.31161087842045, 1, "Expected Clone 1 of Hippo1 to face in direction 139.31161087842045 +-1");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Spaceship").layerOrder, 6, "Expected Sprite Spaceship to be at layer 6");
  t.assert.equal(t.getSprite("Hippo1").layerOrder, 3, "Expected Sprite Hippo1 to be at layer 3");
  t.assert.equal(t.getSprite("Bat").layerOrder, 5, "Expected Sprite Bat to be at layer 5");
  t.assert.equal(t.getSprite("Orange").layerOrder, 4, "Expected Sprite Orange to be at layer 4");
  t.assert.equal(t.getSprite("Game Over").layerOrder, 7, "Expected Sprite Game Over to be at layer 7");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).getLayerOrder(), 2, "Expected Clone 1 of Hippo1 to be at layer 2");
  t.assert.withinRange(t.getSprite("Bat").x, -17.597647706367184, 5, "Expected Sprite Bat to have x-position -17.597647706367184 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 129.28176796, 5, "Expected Sprite Bat to have y-position 129.28176796 +-5");
  t.assert.withinRange(t.getSprite("Hippo1").getClone(1).x, 148.83748376333023, 5, "Expected Clone 1 of Hippo1 to have x-position 148.83748376333023 +-5");
  t.assert.withinRange(t.getSprite("Hippo1").getClone(1).y, 104.48391866517358, 5, "Expected Clone 1 of Hippo1 to have y-position 104.48391866517358 +-5");
  t.assert.not(t.getSprite("Hippo1").getClone(1).sayText, "Expected Clone 1 of Hippo1 not to say anything");
  t.assert.withinRange(t.getSprite("Hippo1").getClone(1).size, 100, 1, "Expected Clone 1 of Hippo1 to have size 100 +-1");
  t.assert.ok(t.getSprite("Hippo1").getClone(1).visible, "Expected Clone 1 of Hippo1 to be visible");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).volume, 100, "Expected Clone 1 of Hippo1 to have volume 100");
  t.end();
}
const test6 = async function (t) {
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.keyPress('space', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Lightning").getClone(1).currentCostume, 0, "Expected Clone 1 of Lightning to have costume 0");
  t.assert.equal(t.getSprite("Lightning").getCloneCount(), 1, "Expected Sprite Lightning to have 1 clones");
  t.assert.equal(t.getSprite("Lightning").getClone(1).direction, -90, 1, "Expected Clone 1 of Lightning to face in direction -90 +-1");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Spaceship").layerOrder, 6, "Expected Sprite Spaceship to be at layer 6");
  t.assert.equal(t.getSprite("Lightning").layerOrder, 2, "Expected Sprite Lightning to be at layer 2");
  t.assert.equal(t.getSprite("Hippo1").layerOrder, 3, "Expected Sprite Hippo1 to be at layer 3");
  t.assert.equal(t.getSprite("Bat").layerOrder, 5, "Expected Sprite Bat to be at layer 5");
  t.assert.equal(t.getSprite("Orange").layerOrder, 4, "Expected Sprite Orange to be at layer 4");
  t.assert.equal(t.getSprite("Game Over").layerOrder, 7, "Expected Sprite Game Over to be at layer 7");
  t.assert.equal(t.getSprite("Lightning").getClone(1).getLayerOrder(), 1, "Expected Clone 1 of Lightning to be at layer 1");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).x, 36.32365145, 5, "Expected Clone 1 of Lightning to have x-position 36.32365145 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).y, -117.25966851000001, 5, "Expected Clone 1 of Lightning to have y-position -117.25966851000001 +-5");
  t.assert.not(t.getSprite("Lightning").getClone(1).sayText, "Expected Clone 1 of Lightning not to say anything");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).size, 25, 1, "Expected Clone 1 of Lightning to have size 25 +-1");
  t.assert.ok(t.getSprite("Lightning").getClone(1).visible, "Expected Clone 1 of Lightning to be visible");
  t.assert.equal(t.getSprite("Lightning").getClone(1).volume, 100, "Expected Clone 1 of Lightning to have volume 100");
  await t.runForSteps(55);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Bat").currentCostume, 2, "Expected Sprite Bat to have costume 2");
  t.assert.equal(t.getSprite("Lightning").getCloneCount(), 0, "Expected Sprite Lightning to have 0 clones");
  t.assert.equal(t.getSprite("Spaceship").layerOrder, 5, "Expected Sprite Spaceship to be at layer 5");
  t.assert.equal(t.getSprite("Lightning").layerOrder, 1, "Expected Sprite Lightning to be at layer 1");
  t.assert.equal(t.getSprite("Hippo1").layerOrder, 2, "Expected Sprite Hippo1 to be at layer 2");
  t.assert.equal(t.getSprite("Bat").layerOrder, 4, "Expected Sprite Bat to be at layer 4");
  t.assert.equal(t.getSprite("Orange").layerOrder, 3, "Expected Sprite Orange to be at layer 3");
  t.assert.equal(t.getSprite("Game Over").layerOrder, 6, "Expected Sprite Game Over to be at layer 6");
  t.assert.withinRange(t.getSprite("Bat").x, 162.40239807, 5, "Expected Sprite Bat to have x-position 162.40239807 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 129.28176796, 5, "Expected Sprite Bat to have y-position 129.28176796 +-5");
  await t.runForSteps(50);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Bat").currentCostume, 3, "Expected Sprite Bat to have costume 3");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).currentCostume, 0, "Expected Clone 1 of Hippo1 to have costume 0");
  t.assert.equal(t.getSprite("Hippo1").getCloneCount(), 1, "Expected Sprite Hippo1 to have 1 clones");
  t.assert.equal(t.getSprite("Bat").direction, -90, 1, "Expected Sprite Bat to face in direction -90 +-1");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).direction, 67.32505275898842, 1, "Expected Clone 1 of Hippo1 to face in direction 67.32505275898842 +-1");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Spaceship").layerOrder, 6, "Expected Sprite Spaceship to be at layer 6");
  t.assert.equal(t.getSprite("Hippo1").layerOrder, 3, "Expected Sprite Hippo1 to be at layer 3");
  t.assert.equal(t.getSprite("Bat").layerOrder, 5, "Expected Sprite Bat to be at layer 5");
  t.assert.equal(t.getSprite("Orange").layerOrder, 4, "Expected Sprite Orange to be at layer 4");
  t.assert.equal(t.getSprite("Game Over").layerOrder, 7, "Expected Sprite Game Over to be at layer 7");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).getLayerOrder(), 2, "Expected Clone 1 of Hippo1 to be at layer 2");
  t.assert.withinRange(t.getSprite("Bat").x, 212.40235229363282, 5, "Expected Sprite Bat to have x-position 212.40235229363282 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 129.28176796, 5, "Expected Sprite Bat to have y-position 129.28176796 +-5");
  t.assert.withinRange(t.getSprite("Hippo1").getClone(1).x, 48.987678470910794, 5, "Expected Clone 1 of Hippo1 to have x-position 48.987678470910794 +-5");
  t.assert.withinRange(t.getSprite("Hippo1").getClone(1).y, 118.91085620831198, 5, "Expected Clone 1 of Hippo1 to have y-position 118.91085620831198 +-5");
  t.assert.not(t.getSprite("Hippo1").getClone(1).sayText, "Expected Clone 1 of Hippo1 not to say anything");
  t.assert.withinRange(t.getSprite("Hippo1").getClone(1).size, 100, 1, "Expected Clone 1 of Hippo1 to have size 100 +-1");
  t.assert.ok(t.getSprite("Hippo1").getClone(1).visible, "Expected Clone 1 of Hippo1 to be visible");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).volume, 100, "Expected Clone 1 of Hippo1 to have volume 100");
  t.dragSprite('Spaceship', 78.71843946944637, 150.85000228881836, null);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spaceship").currentCostume, 1, "Expected Sprite Spaceship to have costume 1");
  t.assert.equal(t.getSprite("Hippo1").getCloneCount(), 0, "Expected Sprite Hippo1 to have 0 clones");
  t.assert.equal(t.getSprite("Spaceship").layerOrder, 5, "Expected Sprite Spaceship to be at layer 5");
  t.assert.equal(t.getSprite("Hippo1").layerOrder, 2, "Expected Sprite Hippo1 to be at layer 2");
  t.assert.equal(t.getSprite("Bat").layerOrder, 4, "Expected Sprite Bat to be at layer 4");
  t.assert.equal(t.getSprite("Orange").layerOrder, 3, "Expected Sprite Orange to be at layer 3");
  t.assert.equal(t.getSprite("Game Over").layerOrder, 6, "Expected Sprite Game Over to be at layer 6");
  t.assert.withinRange(t.getSprite("Spaceship").x, 78.71843946944637, 5, "Expected Sprite Spaceship to have x-position 78.71843946944637 +-5");
  t.assert.withinRange(t.getSprite("Spaceship").y, 150.85000228881836, 5, "Expected Sprite Spaceship to have y-position 150.85000228881836 +-5");
  t.assert.equal(t.getStage().getVariable("lives", false).value, "2", "Expected lives to have value 2");
  await t.runForSteps(65);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spaceship").currentCostume, 0, "Expected Sprite Spaceship to have costume 0");
  t.assert.equal(t.getSprite("Bat").currentCostume, 2, "Expected Sprite Bat to have costume 2");
  t.assert.withinRange(t.getSprite("Bat").x, 142.40235229363282, 5, "Expected Sprite Bat to have x-position 142.40235229363282 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 129.28176796, 5, "Expected Sprite Bat to have y-position 129.28176796 +-5");
  await t.runForSteps(100);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spaceship").currentCostume, 1, "Expected Sprite Spaceship to have costume 1");
  t.assert.equal(t.getSprite("Bat").currentCostume, 1, "Expected Sprite Bat to have costume 1");
  t.assert.withinRange(t.getSprite("Bat").x, 72.40235229363282, 5, "Expected Sprite Bat to have x-position 72.40235229363282 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 129.28176796, 5, "Expected Sprite Bat to have y-position 129.28176796 +-5");
  t.assert.equal(t.getStage().getVariable("lives", false).value, "0", "Expected lives to have value 0");
  t.assert.ok(t.getSprite("Game Over").visible, "Expected Sprite Game Over to be visible");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724672412658',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724672412658',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724672412658',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724672412658',
      type: 'standard',
  },
  {
      test: test4,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724672412658',
      type: 'standard',
  },
  {
      test: test5,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724672412658',
      type: 'standard',
  },
  {
      test: test6,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724672412658',
      type: 'standard',
  }
]
