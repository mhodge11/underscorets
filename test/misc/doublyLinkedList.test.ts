import { DoublyLinkedList } from "@misc/index.ts";

test("should create an empty list", () => {
	const list = new DoublyLinkedList();
	expect(list).toBeDefined();
	expect(list.size).toBe(0);
	expect(list.head).toBeUndefined();
	expect(list.tail).toBeUndefined();
});

test("should create a list from an array", () => {
	const list = new DoublyLinkedList([1, 2, 3]);
	expect(list).toBeDefined();
	expect(list.size).toBe(3);
	expect(list.head?.value).toBe(1);
	expect(list.tail?.value).toBe(3);
});

test("is concat iterable", () => {
	const list = new DoublyLinkedList([1, 2, 3]);
	expect(list[Symbol.isConcatSpreadable]()).toBe(true);
});

test("should create a list using the from method", () => {
	const list = DoublyLinkedList.from([1, 2, 3]);
	expect(list).toBeDefined();
	expect(list.size).toBe(3);
	expect(list.head?.value).toBe(1);
	expect(list.tail?.value).toBe(3);
});

test("should create a list using the fromString method", () => {
	const list = DoublyLinkedList.fromString("1");
	expect(list).toBeDefined();
	expect(list.size).toBe(1);
	expect(list.head?.value).toBe(1);
	expect(list.tail?.value).toBe(1);

	const list1 = DoublyLinkedList.fromString("[]");
	expect(list1).toBeDefined();
	expect(list1.size).toBe(0);
	expect(list1.head).toBeUndefined();
	expect(list1.tail).toBeUndefined();

	const list2 = DoublyLinkedList.fromString("[1]");
	expect(list2).toBeDefined();
	expect(list2.size).toBe(1);
	expect(list2.head?.value).toBe(1);
	expect(list2.tail?.value).toBe(1);

	const list3 = DoublyLinkedList.fromString("DoublyLinkedList [1,2,3]");
	expect(list3).toBeDefined();
	expect(list3.size).toBe(3);
	expect(list3.head?.value).toBe(1);
	expect(list3.tail?.value).toBe(3);

	expect(() => DoublyLinkedList.fromString("foo")).toThrow(Error);
});

test("can push values to the list", () => {
	const list = new DoublyLinkedList();
	list.push(1);
	list.push(2);
	list.push(3);
	expect(list.size).toBe(3);
	expect(list.head?.value).toBe(1);
	expect(list.tail?.value).toBe(3);
});

test("can pop values from the list", () => {
	const list = new DoublyLinkedList([1, 2, 3]);
	expect(list.pop()?.value).toBe(3);
	expect(list.pop()?.value).toBe(2);
	expect(list.pop()?.value).toBe(1);
	expect(list.size).toBe(0);
	expect(list.head).toBeUndefined();
	expect(list.tail).toBeUndefined();
});

test("can unshift values to the list", () => {
	const list = new DoublyLinkedList();
	list.unshift(1);
	list.unshift(2);
	list.unshift(3);
	expect(list.size).toBe(3);
	expect(list.head?.value).toBe(3);
	expect(list.tail?.value).toBe(1);
});

test("can shift values from the list", () => {
	const list = new DoublyLinkedList([1, 2, 3]);
	expect(list.shift()?.value).toBe(1);
	expect(list.shift()?.value).toBe(2);
	expect(list.shift()?.value).toBe(3);
	expect(list.size).toBe(0);
	expect(list.head).toBeUndefined();
	expect(list.tail).toBeUndefined();
});

test("can iterate over the list", () => {
	const list = new DoublyLinkedList([1, 2, 3]);
	const values = [];
	for (const value of list) {
		values.push(value);
	}
	expect(values).toEqual([1, 2, 3]);
});

test("can convert the list to an array", () => {
	const list = new DoublyLinkedList([1, 2, 3]);
	expect(list.toArray()).toEqual([1, 2, 3]);
});

test("can convert the list to a string", () => {
	const list = new DoublyLinkedList([1, 2, 3]);
	expect(list.toString()).toBe("DoublyLinkedList [1,2,3]");
});

test("can convert the list to a string using JSON.stringify", () => {
	const list = new DoublyLinkedList([1, 2, 3]);
	expect(JSON.stringify(list)).toBe("[1,2,3]");
});

