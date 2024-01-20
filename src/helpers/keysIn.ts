export const keysIn = <T extends object>(
	object: T,
): Extract<keyof T, string>[] => {
	const result: Extract<keyof T, string>[] = [];
	for (const key in object) result.push(key);
	return result;
};
