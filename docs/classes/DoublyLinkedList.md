[underscorets - v0.1.9](../README.md) / DoublyLinkedList

# Class: DoublyLinkedList\<T\>

A doubly linked list class with methods to add, remove, and reverse nodes.

**Static Methods:**
- `from` - Creates a DoublyLinkedList from an array.
- `fromString` - Creates a DoublyLinkedList from a string.

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
- `copy` - Returns a copy of the DoublyLinkedList.
- `toString` - Converts the DoublyLinkedList to a string.
- `toJSON` - Converts the DoublyLinkedList to a string used by `JSON.stringify()`.
- `toObject` - Converts the DoublyLinkedList to an object.
- `toArray` - Returns the DoublyLinkedList as an array.

**Properties:**
- `length` - Number of nodes in linked list.
- `head` - First node in linked list.
- `tail` - Last node in linked list.

**`Example`**

```ts
const list = new DoublyLinkedList(1, 2, 3);
list.push(4, 5, 6);
// DoublyLinkedList {
//   length: 6,
//   head: Node {
//     value: 1,
//     next: Node {
//       value: 2,
//       next: ...[Node]
//       prev: ...[Node]
//     },
//     prev: undefined
//   },
//   tail: Node {
//     value: 6,
//     next: undefined,
//     prev: Node {
//       value: 5,
//       next: ...[Node]
//       prev: ...[Node]
//     }
//   }
// }

list.pop();
// Node {
//   value: 6,
//   next: undefined,
//   prev: Node {
//     value: 5,
//     next: ...[Node]
//     prev: ...[Node]
//   }
// }

list.unshift(0);
// DoublyLinkedList {
//   length: 6,
//   head: Node {
//     value: 0,
//     next: Node {
//       value: 1,
//       next: ...[Node]
//       prev: ...[Node]
//     },
//     prev: undefined
//   },
//   tail: Node {
//     value: 5,
//     next: undefined,
//     prev: Node {
//       value: 4,
//       next: ...[Node]
//       prev: ...[Node]
//     }
//   }
// }

list.shift();
// Node {
//   value: 0,
//   next: Node {
//     value: 1,
//     next: ...[Node]
//     prev: ...[Node]
//   },
//   prev: undefined
// }

list.get(2);
// Node {
//   value: 2,
//   next: Node {
//     value: 3,
//     next: Node {
//       value: 4,
//       next: ...[Node]
//       prev: ...[Node]
//     },
//     prev: Node {
//       value: 1,
//       next: ...[Node]
//       prev: ...[Node]
//     }
//   },
//   prev: Node {
//     value: 1,
//     next: ...[Node]
//     prev: ...[Node]
//   }
// }

list.set(2, 10);
// Node {
//   value: 10,
//   next: Node {
//     value: 3,
//     next: Node {
//       value: 4,
//       next: ...[Node]
//       prev: ...[Node]
//     },
//     prev: Node {
//       value: 1,
//       next: ...[Node]
//       prev: ...[Node]
//     }
//   },
//   prev: Node {
//     value: 1,
//     next: ...[Node]
//     prev: ...[Node]
//   }
// }

list.insert(2, 7, 8, 9);
// DoublyLinkedList {
//   length: 9,
//   head: Node {
//     value: 0,
//     next: Node {
//       value: 1,
//       next: Node {
//         value: 7,
//         next: ...[Node]
//         prev: ...[Node]
//       },
//       prev: Node {
//         value: 8,
//         next: ...[Node]
//         prev: ...[Node]
//       }
//     },
//     prev: undefined
//   },
//   tail: Node {
//     value: 6,
//     next: undefined,
//     prev: Node {
//       value: 5,
//       next: ...[Node]
//       prev: ...[Node]
//     }
//   }
// }

list.remove(2);
// Node {
//   value: 7,
//   next: Node {
//     value: 8,
//     next: Node {
//       value: 9,
//       next: ...[Node]
//       prev: ...[Node]
//     },
//     prev: Node {
//       value: 1,
//       next: ...[Node]
//       prev: ...[Node]
//     }
//   },
//   prev: Node {
//     value: 1,
//     next: ...[Node]
//     prev: ...[Node]
//   }
// }

list.reverse();
// DoublyLinkedList {
//   length: 8,
//   head: Node {
//     value: 6,
//     next: Node {
//       value: 5,
//       next: Node {
//         value: 4,
//         next: ...[Node]
//         prev: ...[Node]
//       },
//       prev: Node {
//         value: 9,
//         next: ...[Node]
//         prev: ...[Node]
//       }
//     },
//     prev: undefined
//   },
//   tail: Node {
//     value: 0,
//     next: undefined,
//     prev: Node {
//       value: 1,
//       next: ...[Node]
//       prev: ...[Node]
//     }
//   }
// }
```

## Type parameters

| Name | Description |
| :------ | :------ |
| `T` | Type of value stored in linked list |

## Table of contents

### Constructors

