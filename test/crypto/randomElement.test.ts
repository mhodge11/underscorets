import { crypto } from "../../src/index.ts";

test("sample function returns a random value from an array", () => {
	const collection = [1, 2, 3, 4, 5];
	const result = crypto.randomElement(collection);
	expect(collection).toContain(result);
});

test("sample function returns undefined for an empty collection", () => {
	const collection = [] as unknown[];
	const result = crypto.randomElement(collection);
	expect(result).toBeUndefined();
});

test("return an empty array if the input array is empty", () => {
	const result = crypto.randomElement([], 3);
	expect(result).toEqual([]);
});

test("return a random subset of the input array", () => {
	const array = [1, 2, 3, 4, 5];
	const result = crypto.randomElement([1, 2, 3, 4, 5], 3);
	expect(expect.arrayContaining(result)).toEqual(array);
});
