[underscorets - v0.1.10](../README.md) / HashMap

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

- [[isConcatSpreadable]](HashMap.md#[isconcatspreadable])
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

[misc/hashmap.ts:98](https://github.com/mhodge11/underscorets/blob/e937f27/src/misc/hashmap.ts#L98)

## Properties

### \_data

• `Private` **\_data**: [`string`, `T`][][]

#### Defined in

[misc/hashmap.ts:63](https://github.com/mhodge11/underscorets/blob/e937f27/src/misc/hashmap.ts#L63)

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

[misc/hashmap.ts:64](https://github.com/mhodge11/underscorets/blob/e937f27/src/misc/hashmap.ts#L64)

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

The HashMap tag.

#### Returns

`string`

#### Defined in

[misc/hashmap.ts:77](https://github.com/mhodge11/underscorets/blob/e937f27/src/misc/hashmap.ts#L77)

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

[misc/hashmap.ts:82](https://github.com/mhodge11/underscorets/blob/e937f27/src/misc/hashmap.ts#L82)

___

### raw

• `get` **raw**(): readonly [`string`, `T`][][]

The raw data of the hashmap.

#### Returns

readonly [`string`, `T`][][]

#### Defined in

[misc/hashmap.ts:67](https://github.com/mhodge11/underscorets/blob/e937f27/src/misc/hashmap.ts#L67)

___

### size

• `get` **size**(): `number`

The size of the hashmap.

#### Returns

`number`

#### Defined in

[misc/hashmap.ts:72](https://github.com/mhodge11/underscorets/blob/e937f27/src/misc/hashmap.ts#L72)

## Methods

### [isConcatSpreadable]

▸ **[isConcatSpreadable]**(): `boolean`

#### Returns

`boolean`

#### Defined in

[misc/hashmap.ts:90](https://github.com/mhodge11/underscorets/blob/e937f27/src/misc/hashmap.ts#L90)

___

### [iterator]

▸ **[iterator]**(): `IterableIterator`\<[`string`, `T`]\>

#### Returns

`IterableIterator`\<[`string`, `T`]\>

#### Defined in

[misc/hashmap.ts:86](https://github.com/mhodge11/underscorets/blob/e937f27/src/misc/hashmap.ts#L86)

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

[misc/hashmap.ts:224](https://github.com/mhodge11/underscorets/blob/e937f27/src/misc/hashmap.ts#L224)

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

[misc/hashmap.ts:173](https://github.com/mhodge11/underscorets/blob/e937f27/src/misc/hashmap.ts#L173)

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

[misc/hashmap.ts:205](https://github.com/mhodge11/underscorets/blob/e937f27/src/misc/hashmap.ts#L205)

___

### keys

▸ **keys**(): `string`[]

Returns the keys of the hashmap.

#### Returns

`string`[]

#### Defined in

[misc/hashmap.ts:214](https://github.com/mhodge11/underscorets/blob/e937f27/src/misc/hashmap.ts#L214)

___

### remove

▸ **remove**(`key`): `undefined` \| `T`

Removes a key from the hashmap.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key to remove |

#### Returns

`undefined` \| `T`

The value of the removed key or `undefined` if the key doesn't exist

#### Defined in

[misc/hashmap.ts:187](https://github.com/mhodge11/underscorets/blob/e937f27/src/misc/hashmap.ts#L187)

___

### set

▸ **set**(`key`, `value`): [`string`, `T`]

Sets the value of a key in the hashmap.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key to set |
| `value` | `T` | The value to set the key to |

#### Returns

[`string`, `T`]

The key and value as a tuple

**`Throws`**

Throws an error if the index generated by the hash function is out of bounds

#### Defined in

[misc/hashmap.ts:143](https://github.com/mhodge11/underscorets/blob/e937f27/src/misc/hashmap.ts#L143)

___

### toArray

▸ **toArray**(): [`string`, `T`][]

Converts the hashmap to an array.

#### Returns

[`string`, `T`][]

#### Defined in

[misc/hashmap.ts:259](https://github.com/mhodge11/underscorets/blob/e937f27/src/misc/hashmap.ts#L259)

___

### toJSON

▸ **toJSON**(): `Object`

Converts the hashmap to JSON.

#### Returns

`Object`

#### Defined in

[misc/hashmap.ts:243](https://github.com/mhodge11/underscorets/blob/e937f27/src/misc/hashmap.ts#L243)

___

### toObject

▸ **toObject**(): `Object`

Converts the hashmap to an object.

#### Returns

`Object`

#### Defined in

[misc/hashmap.ts:250](https://github.com/mhodge11/underscorets/blob/e937f27/src/misc/hashmap.ts#L250)

___

### toString

▸ **toString**(`replacer?`, `space?`): `string`

Converts the hashmap to a string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `replacer?` | (`this`: `any`, `key`: `string`, `value`: `any`) => `any` |
| `space?` | `string` \| `number` |

#### Returns

`string`

#### Defined in

[misc/hashmap.ts:231](https://github.com/mhodge11/underscorets/blob/e937f27/src/misc/hashmap.ts#L231)

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

[misc/hashmap.ts:110](https://github.com/mhodge11/underscorets/blob/e937f27/src/misc/hashmap.ts#L110)

___

### fromString

▸ **fromString**\<`V`\>(`str`, `size?`): [`HashMap`](HashMap.md)\<`V`\>

Creates a hashmap from a string.

#### Type parameters

| Name |
| :------ |
| `V` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `str` | `string` | `undefined` | The string to create hashmap from |
| `size` | `number` | `7` | The size of the hashmap. Defaults to 7 |

#### Returns

[`HashMap`](HashMap.md)\<`V`\>

A new hashmap created from the string

#### Defined in

[misc/hashmap.ts:123](https://github.com/mhodge11/underscorets/blob/e937f27/src/misc/hashmap.ts#L123)
