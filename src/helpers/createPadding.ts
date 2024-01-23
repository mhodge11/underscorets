import { toString } from "../misc/toString.js";
import { ceil } from "../number/ceil.js";
import { repeat } from "../string/repeat.js";
import { stringSize } from "../string/stringSize.js";
import { castSlice } from "./castSlice.js";
import { hasUnicode } from "./hasUnicode.js";
import { stringToArray } from "./stringToArray.js";

export function createPadding(length: number, chars?: string): string {
	chars = chars === undefined ? " " : toString(chars);

	const charsLength = chars.length;
	if (charsLength < 2) return charsLength ? repeat(chars, length) : chars;

	const result = repeat(chars, ceil(length / stringSize(chars)));

	return hasUnicode(chars)
		? castSlice(stringToArray(result), 0, length).join("")
		: result.slice(0, length);
}
