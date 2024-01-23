/**
 * Casts a type to an array.
 *
 * @example
 * ```ts
 * type Foo = CastArray<1>;
 * // => [1]
 *
 * type Bar = CastArray<[1, 2, 3]>;
 * // => [1, 2, 3]
 * ```
 *
 * @template T The type to cast
 *
 * @category Type
 */
export type CastArray<T> = T extends unknown[] ? T : T[];
