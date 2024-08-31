const test0 = async function (t) {
  t.clickSprite('Computer', 1);
  await t.runForSteps(1);
  await t.runForSteps(31);
  await t.runForSteps(1);
  await t.runForSteps(16);
  await t.runForSteps(1);
  await t.runForSteps(55);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Computer").sayText, "Expected Sprite Computer not to say anything");
  await t.runForSteps(94);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Computer").sayText, "silently", "Expected Sprite Computer to say silently");
  await t.runForSteps(41);
  await t.runForSteps(1);
  await t.runForSteps(47);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Computer").sayText, "by the sea", "Expected Sprite Computer to say by the sea");
  await t.runForSteps(23);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Computer").sayText, "I feel happy", "Expected Sprite Computer to say I feel happy");
  t.end();
}
const test1 = async function (t) {
  t.clickSprite('Computer', 1);
  await t.runForSteps(1);
  t.clickSprite('Ada', 1);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Ada").sayText, "Hi, I'm Ada!", "Expected Sprite Ada to say Hi, I'm Ada!");
  await t.runForSteps(94);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Computer").direction, 85, 1, "Expected Sprite Computer to face in direction 85 +-1");
  t.assert.equal(t.getSprite("Ada").sayText, "What's your name?", "Expected Sprite Ada to say What's your name?");
  t.assert.not(t.getSprite("Computer").sayText, "Expected Sprite Computer not to say anything");
  t.typeText('nFX');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Ada").sayText, "Hi nFX", "Expected Sprite Ada to say Hi nFX");
  await t.runForSteps(41);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Computer").direction, 90, 1, "Expected Sprite Computer to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Computer").sayText, "I burp", "Expected Sprite Computer to say I burp");
  await t.runForSteps(47);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Ada").sayText, "Click the computer to generate a poem.", "Expected Sprite Ada to say Click the computer to generate a poem.");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724935195580',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724935195580',
      type: 'standard',
  }
]
