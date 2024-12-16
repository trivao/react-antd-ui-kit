import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";

const config: StorybookConfig = {
    stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-webpack5-compiler-swc",
        "@storybook/addon-onboarding",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
    webpackFinal: async (config) => {
        config.module?.rules?.push({
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
            include: path.resolve(__dirname, "../src"),
        });

        return config;
    },
};
export default config;
