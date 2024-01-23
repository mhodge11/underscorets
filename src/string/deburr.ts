/**
 * Deburrs a string by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * *Based on [moderndash.deburr](https://moderndash.io/docs/deburr).*
 *
 * @example
 * ```ts
 * deburr('déjà vu')
 * // => 'deja vu'
 * ```
 *
 * @param string The string to deburr
 * @returns The deburred string
 *
 * @category String
 */
export function deburr(string: string): string {
	string ??= "";
	if (string.length === 0) return string;

	return string.normalize("NFD").replace(/[\u0300-\u036F]/g, "");
}
