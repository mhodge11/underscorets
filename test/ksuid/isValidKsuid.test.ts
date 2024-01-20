import { ksuid } from "../../src/index.ts";

test("ksuid.isValidKsuid return true for valid ksuids", () => {
	expect(ksuid.isValidKsuid(ksuid.generateKsuid())).toBe(true);
});

test("ksuid.isValidKsuid return false for invalid ksuids", () => {
	expect(ksuid.isValidKsuid("")).toBe(false);
	expect(ksuid.isValidKsuid("test")).toBe(false);
	expect(ksuid.isValidKsuid("test-")).toBe(false);
	expect(ksuid.isValidKsuid("test_")).toBe(false);
	expect(ksuid.isValidKsuid("test_123")).toBe(false);
});
