import { generateUuid, uuidUrlAlphabet } from "@uuid/index.ts";

test("generates URL-friendly IDs", () => {
	for (let i = 0; i < 100; i++) {
		const id = generateUuid();
		expect(id.length).toBe(21);
		expectTypeOf(id).toBeString();
	}
});

test("changes ID length", () => {
	expect(generateUuid(10)).toHaveLength(10);
});

test("has no collisions", () => {
	const used: Record<string, boolean> = {};
	for (let i = 0; i < 50 * 1000; i++) {
		const id = generateUuid();
		expect(used[id]).toBeUndefined();
		used[id] = true;
	}
});

test("has flat distribution", () => {
	const COUNT = 100 * 1000;
	const LENGTH = generateUuid().length;

	const chars: Record<string, number> = {};
	for (let i = 0; i < COUNT; i++) {
		const id = generateUuid();
		for (const char of id) {
			if (!chars[char]) chars[char] = 0;
			chars[char] += 1;
		}
	}

	expect(Object.keys(chars).length).toBe(uuidUrlAlphabet.length);

	let max = 0;
	let min = Number.MAX_SAFE_INTEGER;
	for (const k in chars) {
		const distribution =
			// biome-ignore lint/style/noNonNullAssertion: <explanation>
			(chars[k]! * uuidUrlAlphabet.length) / (COUNT * LENGTH);
		if (distribution > max) max = distribution;
		if (distribution < min) min = distribution;
	}

	expect(max - min).toBeLessThanOrEqual(0.05);
});
