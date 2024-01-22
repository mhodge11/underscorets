[underscorets - v0.1.5](../README.md) / KSUID

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

*Based on [ksuid](https://github.com/segmentio/ksuid).*

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

- [constructor](KSUID.md#constructor)

### Properties

- [view](KSUID.md#view)
- [MAX\_STRING\_ENCODED](KSUID.md#max_string_encoded)
- [MIN\_STRING\_ENCODED](KSUID.md#min_string_encoded)

### Accessors

- [[toStringTag]](KSUID.md#[tostringtag])
- [date](KSUID.md#date)
- [length](KSUID.md#length)
- [payload](KSUID.md#payload)
- [raw](KSUID.md#raw)
- [string](KSUID.md#string)
- [timestamp](KSUID.md#timestamp)

### Methods

- [compare](KSUID.md#compare)
- [equals](KSUID.md#equals)
- [toJSON](KSUID.md#tojson)
- [toString](KSUID.md#tostring)
- [fromParts](KSUID.md#fromparts)
- [isValid](KSUID.md#isvalid)
- [parse](KSUID.md#parse)
- [random](KSUID.md#random)
- [randomAsync](KSUID.md#randomasync)

## Constructors

### constructor

• **new KSUID**(`buffer`): [`KSUID`](KSUID.md)

Creates a new KSUID from an ArrayBufferLike.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buffer` | `ArrayBufferLike` | An ArrayBufferLike containing a KSUID |

#### Returns

[`KSUID`](KSUID.md)

#### Defined in

[ksuid/ksuid.ts:114](https://github.com/mhodge11/underscorets/blob/471b259/src/ksuid/ksuid.ts#L114)

## Properties

### view

• `Private` **view**: [`DataView`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/DataView )

#### Defined in

[ksuid/ksuid.ts:107](https://github.com/mhodge11/underscorets/blob/471b259/src/ksuid/ksuid.ts#L107)

___

### MAX\_STRING\_ENCODED

▪ `Static` **MAX\_STRING\_ENCODED**: `string` = `"aWgEPTl1tmebfsQzFP4bxwgy80V"`

A string-encoded maximum value for a KSUID

#### Defined in

[ksuid/ksuid.ts:103](https://github.com/mhodge11/underscorets/blob/471b259/src/ksuid/ksuid.ts#L103)

___

### MIN\_STRING\_ENCODED

▪ `Static` **MIN\_STRING\_ENCODED**: `string` = `"000000000000000000000000000"`

A string-encoded minimum value for a KSUID

#### Defined in

[ksuid/ksuid.ts:105](https://github.com/mhodge11/underscorets/blob/471b259/src/ksuid/ksuid.ts#L105)

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

The KSUID tag

#### Returns

`string`

#### Defined in

[ksuid/ksuid.ts:153](https://github.com/mhodge11/underscorets/blob/471b259/src/ksuid/ksuid.ts#L153)

___

### date

• `get` **date**(): [`Date`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date )

The date the KSUID was created

#### Returns

[`Date`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date )

#### Defined in

[ksuid/ksuid.ts:130](https://github.com/mhodge11/underscorets/blob/471b259/src/ksuid/ksuid.ts#L130)

___

### length

• `get` **length**(): `number`

The byte length of the KSUID

#### Returns

`number`

#### Defined in

[ksuid/ksuid.ts:125](https://github.com/mhodge11/underscorets/blob/471b259/src/ksuid/ksuid.ts#L125)

___

### payload

• `get` **payload**(): [`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer )

The payload of the KSUID

#### Returns

[`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer )

#### Defined in

[ksuid/ksuid.ts:140](https://github.com/mhodge11/underscorets/blob/471b259/src/ksuid/ksuid.ts#L140)

___

### raw

• `get` **raw**(): [`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer )

A copy of the underlying buffer

#### Returns

[`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer )

#### Defined in

[ksuid/ksuid.ts:120](https://github.com/mhodge11/underscorets/blob/471b259/src/ksuid/ksuid.ts#L120)

___

### string

• `get` **string**(): `string`

The KSUID as a string

#### Returns

`string`

#### Defined in

[ksuid/ksuid.ts:145](https://github.com/mhodge11/underscorets/blob/471b259/src/ksuid/ksuid.ts#L145)

___

### timestamp

• `get` **timestamp**(): `number`

The timestamp of the KSUID in milliseconds since the epoch

#### Returns

`number`

#### Defined in

[ksuid/ksuid.ts:135](https://github.com/mhodge11/underscorets/blob/471b259/src/ksuid/ksuid.ts#L135)

## Methods

### compare

▸ **compare**(`other`): ``1`` \| ``-1`` \| ``0``

Compares this KSUID to another.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`KSUID`](KSUID.md) | KSUID to compare to |

#### Returns

``1`` \| ``-1`` \| ``0``

`1` if `other` represents an earlier date,
`-1` if `other` represents a later date,
`0` if they are equal

#### Defined in

[ksuid/ksuid.ts:165](https://github.com/mhodge11/underscorets/blob/471b259/src/ksuid/ksuid.ts#L165)

___

### equals

▸ **equals**(`other`): `boolean`

Checks if this KSUID is equal to another.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`KSUID`](KSUID.md) | KSUID to compare to |

#### Returns

`boolean`

`true` if they are equal, `false` otherwise

#### Defined in

[ksuid/ksuid.ts:187](https://github.com/mhodge11/underscorets/blob/471b259/src/ksuid/ksuid.ts#L187)

___

### toJSON

▸ **toJSON**(): `string`

Converts the KSUID to a string used by `JSON.stringify()`.

#### Returns

`string`

The KSUID as a string

#### Defined in

[ksuid/ksuid.ts:196](https://github.com/mhodge11/underscorets/blob/471b259/src/ksuid/ksuid.ts#L196)

___

### toString

▸ **toString**(): `string`

Converts the KSUID to a string used for representation.

#### Returns

`string`

The KSUID as a string

#### Defined in

[ksuid/ksuid.ts:205](https://github.com/mhodge11/underscorets/blob/471b259/src/ksuid/ksuid.ts#L205)

___

### fromParts

▸ **fromParts**(`timestamp`, `payload`): [`KSUID`](KSUID.md)

Generates a new KSUID with a custom payload.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `timestamp` | `string` \| `number` \| [`Date`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date ) | (?= Date.now()) A timestamp in milliseconds since the epoch |
| `payload` | [`Uint8Array`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array ) | A Uint8Array of length 16 that randomizes the KSUID |

#### Returns

[`KSUID`](KSUID.md)

A KSUID

#### Defined in

[ksuid/ksuid.ts:236](https://github.com/mhodge11/underscorets/blob/471b259/src/ksuid/ksuid.ts#L236)

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

[ksuid/ksuid.ts:258](https://github.com/mhodge11/underscorets/blob/471b259/src/ksuid/ksuid.ts#L258)

___

### parse

▸ **parse**(`data`): [`KSUID`](KSUID.md)

Parses a string-encoded KSUID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` | A string-encoded KSUID |

#### Returns

[`KSUID`](KSUID.md)

A KSUID

#### Defined in

[ksuid/ksuid.ts:268](https://github.com/mhodge11/underscorets/blob/471b259/src/ksuid/ksuid.ts#L268)

___

### random

▸ **random**(`timestamp?`): [`KSUID`](KSUID.md)

Generates a new KSUID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `timestamp` | `string` \| `number` \| [`Date`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date ) | (?= Date.now()) A date or timestamp in milliseconds since the epoch |

#### Returns

[`KSUID`](KSUID.md)

A KSUID

#### Defined in

[ksuid/ksuid.ts:215](https://github.com/mhodge11/underscorets/blob/471b259/src/ksuid/ksuid.ts#L215)

___

### randomAsync

▸ **randomAsync**(`timestamp?`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`KSUID`](KSUID.md)\>

Generates a new KSUID asynchronously.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `timestamp` | `string` \| `number` \| [`Date`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date ) | (?= Date.now()) A date or timestamp in milliseconds since the epoch |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`KSUID`](KSUID.md)\>

A KSUID

#### Defined in

[ksuid/ksuid.ts:225](https://github.com/mhodge11/underscorets/blob/471b259/src/ksuid/ksuid.ts#L225)