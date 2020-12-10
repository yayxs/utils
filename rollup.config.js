import { nodeResolve } from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import { uglify } from "rollup-plugin-uglify";
import json from "@rollup/plugin-json";
import pkg from "./package.json";
export default [
  {
    input: "src/main.js",
    output: {
      file: pkg.browser,
      name: "vastUtils",
      format: "umd",
    },
    plugins: [
      nodeResolve(),
      babel({
        exclude: "node_modules/**",
      }),
      ,
      terser(),
      uglify(),
      json(),
    ],
  },
  {
    input: "src/main.js",
    external: ["ms"],
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" },
    ],
    plugins: [json()],
  },
];
