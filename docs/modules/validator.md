[underscorets](../README.md) / [Exports](../modules.md) / validator

# Namespace: validator

## Table of contents

### Functions

- [isArguments](validator.md#isarguments)
- [isArray](validator.md#isarray)
- [isArrayBuffer](validator.md#isarraybuffer)
- [isArrayLike](validator.md#isarraylike)
- [isArrayLikeObject](validator.md#isarraylikeobject)
- [isBigInt64Array](validator.md#isbigint64array)
- [isBigUint64Array](validator.md#isbiguint64array)
- [isBoolean](validator.md#isboolean)
- [isBrowser](validator.md#isbrowser)
- [isBuffer](validator.md#isbuffer)
- [isDataView](validator.md#isdataview)
- [isDate](validator.md#isdate)
- [isEmpty](validator.md#isempty)
- [isEqual](validator.md#isequal)
- [isError](validator.md#iserror)
- [isFloat32Array](validator.md#isfloat32array)
- [isFloat64Array](validator.md#isfloat64array)
- [isFunction](validator.md#isfunction)
- [isInt16Array](validator.md#isint16array)
- [isInt32Array](validator.md#isint32array)
- [isInt8Array](validator.md#isint8array)
- [isLength](validator.md#islength)
- [isMap](validator.md#ismap)
- [isNavigator](validator.md#isnavigator)
- [isNil](validator.md#isnil)
- [isNull](validator.md#isnull)
- [isNumber](validator.md#isnumber)
- [isObject](validator.md#isobject)
- [isObjectLike](validator.md#isobjectlike)
- [isPlainObject](validator.md#isplainobject)
- [isPrimitive](validator.md#isprimitive)
- [isRegExp](validator.md#isregexp)
- [isSet](validator.md#isset)
- [isString](validator.md#isstring)
- [isSymbol](validator.md#issymbol)
- [isTypedArray](validator.md#istypedarray)
- [isUint16Array](validator.md#isuint16array)
- [isUint32Array](validator.md#isuint32array)
- [isUint8Array](validator.md#isuint8array)
- [isUint8ClampedArray](validator.md#isuint8clampedarray)
- [isUndefined](validator.md#isundefined)
- [isUrl](validator.md#isurl)
- [isWeakMap](validator.md#isweakmap)
- [isWeakSet](validator.md#isweakset)

## Validator

### isArguments

▸ **isArguments**(`value`): value is IArguments

Checks if `value` is likely an `arguments` object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check |

#### Returns

value is IArguments

`true` if `value` is an `arguments` object, else `false`

**`Example`**

```ts
isArguments(function() { return arguments }())
// => true

isArguments([1, 2, 3])
// => false
```

#### Defined in

validator/index.ts:47

___

### isArray

▸ **isArray**(`value`): value is unknown[]

Checks if `value` is array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check |

#### Returns

value is unknown[]

`true` if `value` is array, else `false`

**`Example`**

```ts
isArray([1, 2, 3])
// => true

isArray('abc')
// => false

isArray(Function)
// => false
```

#### Defined in

validator/index.ts:48

___

### isArrayBuffer

▸ **isArrayBuffer**(`value`): value is ArrayBuffer

Checks if `value` is classified as an `ArrayBuffer` object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check |

#### Returns

value is ArrayBuffer

`true` if `value` is an array buffer, else `false`

**`Example`**

```ts
isArrayBuffer(new ArrayBuffer(2))
// => true

isArrayBuffer(new Array(2))
// => false
```

#### Defined in

validator/index.ts:49

___

### isArrayLike

▸ **isArrayLike**(`value`): value is ArrayLike\<unknown\>

Checks if `value` is array-like. A value is considered array-like if it's
not a function and has a `value.length` that's an integer greater than or
equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check |

#### Returns

value is ArrayLike\<unknown\>

`true` if `value` is array-like, else `false`

**`Example`**

```ts
isArrayLike([1, 2, 3])
// => true

isArrayLike(document.body.children)
// => true

isArrayLike('abc')
// => true

isArrayLike(Function)
// => false
```

#### Defined in

validator/index.ts:50

___

### isArrayLikeObject

▸ **isArrayLikeObject**(`value`): value is ArrayLike\<unknown\> & object

This method is like `isArrayLike` except that it also checks if `value`
is an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check |

#### Returns

value is ArrayLike\<unknown\> & object

`true` if `value` is an array-like object, else `false`

**`Example`**

```ts
isArrayLikeObject([1, 2, 3])
// => true

isArrayLikeObject(document.body.children)
// => true

isArrayLikeObject('abc')
// => false

isArrayLikeObject(Function)
// => false
```

#### Defined in

validator/index.ts:51

___

### isBigInt64Array

▸ **isBigInt64Array**(`value`): value is BigInt64Array

Checks if `value` is classified as a `BigInt64Array` object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check |

#### Returns

value is BigInt64Array

`true` if `value` is a big int 64 array, else `false`

**`Example`**

```ts
isBigInt64Array(new BigInt64Array())
// => true

isBigInt64Array(new Array(2))
// => false
```

#### Defined in

validator/index.ts:52

___

### isBigUint64Array

▸ **isBigUint64Array**(`value`): value is BigUint64Array

Checks if `value` is classified as a `BigUint64Array` object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check |

#### Returns

value is BigUint64Array

`true` if `value` is a big uint 64 array, else `false`

**`Example`**

```ts
isBigUint64Array(new BigUint64Array)
// => true

isBigUint64Array([])
// => false
```

#### Defined in

validator/index.ts:53

___

### isBoolean

▸ **isBoolean**(`value`): value is boolean \| Boolean

Checks if `value` is classified as a `Boolean` primitive or object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check |

#### Returns

value is boolean \| Boolean

`true` if `value` is a boolean, else `false`

**`Example`**

```ts
isBoolean(false)
// => true

isBoolean(new Boolean(false))
// => true

isBoolean(0)
// => false
```

#### Defined in

validator/index.ts:54

___

### isBrowser

▸ **isBrowser**(`value?`): value is typeof globalThis & Object

Checks if the current environment is a browser.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | typeof [`globalThis`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/globalThis ) | `globalThis` |

#### Returns

value is typeof globalThis & Object

`true` if the current environment is a browser, else `false`

#### Defined in

validator/index.ts:55

___

### isBuffer

▸ **isBuffer**(`value`): value is Buffer

Checks if `value` is a buffer.

*Note: This function is only available if the Buffer API is available.*

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check |

#### Returns

value is Buffer

`true` if `value` is a buffer, else `false`

**`Example`**

```ts
isBuffer(Buffer.alloc(2))
// => true

isBuffer(new Uint8Array(2))
// => false
```

#### Defined in

validator/index.ts:56

___

### isDataView

▸ **isDataView**(`value`): value is DataView

Checks if `value` is classified as a `DataView` object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check |

#### Returns

value is DataView

`true` if `value` is a data view, else `false`

**`Example`**

```ts
isDataView(new DataView(new ArrayBuffer(2)))
// => true

isDataView(new ArrayBuffer(2))
// => false
```

#### Defined in

validator/index.ts:57

___

### isDate

▸ **isDate**(`value`): value is Date

Checks if `value` is classified as a `Date` object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check |

#### Returns

value is Date

`true` if `value` is a date object, else `false`

**`Example`**

```ts
isDate(new Date)
// => true

isDate('Mon April 23 2012')
// => false
```

#### Defined in

validator/index.ts:58

___

### isEmpty

▸ **isEmpty**(`value`): `boolean`

Checks if a value is empty.

*Supports: strings, arrays, objects, maps, sets, typed arrays.*

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check |

#### Returns

`boolean`

`true` if `value` is empty, else `false`

**`Example`**

```ts
isEmpty(null)
// => true

isEmpty({})
// => true

isEmpty("")
// => true

isEmpty([1, 2, 3])
// => false

isEmpty('abc')
// => false

isEmpty({ 'a': 1 })
// => false
```

#### Defined in

validator/index.ts:59

___

### isEqual

▸ **isEqual**(`a`, `b`): `boolean`

Performs a deep comparison between two values to determine if they are
equivalent.

*Supports: primitives, arrays, objects, dates, regexes, maps, sets, buffers, typed arrays*

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `unknown` | The value to compare |
| `b` | `unknown` | The other value to compare |

#### Returns

`boolean`

`true` if the values are equivalent, else `false`

**`Example`**

```ts
const object = { a: { b: 2 } };
const other = { a: { b: 2 } };

isEqual(object, other);
// => true

object === other;
// => false
```

#### Defined in

validator/index.ts:60

___

### isError

▸ **isError**(`value`): value is Error \| DOMException

Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
`SyntaxError`, `TypeError`, `URIError`, or `DOMException` object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check |

#### Returns

value is Error \| DOMException

`true` if `value` is an error object, else `false`

**`Example`**

```ts
isError(new Error)
// => true

isError(Error)
// => false
```

#### Defined in

validator/index.ts:61

___

### isFloat32Array

▸ **isFloat32Array**(`value`): value is Float32Array

Checks if `value` is classified as a `Float32Array` object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check |

#### Returns

value is Float32Array

`true` if `value` is a float32 array, else `false`

**`Example`**

```ts
isFloat32Array(new Float32Array)
// => true

isFloat32Array([])
// => false
```

#### Defined in

validator/index.ts:62

___

### isFloat64Array

▸ **isFloat64Array**(`value`): value is Float64Array

Checks if `value` is classified as a `Float64Array` object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check |

#### Returns

value is Float64Array

`true` if `value` is a float64 array, else `false`

**`Example`**

```ts
isFloat64Array(new Float64Array)
// => true

isFloat64Array([])
// => false
```

#### Defined in

validator/index.ts:63

___

### isFunction

▸ **isFunction**(`value`): value is Function

Checks if `value` is classified as a `Function` object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check |

#### Returns

value is Function

`true` if `value` is a function, else `false`

**`Example`**

```ts
isFunction(class Any{})
// => true

isFunction(() => {})
// => true

isFunction(async () => {})
// => true

isFunction(function * Any() {})
// => true

isFunction(Math.round)
// => true

isFunction(/abc/)
// => false
```

#### Defined in

validator/index.ts:64

___

### isInt16Array

▸ **isInt16Array**(`value`): value is Int16Array

Checks if `value` is classified as an `Int16Array` object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check |

#### Returns

value is Int16Array

`true` if `value` is an int16 array, else `false`

**`Example`**

```ts
isInt16Array(new Int16Array)
// => true

isInt16Array([])
// => false
```

#### Defined in

validator/index.ts:65

___

### isInt32Array

▸ **isInt32Array**(`value`): value is Int32Array

Checks if `value` is classified as an `Int32Array` object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check |

#### Returns

value is Int32Array

`true` if `value` is an int32 array, else `false`

**`Example`**

```ts
isInt32Array(new Int32Array)
// => true

isInt32Array([])
// => false
```

#### Defined in

validator/index.ts:66

___

### isInt8Array

▸ **isInt8Array**(`value`): value is Int8Array

Checks if `value` is classified as an `Int8Array` object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check |

#### Returns

value is Int8Array

`true` if `value` is an int8 array, else `false`

**`Example`**

```ts
isInt8Array(new Int8Array)
// => true

isInt8Array([])
// => false
```

#### Defined in

validator/index.ts:67

___

### isLength

▸ **isLength**(`value`): value is number

Checks if `value` is a valid array-like length.

***Note:** This method is loosely based on
[`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).*

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check |

#### Returns

value is number

`true` if `value` is a valid length, else `false`

**`Example`**

```ts
isLength(3)
// => true

isLength(Number.MIN_VALUE)
// => false

isLength(Infinity)
// => false

isLength('3')
// => false
```

#### Defined in

validator/index.ts:68

___

### isMap

▸ **isMap**\<`T`\>(`value`): value is T extends ReadonlyMap\<any, any\> ? unknown extends T ? never : ReadonlyMap\<any, any\> : Map\<unknown, unknown\>

Checks if `value` is classified as a `Map` object.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | {} \| `T` | The value to check |

#### Returns

value is T extends ReadonlyMap\<any, any\> ? unknown extends T ? never : ReadonlyMap\<any, any\> : Map\<unknown, unknown\>

`true` if `value` is a map, else `false`

**`Example`**

```ts
isMap(new Map)
// => true

isMap(new WeakMap)
// => false
```

#### Defined in

validator/index.ts:69

___

### isNavigator

▸ **isNavigator**(`value?`): value is typeof globalThis & Object

Checks if the current environment is a navigator.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | typeof [`globalThis`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/globalThis ) | `globalThis` |

#### Returns

value is typeof globalThis & Object

`true` if the current environment is a navigator, else `false`

#### Defined in

validator/index.ts:70

___

### isNil

▸ **isNil**(`value`): value is undefined \| null

Checks if `value` is `null` or `undefined`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check |

#### Returns

value is undefined \| null

`true` if `value` is nullish, else `false`

**`Example`**

```ts
isNil(null)
// => true

isNil(void 0)
// => true

isNil(NaN)
// => false
```

#### Defined in

validator/index.ts:71

___

### isNull

▸ **isNull**(`value`): value is null

Checks if `value` is `null`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check |

#### Returns

value is null

`true` if `value` is `null`, else `false`

**`Example`**

```ts
isNull(null)
// => true

isNull(void 0)
// => false
```

#### Defined in

validator/index.ts:72

___

### isNumber

▸ **isNumber**(`value`): value is number \| Number

Checks if `value` is classified as a `Number` primitive or object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check |

#### Returns

value is number \| Number

`true` if `value` is a number, else `false`

**`Example`**

```ts
isNumber(3)
// => true

isNumber(Number.MIN_VALUE)
// => true

isNumber(Infinity)
// => true

isNumber('3')
// => false
```

#### Defined in

validator/index.ts:73

___

### isObject

▸ **isObject**(`value`): value is object \| Function

Checks if `value` is the
[language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check |

#### Returns

value is object \| Function

`true` if `value` is an object, else `false`

**`Example`**

```ts
isObject({})
// => true

isObject([1, 2, 3])
// => true

isObject(Function)
// => true

isObject(null)
// => false
```

#### Defined in

validator/index.ts:74

___

### isObjectLike

▸ **isObjectLike**(`value`): value is object

Checks if `value` is object-like. A value is object-like if it's not `null`
and has a `typeof` result of "object".

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check |

#### Returns

value is object

`true` if `value` is object-like, else `false`

**`Example`**

```ts
isObjectLike({})
// => true

isObjectLike([1, 2, 3])
// => true

isObjectLike(Function)
// => false

isObjectLike(null)
// => false
```

#### Defined in

validator/index.ts:75

___

### isPlainObject

▸ **isPlainObject**(`value`): value is PlainObject

Checks if the value is a plain object.

Refers to the [PlainObject](../modules.md#plainobject) type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check |

#### Returns

value is PlainObject

`true` if `value` is a plain object, else `false`

**`Example`**

```ts
isPlainObject({})
// => true

isPlainObject({ a: 1 })
// => true

isPlainObject(null)
// => false

isPlainObject('1')
// => false

isPlainObject([])
// => false

isPlainObject(new Function())
// => false

isPlainObject(new Date())
// => false
```

#### Defined in

validator/index.ts:76

___

### isPrimitive

▸ **isPrimitive**(`value`): value is Primitive

Checks if `value` is primitive.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check |

#### Returns

value is Primitive

`true` if `value` is primitive, else `false`

**`Example`**

```ts
isPrimitive(null);
// => true

isPrimitive(undefined);
// => true

isPrimitive(0);
// => true

isPrimitive("");
// => true

isPrimitive(true);
// => true

isPrimitive(Symbol());
// => true

isPrimitive({});
// => false

isPrimitive([]);
// => false

isPrimitive(() => {});
// => false
```

#### Defined in

validator/index.ts:77

___

### isRegExp

▸ **isRegExp**(`value`): value is RegExp

Checks if `value` is classified as a `RegExp` object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check |

#### Returns

value is RegExp

`true` if `value` is a regexp, else `false`

**`Example`**

```ts
isRegExp(/abc/)
// => true

isRegExp('/abc/')
// => false
```

#### Defined in

validator/index.ts:78

___

### isSet

▸ **isSet**(`value`): value is Set\<unknown\>

Checks if `value` is classified as a `Set` object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check |

#### Returns

value is Set\<unknown\>

`true` if `value` is a set, else `false`

**`Example`**

```ts
isSet(new Set)
// => true

isSet(new WeakSet)
// => false
```

#### Defined in

validator/index.ts:79

___

### isString

▸ **isString**(`value`): value is string \| String

Checks if `value` is classified as a `String` primitive or object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check |

#### Returns

value is string \| String

`true` if `value` is a string, else `false`

**`Example`**

```ts
isString('abc')
// => true

isString(1)
// => false
```

#### Defined in

validator/index.ts:80

___

### isSymbol

▸ **isSymbol**(`value`): value is symbol

Checks if `value` is classified as a `Symbol` primitive or object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check |

#### Returns

value is symbol

`true` if `value` is a symbol, else `false`

**`Example`**

```ts
isSymbol(Symbol.iterator)
// => true

isSymbol('abc')
// => false
```

#### Defined in

validator/index.ts:81

___

### isTypedArray

▸ **isTypedArray**(`value`): value is TypedArray

Checks if `value` is classified as a typed array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check |

#### Returns

value is TypedArray

`true` if `value` is a typed array, else `false`

**`Example`**

```ts
isTypedArray(new Uint8Array)
// => true

isTypedArray([])
// => false
```

#### Defined in

validator/index.ts:82

___

### isUint16Array

▸ **isUint16Array**(`value`): value is Uint16Array

Checks if `value` is classified as a `Uint16Array` typed array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check |

#### Returns

value is Uint16Array

`true` if `value` is a `Uint16Array`, else `false`

**`Example`**

```ts
isUint16Array(new Uint16Array)
// => true

isUint16Array([])
// => false
```

#### Defined in

validator/index.ts:83

___

### isUint32Array

▸ **isUint32Array**(`value`): value is Uint32Array

Checks if `value` is classified as a `Uint32Array` typed array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check |

#### Returns

value is Uint32Array

`true` if `value` is a `Uint32Array`, else `false`

**`Example`**

```ts
isUint32Array(new Uint32Array)
// => true

isUint32Array([])
// => false
```

#### Defined in

validator/index.ts:84

___

### isUint8Array

▸ **isUint8Array**(`value`): value is Uint8Array

Checks if `value` is classified as a `Uint8Array` object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check |

#### Returns

value is Uint8Array

`true` if `value` is a uint8 array, else `false`

**`Example`**

```ts
isUint8Array(new Uint8Array)
// => true

isUint8Array(new Float32Array)
// => false
```

#### Defined in

validator/index.ts:85

___

### isUint8ClampedArray

▸ **isUint8ClampedArray**(`value`): value is Uint8ClampedArray

Checks if `value` is classified as a `Uint8ClampedArray` object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check |

#### Returns

value is Uint8ClampedArray

`true` if `value` is a uint8 clamped array, else `false`

**`Example`**

```ts
isUint8ClampedArray(new Uint8ClampedArray)
// => true

isUint8ClampedArray([])
// => false
```

#### Defined in

validator/index.ts:86

___

### isUndefined

▸ **isUndefined**(`value`): value is undefined

Checks if `value` is `undefined`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check |

#### Returns

value is undefined

`true` if `value` is `undefined`, else `false`

**`Example`**

```ts
isUndefined(void 0)
// => true

isUndefined(null)
// => false
```

#### Defined in

validator/index.ts:87

___

### isUrl

▸ **isUrl**(`string`): `boolean`

Checks if given string is a valid URL

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | The string to check |

#### Returns

`boolean`

`true` if given string is a valid URL, else `false`

**`Example`**

```ts
isUrl('https://google.com')
// => true
isUrl('google.com')
// => false
```

#### Defined in

validator/index.ts:88

___

### isWeakMap

▸ **isWeakMap**(`value`): value is WeakMap\<object, unknown\>

Checks if `value` is classified as a `WeakMap` object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check |

#### Returns

value is WeakMap\<object, unknown\>

`true` if `value` is a weak map, else `false`

**`Example`**

```ts
isWeakMap(new WeakMap)
// => true

isWeakMap(new Map)
// => false
```

#### Defined in

validator/index.ts:89

___

### isWeakSet

▸ **isWeakSet**(`value`): value is WeakSet\<object\>

Checks if `value` is classified as a `WeakSet` object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check |

#### Returns

value is WeakSet\<object\>

`true` if `value` is a weak set, else `false`

**`Example`**

```ts
isWeakSet(new WeakSet)
// => true

isWeakSet(new Set)
// => false
```

#### Defined in

validator/index.ts:90
