[underscorets](../README.md) / [Exports](../modules.md) / ksuid

# Namespace: ksuid

## Table of contents

### Type Aliases

- [KSUID](ksuid.md#ksuid)

### Variables

- [KSUID](ksuid.md#ksuid-1)

### Functions

- [compareKsuids](ksuid.md#compareksuids)
- [generateKsuid](ksuid.md#generateksuid)
- [generateKsuidAsync](ksuid.md#generateksuidasync)
- [isValidKsuid](ksuid.md#isvalidksuid)

## KSUID

### compareKsuids

▸ **compareKsuids**(`ksuidString`, `otherKsuidString`): ``1`` \| ``-1`` \| ``0``

Compare two KSUID strings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ksuidString` | `string` | KSUID string to compare |
| `otherKsuidString` | `string` | KSUID string to compare with |

#### Returns

``1`` \| ``-1`` \| ``0``

`1` if `otherKsuidString` represents an earlier date,
`-1` if `otherKsuidString` represents a later date,
`0` if they are equal

**`Example`**

```ts
const ksuid1 = "1q2w3e4r5t6y7u8i9o0p1q2w3e4r5t6y";
const ksuid2 = "1q2w3e4r5t6y7u8i9o0p1q2w3e4r5t6z";

compareKsuids(ksuid1, ksuid2);
// => -1

compareKsuids(ksuid2, ksuid1);
// => 1

compareKsuids(ksuid1, ksuid1);
// => 0
```

#### Defined in

ksuid/index.ts:12

___

### generateKsuid

▸ **generateKsuid**(`timestamp?`): `string`

Generates a new KSUID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `timestamp` | `string` \| `number` \| [`Date`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date ) | (?= Date.now()) A date or timestamp in milliseconds since the epoch |

#### Returns

`string`

A KSUID

**`Example`**

```ts
const ksuid = generateKsuid();
```

#### Defined in

ksuid/index.ts:13

___

### generateKsuidAsync

▸ **generateKsuidAsync**(`timestamp?`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`string`\>

Asynchronously generates a new KSUID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `timestamp` | `string` \| `number` \| [`Date`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date ) | (?= Date.now()) A date or timestamp in milliseconds since the epoch |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`string`\>

A KSUID

**`Example`**

```ts
const ksuid = await generateKsuidAsync();
```

#### Defined in

ksuid/index.ts:14

___

### isValidKsuid

▸ **isValidKsuid**(`ksuidString`): `boolean`

Checks if a KSUID string is a valid KSUID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ksuidString` | `string` | A possible KSUID string |

#### Returns

`boolean`

`true` if the string is a valid KSUID, `false` otherwise

**`Example`**

```ts
isValidKsuid("aWgEPTl1tmebfsQzFP4bxwgy80V");
// => true

isValidKsuid("notaKSUID");
// => false
```

#### Defined in

ksuid/index.ts:15

## Other

### KSUID

Ƭ **KSUID**: [`KSUID`](../classes/KSUID-1.md)

#### Defined in

ksuid/index.ts:8

ksuid/index.ts:10

___

### KSUID

• **KSUID**: typeof [`KSUID`](../classes/KSUID-1.md)

#### Defined in

ksuid/index.ts:8

ksuid/index.ts:10
