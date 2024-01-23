import { sample } from "@array/index.ts";

test("sample returns a random element from an array", () => {
	const arr = [1, 2, 3, 4, 5, 6];
	expect(arr).toContain(sample(arr)[0]);
});

test("sample returns an empty array from an empty array", () => {
	expect(sample([])).toEqual([]);
});

test("sample can return with a sample size", () => {
	const arr = [1, 2, 3, 4, 5, 6];
	expect(sample(arr, 2).length).toBe(2);
});

test("sample returns an array with a single element if the sample size is less than 1", () => {
	const arr = [1, 2, 3, 4, 5, 6];
	expect(sample(arr, 0).length).toBe(1);
});

test("sample returns the full array if the sample size is greater than the array length", () => {
	const arr = [1, 2, 3, 4, 5, 6];
	expect(sample(arr, 10).length).toBe(6);
});
