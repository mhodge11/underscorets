export const eq = (a: unknown, b: unknown): boolean =>
	a === b || (a !== a && b !== b);
