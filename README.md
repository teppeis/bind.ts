## DEPRECATED: Use `--strictBindCallApply` instead since TypeScript 3.2

Finally TypeScript 3.2 officially supports this feature!!!

See: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-2.html#strictbindcallapply

----
# bind.ts

Function.prototype.bind with typings for TypeScript

[![npm version][npm-image]][npm-url]
![Node.js Version Support][node-version]
[![build status][circleci-image]][circleci-url]
[![dependency status][deps-image]][deps-url]
![License][license]

`Function#bind` is untyped in TypeScript (in v3.0 at least, cf: [#212](https://github.com/Microsoft/TypeScript/issues/212)).
It always returns `any`.

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

Note: TypeScript v3.0 introduces [generic rest parameters](https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#generic-rest-parameters). It's helpful but cannot solve this issue completely and [the type definition of `Function#bind` in TypeScript core](https://github.com/Microsoft/TypeScript/blob/v3.0.3/src/lib/es5.d.ts#L273) is not changed.

## Requirement

bind.ts v2 requires TypeScript v3.0+.
For TypeScript v2.x, use bind.ts v1.

## Limitation

The maximum number of params of `bind()` is **_5_**.

## License

MIT License: Teppei Sato &lt;teppeis@gmail.com&gt;

[npm-image]: https://img.shields.io/npm/v/bind.ts.svg
[npm-url]: https://npmjs.org/package/bind.ts
[npm-downloads-image]: https://img.shields.io/npm/dm/bind.ts.svg
[circleci-image]: https://circleci.com/gh/teppeis/bind.ts.svg?style=shield
[circleci-url]: https://circleci.com/gh/teppeis/bind.ts
[deps-image]: https://img.shields.io/david/teppeis/bind.ts.svg
[deps-url]: https://david-dm.org/teppeis/bind.ts
[node-version]: https://img.shields.io/badge/Node.js%20support-v6,v8,v10-brightgreen.svg
[license]: https://img.shields.io/npm/l/bind.ts.svg
