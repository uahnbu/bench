const { setModel, addTest, randNum, randStr } = require('../ground');
const YAML = require('yaml');
const JSYAML = require('js-yaml');
const JSON5 = require('json5');
const JSON6 = require('json-6');
const JSOX = require('jsox');

module.exports = {
  opening: 'JSON VS. YAML',
  candidates: {
    'Native JSON': obj => JSON.stringify(obj, null, 2),
    'JSON5': obj => JSON5.stringify(obj, null, 2),
    'JSON6': obj => JSON6.stringify(obj, null, 2),
    'JSOX': obj => JSOX.stringify(obj, null, 2),
    'YAML': obj => YAML.stringify(obj),
    'JSYAML': obj => JSYAML.dump(obj),
    'Custom YAML': obj => yamlify(obj)
  },
  preprocessor: args => JSOX.stringify(args),
  buildTest() {
    setModel();
    const test1 = [
      {
        a: null,
        b: undefined,
        c: ['[]{}:,-', 123n, 'me, myself and I', 'you and me'],
        d: Array(7),
      },
      'e',
      '\'\'e\'\'',
      'f: NaN',
      { f: NaN },
      '-',
      [' ', {}],
    ];
    test1.push({ loop: test1 }, test1);
    addTest(test1);
    addTest(
      Math.random() < .5
        ? Array(3).fill().map(() => generate(3, 3))
        : generate(3, 5)
    );
    addTest(
      Math.random() < .5
        ? Array(9).fill().map(() => generate(4, 4))
        : generate(5, 9)
    );
  }
};

function yamlify(node, tab = 2) {
  return (function dfs(node, lvl, feed, seen) {
    let gap = '';
    feed && (gap = ' ');
    if (seen.has(node)) return gap + '{circular}';
    if (isSpecialString(node)) return gap + '\'' + node + '\'';
    if (node === void 0) return gap + 'null';
    if (isLeaf(node)) return gap + node;
    seen.add(node);
    if (Array.isArray(node)) {
      if (node.length === 0) return gap + '[]';
      let isPetiole = true;
      for (let i = 0; i < node.length; ++i) {
        !isLeaf(node[i]) && (isPetiole = false);
      }
      let str = '', key = ', ' + str;
      !isPetiole && (
        str = '- ', key = '\n' + ' '.repeat(tab * lvl) + str,
        feed && (str = key)
      );
      str += dfs(node[0], ++lvl, false, seen);
      for (let i = 1; i < node.length; i++) {
        str += key + dfs(node[i], lvl, false, seen);
      }
      if (isPetiole) return gap + '[' + str + ']';
      return str;
    }
    let keys = 0;
    for (const prop in node) { node[prop] !== void 0 && ++keys }
    if (keys === 0) return gap + '{}';
    const key = '\n' + ' '.repeat(tab * lvl++);
    let str = '';
    for (const prop in node) {
      if (node[prop] === void 0) continue;
      (feed || !feed && str !== '') && (str += key);
      str += prop + ':' + dfs(node[prop], lvl, true, seen);
    }
    return str;    
  })(node, 0, false, new Set);
  function isSpecialString(node) {
    return typeof node === 'string' && /[[\]{}:',-]/.test(node);
  }
  function isLeaf(node) {
    return typeof node === 'boolean' ||
      typeof node === 'string' ||
      typeof node === 'number' ||
      typeof node === 'bigint' ||
      node === void 0 || node === null;
  }
}

function generate(size, depth, lvl = 0, obj = {}) {
  if (lvl === depth) return obj;
  for (let i = 0; i < size; i++) {
    obj[randStr(5)] = rand(1e5, 1e9, 9, size, depth, lvl);
  }
  return obj;
}

function rand(min, max, len, size, depth, lvl) {
  switch (randNum(1, 4)) {
    case 1: return randNum(min, max);
    case 2: return randStr(len);
    case 3:
      if (lvl === depth) return randStr(len);
      return arr = Array(randNum(0, size)).fill().map(() =>
        rand(min, max, len, size, depth, lvl + 1)
      );
    default:
      if (lvl === depth) return randStr(len);
      return generate(size, depth, lvl + 1);
  }
}