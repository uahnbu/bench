const {
  opening,
  candidates,
  preprocessor,
  buildTest
} = require('./battles/' + process.argv[2]);
const {log, runTests, runBenchmarks } = require('./ground');

log('<' + '='.repeat(16) + opening + '='.repeat(16) + '>', 32);
buildTest();
runTests(candidates, preprocessor);
runBenchmarks(candidates, preprocessor);