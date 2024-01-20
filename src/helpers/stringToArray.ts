import { asciiToArray } from "./asciiToArray.ts";
import { hasUnicode } from "./hasUnicode.ts";
import { unicodeToArray } from "./unicodeToArray.ts";

export const stringToArray = (string: string): string[] => {
	const toArray = hasUnicode(string) ? unicodeToArray : asciiToArray;
	return toArray(string);
};
