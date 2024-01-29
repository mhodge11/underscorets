import { hasUnicode } from "../helpers/hasUnicode";
import { reUnicode } from "../helpers/reUnicode";
import { toString } from "../misc/toString";
import { repeat } from "./repeat";
import { stringSize } from "./stringSize";

export function createCaseFirst(
	methodName: "toUpperCase" | "toLowerCase",
): (string: string) => string {
	return (string: string): string => {
		if (!string) return "";

		const strSymbols = hasUnicode(string) ? string.match(reUnicode) : undefined;
		const chr = strSymbols ? (strSymbols[0] as string) : (string[0] as string);

		let trailing: string;
		if (strSymbols) {
			if (!strSymbols?.length) trailing = "";
			else trailing = strSymbols.slice(1).join("");
		} else trailing = string.slice(1);

		return chr[methodName]() + trailing;
	};
}

export function createPadding(length: number, chars?: string): string {
	chars = chars === undefined ? " " : toString(chars);

	const charsLength = chars.length;
	if (charsLength < 2) return charsLength ? repeat(chars, length) : chars;

	const result = repeat(chars, Math.ceil(length / stringSize(chars)));

	if (!hasUnicode(chars)) return result.slice(0, length);

	const strArray = result.split("");
	if (!strArray.length) return "";

	return strArray.slice(0, length).join("");
}
