[underscorets](../README.md) / [Exports](../modules.md) / fn

# Namespace: fn

## Table of contents

### Functions

- [attempt](fn.md#attempt)
- [cond](fn.md#cond)
- [debounce](fn.md#debounce)
- [defer](fn.md#defer)
- [delay](fn.md#delay)
- [flip](fn.md#flip)
- [flow](fn.md#flow)
- [flowRight](fn.md#flowright)
- [maxCalls](fn.md#maxcalls)
- [memoize](fn.md#memoize)
- [minCalls](fn.md#mincalls)
- [negate](fn.md#negate)
- [once](fn.md#once)
- [throttle](fn.md#throttle)
- [times](fn.md#times)

## Function

### attempt

▸ **attempt**\<`T`\>(`func`, `...args`): [[`ReturnType`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype )\<`T`\>, `undefined`] \| [`undefined`, [`Error`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error )]

Attempts to invoke `func`, returning a tuple of [result, error].
If an error is thrown, the error is returned as the second element of the tuple.
Any additional arguments are provided to `func` when it's invoked.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`GenericFunction`](../modules.md#genericfunction)\<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `T` | The function to attempt |
| `...args` | [`Parameters`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype )\<`T`\> | The arguments to invoke `func` with |

#### Returns

[[`ReturnType`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype )\<`T`\>, `undefined`] \| [`undefined`, [`Error`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error )]

The `func` result or error as a tuple

**`Example`**

```ts
// Avoid throwing errors for invalid selectors.
const [elements, error] = attempt(selector =>
  document.querySelectorAll(selector), '>_>')

if (error) {
 // Handle the error.
}
```

#### Defined in

function/index.ts:18

___

### cond

▸ **cond**\<`T`, `U`\>(`pairs`): (`this`: `unknown`, ...`args`: [`Parameters`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype )\<`T`\>) => [`ReturnType`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype )\<`U`\> \| `void`

Creates a function that iterates over `pairs` and invokes the corresponding
function of the first predicate to return truthy. The predicate-function
pairs are invoked with the `this` binding and arguments of the created
function.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends (...`args`: `any`) => `boolean` | The type of the conditional function |
| `U` | extends (...`args`: [`Parameters`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype )\<`T`\>) => [`ReturnType`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype )\<`U`\> | The type of the function to invoke |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pairs` | [`T`, `U`][] | The predicate-function pairs |

#### Returns

`fn`

The new composite function

▸ (`this`, `...args`): [`ReturnType`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype )\<`U`\> \| `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `unknown` |
| `...args` | [`Parameters`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype )\<`T`\> |

##### Returns

[`ReturnType`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype )\<`U`\> \| `void`

**`Example`**

```ts
const func = cond([
  [matches({ 'a': 1 }),         () => 'matches A'],
  [conforms({ 'b': isNumber }), () => 'matches B'],
  [() => true,                  () => 'no match']
])

func({ 'a': 1, 'b': 2 })
// => 'matches A'

func({ 'a': 0, 'b': 1 })
// => 'matches B'

func({ 'a': '1', 'b': '2' })
// => 'no match'
```

#### Defined in

function/index.ts:19

___

### debounce

▸ **debounce**\<`T`\>(`func`, `wait`): `T` & \{ `cancel`: () => `void` ; `flush`: () => `void` ; `pending`: () => `boolean`  }

Creates a debounced version of a function. Only calling it after a specified amount of time has passed without any new calls.

**Methods:**
- `cancel()` will cancel the next invocation of the debounced function.
- `flush()` will immediately invoke the debounced function and cancel any pending invocations.
- `pending()` returns true if the debounced function is set to invoke.

This function can be used as a decorator with [decDebounce](../modules.md#decdebounce).

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends [`GenericFunction`](../modules.md#genericfunction)\<`T`\> | The type of the function |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `T` | The function to debounce |
| `wait` | `number` | The number of milliseconds to wait before invoking `func` |

#### Returns

`T` & \{ `cancel`: () => `void` ; `flush`: () => `void` ; `pending`: () => `boolean`  }

A debounced version of `func` with `cancel` and `flush` methods

**`Example`**

```ts
const sayHello = (name: string) => console.log(`Hello, ${name}!`);
const debouncedSayHello = debounce(sayHello, 200);

debouncedSayHello("John");
debouncedSayHello("Jane");
// => Only the second invocation of `debouncedSayHello` is executed, after a delay of 200ms.
```

#### Defined in

function/index.ts:20

___

### defer

▸ **defer**\<`T`\>(`func`, `...args`): [`ReturnType`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype )\<typeof [`setTimeout`]( https://developer.mozilla.org/docs/Web/API/setTimeout )\>

Defers invoking the `func` until the current call stack has cleared. Any
additional arguments are provided to `func` when it's invoked.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends [`GenericFunction`](../modules.md#genericfunction)\<`T`\> | The type of the function |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `T` | The function to defer |
| `...args` | [`Parameters`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype )\<`T`\> | The arguments to invoke `func` with |

#### Returns

[`ReturnType`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype )\<typeof [`setTimeout`]( https://developer.mozilla.org/docs/Web/API/setTimeout )\>

The timer ID

**`Example`**

```ts
defer(text => console.log(text), 'deferred')
// => Logs 'deferred' after one millisecond.
```

#### Defined in

function/index.ts:21

___

### delay

▸ **delay**\<`T`\>(`func`, `wait`, `...args`): [`ReturnType`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype )\<typeof [`setTimeout`]( https://developer.mozilla.org/docs/Web/API/setTimeout )\>

Invokes `func` after `wait` milliseconds. Any additional arguments are
provided to `func` when it's invoked.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends [`GenericFunction`](../modules.md#genericfunction)\<`T`\> | The type of the function |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `T` | The function to delay |
| `wait` | `number` \| \`$\{number}\` | The number of milliseconds to delay invocation |
| `...args` | [`Parameters`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype )\<`T`\> | The arguments to invoke `func` with |

#### Returns

[`ReturnType`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype )\<typeof [`setTimeout`]( https://developer.mozilla.org/docs/Web/API/setTimeout )\>

The timer ID

**`Example`**

```ts
delay(text => console.log(text), 1000, 'later')
// => Logs 'later' after one second.
```

#### Defined in

function/index.ts:22

___

### flow

▸ **flow**\<`T`\>(`...funcs`): (`this`: `unknown`, ...`args`: [...Parameters\<T\>]) => [`ReturnType`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype )\<`T`\>

Composes a function that returns the result of invoking the given functions
with the `this` binding of the created function, where each successive
invocation is supplied the return value of the previous.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends [`GenericFunction`](../modules.md#genericfunction)\<`T`\> | The type of the `funcs` functions |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...funcs` | `T`[] | The functions to invoke |

#### Returns

`fn`

The new composite function

▸ (`this`, `...args`): [`ReturnType`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype )\<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `unknown` |
| `...args` | [...Parameters\<T\>] |

##### Returns

[`ReturnType`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype )\<`T`\>

**`Example`**

```ts
function add(a, b) {
 return a + b
}

function square(n) {
  return n * n
}

const addSquare = flow(add, square)
addSquare(1, 2)
// => 9
```

#### Defined in

function/index.ts:24

___

### flowRight

▸ **flowRight**\<`T`\>(`...funcs`): (`this`: `unknown`, ...`args`: [...Parameters\<T\>]) => [`ReturnType`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype )\<`T`\>

This method is like `{@link flow}` except that it composes a function that
invokes the given functions from right to left.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends [`GenericFunction`](../modules.md#genericfunction)\<`T`\> | The type of the `funcs` functions |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...funcs` | `T`[] | The functions to invoke |

#### Returns

`fn`

The new composite function

▸ (`this`, `...args`): [`ReturnType`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype )\<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `unknown` |
| `...args` | [...Parameters\<T\>] |

##### Returns

[`ReturnType`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype )\<`T`\>

**`Example`**

```ts
function add(a, b) {
 return a + b
}

function square(n) {
  return n * n
}

const addSquare = flowRight(square, add)
addSquare(1, 2)
// => 9
```

#### Defined in

function/index.ts:25

___

### maxCalls

▸ **maxCalls**\<`T`\>(`func`, `n`): `T`

Creates a function that invokes the given function as long as it's called `<= n` times.

Subsequent calls to the created function return the result of the last `func` invocation.

This function can be used as a decorator with [decMaxCalls](../modules.md#decmaxcalls).

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends [`GenericFunction`](../modules.md#genericfunction)\<`T`\> | The type of the function |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `T` | The function to restrict |
| `n` | `number` | The number of calls before the cached result is returned |

#### Returns

`T`

Returns the new restricted function

**`Example`**

```ts
let count = 0;
const addCount = () => ++count;

// Allow addCount to be invoked twice.
const limitAddCount = maxCalls(addCount, 2)

limitAddCount() // => 1
limitAddCount() // => 2
limitAddCount() // => 2
// => `limitAddCount` is invoked twice and the result is cached.
```

#### Defined in

function/index.ts:26

___

### memoize

▸ **memoize**\<`T`, `Cache`\>(`func`, `options?`): `T` & \{ `cache`: `Cache`  }

Creates a function that memoizes the result of a given function.

The cache key is determined by the `resolver` or by the arguments from the function call.

**Options:**
- `resolver` A function that determines the cache key based on the arguments provided.
- `ttl` the time to live for the cache entries in milliseconds.

**Properties:**
- `cache` The cache is an instance of `Map` and can be used to clear or inspect the cache.
It can be replaced by a custom cache that matches the `Map` interface.

This function can be used as a decorator with [decMemoize](../modules.md#decmemoize).

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends [`GenericFunction`](../modules.md#genericfunction)\<`T`\> | The type of the function to memoize. |
| `Cache` | extends [`Map`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map )\<`string`, [[`ReturnType`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype )\<`T`\>, `number`]\> | The type of the cache storage |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `T` | The function to have its output memoized |
| `options` | `Object` | The options object with optional `resolver` and `ttl` parameters |
| `options.resolver?` | (...`args`: [`Parameters`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype )\<`T`\>) => `string` | A function that determines the cache key for storing the result based on the arguments provided |
| `options.ttl?` | `number` | The time to live for the cache in milliseconds |

#### Returns

`T` & \{ `cache`: `Cache`  }

Returns the new memoized function

**`Example`**

```ts
function fibonacci(n: number) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFib = memoize(fibonacci, { ttl: 1000 })

memoizedFib(40) // => 102334155
memoizedFib(40) // => 102334155 (cache hit)
setTimeout(() => memoizedFib(40), 1000) // => 102334155 (cache miss)

// Cached values are exposed as the `cache` property.
memoizedFib.cache.get("40") // => [value, timestamp]
memoizedFib.cache.set("40", [1234, Date.now()])
memoizedFib.cache.clear()

// This is the default way to create cache keys.
const defaultResolver = (...args: unknown[]) => JSON.stringify(args)
```

#### Defined in

function/index.ts:27

___

### minCalls

▸ **minCalls**\<`T`\>(`func`, `n`): (`this`: `unknown`, ...`args`: [`Parameters`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype )\<`T`\>) => [`ReturnType`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype )\<`T`\> \| `void`

Creates a function that invokes the given function once it's called more than `n` times.
Returns undefined until the minimum call count is reached.

This function can be used as a decorator with [decMinCalls](../modules.md#decmincalls).

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends [`GenericFunction`](../modules.md#genericfunction)\<`T`\> | The type of the function |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `T` | The function to restrict |
| `n` | `number` | The number of calls before the given function is invoked |

#### Returns

`fn`

Returns the new restricted function

▸ (`this`, `...args`): [`ReturnType`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype )\<`T`\> \| `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `unknown` |
| `...args` | [`Parameters`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype )\<`T`\> |

##### Returns

[`ReturnType`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype )\<`T`\> \| `void`

**`Example`**

```ts
const caution = () => console.log("Caution!");
const limitedCaution = minCalls(caution, 2);

limitedCaution()
limitedCaution()
limitedCaution()
// => `caution` is invoked on the third call.
```

#### Defined in

function/index.ts:28

___

### negate

▸ **negate**\<`T`\>(`predicate`): (`this`: `unknown`, ...`args`: [`Parameters`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype )\<`T`\>) => `boolean`

Creates a function that negates the result of the predicate `func`. The
`func` predicate is invoked with the `this` binding and arguments of the
created function.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends (...`args`: `any`) => `boolean` | The type of the function |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | `T` | The predicate to negate |

#### Returns

`fn`

The new negated function

▸ (`this`, `...args`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `unknown` |
| `...args` | [`Parameters`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype )\<`T`\> |

##### Returns

`boolean`

**`Example`**

```ts
function isEven(n) {
  return n % 2 === 0
}

filter([1, 2, 3, 4, 5, 6], negate(isEven))
// => [1, 3, 5]
```

#### Defined in

function/index.ts:29

___

### once

▸ **once**\<`T`\>(`func`): (`this`: `unknown`, ...`args`: [`Parameters`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype )\<`T`\>) => [`ReturnType`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype )\<`T`\> \| `void`

Creates a function that invokes the given function as long as it's called once.

Subsequent calls to the created function return the result of the last `func` invocation.

This function can be used as a decorator with [decOnce](../modules.md#deconce).

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends [`GenericFunction`](../modules.md#genericfunction)\<`T`\> | The type of the function |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `T` | The function to restrict |

#### Returns

`fn`

Returns the new restricted function

▸ (`this`, `...args`): [`ReturnType`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype )\<`T`\> \| `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `unknown` |
| `...args` | [`Parameters`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype )\<`T`\> |

##### Returns

[`ReturnType`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype )\<`T`\> \| `void`

**`Example`**

```ts
let count = 0;
const addCount = () => ++count;

// Allow addCount to be invoked twice.
const limitAddCount = once(addCount)

limitAddCount() // => 1
limitAddCount() // => 1
limitAddCount() // => 1
// => `limitAddCount` is invoked twice and the result is cached.
```

#### Defined in

function/index.ts:30

___

### throttle

▸ **throttle**\<`T`\>(`func`, `wait`): `T`

Generates a function that invokes the given function `func` at most once per every `wait` milliseconds.
The throttled function always returns the result of the last `func` invocation.

This function can be used as a decorator with [decThrottle](../modules.md#decthrottle).

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends [`GenericFunction`](../modules.md#genericfunction)\<`T`\> | The type of the function |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `T` | The function to throttle |
| `wait` | `number` | The number of milliseconds to throttle invocations to |

#### Returns

`T`

Returns the new throttled function

**`Example`**

```ts
const throttled = throttle(() => console.log("Throttled!"), 1000);

throttled();
throttled();
// => "Throttled!" is logged once per second.
```

#### Defined in

function/index.ts:31

___

### times

▸ **times**\<`T`\>(`func`, `n`): `T`[]

Invokes a function `n` times, returning an array of the results of
each invocation.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the function |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | (`index`: `number`) => `T` | The function invoked per iteration |
| `n` | `number` | The number of times to invoke `func` |

#### Returns

`T`[]

Returns an array of results

**`Example`**

```ts
times(index => console.log("Run", index), 3)
// => "Run 0" | "Run 1" | "Run 2"
times(Math.random, 3)
// => [0.123, 0.456, 0.789]
times(() => 0, 4)
// => [0, 0, 0, 0]
```

#### Defined in

function/index.ts:32

## Other

### flip

▸ **flip**\<`T`\>(`func`): (`this`: `any`, ...`unknown`: [...Parameters\<T\>]) => [`ReturnType`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype )\<(...`args`: `ReversedArray`\<[...Parameters\<T\>]\>) => [`ReturnType`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype )\<`T`\>\>

Creates a function that invokes `func` with arguments reversed.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends [`GenericFunction`](../modules.md#genericfunction)\<`T`\> | The type of the function |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `T` | The function to flip arguments for |

#### Returns

`fn`

The new flipped function

▸ (`this`, `...unknown`): [`ReturnType`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype )\<(...`args`: `ReversedArray`\<[...Parameters\<T\>]\>) => [`ReturnType`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype )\<`T`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `any` |
| `...unknown` | [...Parameters\<T\>] |

##### Returns

[`ReturnType`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype )\<(...`args`: `ReversedArray`\<[...Parameters\<T\>]\>) => [`ReturnType`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype )\<`T`\>\>

**`Example`**

```ts
const flipped = flip((...args) => args)

flipped('a', 'b', 'c', 'd')
// => ['d', 'c', 'b', 'a']
```

#### Defined in

function/index.ts:23
