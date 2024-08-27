const test0 = async function (t) {
  await t.runForSteps(23);
  await t.runForSteps(1);
  await t.runForSteps(400);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("red").getClone(1).currentCostume, 0, "Expected Clone 1 of red to have costume 0");
  t.assert.equal(t.getSprite("yellow").getClone(1).currentCostume, 0, "Expected Clone 1 of yellow to have costume 0");
  t.assert.equal(t.getSprite("blue").getClone(1).currentCostume, 0, "Expected Clone 1 of blue to have costume 0");
  t.assert.equal(t.getSprite("red").getCloneCount(), 1, "Expected Sprite red to have 1 clones");
  t.assert.equal(t.getSprite("yellow").getCloneCount(), 1, "Expected Sprite yellow to have 1 clones");
  t.assert.equal(t.getSprite("blue").getCloneCount(), 1, "Expected Sprite blue to have 1 clones");
  t.assert.equal(t.getSprite("red").getClone(1).direction, -45.15697434563782, 1, "Expected Clone 1 of red to face in direction -45.15697434563782 +-1");
  t.assert.equal(t.getSprite("yellow").getClone(1).direction, 135, 1, "Expected Clone 1 of yellow to face in direction 135 +-1");
  t.assert.equal(t.getSprite("blue").getClone(1).direction, -45.15697434563782, 1, "Expected Clone 1 of blue to face in direction -45.15697434563782 +-1");
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
  t.assert.withinRange(t.getSprite("red").getClone(1).x, 92.07886652688357, 5, "Expected Clone 1 of red to have x-position 92.07886652688357 +-5");
  t.assert.withinRange(t.getSprite("red").getClone(1).y, -91.55930987919623, 5, "Expected Clone 1 of red to have y-position -91.55930987919623 +-5");
  t.assert.withinRange(t.getSprite("yellow").getClone(1).x, -134.7451660040606, 5, "Expected Clone 1 of yellow to have x-position -134.7451660040606 +-5");
  t.assert.withinRange(t.getSprite("yellow").getClone(1).y, 134.7451660040606, 5, "Expected Clone 1 of yellow to have y-position 134.7451660040606 +-5");
  t.assert.withinRange(t.getSprite("blue").getClone(1).x, 177.163834404093, 5, "Expected Clone 1 of blue to have x-position 177.163834404093 +-5");
  t.assert.withinRange(t.getSprite("blue").getClone(1).y, -176.17933257674827, 5, "Expected Clone 1 of blue to have y-position -176.17933257674827 +-5");
  t.assert.not(t.getSprite("red").getClone(1).sayText, "Expected Clone 1 of red not to say anything");
  t.assert.not(t.getSprite("yellow").getClone(1).sayText, "Expected Clone 1 of yellow not to say anything");
  t.assert.not(t.getSprite("blue").getClone(1).sayText, "Expected Clone 1 of blue not to say anything");
  t.assert.withinRange(t.getSprite("red").getClone(1).size, 50, 1, "Expected Clone 1 of red to have size 50 +-1");
  t.assert.withinRange(t.getSprite("yellow").getClone(1).size, 50, 1, "Expected Clone 1 of yellow to have size 50 +-1");
  t.assert.withinRange(t.getSprite("blue").getClone(1).size, 50, 1, "Expected Clone 1 of blue to have size 50 +-1");
  t.assert.equal(t.getStage().getVariable("lives", false).value, "1", "Expected lives to have value 1");
  t.assert.equal(t.getStage().getVariable("score", false).value, "1", "Expected score to have value 1");
  t.assert.equal(t.getStage().getVariable("delay", false).value, "7.5", "Expected delay to have value 7.5");
  t.assert.ok(t.getSprite("red").getClone(1).visible, "Expected Clone 1 of red to be visible");
  t.assert.ok(t.getSprite("yellow").getClone(1).visible, "Expected Clone 1 of yellow to be visible");
  t.assert.ok(t.getSprite("blue").getClone(1).visible, "Expected Clone 1 of blue to be visible");
  t.assert.equal(t.getSprite("red").getClone(1).volume, 100, "Expected Clone 1 of red to have volume 100");
  t.assert.equal(t.getSprite("yellow").getClone(1).volume, 100, "Expected Clone 1 of yellow to have volume 100");
  t.assert.equal(t.getSprite("blue").getClone(1).volume, 100, "Expected Clone 1 of blue to have volume 100");
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(48);
  await t.runForSteps(1);
  await t.runForSteps(92);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("red").getClone(1).currentCostume, 0, "Expected Clone 1 of red to have costume 0");
  t.assert.equal(t.getSprite("yellow").getClone(1).currentCostume, 0, "Expected Clone 1 of yellow to have costume 0");
  t.assert.equal(t.getSprite("red").getCloneCount(), 1, "Expected Sprite red to have 1 clones");
  t.assert.equal(t.getSprite("yellow").getCloneCount(), 1, "Expected Sprite yellow to have 1 clones");
  t.assert.equal(t.getSprite("red").getClone(1).direction, 44.20206023330162, 1, "Expected Clone 1 of red to face in direction 44.20206023330162 +-1");
  t.assert.equal(t.getSprite("yellow").getClone(1).direction, -45.15697434563782, 1, "Expected Clone 1 of yellow to face in direction -45.15697434563782 +-1");
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
  t.assert.withinRange(t.getSprite("red").getClone(1).x, -122.8303477603647, 5, "Expected Clone 1 of red to have x-position -122.8303477603647 +-5");
  t.assert.withinRange(t.getSprite("red").getClone(1).y, -120.2153858326913, 5, "Expected Clone 1 of red to have y-position -120.2153858326913 +-5");
  t.assert.withinRange(t.getSprite("yellow").getClone(1).x, 164.40108922251147, 5, "Expected Clone 1 of yellow to have x-position 164.40108922251147 +-5");
  t.assert.withinRange(t.getSprite("yellow").getClone(1).y, -163.48632917211546, 5, "Expected Clone 1 of yellow to have y-position -163.48632917211546 +-5");
  t.assert.not(t.getSprite("red").getClone(1).sayText, "Expected Clone 1 of red not to say anything");
  t.assert.not(t.getSprite("yellow").getClone(1).sayText, "Expected Clone 1 of yellow not to say anything");
  t.assert.withinRange(t.getSprite("red").getClone(1).size, 50, 1, "Expected Clone 1 of red to have size 50 +-1");
  t.assert.withinRange(t.getSprite("yellow").getClone(1).size, 50, 1, "Expected Clone 1 of yellow to have size 50 +-1");
  t.assert.ok(t.getSprite("red").getClone(1).visible, "Expected Clone 1 of red to be visible");
  t.assert.ok(t.getSprite("yellow").getClone(1).visible, "Expected Clone 1 of yellow to be visible");
  t.assert.equal(t.getSprite("red").getClone(1).volume, 100, "Expected Clone 1 of red to have volume 100");
  t.assert.equal(t.getSprite("yellow").getClone(1).volume, 100, "Expected Clone 1 of yellow to have volume 100");
  t.dragSprite('red', -20.665818648341812, 28.457605744539794, 1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("red").getClone(1).x, -17.179864243486048, 5, "Expected Clone 1 of red to have x-position -17.179864243486048 +-5");
  t.assert.withinRange(t.getSprite("red").getClone(1).y, 32.04203343766832, 5, "Expected Clone 1 of red to have y-position 32.04203343766832 +-5");
  t.assert.withinRange(t.getSprite("yellow").getClone(1).x, 163.69204782353472, 5, "Expected Clone 1 of yellow to have x-position 163.69204782353472 +-5");
  t.assert.withinRange(t.getSprite("yellow").getClone(1).y, -162.78116231630253, 5, "Expected Clone 1 of yellow to have y-position -162.78116231630253 +-5");
  t.assert.equal(t.getStage().getVariable("score", false).value, "1", "Expected score to have value 1");
  t.end();
}
const test2 = async function (t) {
  await t.runForSteps(23);
  await t.runForSteps(1);
  await t.runForSteps(55);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("red").getClone(1).currentCostume, 0, "Expected Clone 1 of red to have costume 0");
  t.assert.equal(t.getSprite("red").getCloneCount(), 1, "Expected Sprite red to have 1 clones");
  t.assert.equal(t.getSprite("red").getClone(1).direction, 44.20206023330162, 1, "Expected Clone 1 of red to face in direction 44.20206023330162 +-1");
  t.assert.equal(t.getSprite("red").getClone(1).effects.color, 0, "Expected effect color of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.fisheye, 0, "Expected effect fisheye of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.whirl, 0, "Expected effect whirl of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.pixelate, 0, "Expected effect pixelate of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.mosaic, 0, "Expected effect mosaic of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.brightness, 0, "Expected effect brightness of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").getClone(1).effects.ghost, 0, "Expected effect ghost of Clone 1 of red to be 0");
  t.assert.equal(t.getSprite("red").layerOrder, 5, "Expected Sprite red to be at layer 5");
  t.assert.equal(t.getSprite("red").getClone(1).getLayerOrder(), 4, "Expected Clone 1 of red to be at layer 4");
  t.assert.withinRange(t.getSprite("red").getClone(1).x, -166.05618238057673, 5, "Expected Clone 1 of red to have x-position -166.05618238057673 +-5");
  t.assert.withinRange(t.getSprite("red").getClone(1).y, -164.66228922748564, 5, "Expected Clone 1 of red to have y-position -164.66228922748564 +-5");
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
  t.assert.equal(t.getSprite("blue").getClone(1).direction, -45.15697434563782, 1, "Expected Clone 1 of blue to face in direction -45.15697434563782 +-1");
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
  t.assert.withinRange(t.getSprite("red").getClone(1).x, -95.63990340248988, 5, "Expected Clone 1 of red to have x-position -95.63990340248988 +-5");
  t.assert.withinRange(t.getSprite("red").getClone(1).y, -92.25684982628886, 5, "Expected Clone 1 of red to have y-position -92.25684982628886 +-5");
  t.assert.withinRange(t.getSprite("yellow").getClone(1).x, 136.74847466241818, 5, "Expected Clone 1 of yellow to have x-position 136.74847466241818 +-5");
  t.assert.withinRange(t.getSprite("yellow").getClone(1).y, -135.98482179541105, 5, "Expected Clone 1 of yellow to have y-position -135.98482179541105 +-5");
  t.assert.withinRange(t.getSprite("blue").getClone(1).x, 179.29095860102325, 5, "Expected Clone 1 of blue to have x-position 179.29095860102325 +-5");
  t.assert.withinRange(t.getSprite("blue").getClone(1).y, -178.29483314418707, 5, "Expected Clone 1 of blue to have y-position -178.29483314418707 +-5");
  t.assert.not(t.getSprite("yellow").getClone(1).sayText, "Expected Clone 1 of yellow not to say anything");
  t.assert.not(t.getSprite("blue").getClone(1).sayText, "Expected Clone 1 of blue not to say anything");
  t.assert.withinRange(t.getSprite("yellow").getClone(1).size, 50, 1, "Expected Clone 1 of yellow to have size 50 +-1");
  t.assert.withinRange(t.getSprite("blue").getClone(1).size, 50, 1, "Expected Clone 1 of blue to have size 50 +-1");
  t.assert.ok(t.getSprite("yellow").getClone(1).visible, "Expected Clone 1 of yellow to be visible");
  t.assert.ok(t.getSprite("blue").getClone(1).visible, "Expected Clone 1 of blue to be visible");
  t.assert.equal(t.getSprite("yellow").getClone(1).volume, 100, "Expected Clone 1 of yellow to have volume 100");
  t.assert.equal(t.getSprite("blue").getClone(1).volume, 100, "Expected Clone 1 of blue to have volume 100");
  t.dragSprite('blue', -11.061414429693787, -34.94079693966025, 1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("red").getClone(1).x, -94.94271252151873, 5, "Expected Clone 1 of red to have x-position -94.94271252151873 +-5");
  t.assert.withinRange(t.getSprite("red").getClone(1).y, -91.53996428766315, 5, "Expected Clone 1 of red to have y-position -91.53996428766315 +-5");
  t.assert.withinRange(t.getSprite("yellow").getClone(1).x, 136.03943326344142, 5, "Expected Clone 1 of yellow to have x-position 136.03943326344142 +-5");
  t.assert.withinRange(t.getSprite("yellow").getClone(1).y, -135.27965493959812, 5, "Expected Clone 1 of yellow to have y-position -135.27965493959812 +-5");
  t.assert.withinRange(t.getSprite("blue").getClone(1).x, -14.606621424577504, 5, "Expected Clone 1 of blue to have x-position -14.606621424577504 +-5");
  t.assert.withinRange(t.getSprite("blue").getClone(1).y, -31.41496266059557, 5, "Expected Clone 1 of blue to have y-position -31.41496266059557 +-5");
  t.assert.equal(t.getStage().getVariable("score", false).value, "1", "Expected score to have value 1");
  await t.runForSteps(400);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("red").getCloneCount(), 0, "Expected Sprite red to have 0 clones");
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
const test3 = async function (t) {
  await t.runForSteps(23);
  await t.runForSteps(1);
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("red3roller").direction, 177, 1, "Expected Sprite red3roller to face in direction 177 +-1");
  t.end();
}
const test4 = async function (t) {
  await t.runForSteps(23);
  await t.runForSteps(1);
  t.keyPress('left arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("red3roller").direction, 162, 1, "Expected Sprite red3roller to face in direction 162 +-1");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724671610351',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724671610351',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724671610351',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724671610351',
      type: 'standard',
  },
  {
      test: test4,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724671610351',
      type: 'standard',
  }
]
