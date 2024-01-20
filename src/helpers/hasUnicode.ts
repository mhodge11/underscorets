import { reHasUnicode } from "../config/regex.ts";

export const hasUnicode = (string: string): boolean =>
	reHasUnicode.test(string);
