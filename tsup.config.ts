import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx"],
  outDir: "dist",
  format: ["esm"],
  clean: true,
  shims: true,
  dts: false, // Disable dts for now - OpenTUI doesn't export proper types
  platform: "node",
  target: "esnext",
  external: ["react", "react-dom", "@opentui/core", "@opentui/react", "bun"],
  noExternal: [],
});