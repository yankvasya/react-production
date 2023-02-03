import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {TBuildOptions} from "./types/config";

export const buildPlugins = ({paths}: TBuildOptions): webpack.WebpackPluginInstance[] => {
    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: paths.html
        })
    ]
}