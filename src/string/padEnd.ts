import { stringSize } from "./stringSize";
import { createPadding } from "./utils.ts";

/**
 * Pads `string` on the right side if it's shorter than `length`.
 * Padding characters are truncated if they exceed `length`.
 *
 * *Based on [lodash.padEnd](https://lodash.com/docs/4.17.15#padEnd).*
 *
 * @example
 * ```ts
 * padEnd("abc", 6);
 * // => "abc   "
 *
 * padEnd("abc", 6, "_-");
 * // => "abc_-_"
 *
 * padEnd("abc", 3);
 * // => "abc"
 * ```
 *
 * @param string The string to pad
 * @param length The padding length
 * @param chars The string used as padding
 * @returns The padded string
 *
 * @category String
 */
export function padEnd(string: string, length: number, chars?: string): string {
	string ??= "";
	chars ??= " ";

	const strLength = length ? stringSize(string) : 0;

	return length && strLength
		? string + createPadding(length - strLength, chars)
		: string;
}
