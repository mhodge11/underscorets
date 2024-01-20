import { createCaseFirst } from "../helpers/createCaseFirst.ts";

/**
 * Converts the first character of `string` to lower case.
 *
 * @example
 * ```ts
 * lowerFirst("Fred");
 * // => "fred"
 *
 * lowerFirst("FRED");
 * // => "fRED"
 * ```
 *
 * @param string - The string to convert
 * @returns The converted string
 *
 * @category String
 */
export const lowerFirst = createCaseFirst("toLowerCase");
