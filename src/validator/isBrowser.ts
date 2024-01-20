/**
 * Checks if the current environment is a browser.
 *
 * @returns `true` if the current environment is a browser, else `false`
 *
 * @category Validator
 */
export function isBrowser(
	value: typeof globalThis = globalThis,
): value is typeof globalThis & { window: Window } {
	return typeof value.window !== "undefined";
}