test("can reverse list", () => {
	const list = new DoublyLinkedList([1, 2, 3]);
	list.reverse();
	expect(list.toArray()).toEqual([3, 2, 1]);
});

test("can get value at index", () => {
	const list = new DoublyLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	expect(list.get(0)?.value).toBe(1);
	expect(list.get(1)?.value).toBe(2);
	expect(list.get(2)?.value).toBe(3);
	expect(list.get(3)?.value).toBe(4);
	expect(list.get(4)?.value).toBe(5);
	expect(list.get(5)?.value).toBe(6);
	expect(list.get(6)?.value).toBe(7);
	expect(list.get(7)?.value).toBe(8);
	expect(list.get(8)?.value).toBe(9);
});

test("can set value at index", () => {
	const list = new DoublyLinkedList([1, 2, 3]);
	list.set(0, 4);
	list.set(1, 5);
	list.set(2, 6);
	expect(list.toArray()).toEqual([4, 5, 6]);
});

test("can insert value at index", () => {
	const list = new DoublyLinkedList([1, 2, 3]);
	list.insert(0, 4);
	list.insert(1, 5);
	list.insert(2, 6);
	list.insert(6, 7);
	expect(list.toArray()).toEqual([4, 5, 6, 1, 2, 3, 7]);
});

test("can remove value at index", () => {
	const list = new DoublyLinkedList([1, 2, 3, 4]);
	list.remove(0);
	list.remove(1);
	list.remove(1);
	list.remove(1);
	expect(list.toArray()).toEqual([2]);
});

test("can copy list", () => {
	const list = new DoublyLinkedList([1, 2, 3]);
	const copy = list.copy();
	expect(copy).not.toBe(list);
	expect(copy.head).not.toBe(list.head);
	expect(copy.tail).not.toBe(list.tail);
	expect(copy.toArray()).toEqual([1, 2, 3]);
});

test("can get string for Node", () => {
	const list = new DoublyLinkedList([1]);
	const node = list.head;
	expect(node?.toString()).toBe('DoublyLinkedListNode {"value":1}');

	list.push(2, 3);

	const node1 = list.head;
	expect(node1?.toString()).toBe(
		'DoublyLinkedListNode {"value":1,"next":"DoublyLinkedListNode {}"}',
	);

	const node2 = list.head?.next;
	expect(node2?.toString()).toBe(
		'DoublyLinkedListNode {"value":2,"prev":"DoublyLinkedListNode {}","next":"DoublyLinkedListNode {}"}',
	);

	const node3 = list.tail;
	expect(node3?.toString()).toBe(
		'DoublyLinkedListNode {"value":3,"prev":"DoublyLinkedListNode {}"}',
	);
});

test("can push nothing to the list", () => {
	const list = new DoublyLinkedList();
	list.push();
	expect(list.size).toBe(0);
	expect(list.head).toBeUndefined();
	expect(list.tail).toBeUndefined();
});

test("can pop when list is empty", () => {
	const list = new DoublyLinkedList();
	expect(list.pop()).toBeUndefined();
});

test("can unshift nothing to the list", () => {
	const list = new DoublyLinkedList();
	list.unshift();
	expect(list.size).toBe(0);
	expect(list.head).toBeUndefined();
	expect(list.tail).toBeUndefined();
});

test("can insert nothing to the list", () => {
	const list = new DoublyLinkedList();
	list.insert(0);
	expect(list.size).toBe(0);
	expect(list.head).toBeUndefined();
	expect(list.tail).toBeUndefined();
});

test("can shift when list is empty", () => {
	const list = new DoublyLinkedList();
	expect(list.shift()).toBeUndefined();
});

test("get undefined when index is out of bounds", () => {
	const list = new DoublyLinkedList();
	expect(list.get(-1)).toBeUndefined();
	expect(list.get(0)).toBeUndefined();
});

test("insert returns undefined when index is out of bounds", () => {
	const list = new DoublyLinkedList();
	expect(list.insert(-1, 1)).toBeUndefined();
	expect(list.insert(1, 1)).toBeUndefined();
});

test("reverse returns list directly when length is less than 2", () => {
	const list = new DoublyLinkedList([1]);
	list.reverse();
	expect(list.toArray()).toEqual([1]);
});
