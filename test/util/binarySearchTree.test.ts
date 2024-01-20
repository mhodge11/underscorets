import { util } from "../../src/index.ts";

function initTree() {
	const tree = new util.BinarySearchTree<number>();
	tree.insert(10);
	tree.insert(5);
	tree.insert(15);
	tree.insert(2);
	tree.insert(7);
	tree.insert(12);
	tree.insert(17);
	return tree;
}

const treeToString = "BinarySearchTree [10,5,15,2,7,12,17]";
const nodeToString =
	'BinarySearchTreeNode {"value":10,"count":1,"left":{"value":5,"count":1,"left":{"value":2,"count":1},"right":{"value":7,"count":1}},"right":{"value":15,"count":1,"left":{"value":12,"count":1},"right":{"value":17,"count":1}}}';

test("creates a new tree", () => {
	const tree = new util.BinarySearchTree();
	expect(tree).toBeInstanceOf(util.BinarySearchTree);
});

test("creates a new tree with initial values", () => {
	const tree = new util.BinarySearchTree({ values: [10] });
	expect(tree.raw?.value).toBe(10);
});

test("creates a new tree with initial values and a custom comparator", () => {
	const tree = new util.BinarySearchTree({
		values: [10],
		compare: (a, b) => (a > b ? -1 : a < b ? 1 : 0),
	});
	expect(tree.raw?.value).toBe(10);
	expect(tree.compare(2, 1)).toBe(-1);
	expect(tree.compare(1, 2)).toBe(1);
	expect(tree.compare(1, 1)).toBe(0);
});

test("creates a new tree using the from method", () => {
	const tree = util.BinarySearchTree.from([10]);
	expect(tree.raw?.value).toBe(10);
});

test("creates a new tree using the fromString method", () => {
	const tree = util.BinarySearchTree.fromString("10");
	expect(tree.raw?.value).toBe(10);

	const tree1 = util.BinarySearchTree.fromString("[10,5,15,2,7,12,17]");
	expect(tree1.raw?.value).toBe(10);

	const tree2 = util.BinarySearchTree.fromString("[]");
	expect(tree2.raw).toBeUndefined();

	const tree3 = util.BinarySearchTree.fromString("[10]");
	expect(tree3.raw?.value).toBe(10);

	const tree4 = util.BinarySearchTree.fromString(
		"BinarySearchTree [10,5,15,2,7,12,17]",
	);
	expect(tree4.raw?.value).toBe(10);

	expect(() => util.BinarySearchTree.fromString("foo")).toThrow(Error);
});

test("creates a new tree which allows duplicates", () => {
	const tree = new util.BinarySearchTree({
		values: [10],
		allowDuplicates: true,
	});
	expect(tree.raw?.value).toBe(10);
	expect(tree.allowDuplicates).toBe(true);
});

test("ignores duplicates if the allowDuplicates option is not set", () => {
	const tree = new util.BinarySearchTree({ values: [10, 10, 10, 4, 3, 2, 3] });
	expect(tree.size).toBe(4);
	expect(tree.raw?.count).toBe(1);
	expect(tree.raw?.left?.count).toBe(1);
	expect(tree.raw?.left?.left?.count).toBe(1);
	expect(tree.raw?.left?.left?.left?.count).toBe(1);
});

test("allows duplicates if the allowDuplicates option is set to true", () => {
	const tree = new util.BinarySearchTree({
		values: [10, 10, 10, 4, 3, 2, 3],
		allowDuplicates: true,
	});
	expect(tree.size).toBe(7);
	expect(tree.raw?.count).toBe(3);
	expect(tree.raw?.left?.count).toBe(1);
	expect(tree.raw?.left?.left?.count).toBe(2);
	expect(tree.raw?.left?.left?.left?.count).toBe(1);
});

test("compare function can be set after initialization", () => {
	const tree = new util.BinarySearchTree({
		values: [10],
	});
	expect(tree.raw?.value).toBe(10);
	expect(tree.compare(1, 2)).toBe(-1);
	expect(tree.compare(2, 1)).toBe(1);
	expect(tree.compare(1, 1)).toBe(0);

	tree.compare = (a, b) => (a > b ? -1 : a < b ? 1 : 0);
	expect(tree.compare(2, 1)).toBe(-1);
	expect(tree.compare(1, 2)).toBe(1);
	expect(tree.compare(1, 1)).toBe(0);
});

test("insert values into the tree", () => {
	const tree = initTree();
	expect(tree.raw?.value).toBe(10);
	expect(tree.raw?.left?.value).toBe(5);
	expect(tree.raw?.right?.value).toBe(15);
	expect(tree.raw?.left?.left?.value).toBe(2);
	expect(tree.raw?.left?.right?.value).toBe(7);
	expect(tree.raw?.right?.left?.value).toBe(12);
	expect(tree.raw?.right?.right?.value).toBe(17);
});

