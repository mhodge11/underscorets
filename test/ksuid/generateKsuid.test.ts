import { generateKsuid, isValidKsuid } from "@ksuid/index.ts";

test("generateKsuid", async () => {
	const id = generateKsuid();
	expect(isValidKsuid(id)).toBe(true);
});
