import { reHasUnicode } from "../config/regex.ts";

export function hasUnicode(string: string): boolean {
	return reHasUnicode.test(string);
}
