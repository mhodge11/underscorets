import { CLONE_DEEP_FLAG, CLONE_SYMBOLS_FLAG } from "../config/flags.ts";
import { clone as _clone } from "../helpers/clone.ts";

/**
 * This method is like `{@link clone}` except that it recursively clones `value`.
 * Object inheritance is preserved.
 *
 * *Based on [lodash.cloneDeep](https://lodash.com/docs/#cloneDeep).*
 *
 * @example
 * ```ts
 * const objects = [{ 'a': 1 }, { 'b': 2 }]
 *
 * const deep = cloneDeep(objects)
 * console.log(deep[0] === objects[0])
 * // => false
 * ```
 *
 * @param value The value to recursively clone
 * @returns The deep cloned value
 *
 * @category Util
 */
export function cloneDeep<T>(value: T): T {
	return _clone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
