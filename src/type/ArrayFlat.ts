/**
 * A type that represents a flattened array.
 *
 * @example
 * ```ts
 * let arr = ["a", ["b", ["c"]]];
 * let flat: ArrayFlat<typeof arr, 3> = ["a", "b", "c"];
 * ```
 *
 * @template A The type of the array
 *
 * @category Type
 */
export type ArrayFlat<A extends unknown[], D extends number> = {
	done: A;
	recur: A extends ReadonlyArray<infer InnerArr>
		? FlatArray<
				InnerArr,
				[
					-1,
					0,
					1,
					2,
					3,
					4,
					5,
					6,
					7,
					8,
					9,
					10,
					11,
					12,
					13,
					14,
					15,
					16,
					17,
					18,
					19,
					20,
				][D]
		  >
		: A;
}[D extends -1 ? "done" : "recur"];
