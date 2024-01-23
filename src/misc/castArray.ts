import type { CastArray } from "../type/CastArray.ts";

/**
 * Casts `value` as an array if it's not one.
 *
 * @example
 * ```ts
 * castArray(1)
 * // => [1]
 *
 * castArray({ 'a': 1 })
 * // => [{ 'a': 1 }]
 *
 * castArray('abc')
 * // => ['abc']
 *
 * castArray(null)
 * // => [null]
 *
 * castArray(undefined)
 * // => [undefined]
 *
 * castArray()
 * // => []
 *
 * const array = [1, 2, 3]
 * console.log(castArray(array) === array)
 * // => true
 * ```
 *
 * @param value The value to cast
 * @template T The type of the value
 * @returns The casted array
 *
 * @category Misc
 */
export function castArray<T>(value: T): CastArray<T> {
	return (Array.isArray(value) ? value : [value]) as CastArray<T>;
}
