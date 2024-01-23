import { reUnicodeWords } from "../config/regex.ts";

export function unicodeWords(string: string): string[] {
	return string.match(reUnicodeWords) ?? [];
}
