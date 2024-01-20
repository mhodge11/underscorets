import { reAsciiWord } from "../config/regex.ts";

export const asciiWords = (string: string): string[] =>
	string.match(reAsciiWord) ?? [];
