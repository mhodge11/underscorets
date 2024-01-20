/**
 * Sleeps for the given amount of time.
 *
 * @example
 * ```ts
 * await sleep(1000);
 * // => Waits for 1 second.
 * ```
 *
 * @param ms  Amount of time to sleep in milliseconds.
 * @returns A promise that resolves after the given amount of time.
 *
 * @category Promise
 */
export function sleep(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
