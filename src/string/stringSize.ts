import { asciiSize } from "../helpers/asciiSize.ts";
import { hasUnicode } from "../helpers/hasUnicode.ts";
import { unicodeSize } from "../helpers/unicodeSize.ts";

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
