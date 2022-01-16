const {
  Arr,
  setModel,
  addTest,
  addBenchmark,
  randInt,
  randFloat
} = require('../ground');
const TimSort = require('timsort');

module.exports = {
  opening: 'SORT FLOAT NUMBERS',
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
    'QuickSortOld': nums => {
      const clone = [...nums];
      quickSortOld(clone, (a, b) => b - a);
      return clone;
    },
    'QuickSort': nums => {
      const clone = [...nums];
      quickSortMid(clone, (a, b) => b - a);
      return clone;
    },
    'QuickSortMed3': nums => {
      const clone = [...nums];
      quickSortMed3(clone, (a, b) => b - a);
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
    addTest(Arr(100, _ => randInt(-100, 100)));
    addTest(Arr(100, _ => randFloat(-100, 100)));
    // Ascending
    addTest(dummySort(Arr(10, _ => randInt(-1e5, 1e5)), (a, b) => a - b));
    // Descending saw
    const test4 = Arr(100, _ => randInt(-100, 100));
    for (let i = 0, t; i < test4.length - 1;) {
      const right = Math.min(test4.length - 1, i + randInt(1, 10));
      dummySort(test4, (a, b) => b - a, i, i = right);
    }
    addTest(test4);

    addBenchmark(Arr(50, _ => randInt(-1e3, 1e3)));
    addBenchmark(Arr(1e3, _ => randInt(-1e3, 1e3)));
    addBenchmark(Arr(1e6, _ => randFloat(-1e15, 1e15)));
    // Ascending
    addBenchmark(dummySort(Arr(1e6, _ => randInt(-1e5, 1e5)), (a, b) => a - b));
    // Descending saw
    const test8 = Arr(1e6, _ => randFloat(-1e15, 1e15));
    for (let i = 0, t; i < test4.length - 1;) {
      const right = Math.min(test8.length - 1, i + randInt(1e3, 1e5));
      dummySort(test8, (a, b) => b - a, i, i = right);
    }
    addBenchmark(test8);
  }
};

// To prevent altering the performance of other functions.
function dummySort(arr, cp, lo = 0, hi = ~-arr.length) {
  if (arr.length < 2) return;
  let pivot = lo + hi >> 1, tmp = arr[pivot];
  arr[pivot] = arr[hi], arr[hi] = tmp, pivot = lo;
  for (let i = lo; i < hi; ++i) {
    if (cp(arr[i], arr[hi]) >= 0) continue;
    i !== pivot && (tmp = arr[i], arr[i] = arr[pivot], arr[pivot] = tmp);
    ++pivot;
  }
  tmp = arr[pivot], arr[pivot] = arr[hi], arr[hi] = tmp;
  lo < ~-pivot && dummySort(arr, cp, lo, ~-pivot);
  -~pivot < hi && dummySort(arr, cp, -~pivot, hi);
  return arr;
}

// QuickSort is unstable.
function quickSortOld(arr, cp, lo = 0, hi = ~-arr.length) {
  if (arr.length < 2) return;
  const pivot = arr[lo + hi >> 1];
  let i = lo, j = hi, tmp;
  while (i <= j) {
    while (cp(arr[i], pivot) < 0) ++i;
    while (cp(arr[j], pivot) > 0) --j;
    i <= j && (tmp = arr[i], arr[i++] = arr[j], arr[j--] = tmp);
  }
  lo < ~-i && quickSortOld(arr, cp, lo, ~-i);
  i < hi && quickSortOld(arr, cp, i, hi);
}

function quickSortMid(arr, cp, lo = 0, hi = ~-arr.length) {
  if (arr.length < 2) return;
  let pivot = lo + hi >> 1, tmp = arr[pivot];
  arr[pivot] = arr[hi], arr[hi] = tmp, pivot = lo;
  for (let i = lo; i < hi; ++i) {
    if (cp(arr[i], arr[hi]) >= 0) continue;
    i !== pivot && (tmp = arr[i], arr[i] = arr[pivot], arr[pivot] = tmp);
    ++pivot;
  }
  tmp = arr[pivot], arr[pivot] = arr[hi], arr[hi] = tmp;
  lo < ~-pivot && quickSortMid(arr, cp, lo, ~-pivot);
  -~pivot < hi && quickSortMid(arr, cp, -~pivot, hi);
}

function quickSortMed3(arr, cp, lo = 0, hi = ~-arr.length) {
  if (arr.length < 2) return;
  let pivot = lo + hi >> 1;
  if (-~lo === hi) pivot = lo; else {
    const lm = cp(arr[lo], arr[pivot]) < 0;
    const mh = cp(arr[pivot], arr[hi]) < 0;
    if (lm && !mh) {
      if (cp(arr[lo], arr[hi]) < 0) pivot = hi;
      else pivot = lo;
    } else if (!lm && mh) {
      if (cp(arr[lo], arr[hi]) < 0) pivot = lo;
      else pivot = hi;
    }
  }
  let tmp = arr[pivot];
  arr[pivot] = arr[hi], arr[hi] = tmp, pivot = lo;
  for (let i = lo; i < hi; ++i) {
    if (cp(arr[i], arr[hi]) >= 0) continue;
    i !== pivot && (tmp = arr[i], arr[i] = arr[pivot], arr[pivot] = tmp);
    ++pivot;
  }
  tmp = arr[pivot], arr[pivot] = arr[hi], arr[hi] = tmp;
  lo < ~-pivot && quickSortMed3(arr, cp, lo, ~-pivot);
  -~pivot < hi && quickSortMed3(arr, cp, -~pivot, hi);
}

function introSort(
  arr, cp, lo = 0, hi = ~-arr.length,
  lim = Math.log(arr.length) / Math.LN2 << 1
) {
  if (hi - lo <= 16) return insertionSort(arr, cp, lo, hi);
  if (lim === 0) return heapSort(arr, cp, lo, hi);
  const pivot = arr[lo + hi >> 1];
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