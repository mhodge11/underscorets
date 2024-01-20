import { reUnicode } from "../config/regex.ts";

export const unicodeToArray = (string: string): string[] =>
	string.match(reUnicode) ?? [];
