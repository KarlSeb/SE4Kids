const test0 = async function (t) {
  await t.runForSteps(49);
  await t.runForSteps(1);
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(49);
  await t.runForSteps(1);
  await t.runForSteps(44);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Bat").x, -50, 5, "Expected Sprite Bat to have x-position -50 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, -69, 5, "Expected Sprite Bat to have y-position -69 +-5");
  t.assert.withinRange(t.getSprite("Ghost3").x, -188, 5, "Expected Sprite Ghost3 to have x-position -188 +-5");
  t.assert.withinRange(t.getSprite("Ghost3").y, 42, 5, "Expected Sprite Ghost3 to have y-position 42 +-5");
  t.assert.withinRange(t.getSprite("Ghost").size, 91, 1, "Expected Sprite Ghost to have size 91 +-1");
  t.assert.withinRange(t.getSprite("Bat").size, 62, 1, "Expected Sprite Bat to have size 62 +-1");
  t.assert.withinRange(t.getSprite("Ghost3").size, 200, 1, "Expected Sprite Ghost3 to have size 200 +-1");
  t.assert.equal(t.getStage().getVariable("time", false).value, "7", "Expected time to have value 7");
  t.assert.not(t.getSprite("Ghost").visible, "Expected Sprite Ghost not to be visible");
  await t.runForSteps(41);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ghost").x, 136, 5, "Expected Sprite Ghost to have x-position 136 +-5");
  t.assert.withinRange(t.getSprite("Ghost").y, 142, 5, "Expected Sprite Ghost to have y-position 142 +-5");
  t.assert.withinRange(t.getSprite("Bat").size, 50, 1, "Expected Sprite Bat to have size 50 +-1");
  t.assert.withinRange(t.getSprite("Ghost3").size, 170, 1, "Expected Sprite Ghost3 to have size 170 +-1");
  t.assert.equal(t.getStage().getVariable("time", false).value, "6", "Expected time to have value 6");
  t.assert.ok(t.getSprite("Ghost").visible, "Expected Sprite Ghost to be visible");
  t.assert.not(t.getSprite("Bat").visible, "Expected Sprite Bat not to be visible");
  t.assert.not(t.getSprite("Ghost3").visible, "Expected Sprite Ghost3 not to be visible");
  await t.runForSteps(19);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Bat").x, 126, 5, "Expected Sprite Bat to have x-position 126 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 170, 5, "Expected Sprite Bat to have y-position 170 +-5");
  t.assert.withinRange(t.getSprite("Ghost3").x, 54, 5, "Expected Sprite Ghost3 to have x-position 54 +-5");
  t.assert.withinRange(t.getSprite("Ghost3").y, -104, 5, "Expected Sprite Ghost3 to have y-position -104 +-5");
  t.assert.withinRange(t.getSprite("Ghost").size, 50, 1, "Expected Sprite Ghost to have size 50 +-1");
  t.assert.equal(t.getStage().getVariable("time", false).value, "5", "Expected time to have value 5");
  t.assert.not(t.getSprite("Ghost").visible, "Expected Sprite Ghost not to be visible");
  t.assert.ok(t.getSprite("Bat").visible, "Expected Sprite Bat to be visible");
  t.assert.ok(t.getSprite("Ghost3").visible, "Expected Sprite Ghost3 to be visible");
  await t.runForSteps(2);
  await t.runForSteps(1);
  await t.runForSteps(70);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ghost").x, -176, 5, "Expected Sprite Ghost to have x-position -176 +-5");
  t.assert.withinRange(t.getSprite("Ghost").y, -114, 5, "Expected Sprite Ghost to have y-position -114 +-5");
  t.assert.withinRange(t.getSprite("Bat").size, 59, 1, "Expected Sprite Bat to have size 59 +-1");
  t.assert.withinRange(t.getSprite("Ghost3").size, 77, 1, "Expected Sprite Ghost3 to have size 77 +-1");
  t.assert.equal(t.getStage().getVariable("time", false).value, "3", "Expected time to have value 3");
  t.assert.ok(t.getSprite("Ghost").visible, "Expected Sprite Ghost to be visible");
  t.assert.not(t.getSprite("Bat").visible, "Expected Sprite Bat not to be visible");
  t.assert.not(t.getSprite("Ghost3").visible, "Expected Sprite Ghost3 not to be visible");
  await t.runForSteps(79);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ghost").x, -27, 5, "Expected Sprite Ghost to have x-position -27 +-5");
  t.assert.withinRange(t.getSprite("Ghost").y, -156, 5, "Expected Sprite Ghost to have y-position -156 +-5");
  t.assert.withinRange(t.getSprite("Bat").x, 234, 5, "Expected Sprite Bat to have x-position 234 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 160, 5, "Expected Sprite Bat to have y-position 160 +-5");
  t.assert.withinRange(t.getSprite("Ghost3").x, -8, 5, "Expected Sprite Ghost3 to have x-position -8 +-5");
  t.assert.withinRange(t.getSprite("Ghost3").y, -21, 5, "Expected Sprite Ghost3 to have y-position -21 +-5");
  t.assert.withinRange(t.getSprite("Ghost").size, 72, 1, "Expected Sprite Ghost to have size 72 +-1");
  t.assert.withinRange(t.getSprite("Bat").size, 94, 1, "Expected Sprite Bat to have size 94 +-1");
  t.assert.withinRange(t.getSprite("Ghost3").size, 144, 1, "Expected Sprite Ghost3 to have size 144 +-1");
  t.assert.equal(t.getStage().getVariable("time", false).value, "0", "Expected time to have value 0");
  t.assert.not(t.getSprite("Ghost").visible, "Expected Sprite Ghost not to be visible");
  t.assert.ok(t.getSprite("Bat").visible, "Expected Sprite Bat to be visible");
  t.end();
}
const test2 = async function (t) {
  await t.runForSteps(49);
  await t.runForSteps(1);
  t.clickSprite('Ghost', 1);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().getVariable("score", false).value, "1", "Expected score to have value 1");
  t.assert.not(t.getSprite("Ghost").visible, "Expected Sprite Ghost not to be visible");
  t.end();
}
const test3 = async function (t) {
  await t.runForSteps(49);
  await t.runForSteps(1);
  t.clickSprite('Bat', 1);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().getVariable("score", false).value, "1", "Expected score to have value 1");
  t.assert.not(t.getSprite("Bat").visible, "Expected Sprite Bat not to be visible");
  t.end();
}
const test4 = async function (t) {
  await t.runForSteps(49);
  await t.runForSteps(1);
  t.clickSprite('Ghost3', 1);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().getVariable("score", false).value, "1", "Expected score to have value 1");
  t.assert.not(t.getSprite("Ghost3").visible, "Expected Sprite Ghost3 not to be visible");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724673352641',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724673352641',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724673352641',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724673352641',
      type: 'standard',
  },
  {
      test: test4,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724673352641',
      type: 'standard',
  }
]
