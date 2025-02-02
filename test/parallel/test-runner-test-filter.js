// https://github.com/nodejs/node/blob/adaf60240559ffb58636130950262ee3237b7a41/test/parallel/test-runner-test-filter.js
// Flags: --expose-internals
'use strict'
const assert = require('assert')
const { doesPathMatchFilter } = require('../../lib/utils')

// Paths expected to match
;[
  'test.js',
  'test.cjs',
  'test.mjs',
  'test-foo.js',
  'test-foo.cjs',
  'test-foo.mjs',
  'foo.test.js',
  'foo.test.cjs',
  'foo.test.mjs',
  'foo-test.js',
  'foo-test.cjs',
  'foo-test.mjs',
  'foo_test.js',
  'foo_test.cjs',
  'foo_test.mjs'
].forEach(p => {
  assert.strictEqual(doesPathMatchFilter(p), true)
})

// Paths expected not to match
;[
  'test',
  'test.djs',
  'test.cs',
  'test.mj',
  'foo.js',
  'test-foo.sj',
  'test.foo.js',
  'test_foo.js',
  'testfoo.js',
  'foo-test1.mjs'
].forEach(p => {
  assert.strictEqual(doesPathMatchFilter(p), false)
})
