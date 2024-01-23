import { CLONE_SYMBOLS_FLAG, clone as _clone } from "../helpers/clone.js";

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. Object inheritance is preserved. An empty object is
 * returned for uncloneable values such as error objects, functions, DOM nodes,
 * and WeakMaps.
 *
 * *Based on [lodash.clone](https://lodash.com/docs/#clone).*
 *
 * @example
 * ```ts
 * const objects = [{ 'a': 1 }, { 'b': 2 }]
 *
 * const shallow = clone(objects)
 * console.log(shallow[0] === objects[0])
 * // => true
 * ```
 *
 * @param value The value to clone
 * @returns The cloned value
 *
 * @category Misc
 */
export function clone<T>(value: T): T {
	return _clone(value, CLONE_SYMBOLS_FLAG);
}
