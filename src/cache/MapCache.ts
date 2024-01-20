import type { Jsonifiable } from "../types/Jsonifiable.ts";

import { isEqual } from "../validator/isEqual.ts";
import { HashCache } from "./HashCache.ts";

interface Data {
	hash: HashCache;
	map: Map<any, any>;
	string: HashCache;
}

type MapData = HashCache | Map<any, any>;

const isKeyable = (value: unknown): value is Jsonifiable => {
	const type = typeof value;

	return type === "string" ||
		type === "number" ||
		type === "symbol" ||
		type === "boolean"
		? value !== "__proto__"
		: value === null;
};

const getMapData = (map: MapCache, key: unknown): MapData => {
	const { data } = map;

	if (isKeyable(key)) {
		const id = typeof key === "string" ? "string" : "hash";
		return data[id];
	}

	return data.map;
};

export class MapCache {
	data: Data = {
		hash: new HashCache(),
		map: new Map<any, any>(),
		string: new HashCache(),
	};
	size: number = 0;

	constructor(entries?: [any, any][]) {
		this.clear();

		if (entries == null) return;

		const { length } = entries;
		let index: number = -1;

		while (++index < length) {
			const entry: [any, any] | undefined = entries[index];
			if (entry != null) this.set(entry[0], entry[1]);
		}
	}

	clear(): void {
		this.data = {
			hash: new HashCache(),
			map: new Map<any, any>(),
			string: new HashCache(),
		};
		this.size = 0;
	}

	delete(key: any): boolean {
		const data = getMapData(this, key);
		let result = false;

		if (!isKeyable(key)) {
			const map = new Map();

			for (const [mapKey, mapValue] of data as Map<any, any>)
				if (!isEqual(mapKey, key)) map.set(mapKey, mapValue);
				else result = true;

			this.data.map = map;
		} else result = data.delete(key);

		this.size -= result ? 1 : 0;

		return result;
	}

	get(key: any): any | undefined {
		const data = getMapData(this, key);

		if (!isKeyable(key)) {
			for (const [mapKey] of data as Map<any, any>)
				if (isEqual(mapKey, key)) return data.get(mapKey);

			return undefined;
		}

		return data.get(key);
	}

	has(key: any): boolean {
		const data = getMapData(this, key);

		if (!isKeyable(key)) {
			for (const [mapKey] of data as Map<any, any>)
				if (isEqual(mapKey, key)) return true;

			return false;
		}

		return data.has(key);
	}

	set(key: any, value: any): this {
		const data = getMapData(this, key);
		const size = data.size;

		data.set(key, value);

		this.size += data.size === size ? 0 : 1;

		return this;
	}
}
