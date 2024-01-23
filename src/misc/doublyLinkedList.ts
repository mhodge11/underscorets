/**
 * A doubly linked list class with methods to add, remove, and reverse nodes.
 *
 * **Static Methods:**
 * - `from` - Creates a DoublyLinkedList from an array.
 * - `fromString` - Creates a DoublyLinkedList from a string.
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
 * - `copy` - Returns a copy of the DoublyLinkedList.
 * - `toString` - Converts the DoublyLinkedList to a string.
 * - `toJSON` - Converts the DoublyLinkedList to a string used by `JSON.stringify()`.
 * - `toObject` - Converts the DoublyLinkedList to an object.
 * - `toArray` - Returns the DoublyLinkedList as an array.
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
 * const list = new DoublyLinkedList(1, 2, 3);
 * list.push(4, 5, 6);
 * // DoublyLinkedList {
 * //   length: 6,
 * //   head: Node {
 * //     value: 1,
 * //     next: Node {
 * //       value: 2,
 * //       next: ...[Node]
 * //       prev: ...[Node]
 * //     },
 * //     prev: undefined
 * //   },
 * //   tail: Node {
 * //     value: 6,
 * //     next: undefined,
 * //     prev: Node {
 * //       value: 5,
 * //       next: ...[Node]
 * //       prev: ...[Node]
 * //     }
 * //   }
 * // }
 *
 * list.pop();
 * // Node {
 * //   value: 6,
 * //   next: undefined,
 * //   prev: Node {
 * //     value: 5,
 * //     next: ...[Node]
 * //     prev: ...[Node]
 * //   }
 * // }
 *
 * list.unshift(0);
 * // DoublyLinkedList {
 * //   length: 6,
 * //   head: Node {
 * //     value: 0,
 * //     next: Node {
 * //       value: 1,
 * //       next: ...[Node]
 * //       prev: ...[Node]
 * //     },
 * //     prev: undefined
 * //   },
 * //   tail: Node {
 * //     value: 5,
 * //     next: undefined,
 * //     prev: Node {
 * //       value: 4,
 * //       next: ...[Node]
 * //       prev: ...[Node]
 * //     }
 * //   }
 * // }
 *
 * list.shift();
 * // Node {
 * //   value: 0,
 * //   next: Node {
 * //     value: 1,
 * //     next: ...[Node]
 * //     prev: ...[Node]
 * //   },
 * //   prev: undefined
 * // }
 *
 * list.get(2);
 * // Node {
 * //   value: 2,
 * //   next: Node {
 * //     value: 3,
 * //     next: Node {
 * //       value: 4,
 * //       next: ...[Node]
 * //       prev: ...[Node]
 * //     },
 * //     prev: Node {
 * //       value: 1,
 * //       next: ...[Node]
 * //       prev: ...[Node]
 * //     }
 * //   },
 * //   prev: Node {
 * //     value: 1,
 * //     next: ...[Node]
 * //     prev: ...[Node]
 * //   }
 * // }
 *
 * list.set(2, 10);
 * // Node {
 * //   value: 10,
 * //   next: Node {
 * //     value: 3,
 * //     next: Node {
 * //       value: 4,
 * //       next: ...[Node]
 * //       prev: ...[Node]
 * //     },
 * //     prev: Node {
 * //       value: 1,
 * //       next: ...[Node]
 * //       prev: ...[Node]
 * //     }
 * //   },
 * //   prev: Node {
 * //     value: 1,
 * //     next: ...[Node]
 * //     prev: ...[Node]
 * //   }
 * // }
 *
 * list.insert(2, 7, 8, 9);
 * // DoublyLinkedList {
 * //   length: 9,
 * //   head: Node {
 * //     value: 0,
 * //     next: Node {
 * //       value: 1,
 * //       next: Node {
 * //         value: 7,
 * //         next: ...[Node]
 * //         prev: ...[Node]
 * //       },
 * //       prev: Node {
 * //         value: 8,
 * //         next: ...[Node]
 * //         prev: ...[Node]
 * //       }
 * //     },
 * //     prev: undefined
 * //   },
 * //   tail: Node {
 * //     value: 6,
 * //     next: undefined,
 * //     prev: Node {
 * //       value: 5,
 * //       next: ...[Node]
 * //       prev: ...[Node]
 * //     }
 * //   }
 * // }
 *
 * list.remove(2);
 * // Node {
 * //   value: 7,
 * //   next: Node {
 * //     value: 8,
 * //     next: Node {
 * //       value: 9,
 * //       next: ...[Node]
 * //       prev: ...[Node]
 * //     },
 * //     prev: Node {
 * //       value: 1,
 * //       next: ...[Node]
 * //       prev: ...[Node]
 * //     }
 * //   },
 * //   prev: Node {
 * //     value: 1,
 * //     next: ...[Node]
 * //     prev: ...[Node]
 * //   }
 * // }
 *
 * list.reverse();
 * // DoublyLinkedList {
 * //   length: 8,
 * //   head: Node {
 * //     value: 6,
 * //     next: Node {
 * //       value: 5,
 * //       next: Node {
 * //         value: 4,
 * //         next: ...[Node]
 * //         prev: ...[Node]
 * //       },
 * //       prev: Node {
 * //         value: 9,
 * //         next: ...[Node]
 * //         prev: ...[Node]
 * //       }
 * //     },
 * //     prev: undefined
 * //   },
 * //   tail: Node {
 * //     value: 0,
 * //     next: undefined,
 * //     prev: Node {
 * //       value: 1,
 * //       next: ...[Node]
 * //       prev: ...[Node]
 * //     }
 * //   }
 * // }
 * ```
 *
 * @category Misc
 */
