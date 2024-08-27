const test0 = async function (t) {
  t.clickSprite('Computer', 1);
  await t.runForSteps(1);
  await t.runForSteps(79);
  await t.runForSteps(1);
  t.assert.not(t.getSprite("Computer").sayText, "Expected Sprite Computer not to say anything");
  await t.runForSteps(34);
  await t.runForSteps(1);
  await t.runForSteps(90);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Computer").sayText, "endlessly", "Expected Sprite Computer to say endlessly");
  await t.runForSteps(64);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Computer").sayText, "by the tree", "Expected Sprite Computer to say by the tree");
  await t.runForSteps(62);
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
  await t.runForSteps(79);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Computer").direction, 85, 1, "Expected Sprite Computer to face in direction 85 +-1");
  t.assert.equal(t.getSprite("Ada").sayText, "What's your name?", "Expected Sprite Ada to say What's your name?");
  t.assert.not(t.getSprite("Computer").sayText, "Expected Sprite Computer not to say anything");
  t.typeText('10');
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Ada").sayText, "Hi 10", "Expected Sprite Ada to say Hi 10");
  await t.runForSteps(90);
  await t.runForSteps(1);
  t.assert.equal(t.getSprite("Computer").direction, 90, 1, "Expected Sprite Computer to face in direction 90 +-1");
  t.assert.equal(t.getSprite("Ada").sayText, "Click the computer to generate a poem.", "Expected Sprite Ada to say Click the computer to generate a poem.");
  t.assert.equal(t.getSprite("Computer").sayText, "I burp", "Expected Sprite Computer to say I burp");
  t.end();
}

module.exports = [
  {
      test: test0,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724674394041',
      type: 'standard',
  },
  {
      test: test1,
      name: 'Generated Test',
      description: '',
      categories: [],
      generationAlgorithm: 'mio',
      seed: '1724674394041',
      type: 'standard',
  }
]
