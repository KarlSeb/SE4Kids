const test0 = async function (t) {
  t.keyPress('space', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  await t.runForSteps(57);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Soccer Ball").direction, -90, 1, "Expected Sprite Soccer Ball to face in direction -90 +-1");
  t.assert.withinRange(t.getSprite("Soccer Ball").x, 177.5, 5, "Expected Sprite Soccer Ball to have x-position 177.5 +-5");
  t.assert.withinRange(t.getSprite("Soccer Ball").y, -140, 5, "Expected Sprite Soccer Ball to have y-position -140 +-5");
  t.assert.equal(t.getStage().getVariable("score", false).value, "1", "Expected score to have value 1");
  t.assert.equal(t.getStage().getVariable("timer", false).value, "29", "Expected timer to have value 29");
  t.keyPress('left arrow', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Soccer Ball").x, 157.5, 5, "Expected Sprite Soccer Ball to have x-position 157.5 +-5");
  t.assert.withinRange(t.getSprite("Soccer Ball").y, -140, 5, "Expected Sprite Soccer Ball to have y-position -140 +-5");
  t.assert.withinRange(t.getSprite("Goalie").x, -10, 5, "Expected Sprite Goalie to have x-position -10 +-5");
  t.assert.withinRange(t.getSprite("Goalie").y, 50, 5, "Expected Sprite Goalie to have y-position 50 +-5");
  t.assert.equal(t.getStage().getVariable("timer", false).value, "28", "Expected timer to have value 28");
  await t.runForSteps(49);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Soccer Ball").direction, 90, 1, "Expected Sprite Soccer Ball to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Soccer Ball").x, -79.5, 5, "Expected Sprite Soccer Ball to have x-position -79.5 +-5");
  t.assert.withinRange(t.getSprite("Soccer Ball").y, -140, 5, "Expected Sprite Soccer Ball to have y-position -140 +-5");
  t.assert.equal(t.getStage().getVariable("timer", false).value, "27", "Expected timer to have value 27");
  t.keyPress('space', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Soccer Ball").x, -79.5, 5, "Expected Sprite Soccer Ball to have x-position -79.5 +-5");
  t.assert.withinRange(t.getSprite("Soccer Ball").y, -120, 5, "Expected Sprite Soccer Ball to have y-position -120 +-5");
  await t.runForSteps(79);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Soccer Ball").direction, -90, 1, "Expected Sprite Soccer Ball to face in direction -90 +-1");
  t.assert.withinRange(t.getSprite("Soccer Ball").x, -42.5, 5, "Expected Sprite Soccer Ball to have x-position -42.5 +-5");
  t.assert.withinRange(t.getSprite("Soccer Ball").y, -140, 5, "Expected Sprite Soccer Ball to have y-position -140 +-5");
  t.assert.equal(t.getStage().getVariable("timer", false).value, "24", "Expected timer to have value 24");
  t.end();
}
const test1 = async function (t) {
  t.dragSprite('Soccer Ball', -55.53835140335162, 19.45699392448075, null);
  await t.runForSteps(1);
  await t.runForSteps(480);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Soccer Ball").direction, -90, 1, "Expected Sprite Soccer Ball to face in direction -90 +-1");
  t.assert.withinRange(t.getSprite("Soccer Ball").x, -3, 5, "Expected Sprite Soccer Ball to have x-position -3 +-5");
  t.assert.withinRange(t.getSprite("Soccer Ball").y, -140, 5, "Expected Sprite Soccer Ball to have y-position -140 +-5");
  t.assert.equal(t.getStage().getVariable("timer", false).value, "15", "Expected timer to have value 15");
  await t.runForSteps(480);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Soccer Ball").direction, 90, 1, "Expected Sprite Soccer Ball to face in direction 90 +-1");
  t.assert.withinRange(t.getSprite("Soccer Ball").x, 190.5, 5, "Expected Sprite Soccer Ball to have x-position 190.5 +-5");
  t.assert.withinRange(t.getSprite("Soccer Ball").y, -140, 5, "Expected Sprite Soccer Ball to have y-position -140 +-5");
  t.assert.equal(t.getStage().getVariable("timer", false).value, "0", "Expected timer to have value 0");
  await t.runForSteps(100);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Soccer Ball").direction, -90, 1, "Expected Sprite Soccer Ball to face in direction -90 +-1");
  t.assert.withinRange(t.getSprite("Soccer Ball").x, 97, 5, "Expected Sprite Soccer Ball to have x-position 97 +-5");
  t.assert.withinRange(t.getSprite("Soccer Ball").y, -140, 5, "Expected Sprite Soccer Ball to have y-position -140 +-5");
  t.end();
}
const test2 = async function (t) {
  t.keyPress('space', 1);
  await t.runForSteps(1);
  await t.runForSteps(1);
  t.keyPress('right arrow', 3);
  await t.runForSteps(3);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Soccer Ball").x, -200, 5, "Expected Sprite Soccer Ball to have x-position -200 +-5");
  t.assert.withinRange(t.getSprite("Soccer Ball").y, -80, 5, "Expected Sprite Soccer Ball to have y-position -80 +-5");
  t.assert.withinRange(t.getSprite("Goalie").x, 10, 5, "Expected Sprite Goalie to have x-position 10 +-5");
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
      seed: '1724933285166',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724933285166',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724933285166',
      type: 'standard',
  }
]
