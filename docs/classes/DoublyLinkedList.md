[underscorets](../README.md) / [Exports](../modules.md) / DoublyLinkedList

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

util/doublyLinkedList.ts:292

## Properties

### \_head

• `Private` **\_head**: `undefined` \| `Node`\<`T`\>

First node in linked list.

#### Defined in

util/doublyLinkedList.ts:244

___

### \_size

• `Private` **\_size**: `number` = `0`

Number of nodes in linked list.

#### Defined in

util/doublyLinkedList.ts:240

___

### \_tail

• `Private` **\_tail**: `undefined` \| `Node`\<`T`\>

Last node in linked list.

#### Defined in

util/doublyLinkedList.ts:248

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

The DoublyLinkedList tag.

#### Returns

`string`

#### Defined in

util/doublyLinkedList.ts:274

___

### head

• `get` **head**(): `undefined` \| `Node`\<`T`\>

First node in linked list.

#### Returns

`undefined` \| `Node`\<`T`\>

#### Defined in

util/doublyLinkedList.ts:260

___

### size

• `get` **size**(): `number`

Number of nodes in linked list.

#### Returns

`number`

#### Defined in

util/doublyLinkedList.ts:253

___

### tail

• `get` **tail**(): `undefined` \| `Node`\<`T`\>

Last node in linked list.

#### Returns

`undefined` \| `Node`\<`T`\>

#### Defined in

util/doublyLinkedList.ts:267

## Methods

### [isConcatSpreadable]

▸ **[isConcatSpreadable]**(): `boolean`

#### Returns

`boolean`

#### Defined in

util/doublyLinkedList.ts:285

___

### [iterator]

▸ **[iterator]**(): `IterableIterator`\<`T`\>

An iterator for the DoublyLinkedList to use with `for...of` loops.

#### Returns

`IterableIterator`\<`T`\>

#### Defined in

util/doublyLinkedList.ts:281

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

util/doublyLinkedList.ts:479

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

util/doublyLinkedList.ts:337

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

util/doublyLinkedList.ts:391

___

### copy

▸ **copy**(): [`DoublyLinkedList`](DoublyLinkedList.md)\<`T`\>

#### Returns

[`DoublyLinkedList`](DoublyLinkedList.md)\<`T`\>

A copy of the DoublyLinkedList

#### Defined in

util/doublyLinkedList.ts:554

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

util/doublyLinkedList.ts:434

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

util/doublyLinkedList.ts:469

___

### pop

▸ **pop**(): `undefined` \| `Node`\<`T`\>

Remove node from end of list.

#### Returns

`undefined` \| `Node`\<`T`\>

Removed node

#### Defined in

util/doublyLinkedList.ts:358

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

util/doublyLinkedList.ts:331

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

util/doublyLinkedList.ts:500

___

### reverse

▸ **reverse**(): [`DoublyLinkedList`](DoublyLinkedList.md)\<`T`\>

Reverse the list.

#### Returns

[`DoublyLinkedList`](DoublyLinkedList.md)\<`T`\>

Entire linked list

#### Defined in

util/doublyLinkedList.ts:525

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

util/doublyLinkedList.ts:456

___

### shift

▸ **shift**(): `undefined` \| `Node`\<`T`\>

Remove node from beginning of list.

#### Returns

`undefined` \| `Node`\<`T`\>

Removed node

#### Defined in

util/doublyLinkedList.ts:412

___

### toArray

▸ **toArray**(): `T`[]

Converts the DoublyLinkedList to an array.

#### Returns

`T`[]

The DoublyLinkedList as an array

#### Defined in

util/doublyLinkedList.ts:586

___

### toJSON

▸ **toJSON**(): `T`[]

Converts the DoublyLinkedList to JSON.

#### Returns

`T`[]

The DoublyLinkedList as JSON

#### Defined in

util/doublyLinkedList.ts:577

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

The DoublyLinkedList as a string.

#### Defined in

util/doublyLinkedList.ts:561

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

util/doublyLinkedList.ts:385

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

util/doublyLinkedList.ts:302

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

util/doublyLinkedList.ts:312
