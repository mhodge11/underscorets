import { cryptoMockHighestValue, cryptoMockLowestValue } from "./__mocks__.ts";

function runImport() {
	return import("@crypto/index.ts");
}

beforeEach(() => {
	vi.unstubAllGlobals();
	vi.resetModules();
});

test("return a number between min and max, including min and max", async () => {
	const { randomInt } = await runImport();

	const min = 1;
	const max = 10;

	expect(randomInt(min, max)).toBeGreaterThanOrEqual(min);
	expect(randomInt(min, max)).toBeLessThanOrEqual(max);
});

test("can return the upper bound", async () => {
	vi.stubGlobal("crypto", cryptoMockHighestValue);

	const { randomInt } = await runImport();

	const result = randomInt(0, 255);
	expect(result).toBe(255);
});

test("can return the lower bound", async () => {
	vi.stubGlobal("crypto", cryptoMockLowestValue);

	const { randomInt } = await runImport();

	const result = randomInt(0, 255);
	expect(result).toBe(0);
});

test(
	"should return every number in between",
	async () => {
		const { randomInt } = await runImport();

		const min = 1;
		const max = 5;
		const numbers = new Set<number>();

		for (let i = 0; i < 20; i++) {
			numbers.add(randomInt(min, max));
		}
		expect(numbers.size).toBe(max - min + 1);
		expect(numbers.has(min)).toBeTruthy();
		expect(numbers.has(max)).toBeTruthy();
	},
	{ retry: 3 },
);

test(
	"return a different number each time",
	async () => {
		const { randomInt } = await runImport();

		const min = 1;
		const max = 20;

		expect(randomInt(min, max)).not.toEqual(randomInt(min, max));
	},
	{ retry: 3 },
);

test("throw an error if min is greater than max", async () => {
	const { randomInt } = await runImport();
	expect(() => randomInt(10, 1)).toThrowError();
});

test(
	"average of 1000000 random numbers should be close to the middle",
	async () => {
		const { randomInt } = await runImport();

		const min = 0;
		const max = 10;
		const iterations = 10000;
		let sum = 0;

		for (let i = 0; i < iterations; i++) {
			sum += randomInt(min, max);
		}

		const average = sum / iterations;

		expect(average).toBeGreaterThanOrEqual(5 - 0.1);
		expect(average).toBeLessThanOrEqual(5 + 0.1);
	},
	{ retry: 3 },
);

test("throw an error if min is not an integer", async () => {
	const { randomInt } = await runImport();

	expect(() => randomInt(1.1, 10)).toThrowError();
});

test("throw an error if max is not an integer", async () => {
	const { randomInt } = await runImport();

	expect(() => randomInt(1, 10.1)).toThrowError();
});
