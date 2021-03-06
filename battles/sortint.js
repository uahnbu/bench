const { Arr, setModel, addTest, addBenchmark, randInt } = require('../ground');
const TimSort = require('timsort');

module.exports = {
  opening: 'SORT 32-BIT UNSIGNED INTEGERS',
  candidates: {
    'Default': nums => {
      const clone = [...nums];
      clone.sort((a, b) => a - b);
      return clone;
    },
    'TimSort': nums => {
      const clone = [...nums];
      TimSort.sort(clone, (a, b) => a - b);
      return clone;
    },
    'QuickSort': nums => {
      const clone = [...nums];
      quickSort(clone, (a, b) => a - b);
      return clone;
    },
    'RadixSort': nums => {
      const clone = [...nums];
      radixSort(clone);
      return clone;
    },
    'CountingSort': nums => {
      const clone = [...nums];
      countingSort(clone);
      return clone;
    }
  },
  buildTest() {
    setModel();
    addTest(Arr(10, _ => randInt(0, 1e5)));
    addTest(Arr(10, _ => randInt(-1e5, 1e5)));
    addBenchmark(Arr(100, _ => randInt(-1e3, 1e3)));
    addBenchmark(Arr(1e3, _ => randInt(0, 1e3)));
    addBenchmark(Arr(1e3, _ => randInt(-1e3, -1)));
    addBenchmark(Arr(1e3, _ => randInt(-1e3, 1e3)));
    addBenchmark(Arr(1e5, _ => randInt(-1e5, 1e5)));
    addBenchmark(Arr(1e6, _ => randInt(-2e9, 2e9)));
  }
};

function quickSort(arr, cp, lo = 0, hi = ~-arr.length) {
  if (arr.length < 2) return;
  let pivot = lo + hi >> 1, tmp = arr[pivot];
  arr[pivot] = arr[hi], arr[hi] = tmp, pivot = lo;
  for (let i = lo; i < hi; ++i) {
    if (cp(arr[i], arr[hi]) >= 0) continue;
    i !== pivot && (tmp = arr[i], arr[i] = arr[pivot], arr[pivot] = tmp);
    ++pivot;
  }
  tmp = arr[pivot], arr[pivot] = arr[hi], arr[hi] = tmp;
  lo < ~-pivot && quickSort(arr, cp, lo, ~-pivot);
  -~pivot < hi && quickSort(arr, cp, -~pivot, hi);
}

function radixSort(arr, desc) {
  const count = Array(256);
  let curr = Array(arr.length), prev = arr;
  for (let shift = 0; shift < 32; shift += 8) {
    for (let i = 0; i < 256; ++i) count[i] = 0;
    for (let i = 0; i < prev.length; ++i) ++count[prev[i] >> shift & 255];
    for (let i = 1; i < 256; ++i) count[i] += count[~-i];
    for (let i = ~-prev.length; i !== -1; --i) {
      curr[--count[prev[i] >> shift & 255]] = prev[i];
    }
    [prev, curr] = [curr, prev];
  }
  if (arr[0] < 0 || arr[~-arr.length] >= 0) {
    return desc && reverse(arr, 0, ~-arr.length);
  }
  let lo = 0, hi = ~-arr.length, mid;
  while (lo < hi) {
    if (arr[mid = lo + hi >> 1] >= 0) lo = -~mid;
    else hi = mid, arr[~-mid] >= 0 && (lo = mid);
  }
  reverse(arr, 0, ~-lo),
  reverse(arr, lo, ~-arr.length);
  !desc && reverse(arr, 0, ~-arr.length);
  function reverse(arr, lo, hi) {
    while (lo < hi) {
      const tmp = arr[lo];
      arr[lo++] = arr[hi],
      arr[hi--] = tmp;
    }
  }
}

function countingSort(arr) {
  const counter = arr.reduce((c, e) => (c[e] = (c[e] || 0) + 1, c), []);
  let i = 0;
  for (const e in counter) {
    const num = +e;
    do {} while (arr[i++] = num, --counter[e] !== 0);
  }
}