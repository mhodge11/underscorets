import { attempt } from "@function/index.ts";

test("should return the result of `func`", () => {
	expect(attempt(() => "x")).toEqual(["x", undefined]);
});

test("should provide additional arguments to `func`", () => {
	const actual = attempt(
		(start: number, end: number) => {
			return [start, end];
		},
		1,
		2,
	);
	expect(actual).toEqual([[1, 2], undefined]);
});

test("should coerce errors to error objects", () => {
	const actual = attempt(() => {
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

	const actual = attempt(() => {
		throw new CustomError("x");
	});

	expect(actual[1]).toBeInstanceOf(CustomError);
});
