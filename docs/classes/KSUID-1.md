[underscorets](../README.md) / [Exports](../modules.md) / KSUID

# Class: KSUID

A KSUID is a unique identifier that is sortable by the time it was created.
It is composed of a timestamp and a payload.

**Static Methods:**
- `random` - Generates a new KSUID.
- `randomAsync` - Generates a new KSUID asynchronously.
- `fromParts` - Generates a new KSUID with a custom payload.
- `isValid` - Checks if a buffer is a valid KSUID.
- `parse` - Parses a string-encoded KSUID.

**Methods:**
- `compare` - Compares this KSUID to another.
- `equals` - Checks if this KSUID is equal to another.
- `toJSON` - Converts the KSUID to a string used by `JSON.stringify()`.
- `toString` - Converts the KSUID to a string used for representation.

**Properties:**
- `raw` - A copy of the underlying buffer.
- `length` - The byte length of the KSUID.
- `date` - The date the KSUID was created.
- `timestamp` - The timestamp of the KSUID in milliseconds since the epoch.
- `payload` - The payload of the KSUID.
- `string` - The KSUID as a string.
- `[Symbol.toStringTag]` - The KSUID tag.

**`Example`**

```ts
const ksuidFromSync = KSUID.random();
const idFromSync = ksuidFromSync.string;

const ksuidFromAsync = await KSUID.randomAsync();
const idFromAsync = ksuidFromAsync.string;
```

**`See`**

https://github.com/novemberborn/ksuid

## Table of contents

### Constructors

