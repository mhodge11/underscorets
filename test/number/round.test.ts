import { num } from "../../src/index.ts";

test("num.round a num to the given precision", () => {
	expect(num.round(1.23456, 2)).toBe(1.23);
	expect(num.round(1.235, 1)).toBe(1.2);
	expect(num.round(1234.56)).toBe(1234.56);
});
