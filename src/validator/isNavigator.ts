/**
 * Checks if the current environment is a navigator.
 *
 * @returns `true` if the current environment is a navigator, else `false`
 *
 * @category Validator
 */
export function isNavigator(
	value: typeof globalThis = globalThis,
): value is typeof globalThis & { navigator: Navigator } {
	return typeof value.navigator !== "undefined";
}
