function bind<R, T>(f: (this: T) => R, thisArg: T): () => R;
function bind<R, T, A>(f: (this: T, _0: A) => R, thisArg: T): (_0: A) => R;
function bind<R, T, A>(f: (this: T, _0: A) => R, thisArg: T, _0: A): () => R;
function bind<R, T, A, B>(f: (this: T, _0: A, _1: B) => R, thisArg: T): (_0: A, _1: B) => R;
function bind<R, T, A, B>(f: (this: T, _0: A, _1: B) => R, thisArg: T, _0: A): (_1: B) => R;
function bind<R, T, A, B>(f: (this: T, _0: A, _1: B) => R, thisArg: T, _0: A, _1: B): () => R;
function bind<R, T, A, B, C>(f: (this: T, _0: A, _1: B, _2: C) => R, thisArg: T): (_0: A, _1: B, _2: C) => R;
function bind<R, T, A, B, C>(f: (this: T, _0: A, _1: B, _2: C) => R, thisArg: T, _0: A): (_1: B, _2: C) => R;
function bind<R, T, A, B, C>(f: (this: T, _0: A, _1: B, _2: C) => R, thisArg: T, _0: A, _1: B): (_2: C) => R;
function bind<R, T, A, B, C>(f: (this: T, _0: A, _1: B, _2: C) => R, thisArg: T, _0: A, _1: B, _2: C): () => R;
function bind<R, T, A, B, C, D>(f: (this: T, _0: A, _1: B, _2: C, _3: D) => R, thisArg: T): (_0: A, _1: B, _2: C, _3: D) => R;
function bind<R, T, A, B, C, D>(f: (this: T, _0: A, _1: B, _2: C, _3: D) => R, thisArg: T, _0: A): (_1: B, _2: C, _3: D) => R;
function bind<R, T, A, B, C, D>(f: (this: T, _0: A, _1: B, _2: C, _3: D) => R, thisArg: T, _0: A, _1: B): (_2: C, _3: D) => R;
function bind<R, T, A, B, C, D>(f: (this: T, _0: A, _1: B, _2: C, _3: D) => R, thisArg: T, _0: A, _1: B, _2: C): (_3: D) => R;
function bind<R, T, A, B, C, D>(f: (this: T, _0: A, _1: B, _2: C, _3: D) => R, thisArg: T, _0: A, _1: B, _2: C, _3: D): () => R;
function bind<R, T, A, B, C, D, E>(f: (this: T, _0: A, _1: B, _2: C, _3: D, _4: E) => R, thisArg: T): (_0: A, _1: B, _2: C, _3: D, _4: E) => R;
function bind<R, T, A, B, C, D, E>(f: (this: T, _0: A, _1: B, _2: C, _3: D, _4: E) => R, thisArg: T, _0: A): (_1: B, _2: C, _3: D, _4: E) => R;
function bind<R, T, A, B, C, D, E>(f: (this: T, _0: A, _1: B, _2: C, _3: D, _4: E) => R, thisArg: T, _0: A, _1: B): (_2: C, _3: D, _4: E) => R;
function bind<R, T, A, B, C, D, E>(f: (this: T, _0: A, _1: B, _2: C, _3: D, _4: E) => R, thisArg: T, _0: A, _1: B, _2: C): (_3: D, _4: E) => R;
function bind<R, T, A, B, C, D, E>(f: (this: T, _0: A, _1: B, _2: C, _3: D, _4: E) => R, thisArg: T, _0: A, _1: B, _2: C, _3: D): (_4: E) => R;
function bind<R, T, A, B, C, D, E>(f: (this: T, _0: A, _1: B, _2: C, _3: D, _4: E) => R, thisArg: T, _0: A, _1: B, _2: C, _3: D, _4: E): () => R;
function bind(f: Function, thisArg: any, ...args: any[]) {
  return f.bind.apply(f, [thisArg, ...args]);
}

export default bind;
