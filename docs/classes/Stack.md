[underscorets - v0.1.5](../README.md) / Stack

# Class: Stack\<T\>

A stack data structure.

**Static Methods:**
- `from` - Creates a stack from an array.
- `fromString` - Creates a stack from a string.

**Methods:**
- `push` - Pushes a value to the stack. Returns the stack.
- `pop` - Pops a value from the stack. Returns the popped value.
- `copy` - Constructs a new stack with the same values as the current stack.
- `toString` - Returns the stack as a string.
- `toJSON` - Converts the stack to a string used by `JSON.stringify()`.
- `toArray` - Converts the stack to an array.

**Properties:**
- `top` - The top node of the stack.
- `size` - The size of the stack.

**`Example`**

```ts
const stack = new Stack<string>();

stack.push("foo");
// => { size: 1, top: { value: "foo", next: undefined } }

stack.push("bar");
// => { size: 2, top: { value: "bar", next: { value: "foo", next: undefined } } }

stack.pop();
// => { value: "bar", next: undefined }

stack.size;
// => 1

stack.top;
// => { value: "foo", next: undefined }

stack.toArray();
// => ["foo"]
```

## Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the values stored in the stack |

## Table of contents

### Constructors

- [constructor](Stack.md#constructor)

### Properties

- [\_size](Stack.md#_size)
- [\_top](Stack.md#_top)

### Accessors

- [[toStringTag]](Stack.md#[tostringtag])
- [size](Stack.md#size)
- [top](Stack.md#top)

### Methods

- [[isConcatSpreadable]](Stack.md#[isconcatspreadable])
- [[iterator]](Stack.md#[iterator])
- [\_push](Stack.md#_push)
- [clear](Stack.md#clear)
- [copy](Stack.md#copy)
- [pop](Stack.md#pop)
- [push](Stack.md#push)
- [toArray](Stack.md#toarray)
- [toJSON](Stack.md#tojson)
- [toString](Stack.md#tostring)
- [from](Stack.md#from)
- [fromString](Stack.md#fromstring)

## Constructors

### constructor

• **new Stack**\<`T`\>(`values?`): [`Stack`](Stack.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values?` | `T`[] |

#### Returns

[`Stack`](Stack.md)\<`T`\>

#### Defined in

misc/stack.ts:83

## Properties

### \_size

• `Private` **\_size**: `number` = `0`

#### Defined in

misc/stack.ts:49

___

### \_top

• `Private` **\_top**: `undefined` \| `Node`\<`T`\>

#### Defined in

misc/stack.ts:48

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

The Stack tag.

#### Returns

`string`

#### Defined in

misc/stack.ts:68

___

### size

• `get` **size**(): `number`

The size of the stack.

#### Returns

`number`

#### Defined in

misc/stack.ts:61

___

### top

• `get` **top**(): `undefined` \| `Node`\<`T`\>

The top node of the stack.

#### Returns

`undefined` \| `Node`\<`T`\>

#### Defined in

misc/stack.ts:54

## Methods

### [isConcatSpreadable]

▸ **[isConcatSpreadable]**(): `boolean`

#### Returns

`boolean`

#### Defined in

misc/stack.ts:79

___

### [iterator]

▸ **[iterator]**(): `IterableIterator`\<`T`\>

An iterator for the stack to use with `for...of` loops.

#### Returns

`IterableIterator`\<`T`\>

#### Defined in

misc/stack.ts:75

___

### \_push

▸ **_push**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`void`

#### Defined in

misc/stack.ts:128

___

### clear

▸ **clear**(): [`Stack`](Stack.md)\<`T`\>

Clears the stack.

#### Returns

[`Stack`](Stack.md)\<`T`\>

The stack before it was cleared.

#### Defined in

misc/stack.ts:160

___

### copy

▸ **copy**(): [`Stack`](Stack.md)\<`T`\>

Constructs a new stack with the same values as the current stack.

#### Returns

[`Stack`](Stack.md)\<`T`\>

The new stack.

#### Defined in

misc/stack.ts:172

___

### pop

▸ **pop**(): `undefined` \| `Node`\<`T`\>

Pops a value from the stack.

#### Returns

`undefined` \| `Node`\<`T`\>

The popped value, or `undefined` if the stack is empty.

#### Defined in

misc/stack.ts:142

___

### push

▸ **push**(`...value`): `undefined` \| [`Stack`](Stack.md)\<`T`\>

Pushes a value to the stack.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...value` | `T`[] | The value to push to the stack. |

#### Returns

`undefined` \| [`Stack`](Stack.md)\<`T`\>

The stack, or `undefined` if no value was provided.

#### Defined in

misc/stack.ts:122

___

### toArray

▸ **toArray**(): `T`[]

Converts the Stack to an array.

#### Returns

`T`[]

The Stack as an array

#### Defined in

misc/stack.ts:204

___

### toJSON

▸ **toJSON**(): `T`[]

Converts the Stack to a string used by `JSON.stringify()`.

#### Returns

`T`[]

The Stack as a string

#### Defined in

misc/stack.ts:195

___

### toString

▸ **toString**(`replacer?`, `space?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `replacer?` | (`this`: `any`, `key`: `string`, `value`: `any`) => `any` |
| `space?` | `string` \| `number` |

#### Returns

`string`

The Stack as a string.

#### Defined in

misc/stack.ts:179

___

### from

▸ **from**\<`T`\>(`values?`): [`Stack`](Stack.md)\<`T`\>

Creates a stack from an array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values?` | `T`[] | The array to create a stack from. |

#### Returns

[`Stack`](Stack.md)\<`T`\>

The stack.

#### Defined in

misc/stack.ts:93

___

### fromString

▸ **fromString**\<`V`\>(`str`): [`Stack`](Stack.md)\<`V`\>

Creates a Stack from a string.

#### Type parameters

| Name |
| :------ |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String to create Stack from |

#### Returns

[`Stack`](Stack.md)\<`V`\>

Stack created from string

#### Defined in

misc/stack.ts:103
