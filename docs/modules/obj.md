[underscorets](../README.md) / [Exports](../modules.md) / obj

# Namespace: obj

## Table of contents

### Functions

- [at](obj.md#at)
- [filter](obj.md#filter)
- [findKey](obj.md#findkey)
- [findLastKey](obj.md#findlastkey)
- [flatKeys](obj.md#flatkeys)
- [get](obj.md#get)
- [keys](obj.md#keys)
- [merge](obj.md#merge)
- [omit](obj.md#omit)
- [pick](obj.md#pick)
- [set](obj.md#set)
- [values](obj.md#values)

## Object

### at

▸ **at**\<`T`, `P`\>(`object`, `paths`): `AtObj`\<`T`, `P`[]\>

Gets the values at each of the `paths`. If a value at a path doesn't exist, it returns `undefined` for that path.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends [`PlainObject`](../modules.md#plainobject) | The type of the object |
| `P` | extends `string` \| `string` & {} | The type of the object path |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `T` | - |
| `paths` | `P`[] | The paths of the properties to get |

#### Returns

`AtObj`\<`T`, `P`[]\>

The values at the paths

**`Example`**

```ts
const obj = { a: { b: 2 } };
at(obj, ['a', 'a.b']);
// => [{ b: 2 }, 2]

// `[number]` can be used to access array elements
const obj = { a: { b: 2, c: ['hello'] } };
at(obj, ['a.b', 'a.c[0]']);
// => [2, 'hello']
```

**`Throws`**

If the path is invalid

#### Defined in

object/index.ts:15

___

### filter

▸ **filter**\<`T`, `K`\>(`object`, `predicate`): [`Partial`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype )\<`T`\>

Iterates over properties of `object`, returning an object with all elements
`predicate` returns truthy for.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends [`PlainObject`](../modules.md#plainobject) | The type of the input object |
| `K` | extends `string` \| `number` \| `symbol` | The type of the keys of the input object |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `T` | The object to iterate over |
| `predicate` | (`value`: `T`[`K`], `key`: `K`, `self`: `T`) => `boolean` | The function invoked per iteration |

#### Returns

[`Partial`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype )\<`T`\>

The new filtered array

**`Example`**

```ts
const object = { 'a': 5, 'b': 8, 'c': 10 }
filterObject(object, (n) => !(n % 5))
// => { 'a': 5, 'c': 10 }
```

#### Defined in

object/index.ts:16

___

### findKey

▸ **findKey**\<`T`, `K`\>(`object`, `predicate`): `K` \| `undefined`

This method returns the key of the first element `predicate` returns truthy for.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends [`PlainObject`](../modules.md#plainobject) | The type of the input object |
| `K` | extends `string` \| `number` \| `symbol` | The type of the keys of the input object |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `T` | The object to inspect |
| `predicate` | (`value`: `T`[`K`], `key`: `K`, `self`: `T`) => `boolean` | The function invoked per iteration |

#### Returns

`K` \| `undefined`

The key of the matched element, else `undefined`.

**`Example`**

```ts
const users = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
}

findKey(users, ({ age }) => age < 40)
// => 'barney' (iteration order is not guaranteed)
```

#### Defined in

object/index.ts:17

___

### findLastKey

▸ **findLastKey**\<`T`, `K`\>(`object`, `predicate`): `K` \| `undefined`

This method is like `{@link findKey}` except it returns the key of the last element `predicate` returns truthy for.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends [`PlainObject`](../modules.md#plainobject) | The type of the input object |
| `K` | extends `string` \| `number` \| `symbol` | The type of the keys of the input object |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `T` | The object to inspect |
| `predicate` | (`value`: `T`[`K`], `key`: `K`, `self`: `T`) => `boolean` | The function invoked per iteration |

#### Returns

`K` \| `undefined`

The key of the matched element, else `undefined`.

**`Example`**

```ts
const users = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
}

findLastKey(users, ({ age }) => age < 40)
// => 'pebbles' (iteration order is not guaranteed)
```

#### Defined in

object/index.ts:18

___

### flatKeys

▸ **flatKeys**\<`T`\>(`object`): [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`Paths`\<`T`\>, `unknown`\>

Flattens an object into a single level object.

These keys can be used with `{@link at}`, `{@link get}` and `{@link set}`.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends [`PlainObject`](../modules.md#plainobject) | The type of the object to flatten |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `T` |

#### Returns

[`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`Paths`\<`T`\>, `unknown`\>

A new object with flattened keys

**`Example`**

```ts
const obj = { a: { b: 2, c: [{ d: 3 }, { d: 4 }] } };
flatKeys(obj);
// => { 'a.b': 2, 'a.c[0].d': 3, 'a.c[1].d': 4 }
```

#### Defined in

object/index.ts:19

___

### get

▸ **get**\<`T`, `P`\>(`object`, `path`): `GetObj`\<`T`, `P`\>

Gets the value at path of object. If the value doesn't exist, it returns `undefined`.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends [`PlainObject`](../modules.md#plainobject) | The type of the object |
| `P` | extends `string` \| `string` & {} | The type of the object path |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `T` | - |
| `path` | `P` | The path of the property to get |

#### Returns

`GetObj`\<`T`, `P`\>

The value at the path

**`Example`**

```ts
const obj = { a: { b: 2 } };
get(obj, 'a.b');
// => 2

// `[number]` can be used to access array elements
const obj = { a: { b: 2, c: ['hello'] } };
get(obj, 'a.c[0]');
// => 'hello'
```

**`Throws`**

If the path is invalid

#### Defined in

object/index.ts:20

___

### keys

▸ **keys**\<`T`\>(`object`): `$`\<`O.Keys`, `T`\>[]

Creates an array of the own enumerable string keyed property names of `object`.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends [`PlainObject`](../modules.md#plainobject) | The type of the object |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `T` | The object to query |

#### Returns

`$`\<`O.Keys`, `T`\>[]

An array of `object's` keys

**`Example`**

```ts
keys({ 'a': 1, 'b': 2, 'c': 3 })
// => ['a', 'b', 'c']
```

#### Defined in

object/index.ts:21

___

### merge

▸ **merge**\<`T`, `S`\>(`target`, `...sources`): `MergeDeepObjects`\<[`T`, ...S]\>

This function combines two or more objects into a single new object. Arrays and other types are overwritten.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends [`PlainObject`](../modules.md#plainobject) | The type of the target object |
| `S` | extends [[`PlainObject`](../modules.md#plainobject), ...PlainObject[]] | The type of the source objects |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `T` | The target object |
| `...sources` | `S` | The source objects |

#### Returns

`MergeDeepObjects`\<[`T`, ...S]\>

A new merged object

**`Example`**

```ts
// ---- Nested objects are merged ----
merge({ a: 1 }, { b: 2 }, { c: 3, d: { e: 4 } })
// => { a: 1, b: 2, c: 3, d: { e: 4 } }

// ---- Other types are overwritten ----
merge({ a: [1, 2] }, { a: [3, 4] })
// => { a: [3, 4] }

merge({ a: 1 }, { a: "Yes" })
// => { a: "Yes" }
```

#### Defined in

object/index.ts:22

___

### omit

▸ **omit**\<`T`, `K`\>(`object`, `keysToOmit`): [`Omit`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys )\<`T`, `K`\>

Omit specified keys from an object

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends [`PlainObject`](../modules.md#plainobject) | The type of the object |
| `K` | extends `string` \| `number` \| `symbol` | - |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `T` | - |
| `keysToOmit` | `K`[] | The keys to exclude from the returned object |

#### Returns

[`Omit`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys )\<`T`, `K`\>

A new object without the specified keys

**`Example`**

```ts
const obj = {a: 1, b: 2, c: 3};
omit(obj, ['a', 'b']);
// => {c: 3}
```

#### Defined in

object/index.ts:23

___

### pick

▸ **pick**\<`T`, `K`\>(`object`, `keysToPick`): [`Pick`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys )\<`T`, `K`\>

Creates an object composed of the picked `object` properties.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends [`PlainObject`](../modules.md#plainobject) | The type of the object |
| `K` | extends `string` \| `number` \| `symbol` | - |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `T` | - |
| `keysToPick` | `K`[] | The property paths to pick |

#### Returns

[`Pick`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys )\<`T`, `K`\>

A new object with the specified keys

**`Example`**

```ts
const object = { 'a': 1, 'b': '2', 'c': 3 }

pick(object, ['a', 'c'])
// => { 'a': 1, 'c': 3 }
```

#### Defined in

object/index.ts:24

___

### set

▸ **set**\<`T`, `P`, `V`\>(`object`, `path`, `value`): `UpdateObj`\<`T`, `P`, `V`\>

Sets the value at path of object. If a portion of path doesn’t exist, it’s created.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends [`PlainObject`](../modules.md#plainobject) | The type of the object |
| `P` | extends `string` \| `string` & {} | The type of the object path |
| `V` | `V` | The type of the value to set |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `T` | - |
| `path` | `P` | The path of the property to set |
| `value` | `V` | The value to set |

#### Returns

`UpdateObj`\<`T`, `P`, `V`\>

A modified object

**`Example`**

```ts
const obj = { a: { b: 2 } };
set(obj, 'a.c', 1);
// => { a: { b: 2, c: 1 } }

// `[number]` can be used to access array elements
set(obj, 'a.c[0]', 'hello');
// => { a: { b: 2, c: ['hello'] } }

// numbers with dots are treated as keys
set(obj, 'a.c.0.d', 'world');
// => { a: { b: 2, c: { 0: { d: 'world' } } }

// supports numbers in keys
set(obj, 'a.e0.a', 1);
// => { a: { e0: { a: 1 } } }
```

**`Throws`**

If the path is invalid

#### Defined in

object/index.ts:25

___

### values

▸ **values**\<`T`\>(`object`): `$`\<`O.Values`, `T`\>[]

Creates an array of the own enumerable string keyed property values of `object`.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends [`PlainObject`](../modules.md#plainobject) | The type of the object |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `T` | The object to query |

#### Returns

`$`\<`O.Values`, `T`\>[]

An array of `object's` values

**`Example`**

```ts
values({ 'a': 1, 'b': 2, 'c': 3 })
// => [1, 2, 3]
```

#### Defined in

object/index.ts:26
