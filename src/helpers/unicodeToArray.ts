import { reUnicode } from "../config/regex.ts";

export function unicodeToArray(string: string): string[] {
	return string.match(reUnicode) ?? [];
}
