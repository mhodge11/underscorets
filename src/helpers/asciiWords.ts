import { reAsciiWord } from "../config/regex.ts";

export function asciiWords(string: string): string[] {
	return string.match(reAsciiWord) ?? [];
}
