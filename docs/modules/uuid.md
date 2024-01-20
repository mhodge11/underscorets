[underscorets](../README.md) / [Exports](../modules.md) / uuid

# Namespace: uuid

## Table of contents

### Variables

- [uuidUrlAlphabet](uuid.md#uuidurlalphabet)

### Functions

- [generateCustomUuid](uuid.md#generatecustomuuid)
- [generateCustomUuidAsync](uuid.md#generatecustomuuidasync)
- [generateUuid](uuid.md#generateuuid)
- [generateUuidAsync](uuid.md#generateuuidasync)

## Variables

### uuidUrlAlphabet

• `Const` **uuidUrlAlphabet**: ``"useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"``

#### Defined in

uuid/index.ts:12

## Functions

### generateCustomUuid

▸ **generateCustomUuid**(`alphabet`, `defaultSize?`): (`size`: `number`) => `string`

Generates a UUID using a custom alphabet.

*Based on the [nanoid](https://github.com/ai/nanoid) package.*

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `alphabet` | `string` | `undefined` | Custom alphabet to generate the UUID from |
| `defaultSize` | `number` | `21` | Default size of the UUID. Defaults to 21 |

#### Returns

`fn`

A function that generates a UUID

▸ (`size?`): `string`

##### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `size` | `number` | `defaultSize` |

##### Returns

`string`

**`Example`**

```ts
const generateUuid = generateCustomUuid("0123456789abcdef");

console.log(generateUuid());
//=> "01a2b3c4d5e6f7g8h9i01"

console.log(generateUuid(10));
//=> "01a2b3c4d5"
```

#### Defined in

uuid/index.ts:8

___

### generateCustomUuidAsync

▸ **generateCustomUuidAsync**(`alphabet`, `defaultSize?`): () => [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`string`\>

Asynchronously generates a UUID using a custom alphabet.

*Based on the [nanoid](https://github.com/ai/nanoid) package.*

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `alphabet` | `string` | `undefined` | Custom alphabet to generate the UUID from. |
| `defaultSize` | `number` | `21` | Default size of the UUID. |

#### Returns

`fn`

A promise resolving to a function that generates a UUID.

▸ (): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`string`\>

##### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`string`\>

**`Example`**

```ts
const generateUuid = generateCustomUuidAsync("0123456789abcdef");

console.log(await generateUuid());
//=> "01a2b3c4d5e6f7g8h9i01"

console.log(await generateUuid(10));
//=> "01a2b3c4d5"
```

#### Defined in

uuid/index.ts:9

___

### generateUuid

▸ **generateUuid**(`size?`): `string`

Generates a UUID.

*Based on the [nanoid](https://github.com/ai/nanoid) package.*

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `size` | `number` | `21` | Size of the UUID. |

#### Returns

`string`

A UUID.

**`Example`**

```ts
console.log(generateUuid());
//=> "01a2b3c4d5e6f7g8h9i01"

console.log(generateUuid(10));
//=> "01a2b3c4d5"
```

#### Defined in

uuid/index.ts:10

___

### generateUuidAsync

▸ **generateUuidAsync**(`size?`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`string`\>

Asynchronously generates a UUID.

*Based on the [nanoid](https://github.com/ai/nanoid) package.*

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `size` | `number` | `21` | Size of the UUID. |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`string`\>

A promise resolving to UUID.

**`Example`**

```ts
console.log(await generateUuidAsync());
//=> "01a2b3c4d5e6f7g8h9i01"

console.log(await generateUuidAsync(10));
//=> "01a2b3c4d5"
```

#### Defined in

uuid/index.ts:11
