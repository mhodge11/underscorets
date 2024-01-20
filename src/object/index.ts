import { at as _at } from "./at.ts";
import { filterObject } from "./filter.ts";
import { findKey as _findKey } from "./findKey.ts";
import { findLastKey as _findLastKey } from "./findLastKey.ts";
import { flatKeys as _flatKeys } from "./flatKeys.ts";
import { get as _get } from "./get.ts";
import { keys as _keys } from "./keys.ts";
import { merge as _merge } from "./merge.ts";
import { omit as _omit } from "./omit.ts";
import { pick as _pick } from "./pick.ts";
import { set as _set } from "./set.ts";
import { values as _values } from "./values.ts";

export namespace obj {
	export const at = _at;
	export const filter = filterObject;
	export const findKey = _findKey;
	export const findLastKey = _findLastKey;
	export const flatKeys = _flatKeys;
	export const get = _get;
	export const keys = _keys;
	export const merge = _merge;
	export const omit = _omit;
	export const pick = _pick;
	export const set = _set;
	export const values = _values;
}

export {
	_at as at,
	filterObject,
	_findKey as findKey,
	_findLastKey as findLastKey,
	_flatKeys as flatKeys,
	_get as get,
	_keys as keys,
	_merge as merge,
	_omit as omit,
	_pick as pick,
	_set as set,
	_values as values,
};
