let types: any = null;

try {
	({ types } = require("node:util"));
} catch {
	try {
		({ types } = require("util"));
	} catch {
		types = null;
	}
}

export { types };
