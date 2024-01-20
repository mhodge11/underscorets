import { validator } from "../../src/index.ts";

test("validator.isEmpty with null and undefined", () => {
	expect(validator.isEmpty(null)).toBe(true);
	expect(validator.isEmpty(undefined)).toBe(true);
});

test("validator.isEmpty with string", () => {
	expect(validator.isEmpty("")).toBe(true);
	expect(validator.isEmpty("some string")).toBe(false);
	expect(validator.isEmpty(String())).toBe(true);
});

test("validator.isEmpty false on unsupported types", () => {
	expect(validator.isEmpty(0)).toBe(false);
});

test("validator.isEmpty with array", () => {
	expect(validator.isEmpty([])).toBe(true);
	expect(validator.isEmpty([1, 2, 3])).toBe(false);
});

test("validator.isEmpty with Set", () => {
	expect(validator.isEmpty(new Set())).toBe(true);
	expect(validator.isEmpty(new Set([1, 2, 3]))).toBe(false);
});

test("validator.isEmpty with Map", () => {
	expect(validator.isEmpty(new Map())).toBe(true);
	expect(
		validator.isEmpty(
			new Map([
				["a", 1],
				["b", 2],
			]),
		),
	).toBe(false);
});

test("validator.isEmpty with object", () => {
	expect(validator.isEmpty({})).toBe(true);
	expect(validator.isEmpty({ a: 1, b: 2 })).toBe(false);
});

test("typed arrays", () => {
	expect(validator.isEmpty(new Uint8Array())).toBe(true);
	expect(validator.isEmpty(new Uint8Array([1, 2, 3]))).toBe(false);
	expect(validator.isEmpty(new BigInt64Array())).toBe(true);
	expect(validator.isEmpty(new BigInt64Array([1n, 2n, 3n]))).toBe(false);
});
