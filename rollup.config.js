import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import global from 'rollup-plugin-node-globals';
import { map, mapValues } from 'lodash';
import dotenv from 'dotenv';


dotenv.config();
const packages = require('./package.json');


console.log(process.env)

const { dependencies } = packages;
const INJECT_PROCESS_MODULE_ID = '\0inject-process';
const external = map(dependencies, (mod, key) => key);
const globals = Object.assign({}, mapValues(dependencies, (mod, key) => key), {http: 'http', fs: 'fs', path: 'path'});

export default {
    input: 'src/server.js',
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
        babel({
            exclude: 'node_modules/**'
        }),
        resolve(),
        commonjs(),
        global(),
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
