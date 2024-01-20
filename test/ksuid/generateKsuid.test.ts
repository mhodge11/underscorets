import { ksuid } from "../../src/index.ts";

test("generateKsuid", async () => {
	const id = ksuid.generateKsuid();
	expect(ksuid.isValidKsuid(id)).toBe(true);
});
