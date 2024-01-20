export const cloneArrayBuffer = <T extends ArrayBuffer>(arrayBuffer: T): T => {
	const result: ArrayBuffer = new ArrayBuffer(arrayBuffer.byteLength);
	new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	return result as T;
};
