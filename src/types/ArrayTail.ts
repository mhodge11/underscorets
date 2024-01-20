export type ArrayTail<T extends unknown[]> = T extends [infer _, ...infer Tail]
	? Tail
	: never;
