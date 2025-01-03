import styles from "rollup-plugin-styles";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import terser from "@rollup/plugin-terser";

const packageJson = require("./package.json");

export default {
    input: "src/index.ts",
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
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({ tsconfig: "./tsconfig.json" }),
        babel({
            exclude: "node_modules/**",
            presets: ["@babel/preset-react"],
            babelHelpers: "bundled",
        }),
        terser({
            compress: {
                drop_console: true,
                passes: 2,
            },
            mangle: {
                properties: {
                    regex: /^_/,
                },
            },
            output: {
                comments: false,
            },
        }),
        styles({ mode: "extract" }),
    ],
    external: Object.keys(packageJson.peerDependencies || {}),
    onwarn: (warning, warn) => {
        if (warning.code === "UNRESOLVED_IMPORT") return;
        warn(warning);
    },
};
