export function eq(a: unknown, b: unknown): boolean {
	return a === b || (a !== a && b !== b);
}
