import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import svgr from '@svgr/rollup';
import visualizer from 'rollup-plugin-visualizer';

import pkg from './package.json';

export default {
  input: 'src/index.js',
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
    external(),
    postcss({
      modules: {
        globalModulePaths: [/node_modules\/react-day-picker/],
      },
    }),
    url(),
    svgr(),
    babel(),
    resolve(),
    commonjs({
      namedExports: {
        'body-scroll-lock': ['disableBodyScroll', 'enableBodyScroll'],
        exenv: ['canUseDOM'],
      },
    }),
    visualizer({
      filename: 'dist/stats.html',
      gzipSize: true,
    }),
  ],
};
