# bind.ts

Function.prototype.bind with typings for TypeScript

[![npm version][npm-image]][npm-url]
![Node.js Version Support][node-version]
[![build status][circleci-image]][circleci-url]
[![dependency status][deps-image]][deps-url]
![License][license]

`Function#bind` is untyped in TypeScript (in v2.3 at least, cf: [#212](https://github.com/Microsoft/TypeScript/issues/212)).
TypeScript always returns `any` for `bind()`.

```typescript
function foo(a: number, b: number): string {
  return `${this.msg}: ${a + b}`;
}
// bar is `any`!
const bar = foo.bind({msg: 'hello'}, 10);
// ok
bar(20); // 'hello: 30'
// should be a type error, but actually allowed...
bar('anything');
```

`bind.ts` is a workaround for this issue.

```typescript
import bind from 'bind.ts';

// bar is `(b: number) => string`
const bar = bind(foo, {msg: 'hello'}, 10);
// ok
bar(20); // 'hello: 30'
// error!
bar('anything');
```

## Limitation

The maximum number of arguments of the function is **_5_**.

## License

MIT License: Teppei Sato &lt;teppeis@gmail.com&gt;

[npm-image]: https://img.shields.io/npm/v/bind.ts.svg
[npm-url]: https://npmjs.org/package/bind.ts
[npm-downloads-image]: https://img.shields.io/npm/dm/bind.ts.svg
[travis-image]: https://img.shields.io/travis/teppeis/bind.ts/master.svg
[travis-url]: https://travis-ci.org/teppeis/bind.ts
[circleci-image]: https://circleci.com/gh/teppeis/bind.ts.svg?style=shield
[circleci-url]: https://circleci.com/gh/teppeis/bind.ts
[appveyor-image]: https://ci.appveyor.com/api/projects/status/
[appveyor-url]: https://ci.appveyor.com/project/teppeis/bind.ts/branch/master
[deps-image]: https://img.shields.io/david/teppeis/bind.ts.svg
[deps-url]: https://david-dm.org/teppeis/bind.ts
[node-version]: https://img.shields.io/badge/Node.js%20support-v6,v8,v10-brightgreen.svg
[coverage-image]: https://img.shields.io/coveralls/teppeis/bind.ts/master.svg
[coverage-url]: https://coveralls.io/github/teppeis/bind.ts?branch=master
[license]: https://img.shields.io/npm/l/bind.ts.svg
