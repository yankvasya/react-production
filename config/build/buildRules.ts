import {RuleSetRule} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {TBuildOptions} from "./types/config";

export const buildRules = (options: TBuildOptions): RuleSetRule[] => {
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
        ],
    }

    const typescriptRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        cssLoader,
        typescriptRule
    ]
}