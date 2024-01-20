import { reIsBadHex, reIsBinary, reIsOctal, reTrim } from "../config/regex.ts";
import { isObject } from "../validator/isObject.ts";
import { isSymbol } from "../validator/isSymbol.ts";

/**
 * Converts `value` to a number.
 *
 * @example
 * ```ts
 * toNumber(3.2)
 * // => 3.2
 *
 * toNumber(Number.MIN_VALUE)
 * // => 5e-324
 *
 * toNumber(Infinity)
 * // => Infinity
 *
 * toNumber('3.2')
 * // => 3.2
 * ```
 *
 * @param value The value to convert
 * @returns The converted number
 *
 * @category Util
 */
export function toNumber(value: unknown): number {
	if (typeof value === "number") return value;

	if (isSymbol(value)) return Number.NaN;

	if (isObject(value)) {
		const other = typeof value.valueOf === "function" ? value.valueOf() : value;
		value = isObject(other) ? `${other}` : other;
	}

	if (typeof value !== "string") return value === 0 ? value : +(value as any);

	const string = value.replace(reTrim, "");
	const isBinary = reIsBinary.test(string);

	if (isBinary || reIsOctal.test(string))
		return Number.parseInt(string.slice(2), isBinary ? 2 : 8);

	return reIsBadHex.test(string) ? Number.NaN : +string;
}
