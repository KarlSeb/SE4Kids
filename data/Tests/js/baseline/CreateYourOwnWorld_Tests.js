const test0 = async function (t) {
  t.dragSprite('coin', -173.93155666217888, 9.179446582400843, null);
  await t.runForSteps(1);
  t.dragSprite('player', -5.435028842544401, -108.5649711574556, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("player").x, -5.435028842544401, 5, "Expected Sprite player to have x-position -5.435028842544401 +-5");
  t.assert.withinRange(t.getSprite("player").y, -108.5649711574556, 5, "Expected Sprite player to have y-position -108.5649711574556 +-5");
  t.assert.withinRange(t.getSprite("person").x, 2, 5, "Expected Sprite person to have x-position 2 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 168, 5, "Expected Sprite enemy to have x-position 168 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -92, 5, "Expected Sprite enemy2 to have y-position -92 +-5");
  t.keyPress('up arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("person").x, 7, 5, "Expected Sprite person to have x-position 7 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 163, 5, "Expected Sprite enemy to have x-position 163 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -97, 5, "Expected Sprite enemy2 to have y-position -97 +-5");
  t.end();
}
const test1 = async function (t) {
  t.dragSprite('person', -172, -32, null);
  await t.runForSteps(1);
  t.dragSprite('player', 19.957087429946913, -107.23422673231755, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("player").x, 19.957087429946913, 5, "Expected Sprite player to have x-position 19.957087429946913 +-5");
  t.assert.withinRange(t.getSprite("player").y, -107.23422673231755, 5, "Expected Sprite player to have y-position -107.23422673231755 +-5");
  t.assert.withinRange(t.getSprite("person").x, 2, 5, "Expected Sprite person to have x-position 2 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 168, 5, "Expected Sprite enemy to have x-position 168 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -92, 5, "Expected Sprite enemy2 to have y-position -92 +-5");
  t.keyPress('left arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("person").x, 7, 5, "Expected Sprite person to have x-position 7 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 163, 5, "Expected Sprite enemy to have x-position 163 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -97, 5, "Expected Sprite enemy2 to have y-position -97 +-5");
  t.end();
}
const test2 = async function (t) {
  t.dragSprite('coin', -173.93155666217888, 9.179446582400843, null);
  await t.runForSteps(1);
  t.dragSprite('player', -5.435028842544401, -108.5649711574556, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("player").x, -5.435028842544401, 5, "Expected Sprite player to have x-position -5.435028842544401 +-5");
  t.assert.withinRange(t.getSprite("player").y, -108.5649711574556, 5, "Expected Sprite player to have y-position -108.5649711574556 +-5");
  t.assert.withinRange(t.getSprite("person").x, 2, 5, "Expected Sprite person to have x-position 2 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 168, 5, "Expected Sprite enemy to have x-position 168 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -92, 5, "Expected Sprite enemy2 to have y-position -92 +-5");
  t.keyPress('down arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("person").x, 4, 5, "Expected Sprite person to have x-position 4 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 166, 5, "Expected Sprite enemy to have x-position 166 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -94, 5, "Expected Sprite enemy2 to have y-position -94 +-5");
  t.end();
}
const test3 = async function (t) {
  t.dragSprite('coin', -173.93155666217888, 9.179446582400843, null);
  await t.runForSteps(1);
  t.dragSprite('player', -5.435028842544401, -108.5649711574556, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("player").x, -5.435028842544401, 5, "Expected Sprite player to have x-position -5.435028842544401 +-5");
  t.assert.withinRange(t.getSprite("player").y, -108.5649711574556, 5, "Expected Sprite player to have y-position -108.5649711574556 +-5");
  t.assert.withinRange(t.getSprite("person").x, 2, 5, "Expected Sprite person to have x-position 2 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 168, 5, "Expected Sprite enemy to have x-position 168 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -92, 5, "Expected Sprite enemy2 to have y-position -92 +-5");
  t.keyPress('right arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("person").x, 4, 5, "Expected Sprite person to have x-position 4 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 166, 5, "Expected Sprite enemy to have x-position 166 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -94, 5, "Expected Sprite enemy2 to have y-position -94 +-5");
  t.end();
}
const test4 = async function (t) {
  await t.runForSteps(28);
  await t.runForSteps(1);
  await t.runForSteps(85);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("person").x, 115, 5, "Expected Sprite person to have x-position 115 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 55, 5, "Expected Sprite enemy to have x-position 55 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -115, 5, "Expected Sprite enemy2 to have y-position -115 +-5");
  t.dragSprite('player', 240, -40.897952290669885, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.withinRange(t.getSprite("person").x, 116, 5, "Expected Sprite person to have x-position 116 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 54, 5, "Expected Sprite enemy to have x-position 54 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -114, 5, "Expected Sprite enemy2 to have y-position -114 +-5");
  t.assert.equal(t.getStage().getVariable("room", false).value, "2", "Expected room to have value 2");
  t.assert.not(t.getSprite("welcome sign").visible, "Expected Sprite welcome sign not to be visible");
  t.assert.ok(t.getSprite("enemy").visible, "Expected Sprite enemy to be visible");
  t.assert.not(t.getSprite("coin").visible, "Expected Sprite coin not to be visible");
  t.assert.ok(t.getSprite("coin2").visible, "Expected Sprite coin2 to be visible");
  t.assert.ok(t.getSprite("enemy sign").visible, "Expected Sprite enemy sign to be visible");
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("player").x, -192, 5, "Expected Sprite player to have x-position -192 +-5");
  t.assert.withinRange(t.getSprite("player").y, 0, 5, "Expected Sprite player to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("person").x, 121, 5, "Expected Sprite person to have x-position 121 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 49, 5, "Expected Sprite enemy to have x-position 49 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -109, 5, "Expected Sprite enemy2 to have y-position -109 +-5");
  t.assert.not(t.getSprite("person").visible, "Expected Sprite person not to be visible");
  t.dragSprite('enemy', -204.95796884118747, 13.895720330764242, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("person").x, 122, 5, "Expected Sprite person to have x-position 122 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, -205.95796884118747, 5, "Expected Sprite enemy to have x-position -205.95796884118747 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 13.895720330764242, 5, "Expected Sprite enemy to have y-position 13.895720330764242 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -108, 5, "Expected Sprite enemy2 to have y-position -108 +-5");
  t.assert.equal(t.getSprite("enemy").sayText, "Gotcha!", "Expected Sprite enemy to say Gotcha!");
  t.dragSprite('player', 240, -19.375334834055813, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 2, "Expected backdrop 2");
  t.assert.withinRange(t.getSprite("player").x, -200, 5, "Expected Sprite player to have x-position -200 +-5");
  t.assert.withinRange(t.getSprite("player").y, 0, 5, "Expected Sprite player to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("person").x, 123, 5, "Expected Sprite person to have x-position 123 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, -206.95796884118747, 5, "Expected Sprite enemy to have x-position -206.95796884118747 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 13.895720330764242, 5, "Expected Sprite enemy to have y-position 13.895720330764242 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -107, 5, "Expected Sprite enemy2 to have y-position -107 +-5");
  t.assert.equal(t.getStage().getVariable("room", false).value, "3", "Expected room to have value 3");
  t.assert.ok(t.getSprite("chest").visible, "Expected Sprite chest to be visible");
  t.assert.not(t.getSprite("enemy").visible, "Expected Sprite enemy not to be visible");
  t.assert.ok(t.getSprite("enemy2").visible, "Expected Sprite enemy2 to be visible");
  t.assert.not(t.getSprite("coin2").visible, "Expected Sprite coin2 not to be visible");
  t.assert.not(t.getSprite("enemy sign").visible, "Expected Sprite enemy sign not to be visible");
  t.assert.ok(t.getSprite("door-blue").visible, "Expected Sprite door-blue to be visible");
  t.assert.ok(t.getSprite("key-blue").visible, "Expected Sprite key-blue to be visible");
  t.assert.ok(t.getSprite("door sign").visible, "Expected Sprite door sign to be visible");
  t.dragSprite('chest', -198.32412655176321, 42.673985263816625, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("chest").x, -198.32412655176321, 5, "Expected Sprite chest to have x-position -198.32412655176321 +-5");
  t.assert.withinRange(t.getSprite("chest").y, 42.673985263816625, 5, "Expected Sprite chest to have y-position 42.673985263816625 +-5");
  t.assert.withinRange(t.getSprite("person").x, 124, 5, "Expected Sprite person to have x-position 124 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, -207.95796884118747, 5, "Expected Sprite enemy to have x-position -207.95796884118747 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 13.895720330764242, 5, "Expected Sprite enemy to have y-position 13.895720330764242 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -106, 5, "Expected Sprite enemy2 to have y-position -106 +-5");
  t.dragSprite('player', -225.40348398360632, -48.43561879924394, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("player").x, -225.40348398360632, 5, "Expected Sprite player to have x-position -225.40348398360632 +-5");
  t.assert.withinRange(t.getSprite("player").y, -48.43561879924394, 5, "Expected Sprite player to have y-position -48.43561879924394 +-5");
  t.assert.withinRange(t.getSprite("person").x, 125, 5, "Expected Sprite person to have x-position 125 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, -208.95796884118747, 5, "Expected Sprite enemy to have x-position -208.95796884118747 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 13.895720330764242, 5, "Expected Sprite enemy to have y-position 13.895720330764242 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -105, 5, "Expected Sprite enemy2 to have y-position -105 +-5");
  t.keyPress('down arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("player").x, -225.40348398360632, 5, "Expected Sprite player to have x-position -225.40348398360632 +-5");
  t.assert.withinRange(t.getSprite("player").y, -54.43561879924394, 5, "Expected Sprite player to have y-position -54.43561879924394 +-5");
  t.assert.withinRange(t.getSprite("person").x, 129, 5, "Expected Sprite person to have x-position 129 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, -212.95796884118747, 5, "Expected Sprite enemy to have x-position -212.95796884118747 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 13.895720330764242, 5, "Expected Sprite enemy to have y-position 13.895720330764242 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -101, 5, "Expected Sprite enemy2 to have y-position -101 +-5");
  t.keyPress('up arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("player").x, -225.40348398360632, 5, "Expected Sprite player to have x-position -225.40348398360632 +-5");
  t.assert.withinRange(t.getSprite("player").y, -52.43561879924394, 5, "Expected Sprite player to have y-position -52.43561879924394 +-5");
  t.assert.withinRange(t.getSprite("person").x, 131, 5, "Expected Sprite person to have x-position 131 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -99, 5, "Expected Sprite enemy2 to have y-position -99 +-5");
  t.end();
}
const test5 = async function (t) {
  await t.runForSteps(28);
  await t.runForSteps(1);
  t.dragSprite('player', 240, -40.897952290669885, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.withinRange(t.getSprite("person").x, 30, 5, "Expected Sprite person to have x-position 30 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 140, 5, "Expected Sprite enemy to have x-position 140 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -120, 5, "Expected Sprite enemy2 to have y-position -120 +-5");
  t.assert.equal(t.getStage().getVariable("room", false).value, "2", "Expected room to have value 2");
  t.assert.not(t.getSprite("welcome sign").visible, "Expected Sprite welcome sign not to be visible");
  t.assert.ok(t.getSprite("enemy").visible, "Expected Sprite enemy to be visible");
  t.assert.not(t.getSprite("coin").visible, "Expected Sprite coin not to be visible");
  t.assert.ok(t.getSprite("coin2").visible, "Expected Sprite coin2 to be visible");
  t.assert.ok(t.getSprite("enemy sign").visible, "Expected Sprite enemy sign to be visible");
  t.dragSprite('enemy', -204.95796884118747, 13.895720330764242, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("person").x, 31, 5, "Expected Sprite person to have x-position 31 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, -205.95796884118747, 5, "Expected Sprite enemy to have x-position -205.95796884118747 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 13.895720330764242, 5, "Expected Sprite enemy to have y-position 13.895720330764242 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -121, 5, "Expected Sprite enemy2 to have y-position -121 +-5");
  t.assert.equal(t.getSprite("enemy").sayText, "Gotcha!", "Expected Sprite enemy to say Gotcha!");
  t.assert.not(t.getSprite("person").visible, "Expected Sprite person not to be visible");
  t.dragSprite('player', 240, -19.375334834055813, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 2, "Expected backdrop 2");
  t.assert.withinRange(t.getSprite("person").x, 32, 5, "Expected Sprite person to have x-position 32 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, -206.95796884118747, 5, "Expected Sprite enemy to have x-position -206.95796884118747 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 13.895720330764242, 5, "Expected Sprite enemy to have y-position 13.895720330764242 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -122, 5, "Expected Sprite enemy2 to have y-position -122 +-5");
  t.assert.equal(t.getStage().getVariable("room", false).value, "3", "Expected room to have value 3");
  t.assert.ok(t.getSprite("chest").visible, "Expected Sprite chest to be visible");
  t.assert.not(t.getSprite("enemy").visible, "Expected Sprite enemy not to be visible");
  t.assert.ok(t.getSprite("enemy2").visible, "Expected Sprite enemy2 to be visible");
  t.assert.not(t.getSprite("coin2").visible, "Expected Sprite coin2 not to be visible");
  t.assert.not(t.getSprite("enemy sign").visible, "Expected Sprite enemy sign not to be visible");
  t.assert.ok(t.getSprite("door-blue").visible, "Expected Sprite door-blue to be visible");
  t.assert.ok(t.getSprite("key-blue").visible, "Expected Sprite key-blue to be visible");
  t.assert.ok(t.getSprite("door sign").visible, "Expected Sprite door sign to be visible");
  t.dragSprite('chest', -198.32412655176321, 42.673985263816625, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("chest").x, -198.32412655176321, 5, "Expected Sprite chest to have x-position -198.32412655176321 +-5");
  t.assert.withinRange(t.getSprite("chest").y, 42.673985263816625, 5, "Expected Sprite chest to have y-position 42.673985263816625 +-5");
  t.assert.withinRange(t.getSprite("person").x, 33, 5, "Expected Sprite person to have x-position 33 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, -207.95796884118747, 5, "Expected Sprite enemy to have x-position -207.95796884118747 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 13.895720330764242, 5, "Expected Sprite enemy to have y-position 13.895720330764242 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -123, 5, "Expected Sprite enemy2 to have y-position -123 +-5");
  t.dragSprite('player', -225.40348398360632, -48.43561879924394, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("player").x, -225.40348398360632, 5, "Expected Sprite player to have x-position -225.40348398360632 +-5");
  t.assert.withinRange(t.getSprite("player").y, -48.43561879924394, 5, "Expected Sprite player to have y-position -48.43561879924394 +-5");
  t.assert.withinRange(t.getSprite("person").x, 34, 5, "Expected Sprite person to have x-position 34 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, -208.95796884118747, 5, "Expected Sprite enemy to have x-position -208.95796884118747 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 13.895720330764242, 5, "Expected Sprite enemy to have y-position 13.895720330764242 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -124, 5, "Expected Sprite enemy2 to have y-position -124 +-5");
  t.keyPress('down arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("player").x, -225.40348398360632, 5, "Expected Sprite player to have x-position -225.40348398360632 +-5");
  t.assert.withinRange(t.getSprite("player").y, -54.43561879924394, 5, "Expected Sprite player to have y-position -54.43561879924394 +-5");
  t.assert.withinRange(t.getSprite("person").x, 38, 5, "Expected Sprite person to have x-position 38 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, -212.95796884118747, 5, "Expected Sprite enemy to have x-position -212.95796884118747 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 13.895720330764242, 5, "Expected Sprite enemy to have y-position 13.895720330764242 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -128, 5, "Expected Sprite enemy2 to have y-position -128 +-5");
  t.keyPress('up arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("player").x, -225.40348398360632, 5, "Expected Sprite player to have x-position -225.40348398360632 +-5");
  t.assert.withinRange(t.getSprite("player").y, -52.43561879924394, 5, "Expected Sprite player to have y-position -52.43561879924394 +-5");
  t.assert.withinRange(t.getSprite("person").x, 40, 5, "Expected Sprite person to have x-position 40 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, -214.95796884118747, 5, "Expected Sprite enemy to have x-position -214.95796884118747 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 13.895720330764242, 5, "Expected Sprite enemy to have y-position 13.895720330764242 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -130, 5, "Expected Sprite enemy2 to have y-position -130 +-5");
  await t.runForSteps(16);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("person").x, 57, 5, "Expected Sprite person to have x-position 57 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, -231.95796884118747, 5, "Expected Sprite enemy to have x-position -231.95796884118747 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 13.895720330764242, 5, "Expected Sprite enemy to have y-position 13.895720330764242 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -147, 5, "Expected Sprite enemy2 to have y-position -147 +-5");
  t.keyPress('left arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("player").x, -231.40348398360632, 5, "Expected Sprite player to have x-position -231.40348398360632 +-5");
  t.assert.withinRange(t.getSprite("player").y, -52.43561879924394, 5, "Expected Sprite player to have y-position -52.43561879924394 +-5");
  t.assert.withinRange(t.getSprite("person").x, 61, 5, "Expected Sprite person to have x-position 61 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, -235.95796884118747, 5, "Expected Sprite enemy to have x-position -235.95796884118747 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 13.895720330764242, 5, "Expected Sprite enemy to have y-position 13.895720330764242 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -151, 5, "Expected Sprite enemy2 to have y-position -151 +-5");
  t.assert.not(t.getSprite("enemy").sayText, "Expected Sprite enemy not to say anything");
  t.end();
}
const test6 = async function (t) {
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.dragSprite('player', 238, -32, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.withinRange(t.getSprite("player").x, -200, 5, "Expected Sprite player to have x-position -200 +-5");
  t.assert.withinRange(t.getSprite("player").y, 0, 5, "Expected Sprite player to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("person").x, 6, 5, "Expected Sprite person to have x-position 6 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 164, 5, "Expected Sprite enemy to have x-position 164 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -96, 5, "Expected Sprite enemy2 to have y-position -96 +-5");
  t.assert.equal(t.getStage().getVariable("room", false).value, "2", "Expected room to have value 2");
  t.assert.not(t.getSprite("welcome sign").visible, "Expected Sprite welcome sign not to be visible");
  t.assert.ok(t.getSprite("enemy").visible, "Expected Sprite enemy to be visible");
  t.assert.not(t.getSprite("coin").visible, "Expected Sprite coin not to be visible");
  t.assert.ok(t.getSprite("coin2").visible, "Expected Sprite coin2 to be visible");
  t.assert.ok(t.getSprite("enemy sign").visible, "Expected Sprite enemy sign to be visible");
  t.dragSprite('player', 238, -32, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 2, "Expected backdrop 2");
  t.assert.withinRange(t.getSprite("person").x, 7, 5, "Expected Sprite person to have x-position 7 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 163, 5, "Expected Sprite enemy to have x-position 163 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -97, 5, "Expected Sprite enemy2 to have y-position -97 +-5");
  t.assert.equal(t.getStage().getVariable("room", false).value, "3", "Expected room to have value 3");
  t.assert.ok(t.getSprite("chest").visible, "Expected Sprite chest to be visible");
  t.assert.not(t.getSprite("person").visible, "Expected Sprite person not to be visible");
  t.assert.not(t.getSprite("enemy").visible, "Expected Sprite enemy not to be visible");
  t.assert.ok(t.getSprite("enemy2").visible, "Expected Sprite enemy2 to be visible");
  t.assert.not(t.getSprite("coin2").visible, "Expected Sprite coin2 not to be visible");
  t.assert.not(t.getSprite("enemy sign").visible, "Expected Sprite enemy sign not to be visible");
  t.assert.ok(t.getSprite("door-blue").visible, "Expected Sprite door-blue to be visible");
  t.assert.ok(t.getSprite("key-blue").visible, "Expected Sprite key-blue to be visible");
  t.assert.ok(t.getSprite("door sign").visible, "Expected Sprite door sign to be visible");
  t.dragSprite('enemy2', -183.54551732809568, -9.500000000000009, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("person").x, 8, 5, "Expected Sprite person to have x-position 8 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 162, 5, "Expected Sprite enemy to have x-position 162 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -183.54551732809568, 5, "Expected Sprite enemy2 to have x-position -183.54551732809568 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -10.500000000000009, 5, "Expected Sprite enemy2 to have y-position -10.500000000000009 +-5");
  t.assert.equal(t.getSprite("enemy2").sayText, "Gotcha!", "Expected Sprite enemy2 to say Gotcha!");
  await t.runForSteps(81);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("person").x, 38, 5, "Expected Sprite person to have x-position 38 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 132, 5, "Expected Sprite enemy to have x-position 132 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -183.54551732809568, 5, "Expected Sprite enemy2 to have x-position -183.54551732809568 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -40.50000000000001, 5, "Expected Sprite enemy2 to have y-position -40.50000000000001 +-5");
  t.assert.not(t.getSprite("enemy2").sayText, "Expected Sprite enemy2 not to say anything");
  t.end();
}
const test7 = async function (t) {
  t.dragSprite('person', -166.48725288366003, -51.22523391876638, null);
  await t.runForSteps(1);
  t.dragSprite('player', 238, -32, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.withinRange(t.getSprite("person").x, 2, 5, "Expected Sprite person to have x-position 2 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 168, 5, "Expected Sprite enemy to have x-position 168 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -92, 5, "Expected Sprite enemy2 to have y-position -92 +-5");
  t.assert.equal(t.getStage().getVariable("room", false).value, "2", "Expected room to have value 2");
  t.assert.not(t.getSprite("welcome sign").visible, "Expected Sprite welcome sign not to be visible");
  t.assert.ok(t.getSprite("enemy").visible, "Expected Sprite enemy to be visible");
  t.assert.not(t.getSprite("coin").visible, "Expected Sprite coin not to be visible");
  t.assert.ok(t.getSprite("coin2").visible, "Expected Sprite coin2 to be visible");
  t.assert.ok(t.getSprite("enemy sign").visible, "Expected Sprite enemy sign to be visible");
  t.dragSprite('player', -236.32905178899247, 7.07708687968417, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.withinRange(t.getSprite("player").x, 200, 5, "Expected Sprite player to have x-position 200 +-5");
  t.assert.withinRange(t.getSprite("player").y, 0, 5, "Expected Sprite player to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("person").x, 3, 5, "Expected Sprite person to have x-position 3 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 167, 5, "Expected Sprite enemy to have x-position 167 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -93, 5, "Expected Sprite enemy2 to have y-position -93 +-5");
  t.assert.equal(t.getStage().getVariable("room", false).value, "1", "Expected room to have value 1");
  t.assert.ok(t.getSprite("welcome sign").visible, "Expected Sprite welcome sign to be visible");
  t.assert.not(t.getSprite("person").visible, "Expected Sprite person not to be visible");
  t.assert.not(t.getSprite("enemy").visible, "Expected Sprite enemy not to be visible");
  t.assert.ok(t.getSprite("coin").visible, "Expected Sprite coin to be visible");
  t.assert.not(t.getSprite("coin2").visible, "Expected Sprite coin2 not to be visible");
  t.assert.not(t.getSprite("enemy sign").visible, "Expected Sprite enemy sign not to be visible");
  t.end();
}
const test8 = async function (t) {
  t.dragSprite('coin', -173.93155666217888, 9.179446582400843, null);
  await t.runForSteps(1);
  t.dragSprite('player', -5.435028842544401, -108.5649711574556, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("player").x, -5.435028842544401, 5, "Expected Sprite player to have x-position -5.435028842544401 +-5");
  t.assert.withinRange(t.getSprite("player").y, -108.5649711574556, 5, "Expected Sprite player to have y-position -108.5649711574556 +-5");
  t.assert.withinRange(t.getSprite("person").x, 2, 5, "Expected Sprite person to have x-position 2 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 168, 5, "Expected Sprite enemy to have x-position 168 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -92, 5, "Expected Sprite enemy2 to have y-position -92 +-5");
  t.dragSprite('welcome sign', -5, -108, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("welcome sign").x, -5, 5, "Expected Sprite welcome sign to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("welcome sign").y, -108, 5, "Expected Sprite welcome sign to have y-position -108 +-5");
  t.assert.withinRange(t.getSprite("person").x, 3, 5, "Expected Sprite person to have x-position 3 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 167, 5, "Expected Sprite enemy to have x-position 167 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -93, 5, "Expected Sprite enemy2 to have y-position -93 +-5");
  t.assert.equal(t.getSprite("welcome sign").sayText, "Welcome! Can you get to the treasure?", "Expected Sprite welcome sign to say Welcome! Can you get to the treasure?");
  t.end();
}
const test9 = async function (t) {
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.dragSprite('person', -201.32537299282276, 18.95371695493666, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("person").x, -201.32537299282276, 5, "Expected Sprite person to have x-position -201.32537299282276 +-5");
  t.assert.withinRange(t.getSprite("person").y, 18.95371695493666, 5, "Expected Sprite person to have y-position 18.95371695493666 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 164, 5, "Expected Sprite enemy to have x-position 164 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -96, 5, "Expected Sprite enemy2 to have y-position -96 +-5");
  t.assert.equal(t.getSprite("person").sayText, "Did you know that you can go through orange and yellow doors?", "Expected Sprite person to say Did you know that you can go through orange and yellow doors?");
  t.end();
}
const test10 = async function (t) {
  t.dragSprite('person', -172, -32, null);
  await t.runForSteps(1);
  t.dragSprite('player', 19.957087429946913, -107.23422673231755, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("player").x, 19.957087429946913, 5, "Expected Sprite player to have x-position 19.957087429946913 +-5");
  t.assert.withinRange(t.getSprite("player").y, -107.23422673231755, 5, "Expected Sprite player to have y-position -107.23422673231755 +-5");
  t.assert.withinRange(t.getSprite("person").x, 2, 5, "Expected Sprite person to have x-position 2 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 168, 5, "Expected Sprite enemy to have x-position 168 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -92, 5, "Expected Sprite enemy2 to have y-position -92 +-5");
  t.dragSprite('coin', 19, -107, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("person").x, 3, 5, "Expected Sprite person to have x-position 3 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 167, 5, "Expected Sprite enemy to have x-position 167 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -93, 5, "Expected Sprite enemy2 to have y-position -93 +-5");
  t.assert.withinRange(t.getSprite("coin").x, 19, 5, "Expected Sprite coin to have x-position 19 +-5");
  t.assert.withinRange(t.getSprite("coin").y, -107, 5, "Expected Sprite coin to have y-position -107 +-5");
  t.assert.equal(t.getStage().getVariable("coins", false).value, "1", "Expected coins to have value 1");
  t.assert.not(t.getSprite("coin").visible, "Expected Sprite coin not to be visible");
  t.end();
}
const test11 = async function (t) {
  t.dragSprite('person', -166.48725288366003, -51.22523391876638, null);
  await t.runForSteps(1);
  t.dragSprite('coin2', -217.02669234288612, -29.564867440356693, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("person").x, 2, 5, "Expected Sprite person to have x-position 2 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 168, 5, "Expected Sprite enemy to have x-position 168 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -92, 5, "Expected Sprite enemy2 to have y-position -92 +-5");
  t.assert.withinRange(t.getSprite("coin2").x, -217.02669234288612, 5, "Expected Sprite coin2 to have x-position -217.02669234288612 +-5");
  t.assert.withinRange(t.getSprite("coin2").y, -29.564867440356693, 5, "Expected Sprite coin2 to have y-position -29.564867440356693 +-5");
  t.dragSprite('player', 238, -32, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.withinRange(t.getSprite("person").x, 3, 5, "Expected Sprite person to have x-position 3 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 167, 5, "Expected Sprite enemy to have x-position 167 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -93, 5, "Expected Sprite enemy2 to have y-position -93 +-5");
  t.assert.equal(t.getStage().getVariable("room", false).value, "2", "Expected room to have value 2");
  t.assert.not(t.getSprite("welcome sign").visible, "Expected Sprite welcome sign not to be visible");
  t.assert.ok(t.getSprite("enemy").visible, "Expected Sprite enemy to be visible");
  t.assert.not(t.getSprite("coin").visible, "Expected Sprite coin not to be visible");
  t.assert.ok(t.getSprite("coin2").visible, "Expected Sprite coin2 to be visible");
  t.assert.ok(t.getSprite("enemy sign").visible, "Expected Sprite enemy sign to be visible");
  t.keyPress('left arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("player").x, -208, 5, "Expected Sprite player to have x-position -208 +-5");
  t.assert.withinRange(t.getSprite("player").y, 0, 5, "Expected Sprite player to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("person").x, 8, 5, "Expected Sprite person to have x-position 8 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 162, 5, "Expected Sprite enemy to have x-position 162 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -98, 5, "Expected Sprite enemy2 to have y-position -98 +-5");
  t.assert.equal(t.getStage().getVariable("coins", false).value, "1", "Expected coins to have value 1");
  t.assert.not(t.getSprite("person").visible, "Expected Sprite person not to be visible");
  t.assert.not(t.getSprite("coin2").visible, "Expected Sprite coin2 not to be visible");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724934331801',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724934331801',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724934331801',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724934331801',
      type: 'standard',
  },
  {
      test: test4,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724934331801',
      type: 'standard',
  },
  {
      test: test5,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724934331801',
      type: 'standard',
  },
  {
      test: test6,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724934331801',
      type: 'standard',
  },
  {
      test: test7,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724934331801',
      type: 'standard',
  },
  {
      test: test8,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724934331801',
      type: 'standard',
  },
  {
      test: test9,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724934331801',
      type: 'standard',
  },
  {
      test: test10,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724934331801',
      type: 'standard',
  },
  {
      test: test11,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724934331801',
      type: 'standard',
  }
]
