import { isObject } from "../validate/isObject.js";
import { isSymbol } from "../validate/isSymbol.js";

/** Used to match leading and trailing whitespace. */
const reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
const reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
const reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
const reIsOctal = /^0o[0-7]+$/i;

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
 * @category Misc
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
