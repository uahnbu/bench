const { setModel, addTest, addBenchmark } = require('../ground');
const { GPU } = require('gpu.js');

const gpu = new GPU();
const kernel = gpu.createKernel(sum, {
  output: [1],
  tactic: 'precision'
});

module.exports = {
  opening: 'GPU',
  candidates: {
    'Normal': num => sum([num]),
    'GPU': num => kernel([num])[0]
  },
  buildTest() {
    setModel();
    addTest(10000);
    addBenchmark(100000);
    addBenchmark(1000000);
    addBenchmark(100000000);
  }
};

function sum(x) {
  let sum = 0;
  for (let i = 1; i < x[0]; i++) {
    sum += i;
  }
  return sum;
}