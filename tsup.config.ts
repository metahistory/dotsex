import { defineConfig } from "tsup"

export default defineConfig({
   dts: true,
   splitting: false,
   sourcemap: true,
   clean: true,
   format: ["cjs", "esm"],
   entry: ["src/index.ts"],
});
