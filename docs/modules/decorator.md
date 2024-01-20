[underscorets](../README.md) / [Exports](../modules.md) / decorator

# Namespace: decorator

## Table of contents

### Functions

- [debounce](decorator.md#debounce)
- [maxCalls](decorator.md#maxcalls)
- [memoize](decorator.md#memoize)
- [minCalls](decorator.md#mincalls)
- [once](decorator.md#once)
- [throttle](decorator.md#throttle)
- [toDecorator](decorator.md#todecorator)

## Decorator

### debounce

▸ **debounce**(`wait`): (`_target`: `unknown`, `_key`: `string`, `descriptor`: `PropertyDescriptor`) => `void`

Debounces the decorated function. Only calling it after a specified amount of time has passed without any new calls.

Look at [debounce](../modules.md#debounce) for the non-decorator version.

*Requires the [experimentalDecorators](https://www.typescriptlang.org/tsconfig#experimentalDecorators) flag to be set.*

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wait` | `number` | Milliseconds to wait before invoking the decorated function after the last invocation |

#### Returns

`fn`

▸ (`_target`, `_key`, `descriptor`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `_target` | `unknown` |
| `_key` | `string` |
| `descriptor` | `PropertyDescriptor` |

##### Returns

`void`

**`Example`**

```ts
class TestClass {
  @decDebounce(100)
  testMethod(str: string) {
    console.log("Debounced:", str);
  }
}

const instance = new TestClass();
instance.testMethod("Hello");
instance.testMethod("World");
// => Only the second invocation of `debouncedSayHello` is executed, after a delay of 1000ms.
```

#### Defined in

decorator/index.ts:10

___

### maxCalls

▸ **maxCalls**(`n`): (`_target`: `unknown`, `_key`: `string`, `descriptor`: `PropertyDescriptor`) => `void`

Only invokes the decorated function as long as it's called `<= n` times.
Subsequent calls to the decorated function return the result of the last invocation.

Look at [maxCalls](../modules.md#maxcalls) for the non-decorator version.

*Requires the [experimentalDecorators](https://www.typescriptlang.org/tsconfig#experimentalDecorators) flag to be set.*

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | `number` | The number of calls before the cached result is returned |

#### Returns

`fn`

▸ (`_target`, `_key`, `descriptor`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `_target` | `unknown` |
| `_key` | `string` |
| `descriptor` | `PropertyDescriptor` |

##### Returns

`void`

**`Example`**

```ts
class TestClass {
 private count = 0;

 @decMaxCalls(2)
 testMethod() {
   return ++this.count;
 }
}

const instance = new TestClass();
instance.testMethod(); // => 1
instance.testMethod(); // => 2
instance.testMethod(); // => 2
```

#### Defined in

decorator/index.ts:11

___

### memoize

▸ **memoize**(`options?`): (`_target`: `unknown`, `_key`: `string`, `descriptor`: `PropertyDescriptor`) => `void`

Memoizes the decorated function.
The cache key is either determined by the provided resolver or by the arguments used in the memoized function.

**Options:**
- `resolver` A function that determines the cache key for storing the result based on the arguments provided.
- `ttl` sets the time to live for the cache in milliseconds. After `ttl` milliseconds, the next call to the memoized function will result in a cache miss.

Look at [memoize](../modules.md#memoize) for the non-decorator version.

*Requires the [experimentalDecorators](https://www.typescriptlang.org/tsconfig#experimentalDecorators) flag to be set.*

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `undefined` \| \{ `resolver?`: (...`args`: `unknown`[]) => `string` ; `ttl?`: `number`  } | The options object |

#### Returns

`fn`

▸ (`_target`, `_key`, `descriptor`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `_target` | `unknown` |
| `_key` | `string` |
| `descriptor` | `PropertyDescriptor` |

##### Returns

`void`

**`Example`**

```ts
class TestClass {
  @decMemoize({ ttl: 1000 })
  testMethod(a: number, b: number) {
    return a + b;
  }
}

const instance = new TestClass();
instance.testMethod(1, 2); // => 3
instance.testMethod(1, 2); // => 3 (cached)

// After 1 second:
instance.testMethod(1, 2); // => 3 (cache miss)
```

#### Defined in

decorator/index.ts:12

___

### minCalls

▸ **minCalls**(`n`): (`_target`: `unknown`, `_key`: `string`, `descriptor`: `PropertyDescriptor`) => `void`

Only invokes the decorated function after it's called more than `n` times.

Look at [minCalls](../modules.md#mincalls) for the non-decorator version.

*Requires the [experimentalDecorators](https://www.typescriptlang.org/tsconfig#experimentalDecorators) flag to be set.*

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | `number` | The number of calls before the decorated function is invoked |

#### Returns

`fn`

▸ (`_target`, `_key`, `descriptor`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `_target` | `unknown` |
| `_key` | `string` |
| `descriptor` | `PropertyDescriptor` |

##### Returns

`void`

**`Example`**

```ts
class TestClass {
  @decMinCalls(2)
  testMethod() {
    return 1;
  }
}

const instance = new TestClass();
instance.testMethod(); // => undefined
instance.testMethod(); // => undefined
instance.testMethod(); // => 1
```

#### Defined in

decorator/index.ts:13

___

### once

▸ **once**(): (`_target`: `unknown`, `_key`: `string`, `descriptor`: `PropertyDescriptor`) => `void`

Only invokes the decorated function once.
Subsequent calls to the decorated function return the result of the last invocation.

Look at [once](../modules.md#once) for the non-decorator version.

*Requires the [experimentalDecorators](https://www.typescriptlang.org/tsconfig#experimentalDecorators) flag to be set.*

#### Returns

`fn`

▸ (`_target`, `_key`, `descriptor`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `_target` | `unknown` |
| `_key` | `string` |
| `descriptor` | `PropertyDescriptor` |

##### Returns

`void`

**`Example`**

```ts
class TestClass {
 private count = 0;

 @decOnce()
 testMethod() {
   return ++this.count;
 }
}

const instance = new TestClass();
instance.testMethod(); // => 1
instance.testMethod(); // => 1
instance.testMethod(); // => 1
```

#### Defined in

decorator/index.ts:14

___

### throttle

▸ **throttle**(`wait`): (`_target`: `unknown`, `_key`: `string`, `descriptor`: `PropertyDescriptor`) => `void`

The decorated function is invoked at most once per every `wait` milliseconds.

Look at [throttle](../modules.md#throttle) for the non-decorator version.

*Requires the [experimentalDecorators](https://www.typescriptlang.org/tsconfig#experimentalDecorators) flag to be set.*

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wait` | `number` | The number of milliseconds to wait between invocations |

#### Returns

`fn`

▸ (`_target`, `_key`, `descriptor`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `_target` | `unknown` |
| `_key` | `string` |
| `descriptor` | `PropertyDescriptor` |

##### Returns

`void`

**`Example`**

```ts
class TestClass {
  @decThrottle(1000)
  testMethod() {
    console.log("Throttled!");
  }
}

const instance = new TestClass();
instance.testMethod(); // => "Throttled!" is logged once per second.
instance.testMethod(); // nothing happens
```

#### Defined in

decorator/index.ts:15

___

### toDecorator

▸ **toDecorator**\<`T`\>(`func`): (...`args`: [`ArrayTail`](../modules.md#arraytail)\<[`Parameters`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype )\<`T`\>\>) => (`_target`: `unknown`, `_key`: `string`, `descriptor`: `PropertyDescriptor`) => `void`

Transforms a function into a decorator function.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends [`GenericFunction`](../modules.md#genericfunction)\<`T`\> | The type of the function |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `T` | The function to transform |

#### Returns

`fn`

A decorator function that can be used to decorate a method

▸ (`...args`): (`_target`: `unknown`, `_key`: `string`, `descriptor`: `PropertyDescriptor`) => `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`ArrayTail`](../modules.md#arraytail)\<[`Parameters`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype )\<`T`\>\> |

##### Returns

`fn`

▸ (`_target`, `_key`, `descriptor`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `_target` | `unknown` |
| `_key` | `string` |
| `descriptor` | `PropertyDescriptor` |

##### Returns

`void`

**`Example`**

```ts
function log(func: Function, message: string) {
  return function (...args: unknown[]) {
    console.log(message);
    return func(...args);
  };
}

const logger = toDecorator(log);

class TestClass {
  @logger("Hello world!")
  testMethod() {
    return 1;
  }
}

const instance = new TestClass();
instance.testMethod();
// => Log "Hello World" and return 1
```

#### Defined in

decorator/index.ts:16
