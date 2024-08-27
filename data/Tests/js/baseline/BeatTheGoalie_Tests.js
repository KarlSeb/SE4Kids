const test0 = async function (t) {
  await t.runForSteps(33);
  await t.runForSteps(1);
  t.keyPress('space', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Soccer Ball").x, 140, 5, "Expected Sprite Soccer Ball to have x-position 140 +-5");
  t.assert.withinRange(t.getSprite("Soccer Ball").y, -100, 5, "Expected Sprite Soccer Ball to have y-position -100 +-5");
  t.keyPress('right arrow', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Soccer Ball").x, 140, 5, "Expected Sprite Soccer Ball to have x-position 140 +-5");
  t.assert.withinRange(t.getSprite("Soccer Ball").y, -70, 5, "Expected Sprite Soccer Ball to have y-position -70 +-5");
  t.assert.withinRange(t.getSprite("Goalie").x, 10, 5, "Expected Sprite Goalie to have x-position 10 +-5");
  t.assert.withinRange(t.getSprite("Goalie").y, 50, 5, "Expected Sprite Goalie to have y-position 50 +-5");
  t.dragSprite('Soccer Ball', 6.637557417496021, -12.654879408201218, null);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Soccer Ball").x, 6.637557417496021, 5, "Expected Sprite Soccer Ball to have x-position 6.637557417496021 +-5");
  t.assert.withinRange(t.getSprite("Soccer Ball").y, -2.654879408201218, 5, "Expected Sprite Soccer Ball to have y-position -2.654879408201218 +-5");
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Soccer Ball").x, 6.637557417496021, 5, "Expected Sprite Soccer Ball to have x-position 6.637557417496021 +-5");
  t.assert.withinRange(t.getSprite("Soccer Ball").y, 47.34512059179878, 5, "Expected Sprite Soccer Ball to have y-position 47.34512059179878 +-5");
  t.assert.withinRange(t.getSprite("Goalie").x, 20, 5, "Expected Sprite Goalie to have x-position 20 +-5");
  t.assert.withinRange(t.getSprite("Goalie").y, 50, 5, "Expected Sprite Goalie to have y-position 50 +-5");
  t.keyPress('space', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Soccer Ball").x, -200, 5, "Expected Sprite Soccer Ball to have x-position -200 +-5");
  t.assert.withinRange(t.getSprite("Soccer Ball").y, -120, 5, "Expected Sprite Soccer Ball to have y-position -120 +-5");
  t.assert.equal(t.getSprite("Goalie").sayText, "Save!", "Expected Sprite Goalie to say Save!");
  t.end();
}
const test1 = async function (t) {
  t.keyPress('right arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.keyPress('space', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Soccer Ball").x, -180, 5, "Expected Sprite Soccer Ball to have x-position -180 +-5");
  t.assert.withinRange(t.getSprite("Soccer Ball").y, -110, 5, "Expected Sprite Soccer Ball to have y-position -110 +-5");
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Soccer Ball").x, -180, 5, "Expected Sprite Soccer Ball to have x-position -180 +-5");
  t.assert.withinRange(t.getSprite("Soccer Ball").y, -60, 5, "Expected Sprite Soccer Ball to have y-position -60 +-5");
  t.assert.withinRange(t.getSprite("Goalie").x, 20, 5, "Expected Sprite Goalie to have x-position 20 +-5");
  t.assert.withinRange(t.getSprite("Goalie").y, 50, 5, "Expected Sprite Goalie to have y-position 50 +-5");
  t.keyPress('space', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Soccer Ball").x, -180, 5, "Expected Sprite Soccer Ball to have x-position -180 +-5");
  t.assert.withinRange(t.getSprite("Soccer Ball").y, -30, 5, "Expected Sprite Soccer Ball to have y-position -30 +-5");
  t.keyPress('space', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Soccer Ball").x, -180, 5, "Expected Sprite Soccer Ball to have x-position -180 +-5");
  t.assert.withinRange(t.getSprite("Soccer Ball").y, 10, 5, "Expected Sprite Soccer Ball to have y-position 10 +-5");
  t.assert.equal(t.getSprite("Goalie").sayText, "Goal!", "Expected Sprite Goalie to say Goal!");
  t.assert.equal(t.getStage().getVariable("score", false).value, "1", "Expected score to have value 1");
  t.end();
}
const test2 = async function (t) {
  t.keyPress('right arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Soccer Ball").x, -130, 5, "Expected Sprite Soccer Ball to have x-position -130 +-5");
  t.assert.withinRange(t.getSprite("Soccer Ball").y, -140, 5, "Expected Sprite Soccer Ball to have y-position -140 +-5");
  t.assert.withinRange(t.getSprite("Goalie").x, 20, 5, "Expected Sprite Goalie to have x-position 20 +-5");
  t.assert.withinRange(t.getSprite("Goalie").y, 50, 5, "Expected Sprite Goalie to have y-position 50 +-5");
  t.keyPress('space', 2);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Soccer Ball").x, -130, 5, "Expected Sprite Soccer Ball to have x-position -130 +-5");
  t.assert.withinRange(t.getSprite("Soccer Ball").y, -110, 5, "Expected Sprite Soccer Ball to have y-position -110 +-5");
  t.keyPress('right arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Soccer Ball").x, -130, 5, "Expected Sprite Soccer Ball to have x-position -130 +-5");
  t.assert.withinRange(t.getSprite("Soccer Ball").y, -60, 5, "Expected Sprite Soccer Ball to have y-position -60 +-5");
  t.assert.withinRange(t.getSprite("Goalie").x, 30, 5, "Expected Sprite Goalie to have x-position 30 +-5");
  t.assert.withinRange(t.getSprite("Goalie").y, 50, 5, "Expected Sprite Goalie to have y-position 50 +-5");
  await t.runForSteps(480);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Soccer Ball").direction, -90, 1, "Expected Sprite Soccer Ball to face in direction -90 +-1");
  t.assert.withinRange(t.getSprite("Soccer Ball").x, 87, 5, "Expected Sprite Soccer Ball to have x-position 87 +-5");
  t.assert.withinRange(t.getSprite("Soccer Ball").y, -140, 5, "Expected Sprite Soccer Ball to have y-position -140 +-5");
  t.assert.equal(t.getStage().getVariable("score", false).value, "1", "Expected score to have value 1");
  t.assert.equal(t.getStage().getVariable("timer", false).value, "14", "Expected timer to have value 14");
  await t.runForSteps(480);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Soccer Ball").direction, 90, 1, "Expected Sprite Soccer Ball to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Soccer Ball").x, 90.5, 5, "Expected Sprite Soccer Ball to have x-position 90.5 +-5");
  t.assert.withinRange(t.getSprite("Soccer Ball").y, -140, 5, "Expected Sprite Soccer Ball to have y-position -140 +-5");
  t.assert.equal(t.getStage().getVariable("timer", false).value, "0", "Expected timer to have value 0");
  t.end();
}
const test3 = async function (t) {
  await t.runForSteps(33);
  await t.runForSteps(1);
  t.keyPress('left arrow', 4);
  await t.runForSteps(4);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Soccer Ball").x, 190, 5, "Expected Sprite Soccer Ball to have x-position 190 +-5");
  t.assert.withinRange(t.getSprite("Soccer Ball").y, -140, 5, "Expected Sprite Soccer Ball to have y-position -140 +-5");
  t.assert.withinRange(t.getSprite("Goalie").x, -10, 5, "Expected Sprite Goalie to have x-position -10 +-5");
  t.assert.withinRange(t.getSprite("Goalie").y, 50, 5, "Expected Sprite Goalie to have y-position 50 +-5");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724670607172',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724670607172',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724670607172',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724670607172',
      type: 'standard',
  }
]
