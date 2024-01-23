/** Used to match tag to a Typed Array. */
const reTypedTag =
	/^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)Array\]$/;

/** Tag for Array when calling `Object.prototype.toString.call(object)` */
const arrayTag = "[object Array]";

/** Tag for BigInt64Array when calling `Object.prototype.toString.call(object)` */
const bigInt64Tag = "[object BigInt64Array]";

/** Tag for BigUint64Array when calling `Object.prototype.toString.call(object)` */
const bigUint64Tag = "[object BigUint64Array]";

/** Tag for DOMException when calling `Object.prototype.toString.call(object)` */
const domExceptionTag = "[object DOMException]";

/** Tag for Error when calling `Object.prototype.toString.call(object)` */
const errorTag = "[object Error]";

/** Tag for WeakMap when calling `Object.prototype.toString.call(object)` */
const weakMapTag = "[object WeakMap]";

/** Tag for WeakSet when calling `Object.prototype.toString.call(object)` */
const weakSetTag = "[object WeakSet]";

/** Tag for Arguments when calling `Object.prototype.toString.call(object)` */
export const argsTag = "[object Arguments]";

/** Tag for ArrayBuffer when calling `Object.prototype.toString.call(object)` */
export const arrayBufferTag = "[object ArrayBuffer]";

/** Tag for Boolean when calling `Object.prototype.toString.call(object)` */
export const boolTag = "[object Boolean]";

/** Tag for DataView when calling `Object.prototype.toString.call(object)` */
export const dataViewTag = "[object DataView]";

/** Tag for Date when calling `Object.prototype.toString.call(object)` */
export const dateTag = "[object Date]";

/** Tag for Float32Array when calling `Object.prototype.toString.call(object)` */
export const float32Tag = "[object Float32Array]";

/** Tag for Float64Array when calling `Object.prototype.toString.call(object)` */
export const float64Tag = "[object Float64Array]";

/** Tag for Int16Array when calling `Object.prototype.toString.call(object)` */
export const int16Tag = "[object Int16Array]";

/** Tag for Int32Array when calling `Object.prototype.toString.call(object)` */
export const int32Tag = "[object Int32Array]";

/** Tag for Int8Array when calling `Object.prototype.toString.call(object)` */
export const int8Tag = "[object Int8Array]";

/** Tag for Map when calling `Object.prototype.toString.call(object)` */
export const mapTag = "[object Map]";

/** Tag for Number when calling `Object.prototype.toString.call(object)` */
export const numberTag = "[object Number]";

/** Tag for Object when calling `Object.prototype.toString.call(object)` */
export const objectTag = "[object Object]";

/** Tag for RegExp when calling `Object.prototype.toString.call(object)` */
export const regexpTag = "[object RegExp]";

/** Tag for Set when calling `Object.prototype.toString.call(object)` */
export const setTag = "[object Set]";

/** Tag for String when calling `Object.prototype.toString.call(object)` */
export const stringTag = "[object String]";

/** Tag for Symbol when calling `Object.prototype.toString.call(object)` */
export const symbolTag = "[object Symbol]";

/** Tag for Uint16Array when calling `Object.prototype.toString.call(object)` */
export const uint16Tag = "[object Uint16Array]";

/** Tag for Uint32Array when calling `Object.prototype.toString.call(object)` */
export const uint32Tag = "[object Uint32Array]";

/** Tag for Uint8Array when calling `Object.prototype.toString.call(object)` */
export const uint8ClampedTag = "[object Uint8ClampedArray]";

/** Tag for Uint8Array when calling `Object.prototype.toString.call(object)` */
export const uint8Tag = "[object Uint8Array]";

/** The tags that can be cloned. */
export const cloneableTags = {
	[argsTag]: true,
	[arrayTag]: true,
	[arrayBufferTag]: true,
	[bigInt64Tag]: false,
	[bigUint64Tag]: false,
	[dataViewTag]: true,
	[boolTag]: true,
	[dateTag]: true,
	[domExceptionTag]: false,
	[errorTag]: false,
	[float32Tag]: true,
	[float64Tag]: true,
	[int8Tag]: true,
	[int16Tag]: true,
	[int32Tag]: true,
	[mapTag]: true,
	[numberTag]: true,
	[objectTag]: true,
	[regexpTag]: true,
	[setTag]: true,
	[stringTag]: true,
	[symbolTag]: true,
	[uint8Tag]: true,
	[uint8ClampedTag]: true,
	[uint16Tag]: true,
	[uint32Tag]: true,
	[weakMapTag]: false,
	[weakSetTag]: false,
};

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
