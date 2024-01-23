import { factorial } from "@number/index.ts";

test("return 1 when the input is 0", () => {
	expect(factorial(0)).toBe(1);
});

test("return 1 when the input is 1", () => {
	expect(factorial(1)).toBe(1);
});

test("return the factorial of a num", () => {
	expect(factorial(5)).toBe(120);
});

test("throw an error when the input is not an integer", () => {
	expect(() => factorial(1.5)).toThrowError();
});
