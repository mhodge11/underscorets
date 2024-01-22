export const validPathRegex =
	/^[^.[\]]+(?:\.[^.[\]]+)*(?:\[\d+])*(?:\.[^.[\]]+(?:\[\d+])*)*$/;
export const pathSplitRegex = /\.|(?=\[)/g;
export const matchBracketsRegex = /[[\]]/g;
export const accentControlRegex = /[\u0300-\u036F]/g;
export const htmlEntityMap = new Map([
	["&amp;", "&"],
	["&lt;", "<"],
	["&gt;", ">"],
	["&quot;", '"'],
	["&#39;", "'"],
]);
export const reUnescapedHtml = /[&<>"']/g;
export const reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
export const reEscapedHtml = /&(?:amp|lt|gt|quot|#(0+)?39);/g;
export const reHasEscapedHtml = RegExp(reEscapedHtml.source);

export const reQuotes = /['\u2019]/g;

/** Used to match words composed of alphanumeric characters. */
// biome-ignore lint/suspicious/noControlCharactersInRegex: This is necessary for cross-platform support.
export const reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/** Used to compose unicode character classes. */
export const rsAstralRange = "\\ud800-\\udfff";
export const rsComboMarksRange = "\\u0300-\\u036f";
export const reComboHalfMarksRange = "\\ufe20-\\ufe2f";
export const rsComboSymbolsRange = "\\u20d0-\\u20ff";
export const rsComboMarksExtendedRange = "\\u1ab0-\\u1aff";
export const rsComboMarksSupplementRange = "\\u1dc0-\\u1dff";
export const rsComboRange =
	rsComboMarksRange +
	reComboHalfMarksRange +
	rsComboSymbolsRange +
	rsComboMarksExtendedRange +
	rsComboMarksSupplementRange;
export const rsVarRange = "\\ufe0e\\ufe0f";

/** Used to compose unicode capture groups. */
export const rsAstral = `[${rsAstralRange}]`;
export const rsCombo = `[${rsComboRange}]`;
export const rsFitz = "\\ud83c[\\udffb-\\udfff]";
export const rsModifier = `(?:${rsCombo}|${rsFitz})`;
export const rsNonAstral = `[^${rsAstralRange}]`;
export const rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
export const rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
export const rsZWJ = "\\u200d";

/** Used to compose unicode regexes. */
export const reOptMod = `${rsModifier}?`;
export const rsOptVar = `[${rsVarRange}]?`;
export const rsOptJoin = `(?:${rsZWJ}(?:${[
	rsNonAstral,
	rsRegional,
	rsSurrPair,
].join("|")})${rsOptVar + reOptMod})*`;
export const rsSeq = rsOptVar + reOptMod + rsOptJoin;
export const rsNonAstralCombo = `${rsNonAstral}${rsCombo}?`;
export const rsSymbol = `(?:${[
	rsNonAstralCombo,
	rsCombo,
	rsRegional,
	rsSurrPair,
	rsAstral,
].join("|")})`;

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
export const reUnicode = RegExp(
	`${rsFitz}(?=${rsFitz})|${rsSymbol + rsSeq}`,
	"g",
);

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
export const reHasUnicode = RegExp(
	`[${rsZWJ + rsAstralRange + rsComboRange + rsVarRange}]`,
);

export const rsDingbatRange = "\\u2700-\\u27bf";
export const rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff";
export const rsMathOpRange = "\\xac\\xb1\\xd7\\xf7";
export const rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf";
export const rsPunctuationRange = "\\u2000-\\u206f";
export const rsSpaceRange =
	" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000";
export const rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde";
export const rsBreakRange =
	rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
export const rsApos = "['\u2019]";
export const rsBreak = `[${rsBreakRange}]`;
export const rsDigit = "\\d";
export const rsDingbat = `[${rsDingbatRange}]`;
export const rsLower = `[${rsLowerRange}]`;
export const rsMisc = `[^${rsAstralRange}${
	rsBreakRange + rsDigit + rsDingbatRange + rsLowerRange + rsUpperRange
}]`;
export const rsUpper = `[${rsUpperRange}]`;

/** Used to compose unicode regexes. */
export const rsMiscLower = `(?:${rsLower}|${rsMisc})`;
export const rsMiscUpper = `(?:${rsUpper}|${rsMisc})`;
export const rsOptContrLower = `(?:${rsApos}(?:d|ll|m|re|s|t|ve))?`;
export const rsOptContrUpper = `(?:${rsApos}(?:D|LL|M|RE|S|T|VE))?`;
export const rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])";
export const rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])";
export const rsEmoji = `(?:${[rsDingbat, rsRegional, rsSurrPair].join(
	"|",
)})${rsSeq}`;

export const reUnicodeWords = RegExp(
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

export const reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
export const reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
export const reHasRegExpChar = RegExp(reRegExpChar.source);

/** Used to match tag to a Typed Array. */
export const reTypedTag =
	/^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)Array\]$/;

/** Used to match leading and trailing whitespace. */
export const reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
export const reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
export const reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
export const reIsOctal = /^0o[0-7]+$/i;
