import { MAX_SAFE_INTEGER } from "../config/constants.ts";

/**
 * Repeats the given string `n` times.
 *
 * @example
 * ```ts
 * repeat('*', 3)
 * // => '***'
 * ```
 *
 * @param string The string to repeat
 * @param n The number of times to repeat the string
 * @returns The repeated string
 *
 * @category String
 */
export function repeat(string: string, n?: number): string {
	n ??= 1;

	let result: string = "";
	if (!string || n < 1 || n > MAX_SAFE_INTEGER) return result;

	// Leverage the exponentiation by squaring algorithm for a faster repeat.
	// See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
	do {
		if (n % 2) result += string;
		n = Math.floor(n / 2);
		if (n) string += string;
	} while (n);

	return result;
}
