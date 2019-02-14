import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    },
    {
      name: 'XMotion',
      file: pkg.browser,
      format: 'umd',
      globals: {
        raf: 'raf'
      }
    }
  ],
  external: ['raf'],
  plugins: [
    resolve({ extensions }),
    commonjs(),
    babel({
      extensions,
      exclude: 'node_modules/**'
    }),
    terser()
  ]
}
