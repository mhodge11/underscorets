import { generateKsuid, isValidKsuid } from "@ksuid/index.ts";

test("isValidKsuid return true for valid ksuids", () => {
	expect(isValidKsuid(generateKsuid())).toBe(true);
});

test("isValidKsuid return false for invalid ksuids", () => {
	expect(isValidKsuid("")).toBe(false);
	expect(isValidKsuid("test")).toBe(false);
	expect(isValidKsuid("test-")).toBe(false);
	expect(isValidKsuid("test_")).toBe(false);
	expect(isValidKsuid("test_123")).toBe(false);
});
