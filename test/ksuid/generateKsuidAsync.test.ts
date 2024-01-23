import { generateKsuidAsync, isValidKsuid } from "@ksuid/index.ts";

test("generateKsuidAsync", async () => {
	const id = await generateKsuidAsync();
	expect(isValidKsuid(id)).toBe(true);
});
