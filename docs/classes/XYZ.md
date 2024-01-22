[underscorets - v0.1.5](../README.md) / XYZ

# Class: XYZ

A class that gives convenient tools for dealing with 2D or 3D coordinates

**Static Methods:**
- `normalize` - Takes either an XYZ or number[] and converts it to XYZ
- `sum` - Adds multiple coordinates together and returns a new object
- `fromString` - converts a string like '3,6,2' a number array and uses that to create an XYZ object

**Methods:**
- `add` - Adds additional coordinates, modifying the current one, and returns the original object
- `plus` - Adds coordinates to the current one, returning a new object
- `subtract` - Subtracts additional coordinates, modifying the current one, and returns the original object
- `minus` - Subtracts additional coordinates, returning a new object
- `multiply` - Multiplies all values by a given scalar. Modifies the original object
- `times` - Multiplies all values by a given scalar, returning a new object
- `copy` - Returns a copy of the object
- `toSign` - Returns a new XYZ object whose values are either 0, 1, or -1, representing whether the x, y, and z values are positive, negative, or 0
- `eq` - Returns whether the coordinates of the XYZ object and another are the same
- `neighbors` - Returns all neighbors in the same z plane
- `neighbors3D` - Returns all neighbors in 3 dimensions
- `distanceTo` - Returns the absolute straight-line distance from one point to another
- `taxicabDistanceTo` - Returns the absolute distance from one point to another using taxicab geometry
- `valueIn` - given a 2D or 3D array, returns the value at [y][x][z] in that array
- `bfs` - Performs a breadth-first search starting at the point the method is called on. Returns the set of visited points and the number if iterations it took to finish. Unless otherwise specified, stops when it runs out of possible places to travel and avoids revisiting points that any path has visited.

**`Example`**

```ts
const p = new XYZ(1, 2, 3);
p.add(1, 2, 3);
// => XYZ { x: 2, y: 4, z: 6 }

const p = new XYZ(1, 2, 3);
p.plus(1, 2, 3);
// => new XYZ { x: 2, y: 4, z: 6 }

const p = new XYZ(1, 2, 3);
p.subtract(1, 2, 3);
// => XYZ { x: 0, y: 0, z: 0 }

const p = new XYZ(1, 2, 3);
p.minus(1, 2, 3);
// => new XYZ { x: 0, y: 0, z: 0 }

const p = new XYZ(1, 2, 3);
p.multiply(2);
// => XYZ { x: 2, y: 4, z: 6 }

const p = new XYZ(1, 2, 3);
p.times(2);
// => new XYZ { x: 2, y: 4, z: 6 }

const p = new XYZ(1, 2, 3);
p.copy();
// => new XYZ { x: 1, y: 2, z: 3 }

const p = new XYZ(1, 2, 3);
p.toSign();
// => new XYZ { x: 1, y: 1, z: 1 }

const p = new XYZ(1, 2, 3);
p.eq([1, 2, 3]);
// => true

const p = new XYZ(1, 2, 3);
p.neighbors();
// [
//   XYZ { x: 2, y: 2, z: 3 },
//   XYZ { x: 1, y: 3, z: 3 },
//   XYZ { x: 0, y: 2, z: 3 },
//   XYZ { x: 1, y: 1, z: 3 }
// ]

const p = new XYZ(1, 2, 3);
p.neighbors3D();
// [
//   XYZ { x: 2, y: 2, z: 3 },
//   XYZ { x: 0, y: 2, z: 3 },
//   XYZ { x: 1, y: 3, z: 3 },
//   XYZ { x: 1, y: 1, z: 3 },
//   XYZ { x: 1, y: 2, z: 4 },
//   XYZ { x: 1, y: 2, z: 2 }
// ]

const p = new XYZ(1, 2, 3);
p.distanceTo([4, 5, 6]); // => 5.196152422706632

const p = new XYZ(1, 2, 3);
p.taxicabDistanceTo([4, 5, 6]); // => 9

const p = new XYZ(1, 2, 3);
p.valueIn([
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  [
    [10, 11, 12],
    [13, 14, 15],
    [16, 17, 18],
  ],
]);
// => 15

const p = new XYZ(1, 2, 3);
p.bfs({
  getNeighbors: (p) => p.neighbors(),
  canVisitNeighbor: () => true,
  getVisitedKey: (p) => p.toString(),
  shouldStop: () => false,
  tap: () => {},
});
// => {
//   visitedKeys: Set { 'XYZ { 1,2,3 }0', 'XYZ { 2,2,3 }1', 'XYZ { 1,3,3 }1', 'XYZ { 0,2,3 }1', 'XYZ { 1,1,3 }1' },
//   visitedPoints: [
//     XYZ { x: 1, y: 2, z: 3 },
//     XYZ { x: 2, y: 2, z: 3 },
//     XYZ { x: 1, y: 3, z: 3 },
//     XYZ { x: 0, y: 2, z: 3 },
//     XYZ { x: 1, y: 1, z: 3 }
//   ],
//   endPoint: XYZ { x: 1, y: 1, z: 3 },
//   pathLength: 1
// }
```

