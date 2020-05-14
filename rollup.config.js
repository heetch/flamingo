import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import svgr from '@svgr/rollup';
import typescript from 'rollup-plugin-typescript2';
import url from 'rollup-plugin-url';
import visualizer from 'rollup-plugin-visualizer';

import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    babel({
      babelHelpers: 'bundled',
    }),
    commonjs(),
    external(),
    postcss({
      modules: {
        globalModulePaths: [/node_modules\/react-day-picker/],
      },
    }),
    resolve(),
    svgr(),
    typescript({
      tsconfig: './tsconfig.json',
    }),
    url(),
    visualizer({
      filename: 'dist/stats.html',
      gzipSize: true,
    }),
  ],
};
