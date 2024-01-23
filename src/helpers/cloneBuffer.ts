export function cloneBuffer<T extends Buffer>(buffer: T, isDeep?: boolean): T {
	if (isDeep) return buffer.subarray() as T;

	const { length } = buffer;
	const result: Buffer = Buffer?.allocUnsafe(length) ?? Buffer?.alloc(length);

	buffer.copy(result);

	return result as T;
}
