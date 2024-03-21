import { defineConfig } from "rollup";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
export default defineConfig({
  input: "src/main.ts",
  output: {
    dir: "dist",
    format: "cjs",
    sourcemap: true,
    manualChunks: {
      lodash: ["lodash"],
    },
  },
  plugins: [typescript(), commonjs(), resolve()],
});
