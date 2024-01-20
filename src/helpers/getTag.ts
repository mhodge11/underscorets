import { reTypedTag } from "../config/regex.ts";
import {
	argsTag,
	arrayBufferTag,
	arrayTag,
	bigInt64Tag,
	bigUint64Tag,
	boolTag,
	dataViewTag,
	dateTag,
	domExceptionTag,
	errorTag,
	float32Tag,
	float64Tag,
	int8Tag,
	int16Tag,
	int32Tag,
	mapTag,
	numberTag,
	objectTag,
	regexpTag,
	setTag,
	stringTag,
	symbolTag,
	uint8ClampedTag,
	uint8Tag,
	uint16Tag,
	uint32Tag,
	weakMapTag,
	weakSetTag,
} from "../config/tags.ts";

export const getTag = (value: unknown): string => {
	if (value == null)
		return value === undefined ? "[object Undefined]" : "[object Null]";
	return Object.prototype.toString.call(value);
};

export const hasArgsTag = (value: unknown): boolean =>
	getTag(value) === argsTag;

export const hasArrayTag = (value: unknown): boolean =>
	getTag(value) === arrayTag;

export const hasArrayBufferTag = (value: unknown): boolean =>
	getTag(value) === arrayBufferTag;

export const hasBigInt64Tag = (value: unknown): boolean =>
	getTag(value) === bigInt64Tag;

export const hasBigUint64Tag = (value: unknown): boolean =>
	getTag(value) === bigUint64Tag;

export const hasBoolTag = (value: unknown): boolean =>
	getTag(value) === boolTag;

export const hasDataViewTag = (value: unknown): boolean =>
	getTag(value) === dataViewTag;

export const hasDateTag = (value: unknown): boolean =>
	getTag(value) === dateTag;

export const hasDomExceptionTag = (value: unknown): boolean =>
	getTag(value) === domExceptionTag;

export const hasErrorTag = (value: unknown): boolean =>
	getTag(value) === errorTag;

export const hasFloat32Tag = (value: unknown): boolean =>
	getTag(value) === float32Tag;

export const hasFloat64Tag = (value: unknown): boolean =>
	getTag(value) === float64Tag;

export const hasInt16Tag = (value: unknown): boolean =>
	getTag(value) === int16Tag;

export const hasInt32Tag = (value: unknown): boolean =>
	getTag(value) === int32Tag;

export const hasInt8Tag = (value: unknown): boolean =>
	getTag(value) === int8Tag;

export const hasMapTag = (value: unknown): boolean => getTag(value) === mapTag;

export const hasNumberTag = (value: unknown): boolean =>
	getTag(value) === numberTag;

export const hasObjectTag = (value: unknown): boolean =>
	getTag(value) === objectTag;

export const hasRegExpTag = (value: unknown): boolean =>
	getTag(value) === regexpTag;

export const hasSetTag = (value: unknown): boolean => getTag(value) === setTag;

export const hasStringTag = (value: unknown): boolean =>
	getTag(value) === stringTag;

export const hasSymbolTag = (value: unknown): boolean =>
	getTag(value) === symbolTag;

export const hasTypedArrayTag = (value: unknown): boolean =>
	reTypedTag.test(getTag(value));

export const hasUint16Tag = (value: unknown): boolean =>
	getTag(value) === uint16Tag;

export const hasUint32Tag = (value: unknown): boolean =>
	getTag(value) === uint32Tag;

export const hasUint8ClampedTag = (value: unknown): boolean =>
	getTag(value) === uint8ClampedTag;

export const hasUint8Tag = (value: unknown): boolean =>
	getTag(value) === uint8Tag;

export const hasWeakMapTag = (value: unknown): boolean =>
	getTag(value) === weakMapTag;

export const hasWeakSetTag = (value: unknown): boolean =>
	getTag(value) === weakSetTag;