- [constructor](KSUID-1.md#constructor)

### Properties

- [view](KSUID-1.md#view)
- [MAX\_STRING\_ENCODED](KSUID-1.md#max_string_encoded)
- [MIN\_STRING\_ENCODED](KSUID-1.md#min_string_encoded)

### Accessors

- [[toStringTag]](KSUID-1.md#[tostringtag])
- [date](KSUID-1.md#date)
- [length](KSUID-1.md#length)
- [payload](KSUID-1.md#payload)
- [raw](KSUID-1.md#raw)
- [string](KSUID-1.md#string)
- [timestamp](KSUID-1.md#timestamp)

### Methods

- [compare](KSUID-1.md#compare)
- [equals](KSUID-1.md#equals)
- [toJSON](KSUID-1.md#tojson)
- [toString](KSUID-1.md#tostring)
- [fromParts](KSUID-1.md#fromparts)
- [isValid](KSUID-1.md#isvalid)
- [parse](KSUID-1.md#parse)
- [random](KSUID-1.md#random)
- [randomAsync](KSUID-1.md#randomasync)

## Constructors

### constructor

• **new KSUID**(`buffer`): [`KSUID`](KSUID-1.md)

Creates a new KSUID from an ArrayBufferLike.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buffer` | `ArrayBufferLike` | An ArrayBufferLike containing a KSUID |

#### Returns

[`KSUID`](KSUID-1.md)

#### Defined in

ksuid/ksuid.ts:112

## Properties

### view

• `Private` **view**: [`DataView`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/DataView )

#### Defined in

ksuid/ksuid.ts:105

___

### MAX\_STRING\_ENCODED

▪ `Static` **MAX\_STRING\_ENCODED**: `string` = `"aWgEPTl1tmebfsQzFP4bxwgy80V"`

A string-encoded maximum value for a KSUID

#### Defined in

ksuid/ksuid.ts:101

___

### MIN\_STRING\_ENCODED

▪ `Static` **MIN\_STRING\_ENCODED**: `string` = `"000000000000000000000000000"`

A string-encoded minimum value for a KSUID

#### Defined in

ksuid/ksuid.ts:103

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

The KSUID tag

#### Returns

`string`

#### Defined in

ksuid/ksuid.ts:151

___

### date

• `get` **date**(): [`Date`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date )

The date the KSUID was created

#### Returns

[`Date`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date )

#### Defined in

ksuid/ksuid.ts:128

___

### length

• `get` **length**(): `number`

The byte length of the KSUID

#### Returns

`number`

#### Defined in

ksuid/ksuid.ts:123

___

### payload

• `get` **payload**(): [`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer )

The payload of the KSUID

#### Returns

[`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer )

#### Defined in

ksuid/ksuid.ts:138

___

### raw

• `get` **raw**(): [`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer )

A copy of the underlying buffer

#### Returns

[`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer )

#### Defined in

ksuid/ksuid.ts:118

___

### string

• `get` **string**(): `string`

The KSUID as a string

#### Returns

`string`

#### Defined in

ksuid/ksuid.ts:143

___

### timestamp

• `get` **timestamp**(): `number`

The timestamp of the KSUID in milliseconds since the epoch

#### Returns

`number`

#### Defined in

ksuid/ksuid.ts:133

## Methods

### compare

▸ **compare**(`other`): ``1`` \| ``-1`` \| ``0``

Compares this KSUID to another.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`KSUID`](KSUID-1.md) | KSUID to compare to |

#### Returns

``1`` \| ``-1`` \| ``0``

`1` if `other` represents an earlier date,
`-1` if `other` represents a later date,
`0` if they are equal

#### Defined in

ksuid/ksuid.ts:163

___

### equals

▸ **equals**(`other`): `boolean`

Checks if this KSUID is equal to another.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`KSUID`](KSUID-1.md) | KSUID to compare to |

#### Returns

`boolean`

`true` if they are equal, `false` otherwise

#### Defined in

ksuid/ksuid.ts:185

___

### toJSON

▸ **toJSON**(): `string`

Converts the KSUID to a string used by `JSON.stringify()`.

#### Returns

`string`

The KSUID as a string

#### Defined in

ksuid/ksuid.ts:194

___

### toString

▸ **toString**(): `string`

Converts the KSUID to a string used for representation.

#### Returns

`string`

The KSUID as a string

#### Defined in

ksuid/ksuid.ts:203

___

### fromParts

▸ **fromParts**(`timestamp`, `payload`): [`KSUID`](KSUID-1.md)

Generates a new KSUID with a custom payload.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `timestamp` | `string` \| `number` \| [`Date`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date ) | (?= Date.now()) A timestamp in milliseconds since the epoch |
| `payload` | [`Uint8Array`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array ) | A Uint8Array of length 16 that randomizes the KSUID |

#### Returns

[`KSUID`](KSUID-1.md)

A KSUID

#### Defined in

ksuid/ksuid.ts:234

___

### isValid

▸ **isValid**(`buffer`): `boolean`

Checks if a buffer is a valid KSUID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buffer` | `ArrayBufferLike` | A possible KSUID buffer |

#### Returns

`boolean`

`true` if the buffer is a valid KSUID, `false` otherwise

#### Defined in

ksuid/ksuid.ts:256

___

### parse

▸ **parse**(`data`): [`KSUID`](KSUID-1.md)

Parses a string-encoded KSUID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` | A string-encoded KSUID |

#### Returns

[`KSUID`](KSUID-1.md)

A KSUID

#### Defined in

ksuid/ksuid.ts:266

___

### random

▸ **random**(`timestamp?`): [`KSUID`](KSUID-1.md)

Generates a new KSUID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `timestamp` | `string` \| `number` \| [`Date`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date ) | (?= Date.now()) A date or timestamp in milliseconds since the epoch |

#### Returns

[`KSUID`](KSUID-1.md)

A KSUID

#### Defined in

ksuid/ksuid.ts:213

___

### randomAsync

▸ **randomAsync**(`timestamp?`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`KSUID`](KSUID-1.md)\>

Generates a new KSUID asynchronously.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `timestamp` | `string` \| `number` \| [`Date`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date ) | (?= Date.now()) A date or timestamp in milliseconds since the epoch |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`KSUID`](KSUID-1.md)\>

A KSUID

#### Defined in

ksuid/ksuid.ts:223
