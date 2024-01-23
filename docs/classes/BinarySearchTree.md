[underscorets - v0.1.9](../README.md) / BinarySearchTree

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

[misc/binarySearchTree.ts:128](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/binarySearchTree.ts#L128)

## Properties

### \_allowDuplicates

• `Private` **\_allowDuplicates**: `boolean` = `false`

#### Defined in

[misc/binarySearchTree.ts:72](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/binarySearchTree.ts#L72)

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

[misc/binarySearchTree.ts:71](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/binarySearchTree.ts#L71)

___

### \_root

• `Private` **\_root**: `undefined` \| `Node`\<`T`\>

#### Defined in

[misc/binarySearchTree.ts:70](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/binarySearchTree.ts#L70)

___

### \_size

• `Private` **\_size**: `number` = `0`

#### Defined in

[misc/binarySearchTree.ts:73](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/binarySearchTree.ts#L73)

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

The BinarySearchTree tag.

#### Returns

`string`

#### Defined in

[misc/binarySearchTree.ts:91](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/binarySearchTree.ts#L91)

___

### allowDuplicates

• `get` **allowDuplicates**(): `boolean`

Whether the binary search tree allows duplicate values.

#### Returns

`boolean`

#### Defined in

[misc/binarySearchTree.ts:81](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/binarySearchTree.ts#L81)

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

[misc/binarySearchTree.ts:119](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/binarySearchTree.ts#L119)

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

[misc/binarySearchTree.ts:109](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/binarySearchTree.ts#L109)

___

### raw

• `get` **raw**(): `undefined` \| `Node`\<`T`\>

The raw data of the binary search tree.

#### Returns

`undefined` \| `Node`\<`T`\>

#### Defined in

[misc/binarySearchTree.ts:76](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/binarySearchTree.ts#L76)

___

### size

• `get` **size**(): `number`

The number of nodes in the binary search tree.

#### Returns

`number`

#### Defined in

[misc/binarySearchTree.ts:86](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/binarySearchTree.ts#L86)

## Methods

### [isConcatSpreadable]

▸ **[isConcatSpreadable]**(): `boolean`

#### Returns

`boolean`

#### Defined in

[misc/binarySearchTree.ts:99](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/binarySearchTree.ts#L99)

___

### [iterator]

▸ **[iterator]**(): `IterableIterator`\<`T`\>

#### Returns

`IterableIterator`\<`T`\>

#### Defined in

[misc/binarySearchTree.ts:95](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/binarySearchTree.ts#L95)

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

[misc/binarySearchTree.ts:357](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/binarySearchTree.ts#L357)

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

[misc/binarySearchTree.ts:334](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/binarySearchTree.ts#L334)

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

[misc/binarySearchTree.ts:314](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/binarySearchTree.ts#L314)

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

[misc/binarySearchTree.ts:375](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/binarySearchTree.ts#L375)

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

[misc/binarySearchTree.ts:243](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/binarySearchTree.ts#L243)

___

### copy

▸ **copy**(): [`BinarySearchTree`](BinarySearchTree.md)\<`T`\>

Creates a copy of the BinarySearchTree.

#### Returns

[`BinarySearchTree`](BinarySearchTree.md)\<`T`\>

#### Defined in

[misc/binarySearchTree.ts:394](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/binarySearchTree.ts#L394)

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

[misc/binarySearchTree.ts:350](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/binarySearchTree.ts#L350)

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

[misc/binarySearchTree.ts:327](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/binarySearchTree.ts#L327)

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

[misc/binarySearchTree.ts:307](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/binarySearchTree.ts#L307)

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

[misc/binarySearchTree.ts:263](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/binarySearchTree.ts#L263)

___

### insert

▸ **insert**(`value`): `this`

Inserts a value into the binary search tree.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | The value to insert |

#### Returns

`this`

The binary search tree

#### Defined in

[misc/binarySearchTree.ts:197](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/binarySearchTree.ts#L197)

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

[misc/binarySearchTree.ts:295](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/binarySearchTree.ts#L295)

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

[misc/binarySearchTree.ts:283](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/binarySearchTree.ts#L283)

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

[misc/binarySearchTree.ts:365](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/binarySearchTree.ts#L365)

___

### toJSON

▸ **toJSON**(): `T`[]

Converts the BinarySearchTree to JSON.

#### Returns

`T`[]

#### Defined in

[misc/binarySearchTree.ts:417](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/binarySearchTree.ts#L417)

___

### toObject

▸ **toObject**(): `undefined` \| `NodeObject`\<`T`\>

Converts the BinarySearchTree to an object.

#### Returns

`undefined` \| `NodeObject`\<`T`\>

#### Defined in

[misc/binarySearchTree.ts:422](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/binarySearchTree.ts#L422)

___

### toString

▸ **toString**(`replacer?`, `space?`): `string`

Converts the BinarySearchTree to a string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `replacer?` | (`this`: `any`, `key`: `string`, `value`: `any`) => `any` |
| `space?` | `string` \| `number` |

#### Returns

`string`

#### Defined in

[misc/binarySearchTree.ts:405](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/binarySearchTree.ts#L405)

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

[misc/binarySearchTree.ts:153](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/binarySearchTree.ts#L153)

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

[misc/binarySearchTree.ts:172](https://github.com/mhodge11/underscorets/blob/6764b97/src/misc/binarySearchTree.ts#L172)
