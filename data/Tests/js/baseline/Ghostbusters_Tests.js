const test0 = async function (t) {
  await t.runForSteps(25);
  await t.runForSteps(1);
  await t.runForSteps(37);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ghost").x, 207, 5, "Expected Sprite Ghost to have x-position 207 +-5");
  t.assert.withinRange(t.getSprite("Ghost").y, 41, 5, "Expected Sprite Ghost to have y-position 41 +-5");
  t.assert.withinRange(t.getSprite("Bat").x, 172, 5, "Expected Sprite Bat to have x-position 172 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, -100, 5, "Expected Sprite Bat to have y-position -100 +-5");
  t.assert.withinRange(t.getSprite("Ghost3").x, -234, 5, "Expected Sprite Ghost3 to have x-position -234 +-5");
  t.assert.withinRange(t.getSprite("Ghost3").y, -49, 5, "Expected Sprite Ghost3 to have y-position -49 +-5");
  t.assert.withinRange(t.getSprite("Ghost").size, 94, 1, "Expected Sprite Ghost to have size 94 +-1");
  t.assert.withinRange(t.getSprite("Bat").size, 89, 1, "Expected Sprite Bat to have size 89 +-1");
  t.assert.equal(t.getStage().getVariable("time", false).value, "8", "Expected time to have value 8");
  t.assert.ok(t.getSprite("Ghost3").visible, "Expected Sprite Ghost3 to be visible");
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(25);
  await t.runForSteps(1);
  await t.runForSteps(75);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ghost").x, -119, 5, "Expected Sprite Ghost to have x-position -119 +-5");
  t.assert.withinRange(t.getSprite("Ghost").y, 31, 5, "Expected Sprite Ghost to have y-position 31 +-5");
  t.assert.withinRange(t.getSprite("Bat").x, -9, 5, "Expected Sprite Bat to have x-position -9 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, -2, 5, "Expected Sprite Bat to have y-position -2 +-5");
  t.assert.withinRange(t.getSprite("Ghost3").x, -234, 5, "Expected Sprite Ghost3 to have x-position -234 +-5");
  t.assert.withinRange(t.getSprite("Ghost3").y, -49, 5, "Expected Sprite Ghost3 to have y-position -49 +-5");
  t.assert.withinRange(t.getSprite("Ghost").size, 94, 1, "Expected Sprite Ghost to have size 94 +-1");
  t.assert.withinRange(t.getSprite("Bat").size, 89, 1, "Expected Sprite Bat to have size 89 +-1");
  t.assert.withinRange(t.getSprite("Ghost3").size, 182, 1, "Expected Sprite Ghost3 to have size 182 +-1");
  t.assert.equal(t.getStage().getVariable("time", false).value, "7", "Expected time to have value 7");
  t.assert.ok(t.getSprite("Ghost").visible, "Expected Sprite Ghost to be visible");
  t.assert.ok(t.getSprite("Bat").visible, "Expected Sprite Bat to be visible");
  await t.runForSteps(65);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ghost").x, -182, 5, "Expected Sprite Ghost to have x-position -182 +-5");
  t.assert.withinRange(t.getSprite("Ghost").y, -41, 5, "Expected Sprite Ghost to have y-position -41 +-5");
  t.assert.withinRange(t.getSprite("Bat").x, 146, 5, "Expected Sprite Bat to have x-position 146 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 86, 5, "Expected Sprite Bat to have y-position 86 +-5");
  t.assert.withinRange(t.getSprite("Ghost3").x, -48, 5, "Expected Sprite Ghost3 to have x-position -48 +-5");
  t.assert.withinRange(t.getSprite("Ghost3").y, 81, 5, "Expected Sprite Ghost3 to have y-position 81 +-5");
  t.assert.withinRange(t.getSprite("Ghost").size, 56, 1, "Expected Sprite Ghost to have size 56 +-1");
  t.assert.withinRange(t.getSprite("Bat").size, 90, 1, "Expected Sprite Bat to have size 90 +-1");
  t.assert.withinRange(t.getSprite("Ghost3").size, 130, 1, "Expected Sprite Ghost3 to have size 130 +-1");
  t.assert.equal(t.getStage().getVariable("time", false).value, "5", "Expected time to have value 5");
  await t.runForSteps(88);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ghost").x, 103, 5, "Expected Sprite Ghost to have x-position 103 +-5");
  t.assert.withinRange(t.getSprite("Ghost").y, 162, 5, "Expected Sprite Ghost to have y-position 162 +-5");
  t.assert.withinRange(t.getSprite("Bat").x, -37, 5, "Expected Sprite Bat to have x-position -37 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, -93, 5, "Expected Sprite Bat to have y-position -93 +-5");
  t.assert.withinRange(t.getSprite("Ghost3").x, 148, 5, "Expected Sprite Ghost3 to have x-position 148 +-5");
  t.assert.withinRange(t.getSprite("Ghost3").y, -46, 5, "Expected Sprite Ghost3 to have y-position -46 +-5");
  t.assert.withinRange(t.getSprite("Ghost").size, 66, 1, "Expected Sprite Ghost to have size 66 +-1");
  t.assert.withinRange(t.getSprite("Bat").size, 66, 1, "Expected Sprite Bat to have size 66 +-1");
  t.assert.withinRange(t.getSprite("Ghost3").size, 152, 1, "Expected Sprite Ghost3 to have size 152 +-1");
  t.assert.equal(t.getStage().getVariable("time", false).value, "2", "Expected time to have value 2");
  await t.runForSteps(63);
  await t.runForSteps(1);
  t.assert.withinRange(t.getSprite("Ghost").x, 237, 5, "Expected Sprite Ghost to have x-position 237 +-5");
  t.assert.withinRange(t.getSprite("Ghost").y, -125, 5, "Expected Sprite Ghost to have y-position -125 +-5");
  t.assert.withinRange(t.getSprite("Bat").x, 216, 5, "Expected Sprite Bat to have x-position 216 +-5");
  t.assert.withinRange(t.getSprite("Bat").y, 173, 5, "Expected Sprite Bat to have y-position 173 +-5");
  t.assert.withinRange(t.getSprite("Ghost3").x, 146, 5, "Expected Sprite Ghost3 to have x-position 146 +-5");
  t.assert.withinRange(t.getSprite("Ghost3").y, 161, 5, "Expected Sprite Ghost3 to have y-position 161 +-5");
  t.assert.withinRange(t.getSprite("Ghost").size, 74, 1, "Expected Sprite Ghost to have size 74 +-1");
  t.assert.withinRange(t.getSprite("Bat").size, 72, 1, "Expected Sprite Bat to have size 72 +-1");
  t.assert.withinRange(t.getSprite("Ghost3").size, 173, 1, "Expected Sprite Ghost3 to have size 173 +-1");
  t.assert.equal(t.getStage().getVariable("time", false).value, "0", "Expected time to have value 0");
  t.end();
}
const test2 = async function (t) {
  await t.runForSteps(25);
  await t.runForSteps(1);
  t.clickSprite('Ghost', 1);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().getVariable("score", false).value, "1", "Expected score to have value 1");
  t.end();
}
const test3 = async function (t) {
  await t.runForSteps(25);
  await t.runForSteps(1);
  t.clickSprite('Bat', 1);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().getVariable("score", false).value, "1", "Expected score to have value 1");
  t.end();
}
const test4 = async function (t) {
  await t.runForSteps(25);
  await t.runForSteps(1);
  t.clickSprite('Ghost3', 1);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().getVariable("score", false).value, "1", "Expected score to have value 1");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724934689273',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724934689273',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724934689273',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724934689273',
      type: 'standard',
  },
  {
      test: test4,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724934689273',
      type: 'standard',
  }
]
