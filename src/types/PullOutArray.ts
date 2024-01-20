export type PullOutArray<A extends unknown[][] | ArrayLike<unknown>[]> =
	A extends unknown[][]
		? A[number]
		: A extends ArrayLike<infer U>[]
		  ? U[][][number]
		  : unknown[];
