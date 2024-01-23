import { map } from "../array/map.js";

/**
 * Converts `value` to a property path array.
 *
 * Numbers are converted to `[${value}]` to index arrays,
 * characters are converted to `.${value}` to index object properties.
 *
 * @example
 * ```ts
 * toPath(['a', 'b', 'c'])
 * // => 'a.b.c'
 *
 * toPath(['a', 0, 'b', 'c'])
 * // => a[0].b.c
 * ```
 *
 * @param value The string|number array to convert
 * @returns The property path to use with `{@link at}`, `{@link get}` and `{@link set}`
 *
 * @category Misc
 */
export function toPath(value: (string | number)[]): string {
	if (!value?.length) return "";

	const path = map(value, (v) => {
		if (typeof v === "string") return `.${v}`;
		return `[${v}]`;
	}).join("");

	return path.slice(1);
}
