import { fn } from "../../src/index.ts";

test("should return the result of `func`", () => {
	expect(fn.attempt(() => "x")).toEqual(["x", undefined]);
});

test("should provide additional arguments to `func`", () => {
	const actual = fn.attempt(
		(start: number, end: number) => {
			return [start, end];
		},
		1,
		2,
	);
	expect(actual).toEqual([[1, 2], undefined]);
});

test("should coerce errors to error objects", () => {
	const actual = fn.attempt(() => {
		throw "x";
	});
	expect(actual[1]).toEqual(new Error("x"));
});

test("should preserve custom errors", () => {
	class CustomError extends Error {
		constructor(message: string) {
			super(message);
			this.name = "CustomError";
		}
	}

	const actual = fn.attempt(() => {
		throw new CustomError("x");
	});

	expect(actual[1]).toBeInstanceOf(CustomError);
});
