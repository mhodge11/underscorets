import type { Jsonifiable } from "../types/Jsonifiable.ts";

import { HASH_UNDEFINED } from "../config/constants.ts";
import { toKey } from "../helpers/toKey.ts";

export class HashCache {
	data: { [key: string]: any | typeof HASH_UNDEFINED } = Object.create(null);
	size: number = 0;

	constructor(entries?: [Jsonifiable, any][]) {
		this.clear();

		if (entries == null) return;

		const { length } = entries;
		let index: number = -1;

		while (++index < length) {
			const entry: [Jsonifiable, any] | undefined = entries[index];
			if (entry != null) this.set(entry[0], entry[1]);
		}
	}

	clear(): void {
		this.data = Object.create(null);
		this.size = 0;
	}

	delete(key: Jsonifiable): boolean {
		if (!this.has(key)) return false;

		const { data } = this;
		const keyString: string = toKey(key);
		const result: boolean = delete data[keyString];

		this.size--;

		return result;
	}

	get(key: Jsonifiable): any | undefined {
		const { data } = this;
		const keyString: string = toKey(key);
		const result: any | typeof HASH_UNDEFINED | undefined = data[keyString];

		return result === HASH_UNDEFINED ? undefined : result;
	}

	has(key: Jsonifiable): boolean {
		const { data } = this;
		const keyString: string = toKey(key);

		return data[keyString] !== undefined;
	}

	set(key: Jsonifiable, value: any): this {
		this.size += this.has(key) ? 0 : 1;

		const { data } = this;
		const keyString: string = toKey(key);
		data[keyString] = value === undefined ? HASH_UNDEFINED : value;

		return this;
	}
}
