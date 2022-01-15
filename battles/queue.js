const { Arr, setModel, addTest, addBenchmark, randInt } = require('../ground');

module.exports = {
  opening: 'SHIFT POP VS. QUEUE',
  candidates: {
    'Shift Pop': arr => {
      const a = [];
      for (let i = 0; i < arr.length; i++) {
        arr[i][0] && (a[a.length] = arr[i][1]);
        !arr[i][0] && a.shift();
      }
      // console.log(a);
      return a.length;
    },
    'Queue': arr => {
      const a = new Queue;
      for (let i = 0; i < arr.length; i++) {
        arr[i][0] && a.enqueue(arr[i][1]);
        !arr[i][0] && a.dequeue();
      }
      // console.log(a.list.slice(-a.size));
      return a.size;
    }
  },
  buildTest() {
    setModel();
    addTest(Arr(10, _ => [Math.random() < .5, randInt(-100, 100)]));
    addBenchmark(Arr(1e4, _ => [Math.random() < .5, randInt(-1e15, 1e15)]));
    addBenchmark(Arr(1e5, _ => [Math.random() < .5, randInt(-1e15, 1e15)]));
    addBenchmark(Arr(1e5, _ => [Math.random() < .5, randInt(-1e5, 1e5)]));
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
  this.dequeue = () => index < list.length
    ? list[index++]
    : (list.length = index = 0, null);
  this.enqueue = function(item) {
    return list[list.length] = item, this;
  };
  this.pop = function() {
    if (index >= list.length) return null;
    const val = list[list.length - 1];
    --list.length;
    return val;
  };
};