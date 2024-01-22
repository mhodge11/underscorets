import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	format: ["esm", "cjs"],
	minify: "terser",
	splitting: true,
	treeshake: true,
	sourcemap: true,
	clean: true,
	outDir: "dist",
	dts: true,
	esbuildOptions(options, context) {
		if (context.format === "esm") options.inject = ["./src/shims/index.ts"];
		else if (context.format === "cjs")
			options.inject = ["./src/shims/index.require.ts"];
	},
});
