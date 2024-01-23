import { assignValue, baseAssignValue } from "./assignValue.js";

export function copyObject<T extends object, K extends keyof T>(
	source: T,
	props: K[],
	object?: Partial<T>,
	customizer?: <R = unknown>(
		objectValue: T[K] | undefined,
		sourceValue: T[K],
		key: K,
		object: Partial<T>,
		source: T,
	) => R,
): T | Partial<T> {
	const isNew = !object;
	object = (object || {}) as Partial<T>;

	for (const key of props) {
		let newValue = customizer
			? customizer((object as any)[key], source[key], key, object, source)
			: undefined;

		if (newValue === undefined) newValue = source[key];
		if (isNew) baseAssignValue(object, key, newValue);
		else assignValue(object, key, newValue);
	}

	return object as T | Partial<T>;
}
