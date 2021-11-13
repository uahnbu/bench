const {
  setModel,
  addTest,
  addBenchmark,
  randInt,
  randStr
} = require('../ground');

module.exports = {
  opening: 'STRING REPETITION',
  candidates: {
    'Repeat': (word, times) => word.repeat(times),
    'Custom Loop': (word, times) => repeat(word, times),
  },
  buildTest() {
    setModel('word', 'times');
    addTest({
      word: randStr(50) + ',',
      times: randInt(10, 20)
    });
    addBenchmark({
      word: randStr(1000),
      times: randInt(1000, 2000)
    });
  }
};

function repeat(base, times) {
  let str = '', tmp = base, left = 0, right = 0;
  while (times !== 0) {
    if (times & 1) {
      for (let i = left; i < right; i++) { tmp += tmp }
      str += tmp, left = right;
    }
    ++right, times >>= 1;
  }
  return str;
}