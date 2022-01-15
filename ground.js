const Benchmark = require('benchmark');

const model = [];
const tests = [];
const benchmarks = [];

function setModel(...args) {
  model.length = tests.length = 0;
  model.push(...args);
}

function Arr(len, fn) { return Array(len).fill().map(fn) }
function addTest(data) { addCase(tests, data) }
function addBenchmark(data) { addCase(benchmarks, data) }
function getTests() { return tests }
function getBenchmarks() { return benchmarks }

function addCase(set, data) {
  set.push(model.length ? model.map(key => data[key]) : [data]);
}

function randFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randStr(len) {
  const charCodes = Array(len).fill().map(() => randInt(97, 122));
  return String.fromCharCode(...charCodes);
}

function log(message, colorCode) {
  console.log('\x1b[' + colorCode + 'm' + message + '\x1b[39m');
}

function runTests(candidates, makeup) {
  tests.forEach(test => runTest(candidates, makeup, test));
}

function runBenchmarks(candidates, makeup) {
  benchmarks.forEach(benchmark => {
    runBenchmark(candidates, makeup, benchmark);
  });
}

function runTest(candidates, makeup, args) {
  log('Test case ' + (runTest.index = 1 + ~~runTest.index) + ':', 35);
  console.log(makeup?.(args) || args);
  runCheck(candidates, args, true);
}

function runBenchmark(candidates, makeup, args) {
  const suite = new Benchmark.Suite;
  log('Benchmark case:', 35);
  console.log(makeup?.(args) || args);
  log('Checking outputs...', 35);
  runCheck(candidates, args, false);
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

function runCheck(candidates, args, verbose) {
  const results = Object.keys(candidates).map((id, result) => {
    verbose && log('Candidate: ' + id, 33);
    try {
      result = candidates[id](...args);
      verbose && console.log(result);
    } catch(e) { console.error(e) }
    return { id, result };
  });
  const groups = results.reduce((groups, { id, result }) => {
    return (groups[result] ||= []).push(id), groups;
  }, {});
  const groupLen = Object.keys(groups).length;
  if (groupLen !== 1) {
    const memberList = Object.values(groups).map(group => group.join(', '));
    const groupList = memberList.join(' | ');
    log(`Outputs are different (${groupLen} groups: ${groupList})`, 31);
  } else log('Outputs are identical', 32);
}

module.exports = {
  Arr,
  setModel,
  addTest,
  getTests,
  addBenchmark,
  getBenchmarks,
  runTests,
  runBenchmarks,
  log,
  randFloat,
  randInt,
  randStr
};