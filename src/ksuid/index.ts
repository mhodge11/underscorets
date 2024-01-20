import { compareKsuids as _compareKsuids } from "./compareKsuids.ts";
import { generateKsuid as _generateKsuid } from "./generateKsuid.ts";
import { generateKsuidAsync as _generateKsuidAsync } from "./generateKsuidAsync.ts";
import { isValidKsuid as _isValidKsuid } from "./isValidKsuid.ts";
import { KSUID as _KSUID } from "./ksuid.ts";

export namespace ksuid {
	export type KSUID = _KSUID;

	export const KSUID = _KSUID;

	export const compareKsuids = _compareKsuids;
	export const generateKsuid = _generateKsuid;
	export const generateKsuidAsync = _generateKsuidAsync;
	export const isValidKsuid = _isValidKsuid;
}

export {
	_KSUID as KSUID,
	_compareKsuids as compareKsuids,
	_generateKsuid as generateKsuid,
	_generateKsuidAsync as generateKsuidAsync,
	_isValidKsuid as isValidKsuid,
};
