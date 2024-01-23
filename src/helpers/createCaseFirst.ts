import { castSlice } from "./castSlice";
import { hasUnicode } from "./hasUnicode";
import { stringToArray } from "./stringToArray";

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
