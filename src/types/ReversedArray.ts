export type ReversedArray<T extends unknown[]> = T extends [
	infer Head,
	...infer Tail,
]
	? [...ReversedArray<Tail>, Head]
	: [];
