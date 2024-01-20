import { num } from "../../src/index.ts";

test("return 1 when the input is 0", () => {
	expect(num.factorial(0)).toBe(1);
});

test("return 1 when the input is 1", () => {
	expect(num.factorial(1)).toBe(1);
});

test("return the num.factorial of a num", () => {
	expect(num.factorial(5)).toBe(120);
});

test("throw an error when the input is not an integer", () => {
	expect(() => num.factorial(1.5)).toThrowError();
});
