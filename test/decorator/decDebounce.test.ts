import { decDebounce } from "../../src/index.ts";

const testFn = vi.fn((x: number) => x * 2);

beforeAll(() => {
	vi.useFakeTimers();
});

afterEach(() => {
	testFn.mockClear();
});

test("decorator", () => {
	class TestClass {
		@decDebounce(100)
		testMethod(x: number) {
			return testFn(x);
		}
	}
	const instance = new TestClass();
	instance.testMethod(1);
	instance.testMethod(1);
	expect(testFn).not.toHaveBeenCalled();
	vi.advanceTimersByTime(100);
	expect(testFn).toHaveBeenCalledOnce();
});
