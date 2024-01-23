import { hasUnicode } from "./hasUnicode.js";
import { reUnicode } from "./reUnicode.js";

function asciiToArray(string: string): string[] {
	if (string == null) return [];
	return string.split("");
}

function unicodeToArray(string: string): string[] {
	return string.match(reUnicode) ?? [];
}

export function stringToArray(string: string): string[] {
	const toArray = hasUnicode(string) ? unicodeToArray : asciiToArray;
	return toArray(string);
}
