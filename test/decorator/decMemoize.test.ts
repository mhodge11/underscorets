import { decMemoize } from "../../src/index.ts";

const testFn = vi.fn((a: number, b: number) => a + b);

beforeEach(() => {
	testFn.mockClear();
});

test("decorator", () => {
	class TestClass {
		@decMemoize({ ttl: 1000 })
		testMethod(a: number, b: number) {
			return testFn(a, b);
		}
	}

	const instance = new TestClass();
	expect(instance.testMethod(1, 2)).toBe(3);
	expect(instance.testMethod(1, 2)).toBe(3);

	expect(testFn).toHaveBeenCalledOnce();
});
