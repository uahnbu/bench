const { setModel, addTest, addBenchmark, randInt } = require('../ground');

module.exports = {
  opening: 'REDUCE vs. LOOP',
  candidates: {
    'For index': arr => {
      let sum = {};
      for (let i = 1; i < arr.length; ++i) {
        sum[arr[i]] = null;
      }
      return sum;
    },
    'For of': arr => {
      let sum = {};
      for (const e of arr) sum[e] = null;
      return sum;
    },
    'Reduce': arr => {
      return arr.reduce((a, c) => (a[c] = null, a), {});
    }
  },
  buildTest() {
    setModel();
    addTest(Array(10).fill().map(() => randInt(0, 100)));
    addBenchmark(Array(1e3).fill().map(() => randInt(0, 1e3)));
    addBenchmark(Array(1e4).fill().map(() => randInt(0, 1e4)));
    addBenchmark(Array(1e5).fill().map(() => randInt(0, 1e5)));
    addBenchmark(Array(1e5).fill().map(() => randInt(0, 1e3)));
    addBenchmark(Array(1e5).fill().map(() => randInt(0, 1e9)));
  }
};