[underscorets - v0.1.6](../README.md) / LinkedList

# Class: LinkedList\<T\>

A linked list class with methods to add, remove, and reverse nodes.

**Static Methods:**
- `from` - Creates a LinkedList from an array.
- `fromString` - Creates a LinkedList from a string.

**Methods:**
- `push` - Add value to end of list. Returns entire linked list.
- `pop` - Remove node from end of list. Returns removed node.
- `unshift` - Add value to beginning of list. Returns entire linked list.
- `shift` - Remove node from beginning of list. Returns removed node.
- `get` - Get node at an index. Returns node at index.
- `set` - Set node at an index to a value. Returns node at index.
- `insert` - Insert value at an index. Returns entire linked list.
- `remove` - Remove node at an index. Returns removed node.
- `reverse` - Reverse the linked list. Returns entire reversed linked list.
- `copy` - Returns a copy of the LinkedList.
- `toString` - Returns the LinkedList as a string.
- `toJSON` - Converts the LinkedList to a string used by `JSON.stringify()`.
- `toObject` - Converts the LinkedList to an object.
- `toArray` - Returns the LinkedList as an array.

**Properties:**
- `length` - Number of nodes in linked list.
- `head` - First node in linked list.
- `tail` - Last node in linked list.

**`Example`**

```ts
const list = new LinkedList(1, 2, 3);

list.push(4, 5, 6);
// => LinkedList {
//   length: 6,
//   head: Node {
//     value: 1,
//     next: Node {
//       value: 2,
//       next: ...[Node]
//     }
//   },
//   tail: Node {
//     value: 6,
//     next: undefined
//   }
// }

list.pop();
// => Node {
//   value: 6,
//   next: undefined
// }

list.unshift(0);
// => LinkedList {
//   length: 6,
//   head: Node {
//     value: 0,
//     next: Node {
//       value: 1,
//       next: ...[Node]
//     }
//   },
//   tail: Node {
//     value: 5,
//     next: undefined
//   }
// }

list.shift();
// => Node {
//   value: 0,
//   next: undefined
// }

list.get(2);
// => Node {
//   value: 2,
//   next: Node {
//     value: 3,
//     next: Node {
//       value: 4,
//       next: ...[Node]
//     }
//   }
// }

list.set(2, 10);
// => Node {
//   value: 10,
//   next: Node {
//     value: 3,
//     next: Node {
//       value: 4,
//       next: ...[Node]
//     }
//   }
// }

list.insert(2, 7, 8, 9);
// => LinkedList {
//   length: 8,
//   head: Node {
//     value: 0,
//     next: Node {
//       value: 1,
//       next: Node {
//         value: 7,
//         next: ...[Node]
//       }
//     }
//   },
//   tail: Node {
//     value: 6,
//     next: undefined
//   }
// }

list.remove(2);
// => Node {
//   value: 7,
//   next: Node {
//     value: 8,
//     next: Node {
//       value: 9,
//       next: ...[Node]
//     }
//   }
// }

list.reverse();
// => LinkedList {
//   length: 7,
//   head: Node {
//     value: 6,
//     next: Node {
//       value: 5,
//       next: Node {
//         value: 4,
//         next: ...[Node]
//       }
//     }
//   },
//   tail: Node {
//     value: 0,
//     next: undefined
//   }
// }
```

## Type parameters

| Name | Description |
| :------ | :------ |
| `T` | Type of value stored in linked list |

## Table of contents

### Constructors

