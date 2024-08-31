const test0 = async function (t) {
  t.keyPress('left arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  await t.runForSteps(76);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("red").getClone(1).currentCostume, 0, "Expected Clone 1 of red to have costume 0");
  t.assert.equal(t.getSprite("red").getCloneCount(), 1, "Expected Sprite red to have 1 clones");
  t.assert.equal(t.getSprite("red").getClone(1).direction, -134.04515874612778, 1, "Expected Clone 1 of red to face in direction -134.04515874612778 +-1");
  t.assert.equal(t.getSprite("red").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").layerOrder, 5, "Expected Sprite red to be at layer 5");
  t.assert.equal(t.getSprite("red").getClone(1).getLayerOrder(), 4, "Expected Clone 1 of red to be at layer 4");
  t.assert.withinRange(t.getSprite("red").getClone(1).x, 165.62415862187265, 5, "Expected Clone 1 of red to have x-position 165.62415862187265 +-5");
  t.assert.withinRange(t.getSprite("red").getClone(1).y, 166.09549768345062, 5, "Expected Clone 1 of red to have y-position 166.09549768345062 +-5");
  t.assert.not(t.getSprite("red").getClone(1).sayText, "Expected Clone 1 of red not to say anything");
  t.assert.withinRange(t.getSprite("red").getClone(1).size, 50, 1, "Expected Clone 1 of red to have size 50 +-1");
  t.assert.ok(t.getSprite("red").getClone(1).visible, "Expected Clone 1 of red to be visible");
  t.assert.equal(t.getSprite("red").getClone(1).volume, 100, "Expected Clone 1 of red to have volume 100");
  t.dragSprite('red', -3, 3, 1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("red").getClone(1).x, -6.593960344531812, 5, "Expected Clone 1 of red to have x-position -6.593960344531812 +-5");
  t.assert.withinRange(t.getSprite("red").getClone(1).y, -0.4761255791373209, 5, "Expected Clone 1 of red to have y-position -0.4761255791373209 +-5");
  t.assert.equal(t.getStage().getVariable("lives", false).value, "2", "Expected lives to have value 2");
  t.keyPress('right arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("red").getCloneCount(), 0, "Expected Sprite red to have 0 clones");
  t.assert.equal(t.getSprite("red3roller").direction, 162, 1, "Expected Sprite red3roller to face in direction 162 +-1");
  t.assert.equal(t.getSprite("red").layerOrder, 4, "Expected Sprite red to be at layer 4");
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(82);
  await t.runForSteps(1);
  await t.runForSteps(77);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("yellow").getClone(1).currentCostume, 0, "Expected Clone 1 of yellow to have costume 0");
  t.assert.equal(t.getSprite("yellow").getCloneCount(), 1, "Expected Sprite yellow to have 1 clones");
  t.assert.equal(t.getSprite("yellow").getClone(1).direction, -45.15697434563782, 1, "Expected Clone 1 of yellow to face in direction -45.15697434563782 +-1");
  t.assert.equal(t.getSprite("yellow").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of yellow to be 0");
  t.assert.equal(t.getSprite("yellow").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of yellow to be 0");
  t.assert.equal(t.getSprite("yellow").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of yellow to be 0");
  t.assert.equal(t.getSprite("yellow").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of yellow to be 0");
  t.assert.equal(t.getSprite("yellow").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of yellow to be 0");
  t.assert.equal(t.getSprite("yellow").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of yellow to be 0");
  t.assert.equal(t.getSprite("yellow").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of yellow to be 0");
  t.assert.equal(t.getSprite("red").layerOrder, 6, "Expected Sprite red to be at layer 6");
  t.assert.equal(t.getSprite("yellow").layerOrder, 4, "Expected Sprite yellow to be at layer 4");
  t.assert.equal(t.getSprite("red").getClone(1).getLayerOrder(), 5, "Expected Clone 1 of red to be at layer 5");
  t.assert.equal(t.getSprite("yellow").getClone(1).getLayerOrder(), 3, "Expected Clone 1 of yellow to be at layer 3");
  t.assert.withinRange(t.getSprite("red").getClone(1).x, 107.4020010404569, 5, "Expected Clone 1 of red to have x-position 107.4020010404569 +-5");
  t.assert.withinRange(t.getSprite("red").getClone(1).y, 109.78226330142562, 5, "Expected Clone 1 of red to have y-position 109.78226330142562 +-5");
  t.assert.withinRange(t.getSprite("yellow").getClone(1).x, 150.9293026419532, 5, "Expected Clone 1 of yellow to have x-position 150.9293026419532 +-5");
  t.assert.withinRange(t.getSprite("yellow").getClone(1).y, -150.08815891166972, 5, "Expected Clone 1 of yellow to have y-position -150.08815891166972 +-5");
  t.assert.not(t.getSprite("yellow").getClone(1).sayText, "Expected Clone 1 of yellow not to say anything");
  t.assert.withinRange(t.getSprite("yellow").getClone(1).size, 50, 1, "Expected Clone 1 of yellow to have size 50 +-1");
  t.assert.ok(t.getSprite("yellow").getClone(1).visible, "Expected Clone 1 of yellow to be visible");
  t.assert.equal(t.getSprite("yellow").getClone(1).volume, 100, "Expected Clone 1 of yellow to have volume 100");
  await t.runForSteps(200);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("blue").getClone(1).currentCostume, 0, "Expected Clone 1 of blue to have costume 0");
  t.assert.equal(t.getSprite("red").getClone(1).currentCostume, 0, "Expected Clone 1 of red to have costume 0");
  t.assert.equal(t.getSprite("yellow").getClone(1).currentCostume, 0, "Expected Clone 1 of yellow to have costume 0");
  t.assert.equal(t.getSprite("blue").getCloneCount(), 1, "Expected Sprite blue to have 1 clones");
  t.assert.equal(t.getSprite("blue").getClone(1).direction, 44.20206023330162, 1, "Expected Clone 1 of blue to face in direction 44.20206023330162 +-1");
  t.assert.equal(t.getSprite("red").getClone(1).direction, 135, 1, "Expected Clone 1 of red to face in direction 135 +-1");
  t.assert.equal(t.getSprite("yellow").getClone(1).direction, 44.20206023330162, 1, "Expected Clone 1 of yellow to face in direction 44.20206023330162 +-1");
  t.assert.equal(t.getSprite("blue").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of blue to be 0");
  t.assert.equal(t.getSprite("blue").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of blue to be 0");
  t.assert.equal(t.getSprite("blue").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of blue to be 0");
  t.assert.equal(t.getSprite("blue").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of blue to be 0");
  t.assert.equal(t.getSprite("blue").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of blue to be 0");
  t.assert.equal(t.getSprite("blue").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of blue to be 0");
  t.assert.equal(t.getSprite("blue").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of blue to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("yellow").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of yellow to be 0");
  t.assert.equal(t.getSprite("yellow").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of yellow to be 0");
  t.assert.equal(t.getSprite("yellow").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of yellow to be 0");
  t.assert.equal(t.getSprite("yellow").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of yellow to be 0");
  t.assert.equal(t.getSprite("yellow").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of yellow to be 0");
  t.assert.equal(t.getSprite("yellow").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of yellow to be 0");
  t.assert.equal(t.getSprite("yellow").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of yellow to be 0");
  t.assert.equal(t.getSprite("red").layerOrder, 7, "Expected Sprite red to be at layer 7");
  t.assert.equal(t.getSprite("yellow").layerOrder, 5, "Expected Sprite yellow to be at layer 5");
  t.assert.equal(t.getSprite("blue").layerOrder, 3, "Expected Sprite blue to be at layer 3");
  t.assert.equal(t.getSprite("blue").getClone(1).getLayerOrder(), 2, "Expected Clone 1 of blue to be at layer 2");
  t.assert.equal(t.getSprite("red").getClone(1).getLayerOrder(), 6, "Expected Clone 1 of red to be at layer 6");
  t.assert.equal(t.getSprite("yellow").getClone(1).getLayerOrder(), 4, "Expected Clone 1 of yellow to be at layer 4");
  t.assert.withinRange(t.getSprite("blue").getClone(1).x, -53.11125966324977, 5, "Expected Clone 1 of blue to have x-position -53.11125966324977 +-5");
  t.assert.withinRange(t.getSprite("blue").getClone(1).y, -48.52683197012094, 5, "Expected Clone 1 of blue to have y-position -48.52683197012094 +-5");
  t.assert.withinRange(t.getSprite("red").getClone(1).x, -136.86648634762025, 5, "Expected Clone 1 of red to have x-position -136.86648634762025 +-5");
  t.assert.withinRange(t.getSprite("red").getClone(1).y, 136.86648634762025, 5, "Expected Clone 1 of red to have y-position 136.86648634762025 +-5");
  t.assert.withinRange(t.getSprite("yellow").getClone(1).x, -179.30280911902884, 5, "Expected Clone 1 of yellow to have x-position -179.30280911902884 +-5");
  t.assert.withinRange(t.getSprite("yellow").getClone(1).y, -178.28311446137428, 5, "Expected Clone 1 of yellow to have y-position -178.28311446137428 +-5");
  t.assert.not(t.getSprite("blue").getClone(1).sayText, "Expected Clone 1 of blue not to say anything");
  t.assert.not(t.getSprite("red").getClone(1).sayText, "Expected Clone 1 of red not to say anything");
  t.assert.not(t.getSprite("yellow").getClone(1).sayText, "Expected Clone 1 of yellow not to say anything");
  t.assert.withinRange(t.getSprite("blue").getClone(1).size, 50, 1, "Expected Clone 1 of blue to have size 50 +-1");
  t.assert.withinRange(t.getSprite("red").getClone(1).size, 50, 1, "Expected Clone 1 of red to have size 50 +-1");
  t.assert.withinRange(t.getSprite("yellow").getClone(1).size, 50, 1, "Expected Clone 1 of yellow to have size 50 +-1");
  t.assert.equal(t.getStage().getVariable("score", false).value, "2", "Expected score to have value 2");
  t.assert.equal(t.getStage().getVariable("delay", false).value, "7.5", "Expected delay to have value 7.5");
  t.assert.ok(t.getSprite("blue").getClone(1).visible, "Expected Clone 1 of blue to be visible");
  t.assert.ok(t.getSprite("red").getClone(1).visible, "Expected Clone 1 of red to be visible");
  t.assert.ok(t.getSprite("yellow").getClone(1).visible, "Expected Clone 1 of yellow to be visible");
  t.assert.equal(t.getSprite("blue").getClone(1).volume, 100, "Expected Clone 1 of blue to have volume 100");
  t.assert.equal(t.getSprite("red").getClone(1).volume, 100, "Expected Clone 1 of red to have volume 100");
  t.assert.equal(t.getSprite("yellow").getClone(1).volume, 100, "Expected Clone 1 of yellow to have volume 100");
  t.end();
}
const test2 = async function (t) {
  t.keyPress('left arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  await t.runForSteps(400);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("red").getClone(1).currentCostume, 0, "Expected Clone 1 of red to have costume 0");
  t.assert.equal(t.getSprite("yellow").getClone(1).currentCostume, 0, "Expected Clone 1 of yellow to have costume 0");
  t.assert.equal(t.getSprite("red").getCloneCount(), 1, "Expected Sprite red to have 1 clones");
  t.assert.equal(t.getSprite("yellow").getCloneCount(), 1, "Expected Sprite yellow to have 1 clones");
  t.assert.equal(t.getSprite("red").getClone(1).direction, 135, 1, "Expected Clone 1 of red to face in direction 135 +-1");
  t.assert.equal(t.getSprite("yellow").getClone(1).direction, 44.20206023330162, 1, "Expected Clone 1 of yellow to face in direction 44.20206023330162 +-1");
  t.assert.equal(t.getSprite("red").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("yellow").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of yellow to be 0");
  t.assert.equal(t.getSprite("yellow").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of yellow to be 0");
  t.assert.equal(t.getSprite("yellow").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of yellow to be 0");
  t.assert.equal(t.getSprite("yellow").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of yellow to be 0");
  t.assert.equal(t.getSprite("yellow").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of yellow to be 0");
  t.assert.equal(t.getSprite("yellow").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of yellow to be 0");
  t.assert.equal(t.getSprite("yellow").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of yellow to be 0");
  t.assert.equal(t.getSprite("red").layerOrder, 6, "Expected Sprite red to be at layer 6");
  t.assert.equal(t.getSprite("yellow").layerOrder, 4, "Expected Sprite yellow to be at layer 4");
  t.assert.equal(t.getSprite("red").getClone(1).getLayerOrder(), 5, "Expected Clone 1 of red to be at layer 5");
  t.assert.equal(t.getSprite("yellow").getClone(1).getLayerOrder(), 3, "Expected Clone 1 of yellow to be at layer 3");
  t.assert.withinRange(t.getSprite("red").getClone(1).x, -107.16800153778502, 5, "Expected Clone 1 of red to have x-position -107.16800153778502 +-5");
  t.assert.withinRange(t.getSprite("red").getClone(1).y, 107.16800153778502, 5, "Expected Clone 1 of red to have y-position 107.16800153778502 +-5");
  t.assert.withinRange(t.getSprite("yellow").getClone(1).x, -150.02079211823997, 5, "Expected Clone 1 of yellow to have x-position -150.02079211823997 +-5");
  t.assert.withinRange(t.getSprite("yellow").getClone(1).y, -148.17392183909413, 5, "Expected Clone 1 of yellow to have y-position -148.17392183909413 +-5");
  t.assert.not(t.getSprite("red").getClone(1).sayText, "Expected Clone 1 of red not to say anything");
  t.assert.not(t.getSprite("yellow").getClone(1).sayText, "Expected Clone 1 of yellow not to say anything");
  t.assert.withinRange(t.getSprite("red").getClone(1).size, 50, 1, "Expected Clone 1 of red to have size 50 +-1");
  t.assert.withinRange(t.getSprite("yellow").getClone(1).size, 50, 1, "Expected Clone 1 of yellow to have size 50 +-1");
  t.assert.equal(t.getStage().getVariable("score", false).value, "3", "Expected score to have value 3");
  t.assert.equal(t.getStage().getVariable("delay", false).value, "7.5", "Expected delay to have value 7.5");
  t.assert.ok(t.getSprite("red").getClone(1).visible, "Expected Clone 1 of red to be visible");
  t.assert.ok(t.getSprite("yellow").getClone(1).visible, "Expected Clone 1 of yellow to be visible");
  t.assert.equal(t.getSprite("red").getClone(1).volume, 100, "Expected Clone 1 of red to have volume 100");
  t.assert.equal(t.getSprite("yellow").getClone(1).volume, 100, "Expected Clone 1 of yellow to have volume 100");
  t.end();
}
const test3 = async function (t) {
  t.keyPress('left arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  await t.runForSteps(76);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("red").getClone(1).currentCostume, 0, "Expected Clone 1 of red to have costume 0");
  t.assert.equal(t.getSprite("red").getCloneCount(), 1, "Expected Sprite red to have 1 clones");
  t.assert.equal(t.getSprite("red").getClone(1).direction, -134.04515874612778, 1, "Expected Clone 1 of red to face in direction -134.04515874612778 +-1");
  t.assert.equal(t.getSprite("red").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").layerOrder, 5, "Expected Sprite red to be at layer 5");
  t.assert.equal(t.getSprite("red").getClone(1).getLayerOrder(), 4, "Expected Clone 1 of red to be at layer 4");
  t.assert.withinRange(t.getSprite("red").getClone(1).x, 165.62415862187265, 5, "Expected Clone 1 of red to have x-position 165.62415862187265 +-5");
  t.assert.withinRange(t.getSprite("red").getClone(1).y, 166.09549768345062, 5, "Expected Clone 1 of red to have y-position 166.09549768345062 +-5");
  t.assert.not(t.getSprite("red").getClone(1).sayText, "Expected Clone 1 of red not to say anything");
  t.assert.withinRange(t.getSprite("red").getClone(1).size, 50, 1, "Expected Clone 1 of red to have size 50 +-1");
  t.assert.ok(t.getSprite("red").getClone(1).visible, "Expected Clone 1 of red to be visible");
  t.assert.equal(t.getSprite("red").getClone(1).volume, 100, "Expected Clone 1 of red to have volume 100");
  await t.runForSteps(100);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("yellow").getClone(1).currentCostume, 0, "Expected Clone 1 of yellow to have costume 0");
  t.assert.equal(t.getSprite("blue").getClone(1).currentCostume, 0, "Expected Clone 1 of blue to have costume 0");
  t.assert.equal(t.getSprite("yellow").getCloneCount(), 1, "Expected Sprite yellow to have 1 clones");
  t.assert.equal(t.getSprite("blue").getCloneCount(), 1, "Expected Sprite blue to have 1 clones");
  t.assert.equal(t.getSprite("yellow").getClone(1).direction, -45.15697434563782, 1, "Expected Clone 1 of yellow to face in direction -45.15697434563782 +-1");
  t.assert.equal(t.getSprite("blue").getClone(1).direction, 44.20206023330162, 1, "Expected Clone 1 of blue to face in direction 44.20206023330162 +-1");
  t.assert.equal(t.getSprite("yellow").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of yellow to be 0");
  t.assert.equal(t.getSprite("yellow").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of yellow to be 0");
  t.assert.equal(t.getSprite("yellow").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of yellow to be 0");
  t.assert.equal(t.getSprite("yellow").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of yellow to be 0");
  t.assert.equal(t.getSprite("yellow").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of yellow to be 0");
  t.assert.equal(t.getSprite("yellow").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of yellow to be 0");
  t.assert.equal(t.getSprite("yellow").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of yellow to be 0");
  t.assert.equal(t.getSprite("blue").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of blue to be 0");
  t.assert.equal(t.getSprite("blue").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of blue to be 0");
  t.assert.equal(t.getSprite("blue").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of blue to be 0");
  t.assert.equal(t.getSprite("blue").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of blue to be 0");
  t.assert.equal(t.getSprite("blue").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of blue to be 0");
  t.assert.equal(t.getSprite("blue").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of blue to be 0");
  t.assert.equal(t.getSprite("blue").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of blue to be 0");
  t.assert.equal(t.getSprite("red").layerOrder, 7, "Expected Sprite red to be at layer 7");
  t.assert.equal(t.getSprite("yellow").layerOrder, 5, "Expected Sprite yellow to be at layer 5");
  t.assert.equal(t.getSprite("blue").layerOrder, 3, "Expected Sprite blue to be at layer 3");
  t.assert.equal(t.getSprite("red").getClone(1).getLayerOrder(), 6, "Expected Clone 1 of red to be at layer 6");
  t.assert.equal(t.getSprite("yellow").getClone(1).getLayerOrder(), 4, "Expected Clone 1 of yellow to be at layer 4");
  t.assert.equal(t.getSprite("blue").getClone(1).getLayerOrder(), 2, "Expected Clone 1 of blue to be at layer 2");
  t.assert.withinRange(t.getSprite("red").getClone(1).x, 93.02615966232955, 5, "Expected Clone 1 of red to have x-position 93.02615966232955 +-5");
  t.assert.withinRange(t.getSprite("red").getClone(1).y, 95.87776098487623, 5, "Expected Clone 1 of red to have y-position 95.87776098487623 +-5");
  t.assert.withinRange(t.getSprite("yellow").getClone(1).x, 136.74847466241818, 5, "Expected Clone 1 of yellow to have x-position 136.74847466241818 +-5");
  t.assert.withinRange(t.getSprite("yellow").getClone(1).y, -135.98482179541105, 5, "Expected Clone 1 of yellow to have y-position -135.98482179541105 +-5");
  t.assert.withinRange(t.getSprite("blue").getClone(1).x, -179.30280911902884, 5, "Expected Clone 1 of blue to have x-position -179.30280911902884 +-5");
  t.assert.withinRange(t.getSprite("blue").getClone(1).y, -178.28311446137428, 5, "Expected Clone 1 of blue to have y-position -178.28311446137428 +-5");
  t.assert.not(t.getSprite("yellow").getClone(1).sayText, "Expected Clone 1 of yellow not to say anything");
  t.assert.not(t.getSprite("blue").getClone(1).sayText, "Expected Clone 1 of blue not to say anything");
  t.assert.withinRange(t.getSprite("yellow").getClone(1).size, 50, 1, "Expected Clone 1 of yellow to have size 50 +-1");
  t.assert.withinRange(t.getSprite("blue").getClone(1).size, 50, 1, "Expected Clone 1 of blue to have size 50 +-1");
  t.assert.ok(t.getSprite("yellow").getClone(1).visible, "Expected Clone 1 of yellow to be visible");
  t.assert.ok(t.getSprite("blue").getClone(1).visible, "Expected Clone 1 of blue to be visible");
  t.assert.equal(t.getSprite("yellow").getClone(1).volume, 100, "Expected Clone 1 of yellow to have volume 100");
  t.assert.equal(t.getSprite("blue").getClone(1).volume, 100, "Expected Clone 1 of blue to have volume 100");
  await t.runForSteps(400);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("blue").getClone(1).currentCostume, 0, "Expected Clone 1 of blue to have costume 0");
  t.assert.equal(t.getSprite("red").getClone(1).currentCostume, 0, "Expected Clone 1 of red to have costume 0");
  t.assert.equal(t.getSprite("yellow").getCloneCount(), 0, "Expected Sprite yellow to have 0 clones");
  t.assert.equal(t.getSprite("blue").getClone(1).direction, 135, 1, "Expected Clone 1 of blue to face in direction 135 +-1");
  t.assert.equal(t.getSprite("red").getClone(1).direction, 135, 1, "Expected Clone 1 of red to face in direction 135 +-1");
  t.assert.equal(t.getSprite("blue").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of blue to be 0");
  t.assert.equal(t.getSprite("blue").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of blue to be 0");
  t.assert.equal(t.getSprite("blue").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of blue to be 0");
  t.assert.equal(t.getSprite("blue").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of blue to be 0");
  t.assert.equal(t.getSprite("blue").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of blue to be 0");
  t.assert.equal(t.getSprite("blue").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of blue to be 0");
  t.assert.equal(t.getSprite("blue").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of blue to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").layerOrder, 6, "Expected Sprite red to be at layer 6");
  t.assert.equal(t.getSprite("yellow").layerOrder, 4, "Expected Sprite yellow to be at layer 4");
  t.assert.equal(t.getSprite("blue").getClone(1).getLayerOrder(), 2, "Expected Clone 1 of blue to be at layer 2");
  t.assert.equal(t.getSprite("red").getClone(1).getLayerOrder(), 5, "Expected Clone 1 of red to be at layer 5");
  t.assert.withinRange(t.getSprite("blue").getClone(1).x, -66.15580822896493, 5, "Expected Clone 1 of blue to have x-position -66.15580822896493 +-5");
  t.assert.withinRange(t.getSprite("blue").getClone(1).y, 66.15580822896493, 5, "Expected Clone 1 of blue to have y-position 66.15580822896493 +-5");
  t.assert.withinRange(t.getSprite("red").getClone(1).x, -141.10912703473957, 5, "Expected Clone 1 of red to have x-position -141.10912703473957 +-5");
  t.assert.withinRange(t.getSprite("red").getClone(1).y, 141.10912703473957, 5, "Expected Clone 1 of red to have y-position 141.10912703473957 +-5");
  t.assert.not(t.getSprite("blue").getClone(1).sayText, "Expected Clone 1 of blue not to say anything");
  t.assert.not(t.getSprite("red").getClone(1).sayText, "Expected Clone 1 of red not to say anything");
  t.assert.withinRange(t.getSprite("blue").getClone(1).size, 50, 1, "Expected Clone 1 of blue to have size 50 +-1");
  t.assert.withinRange(t.getSprite("red").getClone(1).size, 50, 1, "Expected Clone 1 of red to have size 50 +-1");
  t.assert.equal(t.getStage().getVariable("lives", false).value, "2", "Expected lives to have value 2");
  t.assert.equal(t.getStage().getVariable("score", false).value, "4", "Expected score to have value 4");
  t.assert.equal(t.getStage().getVariable("delay", false).value, "7.5", "Expected delay to have value 7.5");
  t.assert.ok(t.getSprite("blue").getClone(1).visible, "Expected Clone 1 of blue to be visible");
  t.assert.ok(t.getSprite("red").getClone(1).visible, "Expected Clone 1 of red to be visible");
  t.assert.equal(t.getSprite("blue").getClone(1).volume, 100, "Expected Clone 1 of blue to have volume 100");
  t.assert.equal(t.getSprite("red").getClone(1).volume, 100, "Expected Clone 1 of red to have volume 100");
  t.end();
}
const test4 = async function (t) {
  t.keyPress('left arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  await t.runForSteps(76);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("red").getClone(1).currentCostume, 0, "Expected Clone 1 of red to have costume 0");
  t.assert.equal(t.getSprite("red").getCloneCount(), 1, "Expected Sprite red to have 1 clones");
  t.assert.equal(t.getSprite("red").getClone(1).direction, -134.04515874612778, 1, "Expected Clone 1 of red to face in direction -134.04515874612778 +-1");
  t.assert.equal(t.getSprite("red").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").layerOrder, 5, "Expected Sprite red to be at layer 5");
  t.assert.equal(t.getSprite("red").getClone(1).getLayerOrder(), 4, "Expected Clone 1 of red to be at layer 4");
  t.assert.withinRange(t.getSprite("red").getClone(1).x, 165.62415862187265, 5, "Expected Clone 1 of red to have x-position 165.62415862187265 +-5");
  t.assert.withinRange(t.getSprite("red").getClone(1).y, 166.09549768345062, 5, "Expected Clone 1 of red to have y-position 166.09549768345062 +-5");
  t.assert.not(t.getSprite("red").getClone(1).sayText, "Expected Clone 1 of red not to say anything");
  t.assert.withinRange(t.getSprite("red").getClone(1).size, 50, 1, "Expected Clone 1 of red to have size 50 +-1");
  t.assert.ok(t.getSprite("red").getClone(1).visible, "Expected Clone 1 of red to be visible");
  t.assert.equal(t.getSprite("red").getClone(1).volume, 100, "Expected Clone 1 of red to have volume 100");
  await t.runForSteps(100);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("yellow").getClone(1).currentCostume, 0, "Expected Clone 1 of yellow to have costume 0");
  t.assert.equal(t.getSprite("blue").getClone(1).currentCostume, 0, "Expected Clone 1 of blue to have costume 0");
  t.assert.equal(t.getSprite("yellow").getCloneCount(), 1, "Expected Sprite yellow to have 1 clones");
  t.assert.equal(t.getSprite("blue").getCloneCount(), 1, "Expected Sprite blue to have 1 clones");
  t.assert.equal(t.getSprite("yellow").getClone(1).direction, -45.15697434563782, 1, "Expected Clone 1 of yellow to face in direction -45.15697434563782 +-1");
  t.assert.equal(t.getSprite("blue").getClone(1).direction, 44.20206023330162, 1, "Expected Clone 1 of blue to face in direction 44.20206023330162 +-1");
  t.assert.equal(t.getSprite("yellow").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of yellow to be 0");
  t.assert.equal(t.getSprite("yellow").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of yellow to be 0");
  t.assert.equal(t.getSprite("yellow").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of yellow to be 0");
  t.assert.equal(t.getSprite("yellow").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of yellow to be 0");
  t.assert.equal(t.getSprite("yellow").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of yellow to be 0");
  t.assert.equal(t.getSprite("yellow").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of yellow to be 0");
  t.assert.equal(t.getSprite("yellow").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of yellow to be 0");
  t.assert.equal(t.getSprite("blue").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of blue to be 0");
  t.assert.equal(t.getSprite("blue").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of blue to be 0");
  t.assert.equal(t.getSprite("blue").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of blue to be 0");
  t.assert.equal(t.getSprite("blue").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of blue to be 0");
  t.assert.equal(t.getSprite("blue").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of blue to be 0");
  t.assert.equal(t.getSprite("blue").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of blue to be 0");
  t.assert.equal(t.getSprite("blue").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of blue to be 0");
  t.assert.equal(t.getSprite("red").layerOrder, 7, "Expected Sprite red to be at layer 7");
  t.assert.equal(t.getSprite("yellow").layerOrder, 5, "Expected Sprite yellow to be at layer 5");
  t.assert.equal(t.getSprite("blue").layerOrder, 3, "Expected Sprite blue to be at layer 3");
  t.assert.equal(t.getSprite("red").getClone(1).getLayerOrder(), 6, "Expected Clone 1 of red to be at layer 6");
  t.assert.equal(t.getSprite("yellow").getClone(1).getLayerOrder(), 4, "Expected Clone 1 of yellow to be at layer 4");
  t.assert.equal(t.getSprite("blue").getClone(1).getLayerOrder(), 2, "Expected Clone 1 of blue to be at layer 2");
  t.assert.withinRange(t.getSprite("red").getClone(1).x, 93.02615966232955, 5, "Expected Clone 1 of red to have x-position 93.02615966232955 +-5");
  t.assert.withinRange(t.getSprite("red").getClone(1).y, 95.87776098487623, 5, "Expected Clone 1 of red to have y-position 95.87776098487623 +-5");
  t.assert.withinRange(t.getSprite("yellow").getClone(1).x, 136.74847466241818, 5, "Expected Clone 1 of yellow to have x-position 136.74847466241818 +-5");
  t.assert.withinRange(t.getSprite("yellow").getClone(1).y, -135.98482179541105, 5, "Expected Clone 1 of yellow to have y-position -135.98482179541105 +-5");
  t.assert.withinRange(t.getSprite("blue").getClone(1).x, -179.30280911902884, 5, "Expected Clone 1 of blue to have x-position -179.30280911902884 +-5");
  t.assert.withinRange(t.getSprite("blue").getClone(1).y, -178.28311446137428, 5, "Expected Clone 1 of blue to have y-position -178.28311446137428 +-5");
  t.assert.not(t.getSprite("yellow").getClone(1).sayText, "Expected Clone 1 of yellow not to say anything");
  t.assert.not(t.getSprite("blue").getClone(1).sayText, "Expected Clone 1 of blue not to say anything");
  t.assert.withinRange(t.getSprite("yellow").getClone(1).size, 50, 1, "Expected Clone 1 of yellow to have size 50 +-1");
  t.assert.withinRange(t.getSprite("blue").getClone(1).size, 50, 1, "Expected Clone 1 of blue to have size 50 +-1");
  t.assert.ok(t.getSprite("yellow").getClone(1).visible, "Expected Clone 1 of yellow to be visible");
  t.assert.ok(t.getSprite("blue").getClone(1).visible, "Expected Clone 1 of blue to be visible");
  t.assert.equal(t.getSprite("yellow").getClone(1).volume, 100, "Expected Clone 1 of yellow to have volume 100");
  t.assert.equal(t.getSprite("blue").getClone(1).volume, 100, "Expected Clone 1 of blue to have volume 100");
  t.dragSprite('blue', -3, 3, 1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("red").getClone(1).x, 92.30736759342318, 5, "Expected Clone 1 of red to have x-position 92.30736759342318 +-5");
  t.assert.withinRange(t.getSprite("red").getClone(1).y, 95.18253586904876, 5, "Expected Clone 1 of red to have y-position 95.18253586904876 +-5");
  t.assert.withinRange(t.getSprite("yellow").getClone(1).x, 136.03943326344142, 5, "Expected Clone 1 of yellow to have x-position 136.03943326344142 +-5");
  t.assert.withinRange(t.getSprite("yellow").getClone(1).y, -135.27965493959812, 5, "Expected Clone 1 of yellow to have y-position -135.27965493959812 +-5");
  t.assert.withinRange(t.getSprite("blue").getClone(1).x, 0.48595440485576447, 5, "Expected Clone 1 of blue to have x-position 0.48595440485576447 +-5");
  t.assert.withinRange(t.getSprite("blue").getClone(1).y, 6.584427693128527, 5, "Expected Clone 1 of blue to have y-position 6.584427693128527 +-5");
  t.assert.equal(t.getStage().getVariable("lives", false).value, "2", "Expected lives to have value 2");
  t.end();
}
const test5 = async function (t) {
  t.keyPress('left arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  await t.runForSteps(76);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("red").getClone(1).currentCostume, 0, "Expected Clone 1 of red to have costume 0");
  t.assert.equal(t.getSprite("red").getCloneCount(), 1, "Expected Sprite red to have 1 clones");
  t.assert.equal(t.getSprite("red").getClone(1).direction, -134.04515874612778, 1, "Expected Clone 1 of red to face in direction -134.04515874612778 +-1");
  t.assert.equal(t.getSprite("red").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").layerOrder, 5, "Expected Sprite red to be at layer 5");
  t.assert.equal(t.getSprite("red").getClone(1).getLayerOrder(), 4, "Expected Clone 1 of red to be at layer 4");
  t.assert.withinRange(t.getSprite("red").getClone(1).x, 165.62415862187265, 5, "Expected Clone 1 of red to have x-position 165.62415862187265 +-5");
  t.assert.withinRange(t.getSprite("red").getClone(1).y, 166.09549768345062, 5, "Expected Clone 1 of red to have y-position 166.09549768345062 +-5");
  t.assert.not(t.getSprite("red").getClone(1).sayText, "Expected Clone 1 of red not to say anything");
  t.assert.withinRange(t.getSprite("red").getClone(1).size, 50, 1, "Expected Clone 1 of red to have size 50 +-1");
  t.assert.ok(t.getSprite("red").getClone(1).visible, "Expected Clone 1 of red to be visible");
  t.assert.equal(t.getSprite("red").getClone(1).volume, 100, "Expected Clone 1 of red to have volume 100");
  t.dragSprite('red', -3, 3, 1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("red").getClone(1).x, -6.593960344531812, 5, "Expected Clone 1 of red to have x-position -6.593960344531812 +-5");
  t.assert.withinRange(t.getSprite("red").getClone(1).y, -0.4761255791373209, 5, "Expected Clone 1 of red to have y-position -0.4761255791373209 +-5");
  t.assert.equal(t.getStage().getVariable("lives", false).value, "2", "Expected lives to have value 2");
  await t.runForSteps(100);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("yellow").getClone(1).currentCostume, 0, "Expected Clone 1 of yellow to have costume 0");
  t.assert.equal(t.getSprite("blue").getClone(1).currentCostume, 0, "Expected Clone 1 of blue to have costume 0");
  t.assert.equal(t.getSprite("red").getCloneCount(), 0, "Expected Sprite red to have 0 clones");
  t.assert.equal(t.getSprite("yellow").getCloneCount(), 1, "Expected Sprite yellow to have 1 clones");
  t.assert.equal(t.getSprite("blue").getCloneCount(), 1, "Expected Sprite blue to have 1 clones");
  t.assert.equal(t.getSprite("yellow").getClone(1).direction, -45.15697434563782, 1, "Expected Clone 1 of yellow to face in direction -45.15697434563782 +-1");
  t.assert.equal(t.getSprite("blue").getClone(1).direction, 44.20206023330162, 1, "Expected Clone 1 of blue to face in direction 44.20206023330162 +-1");
  t.assert.equal(t.getSprite("yellow").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of yellow to be 0");
  t.assert.equal(t.getSprite("yellow").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of yellow to be 0");
  t.assert.equal(t.getSprite("yellow").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of yellow to be 0");
  t.assert.equal(t.getSprite("yellow").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of yellow to be 0");
  t.assert.equal(t.getSprite("yellow").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of yellow to be 0");
  t.assert.equal(t.getSprite("yellow").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of yellow to be 0");
  t.assert.equal(t.getSprite("yellow").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of yellow to be 0");
  t.assert.equal(t.getSprite("blue").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of blue to be 0");
  t.assert.equal(t.getSprite("blue").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of blue to be 0");
  t.assert.equal(t.getSprite("blue").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of blue to be 0");
  t.assert.equal(t.getSprite("blue").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of blue to be 0");
  t.assert.equal(t.getSprite("blue").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of blue to be 0");
  t.assert.equal(t.getSprite("blue").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of blue to be 0");
  t.assert.equal(t.getSprite("blue").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of blue to be 0");
  t.assert.equal(t.getSprite("red").layerOrder, 6, "Expected Sprite red to be at layer 6");
  t.assert.equal(t.getSprite("yellow").layerOrder, 5, "Expected Sprite yellow to be at layer 5");
  t.assert.equal(t.getSprite("blue").layerOrder, 3, "Expected Sprite blue to be at layer 3");
  t.assert.equal(t.getSprite("yellow").getClone(1).getLayerOrder(), 4, "Expected Clone 1 of yellow to be at layer 4");
  t.assert.equal(t.getSprite("blue").getClone(1).getLayerOrder(), 2, "Expected Clone 1 of blue to be at layer 2");
  t.assert.withinRange(t.getSprite("yellow").getClone(1).x, 136.03943326344142, 5, "Expected Clone 1 of yellow to have x-position 136.03943326344142 +-5");
  t.assert.withinRange(t.getSprite("yellow").getClone(1).y, -135.27965493959812, 5, "Expected Clone 1 of yellow to have y-position -135.27965493959812 +-5");
  t.assert.withinRange(t.getSprite("blue").getClone(1).x, -178.60561823805767, 5, "Expected Clone 1 of blue to have x-position -178.60561823805767 +-5");
  t.assert.withinRange(t.getSprite("blue").getClone(1).y, -177.56622892274856, 5, "Expected Clone 1 of blue to have y-position -177.56622892274856 +-5");
  t.assert.not(t.getSprite("yellow").getClone(1).sayText, "Expected Clone 1 of yellow not to say anything");
  t.assert.not(t.getSprite("blue").getClone(1).sayText, "Expected Clone 1 of blue not to say anything");
  t.assert.withinRange(t.getSprite("yellow").getClone(1).size, 50, 1, "Expected Clone 1 of yellow to have size 50 +-1");
  t.assert.withinRange(t.getSprite("blue").getClone(1).size, 50, 1, "Expected Clone 1 of blue to have size 50 +-1");
  t.assert.ok(t.getSprite("yellow").getClone(1).visible, "Expected Clone 1 of yellow to be visible");
  t.assert.ok(t.getSprite("blue").getClone(1).visible, "Expected Clone 1 of blue to be visible");
  t.assert.equal(t.getSprite("yellow").getClone(1).volume, 100, "Expected Clone 1 of yellow to have volume 100");
  t.assert.equal(t.getSprite("blue").getClone(1).volume, 100, "Expected Clone 1 of blue to have volume 100");
  t.dragSprite('blue', -3, 3, 1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("yellow").getClone(1).x, 135.33039186446467, 5, "Expected Clone 1 of yellow to have x-position 135.33039186446467 +-5");
  t.assert.withinRange(t.getSprite("yellow").getClone(1).y, -134.57448808378518, 5, "Expected Clone 1 of yellow to have y-position -134.57448808378518 +-5");
  t.assert.withinRange(t.getSprite("blue").getClone(1).x, 0.48595440485576447, 5, "Expected Clone 1 of blue to have x-position 0.48595440485576447 +-5");
  t.assert.withinRange(t.getSprite("blue").getClone(1).y, 6.584427693128527, 5, "Expected Clone 1 of blue to have y-position 6.584427693128527 +-5");
  t.assert.equal(t.getStage().getVariable("lives", false).value, "1", "Expected lives to have value 1");
  await t.runForSteps(400);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("yellow").getCloneCount(), 0, "Expected Sprite yellow to have 0 clones");
  t.assert.equal(t.getSprite("blue").getCloneCount(), 0, "Expected Sprite blue to have 0 clones");
  t.assert.equal(t.getSprite("red").layerOrder, 4, "Expected Sprite red to be at layer 4");
  t.assert.equal(t.getSprite("yellow").layerOrder, 3, "Expected Sprite yellow to be at layer 3");
  t.assert.equal(t.getSprite("blue").layerOrder, 2, "Expected Sprite blue to be at layer 2");
  t.assert.equal(t.getStage().getVariable("lives", false).value, "0", "Expected lives to have value 0");
  t.assert.equal(t.getStage().getVariable("score", false).value, "2", "Expected score to have value 2");
  t.assert.equal(t.getStage().getVariable("delay", false).value, "7.5", "Expected delay to have value 7.5");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724933562681',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724933562681',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724933562681',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724933562681',
      type: 'standard',
  },
  {
      test: test4,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724933562681',
      type: 'standard',
  },
  {
      test: test5,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724933562681',
      type: 'standard',
  }
]
