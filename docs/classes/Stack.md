[underscorets - v0.1.9](../README.md) / Stack

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `values?` | `T`[] | The values to create the stack from |

#### Returns

[`Stack`](Stack.md)\<`T`\>

#### Defined in

[misc/stack.ts:78](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/stack.ts#L78)

## Properties

### \_size

• `Private` **\_size**: `number` = `0`

#### Defined in

[misc/stack.ts:49](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/stack.ts#L49)

___

### \_top

• `Private` **\_top**: `undefined` \| `Node`\<`T`\>

#### Defined in

[misc/stack.ts:48](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/stack.ts#L48)

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

The Stack tag.

#### Returns

`string`

#### Defined in

[misc/stack.ts:62](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/stack.ts#L62)

___

### size

• `get` **size**(): `number`

The size of the stack.

#### Returns

`number`

#### Defined in

[misc/stack.ts:57](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/stack.ts#L57)

___

### top

• `get` **top**(): `undefined` \| `Node`\<`T`\>

The top node of the stack.

#### Returns

`undefined` \| `Node`\<`T`\>

#### Defined in

[misc/stack.ts:52](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/stack.ts#L52)

## Methods

### [isConcatSpreadable]

▸ **[isConcatSpreadable]**(): `boolean`

#### Returns

`boolean`

#### Defined in

[misc/stack.ts:70](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/stack.ts#L70)

___

### [iterator]

▸ **[iterator]**(): `IterableIterator`\<`T`\>

#### Returns

`IterableIterator`\<`T`\>

#### Defined in

[misc/stack.ts:66](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/stack.ts#L66)

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

[misc/stack.ts:123](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/stack.ts#L123)

___

### clear

▸ **clear**(): [`Stack`](Stack.md)\<`T`\>

Removes all Nodes from the stack and returns a copy of the old Stack.

#### Returns

[`Stack`](Stack.md)\<`T`\>

#### Defined in

[misc/stack.ts:146](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/stack.ts#L146)

___

### copy

▸ **copy**(): [`Stack`](Stack.md)\<`T`\>

Creates a copy of the Stack.

#### Returns

[`Stack`](Stack.md)\<`T`\>

#### Defined in

[misc/stack.ts:154](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/stack.ts#L154)

___

### pop

▸ **pop**(): `undefined` \| `Node`\<`T`\>

Removes a Node from the end of the Stack and returns it.

#### Returns

`undefined` \| `Node`\<`T`\>

#### Defined in

[misc/stack.ts:133](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/stack.ts#L133)

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

[misc/stack.ts:117](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/stack.ts#L117)

___

### toArray

▸ **toArray**(): `T`[]

Converts the Stack to an array.

#### Returns

`T`[]

#### Defined in

[misc/stack.ts:176](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/stack.ts#L176)

___

### toJSON

▸ **toJSON**(): `T`[]

Converts the stack to JSON.

#### Returns

`T`[]

#### Defined in

[misc/stack.ts:171](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/stack.ts#L171)

___

### toString

▸ **toString**(`replacer?`, `space?`): `string`

Converts the Stack to a string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `replacer?` | (`this`: `any`, `key`: `string`, `value`: `any`) => `any` |
| `space?` | `string` \| `number` |

#### Returns

`string`

#### Defined in

[misc/stack.ts:159](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/stack.ts#L159)

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

[misc/stack.ts:88](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/stack.ts#L88)

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

[misc/stack.ts:98](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/stack.ts#L98)
