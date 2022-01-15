const { Arr, setModel, addTest, addBenchmark, randInt } = require('../ground');

module.exports = {
  opening: '15-POWERING',
  candidates: {
    'Native': nums => {
      const numBigs = nums.map(num => BigInt(num));
      const numStrings = nums.map(num => '' + num);
      return nums.map(num => num ** 15);
    },
    'BigInt': nums => {
      const numBigs = nums.map(num => BigInt(num));
      const numStrings = nums.map(num => '' + num);
      return numBigs.map(num => num ** 15n);
    },
    'Custom BigInt': nums => {
      const numBigs = nums.map(num => BigInt(num));
      const numStrings = nums.map(num => '' + num);
      return numBigs.map(num => pow15n(num));
    },
    'Custom Pow': nums => {
      const numBigs = nums.map(num => BigInt(num));
      const numStrings = nums.map(num => '' + num);
      return numStrings.map(num => pow(num, '15'));
    },
    'Custom Pow15': nums => {
      const numBigs = nums.map(num => BigInt(num));
      const numStrings = nums.map(num => '' + num);
      return numStrings.map(num => pow15(num));
    }
  },
  buildTest() {
    setModel();
    addTest([randInt(1e15, 1e20)]);
    addBenchmark(Arr(100, _ => randInt(1e9, 1e15)));
  }
}

function pow15n(a) {
  var a2 = a * a, a3 = a2 * a, a6 = a3 * a3;
  return a6 * a6 * a3;
}

function pow15(a) {
  var a2 = mul(a, a), a3 = mul(a2, a), a6 = mul(a3, a3);
  return mul(mul(a6, a6), a3);
}

function pow(a,b) {
  if (b === '0') return '1';
  var odds = '13579', n = 0, m = 0, s = '1', t = a;
  while (b !== '0') {
    if (odds.indexOf(b[b.length - 1]) > -1) {
      for (var i = m; i < n; i++) t = mul(t, t);
      s = mul(s, t); m = n;
    }
    n++; b = div(b, '2');
  }
  return s;
}

function add(a, b) {
  var s = '', r = 0, sum;
  if (a.length < b.length) a = a.padStart(b.length, '0');
  if (b.length < a.length) b = b.padStart(a.length, '0');
  for (var i = a.length - 1, sum; i !== -1; --i) {
    if ((sum = +a[i] + +b[i] + r) < 10) s = sum + s, r = 0;
    else s = sum % 10 + s, r = 1;
  }
  r === 1 && (s = '1' + s);
  return s;
}

function sub(a, b) {
  var s = '', r = 0;
  for (var i = a.length - 1, diff; i !== -1; --i) {
    if ((diff = a[i] - b[i] - r) < 0) s = diff + 10 + s, r = 1;
    else s = diff + s, r = 0;
  }
  return s;
}

function mul(a, b) {
  var s = '0', r = 0, p = 0;
  for (var i = a.length - 1, disc, prod; i !== -1; --i) {
    disc = '';
    for (var j = b.length - 1; j !== -1; --j) {
      if ((prod = a[i] * b[j] + r) < 10) disc = prod + disc, r = 0;
      else disc = prod % 10 + disc, r = prod / 10 | 0;
    }
    r !== 0 && (disc = r + disc, r = 0);
    disc = disc + '0'.repeat(p++);
    s = add(disc, s);
  }
  return s;
}

function div(a, b) {
  if (cmp(a, b) === 2) return '0';
  var s = '', i, j;
  for (var i = 0, disc = ''; i < a.length; ++i) {
    (disc += a[i])[0] === '0' && disc.length > 1 && (disc = disc.substr(1));
    if (cmp(disc, b) !== 2) {
      for (j = 0; j <= 9; j++) if (cmp(disc, mul('' + j,b)) !== 1) break;
      cmp(disc, mul('' + j, b)) === 2 && --j;
      s += j, disc = sub(disc, mul('' + j, b));
    } else if (s !== '') s += '0';
  }
  return s;
}

function cmp(a, b) {
  if (a === b) return 0;
  a.length < b.length && (a = a.padStart(b.length, '0'));
  b.length < a.length && (b = b.padStart(a.length, '0'));
  if (a > b) return 1;
  return 2;
}