const {
  setModel,
  addTest,
  addBenchmark,
  randInt,
  randFloat
} = require('../ground');
const TimSort = require('timsort');

module.exports = {
  opening: 'TIMSORT VS. DEFAULT SORT',
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
    'Custom TimSort': nums => {
      const clone = [...nums];
      timSort(clone);
      return clone;
    },
    'QuickSort': nums => {
      const clone = [...nums];
      quickSort(clone);
      return clone;
    }
  },
  buildTest() {
    setModel();
    addTest(Array(10).fill().map(() => randInt(-100, 100)));
    addBenchmark(Array(1e4).fill().map(() => randInt(-1e5, 1e5)));
    addBenchmark(Array(1e6).fill().map(() => randFloat(-1e15, 1e15)));
    addBenchmark(
      Array(1e6).fill()
        .map(() => randInt(-1e5, 1e5))
        .sort((a, b) => b - a)
    );
  }
};

// QuickSort is unstable.
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

const MIN_MERGE = 32;
 
function minRunLength(n) {
  // Becomes 1 if any 1 bits are shifted off
  let r = 0;
  while (n >= MIN_MERGE) r |= n & 1, n >>= 1;
  return n + r;
}
 
// This function sorts array from left index to
// to right index which is of size atmost RUN
function insertionSort(arr, left, right) {
  for(let i = left + 1; i <= right; ++i) {
    let curr = arr[i], j = i - 1;
    while (j >= left && arr[j] > curr) arr[j + 1] = arr[j--];
    arr[j + 1] = curr;
  }
}
 
// Merge function merges the sorted runs
function merge(arr, lo, mid, hi) {
  // Original array is broken in two parts, left and right array
  const lenLeft = mid - lo + 1, lenRight = hi - mid;
  const left = Array(lenLeft), right = Array(lenRight);
  for (let i = 0; i < lenLeft; ++i) left[i] = arr[lo + i];
  for (let i = 0; i < lenRight; ++i) right[i] = arr[mid + 1 + i];
  let i = 0, j = 0, k = lo;
  // After comparing, we merge those two array in larger sub array
  while (i < lenLeft && j < lenRight) {
    if (left[i] <= right[j]) arr[k] = left[i++];
    else arr[k] = right[j++];
    k++;
  }
  // Copy remaining elements of left, if any
  while (i < lenLeft) arr[k++] = left[i++];
  // Copy remaining element of right, if any
  while (j < lenRight) arr[k++] = right[j++];
}
 
// Iterative Timsort function to sort the
// array[0...n-1]. (similar to merge sort)
function timSort(arr) {
  const len = arr.length, minRun = minRunLength(MIN_MERGE);
  // Sort individual subarrays of size RUN
  for (let i = 0; i < len; i += minRun) {
    insertionSort(arr, i, Math.min(i + MIN_MERGE - 1, len - 1));
  }
  // Start merging from size RUN (or 32). It will
  // merge to form size 64, then 128, 256 and so on
  for (let size = minRun; size < len; size <<= 1) {
    // Pick starting point of left sub array. We are going to merge
    // arr[left..left+size-1] and arr[left+size, left+2*size-1].
    // After every merge, we increase left by 2*size.
    for (let left = 0; left < len; left += size << 1) {
      // Find ending point of left sub array mid+1
      // is starting point of right sub array.
      let mid = left + size - 1;
      let right = Math.min(left + 2 * size - 1, len - 1);
      // Merge sub array arr[left.....mid] & arr[mid+1....right].
      mid < right && merge(arr, left, mid, right);
    }
  }
}