import { array, validator } from "../../src/index.ts";

test("return an array with only array.unique values", () => {
	const input = [1, 2, 3, 3, 4, 5, 5, 6];
	const expectedOutput = [1, 2, 3, 4, 5, 6];
	expect(array.unique(input)).toEqual(expectedOutput);
});

test("handle objects and arrays correctly", () => {
	const input = [{ a: 1 }, { a: 2 }, { a: 1 }, [1, 2], [1, 2], [1, 2, 3]];
	const expectedOutput = [{ a: 1 }, { a: 2 }, [1, 2], [1, 2, 3]];
	expect(array.unique(input, validator.isEqual)).toEqual(expectedOutput);
});

test("handle compareFN", () => {
	expect(array.unique([2, 1, 2])).toEqual([2, 1]);
	const users = [
		{ id: 1, name: "a" },
		{ id: 1, name: "c" },
	];
	expect(array.unique(users, (a, b) => a.id === b.id)).toEqual([
		{ id: 1, name: "a" },
	]);
});

test("handle empty array", () => {
	expect(array.unique([])).toEqual([]);
});
