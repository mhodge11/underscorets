import { fastArrayFlat } from "../helpers/fastArrayFlat.ts";
import { isPlainObject } from "../validate/isPlainObject.ts";

/**
 * A hashmap.
 *
 * **Static Methods:**
 * - `from` - Creates a hashmap from an object.
 * - `fromString` - Creates a hashmap from a string.
 *
 * **Methods:**
 * - `set` - Set the value of a key. Returns the key and value as a tuple.
 * - `get` - Get the value of a key. Returns the value of the key.
 * - `remove` - Removes a key from the hashmap. Returns the value of the key.
 * - `has` - Check if the hashmap has a key. Returns `true` if the hashmap has the key, `false` otherwise.
 * - `keys` - Returns all the keys in the hashmap.
 * - `copy` - Constructs a new hashmap with the same values as the current hashmap.
 * - `toString` - Returns the hashmap as a string.
 * - `toJSON` - Converts the hashmap to a string used by `JSON.stringify()`.
 * - `toObject` - Converts the hashmap to an object.
 * - `toArray` - Converts the hashmap to an array.
 *
 * **Properties:**
 * - `raw` - The raw data of the hashmap.
 * - `size` - The size of the hashmap.
 * - `hash` - The hash function of the hashmap.
 *
 * @template T The type of the values stored in the hashmap
 *
 * @example
 * ```ts
 * const map = new HashMap<string>();
 *
 * map.set("foo", "bar");
 * // => ["foo", "bar"]
 *
 * map.get("foo");
 * // => "bar"
 *
 * map.has("foo");
 * // => true
 *
 * map.keys();
 * // => ["foo"]
 *
 * map.remove("foo");
 * // => "bar"
 *
 * map.has("foo");
 * // => false
 * ```
 *
 * @category Misc
 */
export class HashMap<T> {
	private _data: [string, T][][];
	private _hash: (key: string) => number;

	/**
	 * The raw data of the hashmap.
	 */
	get raw() {
		return this._data as readonly [string, T][][];
	}

	/**
	 * The size of the hashmap.
	 */
	get size() {
		return this.toArray().length;
	}

	/**
	 * The HashMap tag.
	 */
	get [Symbol.toStringTag]() {
		return "HashMap";
	}

	/**
	 * The hash function of the hashmap.
	 */
	set hash(hashFn: (key: string) => number) {
		this._hash = hashFn;
	}

	/**
	 * An iterator for the hashmap to use with `for...of` loops.
	 */
	[Symbol.iterator]() {
		return this.toArray()[Symbol.iterator]();
	}

	/**
	 * @param size The size of the hashmap. Defaults to 7.
	 */
	constructor(size = 7, hashFn: (key: string) => number = defaultHashFn(size)) {
		this._hash = hashFn;
		this._data = new Array(size);
	}

	/**
	 * Creates a hashmap from an object.
	 *
	 * @param obj The object to create hashmap from
	 * @param size The size of the hashmap. Defaults to 7.
	 * @returns Hashmap created from object
	 */
	static from<V>(obj: { [key: string]: V }, size = 7) {
		const hashmap = new HashMap<V>(size);
		for (const [key, value] of Object.entries(obj)) hashmap.set(key, value);
		return hashmap;
	}

	static fromString<V>(str: string, size = 7) {
		str = str.replace(/HashMap/g, "").trim();
		let values: { [key: string]: V };
		try {
			values = JSON.parse(str);
			if (!isPlainObject(values)) throw new Error();
		} catch {
			throw new Error("Invalid JSON object");
		}
		return HashMap.from<V>(values, size);
	}

	/**
	 * Sets the value of a key in the hashmap.
	 *
	 * @param key The key to set
	 * @param value The value to set the key to
	 * @returns The key and value as a tuple
	 * @throws Throws an error if the index generated by the hash function is out of bounds
	 */
	set(key: string, value: T) {
		const index = this._hash(key);
		const entries = this._data[index];

		if (index >= this._data.length)
			throw new Error(
				"Index out of bounds: try increasing the size of the hashmap or changing the hash function to only return values between 0 and the size of the hashmap",
			);

		if (!entries) {
			this._data[index] = [[key, value]];
			return [key, value] as const;
		}

		const i = entries.findIndex((entry) => entry[0] === key);
		if (i !== -1) {
			// biome-ignore lint/style/noNonNullAssertion: guaranteed to be defined
			entries[i]![1] = value;
			return [key, value] as const;
		}

		entries.push([key, value]);
		return [key, value] as const;
	}

	/**
	 * Gets the value of a key in the hashmap.
	 *
	 * @param key The key to get
	 * @returns The value of the key or `undefined` if the key doesn't exist
	 */
	get(key: string) {
		const index = this._hash(key);
		const entries = this._data[index];

		if (!entries) return undefined;
		return entries.find((entry) => entry[0] === key)?.[1];
	}

	/**
	 * Removes a key from the hashmap.
	 *
	 * @returns The value of the removed key or `undefined` if the key doesn't exist
	 */
	remove(key: string) {
		const index = this._hash(key);
		const entries = this._data[index];

		if (!entries) return undefined;
		const i = entries.findIndex((entry) => entry[0] === key);
		if (i === -1) return undefined;

		const [entry] = entries.splice(i, 1);
		// biome-ignore lint/style/noNonNullAssertion: guaranteed to be defined
		return entry![1];
	}

	/**
	 * Checks if the hashmap has a key.
	 *
	 * @param key The key to check
	 * @returns `true` if the hashmap has the key, `false` otherwise
	 */
	has(key: string) {
		const index = this._hash(key);
		const entries = this._data[index];

		if (!entries) return false;
		return entries.some((entry) => entry[0] === key);
	}

	/**
	 * @returns All the keys in the hashmap
	 */
	keys(): string[] {
		return this.toArray().map(([key]) => key);
	}

	/**
	 * Constructs a new hashmap with the same values as the current hashmap.
	 *
	 * @param size Size of the new hashmap, defaults to the size of the current hashmap
	 * @returns A copy of the hashmap
	 */
	copy(size?: number) {
		const hashmap = new HashMap<T>(size ?? this._data.length);
		// biome-ignore lint/style/noNonNullAssertion: guaranteed to be defined
		for (const key of this.keys()) hashmap.set(key, this.get(key)!);
		return hashmap;
	}

	/**
	 * @returns The hashmap as a string.
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
	 * Converts the hashmap to a string used by `JSON.stringify()`.
	 *
	 * @returns The hashmap as a string
	 */
	toJSON() {
		return this.toObject();
	}

	/**
	 * Converts the hashmap to an object.
	 *
	 * @returns The hashmap as an object
	 */
	toObject() {
		const obj: { [key: string]: T } = {};
		for (const [key, value] of this) obj[key] = value;
		return obj;
	}

	/**
	 * Converts the hashmap to an array.
	 *
	 * @returns The hashmap as an array
	 */
	toArray() {
		const filtered = this._data.filter((entry) => entry !== undefined);
		if (filtered.length === 0) return [];
		return fastArrayFlat(filtered);
	}
}

function defaultHashFn(length = 7) {
	return (key: string) => {
		let hash = 0;
		for (const char of key) hash += (hash + char.charCodeAt(0) * 23) % length;
		return hash;
	};
}