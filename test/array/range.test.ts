import { array } from "../../src/index.ts";

test("array.range of numbers", () => {
	expect(array.range(1, 5)).toEqual([1, 2, 3, 4, 5]);
	expect(array.range(5, 1)).toEqual([5, 4, 3, 2, 1]);
});

test("array.range with steps", () => {
	expect(array.range(0, 10, 2)).toEqual([0, 2, 4, 6, 8, 10]);
	expect(array.range(10, 0, 2)).toEqual([10, 8, 6, 4, 2, 0]);

	expect(array.range(5, 0, 2)).toEqual([5, 3, 1]);
});

test("throw an error if the step is 0 or negative", () => {
	expect(() => array.range(1, 5, 0)).toThrowError();
	expect(() => array.range(1, 5, -1)).toThrowError();
});
