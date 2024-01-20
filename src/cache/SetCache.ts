import { HASH_UNDEFINED } from "../config/constants.ts";
import { MapCache } from "./MapCache.ts";

export class SetCache {
	data: MapCache;

	get size(): number {
		return this.data.size;
	}

	constructor(values?: any[]) {
		this.data = new MapCache();

		if (values == null) return;

		const { length } = values;
		let index = -1;

		while (++index < length) {
			const value = values[index];
			if (value != null) this.add(value);
		}
	}

	add(value: any): this {
		const { data } = this;
		data.set(value, HASH_UNDEFINED);
		return this;
	}

	has(value: any): boolean {
		const { data } = this;
		return data.has(value);
	}

	push = this.add;
}
