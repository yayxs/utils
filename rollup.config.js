import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { defineConfig } from 'rollup'

function createPlugins() {
  return [
    nodeResolve({
      preferBuiltins: true,
    }),
    typescript(),
    commonjs({
      extensions: ['.js'],
    }),
    json(),
  ]
}

const baseEntries = `src/index.ts`
const baseConfig = defineConfig({
  input: 'src/index.ts',
  output: [
    {
      file: baseEntries.replace('src/', 'dist/').replace('.ts', '.mjs'),
      format: 'esm',
    },
    {
      file: baseEntries.replace('src/', 'dist/').replace('.ts', '.cjs'),
      format: 'cjs',
    },
  ],
  plugins: createPlugins(),
})

export default () => {
  return defineConfig([
    baseConfig,
  ])
}
