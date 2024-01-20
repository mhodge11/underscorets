export type ArrayHead<T extends unknown[]> = T extends [infer Head, ...infer _]
	? Head
	: never;
