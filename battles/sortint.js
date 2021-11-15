const { setModel, addTest, addBenchmark, randInt } = require('../ground');
const TimSort = require('timsort');

module.exports = {
  opening: 'SORT BATTLE FOR 32-BIT INTEGERS',
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
      quickSort(clone);
      return clone;
    },
    'RadixSort': nums => {
      const clone = [...nums];
      radixSort(clone);
      return clone;
    }
  },
  buildTest() {
    setModel();
    addTest(Array(10).fill().map(() => randInt(0, 1e5)));
    addBenchmark(Array(1e6).fill().map(() => randInt(0, 2e9)));
  }
};

function quickSort(arr, left = 0, right = ~-arr.length) {
  if (arr.length <= 1) return;
  let pivot = arr[right + left >> 1];
  let i = left, j = right, tmp;
  while (i <= j) {
    while (arr[i] < pivot) i++; while (arr[j] > pivot) j--;
    i <= j && (tmp = arr[i], arr[i++] = arr[j], arr[j--] = tmp);
  }
  left < ~-i && quickSort(arr, left, ~-i);
  i < right && quickSort(arr, i, right);
}

function radixSort(arr) {
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
  return arr;
}