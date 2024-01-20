[underscorets](../README.md) / [Exports](../modules.md) / crypto

# Namespace: crypto

## Table of contents

### Functions

- [hash](crypto.md#hash)
- [randomElement](crypto.md#randomelement)
- [randomFloat](crypto.md#randomfloat)
- [randomInt](crypto.md#randomint)
- [randomString](crypto.md#randomstring)

## Crypto

### hash

▸ **hash**(`data`, `algorithm?`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`string`\>

Generates a hash of the given data using the specified algorithm.

It uses the Web Crypto API to generate the hash.

*Note: If you need a secure hash use a specialized library like [crypto-js](https://www.npmjs.com/package/crypto-js) instead.*

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `data` | [`Jsonifiable`](../modules.md#jsonifiable) | `undefined` | The data to hash, either as a string or a JSON-serializable object |
| `algorithm` | `SupportedAlgorithms` | `"SHA-256"` | The hashing algorithm to use. Defaults to 'SHA-256' |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`string`\>

A Promise that resolves to the hexadecimal representation of the hash

**`Example`**

```ts
// Hash a string using the default algorithm (SHA-256)
await hash('hello world');
// => "b94d27b9934d3e08a52e52d7da7dabfac484efe37a53..."

// Hash an object using the SHA-512 algorithm
await hash({ foo: 'bar', baz: 123 }, 'SHA-512');
// => "d8f3c752c6820e580977099368083f4266b569660558..."
```

**`Throws`**

If the specified algorithm is not supported by the Web Crypto API

#### Defined in

crypto/index.ts:8

___

### randomElement

▸ **randomElement**\<`T`\>(`array`): `T` \| `undefined`

Gets a random element an array. A single element is returned by default.
Specify the `multi` parameter to get an array of multiple random elements.

If the array is empty, `undefined` is returned.
If `multi` is defined it returns an empty array.

It uses `crypto.getRandomValues` to get the random element.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the array elements |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The array to sample |

#### Returns

`T` \| `undefined`

Returns the random element

**`Example`**

```ts
randomElement([1, 2, 3, 4])
// => 2

randomElement([1, 2, 3, 4], 2)
// => [3, 1]
```

#### Defined in

crypto/index.ts:9

▸ **randomElement**\<`T`\>(`array`, `multi`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `T`[] |
| `multi` | `number` |

#### Returns

`T`[]

#### Defined in

crypto/index.ts:9

___

### randomFloat

▸ **randomFloat**(`min`, `max`): `number`

Generates a random float between two given numbers, including those numbers.

It uses `crypto.getRandomValues` to generate the random number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `min` | `number` | The smallest float that can be generated |
| `max` | `number` | The largest float that can be generated |

#### Returns

`number`

A random float between `min` and `max`, including `min` and `max`

**`Example`**

```ts
randomFloat(1, 10)
// => 1.123456789
```

**`Throws`**

If `min` is greater than or equal to `max`

#### Defined in

crypto/index.ts:10

___

### randomInt

▸ **randomInt**(`min`, `max`): `number`

Generates a random integer between two given numbers, including those numbers.

It uses `crypto.getRandomValues` to generate the random number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `min` | `number` | The smallest integer that can be generated |
| `max` | `number` | The largest integer that can be generated |

#### Returns

`number`

A random integer between `min` and `max`, including `min` and `max`

**`Example`**

```ts
randomInt(1, 10)
// => 5
```

**`Throws`**

If `min` or `max` is not an integer

**`Throws`**

If `min` is greater than or equal to `max`

#### Defined in

crypto/index.ts:11

___

### randomString

▸ **randomString**(`length`, `charSet?`): `string`

Generates a random string of the specified length.
The default charset is alphanumeric characters.

It uses `crypto.getRandomValues` to generate the random string.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `length` | `number` | `undefined` | The length of the string to generate |
| `charSet` | `string` | `DEFAULT_CHARSET` | The set of characters to use when generating the string. Defaults to alphanumeric characters |

#### Returns

`string`

A random string of the specified length

**`Example`**

```ts
randomString(8);
// => "JWw1p6rD"

randomString(16, 'abc');
// => "cbaacbabcabccabc"
```

#### Defined in

crypto/index.ts:12
