#!/usr/bin/env bun

import { build } from "bun";
import reactCompiler from "./bun-plugin-react-compiler";

await build({
  entrypoints: ["./src/index.html"],
  outdir: "dist",
  sourcemap: "external",
  target: "browser",
  minify: true,
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  env: "BUN_PUBLIC_*",
  plugins: [reactCompiler]
});

