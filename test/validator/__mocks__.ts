// @ts-expect-error: For testing purposes
export function toArgs(array) {
	return (() => {
		// biome-ignore lint/style/noArguments: For testing purposes
		return arguments;
	}).apply(undefined, array);
}

export const args = toArgs([1, 2, 3]);
