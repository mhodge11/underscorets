/**
 * A linked list class with methods to add, remove, and reverse nodes.
 *
 * **Static Methods:**
 * - `from` - Creates a LinkedList from an array.
 * - `fromString` - Creates a LinkedList from a string.
 *
 * **Methods:**
 * - `push` - Add value to end of list. Returns entire linked list.
 * - `pop` - Remove node from end of list. Returns removed node.
 * - `unshift` - Add value to beginning of list. Returns entire linked list.
 * - `shift` - Remove node from beginning of list. Returns removed node.
 * - `get` - Get node at an index. Returns node at index.
 * - `set` - Set node at an index to a value. Returns node at index.
 * - `insert` - Insert value at an index. Returns entire linked list.
 * - `remove` - Remove node at an index. Returns removed node.
 * - `reverse` - Reverse the linked list. Returns entire reversed linked list.
 * - `copy` - Returns a copy of the LinkedList.
 * - `toString` - Returns the LinkedList as a string.
 * - `toJSON` - Converts the LinkedList to a string used by `JSON.stringify()`.
 * - `toObject` - Converts the LinkedList to an object.
 * - `toArray` - Returns the LinkedList as an array.
 *
 * **Properties:**
 * - `length` - Number of nodes in linked list.
 * - `head` - First node in linked list.
 * - `tail` - Last node in linked list.
 *
 * @template T Type of value stored in linked list
 *
 * @example
 * ```ts
 * const list = new LinkedList(1, 2, 3);
 *
 * list.push(4, 5, 6);
 * // => LinkedList {
 * //   length: 6,
 * //   head: Node {
 * //     value: 1,
 * //     next: Node {
 * //       value: 2,
 * //       next: ...[Node]
 * //     }
 * //   },
 * //   tail: Node {
 * //     value: 6,
 * //     next: undefined
 * //   }
 * // }
 *
 * list.pop();
 * // => Node {
 * //   value: 6,
 * //   next: undefined
 * // }
 *
 * list.unshift(0);
 * // => LinkedList {
 * //   length: 6,
 * //   head: Node {
 * //     value: 0,
 * //     next: Node {
 * //       value: 1,
 * //       next: ...[Node]
 * //     }
 * //   },
 * //   tail: Node {
 * //     value: 5,
 * //     next: undefined
 * //   }
 * // }
 *
 * list.shift();
 * // => Node {
 * //   value: 0,
 * //   next: undefined
 * // }
 *
 * list.get(2);
 * // => Node {
 * //   value: 2,
 * //   next: Node {
 * //     value: 3,
 * //     next: Node {
 * //       value: 4,
 * //       next: ...[Node]
 * //     }
 * //   }
 * // }
 *
 * list.set(2, 10);
 * // => Node {
 * //   value: 10,
 * //   next: Node {
 * //     value: 3,
 * //     next: Node {
 * //       value: 4,
 * //       next: ...[Node]
 * //     }
 * //   }
 * // }
 *
 * list.insert(2, 7, 8, 9);
 * // => LinkedList {
 * //   length: 8,
 * //   head: Node {
 * //     value: 0,
 * //     next: Node {
 * //       value: 1,
 * //       next: Node {
 * //         value: 7,
 * //         next: ...[Node]
 * //       }
 * //     }
 * //   },
 * //   tail: Node {
 * //     value: 6,
 * //     next: undefined
 * //   }
 * // }
 *
 * list.remove(2);
 * // => Node {
 * //   value: 7,
 * //   next: Node {
 * //     value: 8,
 * //     next: Node {
 * //       value: 9,
 * //       next: ...[Node]
 * //     }
 * //   }
 * // }
 *
 * list.reverse();
 * // => LinkedList {
 * //   length: 7,
 * //   head: Node {
 * //     value: 6,
 * //     next: Node {
 * //       value: 5,
 * //       next: Node {
 * //         value: 4,
 * //         next: ...[Node]
 * //       }
 * //     }
 * //   },
 * //   tail: Node {
 * //     value: 0,
 * //     next: undefined
 * //   }
 * // }
 * ```
 *
 * @category Misc
 */
