const { setModel, addBenchmark, randInt } = require('../ground');

module.exports = {
  opening: 'UNDEFINED',
  candidates: {
    'Typeof': val => val === 'undefined',
    'Void': val => val === void 0 ,
  },
  buildTest() {
    setModel();
    addBenchmark('' + randInt(0, 1e15));
  }
}