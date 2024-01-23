import { toInteger } from "./toInteger";

const MAX_ARRAY_LENGTH = 4294967295;

/**
 * Converts `value` to an integer suitable for use as the length of an
 * array-like object.
 *
 * **Note:** This method is based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @example
 * ```ts
 * toLength(3.2)
 * // => 3
 *
 * toLength(Number.MIN_VALUE)
 * // => 0
 *
 * toLength(Infinity)
 * // => 4294967295
 *
 * toLength('3.2')
 * // => 3
 * ```
 *
 * @param value The value to convert
 * @returns The converted integer
 *
 * @category Misc
 */
export function toLength(value: unknown): number {
	if (!value) return 0;

	const number = toInteger(value);

	if (number < 0) return 0;
	if (number > MAX_ARRAY_LENGTH) return MAX_ARRAY_LENGTH;
	return number;
}
