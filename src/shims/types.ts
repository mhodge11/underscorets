let types: any;

try {
	({ types } = await import("node:util"));
} catch {
	try {
		({ types } = await import("util"));
	} catch {
		types = null;
	}
}

export { types };
