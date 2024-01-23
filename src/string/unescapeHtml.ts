const htmlEntityMap = new Map([
	["&amp;", "&"],
	["&lt;", "<"],
	["&gt;", ">"],
	["&quot;", '"'],
	["&#39;", "'"],
]);

const reEscapedHtml = /&(?:amp|lt|gt|quot|#(0+)?39);/g;

const reHasEscapedHtml = RegExp(reEscapedHtml.source);

/**
 * Converts the HTML entities `&amp;`, `&lt;`, `&gt;`, `&quot;` and `&#39;`
 * in a string to their corresponding characters.
 *
 * *Based on [moderndash.unescapeHtml](https://moderndash.io/docs/unescapeHtml).*
 *
 * @example
 * ```ts
 * unescapeHtml('fred, barney, &amp; pebbles')
 * // => 'fred, barney, & pebbles'
 * ```
 *
 * @param string The string to unescape
 * @returns The unescaped string
 *
 * @category String
 */
export function unescapeHtml(string: string): string {
	string ??= "";
	if (string.length === 0 || !reHasEscapedHtml.test(string)) return string;

	return string.replace(
		reEscapedHtml,
		(entity: string) => htmlEntityMap.get(entity) as string,
	);
}
