/**
 * Casts a type to an array.
 *
 * @example
 * ```ts
 * type Foo = CastedArray<1>;
 * // => [1]
 *
 * type Bar = CastedArray<[1, 2, 3]>;
 * // => [1, 2, 3]
 * ```
 *
 * @template T The type to cast
 *
 * @category Type
 */
export type CastedArray<T> = T extends unknown[] ? T : T[];