- [constructor](LinkedList.md#constructor)

### Properties

- [\_head](LinkedList.md#_head)
- [\_size](LinkedList.md#_size)
- [\_tail](LinkedList.md#_tail)

### Accessors

- [[toStringTag]](LinkedList.md#[tostringtag])
- [head](LinkedList.md#head)
- [size](LinkedList.md#size)
- [tail](LinkedList.md#tail)

### Methods

- [[isConcatSpreadable]](LinkedList.md#[isconcatspreadable])
- [[iterator]](LinkedList.md#[iterator])
- [\_insert](LinkedList.md#_insert)
- [\_push](LinkedList.md#_push)
- [\_unshift](LinkedList.md#_unshift)
- [copy](LinkedList.md#copy)
- [get](LinkedList.md#get)
- [insert](LinkedList.md#insert)
- [pop](LinkedList.md#pop)
- [push](LinkedList.md#push)
- [remove](LinkedList.md#remove)
- [reverse](LinkedList.md#reverse)
- [set](LinkedList.md#set)
- [shift](LinkedList.md#shift)
- [toArray](LinkedList.md#toarray)
- [toJSON](LinkedList.md#tojson)
- [toString](LinkedList.md#tostring)
- [unshift](LinkedList.md#unshift)
- [from](LinkedList.md#from)
- [fromString](LinkedList.md#fromstring)

## Constructors

### constructor

• **new LinkedList**\<`T`\>(`values?`): [`LinkedList`](LinkedList.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values?` | `T`[] | Values to initialize the list |

#### Returns

[`LinkedList`](LinkedList.md)\<`T`\>

#### Defined in

[misc/linkedList.ts:212](https://github.com/mhodge11/underscorets/blob/f879ca6/src/misc/linkedList.ts#L212)

## Properties

### \_head

• **\_head**: `undefined` \| `Node`\<`T`\>

First node in linked list.

#### Defined in

[misc/linkedList.ts:164](https://github.com/mhodge11/underscorets/blob/f879ca6/src/misc/linkedList.ts#L164)

___

### \_size

• **\_size**: `number` = `0`

Number of nodes in linked list.

#### Defined in

[misc/linkedList.ts:160](https://github.com/mhodge11/underscorets/blob/f879ca6/src/misc/linkedList.ts#L160)

___

### \_tail

• **\_tail**: `undefined` \| `Node`\<`T`\>

Last node in linked list.

#### Defined in

[misc/linkedList.ts:168](https://github.com/mhodge11/underscorets/blob/f879ca6/src/misc/linkedList.ts#L168)

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

The LinkedList tag.

#### Returns

`string`

#### Defined in

[misc/linkedList.ts:194](https://github.com/mhodge11/underscorets/blob/f879ca6/src/misc/linkedList.ts#L194)

___

### head

• `get` **head**(): `undefined` \| `Node`\<`T`\>

First node in linked list.

#### Returns

`undefined` \| `Node`\<`T`\>

#### Defined in

[misc/linkedList.ts:180](https://github.com/mhodge11/underscorets/blob/f879ca6/src/misc/linkedList.ts#L180)

___

### size

• `get` **size**(): `number`

Number of nodes in linked list.

#### Returns

`number`

#### Defined in

[misc/linkedList.ts:173](https://github.com/mhodge11/underscorets/blob/f879ca6/src/misc/linkedList.ts#L173)

___

### tail

• `get` **tail**(): `undefined` \| `Node`\<`T`\>

Last node in linked list.

#### Returns

`undefined` \| `Node`\<`T`\>

#### Defined in

[misc/linkedList.ts:187](https://github.com/mhodge11/underscorets/blob/f879ca6/src/misc/linkedList.ts#L187)

## Methods

### [isConcatSpreadable]

▸ **[isConcatSpreadable]**(): `boolean`

#### Returns

`boolean`

#### Defined in

[misc/linkedList.ts:205](https://github.com/mhodge11/underscorets/blob/f879ca6/src/misc/linkedList.ts#L205)

___

### [iterator]

▸ **[iterator]**(): `IterableIterator`\<`T`\>

An iterator for the LinkedList to use with `for...of` loops.

#### Returns

`IterableIterator`\<`T`\>

#### Defined in

[misc/linkedList.ts:201](https://github.com/mhodge11/underscorets/blob/f879ca6/src/misc/linkedList.ts#L201)

___

### \_insert

▸ **_insert**(`index`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `value` | `T` |

#### Returns

`void`

#### Defined in

[misc/linkedList.ts:390](https://github.com/mhodge11/underscorets/blob/f879ca6/src/misc/linkedList.ts#L390)

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

[misc/linkedList.ts:257](https://github.com/mhodge11/underscorets/blob/f879ca6/src/misc/linkedList.ts#L257)

___

### \_unshift

▸ **_unshift**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`void`

#### Defined in

[misc/linkedList.ts:313](https://github.com/mhodge11/underscorets/blob/f879ca6/src/misc/linkedList.ts#L313)

___

### copy

▸ **copy**(): [`LinkedList`](LinkedList.md)\<`T`\>

#### Returns

[`LinkedList`](LinkedList.md)\<`T`\>

A copy of the LinkedList

#### Defined in

[misc/linkedList.ts:455](https://github.com/mhodge11/underscorets/blob/f879ca6/src/misc/linkedList.ts#L455)

___

### get

▸ **get**(`index`): `undefined` \| `Node`\<`T`\>

Get node at an index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | Index of node to get |

#### Returns

`undefined` \| `Node`\<`T`\>

Node at index

#### Defined in

[misc/linkedList.ts:352](https://github.com/mhodge11/underscorets/blob/f879ca6/src/misc/linkedList.ts#L352)

___

### insert

▸ **insert**(`index`, `...value`): `undefined` \| [`LinkedList`](LinkedList.md)\<`T`\>

Insert value at an index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | Index to insert value at |
| `...value` | `T`[] | Value to insert |

#### Returns

`undefined` \| [`LinkedList`](LinkedList.md)\<`T`\>

Entire linked list

#### Defined in

[misc/linkedList.ts:380](https://github.com/mhodge11/underscorets/blob/f879ca6/src/misc/linkedList.ts#L380)

___

### pop

▸ **pop**(): `undefined` \| `Node`\<`T`\>

Remove node from end of list.

#### Returns

`undefined` \| `Node`\<`T`\>

Removed node

#### Defined in

[misc/linkedList.ts:277](https://github.com/mhodge11/underscorets/blob/f879ca6/src/misc/linkedList.ts#L277)

___

### push

▸ **push**(`...value`): [`LinkedList`](LinkedList.md)\<`T`\>

Add value to end of list.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...value` | `T`[] | Value to add to end of list |

#### Returns

[`LinkedList`](LinkedList.md)\<`T`\>

Entire linked list

#### Defined in

[misc/linkedList.ts:251](https://github.com/mhodge11/underscorets/blob/f879ca6/src/misc/linkedList.ts#L251)

___

### remove

▸ **remove**(`index`): `undefined` \| `Node`\<`T`\>

Remove node at an index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | Index of node to remove |

#### Returns

`undefined` \| `Node`\<`T`\>

Removed node

#### Defined in

[misc/linkedList.ts:407](https://github.com/mhodge11/underscorets/blob/f879ca6/src/misc/linkedList.ts#L407)

___

### reverse

▸ **reverse**(): [`LinkedList`](LinkedList.md)\<`T`\>

Reverse the linked list.

#### Returns

[`LinkedList`](LinkedList.md)\<`T`\>

Entire reversed linked list

#### Defined in

[misc/linkedList.ts:430](https://github.com/mhodge11/underscorets/blob/f879ca6/src/misc/linkedList.ts#L430)

___

### set

▸ **set**(`index`, `value`): `undefined` \| `Node`\<`T`\>

Set node at an index to a value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | Index of node to set |
| `value` | `T` | Value to set node to |

#### Returns

`undefined` \| `Node`\<`T`\>

Node at index

#### Defined in

[misc/linkedList.ts:367](https://github.com/mhodge11/underscorets/blob/f879ca6/src/misc/linkedList.ts#L367)

___

### shift

▸ **shift**(): `undefined` \| `Node`\<`T`\>

Remove node from beginning of list.

#### Returns

`undefined` \| `Node`\<`T`\>

Removed node

#### Defined in

[misc/linkedList.ts:332](https://github.com/mhodge11/underscorets/blob/f879ca6/src/misc/linkedList.ts#L332)

___

### toArray

▸ **toArray**(): `T`[]

Converts the LinkedList to an array.

#### Returns

`T`[]

The LinkedList as an array

#### Defined in

[misc/linkedList.ts:487](https://github.com/mhodge11/underscorets/blob/f879ca6/src/misc/linkedList.ts#L487)

___

### toJSON

▸ **toJSON**(): `T`[]

Converts the LinkedList to a string used by `JSON.stringify()`.

#### Returns

`T`[]

The LinkedList as a string

#### Defined in

[misc/linkedList.ts:478](https://github.com/mhodge11/underscorets/blob/f879ca6/src/misc/linkedList.ts#L478)

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

The LinkedList as a string.

#### Defined in

[misc/linkedList.ts:462](https://github.com/mhodge11/underscorets/blob/f879ca6/src/misc/linkedList.ts#L462)

___

### unshift

▸ **unshift**(`...value`): [`LinkedList`](LinkedList.md)\<`T`\>

Add value to beginning of list.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...value` | `T`[] | Value to add to beginning of list |

#### Returns

[`LinkedList`](LinkedList.md)\<`T`\>

Entire linked list

#### Defined in

[misc/linkedList.ts:307](https://github.com/mhodge11/underscorets/blob/f879ca6/src/misc/linkedList.ts#L307)

___

### from

▸ **from**\<`T`\>(`values`): [`LinkedList`](LinkedList.md)\<`T`\>

Creates a LinkedList from an array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `T`[] | Values to create LinkedList from |

#### Returns

[`LinkedList`](LinkedList.md)\<`T`\>

LinkedList created from array

#### Defined in

[misc/linkedList.ts:222](https://github.com/mhodge11/underscorets/blob/f879ca6/src/misc/linkedList.ts#L222)

___

### fromString

▸ **fromString**\<`V`\>(`str`): [`LinkedList`](LinkedList.md)\<`V`\>

Creates a LinkedList from a string.

#### Type parameters

| Name |
| :------ |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String to create LinkedList from |

#### Returns

[`LinkedList`](LinkedList.md)\<`V`\>

LinkedList created from string

#### Defined in

[misc/linkedList.ts:232](https://github.com/mhodge11/underscorets/blob/f879ca6/src/misc/linkedList.ts#L232)
