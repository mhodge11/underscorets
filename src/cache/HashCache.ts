import type { Jsonifiable } from "../type/Jsonifiable";
import type { Primitive } from "../type/Primitive";

type Key = Jsonifiable | Primitive;

const HASH_UNDEFINED = "__hash_undefined__";

function toKey(value: Key): string {
	if (typeof value === "string") return value;
	if (typeof value === "number") return value.toString();
	if (typeof value === "boolean") return value.toString();
	if (value === null) return "null";
	if (value === undefined) return "undefined";
	return JSON.stringify(value);
}

export class HashCache {
	data: { [key: string]: any | typeof HASH_UNDEFINED } = Object.create(null);
	size: number = 0;

	constructor(entries?: [Key, any][]) {
		this.clear();

		if (entries == null) return;

		const { length } = entries;
		let index: number = -1;

		while (++index < length) {
			const entry: [Key, any] | undefined = entries[index];
			if (entry != null) this.set(entry[0], entry[1]);
		}
	}

	clear(): void {
		this.data = Object.create(null);
		this.size = 0;
	}

	delete(key: Key): boolean {
		if (!this.has(key)) return false;

		const { data } = this;
		const keyString: string = toKey(key);
		const result: boolean = delete data[keyString];

		this.size--;

		return result;
	}

	get(key: Key): any | undefined {
		const { data } = this;
		const keyString: string = toKey(key);
		const result: any | typeof HASH_UNDEFINED | undefined = data[keyString];

		return result === HASH_UNDEFINED ? undefined : result;
	}

	has(key: Key): boolean {
		const { data } = this;
		const keyString: string = toKey(key);

		return data[keyString] !== undefined;
	}

	set(key: Key, value: any): this {
		this.size += this.has(key) ? 0 : 1;

		const { data } = this;
		const keyString: string = toKey(key);
		data[keyString] = value === undefined ? HASH_UNDEFINED : value;

		return this;
	}
}
