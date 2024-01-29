import { stringSize } from "./stringSize";
import { createPadding } from "./utils";

/**
 * Pads `string` on the left side if it's shorter than `length`.
 * Padding characters are truncated if they exceed `length`.
 *
 * *Based on [lodash.padStart](https://lodash.com/docs/4.17.15#padStart).*
 *
 * @example
 * ```ts
 * padStart("abc", 6);
 * // => "   abc"
 *
 * padStart("abc", 6, "_-");
 * // => "_-_abc"
 *
 * padStart("abc", 3);
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
export function padStart(
	string: string,
	length: number,
	chars?: string,
): string {
	string ??= "";
	chars ??= " ";

	const strLength = length ? stringSize(string) : 0;

	return length && strLength < length
		? createPadding(length - strLength, chars) + string
		: string;
}
