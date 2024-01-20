import { MAX_SAFE_INTEGER } from "../config/constants.ts";
import { toInteger } from "./toInteger.ts";

/**
 * Converts `value` to a safe integer. A safe integer can be compared and
 * represented correctly.
 *
 * @example
 * ```ts
 * toSafeInteger(3.2)
 * // => 3
 *
 * toSafeInteger(Number.MIN_VALUE)
 * // => 0
 *
 * toSafeInteger(Infinity)
 * // => 9007199254740991
 *
 * toSafeInteger('3.2')
 * // => 3
 * ```
 *
 * @param value The value to convert
 * @returns The converted safe integer
 *
 * @category Util
 */
export function toSafeInteger(value: unknown): number {
	if (!value) return 0;

	const number = toInteger(value);

	if (number < -MAX_SAFE_INTEGER) return -MAX_SAFE_INTEGER;
	if (number > MAX_SAFE_INTEGER) return MAX_SAFE_INTEGER;
	return number;
}
