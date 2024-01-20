/// <reference types="vitest" />
// Configure Vitest (https://vitest.dev/config/)

import { defineProject } from "vitest/config";
import { types } from "./src/shims/types.require.ts";

export default defineProject({
	define: {
		types,
	},
	test: {
		globals: true,
		environment: "edge-runtime",
		coverage: {
			include: ["**/src/**/*.{js,cjs,ts,cts}"],
			exclude: [
				"**/dist/**/*.{js,cjs,ts}",
				"**/test/**/*.ts",
				"**/helpers/**/*.{ts,cts}",
				"**/shims/**/*.{ts,cts}",
				"**/types/*.ts",
			],
		},
	},
});
