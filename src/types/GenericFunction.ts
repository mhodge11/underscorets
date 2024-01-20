export type GenericFunction<F extends (...args: any) => any> = (
	...args: Parameters<F>
) => ReturnType<F>;
