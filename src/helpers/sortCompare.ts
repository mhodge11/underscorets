export function sortCompare<T>(
	...criteria: {
		order?: "asc" | "desc";
		by?: (item: T) => number | bigint | Date | string;
	}[]
): (a: T, b: T) => number {
	return (a: T, b: T) => {
		if (criteria.length === 0) {
			if (a < b) return -1;
			if (a > b) return 1;
			return 0;
		}
		for (const { order = "asc", by = (item: T) => item } of criteria) {
			const aValue = by(a);
			const bValue = by(b);
			if (aValue !== bValue) {
				const compare = aValue < bValue ? -1 : 1;
				return order === "asc" ? compare : -compare;
			}
		}
		return 0;
	};
}
