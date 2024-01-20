/**
 * A stack data structure.
 *
 * **Static Methods:**
 * - `from` - Creates a stack from an array.
 * - `fromString` - Creates a stack from a string.
 *
 * **Methods:**
 * - `push` - Pushes a value to the stack. Returns the stack.
 * - `pop` - Pops a value from the stack. Returns the popped value.
 * - `copy` - Constructs a new stack with the same values as the current stack.
 * - `toString` - Returns the stack as a string.
 * - `toJSON` - Converts the stack to a string used by `JSON.stringify()`.
 * - `toArray` - Converts the stack to an array.
 *
 * **Properties:**
 * - `top` - The top node of the stack.
 * - `size` - The size of the stack.
 *
 * @template T The type of the values stored in the stack
 *
 * @example
 * ```ts
 * const stack = new Stack<string>();
 *
 * stack.push("foo");
 * // => { size: 1, top: { value: "foo", next: undefined } }
 *
 * stack.push("bar");
 * // => { size: 2, top: { value: "bar", next: { value: "foo", next: undefined } } }
 *
 * stack.pop();
 * // => { value: "bar", next: undefined }
 *
 * stack.size;
 * // => 1
 *
 * stack.top;
 * // => { value: "foo", next: undefined }
 *
 * stack.toArray();
 * // => ["foo"]
 * ```
 *
 * @category Util
 */
export class Stack<T> {
	private _top: Node<T> | undefined;
	private _size = 0;

	/**
	 * The top node of the stack.
	 */
	get top() {
		return this._top;
	}

	/**
	 * The size of the stack.
	 */
	get size() {
		return this._size;
	}

	/**
	 * The Stack tag.
	 */
	get [Symbol.toStringTag]() {
		return "Stack";
	}

	/**
	 * An iterator for the stack to use with `for...of` loops.
	 */
	[Symbol.iterator]() {
		return this.toArray()[Symbol.iterator]();
	}

	[Symbol.isConcatSpreadable]() {
		return true;
	}

	constructor(values?: T[]) {
		if (values?.length) this.push(...values);
	}

	/**
	 * Creates a stack from an array.
	 *
	 * @param values The array to create a stack from.
	 * @returns The stack.
	 */
	static from<T>(values?: T[]) {
		return new Stack(values);
	}

	/**
	 * Creates a Stack from a string.
	 *
	 * @param str String to create Stack from
	 * @returns Stack created from string
	 */
	static fromString<V>(str: string) {
		str = str.replace(/Stack/g, "").trim();
		let values: V[] = [];
		try {
			const parsedStr = JSON.parse(str);
			if (Array.isArray(parsedStr)) values = parsedStr;
			else values = [parsedStr];
		} catch {
			throw new Error("Invalid JSON");
		}
		return new Stack<V>(values.reverse());
	}

	/**
	 * Pushes a value to the stack.
	 *
	 * @param value The value to push to the stack.
	 * @returns The stack, or `undefined` if no value was provided.
	 */
	push(...value: T[]) {
		if (value.length === 0) return undefined;
		for (const v of value) this._push(v);
		return this;
	}

	private _push(value: T) {
		const newNode = new Node(value);

		if (this._size > 0) newNode.next = this._top;

		this._top = newNode;
		this._size++;
	}

	/**
	 * Pops a value from the stack.
	 *
	 * @returns The popped value, or `undefined` if the stack is empty.
	 */
	pop() {
		if (this._size === 0) return undefined;

		const temp = this._top;
		this._top = this._top?.next;
		// biome-ignore lint/style/noNonNullAssertion: guaranteed to be defined
		temp!.next = undefined;

		this._size--;

		return temp;
	}

	/**
	 * Clears the stack.
	 *
	 * @returns The stack before it was cleared.
	 */
	clear() {
		const current = this.copy();
		this._top = undefined;
		this._size = 0;
		return current;
	}

	/**
	 * Constructs a new stack with the same values as the current stack.
	 *
	 * @returns The new stack.
	 */
	copy() {
		return new Stack<T>(this.toArray().reverse());
	}

	/**
	 * @returns The Stack as a string.
	 */
	toString(
		replacer?: ((this: any, key: string, value: any) => any) | undefined,
		space?: string | number | undefined,
	) {
		return `${this[Symbol.toStringTag]} ${JSON.stringify(
			this.toJSON(),
			replacer,
			space,
		)}`;
	}

	/**
	 * Converts the Stack to a string used by `JSON.stringify()`.
	 *
	 * @returns The Stack as a string
	 */
	toJSON() {
		return this.toArray();
	}

	/**
	 * Converts the Stack to an array.
	 *
	 * @returns The Stack as an array
	 */
	toArray() {
		const array: T[] = [];
		let current = this._top;
		while (current) {
			array.push(current.value);
			current = current.next;
		}
		return array;
	}
}

/**
 * A node in a stack.
 *
 * **Methods:**
 * - `toString` - Returns the node as a string.
 * - `toJSON` - Converts the node to a string used by `JSON.stringify()`.
 * - `toObject` - Converts the node to an object.
 *
 * **Properties:**
 * - `value` - The value of the node.
 * - `next` - The next node in the stack.
 *
 * @template T The type of the value
 *
 * @example
 * ```ts
 * const node = new Node(1);
 * node.toString(); // => "SNode { { value: 1, next: undefined } }"
 * node.toJSON(); // => "SNode { { value: 1, next: undefined } }"
 * node.toObject(); // => { value: 1, next: undefined }
 * ```
 */
class Node<T> {
	value: T;
	next: Node<T> | undefined;

	/**
	 * The Node tag.
	 */
	get [Symbol.toStringTag]() {
		return "StackNode";
	}

	constructor(value: T) {
		this.value = value;
	}

	/**
	 * @returns The Node as a string.
	 */
	toString(
		replacer?: ((this: any, key: string, value: any) => any) | undefined,
		space?: string | number | undefined,
	) {
		return `${this[Symbol.toStringTag]} ${JSON.stringify(
			this.toJSON(),
			replacer,
			space,
		)}`;
	}

	/**
	 * Converts the Node to JSON.
	 *
	 * @returns The Node as JSON
	 */
	toJSON() {
		return {
			value: this.value,
			...(this.next ? { next: `${this[Symbol.toStringTag]} {}` } : {}),
		};
	}
}
