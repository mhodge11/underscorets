[underscorets](../README.md) / [Exports](../modules.md) / array

# Namespace: array

## Table of contents

### Functions

- [bubbleSort](array.md#bubblesort)
- [chunk](array.md#chunk)
- [compact](array.md#compact)
- [count](array.md#count)
- [difference](array.md#difference)
- [drop](array.md#drop)
- [dropRight](array.md#dropright)
- [dropRightWhile](array.md#droprightwhile)
- [dropWhile](array.md#dropwhile)
- [each](array.md#each)
- [eachRight](array.md#eachright)
- [every](array.md#every)
- [filter](array.md#filter)
- [findIndex](array.md#findindex)
- [findLastIndex](array.md#findlastindex)
- [flat](array.md#flat)
- [fuzzySearch](array.md#fuzzysearch)
- [fuzzySearchMatch](array.md#fuzzysearchmatch)
- [group](array.md#group)
- [head](array.md#head)
- [includes](array.md#includes)
- [indexOf](array.md#indexof)
- [insertionSort](array.md#insertionsort)
- [intersection](array.md#intersection)
- [last](array.md#last)
- [lastIndexOf](array.md#lastindexof)
- [map](array.md#map)
- [mergeSort](array.md#mergesort)
- [move](array.md#move)
- [quickSort](array.md#quicksort)
- [range](array.md#range)
- [reduce](array.md#reduce)
- [reduceRight](array.md#reduceright)
- [sample](array.md#sample)
- [selectionSort](array.md#selectionsort)
- [shuffle](array.md#shuffle)
- [simpleFuzzySearch](array.md#simplefuzzysearch)
- [simpleFuzzySearchTest](array.md#simplefuzzysearchtest)
- [slice](array.md#slice)
- [some](array.md#some)
- [sort](array.md#sort)
- [tail](array.md#tail)
- [take](array.md#take)
- [takeRight](array.md#takeright)
- [takeRightWhile](array.md#takerightwhile)
- [takeWhile](array.md#takewhile)
- [unique](array.md#unique)

## Array

### bubbleSort

▸ **bubbleSort**\<`T`\>(`array`, `...criteria`): `T`[]

Creates new array sorted in ascending/descending order with single or multiple criteria.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | Type of the array elements |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `ArrayLike`\<`T`\> \| readonly `T`[] | Array to sort |
| `...criteria` | \{ `by?`: (`item`: `T`) => `string` \| `number` \| `bigint` \| [`Date`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date ) ; `order?`: ``"asc"`` \| ``"desc"``  }[] | Criteria to sort by |

#### Returns

`T`[]

The new sorted array

**`Example`**

```ts
bubbleSort([1, 2, 3, 4], { order: 'desc' })
// => [4, 3, 2, 1]

// --- Sorting by multiple properties ---
const array = [{ a: 2, b: 1 }, { a: 1, b: 2 }, { a: 1, b: 1 }];

bubbleSort(array,
  { order: 'asc', by: item => item.a },
  { order: 'desc', by: item => item.b }
)
// => [{ a: 1, b: 2 }, { a: 1, b: 1 }, { a: 2, b: 1 }]
```

#### Defined in

array/index.ts:52

___

### chunk

▸ **chunk**\<`T`\>(`array`, `size`): `T`[][]

Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the array elements |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `ArrayLike`\<`T`\> \| readonly `T`[] | The array to chunk |
| `size` | `number` | The length of each chunk |

#### Returns

`T`[][]

The new array of chunks

**`Example`**

```ts
chunk(['a', 'b', 'c', 'd'], 2)
// => [['a', 'b'], ['c', 'd']]

chunk(['a', 'b', 'c', 'd'], 3)
// => [['a', 'b', 'c'], ['d']]
```

#### Defined in

array/index.ts:53

___

### compact

▸ **compact**\<`T`\>(`array`): `T`[]

Creates an array with all falsey values removed. The values `false`, `null`,
`0`, `""`, `undefined`, and `NaN` are falsey.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `Object` | (non-nullable) The type of the array elements |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `ArrayLike`\<`Falsy` \| `T`\> \| readonly (`Falsy` \| `T`)[] | The array to compact |

#### Returns

`T`[]

The new array of filtered values

**`Example`**

```ts
compact([0, 1, false, 2, '', 3])
// => [1, 2, 3]
```

#### Defined in

array/index.ts:54

___

### count

▸ **count**\<`T`, `K`\>(`array`, `criteria`): [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`K`, `number`\>

Creates an object with counts of occurrences of items in the array.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | `T` | The type of the array elements |
| `K` | extends `PropertyKey` | The type of the criteria keys |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `ArrayLike`\<`T`\> \| readonly `T`[] | The array or record to iterate over |
| `criteria` | (`value`: `T`) => `K` | The criteria to count by |

#### Returns

[`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`K`, `number`\>

The composed aggregate object

**`Example`**

```ts
const users = [
  { 'user': 'barney', 'active': true, age: 36 },
  { 'user': 'betty', 'active': false, age: 36 },
  { 'user': 'fred', 'active': true, age: 40 }
]

count(users, value => value.active ? 'active' : 'inactive');
// => { 'active': 2, 'inactive': 1 }

count(users, value => value.age);
// => { 36: 2, 40: 1 }
```

#### Defined in

array/index.ts:55

___

### difference

▸ **difference**\<`U`\>(`...arraysOrCompareFn`): `U`[]

Create a new array with values from the first array that are not present in the other arrays.
Optionally, use a compare function to determine the comparison of elements (default is `===`).

#### Type parameters

| Name | Description |
| :------ | :------ |
| `U` | The type of the array elements |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...arraysOrCompareFn` | [`ArrayLike`\<`U`\> \| `U`[], `ArrayLike`\<`U`\> \| `U`[], ...(ArrayLike\<U\> \| U[])[]] | Two or more arrays with an optional compare function at the end |

#### Returns

`U`[]

The new array of filtered values

**`Example`**

```ts
difference([2, 1], [2, 3], [6])
// => [1]

// ---- Custom compare function ----
const compareByFloor = (a, b) => Math.floor(a) === Math.floor(b);
difference([1.2, 3.1], [1.3, 2.4], compareByFloor)
// => [3.1]

// ---- Only compare by id ----
const arr1 = [{ id: 1, name: 'Yeet' }, { id: 3, name: 'John' }];
const arr2 = [{ id: 3, name: 'Carl' }, { id: 4, name: 'Max' }];

difference(arr1, arr2, (a, b) => a.id === b.id)
// => [{ id: 1, name: 'Yeet' }]
```

#### Defined in

array/index.ts:56

▸ **difference**\<`T`\>(`...arraysOrCompareFn`): `PullOutArray`\<[...T]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`unknown`[] \| `ArrayLike`\<`unknown`\>, `unknown`[] \| `ArrayLike`\<`unknown`\>, ...(unknown[] \| ArrayLike\<unknown\>)[]] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...arraysOrCompareFn` | [...T[], [`CompareFunction`](../modules.md#comparefunction)\<`T`\>] |

#### Returns

`PullOutArray`\<[...T]\>

#### Defined in

array/index.ts:56

___

### drop

▸ **drop**\<`T`\>(`array`, `n?`): `T`[]

Creates a slice of `array` excluding `n` elements dropped from the beginning.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the array elements |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `ArrayLike`\<`T`\> \| readonly `T`[] | The array to query |
| `n?` | `number` | The number of elements to drop |

#### Returns

`T`[]

The slice of `array`

**`Example`**

```ts
const users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': true },
  { 'user': 'pebbles', 'active': false }
]

drop(users, 2)
// => objects for ['pebbles']
```

#### Defined in

array/index.ts:57

___

### dropRight

▸ **dropRight**\<`T`\>(`array`, `n?`): `T`[]

Creates a slice of `array` excluding `n` elements dropped from the end.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the array elements |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `ArrayLike`\<`T`\> \| readonly `T`[] | The array to query |
| `n?` | `number` | The number of elements to drop |

#### Returns

`T`[]

The slice of `array`

**`Example`**

```ts
const users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': true },
  { 'user': 'pebbles', 'active': true }
]

dropRight(users, 2)
// => objects for ['barney']
```

#### Defined in

array/index.ts:58

___

### dropRightWhile

▸ **dropRightWhile**\<`T`\>(`array`, `predicate`): `T`[]

Creates a slice of `array` excluding elements dropped from the end.
Elements are dropped until `predicate` returns falsy.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the array elements |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `ArrayLike`\<`T`\> \| readonly `T`[] | The array to query |
| `predicate` | (`value`: `T`) => `boolean` | The function invoked per iteration |

#### Returns

`T`[]

The slice of `array`

**`Example`**

```ts
const users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': true },
  { 'user': 'pebbles', 'active': true }
]

dropRightWhile(users, user => user.active)
// => objects for ['barney']
```

#### Defined in

array/index.ts:59

___

### dropWhile

▸ **dropWhile**\<`T`\>(`array`, `predicate`): `T`[]

Creates a slice of `array` excluding elements dropped from the beginning.
Elements are dropped until `predicate` returns falsy.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the array elements |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `ArrayLike`\<`T`\> \| readonly `T`[] | The array to query |
| `predicate` | (`value`: `T`) => `boolean` | The function invoked per iteration |

#### Returns

`T`[]

The slice of `array`

**`Example`**

```ts
const users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': true },
  { 'user': 'pebbles', 'active': false }
]

dropWhile(users, user => user.active)
// => objects for ['pebbles']
```

#### Defined in

array/index.ts:60

___

### each

▸ **each**\<`T`\>(`array`, `callback`): `void`

Iterates over elements of `array` and invokes `callback` for each element.
Callback functions may exit iteration early by explicitly returning `false`.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the array elements |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `ArrayLike`\<`T`\> \| readonly `T`[] | The array to iterate over |
| `callback` | (`value`: `T`, `index`: `number`, `self`: readonly `T`[]) => `undefined` \| `boolean` \| `void` | The function invoked per iteration |

#### Returns

`void`

**`Example`**

```ts
each([1, 2], value => console.log(value))
// => Logs `1` then `2`.
```

#### Defined in

array/index.ts:61

___

### eachRight

▸ **eachRight**\<`T`\>(`array`, `callback`): `void`

This method is like `{@link each}` except that it iterates over elements of `array` from right to left.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the array elements |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `ArrayLike`\<`T`\> \| readonly `T`[] | The array to iterate over |
| `callback` | (`value`: `T`, `index`: `number`, `self`: readonly `T`[]) => `undefined` \| `boolean` \| `void` | The function invoked per iteration |

#### Returns

`void`

**`Example`**

```ts
each([1, 2], value => console.log(value))
// => Logs `1` then `2`.
```

#### Defined in

array/index.ts:62

___

### every

▸ **every**\<`T`\>(`array`, `predicate`): `boolean`

Checks if `predicate` returns truthy for **all** elements of `array`.
Iteration is stopped once `predicate` returns falsey.

**Note:** This method returns `true` for
[empty arrays](https://en.wikipedia.org/wiki/Empty_set) because
[everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
elements of empty arrays.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the array elements |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `ArrayLike`\<`T`\> \| readonly `T`[] | The array to iterate over |
| `predicate` | (`value`: `T`, `index`: `number`, `self`: readonly `T`[]) => `boolean` | The function invoked per iteration |

#### Returns

`boolean`

`true` if all elements pass the predicate check, else `false`

**`Example`**

```ts
every([true, 1, null, 'yes'], Boolean)
// => false
```

#### Defined in

array/index.ts:63

___

### filter

▸ **filter**\<`T`\>(`array`, `predicate`): `T`[]

Iterates over elements of `array`, returning an array of all elements `predicate` returns truthy for.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the array elements |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `ArrayLike`\<`T`\> \| readonly `T`[] | The array to iterate over |
| `predicate` | (`value`: `T`, `index`: `number`, `self`: readonly `T`[]) => `boolean` | The function invoked per iteration |

#### Returns

`T`[]

The new filtered array

**`Example`**

```ts
const users = [
  { 'user': 'barney', 'active': true },
  { 'user': 'fred',   'active': false }
]

filter(users, ({ active }) => active)
// => objects for ['barney']
```

**`Since`**

5.0.0

#### Defined in

array/index.ts:64

___

### findIndex

▸ **findIndex**\<`T`\>(`array`, `predicate`, `fromIndex?`, `fromRight?`): `number`

This method iterates over elements of `array` until the predicate returns truthy.
Then it returns the index of the found element, else `-1`.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the array elements |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `ArrayLike`\<`T`\> \| readonly `T`[] | The array to inspect |
| `predicate` | (`value`: `T`, `index`: `number`, `self`: readonly `T`[]) => `boolean` | The function invoked per iteration |
| `fromIndex?` | `number` | The index to search from |
| `fromRight?` | `boolean` | Search from right to left |

#### Returns

`number`

The index of the found element, else `-1`

**`Example`**

```ts
const users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
]

findIndex(users, ({ user }) => user === 'pebbles')
// => 2
```

#### Defined in

array/index.ts:65

___

### findLastIndex

▸ **findLastIndex**\<`T`\>(`array`, `predicate`, `fromIndex?`): `number`

This method is like `{@link findIndex}` except that it iterates over elements of `array` from right to left.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the array elements |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `ArrayLike`\<`T`\> \| readonly `T`[] | The array to inspect |
| `predicate` | (`value`: `T`, `index`: `number`, `self`: readonly `T`[]) => `boolean` | The function invoked per iteration |
| `fromIndex?` | `number` | The index to search from |

#### Returns

`number`

The index of the found element, else `-1`

**`Example`**

```ts
const users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
]

findLastIndex(users, ({ user }) => user === 'pebbles')
// => 2
```

#### Defined in

array/index.ts:66

___

### flat

▸ **flat**\<`T`, `D`\>(`array`, `depth?`): [`FlattenedArray`](../modules.md#flattenedarray)\<`T`[], `D`\>[]

Flattens an array of arrays into a single array.
`Array.flat()` is much slower than this on Node >= 19.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | `T` | The type of the array elements |
| `D` | extends `number` = ``1`` | The maximum recursion depth |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `ArrayLike`\<`T`\> \| readonly `T`[] | - |
| `depth?` | `D` | The maximum recursion depth |

#### Returns

[`FlattenedArray`](../modules.md#flattenedarray)\<`T`[], `D`\>[]

Returns the flattened array

**`Example`**

```ts
flat([1, [2, [3, [4]], 5]])
// => [1, 2, [3, [4]], 5]

flat([1, [2, [3, [4]], 5]], 2)
// => [1, 2, 3, [4], 5]
```

#### Defined in

array/index.ts:67

___

### fuzzySearchMatch

▸ **fuzzySearchMatch**(`pattern`, `string`, `opts?`): ``null`` \| \{ `result`: `string` ; `score`: `number`  }

Test if a string matches a pattern for fuzzy searching.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pattern` | `string` | The search input string |
| `string` | `string` | The string to match with the pattern |
| `opts?` | `Object` | (Optional) Options object |
| `opts.caseSensitive?` | `boolean` | - |
| `opts.extract?` | (...`args`: `any`) => `string` | (Optional) Function to extract a string from an element in the array |
| `opts.post?` | `string` | (Optional) String to put after a matching character |
| `opts.pre?` | `string` | (Optional) String to put before a matching character |

#### Returns

``null`` \| \{ `result`: `string` ; `score`: `number`  }

An object with the rendered string and the score, or null if it doesn't match

#### Defined in

array/index.ts:69

___

### group

▸ **group**\<`T`, `K`\>(`array`, `getGroupKey`): [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`K`, `T`[]\>

Creates an object with grouped items in the array.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | `T` | The type of the array elements |
| `K` | extends `PropertyKey` | - |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `ArrayLike`\<`T`\> \| readonly `T`[] | The array or object to iterate over |
| `getGroupKey` | (`value`: `T`) => `K` | A function that returns the group id for each item |

#### Returns

[`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`K`, `T`[]\>

An object with grouped items

**`Example`**

```ts
group([6.1, 4.2, 6.3], Math.floor)
// => { 4: [4.2], 6: [6.1, 6.3] }

group([6.1, 4.2, 6.3], value => value > 5 ? '>5' : '<=5')
// => { '<=5': [4.2], '>5': [6.1, 6.3] }
```

#### Defined in

array/index.ts:72

___

### head

▸ **head**\<`T`\>(`array`): [`ArrayHead`](../modules.md#arrayhead)\<`T`[]\>

Gets the first element of `array`.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the array elements |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `ArrayLike`\<`T`\> \| readonly `T`[] | The array to query |

#### Returns

[`ArrayHead`](../modules.md#arrayhead)\<`T`[]\>

The first element of `array`, or `undefined` if `array` is empty

**`Example`**

```ts
head([1, 2, 3]);
// => 1

head([]);
// => undefined
```

#### Defined in

array/index.ts:73

___

### includes

▸ **includes**\<`T`\>(`array`, `value`, `compareFn?`): `boolean`

Checks if `value` is in `array` based on [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero) comparison.
Optionally, a `compareFn` can be provided to customize the comparison.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the array elements |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | readonly `T`[] | The array to query |
| `value` | `T` | The value to search for |
| `compareFn?` | (`a`: `T`, `b`: `T`) => `boolean` | The function invoked per iteration |

#### Returns

`boolean`

`true` if `value` is found, else `false`

**`Example`**

```ts
includes([1, 2, 3], 1);
// => true

includes([1, 2, 3], 1, (a, b) => a === b);
// => true
```

#### Defined in

array/index.ts:74

___

### indexOf

▸ **indexOf**\<`T`\>(`array`, `value`, `fromIndex?`): `number`

Gets the index at which the first occurrence of `value` is found in `array`
using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
for equality comparisons. If `fromIndex` is negative, it's used as the
offset from the end of `array`.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the array elements |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `ArrayLike`\<`T`\> \| readonly `T`[] | The array to query |
| `value` | `T` | The value to search for |
| `fromIndex?` | `number` | The index to search from |

#### Returns

`number`

The index of the matched value, else `-1`

**`Example`**

```ts
indexOf([1, 2, 1, 2], 2)
// => 1

// Search from the `fromIndex`.
indexOf([1, 2, 1, 2], 2, 2)
// => 3
```

#### Defined in

array/index.ts:75

___

### insertionSort

▸ **insertionSort**\<`T`\>(`array`, `...criteria`): `T`[]

Creates new array sorted in ascending/descending order with single or multiple criteria.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | Type of the array elements |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `ArrayLike`\<`T`\> \| readonly `T`[] | Array to sort |
| `...criteria` | \{ `by?`: (`item`: `T`) => `string` \| `number` \| `bigint` \| [`Date`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date ) ; `order?`: ``"asc"`` \| ``"desc"``  }[] | Criteria to sort by |

#### Returns

`T`[]

New sorted array

**`Example`**

```ts
insertionSort([1, 2, 3, 4], { order: 'desc' })
// => [4, 3, 2, 1]

// --- Sorting by multiple properties ---
const array = [{ a: 2, b: 1 }, { a: 1, b: 2 }, { a: 1, b: 1 }];

insertionSort(array,
  { order: 'asc', by: item => item.a },
  { order: 'desc', by: item => item.b }
)
// => [{ a: 1, b: 2 }, { a: 1, b: 1 }, { a: 2, b: 1 }]
```

#### Defined in

array/index.ts:76

___

### intersection

▸ **intersection**\<`U`\>(`...arraysOrCompareFn`): `U`[]

Create an array with unique values that are present in all arrays.
The order of the values is based on the first array.

Optionally, use a compare function for element comparison (default is `===`).

#### Type parameters

| Name | Description |
| :------ | :------ |
| `U` | Type of the array elements |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...arraysOrCompareFn` | [`ArrayLike`\<`U`\> \| `U`[], `ArrayLike`\<`U`\> \| `U`[], ...(ArrayLike\<U\> \| U[])[]] | Two or more arrays with an optional compare function at the end |

#### Returns

`U`[]

New array of intersecting values

**`Example`**

```ts
intersection([2, 1], [2, 3], [6, 2])
// => [2]

// ---- Custom compare function ----
const compareFn = (a, b) => Math.floor(a) === Math.floor(b);

intersection([1.2, 1.1], [1.3, 2.4], compareFn)
// => [1.2]

// ---- Only compare by id ----
const arr1 = [{ id: 1, name: 'Yeet' }, { id: 3, name: 'John' }];
const arr2 = [{ id: 3, name: 'Carl' }, { id: 4, name: 'Max' }];

intersection(arr1, arr2, (a, b) => a.id === b.id)
// => [{ id: 3, name: 'John' }]
```

#### Defined in

array/index.ts:77

▸ **intersection**\<`T`\>(`...arraysOrCompareFn`): `PullOutArray`\<[...T]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`unknown`[] \| `ArrayLike`\<`unknown`\>, `unknown`[] \| `ArrayLike`\<`unknown`\>, ...(unknown[] \| ArrayLike\<unknown\>)[]] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...arraysOrCompareFn` | [...T[], [`CompareFunction`](../modules.md#comparefunction)\<`T`\>] |

#### Returns

`PullOutArray`\<[...T]\>

#### Defined in

array/index.ts:77

___

### last

▸ **last**\<`T`\>(`array`): [`ArrayLast`](../modules.md#arraylast)\<`T`[]\>

Gets the last element of `array`.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the array elements |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `ArrayLike`\<`T`\> \| readonly `T`[] | The array to query |

#### Returns

[`ArrayLast`](../modules.md#arraylast)\<`T`[]\>

The last element of `array`, or `undefined` if `array` is empty

**`Example`**

```ts
last([1, 2, 3])
// => 3
```

#### Defined in

array/index.ts:78

___

### lastIndexOf

▸ **lastIndexOf**\<`T`\>(`array`, `value`, `fromIndex?`): `number`

This method is like `{@link indexOf}` except that it iterates over elements of `array` from right to left.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the array elements |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `ArrayLike`\<`T`\> \| readonly `T`[] | The array to query |
| `value` | `T` | The value to search for |
| `fromIndex?` | `number` | The index to search from |

#### Returns

`number`

The index of the matched value, else `-1`

**`Example`**

```ts
lastIndexOf([1, 2, 1, 2], 2)
// => 3
```

#### Defined in

array/index.ts:79

___

### map

▸ **map**\<`T`, `R`\>(`array`, `callback`): `R`[]

Creates an array of values by running each element in `array` through `callback`.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | `T` | The type of the array elements |
| `R` | `T` | The type of the returned array elements |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `ArrayLike`\<`T`\> \| readonly `T`[] | The array to iterate over |
| `callback` | (`value`: `T`, `index`: `number`, `self`: readonly `T`[]) => `R` | The function invoked per iteration |

#### Returns

`R`[]

The new mapped array

**`Example`**

```ts
map([4, 8], n => n * n)
// => [16, 64]
```

#### Defined in

array/index.ts:80

___

### mergeSort

▸ **mergeSort**\<`T`\>(`array`, `...criteria`): `T`[]

Creates new array sorted in ascending/descending order with single or multiple criteria.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | Type of the array elements |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `ArrayLike`\<`T`\> \| readonly `T`[] | Array to sort |
| `...criteria` | \{ `by?`: (`item`: `T`) => `string` \| `number` \| `bigint` \| [`Date`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date ) ; `order?`: ``"asc"`` \| ``"desc"``  }[] | Criteria to sort by |

#### Returns

`T`[]

New sorted array

**`Example`**

```ts
mergeSort([1, 2, 3, 4], { order: 'desc' })
// => [4, 3, 2, 1]

// --- Sorting by multiple properties ---
const array = [{ a: 2, b: 1 }, { a: 1, b: 2 }, { a: 1, b: 1 }];

mergeSort(array,
  { order: 'asc', by: item => item.a },
  { order: 'desc', by: item => item.b }
)
// => [{ a: 1, b: 2 }, { a: 1, b: 1 }, { a: 2, b: 1 }]
```

#### Defined in

array/index.ts:81

___

### move

▸ **move**\<`T`\>(`array`, `from`, `to`): `T`[]

Moves an element within an array.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | Type of the array elements |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `ArrayLike`\<`T`\> \| `T`[] | The input array |
| `from` | `number` | Index of the element to move |
| `to` | `number` | Target index for the element |

#### Returns

`T`[]

The modified array with the moved element

**`Example`**

```ts
move([1, 2, 3, 4, 5], 0, 2);
// => [2, 3, 1, 4, 5]
```

**`Throws`**

If index is out of bounds

#### Defined in

array/index.ts:82

___

### quickSort

▸ **quickSort**\<`T`\>(`array`, `...criteria`): `T`[]

Creates new array sorted in ascending/descending order with single or multiple criteria.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | Type of the array elements |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `ArrayLike`\<`T`\> \| readonly `T`[] | Array to sort |
| `...criteria` | \{ `by?`: (`item`: `T`) => `string` \| `number` \| `bigint` \| [`Date`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date ) ; `order?`: ``"asc"`` \| ``"desc"``  }[] | Criteria to sort by |

#### Returns

`T`[]

New sorted array

**`Example`**

```ts
quickSort([1, 2, 3, 4], { order: 'desc' })
// => [4, 3, 2, 1]

// --- Sorting by multiple properties ---
const array = [{ a: 2, b: 1 }, { a: 1, b: 2 }, { a: 1, b: 1 }];

quickSort(array,
  { order: 'asc', by: item => item.a },
  { order: 'desc', by: item => item.b }
)
// => [{ a: 1, b: 2 }, { a: 1, b: 1 }, { a: 2, b: 1 }]
```

#### Defined in

array/index.ts:83

___

### range

▸ **range**(`start`, `end`, `step?`): `number`[]

Creates an array from start to end (inclusive), stepping by step.
If start is larger than end, the array is generated in reverse

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | Start number of sequence |
| `end` | `number` | End number of sequence |
| `step?` | `number` | Step between numbers, default: 1 |

#### Returns

`number`[]

An array of numbers

**`Example`**

```ts
for (const num of range(1, 5)) {
  console.log(num);
}
// => 1 2 3 4 5

// Array of even numbers between 0 and 10:
range(0, 10, 2);
// => [0, 2, 4, 6, 8, 10]

// Descending range:
range(5, 0, 2);
// => [5, 3, 1]
```

**`Throws`**

If range is negative or step is 0

#### Defined in

array/index.ts:84

___

### reduce

▸ **reduce**\<`T`, `Acc`\>(`array`, `callback`, `accumulator?`, `initAccum?`): [`ReducedArray`](../modules.md#reducedarray)\<`T`[], `Acc`\>

Reduces an array to a single value by invoking the callback function for each element in the array.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | `T` | Type of the array elements |
| `Acc` | `T` | Type of the accumulator |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `ArrayLike`\<`T`\> \| readonly `T`[] | The array to iterate over |
| `callback` | (`acc`: `Acc`, `value`: `T`, `index`: `number`, `self`: readonly `T`[]) => `Acc` | The function invoked per iteration |
| `accumulator?` | `Acc` | The initial value |
| `initAccum?` | `boolean` | Whether to use the first element as the initial value |

#### Returns

[`ReducedArray`](../modules.md#reducedarray)\<`T`[], `Acc`\>

The reduced value

**`Example`**

```ts
reduce([1, 2, 3, 4, 5], (acc, value) => acc + value);
// => 15
```

**`Throws`**

If accumulator is nullish and initAccum is false

#### Defined in

array/index.ts:85

___

### reduceRight

▸ **reduceRight**\<`T`, `Acc`\>(`array`, `iteratee`, `accumulator?`, `initAccum?`): [`ReducedArray`](../modules.md#reducedarray)\<`T`[], `Acc`\>

Like `{@link reduce}`, but iterates from right to left.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | `T` | Type of the array elements |
| `Acc` | `T` | Type of the accumulator |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `ArrayLike`\<`T`\> \| readonly `T`[] | The array to iterate over |
| `iteratee` | (`acc`: `Acc`, `value`: `T`, `index`: `number`, `self`: readonly `T`[]) => `Acc` | - |
| `accumulator?` | `Acc` | The initial value |
| `initAccum?` | `boolean` | Whether to use the first element as the initial value |

#### Returns

[`ReducedArray`](../modules.md#reducedarray)\<`T`[], `Acc`\>

The reduced value

**`Example`**

```ts
reduceRight([1, 2, 3, 4, 5], (acc, value) => acc + value);
// => 15
```

**`Throws`**

If accumulator is nullish and initAccum is false

#### Defined in

array/index.ts:86

___

### sample

▸ **sample**\<`T`\>(`array`, `size?`): `T`[]

Gets a random element from `array`.
Optionally, gets up to `size` elements.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | Type of the array elements |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `ArrayLike`\<`T`\> \| readonly `T`[] | The array to sample |
| `size?` | `number` | The number of elements to sample |

#### Returns

`T`[]

The random element(s) from `array` as an array

**`Example`**

```ts
sample([1, 2, 3, 4])
// => [2]

sample([1, 2, 3, 4], 2)
// => [3, 1]
```

#### Defined in

array/index.ts:87

___

### selectionSort

▸ **selectionSort**\<`T`\>(`array`, `...criteria`): `T`[]

Creates new array sorted in ascending/descending order with single or multiple criteria.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | Type of the array elements |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `ArrayLike`\<`T`\> \| readonly `T`[] | Array to sort |
| `...criteria` | \{ `by?`: (`item`: `T`) => `string` \| `number` \| `bigint` \| [`Date`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date ) ; `order?`: ``"asc"`` \| ``"desc"``  }[] | Criteria to sort by |

#### Returns

`T`[]

New sorted array

**`Example`**

```ts
selectionSort([1, 2, 3, 4], { order: 'desc' })
// => [4, 3, 2, 1]

// --- Sorting by multiple properties ---
const array = [{ a: 2, b: 1 }, { a: 1, b: 2 }, { a: 1, b: 1 }];

selectionSort(array,
  { order: 'asc', by: item => item.a },
  { order: 'desc', by: item => item.b }
)
// => [{ a: 1, b: 2 }, { a: 1, b: 1 }, { a: 2, b: 1 }]
```

#### Defined in

array/index.ts:88

___

### shuffle

▸ **shuffle**\<`T`\>(`array`): `T`[]

Creates a new array of shuffled values, using the Fisher-Yates-Durstenfeld Shuffle algorithm.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the array elements |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | readonly `T`[] | Array to shuffle |

#### Returns

`T`[]

A new shuffled array

**`Example`**

```ts
shuffle([1, 2, 3, 4])
// => [4, 1, 3, 2]
```

#### Defined in

array/index.ts:89

___

### slice

▸ **slice**\<`T`\>(`array`, `start`, `end?`): `T`[]

Creates a slice of `array` from `start` up to, but not including, `end`.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | `unknown` | The type of the array elements |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `ArrayLike`\<`T`\> \| `T`[] | The array to slice |
| `start` | `number` | The start index |
| `end?` | `number` | The end index (exclusive) |

#### Returns

`T`[]

The sliced array

**`Example`**

```ts
slice([1, 2, 3, 4], 1, 3)
// => [2, 3]
```

#### Defined in

array/index.ts:90

___

### some

▸ **some**\<`T`\>(`array`, `predicate`): `boolean`

Checks if `predicate` returns truthy for **any** element of `array`.
Iteration is stopped once `predicate` returns truthy.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `ArrayLike`\<`T`\> \| readonly `T`[] | The array to iterate over. |
| `predicate` | (`value`: `T`, `index`: `number`, `self`: readonly `T`[]) => `boolean` | The function invoked per iteration |

#### Returns

`boolean`

`true` if any element passes the predicate check, else `false`

**`Example`**

```ts
some([null, 0, 'yes', false], Boolean)
// => true
```

#### Defined in

array/index.ts:91

___

### sort

▸ **sort**\<`T`\>(`array`, `...criteria`): `T`[]

Creates new array sorted in ascending/descending order with single or multiple criteria.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | Type of the array elements |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `ArrayLike`\<`T`\> \| readonly `T`[] | Array to sort |
| `...criteria` | \{ `by?`: (`item`: `T`) => `string` \| `number` \| `bigint` \| [`Date`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date ) ; `order?`: ``"asc"`` \| ``"desc"``  }[] | Criteria to sort by |

#### Returns

`T`[]

New sorted array

**`Example`**

```ts
sort([1, 2, 3, 4], { order: 'desc' })
// => [4, 3, 2, 1]

// --- Sorting by multiple properties ---
const array = [{ a: 2, b: 1 }, { a: 1, b: 2 }, { a: 1, b: 1 }];

sort(array,
  { order: 'asc', by: item => item.a },
  { order: 'desc', by: item => item.b }
)
// => [{ a: 1, b: 2 }, { a: 1, b: 1 }, { a: 2, b: 1 }]
```

#### Defined in

array/index.ts:92

___

### tail

▸ **tail**\<`T`\>(`array`): [`ArrayTail`](../modules.md#arraytail)\<`T`[]\>

Gets all but the first element of `array`.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the array elements |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `ArrayLike`\<`T`\> \| readonly `T`[] | The array to query |

#### Returns

[`ArrayTail`](../modules.md#arraytail)\<`T`[]\>

The slice of `array`

**`Example`**

```ts
tail([1, 2, 3])
// => [2, 3]
```

#### Defined in

array/index.ts:93

___

### take

▸ **take**\<`T`\>(`array`, `n?`): `T`[]

Creates a slice of `array` with `n` elements taken from the beginning.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the array elements |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `ArrayLike`\<`T`\> \| `T`[] | The array to query |
| `n?` | `number` | The number of elements to take |

#### Returns

`T`[]

The new array of taken elements

**`Example`**

```ts
const users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': true },
  { 'user': 'pebbles', 'active': false }
]

take(users, 2)
// => objects for ['barney', 'fred']
```

#### Defined in

array/index.ts:94

___

### takeRight

▸ **takeRight**\<`T`\>(`array`, `n?`): `T`[]

Creates a slice of `array` with `n` elements taken from the end.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the array elements |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `ArrayLike`\<`T`\> \| `T`[] | The array to query |
| `n?` | `number` | The number of elements to take |

#### Returns

`T`[]

The new array of taken elements

**`Example`**

```ts
const users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': true },
  { 'user': 'pebbles', 'active': false }
]

takeRight(users, 2)
// => objects for ['fred', 'pebbles']
```

#### Defined in

array/index.ts:95

___

### takeRightWhile

▸ **takeRightWhile**\<`T`\>(`array`, `predicate`): `T`[]

Creates a slice of `array` with elements taken from the end.
Elements are taken until `predicate` returns falsy.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the array elements |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `ArrayLike`\<`T`\> \| readonly `T`[] | The array to query |
| `predicate` | (`value`: `T`) => `boolean` | The function invoked per iteration |

#### Returns

`T`[]

The new array of taken elements

**`Example`**

```ts
const users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': true },
  { 'user': 'pebbles', 'active': true }
]

takeRightWhile(users, user => user.active)
// => objects for ['fred', 'pebbles']
```

#### Defined in

array/index.ts:96

___

### takeWhile

▸ **takeWhile**\<`T`\>(`array`, `predicate`): `T`[]

Creates a slice of `array` with elements taken from the beginning.
Elements are taken until `predicate` returns falsy.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the array elements |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `ArrayLike`\<`T`\> \| readonly `T`[] | The array to query |
| `predicate` | (`value`: `T`) => `boolean` | The function invoked per iteration |

#### Returns

`T`[]

The new array of taken elements

**`Example`**

```ts
const users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': true },
  { 'user': 'pebbles', 'active': false }
]

takeWhile(users, user => user.active)
// => objects for ['barney', 'fred']
```

#### Defined in

array/index.ts:97

___

### unique

▸ **unique**\<`T`\>(`array`, `compareFn?`): `T`[]

Creates unique array retaining first occurrence of elements.

A compare function is optional (default is `===`).

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | Type of the array elements |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `ArrayLike`\<`T`\> \| readonly `T`[] | Array to inspect |
| `compareFn?` | (`a`: `T`, `b`: `T`) => `boolean` | Compare function invoked per element |

#### Returns

`T`[]

A new unique array

**`Example`**

```ts
unique([2, 1, 2])
// => [2, 1]

// compare by object values
const users = [
  { id: 1, name: 'john' },
  { id: 2, name: 'john' },
  { id: 2, name: 'john' },
]

unique(users, isEqual)
// => [{ id: 1, name: 'john' }, { id: 2, name: 'john' }]

// compare by id
unique(users, (a, b) => a.name === b.name)
// => [{ id: 1, name: 'john' }]
```

#### Defined in

array/index.ts:98

## Other

### fuzzySearch

▸ **fuzzySearch**\<`T`\>(`pattern`, `array`, `opts?`): `Result`[]

Fuzzy search an array of strings.
It uses a scoring system to determine the best matches.
The best matches are returned first.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `any`[] \| `ArrayLike`\<`any`\> = `string`[] | The type of array |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pattern` | `string` | The search input string |
| `array` | `T` | The array to search through |
| `opts?` | `T` extends `string`[] \| `ArrayLike`\<`string`\> ? \{ `caseSensitive?`: `boolean` ; `extract?`: (`arg`: `string`) => `string` ; `post?`: `string` ; `pre?`: `string`  } : \{ `caseSensitive?`: `boolean` ; `extract`: (`arg`: `T`[`number`]) => `string` ; `post?`: `string` ; `pre?`: `string`  } | (Optional) Options object |

#### Returns

`Result`[]

An array of matches

**`Example`**

```ts
fuzzySearch("abc", ["abc", "acb", "bac", "bca", "cab", "cba"])
// => [
//   { string: "abc", score: Infinity, index: 0, original: "abc" },
//   { string: "acb", score: 6, index: 1, original: "acb" },
//   { string: "cab", score: 6, index: 4, original: "cab" },
//   { string: "bac", score: 5, index: 2, original: "bac" },
//   { string: "bca", score: 5, index: 3, original: "bca" },
//   { string: "cba", score: 4, index: 5, original: "cba" },
// ]
```

#### Defined in

array/index.ts:68

___

### simpleFuzzySearch

▸ **simpleFuzzySearch**(`pattern`, `array`): `string`[]

Fuzzy search an array of strings.
It does not use a scoring system
and returns the matches in the order they appear in the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pattern` | `string` | The search input string |
| `array` | `string`[] | The array to search through |

#### Returns

`string`[]

An array of matches

**`Example`**

```ts
simpleFuzzySearch("abc", ["abc", "acb", "bac", "bca", "cab", "cba"])
// => ["abc", "acb", "bac", "bca", "cab", "cba"]
```

#### Defined in

array/index.ts:70

___

### simpleFuzzySearchTest

▸ **simpleFuzzySearchTest**(`pattern`, `str`): `boolean`

Test if a string matches a pattern for simple fuzzy searching.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pattern` | `string` | The search input string |
| `str` | `string` | The string to match with the pattern |

#### Returns

`boolean`

True if the string matches the pattern, false otherwise

#### Defined in

array/index.ts:71