export class LinkedList<T> {
	/**
	 * Number of nodes in linked list.
	 */
	_size = 0;
	/**
	 * First node in linked list.
	 */
	_head: Node<T> | undefined;
	/**
	 * Last node in linked list.
	 */
	_tail: Node<T> | undefined;

	/**
	 * Number of nodes in linked list.
	 */
	get size() {
		return this._size;
	}

	/**
	 * First node in linked list.
	 */
	get head() {
		return this._head;
	}

	/**
	 * Last node in linked list.
	 */
	get tail() {
		return this._tail;
	}

	/**
	 * The LinkedList tag.
	 */
	get [Symbol.toStringTag]() {
		return "LinkedList";
	}

	/**
	 * An iterator for the LinkedList to use with `for...of` loops.
	 */
	[Symbol.iterator]() {
		return this.toArray()[Symbol.iterator]();
	}

	[Symbol.isConcatSpreadable]() {
		return true;
	}

	/**
	 * @param values Values to initialize the list
	 */
	constructor(values?: T[]) {
		if (values?.length) this.push(...values);
	}

	/**
	 * Creates a LinkedList from an array.
	 *
	 * @param values Values to create LinkedList from
	 * @returns LinkedList created from array
	 */
	static from<T>(values: T[]) {
		return new LinkedList(values);
	}

	/**
	 * Creates a LinkedList from a string.
	 *
	 * @param str String to create LinkedList from
	 * @returns LinkedList created from string
	 */
	static fromString<V>(str: string) {
		str = str.replace(/LinkedList/g, "").trim();
		let values: V[] = [];
		try {
			const parsedStr = JSON.parse(str);
			if (Array.isArray(parsedStr)) values = parsedStr;
			else values = [parsedStr];
		} catch {
			throw new Error("Invalid JSON");
		}
		return new LinkedList<V>(values);
	}

	/**
	 * Add value to end of list.
	 *
	 * @param value Value to add to end of list
	 * @returns Entire linked list
	 */
	push(...value: T[]) {
		if (value.length === 0) return this;
		for (const item of value) this._push(item);
		return this;
	}

	private _push(value: T) {
		const newNode = new Node(value);

		if (!this._head || !this._tail) {
			this._head = newNode;
			this._tail = newNode;
			this._size = 1;
			return;
		}

		this._tail.next = newNode;
		this._tail = newNode;
		this._size++;
	}

	/**
	 * Remove node from end of list.
	 *
	 * @returns Removed node
	 */
	pop() {
		if (!this._head) return undefined;

		let temp = this._head;
		let pre = this._head;

		while (temp.next) {
			pre = temp;
			temp = temp.next;
		}

		this._tail = pre;
		this._tail.next = undefined;

		this._size--;

		if (this._size === 0) {
			this._head = undefined;
			this._tail = undefined;
		}

		return temp;
	}

	/**
	 * Add value to beginning of list.
	 *
	 * @param value Value to add to beginning of list
	 * @returns Entire linked list
	 */
	unshift(...value: T[]) {
		if (value.length === 0) return this;
		for (const item of [...value].reverse()) this._unshift(item);
		return this;
	}

	private _unshift(value: T) {
		const newNode = new Node(value);

		if (!this._head) {
			this._head = newNode;
			this._tail = newNode;
		} else {
			newNode.next = this._head;
			this._head = newNode;
		}

		this._size++;
	}

	/**
	 * Remove node from beginning of list.
	 *
	 * @returns Removed node
	 */
	shift() {
		if (!this._head) return undefined;

		const temp = this._head;
		this._head = this._head.next;
		temp.next = undefined;

		this._size--;

		if (this._size === 0) this._tail = undefined;

		return temp;
	}