export class DoublyLinkedList<T> {
	/**
	 * Number of nodes in linked list.
	 */
	private _size = 0;
	/**
	 * First node in linked list.
	 */
	private _head: Node<T> | undefined;
	/**
	 * Last node in linked list.
	 */
	private _tail: Node<T> | undefined;

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
	 * The DoublyLinkedList tag.
	 */
	get [Symbol.toStringTag]() {
		return "DoublyLinkedList";
	}

	/**
	 * An iterator for the DoublyLinkedList to use with `for...of` loops.
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
	 * Creates a DoublyLinkedList from an array.
	 *
	 * @param values Values to create DoublyLinkedList from
	 * @returns DoublyLinkedList created from array
	 */
	static from<V>(values: V[]) {
		return new DoublyLinkedList<V>(values);
	}

	/**
	 * Creates a DoublyLinkedList from a string.
	 *
	 * @param str String to create DoublyLinkedList from
	 * @returns DoublyLinkedList created from string
	 */
	static fromString<V>(str: string) {
		str = str.replace(/DoublyLinkedList/g, "").trim();
		let values: V[] = [];
		try {
			const parsedStr = JSON.parse(str);
			if (Array.isArray(parsedStr)) values = parsedStr;
			else values = [parsedStr];
		} catch {
			throw new Error("Invalid JSON");
		}
		return new DoublyLinkedList<V>(values);
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
		newNode.prev = this._tail;
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

		const temp = this._tail;

		if (this._size === 1) {
			this._head = undefined;
			this._tail = undefined;
		} else {
			this._tail = this._tail?.prev;
			// biome-ignore lint/style/noNonNullAssertion: guaranteed to be defined
			this._tail!.next = undefined;
			// biome-ignore lint/style/noNonNullAssertion: guaranteed to be defined
			temp!.prev = undefined;
		}

		this._size--;

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

		if (this._size === 0) {
			this._head = newNode;
			this._tail = newNode;
		} else {
			newNode.next = this._head;
			// biome-ignore lint/style/noNonNullAssertion: guaranteed to be defined
			this._head!.prev = newNode;
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
		if (this._size === 0) return undefined;
		if (this._size === 1) return this.pop();

		const temp = this._head;
		this._head = this._head?.next;
		// biome-ignore lint/style/noNonNullAssertion: guaranteed to be defined
		this._head!.prev = undefined;
		// biome-ignore lint/style/noNonNullAssertion: guaranteed to be defined
		temp!.next = undefined;

		this._size--;

		return temp;
	}

	/**
	 * Get node at index.
	 *
	 * @param index Index of node to get
	 * @returns Node at index
	 */
	get(index: number) {
		if (index < 0 || index >= this._size) return undefined;

		let temp = this._head;

		if (index < this._size / 2)
			for (let i = 0; i < index; i++) temp = temp?.next;
		else {
			temp = this._tail;
			for (let i = this._size - 1; i > index; i--) temp = temp?.prev;
		}

		return temp;
	}

	/**
	 * Set value of node at index.
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
	 * Insert value at index.
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
		const before = this.get(index - 1);
		const after = before?.next;

		// biome-ignore lint/style/noNonNullAssertion: guaranteed to be defined
		before!.next = newNode;
		newNode.prev = before;
		newNode.next = after;
		// biome-ignore lint/style/noNonNullAssertion: guaranteed to be defined
		after!.prev = newNode;

		this._size++;
	}

	/**
	 * Remove node at index.
	 *
	 * @param index Index of node to remove
	 * @returns Removed node
	 */
	remove(index: number) {
		if (index === 0) return this.shift();
		if (index === this._size - 1) return this.pop();
		if (index < 0 || index >= this._size) return undefined;

		// biome-ignore lint/style/noNonNullAssertion: guaranteed to be defined
		const temp = this.get(index)!;

		// biome-ignore lint/style/noNonNullAssertion: guaranteed to be defined
		temp.prev!.next = temp?.next;
		// biome-ignore lint/style/noNonNullAssertion: guaranteed to be defined
		temp.next!.prev = temp?.prev;
		temp.next = undefined;
		temp.prev = undefined;

		this._size--;

		return temp;
	}

	/**
	 * Reverse the list.
	 *
	 * @returns Entire linked list
	 */
	reverse() {
		if (this._size <= 1) return this;

		let temp = this._head;
		this._head = this._tail;
		this._tail = temp;

		// biome-ignore lint/style/noNonNullAssertion: this is guaranteed to be defined
		let next = temp!.next;
		// biome-ignore lint/style/noNonNullAssertion: this is guaranteed to be defined
		let prev = temp!.prev;

		for (let i = 0; i < this._size; i++) {
			// biome-ignore lint/style/noNonNullAssertion: this is guaranteed to be defined
			next = temp!.next;
			// biome-ignore lint/style/noNonNullAssertion: this is guaranteed to be defined
			temp!.next = prev;
			// biome-ignore lint/style/noNonNullAssertion: this is guaranteed to be defined
			temp!.prev = next;
			prev = temp;
			temp = next;
		}

		return this;
	}

	/**
	 * @returns A copy of the DoublyLinkedList
	 */
	copy() {
		return new DoublyLinkedList(this.toArray());
	}

	/**
	 * @returns The DoublyLinkedList as a string.
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
	 * Converts the DoublyLinkedList to JSON.
	 *
	 * @returns The DoublyLinkedList as JSON
	 */
	toJSON() {
		return this.toArray();
	}

	/**
	 * Converts the DoublyLinkedList to an array.
	 *
	 * @returns The DoublyLinkedList as an array
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
 * A node in a doubly linked list.
 *
 * **Methods:**
 * - `toString` - Converts the Node to a string.
 * - `toJSON` - Converts the Node to a string used by `JSON.stringify()`.
 * - `toObject` - Converts the Node to an object.
 *
 * **Properties:**
 * - `value` - Value stored in node.
 * - `prev` - Previous node in linked list.
 * - `next` - Next node in linked list.
 *
 * @template T Type of value stored in node
 *
 * @example
 * ```ts
 * const node = new Node(1);
 * // Node { value: 1, prev: undefined, next: undefined }
 * ```
 */
class Node<T> {
	value: T;
	prev: Node<T> | undefined;
	next: Node<T> | undefined;

	/**
	 * The Node tag.
	 */
	get [Symbol.toStringTag]() {
		return "DoublyLinkedListNode";
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
			...(this.prev ? { prev: `${this[Symbol.toStringTag]} {}` } : {}),
			...(this.next ? { next: `${this[Symbol.toStringTag]} {}` } : {}),
		};
	}
}
