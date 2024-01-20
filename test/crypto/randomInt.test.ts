import { cryptoMockHighestValue, cryptoMockLowestValue } from "./__mocks__.ts";

function runImport() {
	return import("../../src/index.ts");
}

beforeEach(() => {
	vi.unstubAllGlobals();
	vi.resetModules();
});

test("return a number between min and max, including min and max", async () => {
	const { crypto } = await runImport();

	const min = 1;
	const max = 10;

	expect(crypto.randomInt(min, max)).toBeGreaterThanOrEqual(min);
	expect(crypto.randomInt(min, max)).toBeLessThanOrEqual(max);
});

test("can return the upper bound", async () => {
	vi.stubGlobal("crypto", cryptoMockHighestValue);

	const { crypto } = await runImport();

	const result = crypto.randomInt(0, 255);
	expect(result).toBe(255);
});

test("can return the lower bound", async () => {
	vi.stubGlobal("crypto", cryptoMockLowestValue);

	const { crypto } = await runImport();

	const result = crypto.randomInt(0, 255);
	expect(result).toBe(0);
});

test(
	"should return every number in between",
	async () => {
		const { crypto } = await runImport();

		const min = 1;
		const max = 5;
		const numbers = new Set<number>();

		for (let i = 0; i < 20; i++) {
			numbers.add(crypto.randomInt(min, max));
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
		const { crypto } = await runImport();

		const min = 1;
		const max = 20;

		expect(crypto.randomInt(min, max)).not.toEqual(crypto.randomInt(min, max));
	},
	{ retry: 3 },
);

test("throw an error if min is greater than max", async () => {
	const { crypto } = await runImport();
	expect(() => crypto.randomInt(10, 1)).toThrowError();
});

test(
	"average of 1000000 random numbers should be close to the middle",
	async () => {
		const { crypto } = await runImport();

		const min = 0;
		const max = 10;
		const iterations = 10000;
		let sum = 0;

		for (let i = 0; i < iterations; i++) {
			sum += crypto.randomInt(min, max);
		}

		const average = sum / iterations;

		expect(average).toBeGreaterThanOrEqual(5 - 0.1);
		expect(average).toBeLessThanOrEqual(5 + 0.1);
	},
	{ retry: 3 },
);

test("throw an error if min is not an integer", async () => {
	const { crypto } = await runImport();

	expect(() => crypto.randomInt(1.1, 10)).toThrowError();
});

test("throw an error if max is not an integer", async () => {
	const { crypto } = await runImport();

	expect(() => crypto.randomInt(1, 10.1)).toThrowError();
});
