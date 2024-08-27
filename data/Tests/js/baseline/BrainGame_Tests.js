const test0 = async function (t) {
  t.clickSprite('Play', 1);
  await t.runForSteps(1);
  t.typeText('Hello');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Giga").currentCostume, 3, "Expected Sprite Giga to have costume 3");
  t.assert.equal(t.getSprite("Result").currentCostume, 1, "Expected Sprite Result to have costume 1");
  t.assert.equal(t.getSprite("Result").effects.ghost, 96, "Expected effect ghost of Sprite Result to be 96");
  t.assert.not(t.getSprite("Giga").sayText, "Expected Sprite Giga not to say anything");
  t.assert.ok(t.getSprite("Result").visible, "Expected Sprite Result to be visible");
  await t.runForSteps(88);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Giga").currentCostume, 0, "Expected Sprite Giga to have costume 0");
  t.assert.equal(t.getSprite("Result").effects.ghost, 100, "Expected effect ghost of Sprite Result to be 100");
  t.assert.equal(t.getSprite("Giga").sayText, "6 x 9", "Expected Sprite Giga to say 6 x 9");
  t.assert.equal(t.getStage().getVariable("number 1", false).value, "6", "Expected number 1 to have value 6");
  t.assert.equal(t.getStage().getVariable("number 2", false).value, "9", "Expected number 2 to have value 9");
  t.assert.equal(t.getStage().getVariable("time", false).value, "28", "Expected time to have value 28");
  t.assert.not(t.getSprite("Result").visible, "Expected Sprite Result not to be visible");
  t.end();
}
const test1 = async function (t) {
  t.clickSprite('Play', 1);
  await t.runForSteps(1);
  t.typeText('Hello');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Giga").currentCostume, 3, "Expected Sprite Giga to have costume 3");
  t.assert.equal(t.getSprite("Result").currentCostume, 1, "Expected Sprite Result to have costume 1");
  t.assert.equal(t.getSprite("Result").effects.ghost, 96, "Expected effect ghost of Sprite Result to be 96");
  t.assert.not(t.getSprite("Giga").sayText, "Expected Sprite Giga not to say anything");
  t.assert.ok(t.getSprite("Result").visible, "Expected Sprite Result to be visible");
  t.mouseMove(-8, -7);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Giga").currentCostume, 0, "Expected Sprite Giga to have costume 0");
  t.assert.equal(t.getSprite("Result").effects.ghost, 92, "Expected effect ghost of Sprite Result to be 92");
  t.assert.equal(t.getSprite("Giga").sayText, "6 x 9", "Expected Sprite Giga to say 6 x 9");
  t.assert.equal(t.getStage().getVariable("number 1", false).value, "6", "Expected number 1 to have value 6");
  t.assert.equal(t.getStage().getVariable("number 2", false).value, "9", "Expected number 2 to have value 9");
  t.typeText('jTu');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Giga").currentCostume, 3, "Expected Sprite Giga to have costume 3");
  t.assert.equal(t.getSprite("Result").effects.ghost, 96, "Expected effect ghost of Sprite Result to be 96");
  t.assert.not(t.getSprite("Giga").sayText, "Expected Sprite Giga not to say anything");
  t.mouseMove(238, -176);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Giga").currentCostume, 0, "Expected Sprite Giga to have costume 0");
  t.assert.equal(t.getSprite("Play").effects.fisheye, 0, "Expected effect fisheye of Sprite Play to be 0");
  t.assert.equal(t.getSprite("Result").effects.ghost, 92, "Expected effect ghost of Sprite Result to be 92");
  t.assert.equal(t.getSprite("Giga").sayText, "10 x 11", "Expected Sprite Giga to say 10 x 11");
  t.assert.equal(t.getStage().getVariable("number 1", false).value, "10", "Expected number 1 to have value 10");
  t.assert.equal(t.getStage().getVariable("number 2", false).value, "11", "Expected number 2 to have value 11");
  t.typeText('10');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Giga").currentCostume, 3, "Expected Sprite Giga to have costume 3");
  t.assert.equal(t.getSprite("Result").effects.ghost, 96, "Expected effect ghost of Sprite Result to be 96");
  t.assert.not(t.getSprite("Giga").sayText, "Expected Sprite Giga not to say anything");
  t.mouseMove(-1, 0);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Giga").currentCostume, 0, "Expected Sprite Giga to have costume 0");
  t.assert.equal(t.getSprite("Play").effects.fisheye, 30, "Expected effect fisheye of Sprite Play to be 30");
  t.assert.equal(t.getSprite("Result").effects.ghost, 92, "Expected effect ghost of Sprite Result to be 92");
  t.assert.equal(t.getSprite("Giga").sayText, "5 x 6", "Expected Sprite Giga to say 5 x 6");
  t.assert.equal(t.getStage().getVariable("number 1", false).value, "5", "Expected number 1 to have value 5");
  t.assert.equal(t.getStage().getVariable("number 2", false).value, "6", "Expected number 2 to have value 6");
  t.typeText('Hello');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Giga").currentCostume, 3, "Expected Sprite Giga to have costume 3");
  t.assert.equal(t.getSprite("Result").effects.ghost, 96, "Expected effect ghost of Sprite Result to be 96");
  t.assert.not(t.getSprite("Giga").sayText, "Expected Sprite Giga not to say anything");
  await t.runForSteps(15);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Giga").currentCostume, 0, "Expected Sprite Giga to have costume 0");
  t.assert.equal(t.getSprite("Result").effects.ghost, 32, "Expected effect ghost of Sprite Result to be 32");
  t.assert.equal(t.getSprite("Giga").sayText, "11 x 2", "Expected Sprite Giga to say 11 x 2");
  t.assert.equal(t.getStage().getVariable("number 1", false).value, "11", "Expected number 1 to have value 11");
  t.assert.equal(t.getStage().getVariable("number 2", false).value, "2", "Expected number 2 to have value 2");
  t.typeText('-175');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Giga").currentCostume, 3, "Expected Sprite Giga to have costume 3");
  t.assert.equal(t.getSprite("Result").effects.ghost, 96, "Expected effect ghost of Sprite Result to be 96");
  t.assert.not(t.getSprite("Giga").sayText, "Expected Sprite Giga not to say anything");
  await t.runForSteps(27);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Giga").currentCostume, 0, "Expected Sprite Giga to have costume 0");
  t.assert.equal(t.getSprite("Result").effects.ghost, 0, "Expected effect ghost of Sprite Result to be 0");
  t.assert.equal(t.getSprite("Giga").sayText, "8 x 12", "Expected Sprite Giga to say 8 x 12");
  t.assert.equal(t.getStage().getVariable("number 1", false).value, "8", "Expected number 1 to have value 8");
  t.assert.equal(t.getStage().getVariable("number 2", false).value, "12", "Expected number 2 to have value 12");
  t.assert.equal(t.getStage().getVariable("time", false).value, "29", "Expected time to have value 29");
  t.typeText('-199');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Giga").currentCostume, 3, "Expected Sprite Giga to have costume 3");
  t.assert.equal(t.getSprite("Result").effects.ghost, 96, "Expected effect ghost of Sprite Result to be 96");
  t.assert.not(t.getSprite("Giga").sayText, "Expected Sprite Giga not to say anything");
  await t.runForSteps(88);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Giga").currentCostume, 0, "Expected Sprite Giga to have costume 0");
  t.assert.equal(t.getSprite("Result").effects.ghost, 100, "Expected effect ghost of Sprite Result to be 100");
  t.assert.equal(t.getSprite("Giga").sayText, "2 x 5", "Expected Sprite Giga to say 2 x 5");
  t.assert.equal(t.getStage().getVariable("number 1", false).value, "2", "Expected number 1 to have value 2");
  t.assert.equal(t.getStage().getVariable("number 2", false).value, "5", "Expected number 2 to have value 5");
  t.assert.equal(t.getStage().getVariable("time", false).value, "27", "Expected time to have value 27");
  t.assert.not(t.getSprite("Result").visible, "Expected Sprite Result not to be visible");
  t.typeText('10');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Giga").currentCostume, 2, "Expected Sprite Giga to have costume 2");
  t.assert.equal(t.getSprite("Result").currentCostume, 0, "Expected Sprite Result to have costume 0");
  t.assert.equal(t.getSprite("Result").effects.ghost, 96, "Expected effect ghost of Sprite Result to be 96");
  t.assert.not(t.getSprite("Giga").sayText, "Expected Sprite Giga not to say anything");
  t.assert.equal(t.getStage().getVariable("score", false).value, "1", "Expected score to have value 1");
  t.assert.ok(t.getSprite("Result").visible, "Expected Sprite Result to be visible");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724670957265',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724670957265',
      type: 'standard',
  }
]
