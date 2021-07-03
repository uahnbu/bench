const { setModel, addTest, randNum, randStr } = require('../ground');

module.exports = {
  opening: 'SHIFT POP VS. QUEUE',
  candidates: {
    'Shift Pop': arr => {
      const a = [];
      for (let i = 0; i < arr.length; i++) {
        arr[i][0] && (a[a.length] = arr[i][1]);
        !arr[i][0] && a.shift();
      }
      return a.length;
    },
    'Queue': arr => {
      const a = new Queue;
      for (let i = 0; i < arr.length; i++) {
        arr[i][0] && a.enqueue(arr[i][1]);
        !arr[i][0] && a.dequeue();
      }
      return a.size;
    }
  },
  buildTest() {
    setModel();
    addTest(Array(100).fill().map(() => [
      Math.random() < .5,
      Math.random() * Number.MAX_SAFE_INTEGER | 0
    ]));
    addTest(Array(10000).fill().map(() => [
      Math.random() < .5,
      Math.random() * Number.MAX_SAFE_INTEGER | 0
    ]));
  }
};

function Queue(mylist = []) {
  const list = [...mylist];
  let index = 0;
  Object.defineProperties(this, {
    size: { get: () => list.length - index },
    first: { get: () => index < list.length ? list[index] : null },
    last: { get: () => index < list.length ? list[list.length - 1] : null },
    list: { get: () => list }
  });
  this.dequeue = () => index < list.length ? list[index++] : (list.length = index = 0, null);
  this.enqueue = function(item) {
    list[list.length] = item;
    return this;
  };
  this.pop = function() {
    if (index >= list.length) return null;
    const val = list[list.length - 1];
    --list.length;
    return val;
  };
};