import { reUnicode } from "../config/regex.ts";

export function unicodeSize(string: string): number {
	let result: number = (reUnicode.lastIndex = 0);
	while (reUnicode.test(string)) ++result;
	return result;
}
