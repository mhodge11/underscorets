import { Stack } from "../../src/index.ts";

test("should create an empty stack", () => {
	const stack = new Stack();
	expect(stack).toBeDefined();
	expect(stack.size).toBe(0);
	expect(stack.top).toBeUndefined();
});

test("should create a stack from an array", () => {
	const stack = new Stack([1, 2, 3]);
	expect(stack).toBeDefined();
	expect(stack.size).toBe(3);
	expect(stack.top?.value).toBe(3);
});

test("is concat iterable", () => {
	const stack = new Stack([1, 2, 3]);
	expect(stack[Symbol.isConcatSpreadable]()).toBe(true);
});

test("should create a stack using the from method", () => {
	const stack = Stack.from([1, 2, 3]);
	expect(stack).toBeDefined();
	expect(stack.size).toBe(3);
	expect(stack.top?.value).toBe(3);
});

test("should create a stack using the fromString method", () => {
	const stack = Stack.fromString("1");
	expect(stack).toBeDefined();
	expect(stack.size).toBe(1);
	expect(stack.top?.value).toBe(1);

	const stack1 = Stack.fromString("[]");
	expect(stack1).toBeDefined();
	expect(stack1.size).toBe(0);
	expect(stack1.top).toBeUndefined();

	const stack2 = Stack.fromString("[1]");
	expect(stack2).toBeDefined();
	expect(stack2.size).toBe(1);
	expect(stack2.top?.value).toBe(1);

	const stack3 = Stack.fromString("Stack [1,2,3]");
	expect(stack3).toBeDefined();
	expect(stack3.size).toBe(3);
	expect(stack3.top?.value).toBe(1);

	expect(() => Stack.fromString("foo")).toThrow(Error);
});

test("should push a value", () => {
	const stack = new Stack();
	expect(stack.push(1)?.top?.value).toBe(1);
	expect(stack.push(2)?.top?.value).toBe(2);
	expect(stack.push(3)?.top?.value).toBe(3);
	expect(stack.size).toBe(3);
	expect(stack.top?.value).toBe(3);
});

test("should push multiple values", () => {
	const stack = new Stack();
	stack.push(1, 2, 3);
	expect(stack.size).toBe(3);
	expect(stack.top?.value).toBe(3);
});

test("should return undefined pushing no values", () => {
	const stack = new Stack();
	expect(stack.push()).toBeUndefined();
	expect(stack.size).toBe(0);
	expect(stack.top).toBeUndefined();
});

test("should pop a value", () => {
	const stack = new Stack([1, 2, 3]);
	expect(stack.pop()?.value).toBe(3);
	expect(stack.size).toBe(2);
	expect(stack.top?.value).toBe(2);
});

test("pop should return undefined if the stack is empty", () => {
	const stack = new Stack();
	expect(stack.pop()).toBeUndefined();
	expect(stack.size).toBe(0);
	expect(stack.top).toBeUndefined();
});

test("should copy a stack", () => {
	const stack = new Stack([1, 2, 3]);
	const copy = stack.copy();
	expect(copy).toBeDefined();
	expect(copy).not.toBe(stack);
	expect(copy.top).toEqual(stack.top);
	expect(copy.top).not.toBe(stack.top);
	expect(copy.size).toEqual(stack.size);
});

test("should clear a stack and return a copy of the old stack", () => {
	const stack = new Stack([1, 2, 3]);
	const oldStack = stack.clear();
	expect(oldStack).toBeDefined();
	expect(oldStack).not.toBe(stack);
	expect(oldStack.size).toBe(3);
	expect(oldStack.top?.value).toBe(3);
	expect(stack.size).toBe(0);
	expect(stack.top).toBeUndefined();
});

test("should convert a stack to a string", () => {
	const stack = new Stack([1, 2, 3]);
	expect(stack.toString()).toBe("Stack [3,2,1]");
});

test("should convert a stack to a JSON string", () => {
	const stack = new Stack([1, 2, 3]);
	expect(JSON.stringify(stack)).toBe("[3,2,1]");
});

test("should convert a stack to an array", () => {
	const stack = new Stack([1, 2, 3]);
	expect(stack.toArray()).toEqual([3, 2, 1]);
});

test("should convert a stack node to a string", () => {
	const stack = new Stack([1, 2, 3]);
	expect(stack.top?.toString()).toBe(
		'StackNode {"value":3,"next":"StackNode {}"}',
	);
});

test("should convert a stack node to a JSON string", () => {
	const stack = new Stack([1, 2, 3]);
	expect(JSON.stringify(stack.top)).toBe('{"value":3,"next":"StackNode {}"}');
});

test("should convert stack node to a JSON string without next if it is undefined", () => {
	const stack = new Stack([1]);
	expect(JSON.stringify(stack.top)).toBe('{"value":1}');
});
