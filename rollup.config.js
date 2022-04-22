import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import commonjs from '@rollup/plugin-commonjs'
import sass from 'node-sass'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import packageJson from './package.json'
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import css from "rollup-plugin-import-css";

export default [
  {
    input: "src/components/index.js",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      babel({
        babelHelpers: "runtime",
        exclude: "**/node_modules/**",
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      }),
      typescript({ tsconfig: "./tsconfig.json" }),
      css()
    ],
  },
];