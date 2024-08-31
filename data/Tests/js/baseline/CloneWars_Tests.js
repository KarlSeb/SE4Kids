const test0 = async function (t) {
  t.keyPress('space', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.end();
}
const test1 = async function (t) {
  t.keyPress('space', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(87);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Lightning").getCloneCount(), 0, "Expected Sprite Lightning to have 0 clones");
  t.assert.equal(t.getSprite("Spaceship").layerOrder, 5, "Expected Sprite Spaceship to be at layer 5");
  t.assert.equal(t.getSprite("Lightning").layerOrder, 1, "Expected Sprite Lightning to be at layer 1");
  t.assert.equal(t.getSprite("Hippo1").layerOrder, 2, "Expected Sprite Hippo1 to be at layer 2");
  t.assert.equal(t.getSprite("Bat").layerOrder, 4, "Expected Sprite Bat to be at layer 4");
  t.assert.equal(t.getSprite("Orange").layerOrder, 3, "Expected Sprite Orange to be at layer 3");
  t.assert.equal(t.getSprite("Game Over").layerOrder, 6, "Expected Sprite Game Over to be at layer 6");
  t.assert.withinRange(t.getSprite("Bat").x, 182.40239807, 5, "Expected Sprite Bat to have x-position 182.40239807 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 129.28176796, 5, "Expected Sprite Bat to have y-position 129.28176796 +-5");
  t.end();
}
const test2 = async function (t) {
  await t.runForSteps(57);
  await t.runForSteps(1);
  t.keyPress('space', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Bat").currentCostume, 2, "Expected Sprite Bat to have costume 2");
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
  t.assert.withinRange(t.getSprite("Bat").x, 162.40239807, 5, "Expected Sprite Bat to have x-position 162.40239807 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 129.28176796, 5, "Expected Sprite Bat to have y-position 129.28176796 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).x, 20.32365145, 5, "Expected Clone 1 of Lightning to have x-position 20.32365145 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).y, -107.25966851000001, 5, "Expected Clone 1 of Lightning to have y-position -107.25966851000001 +-5");
  t.assert.not(t.getSprite("Lightning").getClone(1).sayText, "Expected Clone 1 of Lightning not to say anything");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).size, 25, 1, "Expected Clone 1 of Lightning to have size 25 +-1");
  t.assert.ok(t.getSprite("Lightning").getClone(1).visible, "Expected Clone 1 of Lightning to be visible");
  t.assert.equal(t.getSprite("Lightning").getClone(1).volume, 100, "Expected Clone 1 of Lightning to have volume 100");
  t.keyPress('left arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spaceship").x, 16.32365145, 5, "Expected Sprite Spaceship to have x-position 16.32365145 +-5");
  t.assert.withinRange(t.getSprite("Spaceship").y, -137.25966851, 5, "Expected Sprite Spaceship to have y-position -137.25966851 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).x, 20.32365145, 5, "Expected Clone 1 of Lightning to have x-position 20.32365145 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).y, -87.25966851000001, 5, "Expected Clone 1 of Lightning to have y-position -87.25966851000001 +-5");
  t.keyPress('left arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spaceship").x, 8.32365145, 5, "Expected Sprite Spaceship to have x-position 8.32365145 +-5");
  t.assert.withinRange(t.getSprite("Spaceship").y, -137.25966851, 5, "Expected Sprite Spaceship to have y-position -137.25966851 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).x, 20.32365145, 5, "Expected Clone 1 of Lightning to have x-position 20.32365145 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).y, -57.25966851000001, 5, "Expected Clone 1 of Lightning to have y-position -57.25966851000001 +-5");
  await t.runForSteps(54);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Bat").currentCostume, 0, "Expected Sprite Bat to have costume 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).currentCostume, 0, "Expected Clone 1 of Hippo1 to have costume 0");
  t.assert.equal(t.getSprite("Lightning").getCloneCount(), 0, "Expected Sprite Lightning to have 0 clones");
  t.assert.equal(t.getSprite("Hippo1").getCloneCount(), 1, "Expected Sprite Hippo1 to have 1 clones");
  t.assert.equal(t.getSprite("Bat").direction, -90, 1, "Expected Sprite Bat to face in direction -90 +-1");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).direction, 101.32505275898842, 1, "Expected Clone 1 of Hippo1 to face in direction 101.32505275898842 +-1");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Hippo1 to be 0");
  t.assert.equal(t.getSprite("Lightning").layerOrder, 1, "Expected Sprite Lightning to be at layer 1");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).getLayerOrder(), 2, "Expected Clone 1 of Hippo1 to be at layer 2");
  t.assert.withinRange(t.getSprite("Bat").x, 202.40235229363282, 5, "Expected Sprite Bat to have x-position 202.40235229363282 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 129.28176796, 5, "Expected Sprite Bat to have y-position 129.28176796 +-5");
  t.assert.withinRange(t.getSprite("Hippo1").getClone(1).x, -156, 5, "Expected Clone 1 of Hippo1 to have x-position -156 +-5");
  t.assert.withinRange(t.getSprite("Hippo1").getClone(1).y, 121.42787170410156, 5, "Expected Clone 1 of Hippo1 to have y-position 121.42787170410156 +-5");
  t.assert.not(t.getSprite("Hippo1").getClone(1).sayText, "Expected Clone 1 of Hippo1 not to say anything");
  t.assert.withinRange(t.getSprite("Hippo1").getClone(1).size, 100, 1, "Expected Clone 1 of Hippo1 to have size 100 +-1");
  t.assert.ok(t.getSprite("Hippo1").getClone(1).visible, "Expected Clone 1 of Hippo1 to be visible");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).volume, 100, "Expected Clone 1 of Hippo1 to have volume 100");
  t.end();
}
const test3 = async function (t) {
  t.keyPress('space', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(8);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Bat").currentCostume, 1, "Expected Sprite Bat to have costume 1");
  t.assert.withinRange(t.getSprite("Bat").x, 112.40239807, 5, "Expected Sprite Bat to have x-position 112.40239807 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 129.28176796, 5, "Expected Sprite Bat to have y-position 129.28176796 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).x, 20.32365145, 5, "Expected Clone 1 of Lightning to have x-position 20.32365145 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).y, -27.25966851000001, 5, "Expected Clone 1 of Lightning to have y-position -27.25966851000001 +-5");
  await t.runForSteps(87);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Hippo1").getClone(1).currentCostume, 0, "Expected Clone 1 of Hippo1 to have costume 0");
  t.assert.equal(t.getSprite("Lightning").getCloneCount(), 0, "Expected Sprite Lightning to have 0 clones");
  t.assert.equal(t.getSprite("Hippo1").getCloneCount(), 1, "Expected Sprite Hippo1 to have 1 clones");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).direction, 121.32505275898842, 1, "Expected Clone 1 of Hippo1 to face in direction 121.32505275898842 +-1");
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
  t.assert.withinRange(t.getSprite("Hippo1").getClone(1).x, -142.65005906920666, 5, "Expected Clone 1 of Hippo1 to have x-position -142.65005906920666 +-5");
  t.assert.withinRange(t.getSprite("Hippo1").getClone(1).y, 117.1873207608083, 5, "Expected Clone 1 of Hippo1 to have y-position 117.1873207608083 +-5");
  t.assert.not(t.getSprite("Hippo1").getClone(1).sayText, "Expected Clone 1 of Hippo1 not to say anything");
  t.assert.withinRange(t.getSprite("Hippo1").getClone(1).size, 100, 1, "Expected Clone 1 of Hippo1 to have size 100 +-1");
  t.assert.ok(t.getSprite("Hippo1").getClone(1).visible, "Expected Clone 1 of Hippo1 to be visible");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).volume, 100, "Expected Clone 1 of Hippo1 to have volume 100");
  await t.runForSteps(31);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Bat").direction, -90, 1, "Expected Sprite Bat to face in direction -90 +-1");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).direction, 119.32505275898842, 1, "Expected Clone 1 of Hippo1 to face in direction 119.32505275898842 +-1");
  t.assert.withinRange(t.getSprite("Bat").x, 192.40235229363282, 5, "Expected Sprite Bat to have x-position 192.40235229363282 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 129.28176796, 5, "Expected Sprite Bat to have y-position 129.28176796 +-5");
  t.assert.withinRange(t.getSprite("Hippo1").getClone(1).x, -85.96128210436554, 5, "Expected Clone 1 of Hippo1 to have x-position -85.96128210436554 +-5");
  t.assert.withinRange(t.getSprite("Hippo1").getClone(1).y, 88.99746905138183, 5, "Expected Clone 1 of Hippo1 to have y-position 88.99746905138183 +-5");
  await t.runForSteps(14);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Bat").currentCostume, 2, "Expected Sprite Bat to have costume 2");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).direction, 126.32505275898842, 1, "Expected Clone 1 of Hippo1 to face in direction 126.32505275898842 +-1");
  t.assert.withinRange(t.getSprite("Bat").x, 182.40235229363282, 5, "Expected Sprite Bat to have x-position 182.40235229363282 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 129.28176796, 5, "Expected Sprite Bat to have y-position 129.28176796 +-5");
  t.assert.withinRange(t.getSprite("Hippo1").getClone(1).x, -58.97241282866206, 5, "Expected Clone 1 of Hippo1 to have x-position -58.97241282866206 +-5");
  t.assert.withinRange(t.getSprite("Hippo1").getClone(1).y, 76.49485493019424, 5, "Expected Clone 1 of Hippo1 to have y-position 76.49485493019424 +-5");
  t.keyPress('space', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Lightning").getClone(1).currentCostume, 0, "Expected Clone 1 of Lightning to have costume 0");
  t.assert.equal(t.getSprite("Lightning").getCloneCount(), 1, "Expected Sprite Lightning to have 1 clones");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).direction, 140.32505275898842, 1, "Expected Clone 1 of Hippo1 to face in direction 140.32505275898842 +-1");
  t.assert.equal(t.getSprite("Lightning").getClone(1).direction, -90, 1, "Expected Clone 1 of Lightning to face in direction -90 +-1");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Lightning").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Lightning to be 0");
  t.assert.equal(t.getSprite("Spaceship").layerOrder, 7, "Expected Sprite Spaceship to be at layer 7");
  t.assert.equal(t.getSprite("Lightning").layerOrder, 2, "Expected Sprite Lightning to be at layer 2");
  t.assert.equal(t.getSprite("Hippo1").layerOrder, 4, "Expected Sprite Hippo1 to be at layer 4");
  t.assert.equal(t.getSprite("Bat").layerOrder, 6, "Expected Sprite Bat to be at layer 6");
  t.assert.equal(t.getSprite("Orange").layerOrder, 5, "Expected Sprite Orange to be at layer 5");
  t.assert.equal(t.getSprite("Game Over").layerOrder, 8, "Expected Sprite Game Over to be at layer 8");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).getLayerOrder(), 3, "Expected Clone 1 of Hippo1 to be at layer 3");
  t.assert.equal(t.getSprite("Lightning").getClone(1).getLayerOrder(), 1, "Expected Clone 1 of Lightning to be at layer 1");
  t.assert.withinRange(t.getSprite("Hippo1").getClone(1).x, -55.859123189666946, 5, "Expected Clone 1 of Hippo1 to have x-position -55.859123189666946 +-5");
  t.assert.withinRange(t.getSprite("Hippo1").getClone(1).y, 73.98946370157151, 5, "Expected Clone 1 of Hippo1 to have y-position 73.98946370157151 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).x, 20.32365145, 5, "Expected Clone 1 of Lightning to have x-position 20.32365145 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).y, -117.25966851000001, 5, "Expected Clone 1 of Lightning to have y-position -117.25966851000001 +-5");
  t.assert.not(t.getSprite("Lightning").getClone(1).sayText, "Expected Clone 1 of Lightning not to say anything");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).size, 25, 1, "Expected Clone 1 of Lightning to have size 25 +-1");
  t.assert.ok(t.getSprite("Lightning").getClone(1).visible, "Expected Clone 1 of Lightning to be visible");
  t.assert.equal(t.getSprite("Lightning").getClone(1).volume, 100, "Expected Clone 1 of Lightning to have volume 100");
  await t.runForSteps(11);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Bat").currentCostume, 3, "Expected Sprite Bat to have costume 3");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).direction, 170.32505275898842, 1, "Expected Clone 1 of Hippo1 to face in direction 170.32505275898842 +-1");
  t.assert.withinRange(t.getSprite("Bat").x, 172.40235229363282, 5, "Expected Sprite Bat to have x-position 172.40235229363282 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 129.28176796, 5, "Expected Sprite Bat to have y-position 129.28176796 +-5");
  t.assert.withinRange(t.getSprite("Hippo1").getClone(1).x, -47.92359468170973, 5, "Expected Clone 1 of Hippo1 to have x-position -47.92359468170973 +-5");
  t.assert.withinRange(t.getSprite("Hippo1").getClone(1).y, 52.05661264973575, 5, "Expected Clone 1 of Hippo1 to have y-position 52.05661264973575 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).x, 20.32365145, 5, "Expected Clone 1 of Lightning to have x-position 20.32365145 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).y, 2.7403314899999884, 5, "Expected Clone 1 of Lightning to have y-position 2.7403314899999884 +-5");
  t.keyPress('left arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Bat").currentCostume, 0, "Expected Sprite Bat to have costume 0");
  t.assert.equal(t.getSprite("Hippo1").getCloneCount(), 0, "Expected Sprite Hippo1 to have 0 clones");
  t.assert.equal(t.getSprite("Spaceship").layerOrder, 6, "Expected Sprite Spaceship to be at layer 6");
  t.assert.equal(t.getSprite("Hippo1").layerOrder, 3, "Expected Sprite Hippo1 to be at layer 3");
  t.assert.equal(t.getSprite("Bat").layerOrder, 5, "Expected Sprite Bat to be at layer 5");
  t.assert.equal(t.getSprite("Orange").layerOrder, 4, "Expected Sprite Orange to be at layer 4");
  t.assert.equal(t.getSprite("Game Over").layerOrder, 7, "Expected Sprite Game Over to be at layer 7");
  t.assert.withinRange(t.getSprite("Spaceship").x, 8.32365145, 5, "Expected Sprite Spaceship to have x-position 8.32365145 +-5");
  t.assert.withinRange(t.getSprite("Spaceship").y, -137.25966851, 5, "Expected Sprite Spaceship to have y-position -137.25966851 +-5");
  t.assert.withinRange(t.getSprite("Bat").x, 162.40235229363282, 5, "Expected Sprite Bat to have x-position 162.40235229363282 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 129.28176796, 5, "Expected Sprite Bat to have y-position 129.28176796 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).x, 20.32365145, 5, "Expected Clone 1 of Lightning to have x-position 20.32365145 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).y, 42.74033148999999, 5, "Expected Clone 1 of Lightning to have y-position 42.74033148999999 +-5");
  t.assert.equal(t.getStage().getVariable("score", false).value, "10", "Expected score to have value 10");
  t.end();
}
const test4 = async function (t) {
  await t.runForSteps(98);
  await t.runForSteps(1);
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Bat").currentCostume, 2, "Expected Sprite Bat to have costume 2");
  t.assert.withinRange(t.getSprite("Spaceship").x, 36.32365145, 5, "Expected Sprite Spaceship to have x-position 36.32365145 +-5");
  t.assert.withinRange(t.getSprite("Spaceship").y, -137.25966851, 5, "Expected Sprite Spaceship to have y-position -137.25966851 +-5");
  t.assert.withinRange(t.getSprite("Bat").x, 202.40239807, 5, "Expected Sprite Bat to have x-position 202.40239807 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 129.28176796, 5, "Expected Sprite Bat to have y-position 129.28176796 +-5");
  t.keyPress('left arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spaceship").x, 28.32365145, 5, "Expected Sprite Spaceship to have x-position 28.32365145 +-5");
  t.assert.withinRange(t.getSprite("Spaceship").y, -137.25966851, 5, "Expected Sprite Spaceship to have y-position -137.25966851 +-5");
  t.keyPress('right arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Bat").currentCostume, 3, "Expected Sprite Bat to have costume 3");
  t.assert.equal(t.getSprite("Bat").direction, -90, 1, "Expected Sprite Bat to face in direction -90 +-1");
  t.assert.withinRange(t.getSprite("Spaceship").x, 40.32365145, 5, "Expected Sprite Spaceship to have x-position 40.32365145 +-5");
  t.assert.withinRange(t.getSprite("Spaceship").y, -137.25966851, 5, "Expected Sprite Spaceship to have y-position -137.25966851 +-5");
  t.assert.withinRange(t.getSprite("Bat").x, 212.40235229363282, 5, "Expected Sprite Bat to have x-position 212.40235229363282 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 129.28176796, 5, "Expected Sprite Bat to have y-position 129.28176796 +-5");
  await t.runForSteps(99);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spaceship").currentCostume, 1, "Expected Sprite Spaceship to have costume 1");
  t.assert.equal(t.getSprite("Bat").currentCostume, 1, "Expected Sprite Bat to have costume 1");
  t.assert.equal(t.getSprite("Orange").getClone(1).currentCostume, 0, "Expected Clone 1 of Orange to have costume 0");
  t.assert.equal(t.getSprite("Orange").getCloneCount(), 1, "Expected Sprite Orange to have 1 clones");
  t.assert.equal(t.getSprite("Orange").getClone(1).direction, 90, 1, "Expected Clone 1 of Orange to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Orange").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Orange to be 0");
  t.assert.equal(t.getSprite("Orange").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Orange to be 0");
  t.assert.equal(t.getSprite("Orange").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Orange to be 0");
  t.assert.equal(t.getSprite("Orange").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Orange to be 0");
  t.assert.equal(t.getSprite("Orange").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Orange to be 0");
  t.assert.equal(t.getSprite("Orange").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Orange to be 0");
  t.assert.equal(t.getSprite("Orange").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Orange to be 0");
  t.assert.equal(t.getSprite("Spaceship").layerOrder, 6, "Expected Sprite Spaceship to be at layer 6");
  t.assert.equal(t.getSprite("Bat").layerOrder, 5, "Expected Sprite Bat to be at layer 5");
  t.assert.equal(t.getSprite("Orange").layerOrder, 4, "Expected Sprite Orange to be at layer 4");
  t.assert.equal(t.getSprite("Game Over").layerOrder, 7, "Expected Sprite Game Over to be at layer 7");
  t.assert.equal(t.getSprite("Orange").getClone(1).getLayerOrder(), 3, "Expected Clone 1 of Orange to be at layer 3");
  t.assert.withinRange(t.getSprite("Bat").x, 112.40235229363282, 5, "Expected Sprite Bat to have x-position 112.40235229363282 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 129.28176796, 5, "Expected Sprite Bat to have y-position 129.28176796 +-5");
  t.assert.withinRange(t.getSprite("Orange").getClone(1).x, 112.40235229363282, 5, "Expected Clone 1 of Orange to have x-position 112.40235229363282 +-5");
  t.assert.withinRange(t.getSprite("Orange").getClone(1).y, 125.28176796, 5, "Expected Clone 1 of Orange to have y-position 125.28176796 +-5");
  t.assert.not(t.getSprite("Orange").getClone(1).sayText, "Expected Clone 1 of Orange not to say anything");
  t.assert.withinRange(t.getSprite("Orange").getClone(1).size, 100, 1, "Expected Clone 1 of Orange to have size 100 +-1");
  t.assert.equal(t.getStage().getVariable("lives", false).value, "2", "Expected lives to have value 2");
  t.assert.ok(t.getSprite("Orange").getClone(1).visible, "Expected Clone 1 of Orange to be visible");
  t.assert.equal(t.getSprite("Orange").getClone(1).volume, 100, "Expected Clone 1 of Orange to have volume 100");
  t.end();
}
const test5 = async function (t) {
  await t.runForSteps(98);
  await t.runForSteps(1);
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Bat").currentCostume, 2, "Expected Sprite Bat to have costume 2");
  t.assert.withinRange(t.getSprite("Spaceship").x, 36.32365145, 5, "Expected Sprite Spaceship to have x-position 36.32365145 +-5");
  t.assert.withinRange(t.getSprite("Spaceship").y, -137.25966851, 5, "Expected Sprite Spaceship to have y-position -137.25966851 +-5");
  t.assert.withinRange(t.getSprite("Bat").x, 202.40239807, 5, "Expected Sprite Bat to have x-position 202.40239807 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 129.28176796, 5, "Expected Sprite Bat to have y-position 129.28176796 +-5");
  t.keyPress('left arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spaceship").x, 28.32365145, 5, "Expected Sprite Spaceship to have x-position 28.32365145 +-5");
  t.assert.withinRange(t.getSprite("Spaceship").y, -137.25966851, 5, "Expected Sprite Spaceship to have y-position -137.25966851 +-5");
  t.keyPress('right arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Bat").currentCostume, 3, "Expected Sprite Bat to have costume 3");
  t.assert.equal(t.getSprite("Bat").direction, -90, 1, "Expected Sprite Bat to face in direction -90 +-1");
  t.assert.withinRange(t.getSprite("Spaceship").x, 40.32365145, 5, "Expected Sprite Spaceship to have x-position 40.32365145 +-5");
  t.assert.withinRange(t.getSprite("Spaceship").y, -137.25966851, 5, "Expected Sprite Spaceship to have y-position -137.25966851 +-5");
  t.assert.withinRange(t.getSprite("Bat").x, 212.40235229363282, 5, "Expected Sprite Bat to have x-position 212.40235229363282 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 129.28176796, 5, "Expected Sprite Bat to have y-position 129.28176796 +-5");
  await t.runForSteps(99);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spaceship").currentCostume, 1, "Expected Sprite Spaceship to have costume 1");
  t.assert.equal(t.getSprite("Bat").currentCostume, 1, "Expected Sprite Bat to have costume 1");
  t.assert.equal(t.getSprite("Orange").getClone(1).currentCostume, 0, "Expected Clone 1 of Orange to have costume 0");
  t.assert.equal(t.getSprite("Orange").getCloneCount(), 1, "Expected Sprite Orange to have 1 clones");
  t.assert.equal(t.getSprite("Orange").getClone(1).direction, 90, 1, "Expected Clone 1 of Orange to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Orange").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of Orange to be 0");
  t.assert.equal(t.getSprite("Orange").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of Orange to be 0");
  t.assert.equal(t.getSprite("Orange").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of Orange to be 0");
  t.assert.equal(t.getSprite("Orange").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of Orange to be 0");
  t.assert.equal(t.getSprite("Orange").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of Orange to be 0");
  t.assert.equal(t.getSprite("Orange").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of Orange to be 0");
  t.assert.equal(t.getSprite("Orange").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of Orange to be 0");
  t.assert.equal(t.getSprite("Spaceship").layerOrder, 6, "Expected Sprite Spaceship to be at layer 6");
  t.assert.equal(t.getSprite("Bat").layerOrder, 5, "Expected Sprite Bat to be at layer 5");
  t.assert.equal(t.getSprite("Orange").layerOrder, 4, "Expected Sprite Orange to be at layer 4");
  t.assert.equal(t.getSprite("Game Over").layerOrder, 7, "Expected Sprite Game Over to be at layer 7");
  t.assert.equal(t.getSprite("Orange").getClone(1).getLayerOrder(), 3, "Expected Clone 1 of Orange to be at layer 3");
  t.assert.withinRange(t.getSprite("Bat").x, 112.40235229363282, 5, "Expected Sprite Bat to have x-position 112.40235229363282 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 129.28176796, 5, "Expected Sprite Bat to have y-position 129.28176796 +-5");
  t.assert.withinRange(t.getSprite("Orange").getClone(1).x, 112.40235229363282, 5, "Expected Clone 1 of Orange to have x-position 112.40235229363282 +-5");
  t.assert.withinRange(t.getSprite("Orange").getClone(1).y, 125.28176796, 5, "Expected Clone 1 of Orange to have y-position 125.28176796 +-5");
  t.assert.not(t.getSprite("Orange").getClone(1).sayText, "Expected Clone 1 of Orange not to say anything");
  t.assert.withinRange(t.getSprite("Orange").getClone(1).size, 100, 1, "Expected Clone 1 of Orange to have size 100 +-1");
  t.assert.equal(t.getStage().getVariable("lives", false).value, "2", "Expected lives to have value 2");
  t.assert.ok(t.getSprite("Orange").getClone(1).visible, "Expected Clone 1 of Orange to be visible");
  t.assert.equal(t.getSprite("Orange").getClone(1).volume, 100, "Expected Clone 1 of Orange to have volume 100");
  t.dragSprite('Orange', -238.71375283819515, 180, 1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Orange").getCloneCount(), 0, "Expected Sprite Orange to have 0 clones");
  t.assert.equal(t.getSprite("Spaceship").layerOrder, 5, "Expected Sprite Spaceship to be at layer 5");
  t.assert.equal(t.getSprite("Bat").layerOrder, 4, "Expected Sprite Bat to be at layer 4");
  t.assert.equal(t.getSprite("Orange").layerOrder, 3, "Expected Sprite Orange to be at layer 3");
  t.assert.equal(t.getSprite("Game Over").layerOrder, 6, "Expected Sprite Game Over to be at layer 6");
  t.end();
}
const test6 = async function (t) {
  await t.runForSteps(57);
  await t.runForSteps(1);
  t.keyPress('space', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Bat").currentCostume, 2, "Expected Sprite Bat to have costume 2");
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
  t.assert.withinRange(t.getSprite("Bat").x, 162.40239807, 5, "Expected Sprite Bat to have x-position 162.40239807 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 129.28176796, 5, "Expected Sprite Bat to have y-position 129.28176796 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).x, 20.32365145, 5, "Expected Clone 1 of Lightning to have x-position 20.32365145 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).y, -107.25966851000001, 5, "Expected Clone 1 of Lightning to have y-position -107.25966851000001 +-5");
  t.assert.not(t.getSprite("Lightning").getClone(1).sayText, "Expected Clone 1 of Lightning not to say anything");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).size, 25, 1, "Expected Clone 1 of Lightning to have size 25 +-1");
  t.assert.ok(t.getSprite("Lightning").getClone(1).visible, "Expected Clone 1 of Lightning to be visible");
  t.assert.equal(t.getSprite("Lightning").getClone(1).volume, 100, "Expected Clone 1 of Lightning to have volume 100");
  t.keyPress('left arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spaceship").x, 16.32365145, 5, "Expected Sprite Spaceship to have x-position 16.32365145 +-5");
  t.assert.withinRange(t.getSprite("Spaceship").y, -137.25966851, 5, "Expected Sprite Spaceship to have y-position -137.25966851 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).x, 20.32365145, 5, "Expected Clone 1 of Lightning to have x-position 20.32365145 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).y, -87.25966851000001, 5, "Expected Clone 1 of Lightning to have y-position -87.25966851000001 +-5");
  await t.runForSteps(54);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Bat").currentCostume, 3, "Expected Sprite Bat to have costume 3");
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
  t.dragSprite('Spaceship', 106.34119589808842, 40.338799744035455, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spaceship").x, 106.34119589808842, 5, "Expected Sprite Spaceship to have x-position 106.34119589808842 +-5");
  t.assert.withinRange(t.getSprite("Spaceship").y, 40.338799744035455, 5, "Expected Sprite Spaceship to have y-position 40.338799744035455 +-5");
  await t.runForSteps(32);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Hippo1").getClone(1).currentCostume, 0, "Expected Clone 1 of Hippo1 to have costume 0");
  t.assert.equal(t.getSprite("Hippo1").getCloneCount(), 1, "Expected Sprite Hippo1 to have 1 clones");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).direction, 108.32505275898842, 1, "Expected Clone 1 of Hippo1 to face in direction 108.32505275898842 +-1");
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
  t.assert.withinRange(t.getSprite("Hippo1").getClone(1).x, -36.24636162149876, 5, "Expected Clone 1 of Hippo1 to have x-position -36.24636162149876 +-5");
  t.assert.withinRange(t.getSprite("Hippo1").getClone(1).y, 95.42517360216706, 5, "Expected Clone 1 of Hippo1 to have y-position 95.42517360216706 +-5");
  t.assert.not(t.getSprite("Hippo1").getClone(1).sayText, "Expected Clone 1 of Hippo1 not to say anything");
  t.assert.withinRange(t.getSprite("Hippo1").getClone(1).size, 100, 1, "Expected Clone 1 of Hippo1 to have size 100 +-1");
  t.assert.ok(t.getSprite("Hippo1").getClone(1).visible, "Expected Clone 1 of Hippo1 to be visible");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).volume, 100, "Expected Clone 1 of Hippo1 to have volume 100");
  await t.runForSteps(100);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spaceship").currentCostume, 1, "Expected Sprite Spaceship to have costume 1");
  t.assert.equal(t.getSprite("Bat").currentCostume, 1, "Expected Sprite Bat to have costume 1");
  t.assert.equal(t.getSprite("Hippo1").getCloneCount(), 0, "Expected Sprite Hippo1 to have 0 clones");
  t.assert.equal(t.getSprite("Spaceship").layerOrder, 5, "Expected Sprite Spaceship to be at layer 5");
  t.assert.equal(t.getSprite("Hippo1").layerOrder, 2, "Expected Sprite Hippo1 to be at layer 2");
  t.assert.equal(t.getSprite("Bat").layerOrder, 4, "Expected Sprite Bat to be at layer 4");
  t.assert.equal(t.getSprite("Orange").layerOrder, 3, "Expected Sprite Orange to be at layer 3");
  t.assert.equal(t.getSprite("Game Over").layerOrder, 6, "Expected Sprite Game Over to be at layer 6");
  t.assert.withinRange(t.getSprite("Bat").x, 72.40235229363282, 5, "Expected Sprite Bat to have x-position 72.40235229363282 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 129.28176796, 5, "Expected Sprite Bat to have y-position 129.28176796 +-5");
  t.assert.equal(t.getStage().getVariable("lives", false).value, "0", "Expected lives to have value 0");
  t.assert.ok(t.getSprite("Game Over").visible, "Expected Sprite Game Over to be visible");
  t.end();
}
const test7 = async function (t) {
  await t.runForSteps(57);
  await t.runForSteps(1);
  t.keyPress('space', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Bat").currentCostume, 2, "Expected Sprite Bat to have costume 2");
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
  t.assert.withinRange(t.getSprite("Bat").x, 162.40239807, 5, "Expected Sprite Bat to have x-position 162.40239807 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 129.28176796, 5, "Expected Sprite Bat to have y-position 129.28176796 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).x, 20.32365145, 5, "Expected Clone 1 of Lightning to have x-position 20.32365145 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).y, -107.25966851000001, 5, "Expected Clone 1 of Lightning to have y-position -107.25966851000001 +-5");
  t.assert.not(t.getSprite("Lightning").getClone(1).sayText, "Expected Clone 1 of Lightning not to say anything");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).size, 25, 1, "Expected Clone 1 of Lightning to have size 25 +-1");
  t.assert.ok(t.getSprite("Lightning").getClone(1).visible, "Expected Clone 1 of Lightning to be visible");
  t.assert.equal(t.getSprite("Lightning").getClone(1).volume, 100, "Expected Clone 1 of Lightning to have volume 100");
  t.keyPress('left arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spaceship").x, 12.32365145, 5, "Expected Sprite Spaceship to have x-position 12.32365145 +-5");
  t.assert.withinRange(t.getSprite("Spaceship").y, -137.25966851, 5, "Expected Sprite Spaceship to have y-position -137.25966851 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).x, 20.32365145, 5, "Expected Clone 1 of Lightning to have x-position 20.32365145 +-5");
  t.assert.withinRange(t.getSprite("Lightning").getClone(1).y, -77.25966851000001, 5, "Expected Clone 1 of Lightning to have y-position -77.25966851000001 +-5");
  await t.runForSteps(54);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Bat").currentCostume, 3, "Expected Sprite Bat to have costume 3");
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
  t.dragSprite('Spaceship', 106.34119589808842, 40.338799744035455, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Spaceship").x, 106.34119589808842, 5, "Expected Sprite Spaceship to have x-position 106.34119589808842 +-5");
  t.assert.withinRange(t.getSprite("Spaceship").y, 40.338799744035455, 5, "Expected Sprite Spaceship to have y-position 40.338799744035455 +-5");
  await t.runForSteps(32);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Hippo1").getClone(1).currentCostume, 0, "Expected Clone 1 of Hippo1 to have costume 0");
  t.assert.equal(t.getSprite("Hippo1").getCloneCount(), 1, "Expected Sprite Hippo1 to have 1 clones");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).direction, 112.32505275898842, 1, "Expected Clone 1 of Hippo1 to face in direction 112.32505275898842 +-1");
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
  t.assert.withinRange(t.getSprite("Hippo1").getClone(1).x, -32.44920925069352, 5, "Expected Clone 1 of Hippo1 to have x-position -32.44920925069352 +-5");
  t.assert.withinRange(t.getSprite("Hippo1").getClone(1).y, 94.16754334136377, 5, "Expected Clone 1 of Hippo1 to have y-position 94.16754334136377 +-5");
  t.assert.not(t.getSprite("Hippo1").getClone(1).sayText, "Expected Clone 1 of Hippo1 not to say anything");
  t.assert.withinRange(t.getSprite("Hippo1").getClone(1).size, 100, 1, "Expected Clone 1 of Hippo1 to have size 100 +-1");
  t.assert.ok(t.getSprite("Hippo1").getClone(1).visible, "Expected Clone 1 of Hippo1 to be visible");
  t.assert.equal(t.getSprite("Hippo1").getClone(1).volume, 100, "Expected Clone 1 of Hippo1 to have volume 100");
  await t.runForSteps(100);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Spaceship").currentCostume, 1, "Expected Sprite Spaceship to have costume 1");
  t.assert.equal(t.getSprite("Bat").currentCostume, 1, "Expected Sprite Bat to have costume 1");
  t.assert.equal(t.getSprite("Hippo1").getCloneCount(), 0, "Expected Sprite Hippo1 to have 0 clones");
  t.assert.equal(t.getSprite("Spaceship").layerOrder, 5, "Expected Sprite Spaceship to be at layer 5");
  t.assert.equal(t.getSprite("Hippo1").layerOrder, 2, "Expected Sprite Hippo1 to be at layer 2");
  t.assert.equal(t.getSprite("Bat").layerOrder, 4, "Expected Sprite Bat to be at layer 4");
  t.assert.equal(t.getSprite("Orange").layerOrder, 3, "Expected Sprite Orange to be at layer 3");
  t.assert.equal(t.getSprite("Game Over").layerOrder, 6, "Expected Sprite Game Over to be at layer 6");
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
      seed: '1724933980897',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724933980897',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724933980897',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724933980897',
      type: 'standard',
  },
  {
      test: test4,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724933980897',
      type: 'standard',
  },
  {
      test: test5,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724933980897',
      type: 'standard',
  },
  {
      test: test6,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724933980897',
      type: 'standard',
  },
  {
      test: test7,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724933980897',
      type: 'standard',
  }
]
