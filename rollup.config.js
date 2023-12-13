import babel from '@rollup/plugin-babel';
import commonjs from "@rollup/plugin-commonjs";
import replace from '@rollup/plugin-replace';
import typescript from "rollup-plugin-typescript2";
import scss from 'rollup-plugin-scss'

const { PRODUCTION } = process.env

export default {
  input: 'src/index.tsx',
  output: {
    file: 'dist/js/index.js',
    format: 'iife',
    globals: {
      'react': 'React',
      'react-dom': 'ReactDOM'
    },
  },
  external: ['react', 'react-dom'],
  plugins: [
    commonjs(),
    typescript({
      rollupCommonJSResolveHack: false,
      clean: true,
    }),
    scss(),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react']
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(
        PRODUCTION ? 'production' : 'development'
      )
    }),
  ]
};
