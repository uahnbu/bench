const { setModel, addTest } = require('../ground');

module.exports = {
  opening: 'UNDEFINED',
  candidates: {
    'Typeof': val => val === 'undefined',
    'Void': val => val === void 0 ,
  },
  buildTest() {
    setModel();
    addTest('' + Math.floor(Math.random() * 1e16));
  }
}