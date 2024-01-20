import { array } from "../../src/index.ts";

const numbers = [2, 4, 5, 6, 7, 8, 9, 10];

test("return the elements from the input array until the predicate returns false", () => {
	const evenNumbers = array.takeWhile(numbers, (n) => n % 2 === 0);
	expect(evenNumbers).toEqual([2, 4]);
});

test("return an empty array if the predicate always returns false", () => {
	const evenNumbers = array.takeWhile(numbers, (n) => n > 10);
	expect(evenNumbers).toEqual([]);
});

test("deal with different types", () => {
	const mixed = [1, 2, 3, "4", 5, "6", 7, "8", 9, "10", [], {}, undefined];
	const evenNumbers = array.takeWhile(mixed, (n) => typeof n === "number");
	expect(evenNumbers).toEqual([1, 2, 3]);
});

test("return an empty array if the input array is empty", () => {
	const evenNumbers = array.takeWhile([], () => true);
	expect(evenNumbers).toEqual([]);
});
