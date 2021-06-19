const Benchmark = require('benchmark');

const model = [];
const tests = [];

function setModel(...args) {
  model.length = tests.length = 0;
  model.push(...args);
}

function addTest(data) {
  tests.push(model.length ? model.map(key => data[key]) : [data]);
}

function getTests() { return tests }

function randNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randStr(len) {
  const charCodes = Array(len).fill().map(() => randNum(97, 122));
  return String.fromCharCode(...charCodes);
}

function log(message, colorCode) {
  console.log('\x1b[' + colorCode + 'm' + message + '\x1b[39m');
}

function runTest(candidates, preprocessor, ...args) {
  log('Test case ' + (runTest.index = 1 + ~~runTest.index) + ':', 35);
  console.log(preprocessor?.(args) || args);
  for (const id in candidates) {
    log('Candidate: ' + id, 33);
    try {
      console.log(candidates[id](...args));
    } catch(e) { console.error(e) }
  }
}

function runBenchmark(candidates, preprocessor, ...args) {
  const suite = new Benchmark.Suite;
  log('Benchmark case:', 35);
  console.log(preprocessor?.(args) || args);
  log('Benchmarking...', 35);
  for (const id in candidates) {
    suite.add(id, () => candidates[id](...args))
  }
  suite
    .on('cycle', e => console.log('' + e.target))
    .on('complete', function() {
      const fastest = this.filter('fastest').map('name');
      console.log('Fastest is ' + fastest);
    })
    .run();
}

module.exports = {
  setModel,
  addTest,
  getTests,
  runTest,
  runBenchmark,
  log,
  randNum,
  randStr
};