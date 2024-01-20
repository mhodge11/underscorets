[underscorets](../README.md) / [Exports](../modules.md) / HashMap

# Class: HashMap\<T\>

A hashmap.

**Static Methods:**
- `from` - Creates a hashmap from an object.
- `fromString` - Creates a hashmap from a string.

**Methods:**
- `set` - Set the value of a key. Returns the key and value as a tuple.
- `get` - Get the value of a key. Returns the value of the key.
- `remove` - Removes a key from the hashmap. Returns the value of the key.
- `has` - Check if the hashmap has a key. Returns `true` if the hashmap has the key, `false` otherwise.
- `keys` - Returns all the keys in the hashmap.
- `copy` - Constructs a new hashmap with the same values as the current hashmap.
- `toString` - Returns the hashmap as a string.
- `toJSON` - Converts the hashmap to a string used by `JSON.stringify()`.
- `toObject` - Converts the hashmap to an object.
- `toArray` - Converts the hashmap to an array.

**Properties:**
- `raw` - The raw data of the hashmap.
- `size` - The size of the hashmap.
- `hash` - The hash function of the hashmap.

**`Example`**

```ts
const map = new HashMap<string>();

map.set("foo", "bar");
// => ["foo", "bar"]

map.get("foo");
// => "bar"

map.has("foo");
// => true

map.keys();
// => ["foo"]

map.remove("foo");
// => "bar"

map.has("foo");
// => false
```

## Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the values stored in the hashmap |

## Table of contents

### Constructors

- [constructor](HashMap.md#constructor)

### Properties

- [\_data](HashMap.md#_data)
- [\_hash](HashMap.md#_hash)

### Accessors

- [[toStringTag]](HashMap.md#[tostringtag])
- [hash](HashMap.md#hash)
- [raw](HashMap.md#raw)
- [size](HashMap.md#size)

### Methods

- [[iterator]](HashMap.md#[iterator])
- [copy](HashMap.md#copy)
- [get](HashMap.md#get)
- [has](HashMap.md#has)
- [keys](HashMap.md#keys)
- [remove](HashMap.md#remove)
- [set](HashMap.md#set)
- [toArray](HashMap.md#toarray)
- [toJSON](HashMap.md#tojson)
- [toObject](HashMap.md#toobject)
- [toString](HashMap.md#tostring)
- [from](HashMap.md#from)
- [fromString](HashMap.md#fromstring)

## Constructors

### constructor

• **new HashMap**\<`T`\>(`size?`, `hashFn?`): [`HashMap`](HashMap.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `size` | `number` | `7` | The size of the hashmap. Defaults to 7. |
| `hashFn` | (`key`: `string`) => `number` | `undefined` | - |

#### Returns

[`HashMap`](HashMap.md)\<`T`\>

#### Defined in

util/hashmap.ts:97

## Properties

### \_data

• `Private` **\_data**: [`string`, `T`][][]

#### Defined in

util/hashmap.ts:56

___

### \_hash

• `Private` **\_hash**: (`key`: `string`) => `number`

#### Type declaration

▸ (`key`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

##### Returns

`number`

#### Defined in

util/hashmap.ts:57

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

The HashMap tag.

#### Returns

`string`

#### Defined in

util/hashmap.ts:76

___

### hash

• `set` **hash**(`hashFn`): `void`

The hash function of the hashmap.

#### Parameters

| Name | Type |
| :------ | :------ |
| `hashFn` | (`key`: `string`) => `number` |

#### Returns

`void`

#### Defined in

util/hashmap.ts:83

___

### raw

• `get` **raw**(): readonly [`string`, `T`][][]

The raw data of the hashmap.

#### Returns

readonly [`string`, `T`][][]

#### Defined in

util/hashmap.ts:62

___

### size

• `get` **size**(): `number`

The size of the hashmap.

#### Returns

`number`

#### Defined in

util/hashmap.ts:69

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`\<[`string`, `T`]\>

An iterator for the hashmap to use with `for...of` loops.

#### Returns

`IterableIterator`\<[`string`, `T`]\>

#### Defined in

util/hashmap.ts:90

___

### copy

▸ **copy**(`size?`): [`HashMap`](HashMap.md)\<`T`\>

Constructs a new hashmap with the same values as the current hashmap.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size?` | `number` | Size of the new hashmap, defaults to the size of the current hashmap |

#### Returns

[`HashMap`](HashMap.md)\<`T`\>

A copy of the hashmap

#### Defined in

util/hashmap.ts:219

___

### get

▸ **get**(`key`): `undefined` \| `T`

Gets the value of a key in the hashmap.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key to get |

#### Returns

`undefined` \| `T`

The value of the key or `undefined` if the key doesn't exist

#### Defined in

util/hashmap.ts:166

___

### has

▸ **has**(`key`): `boolean`

Checks if the hashmap has a key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key to check |

#### Returns

`boolean`

`true` if the hashmap has the key, `false` otherwise

#### Defined in

util/hashmap.ts:198

___

### keys

▸ **keys**(): `string`[]

#### Returns

`string`[]

All the keys in the hashmap

#### Defined in

util/hashmap.ts:209

___

### remove

▸ **remove**(`key`): `undefined` \| `T`

Removes a key from the hashmap.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`undefined` \| `T`

The value of the removed key or `undefined` if the key doesn't exist

#### Defined in

util/hashmap.ts:179

___

### set

▸ **set**(`key`, `value`): readonly [`string`, `T`]

Sets the value of a key in the hashmap.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key to set |
| `value` | `T` | The value to set the key to |

#### Returns

readonly [`string`, `T`]

The key and value as a tuple

**`Throws`**

Throws an error if the index generated by the hash function is out of bounds

#### Defined in

util/hashmap.ts:135

___

### toArray

▸ **toArray**(): readonly [`string`, `T`][]

Converts the hashmap to an array.

#### Returns

readonly [`string`, `T`][]

The hashmap as an array

#### Defined in

util/hashmap.ts:265

___

### toJSON

▸ **toJSON**(): `Object`

Converts the hashmap to a string used by `JSON.stringify()`.

#### Returns

`Object`

The hashmap as a string

#### Defined in

util/hashmap.ts:245

___

### toObject

▸ **toObject**(): `Object`

Converts the hashmap to an object.

#### Returns

`Object`

The hashmap as an object

#### Defined in

util/hashmap.ts:254

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

The hashmap as a string.

#### Defined in

util/hashmap.ts:229

___

### from

▸ **from**\<`V`\>(`obj`, `size?`): [`HashMap`](HashMap.md)\<`V`\>

Creates a hashmap from an object.

#### Type parameters

| Name |
| :------ |
| `V` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `obj` | `Object` | `undefined` | The object to create hashmap from |
| `size` | `number` | `7` | The size of the hashmap. Defaults to 7. |

#### Returns

[`HashMap`](HashMap.md)\<`V`\>

Hashmap created from object

#### Defined in

util/hashmap.ts:109

___

### fromString

▸ **fromString**\<`V`\>(`str`, `size?`): [`HashMap`](HashMap.md)\<`V`\>

#### Type parameters

| Name |
| :------ |
| `V` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `str` | `string` | `undefined` |
| `size` | `number` | `7` |

#### Returns

[`HashMap`](HashMap.md)\<`V`\>

#### Defined in

util/hashmap.ts:115
