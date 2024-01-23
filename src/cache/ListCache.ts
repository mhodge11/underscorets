import { isEqual } from "../validate/isEqual";

function assocIndexOf(array: [any, any][], key: any): number {
	if (!array?.length) return -1;

	let { length } = array;
	while (length--) {
		const entry = array[length];
		if (isEqual((entry as any)[0], key)) return length;
	}

	return -1;
}

export class ListCache {
	data: [any, any][] = [];
	size: number = 0;

	constructor(entries?: [any, any][]) {
		this.clear();

		if (entries == null) return;

		const { length } = entries;
		let index = -1;

		while (++index < length) {
			const entry: [any, any] | undefined = entries[index];
			if (entry != null) this.set(entry[0], entry[1]);
		}
	}

	clear(): void {
		this.data = [];
		this.size = 0;
	}

	delete(key: any): boolean {
		const { data } = this;
		const index = assocIndexOf(data, key);

		if (index < 0) return false;

		const lastIndex = data.length - 1;

		if (index === lastIndex) data.pop();
		else data.splice(index, 1);

		this.size--;

		return true;
	}

	get(key: any): any | undefined {
		const { data } = this;
		const index = assocIndexOf(data, key);

		if (index < 0) return undefined;

		const entry = data[index];
		return (entry as any)[1];
	}

	has(key: any): boolean {
		const { data } = this;
		return assocIndexOf(data, key) > -1;
	}

	set(key: any, value: any): this {
		const { data } = this;
		const index = assocIndexOf(data, key);

		if (index < 0) {
			this.size += 1;
			data.push([key, value]);
		} else {
			const entry = data[index];
			if (entry != null) entry[1] = value;
		}

		return this;
	}
}