## Table of contents

### Constructors

- [constructor](XYZ.md#constructor)

### Properties

- [x](XYZ.md#x)
- [y](XYZ.md#y)
- [z](XYZ.md#z)

### Accessors

- [[toStringTag]](XYZ.md#[tostringtag])

### Methods

- [add](XYZ.md#add)
- [bfs](XYZ.md#bfs)
- [copy](XYZ.md#copy)
- [distanceTo](XYZ.md#distanceto)
- [eq](XYZ.md#eq)
- [minus](XYZ.md#minus)
- [multiply](XYZ.md#multiply)
- [neighbors](XYZ.md#neighbors)
- [neighbors3d](XYZ.md#neighbors3d)
- [plus](XYZ.md#plus)
- [subtract](XYZ.md#subtract)
- [taxicabDistanceTo](XYZ.md#taxicabdistanceto)
- [times](XYZ.md#times)
- [toCoordinate](XYZ.md#tocoordinate)
- [toCoordinateObject](XYZ.md#tocoordinateobject)
- [toJSON](XYZ.md#tojson)
- [toSign](XYZ.md#tosign)
- [toString](XYZ.md#tostring)
- [valueIn](XYZ.md#valuein)
- [from](XYZ.md#from)
- [fromObject](XYZ.md#fromobject)
- [fromString](XYZ.md#fromstring)
- [normalize](XYZ.md#normalize)
- [sum](XYZ.md#sum)

## Constructors

### constructor

• **new XYZ**(`x?`, `y?`, `z?`): [`XYZ`](XYZ.md)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `x` | `number` | `0` | The x value |
| `y` | `number` | `0` | The y value |
| `z` | `number` | `0` | The z value |

#### Returns

[`XYZ`](XYZ.md)

#### Defined in

[util/xyz.ts:144](https://github.com/mhodge11/underscorets/blob/471b259/src/util/xyz.ts#L144)

## Properties

### x

• **x**: `number`

#### Defined in

[util/xyz.ts:130](https://github.com/mhodge11/underscorets/blob/471b259/src/util/xyz.ts#L130)

___

### y

• **y**: `number`

#### Defined in

[util/xyz.ts:131](https://github.com/mhodge11/underscorets/blob/471b259/src/util/xyz.ts#L131)

___

### z

• **z**: `number`

#### Defined in

[util/xyz.ts:132](https://github.com/mhodge11/underscorets/blob/471b259/src/util/xyz.ts#L132)

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

The XYZ tag.

#### Returns

`string`

#### Defined in

[util/xyz.ts:135](https://github.com/mhodge11/underscorets/blob/471b259/src/util/xyz.ts#L135)

## Methods

### add

▸ **add**(`...cs`): [`XYZ`](XYZ.md)

Adds additional coordinates, modifying the current one, and returns the original object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...cs` | `Coordinate`[] | The coordinates to add |

#### Returns

[`XYZ`](XYZ.md)

The original object

#### Defined in

[util/xyz.ts:271](https://github.com/mhodge11/underscorets/blob/471b259/src/util/xyz.ts#L271)

___

### bfs

▸ **bfs**(`options?`): `IBfsResult`

Performs a breadth-first search starting at the point the method is called on.
Returns the set of visited points and the number if iterations it took to finish.
Unless otherwise specified, stops when it runs out of possible places to travel and avoids revisiting points that any path
has visited.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `IBfsOptions` | The options for the BFS |

#### Returns

`IBfsResult`

The BFS result

#### Defined in

[util/xyz.ts:444](https://github.com/mhodge11/underscorets/blob/471b259/src/util/xyz.ts#L444)

___

### copy

▸ **copy**(): [`XYZ`](XYZ.md)

#### Returns

[`XYZ`](XYZ.md)

The copy of the object

#### Defined in

[util/xyz.ts:333](https://github.com/mhodge11/underscorets/blob/471b259/src/util/xyz.ts#L333)

___

### distanceTo

▸ **distanceTo**(`destination`): `number`

Returns the absolute straight-line distance from one point to another.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destination` | `Coordinate` | The destination point |

#### Returns

`number`

The distance

#### Defined in

[util/xyz.ts:392](https://github.com/mhodge11/underscorets/blob/471b259/src/util/xyz.ts#L392)

___

### eq

▸ **eq**(`c`): `boolean`

Returns whether the coordinates of the XYZ object and another are the same.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | `Coordinate` | The coordinate to compare to |

#### Returns

`boolean`

Whether the coordinates are the same

#### Defined in

[util/xyz.ts:353](https://github.com/mhodge11/underscorets/blob/471b259/src/util/xyz.ts#L353)

___

### minus

▸ **minus**(`...cs`): [`XYZ`](XYZ.md)

Subtracts additional coordinates, returning a new object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...cs` | `Coordinate`[] | The coordinates to subtract |

#### Returns

[`XYZ`](XYZ.md)

The difference of the coordinates

#### Defined in

[util/xyz.ts:305](https://github.com/mhodge11/underscorets/blob/471b259/src/util/xyz.ts#L305)

___

### multiply

▸ **multiply**(`scalar`): [`XYZ`](XYZ.md)

Multiplies all values by a given scalar. Modifies the original object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scalar` | `number` | The scalar to multiply by |

#### Returns

[`XYZ`](XYZ.md)

The original object with the values multiplied

#### Defined in

[util/xyz.ts:315](https://github.com/mhodge11/underscorets/blob/471b259/src/util/xyz.ts#L315)

___

### neighbors

▸ **neighbors**(`includeDiagonal?`): [`XYZ`](XYZ.md)[]

Returns all neighbors in the same z plane.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `includeDiagonal` | `boolean` | `false` | Whether to include diagonal neighbors |

#### Returns

[`XYZ`](XYZ.md)[]

The neighbors

#### Defined in

[util/xyz.ts:366](https://github.com/mhodge11/underscorets/blob/471b259/src/util/xyz.ts#L366)

___

### neighbors3d

▸ **neighbors3d**(`includeDiagonal?`): [`XYZ`](XYZ.md)[]

Returns all neighbors in 3 dimensions.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `includeDiagonal` | `boolean` | `false` | Whether to include diagonal neighbors |

#### Returns

[`XYZ`](XYZ.md)[]

The neighbors

#### Defined in

[util/xyz.ts:379](https://github.com/mhodge11/underscorets/blob/471b259/src/util/xyz.ts#L379)

___

### plus

▸ **plus**(`...cs`): [`XYZ`](XYZ.md)

Adds coordinates to the current one, returning a new object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...cs` | `Coordinate`[] | The coordinates to add |

#### Returns

[`XYZ`](XYZ.md)

The sum of the coordinates

#### Defined in

[util/xyz.ts:283](https://github.com/mhodge11/underscorets/blob/471b259/src/util/xyz.ts#L283)

___

### subtract

▸ **subtract**(`...cs`): [`XYZ`](XYZ.md)

Subtracts additional coordinates, modifying the current one, and returns the original object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...cs` | `Coordinate`[] | The coordinates to subtract |

#### Returns

[`XYZ`](XYZ.md)

The original object

#### Defined in

[util/xyz.ts:293](https://github.com/mhodge11/underscorets/blob/471b259/src/util/xyz.ts#L293)

___

### taxicabDistanceTo

▸ **taxicabDistanceTo**(`destination`): `number`

Returns the absolute distance from one point to another using taxicab geometry.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destination` | `Coordinate` | The destination point |

#### Returns

`number`

The distance

#### Defined in

[util/xyz.ts:406](https://github.com/mhodge11/underscorets/blob/471b259/src/util/xyz.ts#L406)

___

### times

▸ **times**(`scalar`): [`XYZ`](XYZ.md)

Multiplies all values by a given scalar, returning a new object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scalar` | `number` | The scalar to multiply by |

#### Returns

[`XYZ`](XYZ.md)

The new object with the values multiplied

#### Defined in

[util/xyz.ts:326](https://github.com/mhodge11/underscorets/blob/471b259/src/util/xyz.ts#L326)

___

### toCoordinate

▸ **toCoordinate**(): [`number`, `number`, `number`]

#### Returns

[`number`, `number`, `number`]

The XYZ as a coordinate array.

#### Defined in

[util/xyz.ts:254](https://github.com/mhodge11/underscorets/blob/471b259/src/util/xyz.ts#L254)

___

### toCoordinateObject

▸ **toCoordinateObject**(): `Object`

#### Returns

`Object`

The XYZ as a coordinate object.

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Defined in

[util/xyz.ts:261](https://github.com/mhodge11/underscorets/blob/471b259/src/util/xyz.ts#L261)

___

### toJSON

▸ **toJSON**(): [`number`, `number`, `number`]

Converts the XYZ to a string used by `JSON.stringify()`.

#### Returns

[`number`, `number`, `number`]

The XYZ as a string

#### Defined in

[util/xyz.ts:247](https://github.com/mhodge11/underscorets/blob/471b259/src/util/xyz.ts#L247)

___

### toSign

▸ **toSign**(): [`XYZ`](XYZ.md)

Returns a new XYZ object whose values are either 0, 1, or -1, representing whether the x, y, and z values are
positive, negative, or 0.

#### Returns

[`XYZ`](XYZ.md)

The new object with the values normalized

#### Defined in

[util/xyz.ts:343](https://github.com/mhodge11/underscorets/blob/471b259/src/util/xyz.ts#L343)

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

The XYZ as a string.

#### Defined in

[util/xyz.ts:231](https://github.com/mhodge11/underscorets/blob/471b259/src/util/xyz.ts#L231)

___

### valueIn

▸ **valueIn**\<`T`\>(`arr`): `T`

Given a 2D or 3D array, returns the value at [y][x][z] in that array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | `T`[][] | The array to get the value from |

#### Returns

`T`

The value

#### Defined in

[util/xyz.ts:421](https://github.com/mhodge11/underscorets/blob/471b259/src/util/xyz.ts#L421)

▸ **valueIn**\<`T`\>(`arr`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[][][] |

#### Returns

`T`

#### Defined in

[util/xyz.ts:422](https://github.com/mhodge11/underscorets/blob/471b259/src/util/xyz.ts#L422)

___

### from

▸ **from**(`x?`, `y?`, `z?`): [`XYZ`](XYZ.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `number` | `0` |
| `y` | `number` | `0` |
| `z` | `number` | `0` |

#### Returns

[`XYZ`](XYZ.md)

#### Defined in

[util/xyz.ts:175](https://github.com/mhodge11/underscorets/blob/471b259/src/util/xyz.ts#L175)

___

### fromObject

▸ **fromObject**(`obj`): [`XYZ`](XYZ.md)

Creates an XYZ object from an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `Object` | The object to create an XYZ from |
| `obj.x?` | `number` | - |
| `obj.y?` | `number` | - |
| `obj.z?` | `number` | - |

#### Returns

[`XYZ`](XYZ.md)

The XYZ object

#### Defined in

[util/xyz.ts:185](https://github.com/mhodge11/underscorets/blob/471b259/src/util/xyz.ts#L185)

___

### fromString

▸ **fromString**(`str`, `separator?`): [`XYZ`](XYZ.md)

Converts a string like '3,6,2', '[3,6,2]', '{ x: 3, y: 6, z:2 }', '3 6 2', '3;6;2', '3|6|2', '3_6_2',
or any of those options prepended with 'XYZ', and uses that to create an XYZ object.
You can also specify a custom separator.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | The string to convert |
| `separator?` | `string` | A custom separator to use when splitting the string |

#### Returns

[`XYZ`](XYZ.md)

The XYZ object

#### Defined in

[util/xyz.ts:202](https://github.com/mhodge11/underscorets/blob/471b259/src/util/xyz.ts#L202)

___

### normalize

▸ **normalize**(`c`): [`XYZ`](XYZ.md)

Takes either an XYZ or number[] and converts it to XYZ.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | `Coordinate` | The coordinate to normalize |

#### Returns

[`XYZ`](XYZ.md)

The normalized coordinate

#### Defined in

[util/xyz.ts:156](https://github.com/mhodge11/underscorets/blob/471b259/src/util/xyz.ts#L156)

___

### sum

▸ **sum**(`...cs`): [`XYZ`](XYZ.md)

Adds multiple coordinates together and returns a new object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...cs` | `Coordinate`[] | The coordinates to add |

#### Returns

[`XYZ`](XYZ.md)

The sum of the coordinates

#### Defined in

[util/xyz.ts:166](https://github.com/mhodge11/underscorets/blob/471b259/src/util/xyz.ts#L166)
