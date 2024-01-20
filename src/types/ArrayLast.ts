export type ArrayLast<T extends unknown[]> = T extends [...any, infer Last]
	? Last
	: never;
