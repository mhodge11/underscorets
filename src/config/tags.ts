/** Tag for Arguments when calling `Object.prototype.toString.call(object)` */
export const argsTag = "[object Arguments]";

/** Tag for ArrayBuffer when calling `Object.prototype.toString.call(object)` */
export const arrayBufferTag = "[object ArrayBuffer]";

/** Tag for Array when calling `Object.prototype.toString.call(object)` */
export const arrayTag = "[object Array]";

/** Tag for BigInt64Array when calling `Object.prototype.toString.call(object)` */
export const bigInt64Tag = "[object BigInt64Array]";

/** Tag for BigUint64Array when calling `Object.prototype.toString.call(object)` */
export const bigUint64Tag = "[object BigUint64Array]";

/** Tag for Boolean when calling `Object.prototype.toString.call(object)` */
export const boolTag = "[object Boolean]";

/** Tag for DataView when calling `Object.prototype.toString.call(object)` */
export const dataViewTag = "[object DataView]";

/** Tag for Date when calling `Object.prototype.toString.call(object)` */
export const dateTag = "[object Date]";

/** Tag for DOMException when calling `Object.prototype.toString.call(object)` */
export const domExceptionTag = "[object DOMException]";

/** Tag for Error when calling `Object.prototype.toString.call(object)` */
export const errorTag = "[object Error]";

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

/** Tag for WeakMap when calling `Object.prototype.toString.call(object)` */
export const weakMapTag = "[object WeakMap]";

/** Tag for WeakSet when calling `Object.prototype.toString.call(object)` */
export const weakSetTag = "[object WeakSet]";

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
