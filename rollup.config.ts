
import { defineConfig } from 'rollup'
import type { Plugin,RollupOptions } from 'rollup'
import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'

function createPlugins():Plugin[]{
  return [
    nodeResolve({
      preferBuiltins: true,
    }),
    typescript(),
    commonjs({
      extensions:['.js']
    }),
    json()
  ]
}

const baseEntries:string = `src/index.ts`
const baseConfig = defineConfig({
  input:'src/index.ts',
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
  plugins:createPlugins()
})

export default (commandLineArgs: any): RollupOptions[] =>{
  const isDev = commandLineArgs.watch // 开发环境
  const isProduction = !isDev // 生产环境
  console.warn('isProduction',isProduction)
  return defineConfig([
    baseConfig,
  ])
}
