import { isSymbol } from "../validate/isSymbol";

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @example
 * ```ts
 * toString(null)
 * // => ''
 *
 * toString(-0)
 * // => '-0'
 *
 * toString([1, 2, 3])
 * // => '1,2,3'
 * ```
 *
 * @param value The value to convert
 * @returns The converted string
 *
 * @category Misc
 */
export function toString(value: unknown): string {
	// Return an empty string for null and undefined values.
	if (value == null) return "";

	// Exit early for strings to avoid a performance hit in some environments.
	if (typeof value === "string") return value;

	// Recursively convert values (susceptible to call stack limits).
	if (Array.isArray(value))
		return `${value.map((other) => (other == null ? other : toString(other)))}`;

	// Convert symbol to string directly.
	if (isSymbol(value)) return value.toString();

	const string = `${value}`;
	return string === "0" && 1 / (value as any) === -Infinity ? "-0" : string;
}
