import {RuleSetRule} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildRules = (): RuleSetRule[] => {
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            MiniCssExtractPlugin.loader,
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