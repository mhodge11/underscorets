[underscorets](../README.md) / [Exports](../modules.md) / num

# Namespace: num

## Table of contents

### Functions

- [average](num.md#average)
- [ceil](num.md#ceil)
- [clamp](num.md#clamp)
- [factorial](num.md#factorial)
- [floor](num.md#floor)
- [median](num.md#median)
- [round](num.md#round)
- [sum](num.md#sum)

## Number

### average

▸ **average**\<`T`\>(`numbers`, `callback?`): `number`

Calculates the average of an array of numbers

Returns `NaN` if the input array is empty.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `numbers` | readonly `T`[] | The input array of numbers |
| `callback?` | (`value`: `T`) => `number` | - |

#### Returns

`number`

The average of the input array, or NaN if the input array is empty

**`Example`**

```ts
average([1, 2, 3, 4, 5]) // => 3
```

#### Defined in

number/index.ts:11

___

### clamp

▸ **clamp**(`number`, `lower`, `upper`): `number`

Clamps `number` within the inclusive `lower` and `upper` bounds.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `number` | `number` \| \`$\{number}\` | The number to clamp |
| `lower` | `number` \| \`$\{number}\` | The lower bound |
| `upper` | `number` \| \`$\{number}\` | The upper bound |

#### Returns

`number`

The clamped number

**`Example`**

```ts
clamp(-10, -5, 5)
// => -5

clamp(10, -5, 5)
// => 5
```

#### Defined in

number/index.ts:13

___

### factorial

▸ **factorial**(`number`): `number`

Calculates the factorial of a number

Returns `1` if the input number is `0`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `number` | `number` | The number to calculate the factorial of (must be an integer) |

#### Returns

`number`

The factorial of the input number

**`Example`**

```ts
factorial(0) // => 1
factorial(1) // => 1
factorial(2) // => 2
factorial(3) // => 6
factorial(4) // => 24
factorial(5) // => 120
```

#### Defined in

number/index.ts:14

___

### median

▸ **median**\<`T`\>(`numbers`, `callback?`): `number`

Calculates the median of an array of numbers

Returns `NaN` if the input array is empty.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `numbers` | readonly `T`[] | The input array of numbers |
| `callback?` | (`value`: `T`) => `number` | - |

#### Returns

`number`

The median of the input array

**`Example`**

```ts
median([1, 2, 3, 4, 5]) // => 3
median([1, 2, 3, 4, 5, 6]) // => 3.5
```

#### Defined in

number/index.ts:16

___

### sum

▸ **sum**\<`T`\>(`array`, `callback?`): `number`

Calculates the sum of an array of numbers.

Returns `NaN` if the input array is empty.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the input array |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | readonly `T`[] |
| `callback?` | (`value`: `T`) => `number` |

#### Returns

`number`

The sum of the input array

**`Example`**

```ts
sum([1, 2, 3, 4, 5])
// => 15

sum([{ value: 1 }, { value: 2 }, { value: 3 }], (obj) => obj.value)
// => 6
```

#### Defined in

number/index.ts:18

## Other

### ceil

▸ **ceil**(`number`, `precision?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `number` \| \`$\{number}\` |
| `precision?` | `number` \| \`$\{number}\` |

#### Returns

`number`

#### Defined in

number/index.ts:12

___

### floor

▸ **floor**(`number`, `precision?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `number` \| \`$\{number}\` |
| `precision?` | `number` \| \`$\{number}\` |

#### Returns

`number`

#### Defined in

number/index.ts:15

___

### round

▸ **round**(`number`, `precision?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `number` \| \`$\{number}\` |
| `precision?` | `number` \| \`$\{number}\` |

#### Returns

`number`

#### Defined in

number/index.ts:17
