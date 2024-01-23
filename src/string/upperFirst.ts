import { createCaseFirst } from "../helpers/createCaseFirst.ts";

/**
 * Converts the first character of `string` to upper case.
 *
 * @example
 * ```ts
 * upperFirst("fred");
 * // => "Fred"
 *
 * upperFirst("FRED");
 * // => "FRED"
 * ```
 *
 * @param string The string to convert
 * @returns The converted string
 *
 * @category String
 */
export function upperFirst(string: string): string {
	return createCaseFirst("toUpperCase")(string);
}
