// It is best to make fewer, larger requests to the crypto module to
// avoid system call overhead. So, random numbers are generated in a
// pool. The pool is a Buffer that is larger than the initial random
// request size by this multiplier. The pool is enlarged if subsequent
// requests exceed the maximum buffer size.
const POOL_SIZE_MULTIPLIER = 128;

export let pool: Buffer;
export let poolOffset: number;

export const fillPool = (bytes: number): void => {
	if (!pool || pool.length < bytes) {
		pool = Buffer.allocUnsafe(bytes * POOL_SIZE_MULTIPLIER);
		crypto.getRandomValues(pool);
		poolOffset = 0;
	} else if (poolOffset + bytes > pool.length) {
		crypto.getRandomValues(pool);
		poolOffset = 0;
	}

	poolOffset += bytes;
};

export const random = (bytes: number): Buffer => {
	// `-=` convert `bytes` to number to prevent `valueOf` abusing
	fillPool((bytes -= 0));
	return pool.subarray(poolOffset - bytes, poolOffset);
};
