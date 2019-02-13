import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      name: 'XMotion',
      file: pkg.main,
      format: 'umd',
      globals: {
        raf: 'raf'
      }
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  external: ['raf'],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    terser()
  ]
}
