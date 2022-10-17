// import { nodeResolve } from '@rollup/plugin-node-resolve'
// import babel from '@rollup/plugin-babel'
// import { terser } from 'rollup-plugin-terser'
// // import { uglify } from 'rollup-plugin-uglify'
// import json from '@rollup/plugin-json'
// import { utilName } from './package.json'
// import commonjs from 'rollup-plugin-commonjs'
import { defineConfig } from 'rollup'
import type { Plugin, RollupOptions } from 'rollup'
import esbuild from 'rollup-plugin-esbuild'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'

// const rollupConfig = {
//   input: 'src/main.js',
//   output: [
//     {
//       file: 'dist/vast-utils.js',
//       name: utilName,
//       format: 'iife', // 立即执行
//       sourcemap: false,
//     },
//     {
//       file: 'dist/vast-utils.esm.js',
//       format: 'esm',
//       name: utilName,
//       sourcemap: false,
//     },
//     {
//       file: 'dist/vast-utils.umd.js',
//       format: 'umd',
//       name: utilName,
//       sourcemap: false,
//     },
//     {
//       file: 'dist/vast-utils.cjs.js',
//       format: 'cjs',
//       name: utilName,
//       sourcemap: false,
//     },
//     {
//       file: 'dist/vast-utils.amd.js',
//       format: 'amd',
//       amd: {
//         define: 'define',
//       },
//       name: utilName,
//       sourcemap: false,
//     },
//   ],
//   plugins: [
//     nodeResolve(),
//     babel({
//       babelHelpers: 'bundled',
//       exclude: 'node_modules/**',
//     }),
//     commonjs(),
//     json(),
//   ],
//   watch: {
//     chokidar: {},
//     exclude: ['node_modules/**'],
//   },
// }

// if (process.env.NODE_ENV === 'production') {
//   rollupConfig.plugins.push(terser())
// }

const entries:Array<string> = [
  'src/index.ts',
]

const plugins = [
  resolve({
    preferBuiltins: true,
  }),
  json(),
  commonjs(),
  esbuild({
    target: 'node14',
  }),
]
const baseConfig = defineConfig({
  ...entries.map(input => ({
    input,
    output: [
      {
        file: input.replace('src/', 'dist/').replace('.ts', '.mjs'),
        format: 'esm',
      },
      {
        file: input.replace('src/', 'dist/').replace('.ts', '.cjs'),
        format: 'cjs',
      },
    ],
    external: [],
    plugins,
  })),
})


export default (commandLineArgs: any): RollupOptions[] =>{
  const isDev = commandLineArgs.watch // 开发环境
  const isProduction = !isDev // 生产环境
  return defineConfig([
    baseConfig,
  ])

}
