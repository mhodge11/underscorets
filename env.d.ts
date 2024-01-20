interface Types {
	isAsyncFunction(
		value: unknown,
	): value is (...args: unknown[]) => Promise<unknown>;
	isGeneratorFunction(value: unknown): value is GeneratorFunction;
	isAnyArrayBuffer(value: unknown): value is ArrayBuffer | SharedArrayBuffer;
	isArrayBuffer(value: unknown): value is ArrayBuffer;
	isArgumentsObject(value: unknown): value is ArrayLike<unknown>;
	isBigInt64Array(value: unknown): value is BigInt64Array;
	isBigUint64Array(value: unknown): value is BigUint64Array;
	isBoxedPrimitive(
		value: unknown,
	): value is BigInt | Boolean | Number | String | Symbol;
	isDataView(value: unknown): value is DataView;
	isExternal(value: unknown): value is Object;
	isFloat32Array(value: unknown): value is Float32Array;
	isFloat64Array(value: unknown): value is Float64Array;
	isInt8Array(value: unknown): value is Int8Array;
	isInt16Array(value: unknown): value is Int16Array;
	isInt32Array(value: unknown): value is Int32Array;
	isMap(value: unknown): value is Map<unknown, unknown>;
	isMapIterator: (value: unknown) => value is IterableIterator<unknown>;
	isModuleNamespaceObject: (
		value: unknown,
	) => value is { [Symbol.toStringTag]: "Module" };
	isNativeError: (value: unknown) => value is Error;
	isPromise: (value: unknown) => value is Promise<unknown>;
	isSet: (value: unknown) => value is Set<unknown>;
	isSetIterator: (value: unknown) => value is IterableIterator<unknown>;
	isUint8Array(value: unknown): value is Uint8Array;
	isUint8ClampedArray(value: unknown): value is Uint8ClampedArray;
	isUint16Array(value: unknown): value is Uint16Array;
	isUint32Array(value: unknown): value is Uint32Array;
	isWeakMap: (value: unknown) => value is WeakMap<object, unknown>;
	isWeakSet: (value: unknown) => value is WeakSet<object>;
	isRegExp: (value: unknown) => value is RegExp;
	isDate: (value: unknown) => value is Date;
	isTypedArray: (
		value: unknown,
	) => value is
		| Uint8Array
		| Uint8ClampedArray
		| Uint16Array
		| Uint32Array
		| Int8Array
		| Int16Array
		| Int32Array
		| BigUint64Array
		| BigInt64Array
		| Float32Array
		| Float64Array;
	isStringObject: (value: unknown) => value is String;
	isNumberObject: (value: unknown) => value is Number;
	isBooleanObject: (value: unknown) => value is Boolean;
	isBigIntObject: (value: unknown) => value is BigInt;
}

declare const types: Types | null = null;
