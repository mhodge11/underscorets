import { toString } from "../misc/toString";
import { ceil } from "../number/ceil";
import { repeat } from "../string/repeat";
import { stringSize } from "../string/stringSize";
import { castSlice } from "./castSlice";
import { hasUnicode } from "./hasUnicode";
import { stringToArray } from "./stringToArray";

export function createPadding(length: number, chars?: string): string {
	chars = chars === undefined ? " " : toString(chars);

	const charsLength = chars.length;
	if (charsLength < 2) return charsLength ? repeat(chars, length) : chars;

	const result = repeat(chars, ceil(length / stringSize(chars)));

	return hasUnicode(chars)
		? castSlice(stringToArray(result), 0, length).join("")
		: result.slice(0, length);
}
