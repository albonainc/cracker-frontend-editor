import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import scss from 'rollup-plugin-scss';
import pkg from './package.json' assert { type: 'json' };

const toCamelCase = (str, upper) => {
  if (typeof str !== 'string') return str;

  var strs = str.split(/[-_ ]+/),
    i = 1,
    len = strs.length;

  if (len <= 1) return str;

  if (upper) {
    i = 0;
    str = '';
  } else {
    str = strs[0].toLowerCase();
  }

  for (; i < len; i++) {
    str += strs[i].toLowerCase().replace(/^[a-z]/, function (value) {
      return value.toUpperCase();
    });
  }

  return str;
};

export default {
  input: './src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
    {
      file: pkg.unpkg,
      format: 'iife',
      sourcemap: true,
      name: toCamelCase(pkg.name, false),
    },
  ],
  external: [...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    commonjs({
      include: /node_modules/,
      requireReturnsDefault: 'auto', // <---- this solves default issue
    }),
    scss(),
    resolve(),
    typescript({ useTsconfigDeclarationDir: true }),
  ],
};
