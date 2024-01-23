import { defineConfig } from "tsup";

export default defineConfig({
	entryPoints: ["src/index.ts"],
	format: ["esm", "cjs"],
	outDir: "dist",
	splitting: true,
	treeshake: true,
	sourcemap: true,
	clean: true,
	dts: true,
	skipNodeModulesBundle: true,
	esbuildOptions(options, context) {
		if (context.format === "esm")
			options.inject = [
				"./shims/buffer.js",
				"./shims/crypto.js",
				"./shims/types.js",
			];
		else if (context.format === "cjs")
			options.inject = [
				"./shims/buffer.cjs",
				"./shims/crypto.cjs",
				"./shims/types.cjs",
			];
	},
});
