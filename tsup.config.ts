import { defineConfig } from "tsup";

const env = process.env.NODE_ENV;

export default defineConfig({
	entryPoints: ["src/index.ts"],
	entry: ["src/**/*.ts"],
	format: ["esm", "cjs"],
	outDir: env === "production" ? "dist" : "lib",
	minify: env === "production" ? "terser" : false,
	bundle: env === "production",
	splitting: true,
	treeshake: true,
	sourcemap: true,
	clean: true,
	dts: true,
	skipNodeModulesBundle: true,
	esbuildOptions(options, context) {
		if (context.format === "esm")
			options.inject = ["./shims/buffer.js", "./shims/crypto.js"];
		else if (context.format === "cjs")
			options.inject = ["./shims/buffer.cjs", "./shims/crypto.cjs"];
	},
});
