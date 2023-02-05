import webpack from "webpack";
import {TBuildOptions} from "./types/config";
import {buildRules} from "./buildRules";
import {buildResolves} from "./buildResolves";
import {buildPlugins} from "./buildPlugins";
import {buildDevServer} from "./buildDevServer";

export const buildWebpackConfig = (options: TBuildOptions): webpack.Configuration => {
    const {paths,mode,isDev} = options
    return {
        mode,
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
        devtool: isDev && 'inline-source-map',
        devServer: isDev ? buildDevServer(options) : undefined
    }
}