export type CompareFunction<T extends unknown[][] | ArrayLike<unknown>[]> = (
	a: T[number][number],
	b: T[number][number],
) => boolean;
