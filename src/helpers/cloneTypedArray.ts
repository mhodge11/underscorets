import type { TypedArray } from "../type/TypedArray.ts";

import { assertUnreachable } from "./assertUnreachable.ts";
import { cloneArrayBuffer } from "./cloneArrayBuffer.ts";

export function cloneTypedArray<T extends TypedArray>(
	typedArray: T,
	isDeep?: boolean,
): T {
	const buffer = isDeep
		? cloneArrayBuffer(typedArray.buffer)
		: typedArray.buffer;

	if (typedArray instanceof Int8Array)
		return new Int8Array(buffer, typedArray.byteOffset, typedArray.length) as T;

	if (typedArray instanceof Uint8Array)
		return new Uint8Array(
			buffer,
			typedArray.byteOffset,
			typedArray.length,
		) as T;

	if (typedArray instanceof Uint8ClampedArray)
		return new Uint8ClampedArray(
			buffer,
			typedArray.byteOffset,
			typedArray.length,
		) as T;

	if (typedArray instanceof Int16Array)
		return new Int16Array(
			buffer,
			typedArray.byteOffset,
			typedArray.length,
		) as T;

	if (typedArray instanceof Uint16Array)
		return new Uint16Array(
			buffer,
			typedArray.byteOffset,
			typedArray.length,
		) as T;

	if (typedArray instanceof Int32Array)
		return new Int32Array(
			buffer,
			typedArray.byteOffset,
			typedArray.length,
		) as T;

	if (typedArray instanceof Uint32Array)
		return new Uint32Array(
			buffer,
			typedArray.byteOffset,
			typedArray.length,
		) as T;

	if (typedArray instanceof Float32Array)
		return new Float32Array(
			buffer,
			typedArray.byteOffset,
			typedArray.length,
		) as T;

	if (typedArray instanceof Float64Array)
		return new Float64Array(
			buffer,
			typedArray.byteOffset,
			typedArray.length,
		) as T;

	if (typedArray instanceof BigInt64Array)
		return new BigInt64Array(
			buffer,
			typedArray.byteOffset,
			typedArray.length,
		) as T;

	assertUnreachable("TypedArray is invalid");
}
