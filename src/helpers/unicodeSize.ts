import { reUnicode } from "../config/regex.ts";

export const unicodeSize = (string: string): number => {
	let result: number = (reUnicode.lastIndex = 0);
	while (reUnicode.test(string)) ++result;
	return result;
};
