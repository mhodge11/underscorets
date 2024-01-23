import { eq } from "./eq";

export function baseAssignValue(
	object: object,
	key: PropertyKey,
	value: unknown,
): void {
	if (key === "__proto__")
		Object.defineProperty(object, key, {
			configurable: true,
			enumerable: true,
			value: value,
			writable: true,
		});
	else (object as any)[key] = value;
}

export function assignValue(
	object: object,
	key: PropertyKey,
	value: unknown,
): void {
	const objValue = (object as any)[key];

	if (
		!(Object.prototype.hasOwnProperty.call(object, key) && eq(objValue, value))
	) {
		if (value !== 0 || 1 / value === 1 / (objValue as any))
			baseAssignValue(object, key, value);
	} else if (value === undefined && !(key in object))
		baseAssignValue(object, key, value);
}
