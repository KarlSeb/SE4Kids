const test0 = async function (t) {
  await t.runForSteps(15);
  await t.runForSteps(1);
  t.clickSprite('Play', 1);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.equal(t.getSprite("Giga").sayText, "2 x 10", "Expected Sprite Giga to say 2 x 10");
  t.assert.equal(t.getStage().getVariable("number 1", false).value, "2", "Expected number 1 to have value 2");
  t.assert.equal(t.getStage().getVariable("number 2", false).value, "10", "Expected number 2 to have value 10");
  t.assert.equal(t.getStage().getVariable("time", false).value, "30", "Expected time to have value 30");
  t.assert.ok(t.getSprite("Giga").visible, "Expected Sprite Giga to be visible");
  t.assert.not(t.getSprite("Play").visible, "Expected Sprite Play not to be visible");
  t.typeText('X1T');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Giga").currentCostume, 3, "Expected Sprite Giga to have costume 3");
  t.assert.equal(t.getSprite("Result").currentCostume, 1, "Expected Sprite Result to have costume 1");
  t.assert.equal(t.getSprite("Result").effects.ghost, 96, "Expected effect ghost of Sprite Result to be 96");
  t.assert.not(t.getSprite("Giga").sayText, "Expected Sprite Giga not to say anything");
  t.assert.ok(t.getSprite("Result").visible, "Expected Sprite Result to be visible");
  await t.runForSteps(43);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Giga").currentCostume, 0, "Expected Sprite Giga to have costume 0");
  t.assert.equal(t.getSprite("Result").effects.ghost, 20, "Expected effect ghost of Sprite Result to be 20");
  t.assert.equal(t.getSprite("Giga").sayText, "9 x 5", "Expected Sprite Giga to say 9 x 5");
  t.assert.equal(t.getStage().getVariable("number 1", false).value, "9", "Expected number 1 to have value 9");
  t.assert.equal(t.getStage().getVariable("number 2", false).value, "5", "Expected number 2 to have value 5");
  t.assert.equal(t.getStage().getVariable("time", false).value, "29", "Expected time to have value 29");
  t.end();
}
const test1 = async function (t) {
  await t.runForSteps(15);
  await t.runForSteps(1);
  t.clickSprite('Play', 1);
  await t.runForSteps(1);
  t.assert.equal(t.getStage().currentCostume, 1, "Expected backdrop 1");
  t.assert.equal(t.getSprite("Giga").sayText, "2 x 10", "Expected Sprite Giga to say 2 x 10");
  t.assert.equal(t.getStage().getVariable("number 1", false).value, "2", "Expected number 1 to have value 2");
  t.assert.equal(t.getStage().getVariable("number 2", false).value, "10", "Expected number 2 to have value 10");
  t.assert.equal(t.getStage().getVariable("time", false).value, "30", "Expected time to have value 30");
  t.assert.ok(t.getSprite("Giga").visible, "Expected Sprite Giga to be visible");
  t.assert.not(t.getSprite("Play").visible, "Expected Sprite Play not to be visible");
  t.typeText('X1T');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Giga").currentCostume, 3, "Expected Sprite Giga to have costume 3");
  t.assert.equal(t.getSprite("Result").currentCostume, 1, "Expected Sprite Result to have costume 1");
  t.assert.equal(t.getSprite("Result").effects.ghost, 96, "Expected effect ghost of Sprite Result to be 96");
  t.assert.not(t.getSprite("Giga").sayText, "Expected Sprite Giga not to say anything");
  t.assert.ok(t.getSprite("Result").visible, "Expected Sprite Result to be visible");
  await t.runForSteps(90);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Giga").currentCostume, 0, "Expected Sprite Giga to have costume 0");
  t.assert.equal(t.getSprite("Result").effects.ghost, 100, "Expected effect ghost of Sprite Result to be 100");
  t.assert.equal(t.getSprite("Giga").sayText, "9 x 5", "Expected Sprite Giga to say 9 x 5");
  t.assert.equal(t.getStage().getVariable("number 1", false).value, "9", "Expected number 1 to have value 9");
  t.assert.equal(t.getStage().getVariable("number 2", false).value, "5", "Expected number 2 to have value 5");
  t.assert.equal(t.getStage().getVariable("time", false).value, "28", "Expected time to have value 28");
  t.assert.not(t.getSprite("Result").visible, "Expected Sprite Result not to be visible");
  t.end();
}
const test2 = async function (t) {
  await t.runForSteps(15);
  await t.runForSteps(1);
  t.mouseMove(-83, -158);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Play").effects.fisheye, 0, "Expected effect fisheye of Sprite Play to be 0");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724933444307',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724933444307',
      type: 'standard',
  },
  {
      test: test2,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724933444307',
      type: 'standard',
  }
]
