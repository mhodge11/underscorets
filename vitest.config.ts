/// <reference types="vitest" />
// Configure Vitest (https://vitest.dev/config/)

import { fileURLToPath } from "node:url";
import { defineProject } from "vitest/config";

function getPath(path: string) {
	return fileURLToPath(new URL(path, import.meta.url));
}

export default defineProject({
	test: {
		globals: true,
		environment: "edge-runtime",
		coverage: {
			include: ["**/src/**/*.ts"],
			exclude: [
				"**/dist/**/*.{js,cjs,ts}",
				"**/test/**/*.ts",
				"**/helpers/**/*.ts",
				"**/shims/**/*.ts",
				"**/type/**/*.ts",
				"**/src/index.ts",
				"**/utils.ts",
			],
		},
	},
	resolve: {
		alias: {
			"@array": getPath("src/array"),
			"@cache": getPath("src/cache"),
			"@config": getPath("src/config"),
			"@crypto": getPath("src/crypto"),
			"@decorator": getPath("src/decorator"),
			"@function": getPath("src/function"),
			"@helpers": getPath("src/helpers"),
			"@ksuid": getPath("src/ksuid"),
			"@misc": getPath("src/misc"),
			"@number": getPath("src/number"),
			"@object": getPath("src/object"),
			"@promise": getPath("src/promise"),
			"@string": getPath("src/string"),
			"@type": getPath("src/type"),
			"@uuid": getPath("src/uuid"),
			"@validate": getPath("src/validate"),
		},
	},
});
