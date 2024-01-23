import { cloneArrayBuffer } from "./cloneArrayBuffer.js";

export function cloneDataView<T extends DataView>(
	dataView: T,
	isDeep?: boolean,
): T {
	const buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	return new DataView(buffer, dataView.byteOffset, dataView.byteLength) as T;
}
