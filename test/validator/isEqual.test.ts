import { validator } from "../../src/index.ts";

test("numbers", () => {
	expect(validator.isEqual(1, 1)).toBe(true);
	expect(validator.isEqual(1, 2)).toBe(false);
});

test("strings", () => {
	expect(validator.isEqual("a", "a")).toBe(true);
	expect(validator.isEqual("a", "b")).toBe(false);
});

test("booleans", () => {
	expect(validator.isEqual(true, true)).toBe(true);
	expect(validator.isEqual(true, false)).toBe(false);
});

test("null", () => {
	expect(validator.isEqual(null, null)).toBe(true);
	expect(validator.isEqual(null, undefined)).toBe(false);
});

test("undefined", () => {
	expect(validator.isEqual(undefined, undefined)).toBe(true);
	expect(validator.isEqual(undefined, null)).toBe(false);
});

test("objects", () => {
	expect(validator.isEqual({ a: 1 }, { a: 1 })).toBe(true);
	expect(validator.isEqual({ a: 1 }, { a: 2 })).toBe(false);
});

test("dates", () => {
	expect(validator.isEqual(new Date(1), new Date(1))).toBe(true);
	expect(validator.isEqual(new Date(1), new Date(2))).toBe(false);
});

test("arrays", () => {
	expect(validator.isEqual([1, 2, 3], [1, 2, 3])).toBe(true);
	expect(validator.isEqual([1, 2, 3], [1, 2, 4])).toBe(false);
});

test("nested objects", () => {
	expect(validator.isEqual({ a: { b: 1 } }, { a: { b: 1 } })).toBe(true);
	expect(validator.isEqual({ a: { b: 1 } }, { a: { b: 2 } })).toBe(false);
});

test("nested arrays", () => {
	expect(validator.isEqual([[1], [2], [3]], [[1], [2], [3]])).toBe(true);
	expect(validator.isEqual([[1], [2], [3]], [[1], [2], [4]])).toBe(false);
});

test("nested objects and arrays", () => {
	expect(validator.isEqual({ a: { b: [1] } }, { a: { b: [1] } })).toBe(true);
	expect(validator.isEqual({ a: { b: [1] } }, { a: { b: [2] } })).toBe(false);
});

test("objects with different keys", () => {
	expect(validator.isEqual({ a: 1 }, { b: 1 })).toBe(false);
});

test("arrays with different lengths", () => {
	expect(validator.isEqual([1, 2, 3], [1, 2])).toBe(false);
});

// eslint-disable-next-line unicorn/consistent-function-scoping
const testFunction = () => {
	return 1;
};
test("functions", () => {
	expect(
		validator.isEqual(
			() => {
				return 1;
			},
			() => {
				return 2;
			},
		),
	).toBe(false);
	expect(validator.isEqual(testFunction, testFunction)).toBe(true);
});

test("objects with functions", () => {
	expect(validator.isEqual({ a: () => 1 }, { a: () => 1 })).toBe(false);
	expect(validator.isEqual({ a: testFunction }, { a: testFunction })).toBe(
		true,
	);
});

test("regExp", () => {
	expect(validator.isEqual(/a(.*)/, /a(.*)/)).toBe(true);
	expect(validator.isEqual(/a/, /b.*/)).toBe(false);
});

test("deepEquals with Error objects", () => {
	const error1 = new Error("test error");
	const error2 = new Error("test error");
	expect(validator.isEqual(error1, error1)).toBe(true);
	expect(validator.isEqual(error1, error2)).toBe(false);
});

test("array buffers", () => {
	const buffer1 = new ArrayBuffer(2);
	const buffer1View = new Uint8Array(buffer1);
	buffer1View.set([42, 43]);

	const buffer2 = new ArrayBuffer(2);
	const buffer2View = new Uint8Array(buffer2);
	buffer2View.set([42, 43]);

	const buffer3 = new ArrayBuffer(2);
	const buffer3View = new Uint8Array(buffer3);
	buffer3View.set([42, 44]);

	const buffer4 = new ArrayBuffer(3);

	expect(validator.isEqual(buffer1, buffer2)).toBe(true);
	expect(validator.isEqual(buffer1, buffer3)).toBe(false);
	expect(validator.isEqual(buffer1, buffer4)).toBe(false);
});

test("typed arrays", () => {
	expect(
		validator.isEqual(new Uint8Array([1, 2, 3]), new Uint8Array([1, 2, 3])),
	).toBe(true);
	expect(
		validator.isEqual(new Uint8Array([1, 2, 3]), new Uint8Array([1, 2])),
	).toBe(false);
	expect(
		validator.isEqual(new Uint8Array([1, 2, 3]), new Uint8Array([1, 2, 4])),
	).toBe(false);
});

test("data views", () => {
	const buffer1 = new ArrayBuffer(2);
	const buffer2 = new ArrayBuffer(2);
	const buffer3 = new ArrayBuffer(3);

	const view1 = new DataView(buffer1);
	const view2 = new DataView(buffer2);
	const view3 = new DataView(buffer3);

	view1.setUint8(0, 42);
	view1.setUint8(1, 43);

	view2.setUint8(0, 42);
	view2.setUint8(1, 43);

	expect(validator.isEqual(view1, view2)).toBe(true);
	expect(validator.isEqual(view1, view3)).toBe(false);
});

test("buffers", () => {
	const buffer1 = Buffer.from([1, 2, 3]);
	const buffer2 = Buffer.from([1, 2, 3]);
	const buffer3 = Buffer.from([1, 2]);

	expect(validator.isEqual(buffer1, buffer2)).toBe(true);
	expect(validator.isEqual(buffer1, buffer3)).toBe(false);
});

test("maps", () => {
	const map1 = new Map();
	map1.set("a", 1);
	map1.set("b", 2);

	const map2 = new Map();
	map2.set("a", 1);
	map2.set("b", 2);

	const map3 = new Map();
	map3.set("a", 1);
	map3.set("b", 3);

	expect(validator.isEqual(map1, map2)).toBe(true);
	expect(validator.isEqual(map1, map3)).toBe(false);
});

test("sets", () => {
	const set1 = new Set();
	set1.add(1);
	set1.add(2);

	const set2 = new Set();
	set2.add(1);
	set2.add(2);

	const set3 = new Set();
	set3.add(1);
	set3.add(3);

	expect(validator.isEqual(set1, set2)).toBe(true);
	expect(validator.isEqual(set1, set3)).toBe(false);
});
