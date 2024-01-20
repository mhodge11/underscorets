import { MAX_INTEGER } from "../config/constants.ts";
import { toNumber } from "./toNumber.ts";

/**
 * Converts `value` to a finite number.
 *
 * @example
 * ```ts
 * toFinite(3.2)
 * // => 3.2
 *
 * toFinite(Number.MIN_VALUE)
 * // => 5e-324
 *
 * toFinite(Infinity)
 * // => 1.7976931348623157e+308
 *
 * toFinite('3.2')
 * // => 3.2
 * ```
 *
 * @param value The value to convert
 * @returns The converted number
 *
 * @category Util
 */
export function toFinite(value: unknown): number {
	if (!value) return value === 0 ? value : 0;

	const number = toNumber(value);

	if (number === Infinity || number === -Infinity) {
		const sign = number < 0 ? -1 : 1;
		return sign * MAX_INTEGER;
	}

	return number;
}
