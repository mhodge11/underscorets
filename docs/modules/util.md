[underscorets](../README.md) / [Exports](../modules.md) / util

# Namespace: util

## Table of contents

### Type Aliases

- [BinarySearchTree](util.md#binarysearchtree)
- [DoublyLinkedList](util.md#doublylinkedlist)
- [HashMap](util.md#hashmap)
- [LinkedList](util.md#linkedlist)
- [Stack](util.md#stack)
- [XYZ](util.md#xyz)

### Variables

- [BinarySearchTree](util.md#binarysearchtree-1)
- [DoublyLinkedList](util.md#doublylinkedlist-1)
- [HashMap](util.md#hashmap-1)
- [LinkedList](util.md#linkedlist-1)
- [Stack](util.md#stack-1)
- [XYZ](util.md#xyz-1)

### Functions

- [castArray](util.md#castarray)
- [clone](util.md#clone)
- [cloneDeep](util.md#clonedeep)
- [size](util.md#size)
- [toArray](util.md#toarray)
- [toFinite](util.md#tofinite)
- [toInteger](util.md#tointeger)
- [toLength](util.md#tolength)
- [toNumber](util.md#tonumber)
- [toPath](util.md#topath)
- [toPlainObject](util.md#toplainobject)
- [toSafeInteger](util.md#tosafeinteger)
- [toString](util.md#tostring)

## Other

### BinarySearchTree

Ƭ **BinarySearchTree**\<`T`\>: [`BinarySearchTree`](../classes/BinarySearchTree.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

util/index.ts:22

util/index.ts:29

___

### DoublyLinkedList

Ƭ **DoublyLinkedList**\<`T`\>: [`DoublyLinkedList`](../classes/DoublyLinkedList.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

util/index.ts:23

util/index.ts:30

___

### HashMap

Ƭ **HashMap**\<`T`\>: [`HashMap`](../classes/HashMap.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

util/index.ts:24

util/index.ts:31

___

### LinkedList

Ƭ **LinkedList**\<`T`\>: [`LinkedList`](../classes/LinkedList.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

util/index.ts:25

util/index.ts:32

___

### Stack

Ƭ **Stack**\<`T`\>: [`Stack`](../classes/Stack.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

util/index.ts:26

util/index.ts:33

___

### XYZ

Ƭ **XYZ**: [`XYZ`](../classes/XYZ.md)

#### Defined in

util/index.ts:27

util/index.ts:34

___

### BinarySearchTree

• **BinarySearchTree**: typeof [`BinarySearchTree`](../classes/BinarySearchTree.md)

#### Defined in

util/index.ts:22

util/index.ts:29

___

### DoublyLinkedList

• **DoublyLinkedList**: typeof [`DoublyLinkedList`](../classes/DoublyLinkedList.md)

#### Defined in

util/index.ts:23

util/index.ts:30

___

### HashMap

• **HashMap**: typeof [`HashMap`](../classes/HashMap.md)

#### Defined in

util/index.ts:24

util/index.ts:31

___

### LinkedList

• **LinkedList**: typeof [`LinkedList`](../classes/LinkedList.md)

#### Defined in

util/index.ts:25

util/index.ts:32

___

### Stack

• **Stack**: typeof [`Stack`](../classes/Stack.md)

#### Defined in

util/index.ts:26

util/index.ts:33

___

### XYZ

• **XYZ**: typeof [`XYZ`](../classes/XYZ.md)

#### Defined in

util/index.ts:27

util/index.ts:34

___

### size

▸ **size**(`value`): `number`

Gets the size of `collection` by returning its length for array-like
values or the number of own enumerable string keyed properties for objects.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` \| `object` | The collection to inspect |

#### Returns

`number`

The `value` size

**`Example`**

```ts
size([1, 2, 3])
// => 3

size({ 'a': 1, 'b': 2 })
// => 2

size('pebbles')
// => 7
```

#### Defined in

util/index.ts:39

## Util

### castArray

▸ **castArray**\<`T`\>(`value`): `CastedArray`\<`T`\>

Casts `value` as an array if it's not one.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the value |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | The value to cast |

#### Returns

`CastedArray`\<`T`\>

The casted array

**`Example`**

```ts
castArray(1)
// => [1]

castArray({ 'a': 1 })
// => [{ 'a': 1 }]

castArray('abc')
// => ['abc']

castArray(null)
// => [null]

castArray(undefined)
// => [undefined]

castArray()
// => []

const array = [1, 2, 3]
console.log(castArray(array) === array)
// => true
```

#### Defined in

util/index.ts:36

___

### clone

▸ **clone**\<`T`\>(`value`): `T`

Creates a shallow clone of `value`.

**Note:** This method is loosely based on the
[structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
and supports cloning arrays, array buffers, booleans, date objects, maps,
numbers, `Object` objects, regexes, sets, strings, symbols, and typed
arrays. The own enumerable properties of `arguments` objects are cloned
as plain objects. Object inheritance is preserved. An empty object is
returned for uncloneable values such as error objects, functions, DOM nodes,
and WeakMaps.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | The value to clone |

#### Returns

`T`

The cloned value

**`Example`**

```ts
const objects = [{ 'a': 1 }, { 'b': 2 }]

const shallow = clone(objects)
console.log(shallow[0] === objects[0])
// => true
```

#### Defined in

util/index.ts:37

___

### cloneDeep

▸ **cloneDeep**\<`T`\>(`value`): `T`

This method is like `{@link clone}` except that it recursively clones `value`.
Object inheritance is preserved.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | The value to recursively clone |

#### Returns

`T`

The deep cloned value

**`Example`**

```ts
const objects = [{ 'a': 1 }, { 'b': 2 }]

const deep = cloneDeep(objects)
console.log(deep[0] === objects[0])
// => false
```

#### Defined in

util/index.ts:38

___

### toArray

▸ **toArray**\<`T`\>(`value`): `Item`\<`T`\>[]

Converts `value` to an array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | The value to convert |

#### Returns

`Item`\<`T`\>[]

The converted array

**`Example`**

```ts
toArray({ 'a': 1, 'b': 2 })
// => [1, 2]

toArray('abc')
// => ['a', 'b', 'c']

toArray(1)
// => []

toArray(null)
// => []
```

#### Defined in

util/index.ts:40

___

### toFinite

▸ **toFinite**(`value`): `number`

Converts `value` to a finite number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to convert |

#### Returns

`number`

The converted number

**`Example`**

```ts
toFinite(3.2)
// => 3.2

toFinite(Number.MIN_VALUE)
// => 5e-324

toFinite(Infinity)
// => 1.7976931348623157e+308

toFinite('3.2')
// => 3.2
```

#### Defined in

util/index.ts:41

___

### toInteger

▸ **toInteger**(`value`): `number`

Converts `value` to an integer.

**Note:** This method is loosely based on
[`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to convert |

#### Returns

`number`

The converted integer

**`Example`**

```ts
toInteger(3.2)
// => 3

toInteger(Number.MIN_VALUE)
// => 0

toInteger(Infinity)
// => 1.7976931348623157e+308

toInteger('3.2')
// => 3
```

#### Defined in

util/index.ts:42

___

### toLength

▸ **toLength**(`value`): `number`

Converts `value` to an integer suitable for use as the length of an
array-like object.

**Note:** This method is based on
[`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to convert |

#### Returns

`number`

The converted integer

**`Example`**

```ts
toLength(3.2)
// => 3

toLength(Number.MIN_VALUE)
// => 0

toLength(Infinity)
// => 4294967295

toLength('3.2')
// => 3
```

#### Defined in

util/index.ts:43

___

### toNumber

▸ **toNumber**(`value`): `number`

Converts `value` to a number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to convert |

#### Returns

`number`

The converted number

**`Example`**

```ts
toNumber(3.2)
// => 3.2

toNumber(Number.MIN_VALUE)
// => 5e-324

toNumber(Infinity)
// => Infinity

toNumber('3.2')
// => 3.2
```

#### Defined in

util/index.ts:44

___

### toPath

▸ **toPath**(`value`): `string`

Converts `value` to a property path array.

Numbers are converted to `[${value}]` to index arrays,
characters are converted to `.${value}` to index object properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | (`string` \| `number`)[] | The string\|number array to convert |

#### Returns

`string`

The property path to use with `{@link at}`, `{@link get}` and `{@link set}`

**`Example`**

```ts
toPath(['a', 'b', 'c'])
// => 'a.b.c'

toPath(['a', 0, 'b', 'c'])
// => a[0].b.c
```

#### Defined in

util/index.ts:45

___

### toPlainObject

▸ **toPlainObject**\<`T`\>(`value`): [`PlainObject`](../modules.md#plainobject)\<`T`\>

Converts `value` to a plain object flattening inherited enumerable string
keyed properties of `value` to own properties of the plain object.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to convert |

#### Returns

[`PlainObject`](../modules.md#plainobject)\<`T`\>

The converted plain object

**`Example`**

```ts
function Foo() {
  this.b = 2
}

Foo.prototype.c = 3

assign({ 'a': 1 }, new Foo)
// => { 'a': 1, 'b': 2 }

assign({ 'a': 1 }, toPlainObject(new Foo))
// => { 'a': 1, 'b': 2, 'c': 3 }
```

#### Defined in

util/index.ts:46

___

### toSafeInteger

▸ **toSafeInteger**(`value`): `number`

Converts `value` to a safe integer. A safe integer can be compared and
represented correctly.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to convert |

#### Returns

`number`

The converted safe integer

**`Example`**

```ts
toSafeInteger(3.2)
// => 3

toSafeInteger(Number.MIN_VALUE)
// => 0

toSafeInteger(Infinity)
// => 9007199254740991

toSafeInteger('3.2')
// => 3
```

#### Defined in

util/index.ts:47

___

### toString

▸ **toString**(`value`): `string`

Converts `value` to a string. An empty string is returned for `null`
and `undefined` values. The sign of `-0` is preserved.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to convert |

#### Returns

`string`

The converted string

**`Example`**

```ts
toString(null)
// => ''

toString(-0)
// => '-0'

toString([1, 2, 3])
// => '1,2,3'
```

#### Defined in

util/index.ts:48
