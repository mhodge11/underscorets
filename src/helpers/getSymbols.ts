export const getSymbols = <T extends object>(
	object: T,
): Extract<keyof T, symbol>[] => {
	if (object == null) return [];

	object = Object(object);

	return Object.getOwnPropertySymbols(object).filter((symbol) =>
		Object.prototype.propertyIsEnumerable.call(object, symbol),
	) as Extract<keyof T, symbol>[];
};
