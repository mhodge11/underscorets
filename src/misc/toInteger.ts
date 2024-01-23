import { toFinite } from "./toFinite.js";

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @example
 * ```ts
 * toInteger(3.2)
 * // => 3
 *
 * toInteger(Number.MIN_VALUE)
 * // => 0
 *
 * toInteger(Infinity)
 * // => 1.7976931348623157e+308
 *
 * toInteger('3.2')
 * // => 3
 * ```
 *
 * @param value The value to convert
 * @returns The converted integer
 *
 * @category Misc
 */
export function toInteger(value: unknown): number {
	const number = toFinite(value);
	const remainder = number % 1;
	return remainder ? number - remainder : number;
}
