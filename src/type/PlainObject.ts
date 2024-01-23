/**
 * The type of a plain object.
 *
 * This is a more strict type than the `object` type which also includes functions and arrays.
 *
 * You can validate if a value is a plain object with {@link isPlainObject}.
 *
 * @example
 * ```ts
 * let obj: PlainObject = { a: 1, b: 2 };
 *
 * obj = [1, 2, 3];
 * // => Type 'number[]' is not assignable to type 'PlainObject'.
 * ```
 *
 * @category Type
 */
export type PlainObject = Record<PropertyKey, unknown>;