test("test values in tree to see if a value is contained", () => {
	const tree = initTree();
	expect(tree.contains(10)).toBe(true);
	expect(tree.contains(5)).toBe(true);
	expect(tree.contains(15)).toBe(true);
	expect(tree.contains(2)).toBe(true);
	expect(tree.contains(7)).toBe(true);
	expect(tree.contains(12)).toBe(true);
	expect(tree.contains(17)).toBe(true);
	expect(tree.contains(1)).toBe(false);
	expect(tree.contains(3)).toBe(false);
	expect(tree.contains(4)).toBe(false);
});

test("finds a value in the tree and returns the node", () => {
	const tree = initTree();

	const node = tree.get(10);
	expect(node?.value).toBe(10);
	expect(node?.count).toBe(1);
	expect(node?.left?.value).toBe(5);
	expect(node?.left?.count).toBe(1);
	expect(node?.right?.value).toBe(15);
	expect(node?.right?.count).toBe(1);

	const node1 = tree.get(300);
	expect(node1).toBeUndefined;

	const node2 = tree.get(2);
	expect(node2?.value).toBe(2);
	expect(node2?.count).toBe(1);
});

test("finds the min value node in the tree", () => {
	const tree = initTree();
	const node = tree.minValueNode();
	expect(node?.value).toBe(2);
	expect(node?.count).toBe(1);
});

test("finds the max value node in the tree", () => {
	const tree = initTree();
	const node = tree.maxValueNode();
	expect(node?.value).toBe(17);
	expect(node?.count).toBe(1);
});

test("returns the size of the tree", () => {
	const tree = initTree();
	expect(tree.size).toBe(7);
});

test("returns the tree with depth first search in pre order", () => {
	const tree = initTree();
	const values = tree.dfsPreOrder();
	expect(values).toEqual([10, 5, 2, 7, 15, 12, 17]);
});

test("returns the tree with depth first search in post order", () => {
	const tree = initTree();
	const values = tree.dfsPostOrder();
	expect(values).toEqual([2, 7, 5, 12, 17, 15, 10]);
});

test("returns the tree with depth first search in order", () => {
	const tree = initTree();
	const values = tree.dfsInOrder();
	expect(values).toEqual([2, 5, 7, 10, 12, 15, 17]);
});

test("returns the tree with breadth first search", () => {
	const tree = initTree();
	const values = tree.bfs();
	expect(values).toEqual([10, 5, 15, 2, 7, 12, 17]);
});

test("copies the tree", () => {
	const tree = initTree();
	const copy = tree.copy();
	expect(copy).not.toBe(tree);
	expect(copy.raw).not.toBe(tree.raw);
	expect(copy.raw).toEqual(tree.raw);
	expect(copy.size).toEqual(tree.size);
});

test("toString returns a string representation of the tree", () => {
	const tree = initTree();
	const str = tree.toString();
	expect(str).toBe(treeToString);
});

test("toJSON returns a string representation of the tree", () => {
	const tree = initTree();
	expect(JSON.stringify(tree)).toBe(JSON.stringify(tree.bfs()));
});

test("toObject returns an object representation of the tree", () => {
	const tree = initTree();
	const obj = tree.toObject();
	expect(obj).toEqual({
		value: 10,
		count: 1,
		left: {
			value: 5,
			count: 1,
			left: {
				value: 2,
				count: 1,
			},
			right: {
				value: 7,
				count: 1,
			},
		},
		right: {
			value: 15,
			count: 1,
			left: {
				value: 12,
				count: 1,
			},
			right: {
				value: 17,
				count: 1,
			},
		},
	});
});

test("tree is iterable", () => {
	const tree = initTree();
	for (const value of tree) {
		expect(value).toBeDefined();
	}
	const values = [...tree];
	expect(values).toEqual([10, 5, 15, 2, 7, 12, 17]);
});

test("tree is concatable", () => {
	const tree = initTree();
	expect(tree[Symbol.isConcatSpreadable]()).toBe(true);
});

test("tree is spreadable", () => {
	const tree = initTree();
	expect([...tree]).toEqual([10, 5, 15, 2, 7, 12, 17]);
});

test("node is stringifiable", () => {
	const tree = initTree();
	const node = tree.raw;
	expect(node?.toString()).toBe(nodeToString);
});

test("node is jsonifiable", () => {
	const tree = initTree();
	const node = tree.raw;
	expect(JSON.stringify(node)).toBe(
		nodeToString.replace("BinarySearchTreeNode ", ""),
	);
});

test("breaks out if root is undefined", () => {
	const tree = new util.BinarySearchTree<number>();
	expect(tree.contains(10)).toBe(false);
	expect(tree.get(10)).toBeUndefined();
	expect(tree.minValueNode()).toBeUndefined();
	expect(tree.maxValueNode()).toBeUndefined();
	expect(tree.size).toBe(0);
	expect(tree.dfsPreOrder()).toEqual([]);
	expect(tree.dfsPostOrder()).toEqual([]);
	expect(tree.dfsInOrder()).toEqual([]);
	expect(tree.bfs()).toEqual([]);
});
