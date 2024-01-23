import { castSlice } from "./castSlice.js";
import { hasUnicode } from "./hasUnicode.js";
import { stringToArray } from "./stringToArray.js";

export function createCaseFirst(
	methodName: "toUpperCase" | "toLowerCase",
): (string: string) => string {
	return (string: string): string => {
		if (!string) return "";

		const strSymbols = hasUnicode(string) ? stringToArray(string) : undefined;
		const chr = strSymbols ? (strSymbols[0] as string) : (string[0] as string);
		const trailing = strSymbols
			? castSlice(strSymbols, 1).join("")
			: string.slice(1);

		return chr[methodName]() + trailing;
	};
}
