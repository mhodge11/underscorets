[underscorets - v0.1.5](../README.md) / BinarySearchTree

# Class: BinarySearchTree\<T\>

A binary search tree is a data structure that is used to store data in a sorted manner.
Each node in the binary search tree has a value, a left node, and a right node.
The left node is always less than the parent node, and the right node is always greater than the parent node.
This allows for fast searching, inserting, and deleting of data.

**Static Methods:**
- `from` - Creates a binary search tree from an array.
- `fromString` - Creates a binary search tree from a string.

**Methods:**
- `insert` - Inserts a value into the binary search tree. Returns the binary search tree.
- `contains` - Check if the binary search tree contains a value. Returns `true` if the binary search tree contains the value, `false` otherwise.
- `get` - Finds a value in the binary search tree and returns the node. Returns the node containing the value or `undefined` if the value doesn't exist.
- `minValueNode` - Finds the minimum value node in the binary search tree. Returns the minimum value node.
- `maxValueNode` - Finds the maximum value node in the binary search tree. Returns the maximum value node.
- `dfsPreOrder` - Performs a depth-first search on the binary search tree using pre-order traversal. Returns the values of the binary search tree in pre-order.
- `dfsPostOrder` - Performs a depth-first search on the binary search tree using post-order traversal. Returns the values of the binary search tree in post-order.
- `dfsInOrder` - Performs a depth-first search on the binary search tree using in-order traversal. Returns the values of the binary search tree in in-order.
- `bfs` - Performs a breadth-first search on the binary search tree. Returns the values of the binary search tree in breadth-first order.
- `copy` - Constructs a new binary search tree with the same values as the current binary search tree.
- `toString` - Returns the binary search tree as a string.
- `toJSON` - Converts the binary search tree to a string used by `JSON.stringify()`.
- `toObject` - Converts the binary search tree to an object.

**Properties:**
- `raw` - The raw data of the binary search tree.
- `allowDuplicates` - Whether the binary search tree allows duplicate values.
- `compare` - The compare function of the binary search tree used to choose left or right.

**`Example`**

```ts
const tree = new BinarySearchTree<number>();

tree.insert(5);
// => BinarySearchTree { _root: Node { value: 5, left: undefined, right: undefined } }
tree.insert(3);
// => BinarySearchTree { _root: Node { value: 5, left: Node { value: 3, left: undefined, right: undefined }, right: undefined } }
tree.insert(7);
// => BinarySearchTree { _root: Node { value: 5, left: Node { value: 3, left: undefined, right: undefined }, right: Node { value: 7, left: undefined, right: undefined } } }

tree.contains(3);
// => true
tree.contains(4);
// => false

tree.minValueNode();
// => Node { value: 3, left: undefined, right: undefined }
tree.maxValueNode();
// => Node { value: 7, left: undefined, right: undefined }

tree.dfsPreOrder();
// => [5, 3, 7]
tree.dfsPostOrder();
// => [3, 7, 5]
tree.dfsInOrder();
// => [3, 5, 7]
tree.bfs();
// => [5, 3, 7]

tree.remove(3);
// => BinarySearchTree { _root: Node { value: 5, left: undefined, right: Node { value: 7, left: undefined, right: undefined } } }
```

## Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the values stored in the binary search tree |

## Table of contents

### Constructors

