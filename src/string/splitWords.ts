/** Used to compose unicode character classes. */
const rsAstralRange = "\\ud800-\\udfff";
const rsComboMarksRange = "\\u0300-\\u036f";
const reComboHalfMarksRange = "\\ufe20-\\ufe2f";
const rsComboSymbolsRange = "\\u20d0-\\u20ff";
const rsComboMarksExtendedRange = "\\u1ab0-\\u1aff";
const rsComboMarksSupplementRange = "\\u1dc0-\\u1dff";
const rsComboRange =
	rsComboMarksRange +
	reComboHalfMarksRange +
	rsComboSymbolsRange +
	rsComboMarksExtendedRange +
	rsComboMarksSupplementRange;
const rsVarRange = "\\ufe0e\\ufe0f";

/** Used to compose unicode capture groups. */
const rsCombo = `[${rsComboRange}]`;
const rsFitz = "\\ud83c[\\udffb-\\udfff]";
const rsModifier = `(?:${rsCombo}|${rsFitz})`;
const rsNonAstral = `[^${rsAstralRange}]`;
const rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
const rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
const rsZWJ = "\\u200d";

const rsDingbatRange = "\\u2700-\\u27bf";
const rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff";
const rsMathOpRange = "\\xac\\xb1\\xd7\\xf7";
const rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf";
const rsPunctuationRange = "\\u2000-\\u206f";
const rsSpaceRange =
	" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000";
const rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde";
const rsBreakRange =
	rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode regexes. */
const reOptMod = `${rsModifier}?`;
const rsOptVar = `[${rsVarRange}]?`;
const rsOptJoin = `(?:${rsZWJ}(?:${[rsNonAstral, rsRegional, rsSurrPair].join(
	"|",
)})${rsOptVar + reOptMod})*`;
const rsSeq = rsOptVar + reOptMod + rsOptJoin;

/** Used to compose unicode capture groups. */
const rsApos = "['\u2019]";
const rsBreak = `[${rsBreakRange}]`;
const rsDigit = "\\d";
const rsDingbat = `[${rsDingbatRange}]`;
const rsLower = `[${rsLowerRange}]`;
const rsMisc = `[^${rsAstralRange}${
	rsBreakRange + rsDigit + rsDingbatRange + rsLowerRange + rsUpperRange
}]`;
const rsUpper = `[${rsUpperRange}]`;

/** Used to compose unicode regexes. */
const rsMiscLower = `(?:${rsLower}|${rsMisc})`;
const rsMiscUpper = `(?:${rsUpper}|${rsMisc})`;
const rsOptContrLower = `(?:${rsApos}(?:d|ll|m|re|s|t|ve))?`;
const rsOptContrUpper = `(?:${rsApos}(?:D|LL|M|RE|S|T|VE))?`;
const rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])";
const rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])";
const rsEmoji = `(?:${[rsDingbat, rsRegional, rsSurrPair].join("|")})${rsSeq}`;

const reUnicodeWords = RegExp(
	[
		`${rsUpper}?${rsLower}+${rsOptContrLower}(?=${[rsBreak, rsUpper, "$"].join(
			"|",
		)})`,
		`${rsMiscUpper}+${rsOptContrUpper}(?=${[
			rsBreak,
			rsUpper + rsMiscLower,
			"$",
		].join("|")})`,
		`${rsUpper}?${rsMiscLower}+${rsOptContrLower}`,
		`${rsUpper}+${rsOptContrUpper}`,
		rsOrdUpper,
		rsOrdLower,
		`${rsDigit}+`,
		rsEmoji,
	].join("|"),
	"g",
);

/** Used to match words composed of alphanumeric characters. */
const reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

const hasUnicodeWord = RegExp.prototype.test.bind(
	/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
);

function unicodeWords(string: string): string[] {
	return string.match(reUnicodeWords) as string[];
}

function asciiWords(string: string): string[] {
	return string.match(reAsciiWord) as string[];
}

/**
 * Split a string into words. Can deal with camelCase, PascalCase & snake_case.
 *
 * @example
 * ```ts
 * splitWords('fred, barney, & pebbles')
 * // => ['fred', 'barney', 'pebbles']
 *
 * splitWords('fred, barney, & pebbles', /[^, ]+/g)
 * // => ['fred', 'barney', '&', 'pebbles']
 * ```
 *
 * @param string The string to split into words
 * @param pattern The pattern to split by
 * @returns An array of words
 *
 * @category String
 */
export function splitWords(
	string: string,
	pattern?: string | RegExp,
): string[] {
	string ??= "";
	if (string.length === 0) return [];

	if (pattern != null) {
		const result = string.match(pattern);
		if (result != null) return result;
	}

	return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
}
