const test0 = async function (t) {
  t.clickSprite('red', 1);
  await t.runForSteps(1);
  await t.runForSteps(87);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Ballerina").currentCostume, 3, "Expected Sprite Ballerina to have costume 3");
  t.assert.equal(t.getStage().getList("sequence", false).value.length, 2, "Expected list sequence to have length 2");
  t.assert.equal(t.getSprite("Ballerina").sayText, "High Score! What is your name?", "Expected Sprite Ballerina to say High Score! What is your name?");
  t.assert.equal(t.getStage().getVariable("high score", false).value, "3", "Expected high score to have value 3");
  t.end();
}
const test1 = async function (t) {
  t.clickSprite('red', 1);
  await t.runForSteps(1);
  t.clickSprite('green', 1);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().getList("sequence", false).value.length, 0, "Expected list sequence to have length 0");
  t.clickSprite('green', 1);
  await t.runForSteps(1);
  await t.runForSteps(74);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Ballerina").sayText, "Expected Sprite Ballerina not to say anything");
  t.assert.equal(t.getStage().getVariable("high score", false).value, "3", "Expected high score to have value 3");
  t.end();
}
const test2 = async function (t) {
  await t.runForSteps(88);
  await t.runForSteps(1);
  t.clickSprite('green', 1);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().getList("sequence", false).value.length, 1, "Expected list sequence to have length 1");
  t.clickSprite('red', 1);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().getList("sequence", false).value.length, 0, "Expected list sequence to have length 0");
  t.end();
}
const test3 = async function (t) {
  t.clickSprite('blue', 1);
  await t.runForSteps(1);
  await t.runForSteps(70);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Ballerina").currentCostume, 3, "Expected Sprite Ballerina to have costume 3");
  t.assert.equal(t.getStage().getList("sequence", false).value.length, 2, "Expected list sequence to have length 2");
  t.assert.equal(t.getSprite("Ballerina").sayText, "High Score! What is your name?", "Expected Sprite Ballerina to say High Score! What is your name?");
  t.assert.equal(t.getStage().getVariable("high score", false).value, "3", "Expected high score to have value 3");
  t.clickSprite('green', 1);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().getList("sequence", false).value.length, 1, "Expected list sequence to have length 1");
  t.clickSprite('green', 1);
  await t.runForSteps(1);
  t.clickSprite('blue', 1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Ballerina").sayText, "Game over!", "Expected Sprite Ballerina to say Game over!");
  t.clickSprite('yellow', 1);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().getList("sequence", false).value.length, 0, "Expected list sequence to have length 0");
  t.clickSprite('blue', 1);
  await t.runForSteps(1);
  t.clickSprite('blue', 1);
  await t.runForSteps(1);
  t.clickSprite('red', 1);
  await t.runForSteps(1);
  t.clickSprite('red', 1);
  await t.runForSteps(1);
  t.clickSprite('green', 1);
  await t.runForSteps(1);
  t.clickSprite('green', 1);
  await t.runForSteps(1);
  t.clickSprite('green', 1);
  await t.runForSteps(1);
  t.clickSprite('blue', 1);
  await t.runForSteps(1);
  t.clickSprite('red', 1);
  await t.runForSteps(1);
  await t.runForSteps(2);
  await t.runForSteps(1);
  t.clickSprite('green', 1);
  await t.runForSteps(1);
  t.clickSprite('yellow', 1);
  await t.runForSteps(1);
  await t.runForSteps(54);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Ballerina").sayText, "Expected Sprite Ballerina not to say anything");
  t.end();
}
const test4 = async function (t) {
  t.clickSprite('red', 1);
  await t.runForSteps(1);
  await t.runForSteps(87);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Ballerina").currentCostume, 3, "Expected Sprite Ballerina to have costume 3");
  t.assert.equal(t.getStage().getList("sequence", false).value.length, 2, "Expected list sequence to have length 2");
  t.assert.equal(t.getSprite("Ballerina").sayText, "High Score! What is your name?", "Expected Sprite Ballerina to say High Score! What is your name?");
  t.assert.equal(t.getStage().getVariable("high score", false).value, "3", "Expected high score to have value 3");
  t.clickSprite('green', 1);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().getList("sequence", false).value.length, 1, "Expected list sequence to have length 1");
  t.clickSprite('yellow', 1);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().getList("sequence", false).value.length, 0, "Expected list sequence to have length 0");
  t.end();
}
const test5 = async function (t) {
  await t.runForSteps(88);
  await t.runForSteps(1);
  await t.runForSteps(75);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Ballerina").currentCostume, 3, "Expected Sprite Ballerina to have costume 3");
  t.assert.equal(t.getStage().getList("sequence", false).value.length, 3, "Expected list sequence to have length 3");
  await t.runForSteps(63);
  await t.runForSteps(1);
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724934924119',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724934924119',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724934924119',
      type: 'standard',
  },
  {
      test: test3,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724934924119',
      type: 'standard',
  },
  {
      test: test4,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724934924119',
      type: 'standard',
  },
  {
      test: test5,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724934924119',
      type: 'standard',
  }
]
