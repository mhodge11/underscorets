import { BinarySearchTree as _BinarySearchTree } from "./binarySearchTree.ts";
import { castArray as _castArray } from "./castArray.ts";
import { clone as _clone } from "./clone.ts";
import { cloneDeep as _cloneDeep } from "./cloneDeep.ts";
import { DoublyLinkedList as _DoublyLinkedList } from "./doublyLinkedList.ts";
import { HashMap as _HashMap } from "./hashmap.ts";
import { LinkedList as _LinkedList } from "./linkedList.ts";
import { size as _size } from "./size.ts";
import { Stack as _Stack } from "./stack.ts";
import { toArray as _toArray } from "./toArray.ts";
import { toFinite as _toFinite } from "./toFinite.ts";
import { toInteger as _toInteger } from "./toInteger.ts";
import { toLength as _toLength } from "./toLength.ts";
import { toNumber as _toNumber } from "./toNumber.ts";
import { toPath as _toPath } from "./toPath.ts";
import { toPlainObject as _toPlainObject } from "./toPlainObject.ts";
import { toSafeInteger as _toSafeInteger } from "./toSafeInteger.ts";
import { toString as _toString } from "./toString.ts";
import { XYZ as _XYZ } from "./xyz.ts";

export namespace util {
	export type BinarySearchTree<T> = _BinarySearchTree<T>;
	export type DoublyLinkedList<T> = _DoublyLinkedList<T>;
	export type HashMap<T> = _HashMap<T>;
	export type LinkedList<T> = _LinkedList<T>;
	export type Stack<T> = _Stack<T>;
	export type XYZ = _XYZ;

	export const BinarySearchTree = _BinarySearchTree;
	export const DoublyLinkedList = _DoublyLinkedList;
	export const HashMap = _HashMap;
	export const LinkedList = _LinkedList;
	export const Stack = _Stack;
	export const XYZ = _XYZ;

	export const castArray = _castArray;
	export const clone = _clone;
	export const cloneDeep = _cloneDeep;
	export const size = _size;
	export const toArray = _toArray;
	export const toFinite = _toFinite;
	export const toInteger = _toInteger;
	export const toLength = _toLength;
	export const toNumber = _toNumber;
	export const toPath = _toPath;
	export const toPlainObject = _toPlainObject;
	export const toSafeInteger = _toSafeInteger;
	export const toString = _toString;
}

export {
	_BinarySearchTree as BinarySearchTree,
	_DoublyLinkedList as DoublyLinkedList,
	_HashMap as HashMap,
	_LinkedList as LinkedList,
	_Stack as Stack,
	_XYZ as XYZ,
	_castArray as castArray,
	_clone as clone,
	_cloneDeep as cloneDeep,
	_size as size,
	_toArray as toArray,
	_toFinite as toFinite,
	_toInteger as toInteger,
	_toLength as toLength,
	_toNumber as toNumber,
	_toPath as toPath,
	_toPlainObject as toPlainObject,
	_toSafeInteger as toSafeInteger,
	_toString as toString,
};
