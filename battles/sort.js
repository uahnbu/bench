const {
  setModel,
  addTest,
  addBenchmark,
  randInt,
  randFloat
} = require('../ground');
const TimSort = require('timsort');

module.exports = {
  opening: 'SORT BATTLE FOR 64-BIT SIGNED INTEGERS',
  candidates: {
    'Default': nums => {
      const clone = [...nums];
      clone.sort((a, b) => b - a);
      return clone;
    },
    'TimSort': nums => {
      const clone = [...nums];
      TimSort.sort(clone, (a, b) => b - a);
      return clone;
    },
    'QuickSort': nums => {
      const clone = [...nums];
      quickSort(clone, (a, b) => b - a);
      return clone;
    },
    'IntroSort': nums => {
      const clone = [...nums];
      introSort(clone, (a, b) => b - a);
      return clone;
    }
  },
  buildTest() {
    setModel();
    addTest(Array(100).fill().map(() => randInt(-100, 100)));
    addTest(
      Array(10).fill()
        .map(() => randInt(-1e5, 1e5))
        .sort((a, b) => a - b)
    );
    addTest(Array(1e6).fill().map(() => randInt(-1e6, 1e6)));
    addBenchmark(Array(50).fill().map(() => randInt(-1e3, 1e3)));
    addBenchmark(Array(1e6).fill().map(() => randFloat(-1e15, 1e15)));
    addBenchmark(
      Array(1e6).fill()
        .map(() => randInt(-1e5, 1e5))
        .sort((a, b) => a - b)
    );
  }
};

// QuickSort is unstable.
function quickSort(arr, cp, lo = 0, hi = ~-arr.length) {
  if (arr.length < 2) return;
  const pivot = arr[hi + lo >> 1];
  let i = lo, j = hi, tmp;
  while (i <= j) {
    while (cp(arr[i], pivot) < 0) ++i;
    while (cp(arr[j], pivot) > 0) --j;
    i <= j && (tmp = arr[i], arr[i++] = arr[j], arr[j--] = tmp);
  }
  lo < ~-i && quickSort(arr, cp, lo, ~-i);
  i < hi && quickSort(arr, cp, i, hi);
}

function introSort(
  arr, cp, lo = 0, hi = ~-arr.length,
  lim = Math.log(arr.length) / Math.LN2 << 1
) {
  if (hi - lo <= 16) return insertionSort(arr, cp, lo, hi);
  if (lim === 0) return heapSort(arr, cp, lo, hi);
  const pivot = arr[hi + lo >> 1];
  let i = lo, j = hi, tmp;
  while (i <= j) {
    while (cp(arr[i], pivot) < 0) ++i;
    while (cp(arr[j], pivot) > 0) --j;
    i <= j && (tmp = arr[i], arr[i++] = arr[j], arr[j--] = tmp);
  }
  lo < ~-i && introSort(arr, cp, lo, ~-i, ~-lim);
  i < hi && introSort(arr, cp, i, hi, ~-lim);
}

function insertionSort(arr, cp, lo = 0, hi = ~-arr.length) {
  for(let i = lo; i <= hi; ++i) {
    let pivot = arr[i], j = i;
    while (j >= lo && cp(arr[~-j], pivot) > 0) arr[j] = arr[--j];
    arr[j] = pivot;
  }
}

function heapSort(arr, cp, lo = 0, hi = ~-arr.length) {
  const n = -~hi - lo;
  let start = ~-lo + (n >> 1), end = hi, tmp;
  while (start >= lo) heapify(arr, cp, start--, hi, lo);
  while (end > lo) {
    tmp = arr[end], arr[end] = arr[lo], arr[lo] = tmp;
    heapify(arr, cp, lo, --end, lo);
  }
}

function heapify(arr, cp, start, end, left) {
  let root = start;
  while (true) {
    const child = -~left + (root - left << 1);
    if (child > end) return;
    let swap = root;
    cp(arr[swap], arr[child]) < 0 && (swap = child);
    // rightChild = leftChild + 1;
    child < end && cp(arr[swap], arr[-~child]) < 0 && (swap = -~child);
    if (swap === root) return;
    let tmp = arr[root];
    arr[root] = arr[swap];
    arr[root = swap] = tmp;
  }
}