- [constructor](DoublyLinkedList.md#constructor)

### Properties

- [\_head](DoublyLinkedList.md#_head)
- [\_size](DoublyLinkedList.md#_size)
- [\_tail](DoublyLinkedList.md#_tail)

### Accessors

- [[toStringTag]](DoublyLinkedList.md#[tostringtag])
- [head](DoublyLinkedList.md#head)
- [size](DoublyLinkedList.md#size)
- [tail](DoublyLinkedList.md#tail)

### Methods

- [[isConcatSpreadable]](DoublyLinkedList.md#[isconcatspreadable])
- [[iterator]](DoublyLinkedList.md#[iterator])
- [\_insert](DoublyLinkedList.md#_insert)
- [\_push](DoublyLinkedList.md#_push)
- [\_unshift](DoublyLinkedList.md#_unshift)
- [copy](DoublyLinkedList.md#copy)
- [get](DoublyLinkedList.md#get)
- [insert](DoublyLinkedList.md#insert)
- [pop](DoublyLinkedList.md#pop)
- [push](DoublyLinkedList.md#push)
- [remove](DoublyLinkedList.md#remove)
- [reverse](DoublyLinkedList.md#reverse)
- [set](DoublyLinkedList.md#set)
- [shift](DoublyLinkedList.md#shift)
- [toArray](DoublyLinkedList.md#toarray)
- [toJSON](DoublyLinkedList.md#tojson)
- [toString](DoublyLinkedList.md#tostring)
- [unshift](DoublyLinkedList.md#unshift)
- [from](DoublyLinkedList.md#from)
- [fromString](DoublyLinkedList.md#fromstring)

## Constructors

### constructor

• **new DoublyLinkedList**\<`T`\>(`values?`): [`DoublyLinkedList`](DoublyLinkedList.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values?` | `T`[] | Values to initialize the list |

#### Returns

[`DoublyLinkedList`](DoublyLinkedList.md)\<`T`\>

#### Defined in

[misc/doublyLinkedList.ts:273](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/doublyLinkedList.ts#L273)

## Properties

### \_head

• `Private` **\_head**: `undefined` \| `Node`\<`T`\>

#### Defined in

[misc/doublyLinkedList.ts:238](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/doublyLinkedList.ts#L238)

___

### \_size

• `Private` **\_size**: `number` = `0`

#### Defined in

[misc/doublyLinkedList.ts:237](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/doublyLinkedList.ts#L237)

___

### \_tail

• `Private` **\_tail**: `undefined` \| `Node`\<`T`\>

#### Defined in

[misc/doublyLinkedList.ts:239](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/doublyLinkedList.ts#L239)

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

The DoublyLinkedList tag.

#### Returns

`string`

#### Defined in

[misc/doublyLinkedList.ts:257](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/doublyLinkedList.ts#L257)

___

### head

• `get` **head**(): `undefined` \| `Node`\<`T`\>

First node in linked list.

#### Returns

`undefined` \| `Node`\<`T`\>

#### Defined in

[misc/doublyLinkedList.ts:247](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/doublyLinkedList.ts#L247)

___

### size

• `get` **size**(): `number`

Number of nodes in linked list.

#### Returns

`number`

#### Defined in

[misc/doublyLinkedList.ts:242](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/doublyLinkedList.ts#L242)

___

### tail

• `get` **tail**(): `undefined` \| `Node`\<`T`\>

Last node in linked list.

#### Returns

`undefined` \| `Node`\<`T`\>

#### Defined in

[misc/doublyLinkedList.ts:252](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/doublyLinkedList.ts#L252)

## Methods

### [isConcatSpreadable]

▸ **[isConcatSpreadable]**(): `boolean`

#### Returns

`boolean`

#### Defined in

[misc/doublyLinkedList.ts:265](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/doublyLinkedList.ts#L265)

___

### [iterator]

▸ **[iterator]**(): `IterableIterator`\<`T`\>

#### Returns

`IterableIterator`\<`T`\>

#### Defined in

[misc/doublyLinkedList.ts:261](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/doublyLinkedList.ts#L261)

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

[misc/doublyLinkedList.ts:455](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/doublyLinkedList.ts#L455)

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

[misc/doublyLinkedList.ts:318](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/doublyLinkedList.ts#L318)

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

[misc/doublyLinkedList.ts:370](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/doublyLinkedList.ts#L370)

___

### copy

▸ **copy**(): [`DoublyLinkedList`](DoublyLinkedList.md)\<`T`\>

Creates a copy of the DoublyLinkedList.

#### Returns

[`DoublyLinkedList`](DoublyLinkedList.md)\<`T`\>

#### Defined in

[misc/doublyLinkedList.ts:518](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/doublyLinkedList.ts#L518)

___

### get

▸ **get**(`index`): `undefined` \| `Node`\<`T`\>

Get node at index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | Index of node to get |

#### Returns

`undefined` \| `Node`\<`T`\>

Node at index

#### Defined in

[misc/doublyLinkedList.ts:410](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/doublyLinkedList.ts#L410)

___

### insert

▸ **insert**(`index`, `...value`): `undefined` \| [`DoublyLinkedList`](DoublyLinkedList.md)\<`T`\>

Insert value at index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | Index to insert value at |
| `...value` | `T`[] | Value to insert |

#### Returns

`undefined` \| [`DoublyLinkedList`](DoublyLinkedList.md)\<`T`\>

Entire linked list

#### Defined in

[misc/doublyLinkedList.ts:445](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/doublyLinkedList.ts#L445)

___

### pop

▸ **pop**(): `undefined` \| `Node`\<`T`\>

Remove node from end of list.

#### Returns

`undefined` \| `Node`\<`T`\>

Removed node

#### Defined in

[misc/doublyLinkedList.ts:339](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/doublyLinkedList.ts#L339)

___

### push

▸ **push**(`...value`): [`DoublyLinkedList`](DoublyLinkedList.md)\<`T`\>

Add value to end of list.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...value` | `T`[] | Value to add to end of list |

#### Returns

[`DoublyLinkedList`](DoublyLinkedList.md)\<`T`\>

Entire linked list

#### Defined in

[misc/doublyLinkedList.ts:312](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/doublyLinkedList.ts#L312)

___

### remove

▸ **remove**(`index`): `undefined` \| `Node`\<`T`\>

Remove node at index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | Index of node to remove |

#### Returns

`undefined` \| `Node`\<`T`\>

Removed node

#### Defined in

[misc/doublyLinkedList.ts:474](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/doublyLinkedList.ts#L474)

___

### reverse

▸ **reverse**(): [`DoublyLinkedList`](DoublyLinkedList.md)\<`T`\>

Reverse the list.

#### Returns

[`DoublyLinkedList`](DoublyLinkedList.md)\<`T`\>

Entire linked list

#### Defined in

[misc/doublyLinkedList.ts:496](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/doublyLinkedList.ts#L496)

___

### set

▸ **set**(`index`, `value`): `undefined` \| `Node`\<`T`\>

Set value of node at index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | Index of node to set |
| `value` | `T` | Value to set node to |

#### Returns

`undefined` \| `Node`\<`T`\>

Node at index

#### Defined in

[misc/doublyLinkedList.ts:432](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/doublyLinkedList.ts#L432)

___

### shift

▸ **shift**(): `undefined` \| `Node`\<`T`\>

Remove node from beginning of list.

#### Returns

`undefined` \| `Node`\<`T`\>

Removed node

#### Defined in

[misc/doublyLinkedList.ts:390](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/doublyLinkedList.ts#L390)

___

### toArray

▸ **toArray**(): `T`[]

Converts the DoublyLinkedList to an array.

#### Returns

`T`[]

#### Defined in

[misc/doublyLinkedList.ts:540](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/doublyLinkedList.ts#L540)

___

### toJSON

▸ **toJSON**(): `T`[]

Converts the DoublyLinkedList to JSON.

#### Returns

`T`[]

#### Defined in

[misc/doublyLinkedList.ts:535](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/doublyLinkedList.ts#L535)

___

### toString

▸ **toString**(`replacer?`, `space?`): `string`

Converts the DoublyLinkedList to a string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `replacer?` | (`this`: `any`, `key`: `string`, `value`: `any`) => `any` |
| `space?` | `string` \| `number` |

#### Returns

`string`

#### Defined in

[misc/doublyLinkedList.ts:523](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/doublyLinkedList.ts#L523)

___

### unshift

▸ **unshift**(`...value`): [`DoublyLinkedList`](DoublyLinkedList.md)\<`T`\>

Add value to beginning of list.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...value` | `T`[] | Value to add to beginning of list |

#### Returns

[`DoublyLinkedList`](DoublyLinkedList.md)\<`T`\>

Entire linked list

#### Defined in

[misc/doublyLinkedList.ts:364](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/doublyLinkedList.ts#L364)

___

### from

▸ **from**\<`V`\>(`values`): [`DoublyLinkedList`](DoublyLinkedList.md)\<`V`\>

Creates a DoublyLinkedList from an array.

#### Type parameters

| Name |
| :------ |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `V`[] | Values to create DoublyLinkedList from |

#### Returns

[`DoublyLinkedList`](DoublyLinkedList.md)\<`V`\>

DoublyLinkedList created from array

#### Defined in

[misc/doublyLinkedList.ts:283](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/doublyLinkedList.ts#L283)

___

### fromString

▸ **fromString**\<`V`\>(`str`): [`DoublyLinkedList`](DoublyLinkedList.md)\<`V`\>

Creates a DoublyLinkedList from a string.

#### Type parameters

| Name |
| :------ |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String to create DoublyLinkedList from |

#### Returns

[`DoublyLinkedList`](DoublyLinkedList.md)\<`V`\>

DoublyLinkedList created from string

#### Defined in

[misc/doublyLinkedList.ts:293](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/doublyLinkedList.ts#L293)
