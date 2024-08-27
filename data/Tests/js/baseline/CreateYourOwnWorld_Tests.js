const test0 = async function (t) {
  t.dragSprite('player', -9.854159794932258, -115.5016172768123, null);
  await t.runForSteps(1);
  t.dragSprite('player', 229.9702530269267, -14.780152046303648, null);
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
  t.dragSprite('player', 240, -29.684482475302197, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 2, "Expected backdrop 2");
  t.assert.withinRange(t.getSprite("person").x, 3, 5, "Expected Sprite person to have x-position 3 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 167, 5, "Expected Sprite enemy to have x-position 167 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -93, 5, "Expected Sprite enemy2 to have y-position -93 +-5");
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
  t.dragSprite('player', -121.92992619039208, -125.871322893124, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("player").x, -121.92992619039208, 5, "Expected Sprite player to have x-position -121.92992619039208 +-5");
  t.assert.withinRange(t.getSprite("player").y, -125.871322893124, 5, "Expected Sprite player to have y-position -125.871322893124 +-5");
  t.assert.withinRange(t.getSprite("person").x, 4, 5, "Expected Sprite person to have x-position 4 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 166, 5, "Expected Sprite enemy to have x-position 166 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -94, 5, "Expected Sprite enemy2 to have y-position -94 +-5");
  t.keyPress('up arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("person").x, 6, 5, "Expected Sprite person to have x-position 6 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 164, 5, "Expected Sprite enemy to have x-position 164 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -96, 5, "Expected Sprite enemy2 to have y-position -96 +-5");
  t.end();
}
const test1 = async function (t) {
  t.keyPress('left arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.dragSprite('player', 3.082438143052104, -101.6474093005077, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("player").x, 3.082438143052104, 5, "Expected Sprite player to have x-position 3.082438143052104 +-5");
  t.assert.withinRange(t.getSprite("player").y, -101.6474093005077, 5, "Expected Sprite player to have y-position -101.6474093005077 +-5");
  t.assert.withinRange(t.getSprite("person").x, 3, 5, "Expected Sprite person to have x-position 3 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 167, 5, "Expected Sprite enemy to have x-position 167 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -93, 5, "Expected Sprite enemy2 to have y-position -93 +-5");
  t.keyPress('left arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("person").x, 5, 5, "Expected Sprite person to have x-position 5 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 165, 5, "Expected Sprite enemy to have x-position 165 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -95, 5, "Expected Sprite enemy2 to have y-position -95 +-5");
  t.end();
}
const test2 = async function (t) {
  t.dragSprite('player', 240, -30.013959197914584, null);
  await t.runForSteps(1);
  t.dragSprite('player', 0, -120, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("player").x, 0, 5, "Expected Sprite player to have x-position 0 +-5");
  t.assert.withinRange(t.getSprite("player").y, -120, 5, "Expected Sprite player to have y-position -120 +-5");
  t.assert.withinRange(t.getSprite("person").x, 2, 5, "Expected Sprite person to have x-position 2 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 168, 5, "Expected Sprite enemy to have x-position 168 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -92, 5, "Expected Sprite enemy2 to have y-position -92 +-5");
  t.keyPress('down arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("person").x, 5, 5, "Expected Sprite person to have x-position 5 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 165, 5, "Expected Sprite enemy to have x-position 165 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -95, 5, "Expected Sprite enemy2 to have y-position -95 +-5");
  t.end();
}
const test3 = async function (t) {
  t.dragSprite('person', -187.7517138785458, -21.375334834055806, null);
  await t.runForSteps(1);
  t.dragSprite('player', -5.435028842544407, -135.4350288425444, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("player").x, -5.435028842544407, 5, "Expected Sprite player to have x-position -5.435028842544407 +-5");
  t.assert.withinRange(t.getSprite("player").y, -135.4350288425444, 5, "Expected Sprite player to have y-position -135.4350288425444 +-5");
  t.assert.withinRange(t.getSprite("person").x, 2, 5, "Expected Sprite person to have x-position 2 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 168, 5, "Expected Sprite enemy to have x-position 168 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -92, 5, "Expected Sprite enemy2 to have y-position -92 +-5");
  t.keyPress('right arrow', 4);
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
const test4 = async function (t) {
  t.dragSprite('player', 240, -30.013959197914584, null);
  await t.runForSteps(1);
  await t.runForSteps(58);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("person").x, 60, 5, "Expected Sprite person to have x-position 60 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 110, 5, "Expected Sprite enemy to have x-position 110 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -150, 5, "Expected Sprite enemy2 to have y-position -150 +-5");
  await t.runForSteps(91);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("person").x, 152, 5, "Expected Sprite person to have x-position 152 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 62, 5, "Expected Sprite enemy to have x-position 62 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -101, 5, "Expected Sprite enemy2 to have y-position -101 +-5");
  t.end();
}
const test5 = async function (t) {
  t.dragSprite('coin', -144.32686937229568, -30.55934868559167, null);
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
  t.dragSprite('player', 8, -122, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("player").x, 8, 5, "Expected Sprite player to have x-position 8 +-5");
  t.assert.withinRange(t.getSprite("player").y, -122, 5, "Expected Sprite player to have y-position -122 +-5");
  t.assert.withinRange(t.getSprite("person").x, 3, 5, "Expected Sprite person to have x-position 3 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 167, 5, "Expected Sprite enemy to have x-position 167 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -93, 5, "Expected Sprite enemy2 to have y-position -93 +-5");
  t.assert.not(t.getSprite("person").visible, "Expected Sprite person not to be visible");
  t.dragSprite('enemy', 8, -122, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("person").x, 4, 5, "Expected Sprite person to have x-position 4 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 7, 5, "Expected Sprite enemy to have x-position 7 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, -122, 5, "Expected Sprite enemy to have y-position -122 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -94, 5, "Expected Sprite enemy2 to have y-position -94 +-5");
  t.assert.equal(t.getSprite("enemy").sayText, "Gotcha!", "Expected Sprite enemy to say Gotcha!");
  await t.runForSteps(89);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("person").x, 34, 5, "Expected Sprite person to have x-position 34 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, -23, 5, "Expected Sprite enemy to have x-position -23 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, -122, 5, "Expected Sprite enemy to have y-position -122 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -124, 5, "Expected Sprite enemy2 to have y-position -124 +-5");
  t.assert.not(t.getSprite("enemy").sayText, "Expected Sprite enemy not to say anything");
  t.end();
}
const test6 = async function (t) {
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.dragSprite('player', 230, -30, null);
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
  t.dragSprite('player', 230, -30, null);
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
  t.dragSprite('enemy2', -206.9722548357644, 8.766078471307615, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("person").x, 8, 5, "Expected Sprite person to have x-position 8 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 162, 5, "Expected Sprite enemy to have x-position 162 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -206.9722548357644, 5, "Expected Sprite enemy2 to have x-position -206.9722548357644 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, 7.766078471307615, 5, "Expected Sprite enemy2 to have y-position 7.766078471307615 +-5");
  t.assert.equal(t.getSprite("enemy2").sayText, "Gotcha!", "Expected Sprite enemy2 to say Gotcha!");
  await t.runForSteps(29);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("person").x, 38, 5, "Expected Sprite person to have x-position 38 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 132, 5, "Expected Sprite enemy to have x-position 132 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -206.9722548357644, 5, "Expected Sprite enemy2 to have x-position -206.9722548357644 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -22.233921528692385, 5, "Expected Sprite enemy2 to have y-position -22.233921528692385 +-5");
  t.assert.not(t.getSprite("enemy2").sayText, "Expected Sprite enemy2 not to say anything");
  t.end();
}
const test7 = async function (t) {
  t.keyPress('right arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.dragSprite('player', 238, -32, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.withinRange(t.getSprite("player").x, -200, 5, "Expected Sprite player to have x-position -200 +-5");
  t.assert.withinRange(t.getSprite("player").y, 0, 5, "Expected Sprite player to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("person").x, 4, 5, "Expected Sprite person to have x-position 4 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 166, 5, "Expected Sprite enemy to have x-position 166 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -94, 5, "Expected Sprite enemy2 to have y-position -94 +-5");
  t.assert.equal(t.getStage().getVariable("room", false).value, "2", "Expected room to have value 2");
  t.assert.not(t.getSprite("welcome sign").visible, "Expected Sprite welcome sign not to be visible");
  t.assert.ok(t.getSprite("enemy").visible, "Expected Sprite enemy to be visible");
  t.assert.not(t.getSprite("coin").visible, "Expected Sprite coin not to be visible");
  t.assert.ok(t.getSprite("coin2").visible, "Expected Sprite coin2 to be visible");
  t.assert.ok(t.getSprite("enemy sign").visible, "Expected Sprite enemy sign to be visible");
  t.dragSprite('player', -230, -30, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 0, "Expected backdrop 0");
  t.assert.withinRange(t.getSprite("player").x, 200, 5, "Expected Sprite player to have x-position 200 +-5");
  t.assert.withinRange(t.getSprite("player").y, 0, 5, "Expected Sprite player to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("person").x, 5, 5, "Expected Sprite person to have x-position 5 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 165, 5, "Expected Sprite enemy to have x-position 165 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -95, 5, "Expected Sprite enemy2 to have y-position -95 +-5");
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
  t.keyPress('left arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.dragSprite('welcome sign', -194, 0, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("welcome sign").x, -194, 5, "Expected Sprite welcome sign to have x-position -194 +-5");
  t.assert.withinRange(t.getSprite("welcome sign").y, 0, 5, "Expected Sprite welcome sign to have y-position 0 +-5");
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
  t.keyPress('right arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.dragSprite('player', 238, -32, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.withinRange(t.getSprite("player").x, -200, 5, "Expected Sprite player to have x-position -200 +-5");
  t.assert.withinRange(t.getSprite("player").y, 0, 5, "Expected Sprite player to have y-position 0 +-5");
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
  t.dragSprite('player', 219.01157428663717, -31.33690956265248, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 2, "Expected backdrop 2");
  t.assert.withinRange(t.getSprite("person").x, 4, 5, "Expected Sprite person to have x-position 4 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 166, 5, "Expected Sprite enemy to have x-position 166 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -94, 5, "Expected Sprite enemy2 to have y-position -94 +-5");
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
  t.dragSprite('chest', -200, 0, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("chest").x, -200, 5, "Expected Sprite chest to have x-position -200 +-5");
  t.assert.withinRange(t.getSprite("chest").y, 0, 5, "Expected Sprite chest to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("person").x, 5, 5, "Expected Sprite person to have x-position 5 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 165, 5, "Expected Sprite enemy to have x-position 165 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -95, 5, "Expected Sprite enemy2 to have y-position -95 +-5");
  t.assert.equal(t.getSprite("chest").sayText, "Well done!", "Expected Sprite chest to say Well done!");
  await t.runForSteps(100);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("person").x, 35, 5, "Expected Sprite person to have x-position 35 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 135, 5, "Expected Sprite enemy to have x-position 135 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -125, 5, "Expected Sprite enemy2 to have y-position -125 +-5");
  t.assert.not(t.getSprite("chest").sayText, "Expected Sprite chest not to say anything");
  t.end();
}
const test10 = async function (t) {
  t.keyPress('right arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.dragSprite('player', 240, -46.765773267682455, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("player").x, 240, 5, "Expected Sprite player to have x-position 240 +-5");
  t.assert.withinRange(t.getSprite("player").y, -46.765773267682455, 5, "Expected Sprite player to have y-position -46.765773267682455 +-5");
  t.assert.withinRange(t.getSprite("person").x, 4, 5, "Expected Sprite person to have x-position 4 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 166, 5, "Expected Sprite enemy to have x-position 166 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -94, 5, "Expected Sprite enemy2 to have y-position -94 +-5");
  t.dragSprite('person', 240, -48, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("person").x, 240, 5, "Expected Sprite person to have x-position 240 +-5");
  t.assert.withinRange(t.getSprite("person").y, -48, 5, "Expected Sprite person to have y-position -48 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 165, 5, "Expected Sprite enemy to have x-position 165 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -95, 5, "Expected Sprite enemy2 to have y-position -95 +-5");
  t.assert.equal(t.getSprite("person").sayText, "Did you know that you can go through orange and yellow doors?", "Expected Sprite person to say Did you know that you can go through orange and yellow doors?");
  t.end();
}
const test11 = async function (t) {
  t.keyPress('right arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.dragSprite('player', 238, -32, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.withinRange(t.getSprite("player").x, -200, 5, "Expected Sprite player to have x-position -200 +-5");
  t.assert.withinRange(t.getSprite("player").y, 0, 5, "Expected Sprite player to have y-position 0 +-5");
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
  t.dragSprite('enemy sign', -200, 0, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("person").x, 4, 5, "Expected Sprite person to have x-position 4 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 166, 5, "Expected Sprite enemy to have x-position 166 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -94, 5, "Expected Sprite enemy2 to have y-position -94 +-5");
  t.assert.withinRange(t.getSprite("enemy sign").x, -200, 5, "Expected Sprite enemy sign to have x-position -200 +-5");
  t.assert.withinRange(t.getSprite("enemy sign").y, 0, 5, "Expected Sprite enemy sign to have y-position 0 +-5");
  t.assert.equal(t.getSprite("enemy sign").sayText, "Avoid the patrolling enemies!", "Expected Sprite enemy sign to say Avoid the patrolling enemies!");
  t.assert.not(t.getSprite("person").visible, "Expected Sprite person not to be visible");
  t.end();
}
const test12 = async function (t) {
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  await t.runForSteps(25);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("person").x, 31, 5, "Expected Sprite person to have x-position 31 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 139, 5, "Expected Sprite enemy to have x-position 139 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -121, 5, "Expected Sprite enemy2 to have y-position -121 +-5");
  t.dragSprite('player', 238, -32, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.withinRange(t.getSprite("player").x, -200, 5, "Expected Sprite player to have x-position -200 +-5");
  t.assert.withinRange(t.getSprite("player").y, 0, 5, "Expected Sprite player to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("person").x, 32, 5, "Expected Sprite person to have x-position 32 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 138, 5, "Expected Sprite enemy to have x-position 138 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -122, 5, "Expected Sprite enemy2 to have y-position -122 +-5");
  t.assert.equal(t.getStage().getVariable("room", false).value, "2", "Expected room to have value 2");
  t.assert.not(t.getSprite("welcome sign").visible, "Expected Sprite welcome sign not to be visible");
  t.assert.ok(t.getSprite("enemy").visible, "Expected Sprite enemy to be visible");
  t.assert.not(t.getSprite("coin").visible, "Expected Sprite coin not to be visible");
  t.assert.ok(t.getSprite("coin2").visible, "Expected Sprite coin2 to be visible");
  t.assert.ok(t.getSprite("enemy sign").visible, "Expected Sprite enemy sign to be visible");
  t.dragSprite('player', 224.80149096127906, -18.33254379356563, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 2, "Expected backdrop 2");
  t.assert.withinRange(t.getSprite("person").x, 33, 5, "Expected Sprite person to have x-position 33 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 137, 5, "Expected Sprite enemy to have x-position 137 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -123, 5, "Expected Sprite enemy2 to have y-position -123 +-5");
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
  t.dragSprite('key-blue', -240, -6.894774024590524, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().getList("inventory", false).value.length, 1, "Expected list inventory to have length 1");
  t.assert.withinRange(t.getSprite("person").x, 34, 5, "Expected Sprite person to have x-position 34 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 136, 5, "Expected Sprite enemy to have x-position 136 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -124, 5, "Expected Sprite enemy2 to have y-position -124 +-5");
  t.assert.withinRange(t.getSprite("key-blue").x, -240, 5, "Expected Sprite key-blue to have x-position -240 +-5");
  t.assert.withinRange(t.getSprite("key-blue").y, -6.894774024590524, 5, "Expected Sprite key-blue to have y-position -6.894774024590524 +-5");
  t.assert.equal(t.getStage().getVariable("coins", false).value, "3", "Expected coins to have value 3");
  t.assert.not(t.getSprite("door-blue").visible, "Expected Sprite door-blue not to be visible");
  t.assert.not(t.getSprite("key-blue").visible, "Expected Sprite key-blue not to be visible");
  t.end();
}
const test13 = async function (t) {
  t.dragSprite('player', -9.854159794932258, -115.5016172768123, null);
  await t.runForSteps(1);
  t.dragSprite('player', 229.9702530269267, -14.780152046303648, null);
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
  t.dragSprite('player', 240, -29.684482475302197, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 2, "Expected backdrop 2");
  t.assert.withinRange(t.getSprite("person").x, 3, 5, "Expected Sprite person to have x-position 3 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 167, 5, "Expected Sprite enemy to have x-position 167 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -93, 5, "Expected Sprite enemy2 to have y-position -93 +-5");
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
  t.dragSprite('player', -121.92992619039208, -125.871322893124, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("player").x, -121.92992619039208, 5, "Expected Sprite player to have x-position -121.92992619039208 +-5");
  t.assert.withinRange(t.getSprite("player").y, -125.871322893124, 5, "Expected Sprite player to have y-position -125.871322893124 +-5");
  t.assert.withinRange(t.getSprite("person").x, 4, 5, "Expected Sprite person to have x-position 4 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 166, 5, "Expected Sprite enemy to have x-position 166 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -94, 5, "Expected Sprite enemy2 to have y-position -94 +-5");
  t.dragSprite('door sign', -121, -125, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("person").x, 5, 5, "Expected Sprite person to have x-position 5 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 165, 5, "Expected Sprite enemy to have x-position 165 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -95, 5, "Expected Sprite enemy2 to have y-position -95 +-5");
  t.assert.withinRange(t.getSprite("door sign").x, -121, 5, "Expected Sprite door sign to have x-position -121 +-5");
  t.assert.withinRange(t.getSprite("door sign").y, -125, 5, "Expected Sprite door sign to have y-position -125 +-5");
  t.assert.equal(t.getSprite("door sign").sayText, "You'll need a blue key to open this door!", "Expected Sprite door sign to say You'll need a blue key to open this door!");
  t.end();
}
const test14 = async function (t) {
  t.keyPress('right arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.dragSprite('coin', -196, 0, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("person").x, 4, 5, "Expected Sprite person to have x-position 4 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 166, 5, "Expected Sprite enemy to have x-position 166 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -94, 5, "Expected Sprite enemy2 to have y-position -94 +-5");
  t.assert.withinRange(t.getSprite("coin").x, -196, 5, "Expected Sprite coin to have x-position -196 +-5");
  t.assert.withinRange(t.getSprite("coin").y, 0, 5, "Expected Sprite coin to have y-position 0 +-5");
  t.assert.equal(t.getStage().getVariable("coins", false).value, "1", "Expected coins to have value 1");
  t.assert.not(t.getSprite("coin").visible, "Expected Sprite coin not to be visible");
  t.end();
}
const test15 = async function (t) {
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
  t.dragSprite('player', 224.80149096127906, -18.33254379356563, null);
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
  t.dragSprite('player', -239.2113827846804, -13.38222556435148, null);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.withinRange(t.getSprite("player").x, 200, 5, "Expected Sprite player to have x-position 200 +-5");
  t.assert.withinRange(t.getSprite("player").y, 0, 5, "Expected Sprite player to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("person").x, 8, 5, "Expected Sprite person to have x-position 8 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 162, 5, "Expected Sprite enemy to have x-position 162 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -98, 5, "Expected Sprite enemy2 to have y-position -98 +-5");
  t.assert.equal(t.getStage().getVariable("room", false).value, "2", "Expected room to have value 2");
  t.assert.not(t.getSprite("chest").visible, "Expected Sprite chest not to be visible");
  t.assert.ok(t.getSprite("enemy").visible, "Expected Sprite enemy to be visible");
  t.assert.not(t.getSprite("enemy2").visible, "Expected Sprite enemy2 not to be visible");
  t.assert.ok(t.getSprite("coin2").visible, "Expected Sprite coin2 to be visible");
  t.assert.ok(t.getSprite("enemy sign").visible, "Expected Sprite enemy sign to be visible");
  t.assert.not(t.getSprite("door-blue").visible, "Expected Sprite door-blue not to be visible");
  t.assert.not(t.getSprite("key-blue").visible, "Expected Sprite key-blue not to be visible");
  t.assert.not(t.getSprite("door sign").visible, "Expected Sprite door sign not to be visible");
  t.dragSprite('coin2', 196, 4, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("person").x, 9, 5, "Expected Sprite person to have x-position 9 +-5");
  t.assert.withinRange(t.getSprite("person").y, -160, 5, "Expected Sprite person to have y-position -160 +-5");
  t.assert.withinRange(t.getSprite("enemy").x, 161, 5, "Expected Sprite enemy to have x-position 161 +-5");
  t.assert.withinRange(t.getSprite("enemy").y, 0, 5, "Expected Sprite enemy to have y-position 0 +-5");
  t.assert.withinRange(t.getSprite("enemy2").x, -5, 5, "Expected Sprite enemy2 to have x-position -5 +-5");
  t.assert.withinRange(t.getSprite("enemy2").y, -99, 5, "Expected Sprite enemy2 to have y-position -99 +-5");
  t.assert.withinRange(t.getSprite("coin2").x, 196, 5, "Expected Sprite coin2 to have x-position 196 +-5");
  t.assert.withinRange(t.getSprite("coin2").y, 4, 5, "Expected Sprite coin2 to have y-position 4 +-5");
  t.assert.equal(t.getStage().getVariable("coins", false).value, "1", "Expected coins to have value 1");
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
      seed: '1724672669808',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724672669808',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724672669808',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724672669808',
      type: 'standard',
  },
  {
      test: test4,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724672669808',
      type: 'standard',
  },
  {
      test: test5,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724672669808',
      type: 'standard',
  },
  {
      test: test6,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724672669808',
      type: 'standard',
  },
  {
      test: test7,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724672669808',
      type: 'standard',
  },
  {
      test: test8,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724672669808',
      type: 'standard',
  },
  {
      test: test9,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724672669808',
      type: 'standard',
  },
  {
      test: test10,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724672669808',
      type: 'standard',
  },
  {
      test: test11,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724672669808',
      type: 'standard',
  },
  {
      test: test12,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724672669808',
      type: 'standard',
  },
  {
      test: test13,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724672669808',
      type: 'standard',
  },
  {
      test: test14,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724672669808',
      type: 'standard',
  },
  {
      test: test15,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724672669808',
      type: 'standard',
  }
]
