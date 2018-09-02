function bind<T, V, R extends any[]>(f: (this: T, ...args: R) => V, thisArg: T): (...args: R) => V;
function bind<T, V, R extends any[], A0>(f: (this: T, a0: A0, ...args: R) => V, thisArg: T, a0: A0): (...args: R) => V;
function bind<T, V, R extends any[], A0, A1>(f: (this: T, a0: A0, a1: A1, ...args: R) => V, thisArg: T, a0: A0, a1: A1): (...args: R) => V;
function bind<T, V, R extends any[], A0, A1, A2>(f: (this: T, a0: A0, a1: A1, a2: A2, ...args: R) => V, thisArg: T, a0: A0, a1: A1, a2: A2): (...args: R) => V;
function bind<T, V, R extends any[], A0, A1, A2, A3>(f: (this: T, a0: A0, a1: A1, a2: A2, a3: A3, ...args: R) => V, thisArg: T, a0: A0, a1: A1, a2: A2, a3: A3): (...args: R) => V;
function bind<T, V, R extends any[], A0, A1, A2, A3, A4>(f: (this: T, a0: A0, a1: A1, a2: A2, a3: A3, a4: A4, ...args: R) => V, thisArg: T, a0: A0, a1: A1, a2: A2, a3: A3, a4: A4): (...args: R) => V;
function bind(f: Function, thisArg: any, ...args: any[]) {
  return f.bind.apply(f, [thisArg, ...args]);
}

export default bind;
