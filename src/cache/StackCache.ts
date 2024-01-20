import { LARGE_ARRAY_SIZE } from "../config/constants.ts";
import { ListCache } from "./ListCache.ts";
import { MapCache } from "./MapCache.ts";

export class StackCache {
	data: ListCache | MapCache;

	get size(): number {
		return this.data.size;
	}

	constructor(entries?: [any, any][]) {
		this.data = new ListCache(entries);
	}

	clear(): void {
		this.data = new ListCache();
	}

	delete(key: any): boolean {
		const { data } = this;
		const result = data.delete(key);

		return result;
	}

	get(key: any): any | undefined {
		const { data } = this;
		return data.get(key);
	}

	has(key: any): boolean {
		const { data } = this;
		return data.has(key);
	}

	set(key: any, value: any): this {
		let { data } = this;

		if (data instanceof ListCache) {
			const pairs = data.data;

			if (pairs.length < LARGE_ARRAY_SIZE - 1) {
				data.set(key, value);
				return this;
			}

			data = this.data = new MapCache(pairs);
		}

		data.set(key, value);

		return this;
	}
}
