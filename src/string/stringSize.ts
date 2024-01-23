import { hasUnicode } from "../helpers/hasUnicode.js";
import { reUnicode } from "../helpers/reUnicode.js";

function asciiSize(string: string): number {
	return string.length;
}

function unicodeSize(string: string): number {
	let result: number = (reUnicode.lastIndex = 0);
	while (reUnicode.test(string)) ++result;
	return result;
}

/**
 * Gets the size of `string`, supporting a string with unicode.
 *
 * @example
 * ```ts
 * size('abc')
 * // => 3
 *
 * size('😀')
 * // => 1
 * ```
 *
 * @param string The string to inspect
 * @returns The string size
 *
 * @category String
 */
export function stringSize(string: string): number {
	return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
}
