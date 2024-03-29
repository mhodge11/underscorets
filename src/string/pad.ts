import { stringSize } from "./stringSize";
import { createPadding } from "./utils";

/**
 * Pads `string` on the left and right sides if it's shorter than `length`.
 * Padding characters are truncated if they exceed `length`.
 *
 * *Based on [lodash.pad](https://lodash.com/docs/4.17.15#pad).*
 *
 * @example
 * ```ts
 * pad("abc", 8);
 * // => "  abc   "
 *
 * pad("abc", 8, "_-");
 * // => "_-abc_-_"
 *
 * pad("abc", 3);
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
export function pad(string: string, length: number, chars?: string): string {
	string ??= "";

	const stringLength = stringSize(string);
	if (!length || stringLength >= length) return string;

	chars ??= " ";
	const mid = (length - stringLength) / 2;

	return (
		createPadding(Math.floor(mid), chars) +
		string +
		createPadding(Math.ceil(mid), chars)
	);
}
