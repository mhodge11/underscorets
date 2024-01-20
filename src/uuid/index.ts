import { generateCustomUuid as _generateCustomUuid } from "./generateCustomUuid.ts";
import { generateCustomUuidAsync as _generateCustomUuidAsync } from "./generateCustomUuidAsync.ts";
import { generateUuid as _generateUuid } from "./generateUuid.ts";
import { generateUuidAsync as _generateUuidAsync } from "./generateUuidAsync.ts";
import { uuidUrlAlphabet as _uuidUrlAlphabet } from "./uuidUrlAlphabet.ts";

export namespace uuid {
	export const generateCustomUuid = _generateCustomUuid;
	export const generateCustomUuidAsync = _generateCustomUuidAsync;
	export const generateUuid = _generateUuid;
	export const generateUuidAsync = _generateUuidAsync;
	export const uuidUrlAlphabet = _uuidUrlAlphabet;
}

export {
	_generateCustomUuid as generateCustomUuid,
	_generateCustomUuidAsync as generateCustomUuidAsync,
	_generateUuid as generateUuid,
	_generateUuidAsync as generateUuidAsync,
	_uuidUrlAlphabet as uuidUrlAlphabet,
};
