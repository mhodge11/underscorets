export const isPrototype = (value: unknown): boolean => {
	if (value == null) return false;

	const Ctor: Function = value?.constructor;
	const proto: Function =
		(typeof Ctor === "function" && Ctor.prototype) || Object.prototype;

	return value === proto;
};
