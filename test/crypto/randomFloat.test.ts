import { cryptoMockHighestValue, cryptoMockLowestValue } from "./__mocks__.ts";

function runImport() {
	return import("../../src/index.ts");
}

beforeEach(() => {
	vi.unstubAllGlobals();
	vi.resetModules();
});

test("throw an error if min is greater than max", async () => {
	const { randomFloat } = await runImport();
	expect(() => randomFloat(10, 1)).toThrowError();
});

test("return a number between min and max, including min and max", async () => {
	const { randomFloat } = await runImport();

	const min = 1;
	const max = 10;

	for (let i = 0; i < 10; i++) {
		const result = randomFloat(min, max);
		expect(result).toBeGreaterThanOrEqual(min);
		expect(result).toBeLessThanOrEqual(max);
	}
});

test("return a float", async () => {
	const { randomFloat } = await runImport();

	const min = 1.1;
	const max = 10.1;

	for (let i = 0; i < 10; i++) {
		const result = randomFloat(min, max);

		expect(Number.isInteger(result)).toBeFalsy(); // not be an integer
		expect(result % 1 !== 0).toBeTruthy(); // have decimal places
	}
});

test("can return the upper bound", async () => {
	vi.stubGlobal("crypto", cryptoMockHighestValue);

	const { randomFloat } = await runImport();

	expect(randomFloat(0, 1024)).toBe(1024);
});

test("can return the lower bound", async () => {
	vi.stubGlobal("crypto", cryptoMockLowestValue);

	const { randomFloat } = await runImport();

	expect(randomFloat(0, 1)).toBe(0);
});

test(
	"average of 200000 random numbers should be close to the middle",
	async () => {
		const { randomFloat } = await runImport();

		const min = 0;
		const max = 1;
		const iterations = 200000;
		let sum = 0;

		for (let i = 0; i < iterations; i++) {
			sum += randomFloat(min, max);
		}

		const average = sum / iterations;

		expect(average).toBeGreaterThanOrEqual(0.499);
		expect(average).toBeLessThanOrEqual(0.501);
	},
	{ retry: 3 },
);
