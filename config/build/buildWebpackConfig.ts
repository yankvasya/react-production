import webpack from "webpack";
import {TBuildOptions} from "./types/config";
import {buildRules} from "./buildRules";
import {buildResolves} from "./buildResolves";
import {buildPlugins} from "./buildPlugins";
import {buildDevServer} from "./buildDevServer";

export const buildWebpackConfig = (options: TBuildOptions): webpack.Configuration => {
    const {paths} = options
    return {
        mode: "development",
        entry: paths.entry,
        module: {
            rules: buildRules(),
        },
        resolve: buildResolves(),
        output: {
            filename: '[name].[contenthash].js',
            path: paths.output,
            clean: true
        },
        plugins: buildPlugins(options),
        devtool: 'inline-source-map',
        devServer: buildDevServer(options)
    }
}