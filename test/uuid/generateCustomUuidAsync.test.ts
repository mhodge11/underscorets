import { generateCustomUuidAsync } from "../../src/index.ts";

test("generates a uuid with a custom alphabet", async () => {
	const uid = generateCustomUuidAsync("a", 5);
	expect(await uid()).toBe("aaaaa");
});

test("has flat distribution", async () => {
	const COUNT = 50 * 1000;
	const LENGTH = 30;
	const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
	const uid = generateCustomUuidAsync(ALPHABET, LENGTH);

	const chars: Record<string, number> = {};
	for (let i = 0; i < COUNT; i++) {
		const id = await uid();
		for (const char of id) {
			if (!chars[char]) chars[char] = 0;
			chars[char] += 1;
		}
	}

	expect(Object.keys(chars).length).toBe(ALPHABET.length);

	let max = 0;
	let min = Number.MAX_SAFE_INTEGER;
	for (const k in chars) {
		// biome-ignore lint/style/noNonNullAssertion: <explanation>
		const distribution = (chars[k]! * ALPHABET.length) / (COUNT * LENGTH);
		if (distribution > max) max = distribution;
		if (distribution < min) min = distribution;
	}

	expect(max - min).toBeLessThanOrEqual(0.05);
});

test("changes size", async () => {
	const uid = generateCustomUuidAsync("a", 10);
	expect(await uid()).toBe("aaaaaaaaaa");
});
