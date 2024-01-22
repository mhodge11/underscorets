import { generateKsuid, isValidKsuid } from "../../src/index.ts";

test("generateKsuid", async () => {
	const id = generateKsuid();
	expect(isValidKsuid(id)).toBe(true);
});
