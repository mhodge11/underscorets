import { defineConfig } from "tsup";

const env = process.env.NODE_ENV;

export default defineConfig({
	entryPoints: ["src/index.ts"],
	format: ["esm", "cjs"],
	outDir: "dist",
	target: ["esnext", "node16"],
	clean: env !== "production",
	minify: env === "production" ? "terser" : false,
	splitting: true,
	treeshake: true,
	sourcemap: true,
	dts: env !== "production",
	skipNodeModulesBundle: true,
	outExtension({ format }) {
		const prefix = env === "production" ? ".min" : "";
		const jsSuffix = format === "cjs" ? ".cjs" : ".js";
		const js = `${prefix}${jsSuffix}`;
		return { js };
	},
	esbuildOptions(options, context) {
		if (context.format === "esm")
			options.inject = ["./shims/buffer.js", "./shims/crypto.js"];
		else if (context.format === "cjs")
			options.inject = [
				"./shims/buffer.require.js",
				"./shims/crypto.require.js",
			];
	},
});
