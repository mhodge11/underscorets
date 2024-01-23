import { memoize } from "@function/index.ts";

const testFn = vi.fn((a: number, b: number) => a + b);

beforeEach(() => {
	testFn.mockClear();
});

test("memoize a function", () => {
	const memoizedFunc = memoize(testFn);

	expect(memoizedFunc(1, 2)).to.equal(3);
	expect(memoizedFunc(1, 2)).to.equal(3);
	expect(testFn).toHaveBeenCalledOnce();
});

test("return different results for different arguments", () => {
	const memoizedFunc = memoize(testFn);

	expect(memoizedFunc(1, 2)).to.equal(3);
	expect(memoizedFunc(2, 3)).to.equal(5);
	expect(testFn).toHaveBeenCalledTimes(2);
});

test("expose a cache property", () => {
	const memoizedFunc = memoize(testFn);
	expect(memoizedFunc.cache).to.be.an.instanceof(Map);
});

test("use a custom resolver", () => {
	const memoizedFunc = memoize(testFn, {
		resolver: (a: number, b: number) => (a + b).toString(),
	});

	expect(memoizedFunc(1, 2)).to.equal(3);
	expect(memoizedFunc(2, 1)).to.equal(3);
	expect(testFn).toHaveBeenCalledOnce();
});

test("use a custom ttl", () => {
	vi.useFakeTimers();
	const memoizedFunc = memoize(testFn, { ttl: 1000 });

	expect(memoizedFunc(1, 2)).to.equal(3);
	expect(memoizedFunc(1, 2)).to.equal(3);
	expect(testFn).toHaveBeenCalledOnce();

	vi.advanceTimersByTime(999);
	expect(memoizedFunc(1, 2)).to.equal(3);
	expect(testFn).toHaveBeenCalledOnce();

	vi.advanceTimersByTime(1);
	expect(memoizedFunc(1, 2)).to.equal(3);
	expect(testFn).toHaveBeenCalledTimes(2);
});

test("throws an error when func is not a function", () => {
	expect(() => memoize(undefined as any)).toThrow(TypeError);
});
