import { generateCustomUuid } from "@uuid/index.ts";

test("generates a uuid with a custom alphabet", () => {
	expect(generateCustomUuid("a", 5)()).toBe("aaaaa");
});

test("has flat distribution", () => {
	const COUNT = 50 * 1000;
	const LENGTH = 30;
	const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
	const uid = generateCustomUuid(ALPHABET, LENGTH);

	const chars: Record<string, number> = {};
	for (let i = 0; i < COUNT; i++) {
		const id = uid();
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

test("changes size", () => {
	expect(generateCustomUuid("a", 10)()).toBe("aaaaaaaaaa");
});
