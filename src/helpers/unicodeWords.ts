import { reUnicodeWords } from "../config/regex.ts";

export const unicodeWords = (string: string): string[] =>
	string.match(reUnicodeWords) ?? [];
