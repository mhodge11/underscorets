import { ceil } from "../number/ceil.ts";
import { repeat } from "../string/repeat.ts";
import { stringSize } from "../string/size.ts";
import { toString } from "../util/toString.ts";
import { castSlice } from "./castSlice.ts";
import { hasUnicode } from "./hasUnicode.ts";
import { stringToArray } from "./stringToArray.ts";

export const createPadding = (length: number, chars?: string): string => {
	chars = chars === undefined ? " " : toString(chars);

	const charsLength = chars.length;
	if (charsLength < 2) return charsLength ? repeat(chars, length) : chars;

	const result = repeat(chars, ceil(length / stringSize(chars)));

	return hasUnicode(chars)
		? castSlice(stringToArray(result), 0, length).join("")
		: result.slice(0, length);
};