- [constructor](BinarySearchTree.md#constructor)

### Properties

- [\_allowDuplicates](BinarySearchTree.md#_allowduplicates)
- [\_compare](BinarySearchTree.md#_compare)
- [\_root](BinarySearchTree.md#_root)
- [\_size](BinarySearchTree.md#_size)

### Accessors

- [[toStringTag]](BinarySearchTree.md#[tostringtag])
- [allowDuplicates](BinarySearchTree.md#allowduplicates)
- [compare](BinarySearchTree.md#compare)
- [raw](BinarySearchTree.md#raw)
- [size](BinarySearchTree.md#size)

### Methods

- [[isConcatSpreadable]](BinarySearchTree.md#[isconcatspreadable])
- [[iterator]](BinarySearchTree.md#[iterator])
- [\_dfsInOrder](BinarySearchTree.md#_dfsinorder)
- [\_dfsPostOrder](BinarySearchTree.md#_dfspostorder)
- [\_dfsPreOrder](BinarySearchTree.md#_dfspreorder)
- [bfs](BinarySearchTree.md#bfs)
- [contains](BinarySearchTree.md#contains)
- [copy](BinarySearchTree.md#copy)
- [dfsInOrder](BinarySearchTree.md#dfsinorder)
- [dfsPostOrder](BinarySearchTree.md#dfspostorder)
- [dfsPreOrder](BinarySearchTree.md#dfspreorder)
- [get](BinarySearchTree.md#get)
- [insert](BinarySearchTree.md#insert)
- [maxValueNode](BinarySearchTree.md#maxvaluenode)
- [minValueNode](BinarySearchTree.md#minvaluenode)
- [pushToTraversalArray](BinarySearchTree.md#pushtotraversalarray)
- [toJSON](BinarySearchTree.md#tojson)
- [toObject](BinarySearchTree.md#toobject)
- [toString](BinarySearchTree.md#tostring)
- [from](BinarySearchTree.md#from)
- [fromString](BinarySearchTree.md#fromstring)

## Constructors

### constructor

• **new BinarySearchTree**\<`T`\>(`options?`): [`BinarySearchTree`](BinarySearchTree.md)\<`T`\>

Creates a new BinarySearchTree.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.allowDuplicates?` | `boolean` |
| `options.compare?` | (`a`: `T`, `b`: `T`) => ``0`` \| ``1`` \| ``-1`` |
| `options.values?` | `T`[] |

#### Returns

[`BinarySearchTree`](BinarySearchTree.md)\<`T`\>

#### Defined in

misc/binarySearchTree.ts:140

## Properties

### \_allowDuplicates

• `Private` **\_allowDuplicates**: `boolean` = `false`

#### Defined in

misc/binarySearchTree.ts:72

___

### \_compare

• `Private` **\_compare**: (`a`: `T`, `b`: `T`) => ``0`` \| ``1`` \| ``-1``

#### Type declaration

▸ (`a`, `b`): ``0`` \| ``1`` \| ``-1``

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T` |
| `b` | `T` |

##### Returns

``0`` \| ``1`` \| ``-1``

#### Defined in

misc/binarySearchTree.ts:71

___

### \_root

• `Private` **\_root**: `undefined` \| `Node`\<`T`\>

#### Defined in

misc/binarySearchTree.ts:70

___

### \_size

• `Private` **\_size**: `number` = `0`

#### Defined in

misc/binarySearchTree.ts:73

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

The BinarySearchTree tag.

#### Returns

`string`

#### Defined in

misc/binarySearchTree.ts:99

___

### allowDuplicates

• `get` **allowDuplicates**(): `boolean`

Whether the binary search tree allows duplicate values.

#### Returns

`boolean`

#### Defined in

misc/binarySearchTree.ts:85

___

### compare

• `get` **compare**(): (`a`: `T`, `b`: `T`) => ``0`` \| ``1`` \| ``-1``

The compare function of the binary search tree used to choose left or right.
Function returns `-1` if `a` should be on the left compared to `b`.
Function returns `0` if `a` and `b` are equal.
Function returns `1` if `a` should be on the right compared to `b`.

#### Returns

`fn`

▸ (`a`, `b`): ``0`` \| ``1`` \| ``-1``

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T` |
| `b` | `T` |

##### Returns

``0`` \| ``1`` \| ``-1``

#### Defined in

misc/binarySearchTree.ts:130

• `set` **compare**(`fn`): `void`

The compare function of the binary search tree used to choose left or right.
Function returns `-1` if `a` should be on the left compared to `b`.
Function returns `0` if `a` and `b` are equal.
Function returns `1` if `a` should be on the right compared to `b`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`a`: `T`, `b`: `T`) => ``0`` \| ``1`` \| ``-1`` |

#### Returns

`void`

#### Defined in

misc/binarySearchTree.ts:120

___

### raw

• `get` **raw**(): `undefined` \| `Node`\<`T`\>

The raw data of the binary search tree.

#### Returns

`undefined` \| `Node`\<`T`\>

#### Defined in

misc/binarySearchTree.ts:78

___

### size

• `get` **size**(): `number`

The number of nodes in the binary search tree.

#### Returns

`number`

#### Defined in

misc/binarySearchTree.ts:92

## Methods

### [isConcatSpreadable]

▸ **[isConcatSpreadable]**(): `boolean`

#### Returns

`boolean`

#### Defined in

misc/binarySearchTree.ts:110

___

### [iterator]

▸ **[iterator]**(): `IterableIterator`\<`T`\>

An iterator for the BinarySearchTree to use with `for...of` loops.

#### Returns

`IterableIterator`\<`T`\>

#### Defined in

misc/binarySearchTree.ts:106

___

### \_dfsInOrder

▸ **_dfsInOrder**(`currentNode?`, `results?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `currentNode` | `Node`\<`T`\> | `undefined` |
| `results` | `T`[] | `[]` |

#### Returns

`void`

#### Defined in

misc/binarySearchTree.ts:369

___

### \_dfsPostOrder

▸ **_dfsPostOrder**(`currentNode?`, `results?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `currentNode` | `Node`\<`T`\> | `undefined` |
| `results` | `T`[] | `[]` |

#### Returns

`void`

#### Defined in

misc/binarySearchTree.ts:346

___

### \_dfsPreOrder

▸ **_dfsPreOrder**(`currentNode?`, `results?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `currentNode` | `Node`\<`T`\> | `undefined` |
| `results` | `T`[] | `[]` |

#### Returns

`void`

#### Defined in

misc/binarySearchTree.ts:326

___

### bfs

▸ **bfs**(`currentNode?`): `T`[]

Performs a breadth-first search on the binary search tree.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currentNode` | `undefined` \| `Node`\<`T`\> | The node to start at, defaults to the root |

#### Returns

`T`[]

The values of the binary search tree in breadth-first order

#### Defined in

misc/binarySearchTree.ts:387

___

### contains

▸ **contains**(`value`): `boolean`

Whether the binary search tree contains a value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | The value to check |

#### Returns

`boolean`

`true` if the binary search tree contains the value, `false` otherwise

#### Defined in

misc/binarySearchTree.ts:255

___

### copy

▸ **copy**(): [`BinarySearchTree`](BinarySearchTree.md)\<`T`\>

#### Returns

[`BinarySearchTree`](BinarySearchTree.md)\<`T`\>

A copy of the BinarySearchTree

#### Defined in

misc/binarySearchTree.ts:408

___

### dfsInOrder

▸ **dfsInOrder**(`currentNode?`): `T`[]

Performs a depth-first search on the binary search tree using in-order traversal.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currentNode` | `undefined` \| `Node`\<`T`\> | The node to start at, defaults to the root |

#### Returns

`T`[]

The values of the binary search tree in in-order

#### Defined in

misc/binarySearchTree.ts:362

___

### dfsPostOrder

▸ **dfsPostOrder**(`currentNode?`): `T`[]

Performs a depth-first search on the binary search tree using post-order traversal.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currentNode` | `undefined` \| `Node`\<`T`\> | The node to start at, defaults to the root |

#### Returns

`T`[]

The values of the binary search tree in post-order

#### Defined in

misc/binarySearchTree.ts:339

___

### dfsPreOrder

▸ **dfsPreOrder**(`currentNode?`): `T`[]

Performs a depth-first search on the binary search tree using pre-order traversal.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currentNode` | `undefined` \| `Node`\<`T`\> | The node to start at, defaults to the root |

#### Returns

`T`[]

The values of the binary search tree in pre-order

#### Defined in

misc/binarySearchTree.ts:319

___

### get

▸ **get**(`value`): `undefined` \| `Node`\<`T`\>

Finds a value in the binary search tree and returns the node.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | The value to find |

#### Returns

`undefined` \| `Node`\<`T`\>

The node containing the value or `undefined` if the value doesn't exist

#### Defined in

misc/binarySearchTree.ts:275

___

### insert

▸ **insert**(`value`): [`BinarySearchTree`](BinarySearchTree.md)\<`T`\>

Inserts a value into the binary search tree.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | The value to insert |

#### Returns

[`BinarySearchTree`](BinarySearchTree.md)\<`T`\>

The binary search tree

#### Defined in

misc/binarySearchTree.ts:209

___

### maxValueNode

▸ **maxValueNode**(`currentNode?`): `undefined` \| `Node`\<`T`\>

Finds the maximum value node in the binary search tree.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currentNode` | `undefined` \| `Node`\<`T`\> | The node to start at, defaults to the root |

#### Returns

`undefined` \| `Node`\<`T`\>

The maximum value node

#### Defined in

misc/binarySearchTree.ts:307

___

### minValueNode

▸ **minValueNode**(`currentNode?`): `undefined` \| `Node`\<`T`\>

Finds the minimum value node in the binary search tree.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currentNode` | `undefined` \| `Node`\<`T`\> | The node to start at, defaults to the root |

#### Returns

`undefined` \| `Node`\<`T`\>

The minimum value node

#### Defined in

misc/binarySearchTree.ts:295

___

### pushToTraversalArray

▸ **pushToTraversalArray**(`node`, `array`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `Node`\<`T`\> |
| `array` | `T`[] |

#### Returns

`void`

#### Defined in

misc/binarySearchTree.ts:377

___

### toJSON

▸ **toJSON**(): `T`[]

Converts the BinarySearchTree to JSON.

#### Returns

`T`[]

The BinarySearchTree as JSON

#### Defined in

misc/binarySearchTree.ts:437

___

### toObject

▸ **toObject**(): `undefined` \| `NodeObject`\<`T`\>

Converts the BinarySearchTree to an object.

#### Returns

`undefined` \| `NodeObject`\<`T`\>

The BinarySearchTree as an object

#### Defined in

misc/binarySearchTree.ts:446

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

The BinarySearchTree as a string.

#### Defined in

misc/binarySearchTree.ts:421

___

### from

▸ **from**\<`V`\>(`values`, `options?`): [`BinarySearchTree`](BinarySearchTree.md)\<`V`\>

Creates a binary search tree from an array.

#### Type parameters

| Name |
| :------ |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `V`[] | The array to create binary search tree from |
| `options?` | `Object` | - |
| `options.allowDuplicates?` | `boolean` | - |
| `options.compare?` | (`a`: `V`, `b`: `V`) => ``0`` \| ``1`` \| ``-1`` | - |

#### Returns

[`BinarySearchTree`](BinarySearchTree.md)\<`V`\>

Binary search tree created from array

#### Defined in

misc/binarySearchTree.ts:165

___

### fromString

▸ **fromString**\<`V`\>(`str`, `options?`): [`BinarySearchTree`](BinarySearchTree.md)\<`V`\>

Creates a binary search tree from a string.

#### Type parameters

| Name |
| :------ |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | The string to create binary search tree from |
| `options?` | `Object` | Options for the binary search tree |
| `options.allowDuplicates?` | `boolean` | Whether the binary search tree allows duplicate values |
| `options.compare?` | (`a`: `V`, `b`: `V`) => ``0`` \| ``1`` \| ``-1`` | The compare function of the binary search tree used to choose left or right |

#### Returns

[`BinarySearchTree`](BinarySearchTree.md)\<`V`\>

Binary search tree created from string

#### Defined in

misc/binarySearchTree.ts:184
