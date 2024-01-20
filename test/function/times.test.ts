import { fn } from "../../src/index.ts";

const testFN = vi.fn((index: number) => index);

afterEach(() => {
	testFN.mockClear();
});

test("call the provided function the correct number of times", () => {
	fn.times(testFN, 5);
	expect(testFN).toHaveBeenCalledTimes(5);
});

test("pass the correct index to the provided function", () => {
	const result = fn.times(testFN, 5);
	expect(result).toEqual([0, 1, 2, 3, 4]);
});

test("handle a negative value for the first argument", () => {
	const result = fn.times(testFN, -1);
	expect(result).toEqual([]);
});
