/**
 * Returns a new promise that will reject with an error after a specified timeout.
 *
 * @example
 * ```ts
 * try {
 *   await timeout(fetch('https://example.com'), 1000);
 * } catch (error) {
 *   console.log(error.message);
 *   // => 'Promise timed out after 1000ms'
 * }
 * ```
 *
 * @param promise The promise to wrap
 * @param timeout The timeout in milliseconds
 * @template T The type of the resolved value
 * @throws The error of the promise if it rejects before the timeout
 * @throws An error if the promise does not resolve or reject before timing out
 * @returns A new promise that will reject with an error after the specified timeout
 *
 * @category Promise
 */
export function timeout<T>(promise: Promise<T>, timeout: number): Promise<T> {
	return new Promise((resolve, reject) => {
		const timeoutId = setTimeout(() => {
			reject(new Error(`Promise timed out after ${timeout}ms`));
		}, timeout);

		promise.then(
			(result) => {
				clearTimeout(timeoutId);
				resolve(result);
			},
			(error) => {
				clearTimeout(timeoutId);
				reject(error);
			},
		);
	});
}
