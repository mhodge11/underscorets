import type { GenericFunction } from "../type/GenericFunction";

const defaultResolver = (...args: unknown[]) => JSON.stringify(args);

/**
 * Creates a function that memoizes the result of a given function.
 *
 * The cache key is determined by the `resolver` or by the arguments from the function call.
 *
 * **Options:**
 * - `resolver` A function that determines the cache key based on the arguments provided.
 * - `ttl` the time to live for the cache entries in milliseconds.
 *
 * **Properties:**
 * - `cache` The cache is an instance of `Map` and can be used to clear or inspect the cache.
 * It can be replaced by a custom cache that matches the `Map` interface.
 *
 * This function can be used as a decorator with {@link decMemoize}.
 *
 * *Based on [moderndash.memoize](https://moderndash.io/docs/memoize).*
 *
 * @example
 * ```ts
 * function fibonacci(n: number) {
 *   if (n <= 1) return n;
 *   return fibonacci(n - 1) + fibonacci(n - 2);
 * }
 *
 * const memoizedFib = memoize(fibonacci, { ttl: 1000 })
 *
 * memoizedFib(40) // => 102334155
 * memoizedFib(40) // => 102334155 (cache hit)
 * setTimeout(() => memoizedFib(40), 1000) // => 102334155 (cache miss)
 *
 * // Cached values are exposed as the `cache` property.
 * memoizedFib.cache.get("40") // => [value, timestamp]
 * memoizedFib.cache.set("40", [1234, Date.now()])
 * memoizedFib.cache.clear()
 *
 * // This is the default way to create cache keys.
 * const defaultResolver = (...args: unknown[]) => JSON.stringify(args)
 * ```
 *
 * @param func The function to have its output memoized
 * @param options The options object with optional `resolver` and `ttl` parameters
 * @param options.resolver - A function that determines the cache key for storing the result based on the arguments provided
 * @param options.ttl - The time to live for the cache in milliseconds
 * @template T The type of the function to memoize.
 * @template Cache The type of the cache storage
 * @returns Returns the new memoized function
 *
 * @category Function
 */
export function memoize<
	T extends GenericFunction<T>,
	Cache extends Map<string, [ReturnType<T>, number]>,
>(
	func: T,
	options: {
		resolver?: (...args: Parameters<T>) => string;
		ttl?: number;
	} = {},
): T & { cache: Cache } {
	if (typeof func !== "function") throw new TypeError("Expected a function");

	const resolver = options.resolver ?? defaultResolver;
	const ttl = options.ttl;
	const cache = new Map() as Cache;

	const memoizedFunc = function (
		this: unknown,
		...args: Parameters<T>
	): ReturnType<T> {
		const key = resolver(...args);
		if (cache.has(key)) {
			const [cacheResult, cacheTime] = cache.get(key) as [
				ReturnType<T>,
				number,
			];
			if (ttl === undefined || Date.now() - cacheTime < ttl) return cacheResult;
		}

		const result = func.apply(this, args);
		cache.set(key, [result, Date.now()]);
		return result;
	};

	memoizedFunc.cache = cache;
	return memoizedFunc as T & { cache: Cache };
}
