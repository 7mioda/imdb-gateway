import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import builtins from 'rollup-plugin-node-globals';
import http from 'http';
import { map, mapValues } from 'lodash';

const packages = require('./package.json');

const { dependencies } = packages;

const external = map(dependencies, (mod, key) => key);
const globals = Object.assign({}, mapValues(dependencies, (mod, key) => key), {http: 'http', fs: 'fs', path: 'path'});

export default {
    input: 'src/server.js',
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
        resolve(),
        commonjs(),
        builtins(),
    ],
    output: {
        file: 'dist/bundle.js',
        format: 'umd',
        name: 'imdb-gateway',
        sourcemap: true,
        globals,
    },
    external: external,
};
