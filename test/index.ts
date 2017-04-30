'use strict';

import assert = require('assert');
import bind from '../lib/';

function sub(this: {msg: string}, a: number, b: number): string {
  return `${this.msg}: ${a - b}`;
}

function f0(this: {msg: string}): string {
  return `${this.msg}`;
}

function f1(this: {msg: string}, a: number): string {
  return `${this.msg}: ${a}`;
}

function f2(this: {msg: string}, a: number, b: number): string {
  return `${this.msg}: ${a + b}`;
}

function f3(this: {msg: string}, a: number, b: number, c: number): string {
  return `${this.msg}: ${a + b + c}`;
}

function f4(this: {msg: string}, a: number, b: number, c: number, d: number): string {
  return `${this.msg}: ${a + b + c + d}`;
}

function f5(this: {msg: string}, a: number, b: number, c: number, d: number, e: number): string {
  return `${this.msg}: ${a + b + c + d + e}`;
}

describe('bind.ts', () => {
  describe('result value', () => {
    it('1 arg', () => {
      assert.equal(bind(sub, {msg: 'foo'})(3, 2), 'foo: 1'); 
    });
    it('2 args', () => {
      assert.equal(bind(sub, {msg: 'foo'}, 3)(2), 'foo: 1'); 
    });
    it('3 args', () => {
      assert.equal(bind(sub, {msg: 'foo'}, 3, 2)(), 'foo: 1'); 
    });
    it('others', () => {
      assert.equal(bind(f0, {msg: 'foo'})(), 'foo'); 
      assert.equal(bind(f1, {msg: 'foo'}, 1)(), 'foo: 1'); 
      assert.equal(bind(f2, {msg: 'foo'}, 1, 2)(), 'foo: 3'); 
      assert.equal(bind(f3, {msg: 'foo'}, 1, 2, 4)(), 'foo: 7'); 
      assert.equal(bind(f4, {msg: 'foo'}, 1, 2, 4, 8)(), 'foo: 15'); 
      assert.equal(bind(f5, {msg: 'foo'}, 1, 2, 4, 8, 16)(), 'foo: 31'); 
    });
  });
  describe('return type', () => {
    it('1 arg', () => {
      let f: (a: number, b: number) => string;
      f = bind(sub, {msg: 'foo'});
      f = bind(sub, {msg: 'foo'}, 3);
      f = bind(sub, {msg: 'foo'}, 3, 2);
    });
    it('2 args', () => {
      let f: (a: number) => string;
      // f = bind(sub, {msg: 'foo'});
      f = bind(sub, {msg: 'foo'}, 3);
      f = bind(sub, {msg: 'foo'}, 3, 2);
    });
    it('3 args', () => {
      let f: () => string;
      // f = bind(sub, {msg: 'foo'});
      // f = bind(sub, {msg: 'foo'}, 3);
      f = bind(sub, {msg: 'foo'}, 3, 2);
    });
  });
});
