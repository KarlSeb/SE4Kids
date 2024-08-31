const test0 = async function (t) {
  await t.runForSteps(93);
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
      seed: '1724934863708',
      type: 'standard',
  }
]
