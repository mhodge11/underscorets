type BuildArrayMinLength<
	T,
	MinLength extends number,
	Current extends T[],
> = Current["length"] extends MinLength
	? [...Current, ...T[]]
	: BuildArrayMinLength<T, MinLength, [...Current, T]>;

export type ArrayMinLength<T, MinLength extends number> = BuildArrayMinLength<
	T,
	MinLength,
	[]
>;
