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

export function getTag(value: unknown): string {
	if (value == null)
		return value === undefined ? "[object Undefined]" : "[object Null]";
	return Object.prototype.toString.call(value);
}

export function hasArgsTag(value: unknown): boolean {
	return getTag(value) === argsTag;
}

export function hasArrayTag(value: unknown): boolean {
	return getTag(value) === arrayTag;
}

export function hasArrayBufferTag(value: unknown): boolean {
	return getTag(value) === arrayBufferTag;
}

export function hasBigInt64Tag(value: unknown): boolean {
	return getTag(value) === bigInt64Tag;
}

export function hasBigUint64Tag(value: unknown): boolean {
	return getTag(value) === bigUint64Tag;
}

export function hasBoolTag(value: unknown): boolean {
	return getTag(value) === boolTag;
}

export function hasDataViewTag(value: unknown): boolean {
	return getTag(value) === dataViewTag;
}

export function hasDateTag(value: unknown): boolean {
	return getTag(value) === dateTag;
}

export function hasDomExceptionTag(value: unknown): boolean {
	return getTag(value) === domExceptionTag;
}

export function hasErrorTag(value: unknown): boolean {
	return getTag(value) === errorTag;
}

export function hasFloat32Tag(value: unknown): boolean {
	return getTag(value) === float32Tag;
}

export function hasFloat64Tag(value: unknown): boolean {
	return getTag(value) === float64Tag;
}

export function hasInt16Tag(value: unknown): boolean {
	return getTag(value) === int16Tag;
}

export function hasInt32Tag(value: unknown): boolean {
	return getTag(value) === int32Tag;
}

export function hasInt8Tag(value: unknown): boolean {
	return getTag(value) === int8Tag;
}

export function hasMapTag(value: unknown): boolean {
	return getTag(value) === mapTag;
}

export function hasNumberTag(value: unknown): boolean {
	return getTag(value) === numberTag;
}

export function hasObjectTag(value: unknown): boolean {
	return getTag(value) === objectTag;
}

export function hasRegExpTag(value: unknown): boolean {
	return getTag(value) === regexpTag;
}

export function hasSetTag(value: unknown): boolean {
	return getTag(value) === setTag;
}

export function hasStringTag(value: unknown): boolean {
	return getTag(value) === stringTag;
}

export function hasSymbolTag(value: unknown): boolean {
	return getTag(value) === symbolTag;
}

export function hasTypedArrayTag(value: unknown): boolean {
	return reTypedTag.test(getTag(value));
}

export function hasUint16Tag(value: unknown): boolean {
	return getTag(value) === uint16Tag;
}

export function hasUint32Tag(value: unknown): boolean {
	return getTag(value) === uint32Tag;
}

export function hasUint8ClampedTag(value: unknown): boolean {
	return getTag(value) === uint8ClampedTag;
}

export function hasUint8Tag(value: unknown): boolean {
	return getTag(value) === uint8Tag;
}

export function hasWeakMapTag(value: unknown): boolean {
	return getTag(value) === weakMapTag;
}

export function hasWeakSetTag(value: unknown): boolean {
	return getTag(value) === weakSetTag;
}
