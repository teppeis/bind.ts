function bind<R>(f: () => R, thisArg: any): () => R;
function bind<R, A>(f: (_0: A) => R, thisArg: any): (_0: A) => R;
function bind<R, A>(f: (_0: A) => R, thisArg: any, _0: A): () => R;
function bind<R, A, B>(f: (_0: A, _1: B) => R, thisArg: any): (_0: A, _1: B) => R;
function bind<R, A, B>(f: (_0: A, _1: B) => R, thisArg: any, _0: A): (_1: B) => R;
function bind<R, A, B>(f: (_0: A, _1: B) => R, thisArg: any, _0: A, _1: B): () => R;
function bind<R, A, B, C>(f: (_0: A, _1: B, _2: C) => R, thisArg: any): (_0: A, _1: B, _2: C) => R;
function bind<R, A, B, C>(f: (_0: A, _1: B, _2: C) => R, thisArg: any, _0: A): (_1: B, _2: C) => R;
function bind<R, A, B, C>(f: (_0: A, _1: B, _2: C) => R, thisArg: any, _0: A, _1: B): (_2: C) => R;
function bind<R, A, B, C>(f: (_0: A, _1: B, _2: C) => R, thisArg: any, _0: A, _1: B, _2: C): () => R;
function bind<R, A, B, C, D>(f: (_0: A, _1: B, _2: C, _3: D) => R, thisArg: any): (_0: A, _1: B, _2: C, _3: D) => R;
function bind<R, A, B, C, D>(f: (_0: A, _1: B, _2: C, _3: D) => R, thisArg: any, _0: A): (_1: B, _2: C, _3: D) => R;
function bind<R, A, B, C, D>(f: (_0: A, _1: B, _2: C, _3: D) => R, thisArg: any, _0: A, _1: B): (_2: C, _3: D) => R;
function bind<R, A, B, C, D>(f: (_0: A, _1: B, _2: C, _3: D) => R, thisArg: any, _0: A, _1: B, _2: C): (_3: D) => R;
function bind<R, A, B, C, D>(f: (_0: A, _1: B, _2: C, _3: D) => R, thisArg: any, _0: A, _1: B, _2: C, _3: D): () => R;
function bind<R, A, B, C, D, E>(f: (_0: A, _1: B, _2: C, _3: D, _4: E) => R, thisArg: any): (_0: A, _1: B, _2: C, _3: D, _4: E) => R;
function bind<R, A, B, C, D, E>(f: (_0: A, _1: B, _2: C, _3: D, _4: E) => R, thisArg: any, _0: A): (_1: B, _2: C, _3: D, _4: E) => R;
function bind<R, A, B, C, D, E>(f: (_0: A, _1: B, _2: C, _3: D, _4: E) => R, thisArg: any, _0: A, _1: B): (_2: C, _3: D, _4: E) => R;
function bind<R, A, B, C, D, E>(f: (_0: A, _1: B, _2: C, _3: D, _4: E) => R, thisArg: any, _0: A, _1: B, _2: C): (_3: D, _4: E) => R;
function bind<R, A, B, C, D, E>(f: (_0: A, _1: B, _2: C, _3: D, _4: E) => R, thisArg: any, _0: A, _1: B, _2: C, _3: D): (_4: E) => R;
function bind<R, A, B, C, D, E>(f: (_0: A, _1: B, _2: C, _3: D, _4: E) => R, thisArg: any, _0: A, _1: B, _2: C, _3: D, _4: E): () => R;
function bind(f: Function, thisArg: any, ...args: any[]) {
  return f.bind.apply(f, [thisArg, ...args]);
}

export default bind;
