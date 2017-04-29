'use strict';

const assert = require('assert');
const bind = require('../lib/').default;

const foo = (a, b) => a + b;

describe('bind.ts', () => {
  it('1', () => {
    assert.equal(bind(foo, {})(1, 2), 3); 
  });
  it('2', () => {
    assert.equal(bind(foo, {}, 1)(2), 3); 
  });
  it('3', () => {
    assert.equal(bind(foo, {}, 1, 2)(), 3); 
  });
});
