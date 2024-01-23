import { defineConfig } from "tsup";

const env = process.env.NODE_ENV;

export default defineConfig({
	entryPoints: ["src/index.ts"],
	entry: ["src/**/*"],
	format: ["esm", "cjs"],
	bundle: env === "production",
	minify: env === "production" ? "terser" : false,
	outDir: env === "production" ? "dist" : "lib",
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
