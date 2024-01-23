import { rsAstralRange, rsComboRange, rsVarRange, rsZWJ } from "./reUnicode.ts";

const reHasUnicode = RegExp(
	`[${rsZWJ + rsAstralRange + rsComboRange + rsVarRange}]`,
);

export function hasUnicode(string: string): boolean {
	return reHasUnicode.test(string);
}