	/**
	 * Get node at an index.
	 *
	 * @param index Index of node to get
	 * @returns Node at index
	 */
	get(index: number) {
		if (index < 0 || index >= this._size) return undefined;

		let temp = this._head;
		for (let i = 0; i < index; i++) temp = temp?.next;
		return temp;
	}

	/**
	 * Set node at an index to a value.
	 *
	 * @param index Index of node to set
	 * @param value Value to set node to
	 * @returns Node at index
	 */
	set(index: number, value: T) {
		const temp = this.get(index);
		if (temp) temp.value = value;
		return temp;
	}

	/**
	 * Insert value at an index.
	 *
	 * @param index Index to insert value at
	 * @param value Value to insert
	 * @returns Entire linked list
	 */
	insert(index: number, ...value: T[]) {
		if (value.length === 0) return undefined;
		if (index === 0) return this.unshift(...value);
		if (index === this._size) return this.push(...value);
		if (index < 0 || index > this._size) return undefined;

		for (const item of [...value].reverse()) this._insert(index, item);
		return this;
	}

	private _insert(index: number, value: T) {
		const newNode = new Node(value);
		// biome-ignore lint/style/noNonNullAssertion: this is guaranteed to be defined
		const temp = this.get(index - 1)!;

		newNode.next = temp.next;
		temp.next = newNode;

		this._size++;
	}

	/**
	 * Remove node at an index.
	 *
	 * @param index Index of node to remove
	 * @returns Removed node
	 */
	remove(index: number) {
		if (index === 0) return this.shift();
		if (index === this._size - 1) return this.pop();
		if (index < 0 || index >= this._size) return undefined;

		// biome-ignore lint/style/noNonNullAssertion: this is guaranteed to be defined
		const before = this.get(index - 1)!;
		// biome-ignore lint/style/noNonNullAssertion: this is guaranteed to be defined
		const temp = before.next!;

		before.next = temp.next;
		temp.next = undefined;

		this._size--;

		return temp;
	}

	/**
	 * Reverse the linked list.
	 *
	 * @returns Entire reversed linked list
	 */
	reverse() {
		if (this._size <= 1) return this;

		let temp = this._head;
		this._head = this._tail;
		this._tail = temp;

		// biome-ignore lint/style/noNonNullAssertion: this is guaranteed to be defined
		let next = temp!.next;
		let prev = undefined;

		for (let i = 0; i < this._size; i++) {
			next = temp?.next;
			// biome-ignore lint/style/noNonNullAssertion: this is guaranteed to be defined
			temp!.next = prev;
			prev = temp;
			temp = next;
		}

		return this;
	}

	/**
	 * @returns A copy of the LinkedList
	 */
	copy() {
		return new LinkedList(this.toArray());
	}

	/**
	 * @returns The LinkedList as a string.
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
	 * Converts the LinkedList to a string used by `JSON.stringify()`.
	 *
	 * @returns The LinkedList as a string
	 */
	toJSON() {
		return this.toArray();
	}

	/**
	 * Converts the LinkedList to an array.
	 *
	 * @returns The LinkedList as an array
	 */
	toArray() {
		const values: T[] = [];
		let temp = this._head;
		while (temp) {
			values.push(temp.value);
			temp = temp.next;
		}
		return values;
	}
}

/**
 * A node class for the LinkedList.
 *
 * **Methods:**
 * - `toString` - Returns the Node as a string.
 * - `toJSON` - Converts the Node to a string used by `JSON.stringify()`.
 * - `toObject` - Converts the Node to an object.
 *
 * **Properties:**
 * - `value` - Value stored in node.
 * - `next` - Next node in linked list.
 *
 * @template T Type of value stored in node
 *
 * @example
 * ```ts
 * const node = new Node(1);
 * // Node { value: 1, next: undefined }
 * ```
 */
class Node<T> {
	value: T;
	next: Node<T> | undefined;

	/**
	 * The Node tag.
	 */
	get [Symbol.toStringTag]() {
		return "LinkedListNode";
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
