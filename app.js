const {
  opening,
  candidates,
  preprocessor,
  buildTest
} = require('./battles/' + process.argv[2]);
const {log, getTests, runTest, runBenchmark } = require('./ground');

log('<' + '='.repeat(16) + opening + '='.repeat(16) + '>', 32);
buildTest();
const tests = getTests();
tests.slice(0, -1).forEach(test => runTest(candidates, preprocessor, ...test));
runBenchmark(candidates, preprocessor, ...tests.slice(-1)[0]);